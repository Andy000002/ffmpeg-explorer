<script>
  import uFuzzy from "@leeoniya/ufuzzy";
  import FILTERS from "./filters.json";
  import { addNode } from "./stores.js";
  import {
    getVideoCategory,
    getAudioCategory,
    VIDEO_CATEGORIES,
    AUDIO_CATEGORIES,
  } from "./filterCategories.js";

  export let select = "video";
  let q = "";
  let activeCategory = "全部";

  $: categories = select === "video" ? VIDEO_CATEGORIES : AUDIO_CATEGORIES;
  $: select, (activeCategory = "全部");
  $: baseFilters = selectFilters(select);
  $: categoryFilters = filterByCategory(baseFilters, activeCategory, select);
  $: allfilters = applySearch(categoryFilters, q);

  const uf = new uFuzzy();

  function selectFilters(sel) {
    if (sel === "video") {
      return FILTERS.filter((f) => f.type[0] === "V" || f.type === "N->V");
    } else if (sel === "audio") {
      return FILTERS.filter((f) => f.type[0] === "A" || f.type === "N->A");
    }
    return [...FILTERS];
  }

  function filterByCategory(filters, cat, sel) {
    if (cat === "全部") return filters;
    const getCategory = sel === "video" ? getVideoCategory : getAudioCategory;
    return filters.filter((f) => getCategory(f.name) === cat);
  }

  function applySearch(filters, query) {
    if (!query.trim()) return filters;
    const [idxs] = uf.search(
      filters.map((m) => m.name + " " + m.description),
      query
    );
    if (idxs) return idxs.map((i) => filters[i]);
    return filters;
  }

  function add(f) {
    addNode(f, "filter");
  }
</script>

<div class="holder">
  <div class="search">
    <input
      placeholder="搜尋 Filter"
      bind:value={q}
      type="text"
    />
    {#if q}
      <button on:click={() => (q = "")}>✕</button>
    {/if}
    <select
      on:change={() => (activeCategory = "全部")}
      bind:value={select}
    >
      <option value="video">影像 Filters</option>
      <option value="audio">音訊 Filters</option>
    </select>
  </div>

  <div class="categories">
    {#each categories as cat}
      <button
        class="cat-btn"
        class:active={activeCategory === cat}
        on:click={() => (activeCategory = cat)}
      >
        {cat}
      </button>
    {/each}
  </div>

  <div class="all-filters">
    {#each allfilters as f}
      <div class="filter" on:click={() => add(f)}>
        <div class="name">
          {f.name}
          <span class="type">{f.type.replace("->", "⇒")}</span>
        </div>
        <div class="desc">{f.description}</div>
      </div>
    {:else}
      <div class="empty">沒有符合的 filter</div>
    {/each}
  </div>
</div>

<style>
  .holder {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    border: 1px solid var(--b1);
  }
  .search {
    display: flex;
    justify-content: stretch;
    gap: 2px;
    margin-bottom: 6px;
  }
  input {
    width: 100%;
    flex: 1;
  }
  button {
    margin-left: 1px;
  }
  select {
    margin-left: 4px;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 8px;
  }

  .cat-btn {
    font-size: 0.75em;
    padding: 2px 7px;
    border: 1px solid var(--b1);
    background: #fff;
    cursor: pointer;
    border-radius: 3px;
    margin: 0;
    white-space: nowrap;
  }

  .cat-btn.active {
    background: #333;
    color: #fff;
    border-color: #333;
  }

  .cat-btn:hover:not(.active) {
    background: var(--b2);
  }

  .type {
    color: #999;
    font-size: 0.8em;
  }

  .filter {
    border-bottom: 1px solid var(--b1);
    padding: 10px 0px;
    cursor: pointer;
  }

  .filter:hover {
    background-color: var(--b2);
  }

  .all-filters {
    flex: 1;
    overflow: scroll;
  }

  .desc {
    font-size: 0.9em;
  }

  .empty {
    color: #999;
    padding: 10px 0;
    font-size: 0.9em;
  }
</style>
