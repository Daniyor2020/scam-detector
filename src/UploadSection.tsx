"use client";
import React from "react";
import "./style.css";
import DeleteIcon from "./icons/DeleteIcon";

const IMAGE_POST_API = "http://0.0.0.0:8000/detect-scam/";

const UploadSection = ({ setIsProcessing, setData, setPreview, preview}: any) => {
 



  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProcessing(true)
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleImageUpload(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


const handleImageUpload = (img: string | Blob) => {
  setIsProcessing(true)
  if (!img) {
    return;
  }

  const formData = new FormData();
  formData.append("file", img);

  fetch(IMAGE_POST_API, {
    method: "POST",
    body: formData, // FormData includes the correct Content-Type
    cache: 'no-store'
  })
    .then((res) => {

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }
      return res.json();
    })
    .then((data) => {

      setData(data);
      setIsProcessing(false);
      
    })
    .catch((err) => {
      console.error("Error during image upload:", err);
    })
    .finally(() => {
      setIsProcessing(false);
    });

   
 
};

  const handleImageRemove = () => {
    setPreview(null);
    setIsProcessing(false);
    setData(null);
  };

  return (
    <section className='left-section'>
      <div className='upload-wrapper'>
        <div className='upload-wrapper'>
          <div className={preview ? "relative" : "hidden"}>
            <button
              aria-label='Remove Image'
              onClick={handleImageRemove}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <DeleteIcon size={20} color='white' />
            </button>

            {preview && (
              <img
                src={preview}
                alt='Uploaded Preview'
                width={100}
                // height={100}
                className={
                  " transition opacity-0.3 transition-opacity duration-300 ease-in-out hover:opacity-100"
                }
              />
            )}
          </div>

          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='hidden'
            id='file-input'
          />
          <label htmlFor='file-input' className='upload_button cursor-pointer'>

            +
          </label>
        </div>
      </div>
      <div className={preview ? "preview" : "hidden"}>
        <img
          src={preview ? preview : ""}
          alt='Uploaded screenshot'
          // width={300}
          height={300}
          className='object-scale-down opacity-0.3 transition-opacity duration-300 ease-in-out hover:opacity-100'
        />
      </div>
    </section>
  );
};

export default UploadSection;

