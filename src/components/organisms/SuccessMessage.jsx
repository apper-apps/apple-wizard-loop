import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const SuccessMessage = ({ onStartOver }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6 py-12"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-br from-apple-green to-apple-blue rounded-3xl mx-auto flex items-center justify-center mb-6"
        >
          <ApperIcon name="CheckCircle" size={48} className="text-white" />
        </motion.div>
        
        {/* Celebratory particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 200],
                y: [0, (Math.random() - 0.5) * 200]
              }}
              transition={{ 
                delay: 0.5 + i * 0.1,
                duration: 1.5,
                ease: "easeOut"
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-apple-green rounded-full"
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold text-apple-gray-900">
          Congratulations! 🎉
        </h2>
        <p className="text-xl text-apple-gray-600 max-w-md mx-auto">
          Your Apple ID has been created successfully
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-apple-green/10 to-apple-blue/10 rounded-2xl p-6 max-w-md mx-auto"
      >
        <h3 className="font-semibold text-apple-gray-900 mb-3">What's next?</h3>
        <ul className="text-left space-y-2 text-sm text-apple-gray-600">
          <li className="flex items-start space-x-2">
            <ApperIcon name="Mail" size={16} className="text-apple-blue mt-0.5 flex-shrink-0" />
            <span>Check your email for confirmation</span>
          </li>
          <li className="flex items-start space-x-2">
            <ApperIcon name="Download" size={16} className="text-apple-blue mt-0.5 flex-shrink-0" />
            <span>Start downloading apps from the App Store</span>
          </li>
          <li className="flex items-start space-x-2">
            <ApperIcon name="Cloud" size={16} className="text-apple-blue mt-0.5 flex-shrink-0" />
            <span>Sync your data across Apple devices</span>
          </li>
          <li className="flex items-start space-x-2">
            <ApperIcon name="Settings" size={16} className="text-apple-blue mt-0.5 flex-shrink-0" />
            <span>Customize your Apple ID settings</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-3"
      >
        <Button 
          onClick={() => window.open("https://appleid.apple.com/", "_blank")}
          className="px-8"
        >
          <ApperIcon name="ExternalLink" size={16} className="mr-2" />
          Manage Apple ID
        </Button>
        
        <div>
          <Button variant="ghost" onClick={onStartOver}>
            <ApperIcon name="RotateCcw" size={16} className="mr-2" />
            Create Another Apple ID
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SuccessMessage