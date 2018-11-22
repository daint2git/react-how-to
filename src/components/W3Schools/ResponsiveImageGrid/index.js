import imgChania from 'images/chania.jpg'
import imgNature from 'images/nature.jpg'
import imgParis from 'images/paris.jpg'
import imgWedding from 'images/wedding.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Header = () => (
  <div className={cssModules`header`}>
    <h1>Responsive Image Grid</h1>
    <p>Resize the browser window to see the responsive effect.</p>
  </div>
)

const Column = () => (
  <div className={cssModules`column`}>
    <Image src={imgChania} />
    <Image src={imgNature} />
    <Image src={imgParis} />
    <Image src={imgWedding} />
  </div>
)

const Image = ({ src }) => (
  <div className={cssModules`image`}>
    <img src={src} alt="wedding" />
  </div>
)

const ResponsiveImageGrid = () => (
  <div className={cssModules`root`}>
    <Header />
    <div className={cssModules`row`}>
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  </div>
)

export default ResponsiveImageGrid
