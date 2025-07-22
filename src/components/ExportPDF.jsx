import React from 'react';

export default function ExportPDF() {
  const handleDownload = () => {
    alert('PDF download coming soon!');
  };

  return (
    <div className="text-center">
      <button
        onClick={handleDownload}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download Diet Plan as PDF
      </button>
    </div>
  );
}