import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
function Detailsfetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://dummyjson.com/users').then((res) => {
            setData(res.data.users);
        })
    }, []);

  const fetch = () => {
    return data.map((item) => {
      return (
        <tr key={item.id} className="m-1">
          <th>{item.id}</th>
          <th>
            <img src={item.image} alt="p-pic" style={{width:"50px",height:"50px", borderRadius: "50%"}}/>
          </th>
          <th>{item.firstName}</th>
          <th>{item.lastName}</th>
          <th>{item.gender}</th>
          <th>{item.email}</th>
          <th>{item.username}</th>
          <th>{item.domain}</th>
          <th>{item.ip}</th>
          <th>{item.university}</th>
        </tr>
      );
    });
  };
  return (
    <>
      <h5
        className="text-center fw-bold text-light"
      >
        Dummy data <br/> 
      </h5>
      <table
        className="border  table table-dark table-borderless"
        style={{ borderRadius: "100px" }}
      >
        <thead className="border-bottom  p-1 text-center">
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>{fetch()}</tbody>
      </table>
    </>
  );
}

export default Detailsfetch;