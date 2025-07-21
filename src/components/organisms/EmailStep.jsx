import { motion } from "framer-motion"
import Input from "@/components/atoms/Input"
import InfoPanel from "@/components/molecules/InfoPanel"
import ApperIcon from "@/components/ApperIcon"

const EmailStep = ({ formData, validationErrors, updateFormData }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-apple-blue to-apple-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="Mail" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
          What's your email address?
        </h2>
        <p className="text-apple-gray-600">
          This will be your Apple ID. You'll use it to sign in to all Apple services.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          error={validationErrors.email}
          placeholder="Enter your email address"
        />

        <InfoPanel title="Email Requirements" icon="CheckCircle">
          <ul className="space-y-1 text-sm">
            <li className="flex items-center space-x-2">
              <ApperIcon name="Check" size={14} />
              <span>Must be a valid email address</span>
            </li>
            <li className="flex items-center space-x-2">
              <ApperIcon name="Check" size={14} />
              <span>Will be used to sign in to all Apple services</span>
            </li>
            <li className="flex items-center space-x-2">
              <ApperIcon name="Check" size={14} />
              <span>Cannot be changed after account creation</span>
            </li>
          </ul>
        </InfoPanel>
      </div>
    </motion.div>
  )
}

export default EmailStep