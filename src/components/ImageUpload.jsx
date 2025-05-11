import { useState } from "react";

export default function ImageUpload({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    onUpload(file);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full ">
      <label className="w-full cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />
        <div className="w-full h-96 border-2 border-dashed border-gray-300 flex justify-center items-center rounded-xl transition-all">
          {preview ? (
            <img
              src={preview}
              alt="full"
              className="w-full h-full object-contain p-2 rounded"
            />
          ) : (
            <span className="text-gray-500">Click to Upload Image</span>
          )}
        </div>
      </label>
    </div>
  );
}
