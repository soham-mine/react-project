import React , {Component} from 'react';
// import Head from './Head';

export class Table1 extends Component {
            
    render(){
        return(
            <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold my-8">Styling HTML Tables with Tailwind CSS</h1>
      <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-teal-500 text-white">
            <th className="py-2 px-3">Rank</th>
            <th className="py-2 px-3">Name</th>
            <th className="py-2 px-3">Points</th>
            <th className="py-2 px-3">Team</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-3">1</td>
            <td className="py-2 px-3">Domenic</td>
            <td className="py-2 px-3">88,110</td>
            <td className="py-2 px-3">dcode</td>
          </tr>
          <tr className="active-row bg-gray-100">
            <td className="py-2 px-3">2</td>
            <td className="py-2 px-3">Sally</td>
            <td className="py-2 px-3">72,400</td>
            <td className="py-2 px-3">Students</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-3">3</td>
            <td className="py-2 px-3">Nick</td>
            <td className="py-2 px-3">52,300</td>
            <td className="py-2 px-3">dcode</td>
          </tr>
        </tbody>
      </table>
    </div>
        );
    }
}