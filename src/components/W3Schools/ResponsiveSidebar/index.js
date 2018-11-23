import Paragraph from 'components/W3Schools/Paragraph'
import ResponsiveImageGridV2 from 'components/W3Schools/ResponsiveImageGridV2'
import menu from 'svg/menu.svg'
import weddingCouple0 from 'svg/wedding/wedding-couple_0.svg'
import weddingCouple1 from 'svg/wedding/wedding-couple_1.svg'
import weddingCouple2 from 'svg/wedding/wedding-couple_2.svg'
import weddingCouple3 from 'svg/wedding/wedding-couple_3.svg'
import weddingCouple4 from 'svg/wedding/wedding-couple_4.svg'
import weddingCouple5 from 'svg/wedding/wedding-couple_5.svg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const SVGIcon = ({ src }) => <img src={src} alt="icon" />

const ResponsiveSidebar = () => (
  <div className={cssModules`root`}>
    <a className={cssModules`sidebar-trigger`} href="#0">
      <span className={cssModules`icon`}>
        <SVGIcon src={menu} />
      </span>
    </a>
    <nav className={cssModules`sidebar-nav`}>
      <ul>
        <li>
          <a className={cssModules`sidebar-nav-link`} href="#0">
            <span className={cssModules`icon`}>
              <SVGIcon src={weddingCouple0} />
            </span>
            <span className={cssModules`text`}>Wedding 0</span>
          </a>
        </li>
        <li>
          <a className={cssModules`sidebar-nav-link`} href="#0">
            <span className={cssModules`icon`}>
              <SVGIcon src={weddingCouple1} />
            </span>
            <span className={cssModules`text`}>Wedding 1</span>
          </a>
        </li>
        <li>
          <a className={cssModules`sidebar-nav-link`} href="#0">
            <span className={cssModules`icon`}>
              <SVGIcon src={weddingCouple2} />
            </span>
            <span className={cssModules`text`}>Wedding 2</span>
          </a>
        </li>
        <li>
          <a className={cssModules`sidebar-nav-link`} href="#0">
            <span className={cssModules`icon`}>
              <SVGIcon src={weddingCouple3} />
            </span>
            <span className={cssModules`text`}>Wedding 3</span>
          </a>
        </li>
        <li>
          <a className={cssModules`sidebar-nav-link`} href="#0">
            <span className={cssModules`icon`}>
              <SVGIcon src={weddingCouple4} />
            </span>
            <span className={cssModules`text`}>Wedding 4</span>
          </a>
        </li>
        <li>
          <a className={cssModules`sidebar-nav-link`} href="#0">
            <span className={cssModules`icon`}>
              <SVGIcon src={weddingCouple5} />
            </span>
            <span className={cssModules`text`}>Wedding 5</span>
          </a>
        </li>
      </ul>
    </nav>
    <main className={cssModules`content`}>
      <h1>Full View, Please!</h1>
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <ResponsiveImageGridV2 />
    </main>
  </div>
)

export default ResponsiveSidebar
