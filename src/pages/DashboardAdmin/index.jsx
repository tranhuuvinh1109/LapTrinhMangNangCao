import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dataViewBar } from '../../const'
import "./DashboardAdmin.css";



const DashboardAdmin = () => {
  return (
    <div className=" w-full h-full flex flex-col ">
      <div className="w-full h-20 flex items-center">
        <h1 className="text-2xl pl-8">Overall Statistic</h1>
      </div>
      <div className="w-full h-full">
        <ResponsiveContainer width="50%" height="50%" >
          <BarChart
            width={ 100 }
            height={ 300 }
            data={ dataViewBar }
            margin={ {
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            } }
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
};

export default DashboardAdmin;
