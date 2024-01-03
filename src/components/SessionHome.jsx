import React from "react";
import style from "./css/SessionHome.module.css"

export default function SessionHome({ title, text, image, color, direction }) {
    let directImage = "left"

    if(direction == "right") {
        directImage = "row-reverse"
    } else {
        directImage = "row"
    }

    return (
        <section className={style.SessionHome} style={{
            backgroundColor: color || "#fff",
            flexDirection: directImage
            }}>
            <img src={image} />
            <div>
                <h3>{title || "UNDEFINED"}</h3>
                <p>{text || "UNDEFINED"}</p>
            </div>
        </section>
    )
}