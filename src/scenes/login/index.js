import React, { useState } from 'react';
// import logo from "../../../public/image/user.png"; // Corrected path for the image import
import "../../style.css"; // Assuming this is your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import { Link } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning'>
          {/* Additional content if needed */}
        </div>
        <div className="logo">
          <img src={`../../assets/user.png`} alt="User Logo"  width="50px" /> {/* Using imported logo variable */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email:</strong></label>
            <input 
              type="email" 
              name="email" 
              autoComplete="off" 
              placeholder="Enter Email" 
              value={values.email}
              onChange={(e) => setValues({...values, email: e.target.value})} 
              className='form-control rounded-0' 
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password:</strong></label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter Password" 
              value={values.password}
              onChange={(e) => setValues({...values, password: e.target.value})} 
              className='form-control rounded-0' 
            />
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
          <div className='mb-1'>
            <input type='checkbox' name='tick' id="tick" className='me-2' />
            <label htmlFor='tick' style={{color:'black'}}>You agree with our terms & conditions</label>
            <br/>
           <center><Link style={{textAlign:"center"}} to={"/signup"}>Signup</Link> </center> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
