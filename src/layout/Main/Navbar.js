import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import fetchProductsByKeywordSearch from "../../redux/thunk/products/fetchProductsByKeywordSearch";
import fetchProductData from "../../redux/thunk/products/fetchProducts";





const Navbar = () => {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);



  const handleSearch = () => {
    dispatch(fetchProductsByKeywordSearch(search.toLowerCase()));
    console.log("Search String: ", search);
  }
  console.log("State in Navbar After Searching", state);


  const handleClearSearchField = () => {
    setSearch('');
    dispatch(fetchProductData())
  }






  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1>Moon Tech</h1>

        <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className='h-8 rounded-full w-full text-sm border-0 '
            type='text'
            value={search}
          />

          <button onClick={handleSearch} className="ml-4 text-white bg-blue-600 hover:bg-blue-700 px-4 text-sm rounded-sm ">
            Search
          </button>

          <ImCancelCircle onClick={handleClearSearchField} className="ml-3 cursor-pointer text-[33px] text-gray-600 hover:text-red-600"></ImCancelCircle>


        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
            <BsFillCartFill className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
