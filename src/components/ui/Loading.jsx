import { motion } from "framer-motion"

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-4"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-apple-blue to-apple-purple rounded-2xl mx-auto flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-3 border-white border-t-transparent rounded-full"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-apple-gray-900 mb-1">{message}</h3>
          <p className="text-sm text-apple-gray-500">Please wait while we process your request...</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Loading