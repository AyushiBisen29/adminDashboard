import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import "../../App.css";  // Adjust the path as per your project structure
import { useNavigate } from 'react-router-dom';

function AdminEmployee() {
  // const navigate = useNavigate();

  // const handleAdminClick = () => {
  //   navigate('/login');  // Replace '/admin-login' with the actual path to your admin login page
  // };

  // const handleEmployeeClick = () => {
  //   navigate('/employee-login');  // Replace '/employee-login' with the actual path to your employee login page
  // };

  return (
    <div className='demo'>
      <Container className='cards'>
        <Row>
          <Col className='cardA'>
            <Card  className="clickable-card">
              <Card.Body>
                <span className='demo'><AccountCircleIcon fontSize="large" className="admin" /></span>
                <Card.Title className='text-center card-titles'><h2>Admin</h2></Card.Title>
                <Card.Text className='text-center'>
                  Login as an administrator to access the dashboard to manage app data.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className='cardA'>
            <Card  className="clickable-card">
              <Card.Body>
                <span className='demo'><PeopleIcon fontSize="large" className="admin" /></span>
                <Card.Title className='text-center card-titles'><h2>Employees</h2></Card.Title>
                <Card.Text className='text-center'>
                  Login as a Teacher to create courses, assignments, and track student progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminEmployee;
