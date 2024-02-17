import { ArrowDropDown, ArrowDropUp, ReportOffOutlined } from '@mui/icons-material'
import React from 'react'
import OverlappedBarChart from './OverlappedBarChart'
import CircularProgressBar from './ProgressBar'

const Dashboard = () => {
  const moneySpentData = [1000000, 500000, 250000, 300000]; // Example data for money spent

  const montlyBilling = [10, 2, 4, 5,]
  return (
    <div className=' space-y-8 p-8'>
            <div className='grid gap-8 grid-cols-4'>

<div className='grid grid-cols-2 gap-4 mx-auto w-full '>
  <h2 className='text-xl font-bold'>Cantidad de Afiliados en Mora por EPS</h2> <span className='text-green-800 underline cursor-pointer'>ver todo</span>
  <span className='px-6 py-4 border-2 border-green-700 rounded-lg text-center'>Por Nombre</span> <span className='px-6 py-4 border-2  rounded-lg text-center'>Por Monto</span>
  <p>SOS</p> <span className=''>COP $750000 <ArrowDropUp className=' text-green-500'/></span>
  <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
  <p>Sura</p>  <span className=''>COP $100000  <ArrowDropDown className='text-red-500'/></span>
  <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
  <p>Famisalud</p> <span className=''>COP $243136 <ArrowDropUp className='text-green-500'/></span>
  <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
  <p>Nueva EPS</p> <span className=''>COP $215000<ArrowDropUp className='text-green-500'/></span>
  <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
</div>

<div className='col-span-2'>
  <div className='flex justify-between'>
  <h1 className='col-span-1 text-3xl font-bold'>Balance Mensual de cartera</h1> <span className='col-span-1 text-green-700 font-semibold'>+$3,227,222 COP</span>
  </div>
  <OverlappedBarChart data={moneySpentData} />
</div>

<div>
<CircularProgressBar
  title='Cantidad de Afiliados a ARL por riesgo'
  data={{
    labels: ["R1", "R2", "R3", "R4", "R5"],
    values: [20, 30, 50, 85, 6],
    bgColors: ["#333333", "#778899", "#4682B4", "#A9A9A9", "#8B4513"],
  }}
circleWidth={30}
/>
</div>
</div>


<div className='grid grid-cols-6 mx-auto max-w-6xl '>
<div className='px-4 '>
<CircularProgressBar
  title='Balance Financiero del mes'
  data={{
    labels: ["Cartera Causada", "Cartera en Mora", "Cartera pendiente", ],
    values: [70, 30, 120],
    bgColors: [ "#778899", "#4682B4", "#A9A9A9", ],
  }}
circleWidth={70}
/>
</div>


<div className=' border-x-2 gap-8 grid grid-cols-2 items-center w-full   col-span-3 mx-auto  '>
  {/* #778899", "#4682B4", "#A9A9A9 */}
<h2 className='text-3xl w-full flex justify-between font-bold'>Listado de Cartera Pendiente</h2> <span className='text-green-800 underline cursor-pointer '>ver todo</span>
  <div
  className='flex items-center w-full justify-center'><p>Afiliado en Mora</p> <span>Plan</span></div> <span className=' flex items-center '>$12332 <div className='bg-[#778899] w-3 rounded-full ml-8 h-3'/></span>
  <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
  <div className='flex items-center  justify-center'><p>Afiliado en Mora</p> <span>Plan</span></div>  <span className=' flex items-center '>$12332 <div className='bg-[#778899] w-3 rounded-full ml-8 h-3'/></span>
  <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
  <div className='flex items-center  justify-center'><p>Afiliado pendiente</p> <span>Plan</span></div> <span className='flex items-center'>$12332 <div className='bg-[#A9A9A9]   w-3  rounded-full ml-8 h-3'/></span>
  <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
  <div className='flex items-center  justify-center'><p>Afiliado pediente</p> <span>Plan</span></div> <span className='flex items-center'>$12332 <div className=' bg-[#A9A9A9] w-3 rounded-full ml-8 h-3'/></span>
  {/* <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/> */}
</div>


<div className='col-span-2'>
  <h2 className='text-3xl font-bold'>Notificaciones</h2>
  <div className='grid grid-cols-6 border-2 py-4 px-8 rounded-xl '>
 <ReportOffOutlined/><div className='col-span-4'><h2 className='text-base font-semibold'>Reporte de Cartera</h2></div>
  <>x</>
  <div></div>
  <p className='text-sm col-span-4 pl-2 pb-2'>Crear un reporte de cartera vencida Ahora</p>
  <div></div>
  <div></div>
  <span className='col-span-3 px-6 py-2 border-2 bg-green-600 w-40 rounded-xl text-center text-[#e2e2e2] flex'>Añadir reporte</span>
  </div>


  <div className='grid grid-cols-6 border-2 py-4 px-8 rounded-xl '>
 <ReportOffOutlined/><div className='col-span-4'><h2 className='text-base font-semibold'>Envios de planillas</h2></div>
  <>x</>
  <div></div>
  <p className='text-sm col-span-4 pl-2 pb-2'>Envia reportes individuales o a un grupo de afiliados</p>
  <div></div>
  <div></div>
  <span className='col-span-3 px-6 py-2 border-2 bg-green-600 w-40 rounded-xl text-center text-[#e2e2e2] flex'>Ver reportes</span>
  </div>

 
</div>
</div>

{/* <div>
  <OverlappedBarChart data ={montlyBilling} />
</div> */}
    </div>
  )
}

export default Dashboard
