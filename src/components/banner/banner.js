import React from "react";
import classes from "./banner.module.scss";
import Button from "@material-ui/core/Button";
import Details from "@material-ui/icons/Details";
import { useHistory } from "react-router-dom";
import defBgImg from "../../assets/default-bg.jpg";

const Banner = (props) => {
    const history = useHistory();
    // console.log("banner", props.movieData);
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
                    src={
                        props.movieData.backdrop_path
                            ? `https://image.tmdb.org/t/p/original${props.movieData.backdrop_path}`
                            : defBgImg
                    }
                    alt={props.movieData.title}
                />
            </picture>
        );
        const content = (
            <div className={classes.content}>
                <h2>{props.movieData.title}</h2>
                <h5>{props.movieData.original_title}</h5>
                <p>{props.movieData.overview}</p>
                <Button
                    onClick={() => {
                        history.push("/detail/" + props.movieData.id);
                    }}
                    variant="contained"
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

export default React.memo(Banner);
