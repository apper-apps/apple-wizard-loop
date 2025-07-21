import { useState, useEffect } from "react"
import { toast } from "react-toastify"

const STORAGE_KEY = "apple-id-wizard-progress"

const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  country: "United States",
  phoneNumber: "",
  securityQuestions: [
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" }
  ],
  paymentMethod: "none",
  agreeToTerms: false,
  subscribeToUpdates: false
}

const initialValidationErrors = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  phoneNumber: "",
  securityQuestions: ["", "", ""],
  agreeToTerms: ""
}

export const useWizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [formData, setFormData] = useState(initialFormData)
  const [validationErrors, setValidationErrors] = useState(initialValidationErrors)
  const [isLoading, setIsLoading] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const { formData: storedData, currentStep: storedStep, completedSteps: storedCompleted } = JSON.parse(stored)
        setFormData(prev => ({ ...prev, ...storedData }))
        setCurrentStep(storedStep)
        setCompletedSteps(storedCompleted)
      }
    } catch (error) {
      console.warn("Failed to load wizard progress from storage")
    }
  }, [])

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        formData,
        currentStep,
        completedSteps
      }))
    } catch (error) {
      console.warn("Failed to save wizard progress to storage")
    }
  }, [formData, currentStep, completedSteps])

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: ""
      }))
    }
  }

  const updateSecurityQuestion = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      securityQuestions: prev.securityQuestions.map((sq, i) => 
        i === index ? { ...sq, [field]: value } : sq
      )
    }))

    // Clear validation error
    if (validationErrors.securityQuestions[index]) {
      setValidationErrors(prev => ({
        ...prev,
        securityQuestions: prev.securityQuestions.map((err, i) => 
          i === index ? "" : err
        )
      }))
    }
  }

  const validateStep = (stepIndex) => {
    const errors = { ...initialValidationErrors }
    let isValid = true

    switch (stepIndex) {
      case 0: // Email
        if (!formData.email) {
          errors.email = "Email is required"
          isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "Please enter a valid email address"
          isValid = false
        }
        break

      case 1: // Password
        if (!formData.password) {
          errors.password = "Password is required"
          isValid = false
        } else if (formData.password.length < 8) {
          errors.password = "Password must be at least 8 characters"
          isValid = false
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
          errors.password = "Password must contain uppercase, lowercase, and number"
          isValid = false
        }

        if (!formData.confirmPassword) {
          errors.confirmPassword = "Please confirm your password"
          isValid = false
        } else if (formData.password !== formData.confirmPassword) {
          errors.confirmPassword = "Passwords do not match"
          isValid = false
        }
        break

      case 2: // Personal Info
        if (!formData.firstName) {
          errors.firstName = "First name is required"
          isValid = false
        }
        if (!formData.lastName) {
          errors.lastName = "Last name is required"
          isValid = false
        }
        if (!formData.birthDate) {
          errors.birthDate = "Birth date is required"
          isValid = false
        } else {
          const birthYear = new Date(formData.birthDate).getFullYear()
          const currentYear = new Date().getFullYear()
          if (currentYear - birthYear < 13) {
            errors.birthDate = "You must be at least 13 years old"
            isValid = false
          }
        }
        if (!formData.phoneNumber) {
          errors.phoneNumber = "Phone number is required"
          isValid = false
        }
        break

      case 3: // Security Questions
        formData.securityQuestions.forEach((sq, index) => {
          if (!sq.question) {
            errors.securityQuestions[index] = "Please select a security question"
            isValid = false
          } else if (!sq.answer) {
            errors.securityQuestions[index] = "Please provide an answer"
            isValid = false
          }
        })
        break

      case 4: // Payment (optional)
        // No validation required as payment is optional
        break

      case 5: // Review
        if (!formData.agreeToTerms) {
          errors.agreeToTerms = "You must agree to the Terms and Conditions"
          isValid = false
        }
        break
    }

    setValidationErrors(errors)
    return isValid
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps(prev => [...prev, currentStep])
      }
      setCurrentStep(prev => Math.min(prev + 1, 5))
      toast.success("Step completed successfully!")
    } else {
      toast.error("Please fix the errors before continuing")
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const goToStep = (stepIndex) => {
    if (stepIndex <= Math.max(...completedSteps, -1) + 1) {
      setCurrentStep(stepIndex)
    }
  }

  const submitForm = async () => {
    if (!validateStep(5)) {
      toast.error("Please fix the errors before submitting")
      return false
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear stored progress on successful submission
      localStorage.removeItem(STORAGE_KEY)
      
      toast.success("Apple ID created successfully!")
      return true
    } catch (error) {
      toast.error("Failed to create Apple ID. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const resetWizard = () => {
    setCurrentStep(0)
    setCompletedSteps([])
    setFormData(initialFormData)
    setValidationErrors(initialValidationErrors)
    localStorage.removeItem(STORAGE_KEY)
    toast.info("Wizard reset successfully")
  }

  const getProgressPercentage = () => {
    return Math.round(((completedSteps.length + (currentStep > Math.max(...completedSteps, -1) ? 1 : 0)) / 6) * 100)
  }

  return {
    currentStep,
    completedSteps,
    formData,
    validationErrors,
    isLoading,
    updateFormData,
    updateSecurityQuestion,
    nextStep,
    prevStep,
    goToStep,
    submitForm,
    resetWizard,
    validateStep,
    getProgressPercentage
  }
}