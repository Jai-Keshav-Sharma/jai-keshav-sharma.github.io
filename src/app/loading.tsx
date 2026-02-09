// Homepage Loading Skeleton - matches category sections with post grids
export default function Loading() {
    return (
        <div className="home-container">
            {/* Category Section 1 */}
            <section className="category-section">
                <div className="skeleton-loading" style={{ width: "280px", height: "32px", marginBottom: "20px" }} />
                <div className="posts-grid">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="skeleton-card">
                            <div className="skeleton-loading skeleton-image" />
                            <div className="skeleton-card-content">
                                <div className="skeleton-loading skeleton-title" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Category Section 2 */}
            <section className="category-section">
                <div className="skeleton-loading" style={{ width: "220px", height: "32px", marginBottom: "20px" }} />
                <div className="posts-grid">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="skeleton-card">
                            <div className="skeleton-loading skeleton-image" />
                            <div className="skeleton-card-content">
                                <div className="skeleton-loading skeleton-title" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
