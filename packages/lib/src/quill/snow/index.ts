import DefaultQuill from 'quill'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import './style/fix.scss'

const AlignClass = DefaultQuill.import('attributors/class/align')
const BackgroundClass = DefaultQuill.import('attributors/class/background')
const ColorClass = DefaultQuill.import('attributors/class/color')
// const DirectionClass = DefaultQuill.import('attributors/class/direction');
const FontClass = DefaultQuill.import('attributors/class/font')
const SizeClass = DefaultQuill.import('attributors/class/size')
const AlignStyle = DefaultQuill.import('attributors/style/align')
const BackgroundStyle = DefaultQuill.import('attributors/style/background')
const ColorStyle = DefaultQuill.import('attributors/style/color')
// const DirectionStyle = DefaultQuill.import('attributors/style/direction');
const FontStyle = DefaultQuill.import('attributors/style/font')
const SizeStyle = DefaultQuill.import('attributors/style/size')

FontStyle.whitelist = [
  "'Microsoft Yahei', 'PingFang SC', 'Source Han Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "'SimSun', 'STSong', 'Source Han Serif SC', 'Georgia', serif",
  '楷体,楷体_GB2312',
  'Yuanti SC,YouYuan',
  'STFangsong,FangSong',
  'Consolas,monospace',
]
SizeStyle.whitelist = [
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '30px',
  '36px',
  '48px',
  '56px',
  '64px',
]

DefaultQuill.register(AlignClass, true)
DefaultQuill.register(BackgroundClass, true)
DefaultQuill.register(ColorClass, true)
// DefaultQuill.register(DirectionClass, true);
DefaultQuill.register(FontClass, true)
DefaultQuill.register(SizeClass, true)
DefaultQuill.register(AlignStyle, true)
DefaultQuill.register(BackgroundStyle, true)
DefaultQuill.register(ColorStyle, true)
// DefaultQuill.register(DirectionStyle, true);
DefaultQuill.register(FontStyle, true)
DefaultQuill.register(SizeStyle, true)

export default DefaultQuill
