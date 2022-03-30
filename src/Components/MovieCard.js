import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//props -> movie

const MovieCard = (props) => {
    const { movie } = props
    console.log("MovieCard Component:-", movie);

    const navigate = useNavigate()

    function handleClick() {
        // redirect to the MoviesBookingPage component
        //  and pass the movie
        let movieId = movie.show.id
        navigate(`/bookmovie/${movieId}`, { state: { movie } })
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.show.image.original} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{movie.show.name}</Card.Title>
                    <Card.Text>
                        Language: {movie.show.language}
                        <br />
                        Status: {movie.show.status}
                    </Card.Text>
                    <Button variant="primary"
                        onClick={handleClick}
                    >Show More</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard;