import React from 'react'
import { ChartComponent,Tooltip,Legend,Category,SeriesCollectionDirective,SeriesDirective,Inject,StackingColumnSeries } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({width,height}) => {
  return (
      <ChartComponent width={width} height={height} id='charts' background='#f3f4f6' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} tooltip={{enable:true}} chartArea={{border:{width:0}}}>
      <Inject services={[StackingColumnSeries,Tooltip,Legend,Category]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=>{
          return <SeriesDirective key={index} {...item} />
        })}
      </SeriesCollectionDirective>
      </ChartComponent>
  )
}

export default Stacked