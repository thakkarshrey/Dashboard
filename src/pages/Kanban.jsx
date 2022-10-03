import React from 'react'
import { KanbanComponent,ColumnsDirective,ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { Header } from '../components'
import { kanbanData,kanbanGrid } from '../data/dummy'

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-gray-50'>
      <Header category="App" title="Kanban Board"/>
      <KanbanComponent dataSource={kanbanData} cardSettings={{headerField:'Id',contentField:'Summary'}} keyField='Status'>
        <ColumnsDirective>
        {kanbanGrid.map((item,index)=>{
          return <ColumnDirective key={index} {...item}/>
        })}
        </ColumnsDirective>
      </KanbanComponent>
      
    </div>
  )
}

export default Kanban