"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/lib/posts";
import { Skeleton } from "./Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { MagicCard } from "./MagicCard";

interface PostCardProps {
    post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const postUrl = `/${post.categories[0]}/${post.slug}`;

    return (
        <MagicCard className="post-card h-full">
            <Link href={postUrl} className="post-card-link h-full flex flex-col">
                <div className="post-card-image">
                    {post.image ? (
                        <>
                            {/* Standard Skeleton component */}
                            {!isImageLoaded && (
                                <Skeleton className="skeleton-image-placeholder h-full w-full" />
                            )}
                            <Image
                                src={post.image.startsWith("/") ? post.image : `/${post.image}`}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{
                                    objectFit: "cover",
                                    opacity: isImageLoaded ? 1 : 0,
                                    transition: "opacity 0.3s ease-in-out",
                                }}
                                onLoad={() => setIsImageLoaded(true)}
                            />
                        </>
                    ) : (
                        <div className="placeholder">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </div>
                    )}
                </div>
                <div className="post-card-content flex-grow flex items-center justify-center">
                    <h3 className="post-card-title">{post.title}</h3>
                </div>
            </Link>
        </MagicCard>
    );
}
