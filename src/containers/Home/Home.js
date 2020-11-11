import React from "react";
import tmdbApi from '../../api/tmdb'


const home = () => {
    // tmdbApi.detail(550).then(res=>{
    //     console.log(res)
    // })
    tmdbApi.upcoming().then(res=>{
        console.log(res)
    })
    return (
        <div className="home">
            home
        </div>
    );
};

export default home;
