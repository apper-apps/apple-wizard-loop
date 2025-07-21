import { cn } from "@/utils/cn"

const PasswordStrength = ({ password }) => {
  const getStrength = () => {
    if (!password) return 0
    
    let strength = 0
    if (password.length >= 8) strength += 1
    if (/[a-z]/.test(password)) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/\d/.test(password)) strength += 1
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1
    
    return strength
  }

  const strength = getStrength()
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"]
  const strengthColors = ["", "bg-apple-red", "bg-apple-orange", "bg-apple-orange", "bg-apple-green", "bg-apple-green"]

  if (!password) return null

  return (
    <div className="mt-2 space-y-2">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-300",
              strength >= level ? strengthColors[strength] : "bg-apple-gray-200"
            )}
          />
        ))}
      </div>
      <p className={cn(
        "text-xs font-medium",
        strength <= 2 ? "text-apple-red" : strength <= 3 ? "text-apple-orange" : "text-apple-green"
      )}>
        {strengthLabels[strength]}
      </p>
    </div>
  )
}

export default PasswordStrength