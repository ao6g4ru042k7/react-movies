import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import MovieList from "../../components/movieList/movieList";
import classes from "./Home.module.scss";
import Banner from "../../components/banner/banner";
import Footer from "../../components/UI/footer/footer";
import $api from '../../api/tmdb'

const Home = () => {
    const movieListDatas = useSelector((state) => state.movie.allData);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log(11111111111111111111111111111)
    //     $api.getFavList(7065599).then(res=>{
    //     console.log(222222222222222222222)

    //         console.log(res)
    //     })
    // }, []);
    useEffect(() => {
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
            <Footer style={{position:"absolute",bottom:"0",left:"0",right:"0"}}/>
        </div>
    );
};

export default Home;
