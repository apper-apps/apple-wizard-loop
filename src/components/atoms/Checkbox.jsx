import { forwardRef } from "react"
import { cn } from "@/utils/cn"
import ApperIcon from "@/components/ApperIcon"

const Checkbox = forwardRef(({ 
  className, 
  label,
  checked,
  onChange,
  error,
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      <label className="flex items-start space-x-3 cursor-pointer">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only"
            {...props}
          />
          <div className={cn(
            "w-5 h-5 border-2 rounded transition-all duration-200",
            checked 
              ? "bg-apple-blue border-apple-blue" 
              : "bg-white border-apple-gray-300 hover:border-apple-blue",
            error && !checked && "border-apple-red",
            className
          )}>
            {checked && (
              <ApperIcon 
                name="Check" 
                size={12} 
                className="text-white absolute top-0.5 left-0.5"
              />
            )}
          </div>
        </div>
        {label && (
          <span className="text-sm text-apple-gray-700 leading-5">{label}</span>
        )}
      </label>
      {error && (
        <p className="ml-8 text-sm text-apple-red">{error}</p>
      )}
    </div>
  )
})

Checkbox.displayName = "Checkbox"

export default Checkbox