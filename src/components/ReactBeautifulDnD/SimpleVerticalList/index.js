import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgNature from 'images/nature.jpg'
import imgParis from 'images/paris.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import { isOdd, reorder, dataGenerator } from '../utils'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Item = ({ status, id, content, itemRef, ...rest }) => (
  <div className={cssModules`item`} ref={itemRef} {...rest}>
    <span data-color={isOdd(status)}>status {status}</span>
    <p>Content: {content}</p>
    <div className={cssModules`footer-of-item`}>
      <div className={cssModules`icon`}>
        <FontAwesomeIcon icon={['far', 'eye']} />
        <span className={cssModules`comment-icon`}>
          <FontAwesomeIcon icon={['far', 'comment']} />
          <span>{id}</span>
        </span>
      </div>
      <div className={cssModules`image`}>
        <img src={imgNature} alt="nature" />
        {isOdd(status) && <img src={imgParis} alt="paris" />}
      </div>
    </div>
  </div>
)

class SimpleVerticalList extends React.Component {
  state = { items: dataGenerator(10) }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) return
    const { items } = this.state
    const newItems = reorder(items, result.source.index, result.destination.index)
    this.setState({ items: newItems })
  }

  render() {
    const { items } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={cssModules`root`}>
          <Droppable droppableId="droppableId">
            {(provided, snapshot) => (
              <div
                className={cssModules`list`}
                data-is-dragging-over={snapshot.isDraggingOver}
                ref={provided.innerRef}
              >
                <h1>Demo</h1>
                {items.map((item, index) => (
                  <Draggable
                    key={`key ${item.id}`}
                    draggableId={`draggableId ${item.id}`}
                    index={index}
                  >
                    {(providedItem, snapshotItem) => (
                      <Item
                        className={cssModules`item`}
                        data-is-dragging={snapshotItem.isDragging}
                        style={providedItem.draggableProps.style}
                        itemRef={providedItem.innerRef}
                        {...providedItem.draggableProps}
                        {...providedItem.dragHandleProps}
                        status={item.id}
                        id={item.id}
                        content={item.content}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    )
  }
}

export default SimpleVerticalList
