import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import AppleIdWizard from "@/components/pages/AppleIdWizard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppleIdWizard />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </>
  )
}

export default App