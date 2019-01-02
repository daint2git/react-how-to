import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => {
    if (props.isDragDisabled) return 'lightgrey'
    if (props.isDragging) return 'lightgreen'
    return 'white'
  }};
  display: flex;
  align-items: center;
`

// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: orange;
//   border-radius: 4px;
//   margin-right: 8px;
// `

// const draggableSnapshot = {
//   isDragging: true,
//   draggingOver: 'column-1',
// }

const Task = ({ task, index }) => {
  const isDragDisabled = task.id === 'task-1'
  return (
    <Draggable draggableId={task.id} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
        >
          {/* <Handle {...provided.dragHandleProps} /> */}
          {task.content}
        </Container>
      )}
    </Draggable>
  )
}

export default Task
