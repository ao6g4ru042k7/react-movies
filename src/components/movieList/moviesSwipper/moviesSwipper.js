import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useRef, useEffect } from "react";
import MovieBox from "../../movieBox/movieBox";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

import "swiper/swiper.scss";

import classes from "./moviesSwipper.module.scss";

SwiperCore.use([Navigation]);

const styled = {
    width: "min-content",
};

const MoviesSwipper = ({ moviesData, id }) => {
    console.log("moviesSwipper", moviesData);
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);
    return (
        <div className={classes.swiper}>
            <Swiper spaceBetween={12} slidesPerView={"auto"} navigation={{ nextEl: `.${id}n`, prevEl: `.${id}p`, disabledClass: classes.hide }}>
                {moviesData.map((data, index) => {
                    return (
                        <SwiperSlide style={styled} key={index}>
                            <MovieBox data={data} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <IconButton className={classes.next + ` ${id}n`} ref={nextBtn}>
                <ArrowForwardIos />
            </IconButton>
            <IconButton className={classes.prev + ` ${id}n`} ref={prevBtn}>
                <ArrowBackIos />
            </IconButton>
        </div>
    );
};
export default MoviesSwipper;
