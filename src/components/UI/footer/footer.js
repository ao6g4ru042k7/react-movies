import classes from "./footer.module.scss";
const footer = ({ style }) => (
    <footer className={classes.footer} style={style}>
        Copyright © My Website 2020.
    </footer>
);

export default footer;
