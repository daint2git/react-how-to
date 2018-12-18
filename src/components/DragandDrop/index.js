import React from 'react'

import wedding from 'images/wedding.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Card = props => (
  <div className={cssModules`card`} {...props}>
    <img src={wedding} alt="wedding" />
    <div className={cssModules`container`}>
      <h4>
        <b>John Doe</b>
      </h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
)

class DragandDrop extends React.Component {
  state = { item: true }

  allowDrop = e => {
    console.log('allowDrop')
    e.preventDefault()
  }

  onDragStart = e => {
    console.log('onDragStart')
    e.dataTransfer.setData('item', e.target.id)
  }

  onDrop = e => {
    console.log('onDrop')
    e.preventDefault()
    this.setState(prevState => ({ item: !prevState.item }))
  }

  render() {
    const { item } = this.state
    return (
      <div className={cssModules`root`}>
        <div
          id="div1"
          onDrop={this.onDrop}
          onDragOver={this.allowDrop}
          style={{ width: '40%', height: 500, backgroundColor: 'yellow' }}
        >
          {item && <Card draggable onDragStart={this.onDragStart} id="drag1" />}
        </div>
        <div
          id="div2"
          onDrop={this.onDrop}
          onDragOver={this.allowDrop}
          style={{ width: '40%', height: 500, backgroundColor: 'aqua' }}
        >
          {!item && <Card draggable onDragStart={this.onDragStart} id="drag1" />}
        </div>
      </div>
    )
  }
}

export default DragandDrop
