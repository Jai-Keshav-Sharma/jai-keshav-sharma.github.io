// Category Page Loading Skeleton - title + post grid + back link
export default function Loading() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="skeleton-loading" style={{ width: "300px", height: "40px" }} />
            </header>

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

            <div style={{ marginTop: "40px", textAlign: "center" }}>
                <div className="skeleton-loading" style={{ width: "120px", height: "20px", margin: "0 auto" }} />
            </div>
        </div>
    );
}
