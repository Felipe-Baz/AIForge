"use client";

import { useEffect, useState } from "react";
import { ProModal } from "./proModal";

export const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  return(
    <>
        <ProModal />
    </>
  )
  
}