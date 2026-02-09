// Contact Page Loading Skeleton - page header + intro + contact info + sections
export default function Loading() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="skeleton-loading" style={{ width: "200px", height: "40px" }} />
            </header>

            <div className="page-content">
                {/* Intro paragraph */}
                <div style={{ marginBottom: "20px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "85%", height: "16px" }} />
                </div>

                {/* Contact Info */}
                <div style={{ margin: "30px 0" }}>
                    {/* Email */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                        <div className="skeleton-loading" style={{ width: "20px", height: "20px", borderRadius: "4px" }} />
                        <div className="skeleton-loading" style={{ width: "250px", height: "18px" }} />
                    </div>

                    {/* GitHub */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                        <div className="skeleton-loading" style={{ width: "20px", height: "20px", borderRadius: "4px" }} />
                        <div className="skeleton-loading" style={{ width: "320px", height: "18px" }} />
                    </div>

                    {/* LinkedIn */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                        <div className="skeleton-loading" style={{ width: "20px", height: "20px", borderRadius: "4px" }} />
                        <div className="skeleton-loading" style={{ width: "350px", height: "18px" }} />
                    </div>
                </div>

                {/* Response Time Section */}
                <div className="skeleton-loading" style={{ width: "180px", height: "28px", marginBottom: "15px" }} />
                <div style={{ marginBottom: "25px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "90%", height: "16px" }} />
                </div>

                {/* Other Ways to Connect Section */}
                <div className="skeleton-loading" style={{ width: "240px", height: "28px", marginBottom: "15px" }} />
                <div style={{ marginBottom: "20px" }}>
                    <div className="skeleton-loading" style={{ width: "100%", height: "16px", marginBottom: "8px" }} />
                    <div className="skeleton-loading" style={{ width: "75%", height: "16px" }} />
                </div>
            </div>
        </div>
    );
}
