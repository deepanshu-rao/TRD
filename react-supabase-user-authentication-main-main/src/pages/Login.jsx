import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { supabase } from '../client';

import logo from './logo.jpeg';

const Login = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/homepage')


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo" />
      <h1>Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        

        <input 
         className="login-input"
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />

        <input 
         className="login-input"
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />

        <button className="login-submit-button" type='submit'>
          Submit
        </button>


      </form>
      <div className="login-link">
      Don't have an account? <Link to='/signup'><b>Sign Up</b></Link> 
    </div>
    </div>
  )
}

export default Login