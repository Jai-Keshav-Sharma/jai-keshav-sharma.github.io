// Blog Post Loading Skeleton - single article with header, image, content, author box
export default function Loading() {
    return (
        <article className="post-container">
            {/* Post Header */}
            <header className="post-header">
                <div className="skeleton-loading" style={{ width: "100%", maxWidth: "600px", height: "44px", marginBottom: "15px" }} />
                <div className="post-meta" style={{ display: "flex", gap: "10px" }}>
                    <div className="skeleton-loading" style={{ width: "120px", height: "18px" }} />
                    <span>•</span>
                    <div className="skeleton-loading" style={{ width: "100px", height: "18px" }} />
                </div>
            </header>

            {/* Featured Image */}
            <div className="post-featured-image" style={{ position: "relative" }}>
                <div className="skeleton-loading" style={{ width: "100%", height: "400px", borderRadius: "8px" }} />
            </div>

            {/* Post Content */}
            <div className="post-content" style={{ marginTop: "30px" }}>
                {/* Paragraph 1 */}
                <div style={{ marginBottom: "20px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "85%", height: "16px" }} />
                </div>

                {/* Paragraph 2 */}
                <div style={{ marginBottom: "20px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "70%", height: "16px" }} />
                </div>

                {/* Code Block */}
                <div className="skeleton-loading" style={{ width: "100%", height: "150px", borderRadius: "8px", marginBottom: "20px" }} />

                {/* Paragraph 3 */}
                <div style={{ marginBottom: "20px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "90%", height: "16px" }} />
                </div>
            </div>

            {/* Post Footer */}
            <footer className="post-footer">
                {/* Author Box */}
                <div className="author-section" style={{ marginTop: "50px", paddingTop: "30px", borderTop: "1px solid var(--color-border)" }}>
                    <div className="author-box" style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "20px" }}>
                        <div className="skeleton-loading" style={{ width: "80px", height: "80px", borderRadius: "50%", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                            <div className="skeleton-loading" style={{ width: "150px", height: "22px", marginBottom: "10px" }} />
                            <div className="skeleton-loading" style={{ width: "100%", height: "14px", marginBottom: "6px" }} />
                            <div className="skeleton-loading" style={{ width: "80%", height: "14px" }} />
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="post-tags" style={{ marginTop: "20px", display: "flex", gap: "8px" }}>
                    <div className="skeleton-loading" style={{ width: "80px", height: "28px", borderRadius: "3px" }} />
                    <div className="skeleton-loading" style={{ width: "100px", height: "28px", borderRadius: "3px" }} />
                    <div className="skeleton-loading" style={{ width: "70px", height: "28px", borderRadius: "3px" }} />
                </div>

                {/* Comments Section */}
                <div className="comments-section" style={{ marginTop: "40px" }}>
                    <div className="skeleton-loading" style={{ width: "120px", height: "28px", marginBottom: "20px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "200px", borderRadius: "8px" }} />
                </div>
            </footer>
        </article>
    );
}
