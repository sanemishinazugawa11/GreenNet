import React from 'react'
interface cardProps {
    title: string;
    description:string;
    location:string;
    images?:string[];

}
function Card({title,description,location,images}:cardProps) {
  return (
    
    <div className='rounded-lg border-2 max-w-md flex flex-col gap-2  px-4 py-2 '>
        <h1 className='font-Montserrat '>title</h1>
        <h1 className='font-Montserrat '>description</h1>
        <h1 className='font-Montserrat w-20 h-10 bg-accent/30 border-[2px] border-x-bilbao-200/50 border-y-bilbao-200/50 rounded-md p-2 text-center  '>location</h1>

    </div>

  )
}

export default Card