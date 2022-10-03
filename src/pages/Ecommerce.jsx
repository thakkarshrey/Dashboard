import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked, Pie,Button,SparkLine} from '../components'
import { earningData,SparklineAreaData,ecomPieChartDat } from '../data/dummy'
const Ecommerce = () => {   
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-no-repeat bg-cover bg-center pt-9 m-3  p-8 rounded-xl dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-full bg-gray-100'>
        <div className='flex justify-between items-center'>
        <div>
          <p className='font-bold text-gray-400'>Earnings</p>
          <p className='text-2xl'>$63,456</p>
        </div>
        </div>
         <div className='mt-6'>
           <Button
           color='white'
           bgColor='blue'
           text='Download'
           size='md'
           borderRadius='10px'
           />
         </div>
        </div> 
        <div className='flex justify-center w-auto items-center m-3 gap-3 w-full'>
          {earningData.map(item=>{
            return <div key={item.title} className='bg-gray-100 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{color:item.iconColor,backgroundColor:item.iconBg}} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
              {item.icon}</button>
            <p className='p-2'>
            <span className='text-lg font-semibold'>{item.amount}</span>
            <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
            </p>
            <p className='text-sm mt-1 ml-2 text-gray-400'>{item.title}</p>
            </div>
          })}
        </div>
      </div>
     <div className='flex gap-10 justify-center'>
       <div className='bg-gray-100 md:w-780 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl'>
         <div className='flex justify-between'>
           <p className='font-semibold text-xl'>
             Revenue Updates
           </p>
           <div className='flex items-center gap-4'>
           <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
             <span><GoPrimitiveDot/></span>
             <span>Expense</span>
          </p>
          <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
             <span><GoPrimitiveDot/></span>
             <span>Budget</span>
          </p>
           </div>
         </div>
         <div className='flex justify-center mt-10 gap-10'>
           <div className='border-r-1 border-color pr-10 m-4'>
             <div>
               <p>
                 <span className='text-3xl font-semibold cursor-pointer'>
                   $93,438
                 </span>
                 <span className='bg-green-400 p-2 rounded-full text-white hover:drop-shadow-xl cursor-pointer text-xs ml-3'>23%</span>
                 <p className='text-gray-500 mt-1'>Budget</p>
               </p>
             </div>
             <div className='pt-8'>
               <p>
                 <span className='text-3xl font-semibold cursor-pointer'>
                   $48,487
                 </span>
                 <p className='text-gray-500 mt-1'>Expense</p>
               </p>
             </div>
             <div className='mt-5'>
              <SparkLine
              currentColor="blue"
              id="line-sparkline"
              color="blue"
              type="Line"
              height="80px"
              width="250px"
              data={SparklineAreaData}
             />
             </div>
             <div className='mt-10'>
               <Button color='white' bgColor='blue' borderRadius='10px' text='Download Report'/>
             </div>
           </div>
           <div>
             <Stacked width='320px' height='360px'/>
           </div>
         </div>
       </div>
     </div>
      
    </div>
  )
}

export default Ecommerce