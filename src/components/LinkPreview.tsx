"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LinkPreviewProps {
    href: string;
    children: React.ReactNode;
}

export function LinkPreview({ href, children }: LinkPreviewProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [imgError, setImgError] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Only show preview for external links
    const isExternal =
        href.startsWith("http://") || href.startsWith("https://");

    if (!isExternal) {
        return (
            <a href={href}>
                {children}
            </a>
        );
    }

    const domain = new URL(href).hostname;
    const thumbnailUrl = `https://image.thum.io/get/width/600/crop/400/${href}`;

    const handleMouseEnter = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(true);
        }, 300); // slight delay to prevent flashing on accidental hovers
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsHovered(false);
    };

    return (
        <span
            className="link-preview-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-preview-trigger"
            >
                {children}
            </a>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="link-preview-card"
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {!imgError && (
                            <div className="link-preview-image">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={thumbnailUrl}
                                    alt={`Preview of ${domain}`}
                                    onError={() => setImgError(true)}
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="link-preview-info">
                            <span className="link-preview-domain">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                                    alt=""
                                    className="link-preview-favicon"
                                />
                                {domain}
                            </span>
                            <span className="link-preview-url">{href}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
