'use client'

import Image from "next/image";
import Link from 'next/link';
import { useForm } from "react-hook-form"
import useStore from '../lib/store'
import { useRouter } from 'next/navigation';
import { ChangeEvent } from "react";

function SelectPlan() {

  const { pricingPlan, setPricingPlan } = useStore();
  const { push } = useRouter();

  const {
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
    shouldFocusError: false,
    reValidateMode: 'onChange',
  })
  const onSubmit = () => {
    push('/summary')
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked == true){
      setPricingPlan(event.target.id)
    }
  }

  return (
    <div className="flex flex-col rounded-3xl shadow-lg max-w-[1000px] w-full mx-12 mt-4 mb-12 bg-card-background">
      {/* <Heading /> */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 pt-4 flex flex-grow flex-col items-start">
          <div className="text-3xl lg:text-4xl font-extrabold mt-6 mb-1">Select your plan</div>
          <div className="text-md mb-6 -mt-2 text-secondary">Which plan is best for you?</div>
          <div className="flex flex-row items-center gap-2 w-full">
            <input type="radio" checked={pricingPlan == 'starter'} onChange={event => onChange(event)} className="w-6 h-6 accent-primary cursor-pointer" id="starter" name="starter"/>
            <div className="rounded-lg w-full border p-2 px-4 mb-1 border-input-focus text-sm flex flex-col cursor-pointer" onClick={() => {setPricingPlan('starter')}}>
              <div className="flex flex-row w-full grow items-center justify-between">
                <div className="font-bold text-lg">Starter</div>
                <div className="font-bold text-secondary">Free</div>
              </div>            
              <div>Single-member plans for personal projects, prototypes, or getting started.</div>
            </div>          
          </div>
          <div className="flex flex-row items-center gap-2 w-full">
            <input type="radio" checked={pricingPlan == 'pro'} onChange={event => onChange(event)} className="w-6 h-6 accent-primary cursor-pointer" id="pro" name="pro"/>
            <div className="rounded-lg w-full border p-2 px-4 mb-1 border-input-focus text-sm flex flex-col cursor-pointer" onClick={() => {setPricingPlan('pro')}}>
              <div className="flex flex-row w-full grow items-center justify-between">
                <div className="font-bold text-lg">Pro</div>
                <div className="font-bold text-secondary">$19/month</div>
              </div>
              <div>Team collaboration for professional web projects.</div>
            </div>          
          </div>
          <div className="flex flex-row items-center gap-2 w-full">
            <input type="radio" checked={pricingPlan == 'enterprise'} onChange={event => onChange(event)} className="w-6 h-6 accent-primary cursor-pointer" id="enterprise" name="enterprise"/>
            <div className="rounded-lg w-full border p-2 px-4 mb-1 border-input-focus text-sm flex flex-col cursor-pointer" onClick={() => {setPricingPlan('enterprise')}}>
              <div className="flex flex-row w-full grow items-center justify-between">
                <div className="font-bold text-lg">Enterprise</div>
                <div className="font-bold text-secondary">Custom</div>
              </div>
              <div>Control, compliance, and support for large scale organizations</div>
            </div>          
          </div>
          <div className="mt-auto mb-3"/>
          <div className="flex flex-row items-center w-full gap-2">
            <Link href="/invite" className="flex flex-row w-50 items-center justify-center border border-primary px-3 py-3 rounded-md font-medium text-primary bg-none cursor-pointer">
              <div>Back</div>
            </Link>      
            <button type="submit" className="flex flex-row w-full items-center justify-center border-none px-3 py-3 rounded-md font-medium text-on-dark bg-primary cursor-pointer">
              Next
            </button> 
          </div>          
        </form>   
        <div className="">
          <Image src="/puzzle.png" alt="Picture of the author" width={500} height={500} className="object-cover rounded-3xl" />
        </div>
      </div>   
    </div>    
  )
}

export default function Invite() {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-b from-background-from to-background-to">
      <SelectPlan />
    </div>    
  )
}