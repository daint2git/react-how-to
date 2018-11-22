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

const Row = () => (
  <div className={cssModules`row`}>
    <Column src={imgChania} />
    <Column src={imgNature} />
    <Column src={imgParis} />
    <Column src={imgWedding} />
  </div>
)

const Column = ({ src }) => (
  <div className={cssModules`column`}>
    <img src={src} alt="img" />
  </div>
)

const ResponsiveImageGridV2 = () => (
  <div className={cssModules`root`}>
    <Header />
    <Row />
    <Row />
    <Row />
  </div>
)

export default ResponsiveImageGridV2
