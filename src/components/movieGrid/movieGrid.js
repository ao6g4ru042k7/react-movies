import MovieBox from "../movieBox/movieBox";
import classes from './movieGrid.module.scss'

const movieGrid = ({ moviesData }) => (
    <div className={classes.movieGrid}>
        {moviesData.map((movieData) => (
            <MovieBox data={movieData} key={movieData.id}/>
        ))}
    </div>
);

export default movieGrid;
