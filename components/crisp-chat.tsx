"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("f05ecce5-74ba-4c11-b4c8-e8c59bae1c8b")
    }, []);

    return null;
}