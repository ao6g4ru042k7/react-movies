import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import MovieList from "../../components/movieList/movieList";
import classes from "./Home.module.scss";
import Banner from "../../components/banner/banner";

const Home = () => {
    const movieListDatas = useSelector((state) => state.movie.allData);
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(actions.getLatestMovie());
        if (movieListDatas.nowPlaying.length === 0) {
            dispatch(actions.getNowPlayingMovies());
        }
    }, [movieListDatas.nowPlaying, dispatch]);
    useEffect(() => {
        if (movieListDatas.popular.length === 0) {
            dispatch(actions.getPopularMovies());
        }
    }, [movieListDatas.popular, dispatch]);
    useEffect(() => {
        if (movieListDatas.topRated.length === 0) {
            dispatch(actions.getTopRatedMovies());
        }
    }, [movieListDatas.topRated, dispatch]);
    useEffect(() => {
        if (movieListDatas.upcoming.length === 0) {
            dispatch(actions.getUpcomingMovies());
        }
    }, [movieListDatas.upcoming, dispatch]);
    return (
        <div className={classes.home}>
            <Banner movieData={movieListDatas.nowPlaying[0]} />
            <div className={classes.content}>
                <MovieList id="m1" title="上映中" moviesData={movieListDatas.nowPlaying} />
                <MovieList id="m2" title="即將上映" moviesData={movieListDatas.upcoming} />
                <MovieList id="m3" title="熱門選擇" moviesData={movieListDatas.popular} />
                <MovieList id="m4" title="最高評分" moviesData={movieListDatas.topRated} />
            </div>
        </div>
    );
};

export default Home;
