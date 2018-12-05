import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgNature from 'images/nature.jpg'
import imgParis from 'images/paris.jpg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import { isOdd, reorder } from '../utils'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const dataGenerator = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: k + offset,
    content: `item ${k + offset}`,
  }))

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)
  destClone.splice(droppableDestination.index, 0, removed)
  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone
  return result
}

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

class SimpleDnDBetweenTwoLists extends React.Component {
  state = {
    items: dataGenerator(10),
    selected: dataGenerator(5, 10),
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable1: 'items',
    droppable2: 'selected',
  }

  getList = id => {
    const tempId = this.id2List[id]
    const { [tempId]: data } = this.state
    return data
  }

  onDragEnd = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      const items = reorder(this.getList(source.droppableId), source.index, destination.index)
      let state = { items }

      if (source.droppableId === 'droppable2') {
        state = { selected: items }
      }

      this.setState(state)
    } else {
      const tempResult = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination,
      )
      const state = {
        items: tempResult.droppable1,
        selected: tempResult.droppable2,
      }

      this.setState(state)
    }
  }

  render() {
    const { items, selected } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={cssModules`root`}>
          <h1>Demo</h1>
          <div className={cssModules`list-area`}>
            <Droppable droppableId="droppable1">
              {(provided, snapshot) => (
                <div
                  className={cssModules`list`}
                  data-is-dragging-over={snapshot.isDraggingOver}
                  ref={provided.innerRef}
                >
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
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div
                  className={cssModules`list`}
                  data-is-dragging-over={snapshot.isDraggingOver}
                  ref={provided.innerRef}
                >
                  {selected.map((item, index) => (
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
        </div>
      </DragDropContext>
    )
  }
}

export default SimpleDnDBetweenTwoLists
