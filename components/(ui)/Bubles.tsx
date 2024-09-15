"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Bubbles = () => {
    const [bubblesInPlace, setBubblesInPlace] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBubblesInPlace(true);
        }, 0); // 1.5 seconds delay for the bubbles to complete the bounce animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-8 justify-center items-center h-auto mt-8">
            <p className="flex-col text-sm font-semibold text-center rounded-lg px-4 py-2 bg-transparent text-dark border-b-2  border-gray-500 shadow-lg">
                پیشناهادات جذاب امروز
            </p>

            <div className="relative flex justify-center items-center w-full h-full px-4">

                {/* Bubble Container */}
                <div
                    className={`flex space-x-4 transition-transform duration-1500 ${bubblesInPlace ? "transform translate-x-0" : "transform -translate-x-full"
                        }`}
                >
                    {/* Bubbles */}
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-auto h-auto  rounded-full bounce shadow-lg animate-bounce transition-all duration-1000`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <Image
                                width={300}
                                height={100}
                                src="/logo.png"
                                alt="Logo"
                                className="mx-auto w-aot h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bubbles;
