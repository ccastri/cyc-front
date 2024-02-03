import { 
  AccountBalanceWalletOutlined, 
  Diversity3Outlined, 
  ElderlyOutlined, 
  HealthAndSafetyOutlined, 
  LocalAtmOutlined,
   LocalHospital,
   MonetizationOnOutlined, 
   PaymentOutlined 
} from '@mui/icons-material';
import Image from 'next/image';
import { FC, MouseEventHandler, useState } from 'react'
interface Plan {
    title: string;
    firstMonthValue: string;
    icon: React.ReactNode; // Assuming you'll pass a Material-UI icon component
    savingsValue: string;
    bgImage:string;
    isNewClient:boolean;
  }
  export const plans:Plan[] = [
    {
      title: "Solo EPS",
      firstMonthValue: "$10",
      icon: <LocalHospital sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"basic.jpeg",
      isNewClient:false
    },
    {
      title: "EPS y ARL",
      firstMonthValue: "$20",
      icon: <HealthAndSafetyOutlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"basic.jpeg",
      isNewClient:false
    },
    {
      title: "EPS, ARL y Caja",
      firstMonthValue: "$30",
      icon: <Diversity3Outlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"basic.jpeg",
      isNewClient:false
    },
    {
      title: "Todos y Pension",
      firstMonthValue: "$20%",
      icon: <ElderlyOutlined sx={{ width: 60, height:60}} />,
      savingsValue: "30%",
      bgImage:"basic.jpeg",
      isNewClient:false
    }
  ];


const PlanCard: FC<Plan> = ({ title, firstMonthValue, icon, savingsValue, bgImage,  }) => {
  const scrollToSection = (id: string): MouseEventHandler<HTMLSpanElement> => {
    return (event) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      // Return void explicitly
      return;
    };
  };
  return (
    <div className="group h-auto z-30 flex items-center my-auto justify-center button-hovered shadow-lg border-2 text-center rounded-xl bg-slate-600  mx-auto ">
      
        <div className='w-full py-4 hover:z-20 px-16 relative  group-hover:bg-[#2E2E2]  h-auto border-2'>
      <Image className="absolute -z-10 opacity-60  rounded-xl " src={`/${bgImage}`} fill={true} alt=""/>
    <h3 className="text-xl text-[#E2E2E2]  font-semibold   mb-4">{title}</h3>
    <div className="flex flex-col opacity-100 items-center z-30 mb-4">
      <span className="mr-2 text-[#E2E2E2] ">Valor Primer Mes:</span>
      <span className="text-[#E2E2E2]  text-xl font-bold">{firstMonthValue}</span>
    </div>
    <div className="flex items-center group-hover:text-[#E2E2E2] justify-center mb-4">
      {icon}
    </div>
    <div className="flex flex-col items-center mb-4">
      <span className="mr-2 text-[#E2E2E2] text-lg font-semibold ">Total Ahorro:</span>
      <span className=" text-[#E2E2E2] h-6 text-xl  font-bold">{savingsValue}</span>
    </div>
    <div className='flex flex-col space-y-4'>

    <span  
    onClick={scrollToSection("new-client-form")}
    className='border-gray-900 border-2 hover:border-none bg-none opacity-80 z-40 px-4 py-3 text-[#E2E2E2] font-semibold rounded-full button-hovered hover:bg-green-500'>
      Quiero Afiliarme
    </span>
    <span className='border-gray-900 hover:border-none bg-gray-900 opacity-50 border-2 px-4 py-3  text-[#E2E2E2]  font-semibold rounded-full button-hovered hover:bg-green-500'>
      Más info
    </span>
    </div>
        </div>

        
  </div>
  )
}

export default PlanCard
