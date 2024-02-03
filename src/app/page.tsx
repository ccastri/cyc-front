'use client'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import HeroLanding from './_components/HeroLanding'
import HostNewClients from './_components/HostNewClients'
import Tutorial from './_components/Tutorial'
import About from './_components/About'
import ContactForm from './_components/ContactForm'
import PlanCard, { plans } from './_components/PlanCard'
import NewClientForm from './_components/NewClientForm'
import { useRouter } from 'next/navigation'
import ProductPage from './_components/ProductWeb'

const Page = () => {
  // const newClientPlans = plans.filter(plan => plan.isNewClient)[0];
  // console.log(newClientPlans)
  // const router=useRouter()
  // useEffect(() => {
  //   router.push('/auth');
  // }, []);
  return (
    <div id='landing' className='space-y-10   text-gray-900 bg-[#E2E2E2]  '>
      <HeroLanding/>
      <HostNewClients/>
      {/* <ProductPage/> */}
      <Tutorial/>
      <About/>
      <ContactForm/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  py-auto mx-auto">
          {plans.map((plan, index) => (<PlanCard key={index}  {...plan} />))}
        </div>
          <NewClientForm />
      

    </div>
  )
}

export default Page


