import ApperIcon from "@/components/ApperIcon"

const InfoPanel = ({ title, children, icon = "Info", variant = "info" }) => {
  const variants = {
    info: "border-apple-blue bg-apple-blue/5 text-apple-blue",
    success: "border-apple-green bg-apple-green/5 text-apple-green",
    warning: "border-apple-orange bg-apple-orange/5 text-apple-orange"
  }

  return (
    <div className={`border rounded-xl p-4 ${variants[variant]}`}>
      <div className="flex items-start space-x-3">
        <ApperIcon name={icon} size={20} className="flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-sm mb-1">{title}</h4>
          <div className="text-sm opacity-80">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel