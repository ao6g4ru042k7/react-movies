import classes from "./banner.module.scss";
const banner = (props) => {
    console.log(props.movieData);
    let pic;
    if (props.movieData) {
        pic = (
            <picture>
                <source srcSet={`https://image.tmdb.org/t/p/w500${props.movieData.backdrop_path}`} media="(max-width: 750px)" />
                <img className={classes.img} src={`https://image.tmdb.org/t/p/original${props.movieData.backdrop_path}`} alt={props.title} />
            </picture>
        );
    }
    return <div className={classes.banner}>{pic}</div>;
};

export default banner;
