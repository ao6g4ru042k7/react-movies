import classes from "./moviesItem.module.scss";

const moviesItem = ({ data }) => {
    return (
        <>
            <div className={classes["movies-item"]}>
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} width="100%" height="100%" alt={data.title} />
            </div>
            <h3 className={classes.title}>{data.title}</h3>
        </>
    );
};
export default moviesItem;
