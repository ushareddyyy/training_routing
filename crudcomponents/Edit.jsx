import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './create.css';

const Edit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();
    const data=useParams();
    console.log(data)
    //!to read or populate individual data
    useEffect(()=>{
      axios.get("http://localhost:8000/users/"+data.userId)
      .then(res=>{
        setName(res.data.name);
        setName(res.data.email);
        setName(res.data.phone);
        //console.log(res);
      }).catch(err=>console.log(err));
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { name, email, phone };
        axios.put("http://localhost:8000/users/"+data.userId,payload)
        
    };

    return (
        <div className="formBlock">
            <h1 className="h1">Update User</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <br />

                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />

                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <br />

                <button type="submit">Update User</button>
                <br />
                <Link to="/">Back to Homepage</Link>
            </form>
        </div>
    );
};

export default Edit;
