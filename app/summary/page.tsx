'use client'

import Image from "next/image";
import Link from 'next/link';
import { Icon } from "@iconify/react";
import TextInput from "../components/textInput";
import SelectMenu from "../components/selectMenu";
import Checkbox from "../components/checkbox"
import useStore from '../lib/store'
  
function Summary() {

  const { mailList, setMailList, terms, setTerms } = useStore();  
  const { name, email, password } = useStore();
  const { companyName, companyCategory, companySize, userRole } = useStore();
  const { invites } = useStore();
  const { pricingPlan } = useStore();

  const logResults = () => {
    console.log({
      name,
      email,
      password,
      userRole: userRole?.label,
      companyName,
      companyCategory: companyCategory?.label,
      companySize: companySize?.label,      
      invites,
      pricingPlan,
      mailList,
      terms
    })
  }
  
  return (
    <div className="flex flex-col rounded-3xl shadow-lg max-w-[1000px] w-full mx-12 mt-4 mb-12 bg-card-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 pt-4 flex flex-grow flex-col items-start">
          <div className="text-3xl lg:text-4xl font-extrabold mt-6 mb-1">Summary</div>
          <div className="text-md mb-6 -mt-2 text-secondary">Does everything look correct?</div>
          
          <div className="font-bold text-sm">Account details</div>
          <div className="rounded-lg w-full border p-2 mb-1 text-secondary border-secondary border-dashed text-sm grid grid-cols-2 min-h-[28px]">            
            <div>{name}</div>
            <div>{email}</div>          
            <div>{userRole?.label}</div>        
          </div>
          <div className="font-bold text-sm">Company details</div>
          <div className="rounded-lg w-full border p-2 mb-1 text-secondary border-secondary border-dashed text-sm grid grid-cols-2 min-h-[28px]">
            <div>{companyName}</div>
            <div>{companyCategory?.label}</div>            
            <div>{companySize?.label}</div>                        
            {invites.length > 0 && <div>{invites.length} members invited</div>}                        
          </div>
          <div className="font-bold text-sm">Plan</div>
          <div className="rounded-lg w-full border p-2 mb-1 text-secondary border-secondary border-dashed text-sm grid grid-cols-2 min-h-[28px]">
            <div className="capitalize">{pricingPlan} plan</div>
          </div>          
          <Checkbox label="Accept terms and conditions" id="terms" name="terms" value={terms} onChange={value => setTerms(value)}>
            Accept <Link href="/terms" target="_blank" className="text-primary underline">Terms and conditions</Link>
          </Checkbox>
          <Checkbox label="Add to mail list" id="mailList" name="mailList" value={mailList} onChange={value => setMailList(value)} />          
          <div className="mt-auto mb-3"/>
          <div className="flex flex-row items-center w-full gap-2">
            <Link href="/pricing" className="flex flex-row w-50 items-center justify-center border border-primary px-3 py-3 rounded-md font-medium text-primary bg-none cursor-pointer">
              <div>Back</div>
            </Link>      
            <div onClick={logResults} className="flex flex-row w-full items-center justify-center border-none px-3 py-3 rounded-md font-medium text-on-dark bg-primary cursor-pointer">
              <div>Create account</div>
            </div>      
          </div>          
        </div>   
        <div className="">
          <Image src="/checklist.png" alt="Picture of the author" width={500} height={500} className="object-cover rounded-3xl" />
        </div>
      </div>   
    </div>    
  )
}

export default function Invite() {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-b from-background-from to-background-to">
      <Summary />
    </div>    
  )
}