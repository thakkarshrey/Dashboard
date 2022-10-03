import React from 'react'
import {Header} from '../components'
import { GridComponent,ColumnsDirective,ColumnDirective, Sort, Edit, Selection, Filter, Page, Toolbar, Inject } from '@syncfusion/ej2-react-grids'
import { customersData,contextMenuItems,customersGrid } from '../data/dummy'
const Customers = () => {
  return (
    <div className='bg-gray-50 m-2 md:m-10 p-2 md:p-10 rounded-3xl'>
      <Header category='Page' title='Customers'/>
      <GridComponent id="gridcomp" dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} editSettings={{allowEditing:true, allowDeleting:true}}>
      <ColumnsDirective>
      {customersGrid.map((item,index)=>{
        return <ColumnDirective key = {index} {...item}/>
      })}
      </ColumnsDirective>
      <Inject services={[ Page, Toolbar, Sort, Edit, Selection, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers