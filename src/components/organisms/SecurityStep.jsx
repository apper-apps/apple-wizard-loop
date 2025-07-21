import { motion } from "framer-motion"
import Input from "@/components/atoms/Input"
import Select from "@/components/atoms/Select"
import InfoPanel from "@/components/molecules/InfoPanel"
import ApperIcon from "@/components/ApperIcon"

const SecurityStep = ({ formData, validationErrors, updateFormData, updateSecurityQuestion }) => {
  const securityQuestions = [
    { value: "", label: "Choose a security question..." },
    { value: "What was the name of your first pet?", label: "What was the name of your first pet?" },
    { value: "What city were you born in?", label: "What city were you born in?" },
    { value: "What was your childhood nickname?", label: "What was your childhood nickname?" },
    { value: "What is the name of your favorite childhood friend?", label: "What is the name of your favorite childhood friend?" },
    { value: "What was the first concert you attended?", label: "What was the first concert you attended?" },
    { value: "What is the name of the road you grew up on?", label: "What is the name of the road you grew up on?" },
    { value: "What was your favorite place to visit as a child?", label: "What was your favorite place to visit as a child?" },
    { value: "Who was your favorite teacher?", label: "Who was your favorite teacher?" }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-apple-orange to-apple-red rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="Lock" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
          Set up security questions
        </h2>
        <p className="text-apple-gray-600">
          These help verify your identity if you ever forget your password.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {formData.securityQuestions.map((sq, index) => (
          <div key={index} className="space-y-3">
            <h4 className="font-medium text-apple-gray-900">
              Security Question {index + 1}
            </h4>
            
            <Select
              label="Choose Question"
              value={sq.question}
              onChange={(e) => updateSecurityQuestion(index, "question", e.target.value)}
              options={securityQuestions}
              error={validationErrors.securityQuestions[index] && !sq.question ? validationErrors.securityQuestions[index] : ""}
            />
            
            <Input
              label="Your Answer"
              value={sq.answer}
              onChange={(e) => updateSecurityQuestion(index, "answer", e.target.value)}
              error={validationErrors.securityQuestions[index] && sq.question && !sq.answer ? validationErrors.securityQuestions[index] : ""}
              placeholder="Enter your answer"
            />
          </div>
        ))}

        <InfoPanel title="Security Question Tips" icon="Lightbulb">
          <ul className="space-y-1 text-sm">
            <li>• Choose answers you'll remember years from now</li>
            <li>• Avoid answers others might easily guess</li>
            <li>• Use consistent spelling and capitalization</li>
            <li>• Keep your answers private and secure</li>
          </ul>
        </InfoPanel>
      </div>
    </motion.div>
  )
}

export default SecurityStep