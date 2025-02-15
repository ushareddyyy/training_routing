import React, { useEffect, useState } from 'react';
import "./home.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []); // Added dependency array to prevent infinite requests
    //!to delete user
    const deleteUser=id=>{
        const confirm=window.confirm("Are you want to delte user")
        if(confirm){
            axios.delete("http://localhost:8000/users/"+id)
            /* .then(res=>{
              toast.success("user deleted successfully");
            }).catch */
        }
    }

    return (
        <section id="homeBlock">
            <article> {/* Fixed typo: 'artical' to 'article' */}
                <h1>List of Users</h1>
                <div className="createBtn">
                    <Link to='/create'>Add User (+)</Link>
                </div>
                {
                    users.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => (
                                        <tr key={user.id || i}> {/* Using user.id if available */}
                                            <td>{i + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <Link to={`/edit/${user.id}`}>Edit</Link>
                                                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : <p>No users available.</p>
                }
            </article>
        </section>
    );
};

export default Home;
