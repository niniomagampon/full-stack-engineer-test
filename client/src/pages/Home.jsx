import React from "react";
import { Container } from 'react-bootstrap';
import NavGlobal from "../components/global/Nav";

const Home = () => {
    return (
        <>
            <NavGlobal/>
            <Container fluid>
                This is home
            </Container>
        </>
    )
}

export default Home