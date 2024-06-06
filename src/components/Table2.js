import React  from 'react';
// import Head from './Head';


    function App(){
        
            const myArray = [
                { 'name': 'Michael', 'age': '30', 'birthdate': '11/10/1989' },
                { 'name': 'Mila', 'age': '32', 'birthdate': '10/1/1989' },
                { 'name': 'Paul', 'age': '29', 'birthdate': '10/14/1990' },
                { 'name': 'Dennis', 'age': '25', 'birthdate': '11/29/1993' },
                { 'name': 'Tim', 'age': '27', 'birthdate': '3/12/1991' },
                { 'name': 'Erik', 'age': '24', 'birthdate': '10/31/1995' },
              ];
            
              const buildTable = (data) => {
                return (
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2 ml-7">{item.name}</td>
                        <td className="border px-4 py-2">{item.age}</td>
                        <td className="border px-4 py-2">{item.birthdate}</td>
                      </tr>
                    ))}
                  </tbody>
                );
              };
            
            return (
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <table className="table-auto bg-white shadow-md rounded-lg w-full">
                    <thead>
                      <tr className="bg-cyan-600">
                        <th className="px- py-2 justify-center">Name</th>
                        <th className="px-3 py-2">Age</th>
                        <th className="px-3 py-2">Birthday</th>
                      </tr>
                    </thead>
                    {buildTable(myArray)}
                  </table>
                </div>
             );
        }  
        export default App;     
        
    
