import React from 'react'
import {Header} from '../components'
import { GridComponent,ColumnsDirective,ColumnDirective, Page, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData,contextMenuItems,employeesGrid } from '../data/dummy'
const Employees = () => {
  return (
    <div className='bg-gray-50 m-2 md:m-10 p-2 md:p-10 rounded-3xl'>
      <Header category='Page' title='Employees'/>
      <GridComponent id="gridcomp" dataSource={employeesData} allowPaging allowSorting toolbar={['Search']}>
      <ColumnsDirective>
      {employeesGrid.map((item,index)=>{
        return <ColumnDirective key = {index} {...item}/>
      })}
      </ColumnsDirective>
      <Inject services={[ Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees