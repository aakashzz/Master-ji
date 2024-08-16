import React from 'react'

function Option({str}) {
  return (
    <div className='bg-gray-200 w-fit rounded-2xl px-1.5 mt-1'>
        <p className='text-[11px]'>{str}</p>
    </div>
  )
}

export default Option