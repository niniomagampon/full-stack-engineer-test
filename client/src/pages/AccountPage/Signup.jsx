import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';

import api from '../../adapter/accounthandler';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [agree, setAgree] = useState(false);
    const [result, setResult] = useState([]);
    const navigate = useNavigate();

    const handleRegistration = async (event) => {
        event.preventDefault();

        const userData = {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
            userType
        };

        try {
            const response = await api.registerUser(userData);
            setResult(response.info)
            if(response.result === "success"){
                setTimeout(() => {
                    // redirect to login page
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            setResult([{ message: 'Unexpected error occurred', type: 'error' }])
        }
    };

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={8} md={6} lg={5} xl={4}>
                    <h2 className="mb-2 text-center">XCommerce</h2>
                    <h3 className="mb-4 text-center">Signup</h3>
                    <div>
                        {result.map((res, index) => (
                            <h6 key={index} className={res.type === 'error' ? 'text-danger' : 'text-success'}>
                                {res.message}
                            </h6>
                        ))}
                    </div>
                    <Form onSubmit={handleRegistration}>
                        <Form.Group controlId="formFirstName">
                            <Form.Control
                                className='my-4 text-center'
                                type="text"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Control
                                className='my-4 text-center'
                                type="text"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </Form.Group>
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
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Control
                                className='my-4 text-center'
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Control
                            className='text-center mb-1'
                            as="select"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                        >
                            <option value="" disabled>Are you a Customer or Seller?</option>
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                        </Form.Control>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                className='mb-4'
                                type="checkbox"
                                label={
                                    <span>
                                        I Agree to <a href='/'>terms and conditions</a>
                                    </span>
                                }
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                required
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="w-100">
                            Signup
                        </Button>
                    </Form>
                    <p className="text-center mt-3">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default SignupPage;
