import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Form/>
      
    </div>
  );
}
