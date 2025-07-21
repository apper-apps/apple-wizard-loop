import { forwardRef, useState } from "react"
import { cn } from "@/utils/cn"

const Input = forwardRef(({ 
  className, 
  label,
  error,
  type = "text",
  value,
  onChange,
  ...props 
}, ref) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value && value.length > 0

  return (
    <div className="relative">
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "input-field",
          error && "border-apple-red focus:border-apple-red focus:ring-apple-red/20",
          className
        )}
        {...props}
      />
      {label && (
        <label className={cn(
          "floating-label",
          (isFocused || hasValue) && "active"
        )}>
          {label}
        </label>
      )}
      {error && (
        <p className="mt-1 text-sm text-apple-red">{error}</p>
      )}
    </div>
  )
})

Input.displayName = "Input"

export default Input