import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ViewDietFoods from "./components/ViewDietFoods";
import UploadFoodPhoto from "./components/UploadFoodPhoto";
import ProgressChart from "./components/ProgressChart";
import ExportPDF from "./components/ExportPDF";

export default function App() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        South Indian Dietician
      </h1>
      <nav className="flex justify-center space-x-6 mb-8">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/view" className="text-blue-600 hover:underline">View Foods</Link>
        <Link to="/upload" className="text-blue-600 hover:underline">Upload Food</Link>
        <Link to="/progress" className="text-blue-600 hover:underline">Progress</Link>
        <Link to="/export" className="text-blue-600 hover:underline">Export PDF</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewDietFoods />} />
        <Route path="/upload" element={<UploadFoodPhoto />} />
        <Route path="/progress" element={<ProgressChart />} />
        <Route path="/export" element={<ExportPDF />} />
      </Routes>
    </div>
  );
}