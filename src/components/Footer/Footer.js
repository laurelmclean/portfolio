import React from "react";
import "./Footer.css";

export default function Footer() {
    let dateObj = new Date();

    return (
        <div className="footer">
            <p>Laurel McLean © {dateObj.getFullYear()}</p>
        </div>
    );
}
