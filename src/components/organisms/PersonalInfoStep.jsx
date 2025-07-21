import { motion } from "framer-motion"
import Input from "@/components/atoms/Input"
import Select from "@/components/atoms/Select"
import InfoPanel from "@/components/molecules/InfoPanel"
import ApperIcon from "@/components/ApperIcon"

const PersonalInfoStep = ({ formData, validationErrors, updateFormData }) => {
  const countries = [
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "Japan", label: "Japan" },
    { value: "Other", label: "Other" }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-apple-green to-apple-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="User" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
          Tell us about yourself
        </h2>
        <p className="text-apple-gray-600">
          This information helps us verify your identity and provide personalized services.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={formData.firstName}
            onChange={(e) => updateFormData("firstName", e.target.value)}
            error={validationErrors.firstName}
            placeholder="First name"
          />
          <Input
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => updateFormData("lastName", e.target.value)}
            error={validationErrors.lastName}
            placeholder="Last name"
          />
        </div>

        <Input
          label="Date of Birth"
          type="date"
          value={formData.birthDate}
          onChange={(e) => updateFormData("birthDate", e.target.value)}
          error={validationErrors.birthDate}
          max={new Date(Date.now() - 13 * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
        />

        <Select
          label="Country/Region"
          value={formData.country}
          onChange={(e) => updateFormData("country", e.target.value)}
          options={countries}
        />

        <Input
          label="Phone Number"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => updateFormData("phoneNumber", e.target.value)}
          error={validationErrors.phoneNumber}
          placeholder="+1 (555) 123-4567"
        />

        <InfoPanel title="Why we need this information" icon="Info">
          <ul className="space-y-1 text-sm">
            <li>• Verify your identity and age</li>
            <li>• Provide personalized recommendations</li>
            <li>• Enable features like Find My and Family Sharing</li>
            <li>• Comply with local laws and regulations</li>
          </ul>
        </InfoPanel>
      </div>
    </motion.div>
  )
}

export default PersonalInfoStep