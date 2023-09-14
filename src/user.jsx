
import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Button_home from './button-home';
import axios from 'axios';

function User() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
    
        const response = await axios.get(
          'https://jsd5-mock-backend.onrender.com/members'
        );
    
        if (response.status === 200 && response.data) {
          setMembers([...response.data]);
      } 
    };

    getData();
  }, []); 

  return (
    <>
      <Nav />
      <div style={{textAlign:'center', width:'50%', height:'Auto', margin:'auto', paddingTop:'25px'}}>
        <h2>Generation Thailand</h2>
        <h2>User Home section</h2>
        <Button_home />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;

