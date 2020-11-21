import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import $api from "../../api/tmdb";
import MovieGrid from "../../components/movieGrid/movieGrid";
import classes from "./Search.module.scss";
import Pagination from "../../components/UI/pagination/pagination";
import Footer from "../../components/UI/footer/footer"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Search = () => {
    const query = useQuery().get("query");
    const [moviesData, setMoviesData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    // console.log(query);
    useEffect(() => {
        $api.search(query).then((res) => {
            // console.log(res.data.results);
            // console.log(res);
            setMoviesData(res.data.results);
            setTotalPages(res.data.total_pages);
        });
    }, [query]);

    const changePageHandler = (event, value) => {
        $api.search(query, value).then((res) => {
            window.scroll(0, 0)
            setMoviesData(res.data.results);
        });
    };

    return (
        <div className={classes.search}>
            <div className={classes.content}>
                <h3 className={classes.title}>搜索關鍵字 {query}</h3>
                <MovieGrid moviesData={moviesData} />
            </div>
            {totalPages > 1 ? (
                <div className={classes.pag}>
                    <Pagination count={totalPages} onChangePage={changePageHandler} />
                </div>
            ) : null}
            <Footer style={{position:"absolute",bottom:"0",left:"0",right:"0"}}/>
        </div>
    );
};

export default Search;
