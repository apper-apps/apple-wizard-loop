import { forwardRef, useState } from "react"
import { cn } from "@/utils/cn"
import ApperIcon from "@/components/ApperIcon"

const Select = forwardRef(({ 
  className, 
  label,
  error,
  value,
  onChange,
  options = [],
  placeholder,
  ...props 
}, ref) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value && value.length > 0

  return (
    <div className="relative">
      <select
        ref={ref}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "input-field appearance-none pr-10",
          error && "border-apple-red focus:border-apple-red focus:ring-apple-red/20",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>{placeholder}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ApperIcon 
        name="ChevronDown" 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-apple-gray-500 pointer-events-none"
        size={20}
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

Select.displayName = "Select"

export default Select