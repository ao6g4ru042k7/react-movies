import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import $api from "../../api/tmdb";
import MovieGrid from "../../components/movieGrid/movieGrid";
import classes from "./Search.module.scss";
import Pagination from "../../components/UI/pagination/pagination";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Search = () => {
    const query = useQuery().get("query");
    const [moviesData, setMoviesData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    console.log(query);
    useEffect(() => {
        $api.search(query).then((res) => {
            console.log(res.data.results);
            console.log(res);
            setMoviesData(res.data.results);
            setTotalPages(res.data.total_pages);
        });
    }, [query]);

    const moreHandler = () => {
        if (page < totalPages) {
            $api.search(query, page + 1).then((res) => {
                setMoviesData((prevState) => {
                    return [...prevState, ...res.data.results];
                });
            });
            setPage(page + 1);
        }
    };

    return (
        <div className={classes.search}>
            <div className={classes.content}>
                <h3 className={classes.title}>搜索關鍵字 {query}</h3>
                <MovieGrid moviesData={moviesData} />
            </div>
            <Pagination />
        </div>
    );
};

export default Search;
