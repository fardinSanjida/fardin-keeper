import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <div>
           <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">

    <a class="btn btn-ghost font-bold text-xl">Keen<span className=' text-green-800 '>Keeper</span></a>
    </div>
  <div class="navbar-end">
    <a class="btn bg-green-800 text-white border-0"><RiHome2Line />Home</a>
     <a class="btn border-0"><RiTimeLine />Timeline</a>
      <a class="btn border-0"><ImStatsDots />Stats</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;