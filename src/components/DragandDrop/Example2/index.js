import React from 'react'

import wedding from 'images/wedding.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Card = ({ name, tech, ...rest }) => (
  <div className={cssModules`card`} {...rest}>
    <img src={wedding} alt="wedding" />
    <div className={cssModules`container`}>
      <h4>
        <b>{name}</b>
      </h4>
      <p>{tech}</p>
    </div>
  </div>
)

class DragandDrop extends React.Component {
  state = {
    list: {
      list1: [
        {
          name: 'Dai 1',
          tech: 'js',
        },
        {
          name: 'Dai 2',
          tech: 'java',
        },
        {
          name: 'Dai 3',
          tech: 'html & css',
        },
      ],
      list2: [
        {
          name: 'Dai 4',
          tech: 'js',
        },
        {
          name: 'Dai 5',
          tech: 'java',
        },
        {
          name: 'Dai 6',
          tech: 'html & css',
        },
      ],
      list3: [
        {
          name: 'Dai 7',
          tech: 'js',
        },
        {
          name: 'Dai 8',
          tech: 'java',
        },
        {
          name: 'Dai 9',
          tech: 'html & css',
        },
      ],
    },
  }

  div1Ref = React.createRef()

  div2Ref = React.createRef()

  div3Ref = React.createRef()

  onDragOver = e => {
    console.log('allowDrop')
    e.preventDefault()
  }

  onDragStart = (e, index) => {
    console.log('onDragStart', index)
    e.dataTransfer.setData('index', index)
  }

  onDrop = (e, source) => {
    console.log('onDrop')
    e.preventDefault()
    const index = e.dataTransfer.getData('index')

    const {
      list: { list1, list2 },
    } = this.state

    if (source === 'list1') {
      console.log('1')
      const list1Clone = [...list1]
      const list2Clone = [...list2]
      const [removed] = list2Clone.splice(index, 1)
      list1Clone.push(removed)
      this.setState({
        list: {
          list1: list1Clone,
          list2: list2Clone,
        },
      })
    }
    if (source === 'list2') {
      console.log('2')
      const list1Clone = [...list1]
      const list2Clone = [...list2]
      const [removed] = list1Clone.splice(index, 1)
      list2Clone.push(removed)
      this.setState({
        list: {
          list1: list1Clone,
          list2: list2Clone,
        },
      })
    }
  }

  render() {
    const { list } = this.state
    return (
      <div className={cssModules`root`}>
        <div
          id="1"
          onDrop={e => this.onDrop(e, 'list1')}
          onDragOver={this.onDragOver}
          style={{ width: '25%', backgroundColor: 'yellow' }}
          ref={this.div1Ref}
        >
          {list.list1.map((item, index) => (
            <Card
              key={item.name}
              draggable
              index={index}
              onDragStart={e => this.onDragStart(e, index)}
              {...item}
            />
          ))}
        </div>
        <div
          id="2"
          onDrop={e => this.onDrop(e, 'list2')}
          onDragOver={this.onDragOver}
          style={{ width: '25%', backgroundColor: 'aqua' }}
          onClick={this.handeClick}
          ref={this.div2Ref}
        >
          {list.list2.map((item, index) => (
            <Card
              key={item.name}
              draggable
              index={index}
              onDragStart={e => this.onDragStart(e, index)}
              {...item}
            />
          ))}
        </div>
        <div
          id="3"
          onDrop={e => this.onDrop(e, 'list3')}
          onDragOver={this.onDragOver}
          style={{ width: '25%', backgroundColor: 'aqua' }}
          ref={this.div3Ref}
        >
          {list.list3.map((item, index) => (
            <Card
              key={item.name}
              draggable
              index={index}
              onDragStart={e => this.onDragStart(e, index)}
              {...item}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default DragandDrop
