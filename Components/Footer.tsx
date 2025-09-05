import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-10 md:flex md:flex-row flex flex-col gap-2   px-3'>
        <div className='w-full  '>
            {/* <div className='w-full p-2 flex  flex-col gap-2 '>
                <h2 className='w-full text-start font-semibold font-Raleway '>Subscribe for newsletter</h2>
                <input className='w-full px-3 py-2 rounded-md bg-de-york-100 border-[0.5px] p-2 border-x-bilbao-500/30 border-y-bilbao-600/30' type="text" />
                <button className='max-w-md w-full bg-accent font-semibold font-Raleway px-3 py-2 rounded-md '>Submit </button>
            </div> */}

           <div className='flex w-full justify-end gap-2 p-2 items-center'>
             <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"></path></svg>
            <h1 className='font-Raleway font-semibold text-md'>2025-GreenNet, All rights reserved</h1>
           </div>
        </div>
    </div>
  )
}

export default Footer