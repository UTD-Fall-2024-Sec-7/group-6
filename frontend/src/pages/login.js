import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState(""); // Replace username with email for Firebase
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      // Authenticate the user using Firebase Auth
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user);
      login(response.user);

      alert("Login successful!");
      navigate("/home"); // Redirect to the home page
    } catch (err) {
      // Handle errors and display error message
      setError(err.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col xs={12} md={8} lg={5} className="mx-auto">
          <div className="p-5 shadow rounded bg-light">
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  size="lg"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  size="lg"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                size="lg"
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
