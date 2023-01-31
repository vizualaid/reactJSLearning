import React from 'react'
import './SearchBar.css';
const Header = (
  // { children }
  ) => {
  return (
    <div className="bg-orange-100 items-center py-1">
      <div className='w1 mx-auto w-full'>
        <h2 className='text-grey-100 text-center text-xl mb-5 uppercase font-bold '>Reading List</h2>
        <div className="flex justify-center pb-5">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-1/3 indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
        // value={searchValue}
        // onChange={handleInputChange}
        // onKeyDown={handleEnterSearch}
        />
      <button
        // onClick={handleButtonSearch}
        // disabled={!searchValue}
        className="bg-orange-400 px-6 py-2.5 w-1/7 text-left text-black rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >Search</button>
    </div>
        {/* <h1 className="header"></h1> */}
        {/* {children} */}
      </div>
      
    </div>
  )
}

export default Header;