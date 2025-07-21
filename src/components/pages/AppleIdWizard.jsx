import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWizard } from "@/hooks/useWizard";
import Loading from "@/components/ui/Loading";
import SecurityStep from "@/components/organisms/SecurityStep";
import PersonalInfoStep from "@/components/organisms/PersonalInfoStep";
import EmailStep from "@/components/organisms/EmailStep";
import PasswordStep from "@/components/organisms/PasswordStep";
import ReviewStep from "@/components/organisms/ReviewStep";
import WizardHeader from "@/components/organisms/WizardHeader";
import PaymentStep from "@/components/organisms/PaymentStep";
import SuccessMessage from "@/components/organisms/SuccessMessage";
import StepNavigation from "@/components/molecules/StepNavigation";

const AppleIdWizard = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    currentStep,
    completedSteps,
    formData,
    validationErrors,
    isLoading,
    updateFormData,
    updateSecurityQuestion,
    nextStep,
    prevStep,
    submitForm,
    resetWizard,
    getProgressPercentage
  } = useWizard()

  const handleSubmit = async () => {
    const success = await submitForm()
    if (success) {
      setIsSubmitted(true)
    }
  }

  const handleStartOver = () => {
    setIsSubmitted(false)
    resetWizard()
  }

  const steps = [
    {
      component: EmailStep,
      title: "Email Address"
    },
    {
      component: PasswordStep,
      title: "Password"
    },
    {
      component: PersonalInfoStep,
      title: "Personal Information"
    },
    {
      component: SecurityStep,
      title: "Security Questions"
    },
    {
      component: PaymentStep,
      title: "Payment Method"
    },
    {
      component: ReviewStep,
      title: "Review & Confirm"
    }
  ]

  if (isLoading && currentStep === 5) {
    return <Loading message="Creating your Apple ID..." />
  }

  return (
    <div
    className="min-h-screen bg-gradient-to-br from-apple-gray-50 via-white to-apple-blue/5">
    <WizardHeader
        currentStep={currentStep}
        completedSteps={completedSteps}
        progressPercentage={getProgressPercentage()}
        onReset={resetWizard} />
    <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="wizard-card min-h-[600px]">
            <AnimatePresence mode="wait">
                {isSubmitted ? <SuccessMessage onStartOver={handleStartOver} /> : <motion.div
                    key={currentStep}
                    initial={{
                        opacity: 0,
                        x: 20
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    exit={{
                        opacity: 0,
                        x: -20
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    className="h-full flex flex-col">
                    <div className="flex-1">
                        {steps[currentStep] && (() => {
                            const StepComponent = steps[currentStep].component;

                            return (
                                <StepComponent
                                    formData={formData}
                                    validationErrors={validationErrors}
                                    updateFormData={updateFormData}
                                    updateSecurityQuestion={updateSecurityQuestion} />
                            );
                        })()}
                        <StepNavigation
                            currentStep={currentStep}
                            totalSteps={steps.length}
                            onPrev={prevStep}
                            onNext={nextStep}
                            onSubmit={handleSubmit}
                            isLoading={isLoading} />
                    </div></motion.div>}
            </AnimatePresence>
        </div>
    </main>
    {/* Background Elements */}
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-apple-blue/20 to-apple-purple/20 rounded-full blur-3xl" />
        <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-apple-green/20 to-apple-blue/20 rounded-full blur-3xl" />
    </div>
</div>
  )
}

export default AppleIdWizard