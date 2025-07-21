import { motion } from "framer-motion"
import Checkbox from "@/components/atoms/Checkbox"
import InfoPanel from "@/components/molecules/InfoPanel"
import ApperIcon from "@/components/ApperIcon"

const ReviewStep = ({ formData, validationErrors, updateFormData }) => {
  const reviewData = [
    { label: "Email", value: formData.email, icon: "Mail" },
    { label: "Name", value: `${formData.firstName} ${formData.lastName}`, icon: "User" },
    { label: "Birth Date", value: new Date(formData.birthDate).toLocaleDateString(), icon: "Calendar" },
    { label: "Country", value: formData.country, icon: "Globe" },
    { label: "Phone", value: formData.phoneNumber, icon: "Phone" },
    { label: "Payment", value: formData.paymentMethod === "none" ? "None (Free apps only)" : formData.paymentMethod, icon: "CreditCard" }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-apple-purple to-apple-green rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="CheckCircle" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
          Review your information
        </h2>
        <p className="text-apple-gray-600">
          Please verify all details before creating your Apple ID.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Account Summary */}
        <div className="wizard-card">
          <h3 className="font-semibold text-apple-gray-900 mb-4 flex items-center">
            <ApperIcon name="User" size={20} className="mr-2" />
            Account Information
          </h3>
          <div className="space-y-3">
            {reviewData.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-apple-gray-100 last:border-0">
                <div className="flex items-center space-x-2">
                  <ApperIcon name={item.icon} size={16} className="text-apple-gray-500" />
                  <span className="text-sm text-apple-gray-600">{item.label}</span>
                </div>
                <span className="text-sm font-medium text-apple-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Questions Summary */}
        <div className="wizard-card">
          <h3 className="font-semibold text-apple-gray-900 mb-3 flex items-center">
            <ApperIcon name="Shield" size={20} className="mr-2" />
            Security Questions
          </h3>
          <div className="space-y-2">
            {formData.securityQuestions.map((sq, index) => (
              <div key={index} className="text-sm">
                <p className="text-apple-gray-600 font-medium">Question {index + 1}:</p>
                <p className="text-apple-gray-900 ml-2">{sq.question}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <Checkbox
            checked={formData.agreeToTerms}
            onChange={(e) => updateFormData("agreeToTerms", e.target.checked)}
            error={validationErrors.agreeToTerms}
            label={
              <span className="text-sm">
                I agree to the{" "}
                <button className="text-apple-blue hover:underline">
                  Apple Media Services Terms and Conditions
                </button>{" "}
                and{" "}
                <button className="text-apple-blue hover:underline">
                  Apple Privacy Policy
                </button>
              </span>
            }
          />

          <Checkbox
            checked={formData.subscribeToUpdates}
            onChange={(e) => updateFormData("subscribeToUpdates", e.target.checked)}
            label="I would like to receive emails about Apple products, services, and software updates"
          />
        </div>

        <InfoPanel title="What happens next?" icon="Info">
          <ul className="space-y-1 text-sm">
            <li>• Your Apple ID will be created immediately</li>
            <li>• You can start downloading apps and content</li>
            <li>• Your data will be synced across Apple devices</li>
            <li>• You'll receive a confirmation email</li>
          </ul>
        </InfoPanel>
      </div>
    </motion.div>
  )
}

export default ReviewStep