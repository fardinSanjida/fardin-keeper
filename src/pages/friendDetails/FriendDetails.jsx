import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { TiArchive } from "react-icons/ti";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import Footer from '../../componenets/footer/Footer';



const FriendDetails = () => {

    const { id } = useParams();
    
   const friends = useLoaderData();
    const expectedFriend = friends.find(friend => friend.id === parseInt(id));
    console.log(expectedFriend,"expectedFriend");
  
    

    return (
        <div className= 'bg-gray-100' >
            
            {expectedFriend && (
                <div className=' w-[80%] pt-10 pb-10 gap-10 mx-auto flex'>
                <div className='w-[40%]'>
                     <div key={expectedFriend.id} className='card bg-base-100 border border-gray-200 shadow-sm '>
                        <figure><img src={expectedFriend.picture} alt="Friend" className='mt-5 w-15 h-15 object-cover rounded-full' /></figure>
                        <h2 className='text-2xl font-semibold text-center mt-2'>{expectedFriend.name}</h2>
                        
                        <h4 className='text-center mt-2 text-md font-medium text-green-900 bg-green-100 w-fit py-1 px-3 rounded-full mx-auto'>{expectedFriend.tags[0].toUpperCase()}</h4>
                        <p className=' w-fit mx-auto px-3 py-1 mt-2 mb-3 text-md text-white rounded-full'  style={{ backgroundColor: expectedFriend.status === "Overdue" ? "red" : expectedFriend.status === "On-track" ? "green" :  "orange",  }}>{expectedFriend.status}</p>
                        <p className='text-center mt-2 text-md text-gray-500'>{expectedFriend.bio} </p>
                        <p className='text-center mt-2 pb-3 text-md text-gray-500'> Preferred Contact: {expectedFriend.email} </p>
                    </div>
                     <div>
                         <h4 className ='text-2xl  bg-white  font-semibold justify-center mt-2 p-5 border-1 border-gray-200 flex gap-3 rounded' > <RiNotificationSnoozeLine className='font-semibold text-center mt-2'/> Snooze 2 weeks</h4>
                     </div>
                     <div>
                         <h4 className ='text-2xl  bg-white  font-semibold justify-center mt-2 p-5 border-1 border-gray-200 flex gap-3 rounded' > <TiArchive className='font-semibold text-center mt-2'/> Archive</h4>
                     </div>
                     <div>
                         <h4 className ='text-2xl text-red-500 bg-white font-semibold justify-center mt-2 p-5 border-1 border-gray-200 flex gap-3 rounded ' > <MdDeleteForever className='font-semibold text-center mt-2'/> Delete</h4>
                     </div>
                </div>
                <div className='w-[60%] mb-3'>
                    <div className=' grid  md:grid-cols-3 gap-4 mb-8 '>
                        <div className=' border border-gray-100 bg-white rounded-xl '>
                            <h4 className='text-2xl font-semibold text-center mt-6 border-grey-100 bg-white'>{expectedFriend.days_since_contact}</h4>
                            <p className='text-center mt-2 text-md text-gray-400 mb-6'>Days Since Contact</p>
                        </div>
                        <div className='border border-gray-100  bg-white rounded-xl '>
                            <h4 className='text-2xl font-semibold text-center mt-6 border-grey-100 '>{expectedFriend.goal}</h4>
                            <p className='text-center mt-2 text-md text-gray-400'>Goal(Days)</p>
                        </div>
                        <div className='border border-gray-100 bg-white rounded-xl '>
                            <h4 className='text-2xl font-semibold text-center mt-6 border-grey-100'>{expectedFriend.next_due_date}</h4>
                            <p className='text-center mt-2 text-md text-gray-400'>Next Due Date</p>
                        </div>
                    </div>
                    <div className='bg-white pl-6 mb-4 rounded-xl'>
                        <div className=' gap-2  items-center justify-between flex text-center '> 
                          <h4 className='text-2xl font-semibold border-grey-100 pt-5 mt-6 '>Relationship Goal</h4>
                          <button className=' btn btn-sm  mt-9 mr-4 btn-outline '> Edit</button>
                           </div>
                        <p className=' text-md text-gray-400 mt-3 pb-9 mb-8'>Connect every <span className=' font-bold text-black'>{expectedFriend.goal} days</span></p>

                    </div>
                    <div className='bg-white p-6 pb-7 rounded-xl'>
                     <h4 className='text-2xl border-grey-100 pt-3 '> Quick Check-In</h4>
                     <div className='grid md:grid-cols-3 gap-6 mt-4 '>
                       <div className=' border border-gray-100 bg-white items-center justify-center flex flex-col gap-2 mt-4'>
                            <h4 className=' mt-4 border-grey-100'> <MdOutlineWifiCalling3/></h4>
                            <p className='text-center mb-4 text-xl font-semibold text-black'>Call</p>
                        </div>
                         <div className=' border border-gray-100 bg-white items-center justify-center flex flex-col gap-2 mt-4 '>
                            <h4 className='  mt-4 border-grey-100'> <IoMdText /></h4>
                            <p className='text-center mb-4 text-xl font-semibold text-black'>Text</p>
                        </div>
                        
                         <div className=' border border-gray-100 bg-white items-center justify-center flex flex-col gap-2 mt-4 '>
                            <h4 className=' mt-4 border-grey-100'> <FaVideo /></h4>
                            <p className='text-center mb-4 text-xl font-semibold text-black'>Video</p>
                        </div>
                        
                        

                    </div>


                    </div>
                    
                </div>
                    
                           
                </div>
            )}
             <Footer />
        </div>
    );
};

export default FriendDetails;