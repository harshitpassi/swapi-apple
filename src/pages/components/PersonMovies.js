import React from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';

const PersonMovies = ({movies}) => <Col md={6}>
    <h1>Films</h1>
    <ul>
        {movies.map(movie => {
            const dates = movie.release_date.split('-');

        return <li key={movie.title}> Episode {movie.episode_id} - {movie.title} ({dates[0]})</li>
        })}
    </ul>
</Col>

const mapStateToProps = ({person : {movies}}) => ({
    movies
});

export default connect(mapStateToProps)(PersonMovies);

