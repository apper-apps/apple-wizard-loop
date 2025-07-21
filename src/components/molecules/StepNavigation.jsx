import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const StepNavigation = ({ 
  currentStep, 
  totalSteps = 6, 
  onPrev, 
  onNext, 
  onSubmit,
  isLoading = false,
  canGoBack = true,
  nextLabel = "Continue"
}) => {
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="flex items-center justify-between pt-6 border-t border-apple-gray-100">
      <div>
        {currentStep > 0 && canGoBack && (
          <Button 
            variant="ghost" 
            onClick={onPrev}
            disabled={isLoading}
          >
            <ApperIcon name="ChevronLeft" size={16} className="mr-1" />
            Back
          </Button>
        )}
      </div>
      
      <div className="flex items-center space-x-3">
        <span className="text-sm text-apple-gray-500">
          Step {currentStep + 1} of {totalSteps}
        </span>
        
        {isLastStep ? (
          <Button 
            onClick={onSubmit}
            loading={isLoading}
            disabled={isLoading}
          >
            Create Apple ID
          </Button>
        ) : (
          <Button onClick={onNext} disabled={isLoading}>
            {nextLabel}
            <ApperIcon name="ChevronRight" size={16} className="ml-1" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default StepNavigation