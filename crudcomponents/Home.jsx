import React from 'react'
import "./home.css"
import axios from 'axios'
const Home = () => {
    const[users,setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
        axios.get("")
        .then(res=>{
            //console.log(res.data)
            setUsers(res.data);
        }).catch(err=>console.log(err))
    })
  return (
    <section id="homeBlock">
        <artical>
            <h1>List of users</h1>
            <div className="createBtn">
                <Link path/>
            </div>
            <table>
                <thread>
                    <tr>
                        <th>s1.id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        users.map((user,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </artical>
    </section>
  )
}

export default Home