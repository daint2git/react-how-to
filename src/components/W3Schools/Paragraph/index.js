import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Paragraph = () => (
  <p className={cssModules`root`}>
    Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
    concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
    evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
    molestiae voluptatibus.
  </p>
)

export default Paragraph
