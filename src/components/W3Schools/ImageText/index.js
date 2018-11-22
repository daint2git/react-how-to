import imgSnowWide from 'images/snow_wide.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ImageText = () => (
  <div className={cssModules`card`}>
    <img className={cssModules`image`} src={imgSnowWide} alt="snow_wide" />
    <div className={cssModules`bottom-left`}>Bottom Left</div>
    <div className={cssModules`top-left`}>Top Left</div>
    <div className={cssModules`top-right`}>Top Right</div>
    <div className={cssModules`bottom-right`}>Bottom Right</div>
    <div className={cssModules`centered`}>Centered</div>
  </div>
)

const ImagesText = () => (
  <div className={cssModules`root`}>
    <ImageText />
    <ImageText />
    <ImageText />
  </div>
)

export default ImagesText
