import React from "react";

interface toastProps {
  message: string;
  handleClick : ()=> void
}

function Toast({ message , handleClick }: toastProps) {
  return (
    <div className="fixed  w-auto flex items-center justify-between gap-2 top-1/6 z-50 left-1/2 -translate-x-[50%] h-7vh px-4 py-2 rounded-lg font-Raleway bg-bilbao-200 border-[1px] border-x-bilbao-500/60 border-y-bilbao-500/60 text-text font-semibold font-stretch-200%">
      {message}
        <svg onClick={handleClick}  className="w-4 h-4 hover:cursor-pointer p-[1px] rounded-full border-[0.5px] text-text border-bilbao-600/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
      </div>
      
  );
}

export default Toast;
