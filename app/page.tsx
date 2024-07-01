'use client'
import Image from "next/image";
import DragAndDropFileUpload from "./components/DragAndDropFileUpload";
export default function Home() {
  return (
    <main>
      <DragAndDropFileUpload></DragAndDropFileUpload>
    </main>
  );
}
