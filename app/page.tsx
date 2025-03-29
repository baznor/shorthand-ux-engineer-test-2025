'use client'

import Image from "next/image";
import TextInput from "./components/textInput";
import { useForm } from "react-hook-form"
import useStore from './lib/store'
import { useRouter } from 'next/navigation';



function CreateAccount() {
  const { name, setName, email, setEmail, password, setPassword } = useStore();
  const { push } = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
    shouldFocusError: false,
    reValidateMode: 'onChange',
  })
  const onSubmit = () => {
    push('/company')
  }
  
  return (
    <div className="flex flex-col rounded-3xl shadow-lg max-w-[1000px] w-full mx-12 mt-4 mb-12 bg-card-background overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 pt-4 flex flex-grow flex-col">
          <div className="text-3xl lg:text-4xl font-extrabold mt-6 mb-1">Create an account</div>
          <div className="text-md mb-6 -mt-2 text-secondary">Sign up to this awesome app</div>
          <TextInput value={name} onChange={(value: string) => setName(value)} autofocus={true} label="Name *" icon="mdi:account" placeholder="Name *" type="name" name="name" id="name" register={register} rules={ {required: '* Required'} } errors={errors}/>
          <TextInput value={email} onChange={(value: string) => setEmail(value)} label="Email *" icon="mdi:at" placeholder="Email *" type="email" name="email" id="email" register={register} rules={ {required: '* Invalid email'} } errors={errors}/>
          <TextInput value={password} onChange={(value: string) => setPassword(value)} label="Password *" icon="mdi:password" placeholder="Password *" type="password" name="password" id="password" hint="* must be at least 8 characters" register={register} rules={ {required: '* must be at least 8 characters', minLength: { value: 8, message: "* must be at least 8 characters" }} } errors={errors}/>                             
          <div className="mt-auto mb-3"/>
          <div className="flex flex-row items-center w-full gap-2">
            <div className="flex flex-row w-50 items-center justify-center border border-secondary px-3 py-3 rounded-md font-medium text-secondary bg-none opacity-50 pointer-events-none">
              <div>Back</div>
            </div>      
            <button type="submit" className="flex flex-row w-full items-center justify-center border-none px-3 py-3 rounded-md font-medium text-on-dark bg-primary cursor-pointer">
              Next
            </button>
          </div>          
        </form>   
        <div className="">
          <Image src="/signup.png" alt="Picture of the author" width={500} height={500} className="object-cover rounded-3xl" />
        </div>
      </div>   
    </div>    
  )
}

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-b from-background-from to-background-to overflow-x-hidden">
      <CreateAccount />
    </div>    
  )
}
