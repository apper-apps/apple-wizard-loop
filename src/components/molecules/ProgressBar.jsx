import { cn } from "@/utils/cn"

const ProgressBar = ({ currentStep, completedSteps, totalSteps = 6 }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i)
  
  return (
    <div className="flex items-center space-x-2">
      {steps.map((step, index) => {
        const isCompleted = completedSteps.includes(step)
        const isCurrent = currentStep === step
        const isAccessible = step <= Math.max(...completedSteps, -1) + 1
        
        return (
          <div key={step} className="flex items-center">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
              isCompleted && "bg-apple-green text-white",
              isCurrent && !isCompleted && "bg-apple-blue text-white",
              !isCurrent && !isCompleted && isAccessible && "bg-apple-gray-100 text-apple-gray-600",
              !isAccessible && "bg-apple-gray-100 text-apple-gray-400"
            )}>
              {isCompleted ? "✓" : step + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-8 h-0.5 mx-1">
                <div className="progress-pill">
                  <div className={cn(
                    "progress-fill",
                    isCompleted ? "w-full" : "w-0"
                  )} />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProgressBar