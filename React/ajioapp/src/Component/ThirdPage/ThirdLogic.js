import React, {useState, useEffect} from 'react';
import './Third.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ThirdDisplay from './ThirdDisplay';
import Header from '../Header';

const apiUrl = process.env.REACT_APP_URL

const ThirdPage =()=>{
    let params = useParams();

    const[men, setMen] = useState([]);
    const [menList,setMenList] = useState();


    useEffect(()=>{
        console.log("renderComponent")
        fetch(`${apiUrl}/men`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data=>{
            setMen(data);
        }))
    }, [])
    
    const renderMen = (data) => {
        if(data){
            return data.map((item)=> {
                console.log(item.brand);
                return (
                    <option key = {item.id} >
                        {item.brand}
                    </option>
                )
            })
        }
    }

    const handleMen = (event) => {
        console.log(event.target.value)
    }

    let size = params.size;

    useEffect(() => {
        sessionStorage.setItem('size',size)
        axios.get(`${apiUrl}/men?sizes=${size}`)
        .then((res) => {
            setMenList(res.data)
        })
    });

//     useEffect(()=>{
//         console.log("renderComponent")
//         fetch(`${apiUrl}/men`,{method: 'GET'})
//         .then((res)=>res.json())
//         .then((data=>{
//             setMen(data);
//         }))
//     }, [])
    
//     const renderMen = (data) => {
//         if(data){
//             return data.map((item)=> {
//                 console.log(item.brand);
//                 return (
//                     <option key = {item.id} >
//                         {item.brand}
//                     </option>
//                 )
//             })
//         }
//     }

//     const handleMen = (event) => {
//         console.log(event.target.value)
    // }
    return (
        <>
        <Header/>
        <div className="row">
            <div className="leftpart">
            <img src="https://i.ibb.co/Q8XRhWR/men-logo.jpg" alt="men-logo"/>
                <label> Men</label>
                    <select onChange = {handleMen} style={{marginTop:"5%"}}> 
                    {renderMen(men)}
                    </select>        
            </div>
            <ThirdDisplay listData={menList}/>
        </div>
        </>
    )
}

export default ThirdPage;