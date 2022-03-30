import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// props -> name

const BookingForm = (props) => {
    const { name } = props

    const [userDetail, setUserDetail] = useState({
        name: "",
        email: ""
    })

    const [showForm, setShowForm] = useState(false)

    function handleChange(e) {
        setUserDetail({
            ...userDetail, [e.target.name]: e.target.value
        })
    }

    function handleBookNow() {
        // it will do the logic of opening the form on user click
        setShowForm(true)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        // it will stor the user movie booking details in session storage

        let movieBookingDetail = {
            MovieName: name,
            userDetail
        }
        // if no stored data in session
        // get access to array from session storge and add new date to it and then store it again
        let sessionStorageMoviesData = sessionStorage.movieBookingDetail
        console.log("movieBookingDetail:-", movieBookingDetail);
        if (!sessionStorageMoviesData) {
            // add data into aaray and store
            sessionStorage.setItem('movieBookingDetail', JSON.stringify([movieBookingDetail]));
        }
        else {
            let parseArray = JSON.parse(sessionStorageMoviesData)
            let newArrayStorage = [
                ...parseArray, movieBookingDetail
            ]
            sessionStorage.setItem('movieBookingDetail', JSON.stringify(newArrayStorage));
        }
        setUserDetail({
            name: "",
            email: ""
        })
        alert('You Booked your ticket succefully!')

    }

    return (
        <>
            {
                !showForm ?
                    <Button onClick={handleBookNow} variant="primary" type="submit">
                        Book Now
                    </Button>
                    :
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control defaultValue={name} disabled type="test" placeholder="Movie Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control required name="name" value={userDetail.name} onChange={handleChange} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required name="email" value={userDetail.email} onChange={handleChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

            }
        </>
    )
}

export default BookingForm;