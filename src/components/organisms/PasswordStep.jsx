import { motion } from "framer-motion"
import { useState } from "react"
import Input from "@/components/atoms/Input"
import PasswordStrength from "@/components/molecules/PasswordStrength"
import InfoPanel from "@/components/molecules/InfoPanel"
import ApperIcon from "@/components/ApperIcon"

const PasswordStep = ({ formData, validationErrors, updateFormData }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-apple-purple to-apple-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="Shield" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
          Create a secure password
        </h2>
        <p className="text-apple-gray-600">
          Your password protects your Apple ID and all your data.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => updateFormData("password", e.target.value)}
            error={validationErrors.password}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-6 text-apple-gray-500 hover:text-apple-blue transition-colors"
          >
            <ApperIcon name={showPassword ? "EyeOff" : "Eye"} size={20} />
          </button>
        </div>

        <PasswordStrength password={formData.password} />

        <div className="relative">
          <Input
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => updateFormData("confirmPassword", e.target.value)}
            error={validationErrors.confirmPassword}
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-6 text-apple-gray-500 hover:text-apple-blue transition-colors"
          >
            <ApperIcon name={showConfirmPassword ? "EyeOff" : "Eye"} size={20} />
          </button>
        </div>

        <InfoPanel title="Password Requirements" icon="Shield">
          <ul className="space-y-1 text-sm">
            <li className="flex items-center space-x-2">
              <ApperIcon name={formData.password.length >= 8 ? "CheckCircle" : "Circle"} size={14} />
              <span>At least 8 characters</span>
            </li>
            <li className="flex items-center space-x-2">
              <ApperIcon name={/[A-Z]/.test(formData.password) ? "CheckCircle" : "Circle"} size={14} />
              <span>One uppercase letter</span>
            </li>
            <li className="flex items-center space-x-2">
              <ApperIcon name={/[a-z]/.test(formData.password) ? "CheckCircle" : "Circle"} size={14} />
              <span>One lowercase letter</span>
            </li>
            <li className="flex items-center space-x-2">
              <ApperIcon name={/\d/.test(formData.password) ? "CheckCircle" : "Circle"} size={14} />
              <span>One number</span>
            </li>
          </ul>
        </InfoPanel>
      </div>
    </motion.div>
  )
}

export default PasswordStep