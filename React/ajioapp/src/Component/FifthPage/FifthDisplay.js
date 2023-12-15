import React from 'react';
import {Link} from 'react-router-dom';

const FifthDisplay =(props)=> {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                    return(
                        <div className='women_item' key={item._id}>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img src={item.image} alt={item.image}
                                    className='Image'/>
                                </div>
                                <div className='col-md-7'>
                                    <div className='name_women'>
                                        <Link to={`/details?id=${item.id}`}> 
                                            {item.brand}
                                        </Link>
                                    </div>
                                    <div className='women_name' style={{color: "green", fontSize:"18px", marginBottom:"2.5%"}}>{item.info}</div>
                                    <div className='women_name'style={{marginBottom:"1.5%"}}>Price: &#8377;{item.price}</div>
                                    <div className='women_name' style={{marginBottom:"7.5%"}}>Average rating: {item.average_rating}</div>
                                    
                                    <div className='labelDiv'>
                                        <span className='label label-warning'>
                                           size: {item.size}
                                        </span> &nbsp;&nbsp;
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }else{
                return(
                    <h2>No Data Found</h2>
                )
            }
        }else{
            return(
                <div>
                    <h2>Loading....</h2>
                </div>
            )
        }
        
    }


    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default FifthDisplay;
