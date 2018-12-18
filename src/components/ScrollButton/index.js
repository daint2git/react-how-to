import React from 'react'
import arrowUp from 'svg/arrow-up.svg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

class ScrollButton extends React.Component {
  state = { isVisible: false }

  componentDidMount() {
    window.addEventListener('scroll', this.check)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.check)
  }

  check = () => this.setState({ isVisible: window.pageYOffset > window.innerHeight })

  rollup = () => window.scrollTo(0, 0)

  render() {
    const { isVisible } = this.state
    return (
      <div
        className={cssModules`root`}
        data-visible={isVisible}
        onScroll={this.check}
        onClick={this.rollup}
      >
        <img src={arrowUp} alt="arrow-up" />
      </div>
    )
  }
}

export default ScrollButton
