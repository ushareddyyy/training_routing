import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './create.css';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { name, email, phone };

        axios.post("http://localhost:8000/users", payload)
            .then(() => {
                toast.success("User created successfully");
                navigate("/");
            })
            .catch(() => toast.error("User not created"));
    };

    return (
        <div className="formBlock">
            <h1 className="h1">Create User</h1>
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

                <button type="submit">Create User</button>
                <br />
                <Link to="/">Back to Homepage</Link>
            </form>
        </div>
    );
};

export default Create;
