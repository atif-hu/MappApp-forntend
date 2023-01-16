import './register.css'
import { Room,Cancel } from '@material-ui/icons'
import { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'

function Register({setShowRegister}) {

    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)

    const nameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newUser={
            username:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        };

        try {
            await axios.post('/users/register',newUser)
            setSuccess(true);
            setError(false);
        } catch (err) {
            setSuccess(false)
            setError(true)
        }
    }

  return (
    <div className='registerContainer' style={{zIndex:"1", position:"absolute"}}>
        <div className="logoR">
            <Room/>
            MappApp
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' ref={nameRef}/>
            <input type="email" placeholder='email' ref={emailRef}/>
            <input type="password" placeholder='password' ref={passwordRef}/>
            <button className='registerBtn'>Register</button>

            {success && (<span className="success">Successful. You can login now</span>)}
            {error && <span className="failure">Something went wrong!</span>}

        </form>
        <Cancel className='cancelBtn' onClick={()=>setShowRegister(false)}/>
    </div>
  )
}

export default Register