'use client'

import Image from "next/image";
import Link from 'next/link';
import { Icon } from "@iconify/react";
import TextInput from "../components/textInput";
import { SetStateAction, useState } from 'react';
import { useForm } from "react-hook-form"
import useStore from '../lib/store'
import { useRouter } from 'next/navigation';

function Invites() {
  
  const [email, setEmail] = useState('');

  const { invites, setInvites } = useStore();
  const { push } = useRouter();

  const {
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
    shouldFocusError: false,
    reValidateMode: 'onChange',
  })
  const onSubmit = () => {
    push('/pricing')
  }
  
  const addInvite = () => {
    setInvites([...invites, email])
    setEmail('')
  }

  const removeInvite = (email: string) => {
    const newInvites = invites.filter((invite) => invite !== email);
    setInvites(newInvites);    
  };

  const emailValid = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.length > 0 && pattern.test(email)
  }

  return (
    <div className="flex flex-col rounded-3xl shadow-lg max-w-[1000px] w-full mx-12 mt-4 mb-12 bg-card-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 pt-4 flex flex-grow flex-col items-start">
          <div className="text-3xl lg:text-4xl font-extrabold mt-6 mb-1">Invite team</div>
          <div className="text-md mb-6 -mt-2 text-secondary">Invite team members to the app</div>
          <TextInput value={email} onChange={(value: SetStateAction<string>) => setEmail(value)} autofocus={true} label="Email address" icon="mdi:at" placeholder="Email address" type="email" name="email" id="email" >
            <div className={emailValid() == false ? "opacity-30 border-none px-3 py-1 rounded-md font-medium text-on-dark bg-primary pointer-events-none" : "border-none px-3 py-1 rounded-md font-medium text-on-dark bg-primary cursor-pointer"} onClick={() => {addInvite()}} >
              Add
            </div>
          </TextInput>          
          <div className="flex flex-row gap-2 flex-wrap">
            {invites.map((invite) => (
              <div key={invite} className="flex flex-row items-center rounded-full px-3 text-xs text-on-dark py-1 border border-primary bg-primary/80">
                <div className="pointer-events-none truncate max-w-[128px]">
                  {invite}
                </div>
                <div onClick={() => {removeInvite(invite)}}>
                  <Icon icon="mdi:close" className="ml-2 cursor-pointer hover:text-on-dark" />
                </div>
              </div>              
            ))}
          </div>
          <div className="mt-auto mb-3"/>
          <div className="flex flex-row items-center w-full gap-2">
            <Link href="/company" className="flex flex-row w-50 items-center justify-center border border-primary px-3 py-3 rounded-md font-medium text-primary bg-none cursor-pointer">
              <div>Back</div>
            </Link>      
            <button type="submit" className="flex flex-row w-full items-center justify-center border-none px-3 py-3 rounded-md font-medium text-on-dark bg-primary cursor-pointer">
              Next
            </button>
          </div>          
        </form>   
        <div className="">
          <Image src="/invite.png" alt="Picture of the author" width={500} height={500} className="object-cover rounded-3xl" />
        </div>
      </div>   
    </div>    
  )
}

export default function Invite() {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-b from-background-from to-background-to">
      <Invites />
    </div>    
  )
}