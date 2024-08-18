import React from "react";

export default function Footer() {
    let dateObj = new Date();

    return (
        <div className="footer">
            <p>Laurel McLean - Webpage Design - Copyright {dateObj.getFullYear()}</p>
        </div>
    );
}
