import reactLogo from 'svg/react-logo.svg'
import webpackLogo from 'svg/webpack-logo.svg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './Root.scss'

const cssModules = cssModuleNameTag(styles)

const Root = () => (
  <div className={cssModules`root`}>
    <h1 className={cssModules`header`}>React Webpack Template</h1>
    <img className={cssModules`logo`} src={reactLogo} alt="react-logo" />
    <img className={cssModules`logo`} src={webpackLogo} alt="webpack-logo" />
    <p className={cssModules`text`}>Edit something and save to reload.</p>
  </div>
)

export default Root
