import imgChania from 'images/chania.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ResponsiveImage = () => (
  <img
    className={cssModules`image`}
    src={imgChania}
    alt="img_chania"
    width="800"
    height="800"
  />
)

export default ResponsiveImage
