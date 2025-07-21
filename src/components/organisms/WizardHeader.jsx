import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import ProgressBar from "@/components/molecules/ProgressBar"
import Button from "@/components/atoms/Button"

const WizardHeader = ({ 
  currentStep, 
  completedSteps, 
  progressPercentage,
  onReset 
}) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b border-apple-gray-100 px-6 py-4 sticky top-0 z-50"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-apple-blue to-apple-purple rounded-xl flex items-center justify-center">
            <ApperIcon name="Apple" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-apple-gray-900">Apple ID Creation</h1>
            <p className="text-sm text-apple-gray-500">Create your Apple ID in just a few steps</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:block">
            <ProgressBar 
              currentStep={currentStep}
              completedSteps={completedSteps}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-apple-gray-900">
                {progressPercentage}% Complete
              </div>
              <div className="text-xs text-apple-gray-500">
                Step {currentStep + 1} of 6
              </div>
            </div>
            
            <Button variant="ghost" onClick={onReset} size="sm">
              <ApperIcon name="RotateCcw" size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Progress Bar */}
      <div className="md:hidden mt-4 max-w-4xl mx-auto">
        <ProgressBar 
          currentStep={currentStep}
          completedSteps={completedSteps}
        />
      </div>
    </motion.header>
  )
}

export default WizardHeader