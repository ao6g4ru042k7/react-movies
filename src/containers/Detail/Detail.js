import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import $api from "../../api/tmdb";
import classes from "./Detail.module.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const Detail = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        $api.detail(id).then((res) => {
            setMovieData(res.data);
            console.log(res.data);
        });
    }, [id]);

    let ren = <></>;
    if (movieData) {
        const styles = {
            bg: {
                backgroundImage: `linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%),url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
        };
        ren = (
            <div className={classes.detail} style={styles.bg}>
                <div className={classes.box}>
                    <div className={classes.img}>
                        <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={movieData.title} />
                    </div>
                    <div className={classes.content}>
                        <h2>{movieData.title}</h2>
                        <h3>{movieData.original_title}</h3>
                        <p>{movieData.overview}</p>
                        <div className={classes.genres}>
                            {movieData.genres.map((genre) => (
                                <div className={classes.genre} key={genre.id}>{genre.name}</div>
                            ))}
                        </div>
                        <div className={classes.list}>
                            <div className={classes.item}>
                                <h4>上映日期</h4>
                            <span>{movieData.release_date}</span>
                            </div>
                            <div className={classes.item}>
                                <h4>電影時長</h4>
                            <span>{movieData.runtime} mins</span>
                            </div>
                            <div className={classes.item}>
                                <h4>票房</h4>
                            <span>$ {movieData.revenue}</span>
                            </div>
                            <div className={classes.item}>
                                <h4>評分</h4>
                                <span>{movieData.vote_average} / 10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return ren;
};

export default Detail;
