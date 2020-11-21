import React from "react";
import classes from "./Favorite.module.scss";
import Footer from "../../components/UI/footer/footer";
import MovieGrid from "../../components/movieGrid/movieGrid";
import { useSelector } from "react-redux";

const Favorite = () => {
    const favList = useSelector((state) => state.movie.favList);
    return (
        <div className={classes.favorite}>
            <div className={classes.content}>
                <MovieGrid moviesData={favList} />
            </div>
            <Footer
                style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                }}
            />
        </div>
    );
};

export default Favorite;
