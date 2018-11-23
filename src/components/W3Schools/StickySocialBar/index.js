import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from 'components/W3Schools/Paragraph'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const IconBar = () => (
  <div className={cssModules`icon-bar`}>
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={cssModules`facebook`}
    >
      <FontAwesomeIcon icon={['fab', 'facebook']} />
    </a>
    <a
      href="https://twitter.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={cssModules`twitter`}
    >
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>
    <a
      href="https://www.google.com.vn/"
      target="_blank"
      rel="noopener noreferrer"
      className={cssModules`google`}
    >
      <FontAwesomeIcon icon={['fab', 'google']} />
    </a>
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={cssModules`linkedin`}
    >
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>
    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={cssModules`youtube`}
    >
      <FontAwesomeIcon icon={['fab', 'youtube']} />
    </a>
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={cssModules`instagram`}
    >
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </a>
  </div>
)

const Content = () => (
  <div className={cssModules`content`}>
    <h1>Sticky Social Bar</h1>
    <p>The sticky social bar will stick to the screen when you scroll.</p>
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
  </div>
)

const StickySocialBar = () => (
  <div className={cssModules`root`}>
    <IconBar />
    <Content />
  </div>
)

export default StickySocialBar
