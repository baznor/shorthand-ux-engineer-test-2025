'use client'

import Select from 'react-select';
import { Icon } from "@iconify/react";

type OptionType = {
  value: string;
  label: string;
};

type CallbackFunction = (value: OptionType | null) => void;

type Props = {
  autofocus?: boolean,
  label?: string,
  icon: string,
  placeholder?: string,
  type?: string,
  name: string,
  id?: string,
  hint?: string,
  value?: OptionType | null,
  onChange: CallbackFunction,
  options: OptionType[]
}

export default function SelectMenu({label, icon, placeholder, name, id, hint, options, value, onChange}: Props) {

  return (
    <div className="w-full">
      <div className="flex flex-row items-center relative" id={id}>        
      <Select
        defaultValue={value}
        onChange={event => onChange(event)}
        options={options}
        id={id}
        name={name}
        placeholder={placeholder}
        className="appearance-none border-none w-full text-foreground leading-tight transition-all duration-[200ms]"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderStyle: 'solid',
            outline: 'none',
            color: state.isFocused ? 'var(--input-focus)' : 'var(--input-placeholder)',
            borderColor: state.isFocused ? 'var(--input-focus)' : 'var(--input-placeholder)',
            boxShadow: 'none',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            padding: '4px 0px 4px 20px',      
            width: '100%',
            '&:hover': {
              borderStyle: 'solid',
            }
          }),
          option: (styles, { isFocused }) => {
            return {
              ...styles,
              color: isFocused ? 'var(--on-dark)' : 'var(--input-focus)',
              backgroundColor: isFocused ? 'var(--primary)' : 'var(--card-surface)',
            }
          },
          menu: (styles) => ({ ...styles, backgroundColor: 'var(--card-surface)' }),
          input: (styles) => ({ ...styles, color: 'var(--input-focus)' }),
          placeholder: (styles) => ({ ...styles, color: 'var(--input-placeholder)' }),
          singleValue: (styles) => ({ ...styles, color: 'var(--input-focus)' }),          
        }}
      />
        <Icon className="absolute size-5 text-input-placeholder mr-2 ml-2 peer-focus:text-input-focus transition-all duration-[200ms] pointer-events-none" icon={icon} />        
        <label
            className="absolute left-7 px-1 text-input-placeholder peer-focus:-top-2 peer-focus:text-input-focus peer-focus:text-xs -top-2 text-xs transition-all bg-card-background pointer-events-none"
          >            
          {label}
        </label>        
      </div>    
      <div className="text-xs text-secondary italic ml-2 min-h-[20px] "><span>{hint}</span></div>            
    </div>
  )
}