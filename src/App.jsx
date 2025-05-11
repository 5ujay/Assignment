import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomForm from "./components/CustomForm";
import ImageUpload from "./components/ImageUpload";
import TextAreaInput from "./components/TextAreaInput";
import { themes } from "./styles/themes";

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const listener = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setThemeIndex((i) => (i + 1) % themes.length);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${themes[themeIndex]} transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto space-y-12 px-6 md:px-10">
        {/* Header Section */}
        <motion.h1
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          POD T-Shirt Customizer
        </motion.h1>

        {/* Main Customization Section */}
        <motion.div
          className="flex flex-col gap-10 pb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Flex row: Image Upload & Custom Form */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image Upload */}
            <div className="flex-1 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Upload Your Design
              </h3>
              <ImageUpload onUpload={setImage} />
            </div>

            {/* Custom Form */}
            <div className="flex-1 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Add Your Customization
              </h3>
              <CustomForm onChange={setFormData} />
            </div>
          </div>

          {/* Full-width TextArea below both */}
          <div className="w-full rounded-xl shadow-xl p-8">
            <h4 className="text-2xl font-semibold mb-4 text-center">
              Text Details
            </h4>
            <TextAreaInput onTextChange={setText} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
