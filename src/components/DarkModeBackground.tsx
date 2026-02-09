"use client";

import { useEffect, useState } from "react";
import { FlickeringGrid } from "./FlickeringGrid";

export const DarkModeBackground = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial dark mode
        setIsDark(document.documentElement.classList.contains("dark"));

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    if (!isDark) return null;

    return (
        <div className="dark-background-container">
            <FlickeringGrid
                squareSize={4}
                gridGap={6}
                flickerChance={0.3}
                color="rgb(59, 130, 246)" // Blue color for the grid
                maxOpacity={0.25}
                className="flickering-grid-bg"
            />
        </div>
    );
};
