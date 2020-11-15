import classes from "./banner.module.scss";
import Button from "@material-ui/core/Button";
import Details from "@material-ui/icons/Details";

const banner = (props) => {
    console.log(props.movieData);
    let view = <div>loading</div>;
    if (props.movieData) {
        const pic = (
            <picture>
                <source
                    srcSet={`https://image.tmdb.org/t/p/w500${props.movieData.backdrop_path}`}
                    media="(max-width: 750px)"
                />
                <img
                    className={classes.img}
                    src={`https://image.tmdb.org/t/p/original${props.movieData.backdrop_path}`}
                    alt={props.movieData.title}
                />
            </picture>
        );
        // let overview = props.movieData.overview;
        // if (overview.length > 150) {
        //     overview = overview.substr(0, 150) + "...";
        // }
        const content = (
            <div className={classes.content}>
                <h2>{props.movieData.title}</h2>
                <h5>{props.movieData.original_title}</h5>
                <p>{props.movieData.overview}</p>
                <Button
                    variant="contained"
                    // color="secondary"
                    style={{
                        color: "white",
                        backgroundColor: "#ef352c",
                        padding: "6px 24px",
                    }}
                    className={classes.button}
                    startIcon={<Details />}
                >
                    查看細節
                </Button>
            </div>
        );
        view = (
            <div className={classes.banner}>
                {pic}
                {content}
            </div>
        );
    }
    return view;
};

export default banner;
