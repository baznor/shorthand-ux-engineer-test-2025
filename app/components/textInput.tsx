/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client'

import { Icon } from "@iconify/react";
import React from 'react'

type CallbackFunction = (value: string) => void;

type Props = {
  children?: React.ReactNode,
  autofocus?: boolean,
  label?: string,
  icon: string,
  placeholder?: string,
  type?: string,
  name: string,
  id?: string,
  rules?: any,
  hint?: string,
  value?: string | null,
  onChange: CallbackFunction,
  register?: any,
  errors?: any
}

export default function TextInput({children, label, icon, type, name, id, rules, hint, value, onChange, register, errors}: Props) {

  return (
    <div className="w-full">
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
  )
}