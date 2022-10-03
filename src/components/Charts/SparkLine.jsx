import React from 'react'
import { SparklineComponent,Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id,currentColor,color,height,width,data,type}) => {
  return (
      <SparklineComponent
      id={id}
      fill={color}
      width={width}
      height={height}
      lineWidth={1}
      border={{color:currentColor,width:2}}
      valueType='Numeric'
      tooltipSettings={{
        visible:true,
        format:'${x} : data ${yval}',
        trackLineSettings:{
          visible:true
        }
      }}
      xName='x'
      yName='yval'
      dataSource={data}
      type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
  )
}

export default SparkLine