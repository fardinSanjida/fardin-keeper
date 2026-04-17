import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useAppContext } from '../../context/AppContext';
import { FaCircle } from "react-icons/fa";

const chartColors = ['#059669', '#0ea5e9', '#8b5cf6'];

const Stats = () => {
    const { interactionCounts, summary } = useAppContext();

    const chartData = [
        { name: 'Call', value: interactionCounts.call },
        { name: 'Text', value: interactionCounts.text },
        { name: 'Video', value: interactionCounts.video },
    ];

    return (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                    Friendship Analytics
                </h1>
                

                <div className="mt-8 ">
                    <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 sm:p-6">
                      <p className="mt-3 font-semibold text-xl leading-7 text-slate-800">
                      By Interaction Type
                      </p>
                        <div className="h-[320px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        dataKey="value"
                                        nameKey="name"
                                        innerRadius={75}
                                        outerRadius={110}
                                        paddingAngle={5}
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip /> 
                                </PieChart>
                            </ResponsiveContainer>
                         </div>
                          <div className=" w-[40%] mx-auto flex">
                           <span className=" flex mx-auto item-center   text-xl font-semibold rounded-full"> <FaCircle className=" mt-1 mr-3 text-green-600" /> Call</span>
                           <span className=" flex mx-auto item-center  mr-5 text-xl font-semibold rounded-full">  <FaCircle className="mt-1 ml-3 mr-3 text-blue-400" />Text</span>
                           <span className=" flex mx-auto item-center  text-xl font-semibold rounded-full">  <FaCircle className="mt-1 mr-3 text-purple-500" />Video</span>
                          </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
