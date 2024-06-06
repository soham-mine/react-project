import React, { useEffect, useState } from 'react';
import Head from './Head';

function Table3() {
    <Head/>
  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        setMyArray(data.data);
        console.log(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const buildTable = () => {
    return (
      <tbody>
        {myArray.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.first_name}</td>
            <td className="border px-4 py-2">{item.last_name}</td>
            <td className="border px-4 py-2">{item.email}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="bg-gray-100 p-9">
      <table className="table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px- 4py-2">First</th>
            <th className="px-4 py-2">Last</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        {buildTable()}
      </table>
    </div>
  );
}

export default Table3;
