import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../../styles/login.css';
import api from '../../adapter/accounthandler';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState([])
    const [result, setResult] = useState([])
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const userData = {
            emailAddress,
            password,
        };

        try {
            const response = await api.loginUser(userData);
            setUserInfo(response.data)
            setResult(response.info)

            if (response.result === "success") {
                setTimeout(() => {
                    // Redirect to homepage of the user. Check if seller or user.
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            setUserInfo([])
            setResult([{ message: 'Unexpected error occurred', type: 'error' }])
        }
    };

    const handleForgotPassword = () => {
        // Add your forgot password logic here
        console.log('Forgot password');
    };

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={8} md={6} lg={5} xl={4}>
                    <h2 className="mb-2 text-center">XCommerce</h2>
                    <h3 className="mb-4 text-center">Login</h3>
                    <div>
                        {result.map((res, index) => (
                            <h6 key={index} className={res.type === 'error' ? 'text-danger' : 'text-success'}>
                                {res.message}
                            </h6>
                        ))}
                    </div>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formEmail">
                            <Form.Control
                                className='my-4 text-center'
                                type="email"
                                placeholder="Enter Email Address"
                                value={emailAddress}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Control
                                className='my-4 text-center'
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="dark" type="submit" className="w-100">
                            Login
                        </Button>

                        <Button variant="link" className="w-100 mt-2" onClick={handleForgotPassword}>
                            Forgot Password
                        </Button>
                    </Form>
                    <p className="text-center mt-3">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
