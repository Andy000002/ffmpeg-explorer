// Maps filter names to Chinese categories
// Filters not listed fall into "其他"

const VIDEO_CATEGORY_MAP = {
  色彩調整: [
    'chromahold','chromakey','chromanr','chromashift','colorbalance','colorchannelmixer',
    'colorcontrast','colorcorrect','colorhold','colorize','colorkey','colorlevels',
    'colormap','colormatrix','colorspace','colortemperature','curves','deband','despill',
    'elbg','eq','exposure','grayworld','greyedge','haldclut','histeq','hsvhold','hsvkey',
    'hue','huesaturation','lumakey','lut','lut1d','lut2','lut3d','lutrgb','lutyuv',
    'monochrome','negate','normalize','palettegen','paletteuse','pseudocolor','rgbashift',
    'selectivecolor','swapuv','tonemap','vibrance','dctdnoiz',
  ],
  縮放裁切: [
    'crop','cropdetect','pad','scale','scale2ref','setdar','setsar','tpad',
    'tile','untile','xstack','hstack','vstack','zoompan','aspect',
  ],
  模糊降噪: [
    'atadenoise','avgblur','bilateral','bm3d','boxblur','cas','dblur',
    'deblock','deflicker','fftdnoiz','fspp','gblur','gradfun','guided','hqdn3d',
    'median','nlmeans','owdenoise','pp','pp7','removegrain','sab','smartblur',
    'spp','unsharp','vaguedenoiser','varblur','w3fdif','yaepblur','fftfilt',
  ],
  幾何變形: [
    'hflip','vflip','perspective','rotate','shear','stereo3d','transpose',
    'v360','lenscorrection','il','separatefields','flip',
  ],
  疊加合成: [
    'alphamerge','alphaextract','blend','convolve','deconvolve','feedback',
    'framepack','freezeframes','hysteresis','identity','limitdiff','maskedclamp',
    'maskedmax','maskedmerge','maskedmin','maskedthreshold','maskfun','mergeplanes',
    'mix','morpho','multiply','overlay','premultiply','threshold','unpremultiply',
    'xcorrelate','xfade','tblend',
  ],
  文字字幕: [
    'ass','drawbox','drawgraph','drawgrid','drawtext','subtitles',
  ],
  時間速度: [
    'decimate','dejudder','detelecine','doubleweave','estdif','fade',
    'field','fieldhint','fieldmatch','fieldorder','fifo','framerate','framestep',
    'fps','interleave','kerndeint','loop','mestimate','minterpolate','mpdecimate',
    'nnedi','phase','pullup','realtime','repeatfields','reverse','segment',
    'select','setfield','setpts','settb','shuffleframes','telecine',
    'tinterlace','trim','weave','yadif','bwdif','w3fdif',
  ],
  特效: [
    'amplify','bitplanenoise','cellauto','cover_rect','deshake','displace',
    'dnn_processing','edgedetect','epx','fillborders','floodfill','find_rect',
    'geq','gradients','hqx','kirsch','lagfun','life','mandelbrot',
    'noise','oscilloscope','pixelize','pixscope','prewitt','random',
    'remap','removelogo','roberts','scroll','scharr','shufflepixels',
    'sierpinski','sobel','super2xsai','swaprect','vignette','xbr','sr',
    'derain','deflate','inflate','erosion','dilation',
  ],
  分析偵測: [
    'addroi','bbox','bench','blackdetect','blackframe','blockdetect','blurdetect',
    'ciescope','codecview','dnn_classify','dnn_detect','entropy','freezedetect',
    'graphmonitor','histogram','idet','latency','metadata','msad','perms',
    'photosensitivity','pixdesctest','psnr','readeia608','readvitc','scdet',
    'sendcmd','showinfo','showpalette','sidedata','signalstats','signature',
    'siti','ssim','thistogram','thumbnail','vectorscope','vfrdet','vif',
    'vmafmotion','waveform','datascope',
  ],
  來源: [
    'allrgb','allyuv','buffer','color','colorchart','colorspectrum',
    'haldclutsrc','mptestsrc','nullsrc','pal100bars','pal75bars',
    'rgbtestsrc','smptebars','smptehdbars','testsrc','testsrc2','yuvtestsrc',
  ],
};

const AUDIO_CATEGORY_MAP = {
  音量動態: [
    'acompressor','acontrast','acrusher','agate','alimiter','apsyclip',
    'asoftclip','compand','dynaudnorm','loudnorm','sidechaincompress','sidechaingate',
    'speechnorm','volume','apulsator','crystalizer',
  ],
  均衡濾波: [
    'allpass','bandpass','bandreject','bass','biquad','equalizer','firequalizer',
    'highpass','highshelf','lowpass','lowshelf','superequalizer','tiltshelf',
    'treble','anequalizer','adynamicequalizer','aiir','sinc','atilt',
  ],
  特效: [
    'aecho','aemphasis','aexciter','aphaser','aphaseshift','chorus','compensationdelay',
    'crossfeed','deesser','dialoguenhance','earwax','extrastereo','flanger',
    'haas','headphone','pan','stereotools','stereowiden','surround',
    'tremolo','vibrato','virtualbass','asubboost','asubcut','asupercut',
    'asuperpass','asuperstop','acrossfade','afreqshift',
  ],
  降噪處理: [
    'adeclick','adeclip','adecorrelate','afftdn','afwtdn','anlmdn','anlmf',
    'anlms','arnndn','dcshift','adenorm',
  ],
  時間速度: [
    'adelay','afade','afifo','aloop','apad','areverse','aresample',
    'asetnsamples','asetpts','asetrate','asettb','atempo','atrim',
    'acue','aintegral','aderivative',
  ],
  視覺化: [
    'abitscope','adrawgraph','agraphmonitor','ahistogram','avectorscope',
    'showcqt','showfreqs','showspatial','showspectrum','showspectrumpic',
    'showvolume','showwaves','showwavespic','aphasemeter',
  ],
  分析偵測: [
    'abench','astats','aspectralstats','drmeter','ebur128','replaygain',
    'silencedetect','silenceremove','volumedetect','ashowinfo','alatency',
    'ametadata','aperms','asidedata','adynamicsmooth',
  ],
  來源: [
    'aevalsrc','afirsrc','anoisesrc','anullsrc','hilbert','sinc','sine',
  ],
};

export function getVideoCategory(filterName) {
  for (const [cat, names] of Object.entries(VIDEO_CATEGORY_MAP)) {
    if (names.includes(filterName)) return cat;
  }
  return '其他';
}

export function getAudioCategory(filterName) {
  for (const [cat, names] of Object.entries(AUDIO_CATEGORY_MAP)) {
    if (names.includes(filterName)) return cat;
  }
  return '其他';
}

export const VIDEO_CATEGORIES = ['全部', ...Object.keys(VIDEO_CATEGORY_MAP), '其他'];
export const AUDIO_CATEGORIES = ['全部', ...Object.keys(AUDIO_CATEGORY_MAP), '其他'];
