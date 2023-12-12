import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import Header from '../Header';

const apiUrl = process.env.REACT_APP_POST_URL;

const PlaceOrder = () => {
    // let params = useParams();
    let navigate = useNavigate();

    
// let sessionData = sessionStorage.getItem('userInfo');
//     let data = JSON.parse(sessionData)
    const initialValues = {
        id:Math.floor(Math.random() * 1000000),
        brand: "Levis",
        name:"Pooja",
        email:"pooja@gmail.com",
        price:Math.floor(Math.random()*1000),
        phone:9390597665,
        address:"weavers colony"
    }

    const [values,setValues] = useState(initialValues);

    const hanldeInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout = () => {
        console.log(values)
        fetch(`${apiUrl}/orders`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/viewOrder'))
    }

    return(
        <>
            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order For {values.brand}</h3>
                    </div>
                    <div className='panel-body'>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="phone" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="address" className="control-label">Address</label>
                                <input className="form-control" id="address"
                                name="address" value={values.address} onChange={hanldeInputChange}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <h2>Total Price is Rs. {values.price}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                                Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default PlaceOrder