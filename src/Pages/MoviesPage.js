import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";

// responcibility ->

// 1. get data from API using useEffect
// and store it in state name movies using
// setMovies with the help of useState

// 2. iterate over movies state using map function
// and display the movies data using MovieCard Component 
// by passing movie as props

const url = "https://api.tvmaze.com/search/shows?q=all"

//movies API call method
const getMovies = async () => {
    try {
        const response = await axios.get(url)
        console.log('response:-', response);
        return response.data
    } catch (error) {
        console.log('error while getting movies:-', error);
    }
}

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        // call getMovies function to get movies data
        getMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    console.log("MoviesPage Component:-", movies);


    return (
        <Container  >
            <Row>
                {
                    movies.map((movie) => {
                        return (
                            <Col className="mt-4">
                                <MovieCard key={movie.show.id} movie={movie} />
                            </Col>
                        )

                    })
                }
            </Row>
        </Container>
    )
}

export default MoviesPage;