import React from 'react'

function HeroPage() {
  return (
    <div className='flex flex-col items-center py-16'>
      <textarea className='border-3 w-2/3 h-80 p-5 text-xl' rows={6}></textarea>
      <div>
        <button>lowercase</button>
        <button>uppercase</button>
        <button>capitalize</button>
        <button>clear</button>
      </div>
    </div>
  )
}

export default HeroPage
