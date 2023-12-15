import React from 'react';

const Display =(props)=> {
    const renderData = ({orderData}) => {
        if(orderData){
            return orderData.map((item)=> {
                return(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.price}</td>
                    <td>{item.phone}</td>
                    </tr>
                )
            })
        }
    }
        return (
            <div className= "container" style={{backgroundColor:"lightblue"}}>
                <center><h2>Orders</h2></center>
                <table className="table">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Brand</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData(props)}
                    </tbody>
                </table>
            </div>
        )
    }



export default Display;