import Lazyload from 'react-lazyload'
import imgMountains from 'images/mountains.jpg'
import imgLights from 'images/lights.jpg'
import imgNature from 'images/nature.jpg'
import imgSnowWide from 'images/snow_wide.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const WithImage = () => (
  <div className={cssModules`root`}>
    <Lazyload height={200} throttle={100} once>
      <img src={imgMountains} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgLights} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgNature} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgSnowWide} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgMountains} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgLights} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgNature} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgSnowWide} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgMountains} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgLights} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgNature} alt="default-img" />
    </Lazyload>
    <Lazyload height={200} throttle={100} once>
      <img src={imgSnowWide} alt="default-img" />
    </Lazyload>
  </div>
)

export default WithImage
