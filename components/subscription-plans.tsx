"use client";

import { cn } from "@/lib/utils";
import { Check, Code, ImageIcon, MessageSquare, Music, VideoIcon, X } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const plans = [
    {
        title: "Free",
        items: [
            {
                label: "Conversation",
                icon: MessageSquare,
                iconColor: "text-violet-500",
                has: true
            },
            {
                label: "Code Generation",
                icon: Code,
                iconColor: "text-green-700",
                has: false
            },
            {
                label: "Image Generation",
                icon: ImageIcon,
                iconColor: "text-pink-500",
                has: false
            },
            {
                label: "Video Generation",
                icon: VideoIcon,
                iconColor: "text-orange-500",
                has: false
            },
            {
                label: "Music Generation",
                icon: Music,
                iconColor: "text-emerald-500",
                has: false
            },
        ],
        price: "Free",
        buttonMessage: "Select plan",
        uses: "5 AI uses per month"
    },
    {
        title: "Premium",
        items: [
            {
                label: "Conversation",
                icon: MessageSquare,
                iconColor: "text-violet-500",
                has: true
            },
            {
                label: "Code Generation",
                icon: Code,
                iconColor: "text-green-700",
                has: true
            },
            {
                label: "Image Generation",
                icon: ImageIcon,
                iconColor: "text-pink-500",
                has: true
            },
            {
                label: "Video Generation",
                icon: VideoIcon,
                iconColor: "text-orange-500",
                has: true
            },
            {
                label: "Music Generation",
                icon: Music,
                iconColor: "text-emerald-500",
                has: true
            },
        ],
        price: "USD 20.0",
        buttonMessage: "Select plan"
    }
]

const SubscriptionPlans = () => {
    return (
        <div className="container mx-auto px-2 pb-24 text-white">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                Subscription plans
            </h2>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 gap-x-5">
                {plans.map((plan) => (
                    <div
                        key={plan.title}
                        className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-lg lg:rounded-l-lg bg-white mt-4"
                    >
                        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                            <div className="p-8 text-3xl font-bold text-center border-b-4">
                                {plan.title}
                            </div>
                            <ul className="w-full text-center text-sm">
                                {plan.items.map((item) => (
                                    <li
                                        key={item.label}
                                        className="py-2"
                                    >
                                        <Card
                                            key={item.label}
                                            className="pl-3 pr-3 flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-x-4">
                                                <div className={cn("p-2 w-fit rounded-md")}>
                                                    <item.icon className={cn("w-6 h-6", item.iconColor)} />
                                                </div>
                                                <div className="font-semibold text-sm">
                                                    {item.label}
                                                </div>
                                            </div>
                                            {item.has ? <Check className="text-primary w-5 h-5" /> : <X className="text-red-500 w-5 h-5" />}
                                        </Card>
                                    </li>
                                ))}
                                {plan.uses && (
                                    <li>
                                        <Card
                                            key={plan.uses}
                                            className="flex items-center border-0 border-transparent justify-center"
                                        >
                                            <div className="flex items-center  gap-x-4">
                                                <div className="font-semibold text-sm">
                                                    {plan.uses}
                                                </div>
                                            </div>
                                        </Card>
                                    </li>
                                )}

                            </ul>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-3">
                            <div className="w-full text-2xl text-gray-600 font-semibold text-center">
                                {plan.price}
                                <span className="text-base"> for one user</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button 
                                        key={plan.buttonMessage}
                                        variant={"premium"}
                                        className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                    >
                                    {plan.buttonMessage}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubscriptionPlans