import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Error = ({ 
  title = "Something went wrong", 
  message = "We encountered an error while processing your request.",
  onRetry,
  onReset 
}) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-apple-red to-apple-orange rounded-2xl mx-auto flex items-center justify-center mb-6">
          <ApperIcon name="AlertTriangle" size={32} className="text-white" />
        </div>
        
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">{title}</h2>
        <p className="text-apple-gray-600 mb-6">{message}</p>
        
        <div className="space-y-3">
          {onRetry && (
            <Button onClick={onRetry} className="w-full">
              <ApperIcon name="RotateCcw" size={16} className="mr-2" />
              Try Again
            </Button>
          )}
          {onReset && (
            <Button variant="secondary" onClick={onReset} className="w-full">
              <ApperIcon name="Home" size={16} className="mr-2" />
              Start Over
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Error