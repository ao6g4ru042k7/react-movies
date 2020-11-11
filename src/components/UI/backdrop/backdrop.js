import React from "react";
import classes from "./backdrop.module.scss";

const backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.clicked}></div>;
};

export default backdrop;
