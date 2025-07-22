import React, { useState } from 'react';

export default function UploadFoodPhoto() {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="text-center">
      <input type="file" onChange={handleUpload} className="mb-4" />
      {preview && (
        <div>
          <img src={preview} alt="Food Preview" className="mx-auto h-40 rounded shadow" />
          <p className="mt-2 text-gray-600">Analysis coming soon...</p>
        </div>
      )}
    </div>
  );
}