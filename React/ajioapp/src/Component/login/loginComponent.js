import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const url = process.env.REACT_APP_LOGIN_API_URL

const Login = () => {

    let navigate = useNavigate();
    const [message,setMessage] = useState('')

    const initialValues = {
        email:'pooja@gmail.com',
        password:"9390597665"
    }

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout=()=> {
        console.log(values)
        fetch(`${url}/login`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate('/')
            }
        })
    }

    return (
        <>
        <Header/>
        <div className="container">
        <hr/>
        <div className="panel panel-danger">
            <div className="panel panel-heading">
                <h3>Login</h3>
            </div>
            <div className='panel-body'>
            <h2 style ={{color:'red'}}>{message}</h2>
                        <div className='row'>
                            
                            <div className='col-md-6 form-group'>
                                <label htmlFor="email" className='control-label'>Email</label>
                                <input className='form-control' id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label htmlFor="password" className='control-label'>Password</label>
                                <input className='form-control' id="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                       </div>
                       <button className='btn btn-warning' onClick={checkout}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
