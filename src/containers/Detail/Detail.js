import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import $api from "../../api/tmdb";
import classes from "./Detail.module.scss";
import styled from "styled-components";

const Detail = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        $api.detail(id).then((res) => {
            setMovieData(res.data);
            console.log(res.data);
        });
    }, [id]);
    const BgDiv = styled.div`
        background-image: linear-gradient(rgba(0, 0, 0, 0.85) 15%, rgba(0, 0, 0, 0.2) 40%, #000 90%), url(https://image.tmdb.org/t/p/original${(props) => props.backdropPath});
        background-size: cover;
        background-position: center;
        @media screen and(max-width: 850px) {
            background-image: url(https://image.tmdb.org/t/p/original${(props) => props.backdropPath}});
        }
    `;
    let ren = <></>;

    if (movieData) {
        ren = (
            <BgDiv backdropPath={movieData.backdrop_path} className={classes.detail}>
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
                                <div className={classes.genre} key={genre.id}>
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                        <div className={classes.list}>
                            <div className={classes.item}>
                                <h4>首次上映日期</h4>
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
            </BgDiv>
        );
    }
    return ren;
};

export default Detail;
