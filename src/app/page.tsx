"use client";

import { useEffect } from "react";

import Chat from "@/components/Chat/Chat";
import SideBar1 from "@/components/SideBar1/sideBar1";
import SideBar2 from "@/components/SideBar2/sideBar2";

import styles from "./page.module.css"

function MyPage() {
  useEffect(() => {
    console.log("Component mounted on client-side");
  }, []);

  return (
    <div className={styles.container}>
      <SideBar1 />
      <Chat />
      <SideBar2/>
    </div>
  );
}



export default MyPage;
