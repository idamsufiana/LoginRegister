import React, {useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() =>{
      refreshToken();
    },[]);

    const refreshToken = async() =>{
        try{
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            console.log(decoded);
            setName(decoded.name);

        } catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }


  return (
    <h4 className='title'>Welcome back: {name}</h4>
  )
}

export default Dashboard