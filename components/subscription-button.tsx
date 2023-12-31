"use client";

import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

interface SubscriptionButtonProps {
    isPro: boolean
};

export const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
    const [loading, setLoading] = useState(false);
    const onClick = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href = response.data.url;
        } catch (error: any) {
            console.log("BILLING_ERROR", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button 
            onClick={onClick}
            variant={isPro ? "default" : "premium"}
            disabled={loading}
        >
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Zap className="w-5 h-5 ml-2 fill-white"/>}
        </Button>
    )
}