// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import ResultUi from "./ResultUi";
import UploadSection from "./UploadSection";
import Header from "./Header";
import "./style.css";
import React from "react";
console.log("API Endpoint:", import.meta.env.VITE_IMAGE_POST_API);
function App() {


  const [isProcessing, setIsProcessing] = React.useState(false);
  const[data, setData] = React.useState(null);
  const [preview, setPreview] = React.useState(null);
  console.log("Rendering Home");
  const handleImageRemove = () => {
    // isProcessing = true
    // console.log("Image removed");
    setData(null);
    setIsProcessing(false);
    setPreview(null);
  };
  

  return (
    <div className='main-container'>
      <Header handleImageRemove={handleImageRemove} />
      <main className='body-container'>
        <UploadSection setData={setData} setIsProcessing={setIsProcessing} setPreview={setPreview} preview={preview}/>
        <ResultUi  data={data} isProcessing={isProcessing}/>
      </main>
    </div>
  );
}

export default App;
