import ResponsiveParagraph from 'components/W3Schools/ResponsiveParagraph'
import ResponsiveImageGridV3 from 'components/W3Schools/ResponsiveImageGridV3'
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

const ItemLink = ({ src, label }) => (
  <li>
    <a className={cssModules`sidebar-nav-link`} href="#0">
      <span className={cssModules`icon`}>
        <SVGIcon src={src} />
      </span>
      <span className={cssModules`label`}>{label}</span>
    </a>
  </li>
)

const ResponsiveSidebar = () => (
  <div className={cssModules`root`}>
    <a className={cssModules`sidebar-trigger`} href="#0">
      <span className={cssModules`icon`}>
        <SVGIcon src={menu} />
      </span>
    </a>
    <nav className={cssModules`sidebar-nav`}>
      <ul>
        <ItemLink src={weddingCouple0} label="Wedding 0" />
        <ItemLink src={weddingCouple1} label="Wedding 1" />
        <ItemLink src={weddingCouple2} label="Wedding 2" />
        <ItemLink src={weddingCouple3} label="Wedding 3" />
        <ItemLink src={weddingCouple4} label="Wedding 4" />
        <ItemLink src={weddingCouple5} label="Wedding 5" />
      </ul>
    </nav>
    <main className={cssModules`content`}>
      <h1>Full View, Please!</h1>
      <ResponsiveParagraph />
      <ResponsiveParagraph />
      <ResponsiveParagraph />
      <ResponsiveImageGridV3 />
    </main>
  </div>
)

export default ResponsiveSidebar
