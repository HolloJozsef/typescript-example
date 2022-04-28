import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
const API_URL="http://localhost:5002/api/pin"


function BucketList(props) {
    const [pinData,setPinData]=useState([])
    const returnPins=()=>{
        axios.get(API_URL+"?email="+localStorage.getItem('email'),{}).then((response)=>{
            setPinData(response.data)
        }).catch((error) => {
            console.log(error)
            throw error.response
        })
    }
    useEffect(() => {
        returnPins()
    }, [])
    const handleDelete=async (pinId)=>{
        console.log(pinId)
        axios.delete(API_URL,{'_id':pinId,'owner':localStorage.getItem('userId')}).then((response)=>{
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
            throw error.response
        })
    }
    const tableRows=pinData.map(
        (element)=>{
            return( 
                
              <tr key={element.id}>
                <td key={element.title}>{element.title}</td>
                <td key={element.desc} >{element.desc}</td>
                <td key={element.rating}>{element.rating}</td>
                <td key={element.lat}>{element.lat}</td>
                <td key={element.long}>{element.long}</td>
                <td><Button variant="outline-danger" onClick={()=>handleDelete(element._id)}>Delete</Button></td>
              </tr>
                
            )
        }
    )
    return(
        <div>
            
          <Table hover>
              <thead>
                <tr>    
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Description</th>
                  <th>Latitute</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
                
              </tbody>
            </Table>      
              
        </div>
    )
}

export default BucketList
