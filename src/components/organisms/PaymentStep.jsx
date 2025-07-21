import { motion } from "framer-motion"
import Select from "@/components/atoms/Select"
import InfoPanel from "@/components/molecules/InfoPanel"
import ApperIcon from "@/components/ApperIcon"

const PaymentStep = ({ formData, updateFormData }) => {
  const paymentMethods = [
    { value: "none", label: "None (Free apps only)" },
    { value: "credit", label: "Credit or Debit Card" },
    { value: "paypal", label: "PayPal" },
    { value: "apple_pay", label: "Apple Pay" }
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
          <ApperIcon name="CreditCard" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
          Payment Information
        </h2>
        <p className="text-apple-gray-600">
          Choose how you'd like to pay for apps, music, and other purchases.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <Select
          label="Payment Method"
          value={formData.paymentMethod}
          onChange={(e) => updateFormData("paymentMethod", e.target.value)}
          options={paymentMethods}
        />

        <InfoPanel title="Payment Information" icon="Info">
          <div className="space-y-2 text-sm">
            <p><strong>None:</strong> Download free apps, books, and other content.</p>
            <p><strong>Credit Card:</strong> Make purchases from the App Store, iTunes Store, and more.</p>
            <p className="text-xs opacity-75 mt-3">
              You can add or change payment methods later in Settings.
            </p>
          </div>
        </InfoPanel>

        {formData.paymentMethod === "none" && (
          <InfoPanel title="Free Account Benefits" icon="Gift" variant="success">
            <ul className="space-y-1 text-sm">
              <li>• Download free apps from the App Store</li>
              <li>• Access free content from iTunes</li>
              <li>• Use iCloud with 5GB free storage</li>
              <li>• Sync across all your Apple devices</li>
            </ul>
          </InfoPanel>
        )}
      </div>
    </motion.div>
  )
}

export default PaymentStep