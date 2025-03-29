'use client'

export default function SelectMenu({label, children, name, id, value, onChange}) {
  
  return (
    <div className="flex flex-row items-center gap-2">
      <input type="checkbox" id={id} name={name} checked={value} onChange={event => onChange(event.target.checked)} className="border-input-placeholder hover:border-input-focus w-4 h-4 cursor-pointer accent-primary"/>
      <label className="text-sm">
        {children ?? label}
      </label>
    </div>
  )
}

