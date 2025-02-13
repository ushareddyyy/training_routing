import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <form >
        
          <input type="text" name="username" placeholder="Username" />
          <div>
          <input type="email" name="email" placeholder="Email"  />
          </div>
          <div>
          <input type="text" name="password" placeholder="Password"  />
          </div>
          <div>
          <input type="radio" /><label htmlFor="">Male</label>
          <input type="radio" /><label htmlFor="">Female</label>
          <input type="radio" /><label htmlFor="">other</label>
          
          </div>
          <div>
          <textarea name="" id="address"  />
          </div>
          <select name="" id="country">
            <option value="india">India</option>
            <option value="india">china</option>
            <option value="india">uk</option>
          </select>
        


        
      </form>
    </div>
  );
};

export default Dashboard;
