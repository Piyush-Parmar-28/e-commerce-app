import React from "react";
import style from './section.module.css'

const Section = (props)=>{


    return (
        <section className={style.section}>
            {props.children}
        </section>
    )
}

export default Section;