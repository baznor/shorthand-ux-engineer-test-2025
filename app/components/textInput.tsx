'use client'

import { Icon } from "@iconify/react";
import { useState } from 'react';

export default function TextInput({children, autofocus = false, label, icon, placeholder, type, name, id, rules, hint, value, onChange, register, errors}) {

  return (
    <div className="w-full">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label> */}
      <div className="flex flex-row items-center relative" id={id}>
        <input 
          type={type}
          {...register?.(name, rules)} 
          placeholder=""
          name={name}
          value={value}
          onChange={event => onChange(event.target.value)}
          className="peer pl-8 appearance-none border rounded-lg border-input-placeholder w-full py-3 px-4 text-foreground leading-tight focus:border-input-focus focus:outline-none focus:shadow-outline transition-all duration-[200ms]"/>
        <Icon className="absolute size-5 text-input-placeholder mr-2 ml-2 peer-focus:text-input-focus transition-all duration-[200ms] pointer-events-none" icon={icon} />        
        <label
            className="absolute left-7 px-1 text-input-placeholder peer-focus:-top-2 peer-focus:text-input-focus peer-focus:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs transition-all bg-card-background pointer-events-none"
          >            
          {label}
        </label>        
        <div className="absolute right-2">            
          { children }
        </div>        
      </div>    
      <div className="text-xs text-secondary italic ml-2 min-h-[20px] ">
        {errors?.[name]
          ? <span className="text-error">{errors[name].message}</span>
          : <span>{hint}</span>
        }        
      </div>                        
    </div>
    // <div>
    //   <div className="mt-4">        
    //     <div className="relative  flex flex-row items-center w-full flex-grow">
          
    //       <input
    //         name={name}
    //         type={type}
    //         placeholder=""
    //         className="border-b border-gray-300 w-full py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
    //       />          
    //       <label
    //         className="absolute pl-8 flex flex-row items-center -top-4 text-xs left-0 cursor-text peer-focus:text-xs focus-within:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
    //       >            
    //         {label}
    //       </label>
    //       <Icon className="text-2xl text-gray-500 peer-focus:text-blue-700 mr-2 order-first" icon={icon} />
    //     </div>
    //   </div>
    // </div>
  )
}