import React from "react";
// import { useNavigate } from "react-router-dom";


export default function Head(){
       
    return(
        <nav className="bg-gray-800 mx-auto" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold">My Website</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/Table1" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Table1</a>
                <a href="/Table2" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Table2</a>
                <a href="/Table3" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Table3</a>
                <a href="/RegistrationForm" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">RegistrationForm</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      
    );
}