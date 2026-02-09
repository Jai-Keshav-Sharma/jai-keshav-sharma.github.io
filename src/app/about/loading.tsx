// About Page Loading Skeleton - page header + author box + content sections
export default function Loading() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="skeleton-loading" style={{ width: "180px", height: "40px" }} />
            </header>

            <div className="page-content">
                {/* Author Box */}
                <div className="author-box" style={{ marginBottom: "30px", display: "flex", gap: "20px", alignItems: "flex-start", padding: "20px" }}>
                    <div className="skeleton-loading" style={{ width: "80px", height: "80px", borderRadius: "50%", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                        <div className="skeleton-loading" style={{ width: "150px", height: "22px", marginBottom: "10px" }} />
                        <div className="skeleton-loading" style={{ width: "100%", height: "14px", marginBottom: "6px" }} />
                        <div className="skeleton-loading" style={{ width: "80%", height: "14px", marginBottom: "15px" }} />
                        <div style={{ display: "flex", gap: "15px" }}>
                            <div className="skeleton-loading" style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
                            <div className="skeleton-loading" style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
                            <div className="skeleton-loading" style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
                        </div>
                    </div>
                </div>

                {/* Section: Welcome */}
                <div className="skeleton-loading" style={{ width: "350px", height: "28px", marginBottom: "15px" }} />
                <div style={{ marginBottom: "25px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "75%", height: "16px" }} />
                </div>

                <div style={{ marginBottom: "25px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "60%", height: "16px" }} />
                </div>

                {/* Section: What You'll Find */}
                <div className="skeleton-loading" style={{ width: "250px", height: "28px", marginBottom: "15px", marginTop: "30px" }} />
                <div style={{ marginBottom: "20px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "12px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "12px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "12px" }} />
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px" }} />
                </div>

                {/* Section: Let's Connect */}
                <div className="skeleton-loading" style={{ width: "180px", height: "28px", marginBottom: "15px", marginTop: "30px" }} />
                <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                <div className="skeleton-loading" style={{ width: "70%", height: "16px" }} />
            </div>
        </div>
    );
}
