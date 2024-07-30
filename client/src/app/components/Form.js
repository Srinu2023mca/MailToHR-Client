"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import { ToastContainer, toast } from 'react-toastify';


export default function Form() {
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email,
      position
    };

    try {
      const response = await fetch('https://mail-to-hr.vercel.app/MailToHR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful response
        toast.success("Application submitted successfully");
        setEmail("");
        setPosition("");
      } else {
        // Handle error response
        toast.error("Error submitting application");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.borderLayout}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className="pb-3 text-primary">Mail To HR </h1>
        <div className="mb-3">
          <input
            type="email"
            className="form-control "
            id="formGroupExampleInput "
            placeholder="Enter HR Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            spellCheck={false} 
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Position Name"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            spellCheck={false} 
          />
        </div>
        <button type="submit" className="btn btn-primary" >Apply</button>
      </form>
      </div>
      <ToastContainer />
    </div>
  );
}
