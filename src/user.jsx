// import React from 'react'
// import Nav from './nav'
// import Button_home from './button-home'


// function User() {
//   const [members, setMembers] = useState([]);
//   const [reload, setReload] = useState(false);
//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.get(
//         'https://jsd5-mock-backend.onrender.com/members'
//       );
//       setMembers(response.data);
//       if (response.status === 200) {
//         setReload(!reload);}
//       };

//     getData();
//   }, [reload]);
//   return (
//     <><Nav />
//     <div>
//     <h2>Generation Thailand</h2>
//     <h2>User Home section</h2>
//     <Button_home />
//     </div>
//     <div>
//     <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Position</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map((member) => (
//             <tr key={member.id}>
//               <td className="w-2/6 h-10 border border-slate-700">{member.name}</td>
//               <td className="w-2/6 h-10 border border-slate-700">{member.lastname}</td>
//               <td className="w-2/6 h-10 border border-slate-700">{member.position}</td>
//               <td className="w-2/6 h-10 border border-slate-700">
//                 <button onClick={() => deleteData(member.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div></>
//   )
// }


// export default User
import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Button_home from './button-home';
import axios from 'axios';

function User() {
  const [members, setMembers] = useState([]);
  // const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://jsd5-mock-backend.onrender.com/members'
        );
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Nav />
      <div>
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
