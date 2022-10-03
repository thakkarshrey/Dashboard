import React from 'react'
import {Header} from '../components'
import { GridComponent,ColumnsDirective,ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData,contextMenuItems,ordersGrid } from '../data/dummy'
const Orders = () => {
  return (
    <div className='bg-gray-50 m-2 md:m-10 p-2 md:p-10 rounded-3xl'>
      <Header category='Page' title='Orders'/>
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
      <ColumnsDirective>
      {ordersGrid.map((item,index)=>{
        return <ColumnDirective key = {index} {...item}/>
      })}
      </ColumnsDirective>
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Orders