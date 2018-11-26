import imgMountains from 'images/mountains.jpg'
import imgLights from 'images/lights.jpg'
import imgNature from 'images/nature.jpg'
import imgSnowWide from 'images/snow_wide.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Header = () => (
  <div className={cssModules`header`}>
    <h1>Responsive Image Grid V2</h1>
    <p>Resize the browser window to see the responsive effect.</p>
  </div>
)

const Row = () => (
  <div className={cssModules`row`}>
    <Column src={imgMountains} />
    <Column src={imgLights} />
    <Column src={imgNature} />
    <Column src={imgSnowWide} />
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
