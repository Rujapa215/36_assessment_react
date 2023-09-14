
import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Button_home from './button-home';
import axios from 'axios';

function Admin() {
  const [members, setMembers] = useState([]);
  const [reload, setReload] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://jsd5-mock-backend.onrender.com/members'
      );
      setMembers(response.data);
    };

    getData();
  }, [reload]);

  const createData = async () => {
    const requestData = {
      name: name,
      lastname: lastName,
      position: position,
    };

    const response = await axios.post(
      'https://jsd5-mock-backend.onrender.com/members',
      requestData
    );

    if (response.status === 200) {
      setReload(!reload);
      // Clear input fields after successful creation
      setName('');
      setLastName('');
      setPosition('');
    }
  };

  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/members/${id}`
    );

    if (response.status === 200) {
      setReload(!reload);
    }
  };

  return (
    <>
      <Nav />
      <div>
        <h2>Generation Thailand</h2>
        <h2>Home - Admin section</h2>
        <Button_home />
      </div>

      <h3>Create user here</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
      />
      <button onClick={createData}>Save</button>

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
              <td className="w-2/6 h-10 border border-slate-700">{member.name}</td>
              <td className="w-2/6 h-10 border border-slate-700">{member.lastname}</td>
              <td className="w-2/6 h-10 border border-slate-700">{member.position}</td>
              <td className="w-2/6 h-10 border border-slate-700">
                <button onClick={() => deleteData(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
