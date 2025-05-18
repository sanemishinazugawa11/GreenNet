import React from 'react'

function Search() {
  return (
    
    <div className='w-full px-6 py-2 mt-5'>

        <div className='w-full p-2 flex items-center justify-center'>
            <input placeholder='search here' className='px-4 font-semibold font-Montserrat py-2 rounded-lg  bg-de-york-200/50 border-[1px] border-x-de-york-500/20 border-y-de-york-500/20 backdrop-blur-sm w-[80%]' type="text" />
            <button className='bg-malibu-300 text-text font-semibold font-Montserrat px-3 py-2 rounded-lg ml-2'>Search</button>
        </div>
    </div>

  )
}

export default Search