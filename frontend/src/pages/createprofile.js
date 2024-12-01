import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

function CreateProfile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateProfile = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (username && password && email) {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Save user data to localStorage or any state management library
        const newUser = { username, email, uid: user.uid };
        localStorage.setItem("user", JSON.stringify(newUser));

        // Redirect to login page
        navigate("/login");
      } catch (error) {
        setError(error.message); // Show error to the user
      }
    } else {
      setError("All fields are required.");
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
            <h2 className="text-center mb-4">Create Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleCreateProfile}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  size="lg"
                />
              </Form.Group>
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
                Create Profile
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateProfile;
