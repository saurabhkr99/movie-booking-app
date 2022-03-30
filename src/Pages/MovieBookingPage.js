import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BookingForm from "../Components/BookingForm";
import MovieSummary from "../Components/MovieSummary";

// Responcibility ->
// 1. it will get each movie details from MovieCard component 
// by the help of useLocation 
// 2. it will display the MovieSummary & BookingForm component 
// 3. it will pass movie name & summary to MovieSummary component 
// 4. it will pass the movie name to the BookingForm component 

const MovieBookingPage = () => {

    const { state } = useLocation()
    console.log("Movie data fom useLocation", state);
    const { movie } = state

    return (
        <Container>
            <Row >
                <Col>
                    <MovieSummary name={movie.show.name} summary={movie.show.summary} img={movie.show.image.original} />
                </Col>
                <Col className="bookingForm">
                    <BookingForm name={movie.show.name} />
                </Col>
            </Row>
        </Container>
    )
}

export default MovieBookingPage;