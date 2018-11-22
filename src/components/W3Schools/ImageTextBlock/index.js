import imgNature from 'images/nature.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ImageTextBlock = () => (
  <div className={cssModules`card`}>
    <img className={cssModules`image`} src={imgNature} alt="nature" />
    <div className={cssModules`text-block`}>
      <h4>Nature</h4>
      <p>What a beautiful sunrise</p>
    </div>
  </div>
)

const ImagesTextBlock = () => (
  <div className={cssModules`root`}>
    <ImageTextBlock />
    <ImageTextBlock />
    <ImageTextBlock />
  </div>
)

export default ImagesTextBlock
