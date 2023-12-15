import React, {useState, useEffect} from 'react';
import './Fifth.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FifthDisplay from './FifthDisplay';
import Header from '../Header';

const apiUrl = process.env.REACT_APP_URL

const FifthPage =()=>{
    let params = useParams();

    const[home, setHome] = useState([]);
    const [homeList,setHomeList] = useState();
//     const[men, setMen] = useState([]);

    useEffect(()=>{
        console.log("renderComponent")
        fetch(`${apiUrl}/home&lifestyle`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data=>{
            setHome(data);
        }))
    }, [])
    
    const renderHome = (data) => {
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

    const handleHome = (event) => {
        console.log(event.target.value)
    }

    let size = params.size;

    useEffect(() => {
        sessionStorage.setItem('size',size)
        axios.get(`${apiUrl}/home&lifestyle?sizes=${size}`)
        .then((res) => {
            setHomeList(res.data)
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
            <img src="https://i.ibb.co/825dmT5/ani.jpg" alt="ani"/>
                <label style={{marginLeft:"3%"}}> Home & Living</label>
                    <select onChange = {handleHome} style={{width:"150px", marginTop:"9%"}}> 
                    {renderHome(home)}
                    </select>        
            </div>
            <FifthDisplay listData={homeList}/>
        </div>
        </>
    )
}

export default FifthPage;