"use client";

import React, { useCallback, useId, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps
    extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    squares?: [number, number];
    className?: string;
    squaresClassName?: string;
}

export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares = [24, 24],
    className,
    squaresClassName,
    ...props
}: InteractiveGridPatternProps) {
    const id = useId();
    const [horizontal, vertical] = squares;
    const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

    const handleMouseEnter = useCallback((index: number) => {
        setHoveredSquare(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredSquare(null);
    }, []);

    const squareElements = useMemo(() => {
        return Array.from({ length: horizontal * vertical }, (_, index) => {
            const x = (index % horizontal) * width;
            const y = Math.floor(index / horizontal) * height;
            const isHovered = hoveredSquare === index;

            return (
                <rect
                    key={index}
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    className={cn(
                        "stroke-gray-300 fill-transparent transition-all duration-300 ease-in-out",
                        isHovered && "fill-blue-500/30",
                        squaresClassName
                    )}
                    strokeWidth={1}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                />
            );
        });
    }, [
        horizontal,
        vertical,
        width,
        height,
        hoveredSquare,
        squaresClassName,
        handleMouseEnter,
        handleMouseLeave,
    ]);

    return (
        <svg
            aria-hidden="true"
            className={cn(
                "pointer-events-auto absolute inset-0 h-full w-full",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d={`M${width} 0L${width} ${height}L0 ${height}`}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity={0.2}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            {squareElements}
        </svg>
    );
}
