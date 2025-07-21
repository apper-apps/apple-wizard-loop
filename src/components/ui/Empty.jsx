import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ 
  title = "Nothing here yet", 
  message = "Get started by taking your first step.",
  actionLabel = "Get Started",
  onAction,
  icon = "Plus"
}) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-apple-gray-200 to-apple-gray-300 rounded-2xl mx-auto flex items-center justify-center mb-6">
          <ApperIcon name={icon} size={32} className="text-apple-gray-500" />
        </div>
        
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">{title}</h2>
        <p className="text-apple-gray-600 mb-6">{message}</p>
        
        {onAction && (
          <Button onClick={onAction}>
            <ApperIcon name="ArrowRight" size={16} className="mr-2" />
            {actionLabel}
          </Button>
        )}
      </motion.div>
    </div>
  )
}

export default Empty