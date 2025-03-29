'use client'

import Image from "next/image";
import Link from 'next/link';
import TextInput from "../components/textInput";
import SelectMenu from "../components/selectMenu";
import { useForm } from "react-hook-form"
import useStore from '../lib/store'
import { useRouter } from 'next/navigation';

type OptionType = {
  value: string;
  label: string;
};

function CreateCompany() {
  
  const { companyName, setCompanyName, companyCategory, setCompanyCategory, companySize, setCompanySize, userRole, setUserRole } = useStore();
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
    push('/invite')
  }

  const companyOptions = [
    { value: 'software', label: 'Software' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'legal', label: 'Legal' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'health', label: 'Health' },
    { value: 'retail', label: 'Retail' },    
    { value: 'other', label: 'Other' },
  ];
  const roleOptions = [
    { value: 'owner', label: 'Owner' },
    { value: 'admin', label: 'Administrator' },    
    { value: 'developer', label: 'Developer' },
    { value: 'reviewer', label: 'Reviewer' },
    { value: 'publisher', label: 'Publisher' },
  ];
  const sizeOptions = [
    { value: 'small', label: '1-10 employees' },
    { value: 'medium', label: '11-50 employees' },
    { value: 'large', label: '50-100 employees' },
    { value: 'enterprise', label: '100+ employees' },
  ];

  return (
    <div className="flex flex-col rounded-3xl shadow-lg max-w-[1000px] w-full mx-12 mt-4 mb-12 bg-card-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 pt-4 flex flex-grow flex-col items-start">
          <div className="text-3xl lg:text-4xl font-extrabold mt-6 mb-1">Company details</div>
          <div className="text-md mb-6 -mt-2 text-secondary">Tell us about your company</div>
          <TextInput value={companyName} onChange={(value: string) => setCompanyName(value)} autofocus={true} label="Company name *" icon="mdi:account-group" placeholder="Company name *" type="organization" name="organization" id="organization" register={register} rules={ {required: '* Required'} } errors={errors}/>
          <SelectMenu value={companyCategory} onChange={(value: OptionType | null) => setCompanyCategory(value)} label="Company category" icon="mdi:at" placeholder="Company category" type="text" name="category" id="category" options={companyOptions}/>          
          <SelectMenu value={companySize} onChange={(value: OptionType | null) => setCompanySize(value)} label="Company size" icon="mdi:account-cog" placeholder="Company size" type="text" name="size" id="size" options={sizeOptions}/>          
          <SelectMenu value={userRole} onChange={(value: OptionType | null) => setUserRole(value)} label="Your role" icon="mdi:account-cog" placeholder="Your role" type="text" name="role" id="role" options={roleOptions}/>          
          <div className="mt-auto mb-3"/>
          <div className="flex flex-row items-center w-full gap-2">
            <Link href="/" className="flex flex-row w-50 items-center justify-center border border-primary px-3 py-3 rounded-md font-medium text-primary bg-none cursor-pointer">
              <div>Back</div>
            </Link>      
            <button type="submit" className="flex flex-row w-full items-center justify-center border-none px-3 py-3 rounded-md font-medium text-on-dark bg-primary cursor-pointer">
              Next
            </button>
          </div>          
        </form>   
        <div className="">
          <Image src="/company.png" alt="Picture of the author" width={500} height={500} className="object-cover rounded-3xl" />          
        </div>
      </div>   
    </div>    
  )
}

export default function Company() {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-b from-background-from to-background-to overflow-x-hidden">
      <CreateCompany />
    </div>    
  )
}