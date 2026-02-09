"use client";

import { useEffect, useState } from "react";
import { FlickeringGrid } from "./FlickeringGrid";

export const LightModeBackground = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        // Check initial mode - light mode is when 'dark' class is NOT present
        setIsLight(!document.documentElement.classList.contains("dark"));

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            setIsLight(!document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    if (!isLight) return null;

    return (
        <div className="light-background-container">
            <FlickeringGrid
                squareSize={4}
                gridGap={6}
                flickerChance={0.3}
                color="rgb(100, 100, 100)" // Gray color for light mode
                maxOpacity={0.15}
                className="flickering-grid-bg"
            />
        </div>
    );
};
