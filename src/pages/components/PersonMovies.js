import React from 'react';
import {connect} from 'react-redux';

const PersonMovies = ({movies}) =>  <>
    <ul>
        {movies.map(movie => {
            const dates = movie.release_date.split('-');

        return <li key={movie.title}> Episode {movie.episode_id} - {movie.title} ({dates[0]})</li>
        })}
    </ul>
</>

const mapStateToProps = ({person : {movies}}) => ({
    movies
});

export default connect(mapStateToProps)(PersonMovies);

