import imgMountains from 'images/mountains.jpg'
import imgLights from 'images/lights.jpg'
import imgNature from 'images/nature.jpg'
import imgSnowWide from 'images/snow_wide.jpg'
import ResponsiveParagraph from 'components/W3Schools/ResponsiveParagraph'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Header = () => (
  <div className={cssModules`header`}>
    <h1>Responsive Image Grid V3</h1>
    <ResponsiveParagraph>
      Resize the browser window to see the responsive effect.
    </ResponsiveParagraph>
  </div>
)

const Images = () => (
  <div className={cssModules`images`}>
    <Image src={imgMountains} />
    <Image src={imgLights} />
    <Image src={imgNature} />
    <Image src={imgSnowWide} />
    <Image src={imgMountains} />
    <Image src={imgLights} />
    <Image src={imgNature} />
    <Image src={imgSnowWide} />
    <Image src={imgMountains} />
    <Image src={imgLights} />
    <Image src={imgNature} />
  </div>
)

const Image = ({ src }) => (
  <div className={cssModules`image`}>
    <img src={src} alt="img" />
  </div>
)

const ResponsiveImageGridV3 = () => (
  <div className={cssModules`root`}>
    <Header />
    <Images />
  </div>
)

export default ResponsiveImageGridV3
