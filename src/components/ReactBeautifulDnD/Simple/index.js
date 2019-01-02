import React from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

import initialData from './initialData'
import Column from './Column'

const Container = styled.div`
  display: flex;
`

class Simple extends React.Component {
  state = initialData

  // start = {
  //   draggableId: 'task-1',
  //   type: 'DEFAULT',
  //   source: {
  //     droppableId: 'column-1',
  //     index: 0,
  //   },
  //   mode: 'FLUID',
  // }
  onDragStart = start => {
    // console.log(JSON.stringify(result, null, 2))
    document.body.style.color = 'orange'
    document.body.style.transition = 'background-color 0.2s ease'
    const { columnOrder } = this.state
    const homeIndex = columnOrder.indexOf(start.source.droppableId)
    this.setState({ homeIndex })
  }

  // update = {
  //   draggableId: 'task-1',
  //   type: 'DEFAULT',
  //   source: {
  //     droppableId: 'column-1',
  //     index: 0,
  //   },
  //   mode: 'FLUID',
  //   combine: null,
  //   destination: {
  //     droppableId: 'column-1',
  //     index: 3,
  //   },
  // }
  onDragUpdate = update => {
    // console.log(JSON.stringify(result, null, 2))
    const { destination } = update
    const { tasks } = this.state
    const opacity = destination ? destination.index / tasks.length : 0
    document.body.style.backgroundColor = `rgba(152, 141, 217, ${opacity})`
  }

  // result = {
  //   draggableId: 'task-1',
  //   type: 'DEFAULT',
  //   source: {
  //     droppableId: 'column-1',
  //     index: 0,
  //   },
  //   mode: 'FLUID',
  //   destination: {
  //     droppableId: 'column-1',
  //     index: 1,
  //   },
  //   combine: null,
  //   reason: 'DROP',
  // }
  onDragEnd = result => {
    // console.log(JSON.stringify(result, null, 2))
    document.body.style.color = 'inherit'
    document.body.style.backgroundColor = 'inherit'
    this.setState({ homeIndex: null })
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    const { columns } = this.state
    const startIndex = columns.findIndex(it => it.id === source.droppableId)
    const finishIndex = columns.findIndex(it => it.id === destination.droppableId)
    const start = columns[startIndex]
    const finish = columns[finishIndex]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      const newColumns = [...columns]
      newColumns.splice(startIndex, 1, newColumn)

      const newState = {
        ...this.state,
        columns: newColumns,
      }

      this.setState(newState)
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newColumns = [...columns]
    newColumns.splice(startIndex, 1, newStart)
    newColumns.splice(finishIndex, 1, newFinish)

    const newState = {
      ...this.state,
      columns: newColumns,
    }

    this.setState(newState)
  }

  render() {
    const { tasks, columns, columnOrder, homeIndex } = this.state
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {columnOrder.map((columnId, index) => {
            const column = columns.find(it => it.id === columnId)
            const columnTasks = column.taskIds.map(taskId => tasks.find(it => it.id === taskId))

            const isDropDisabled = index < homeIndex

            return (
              <Column
                key={column.id}
                column={column}
                tasks={columnTasks}
                isDropDisabled={isDropDisabled}
              />
            )
          })}
        </Container>
      </DragDropContext>
    )
  }
}

export default Simple
