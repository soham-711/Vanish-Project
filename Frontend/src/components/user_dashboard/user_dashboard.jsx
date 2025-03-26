import React from 'react'

const User_dashboard = () => {
  return (
    <div>
        <div>
            <p className="bg-amber-400 rounded-full px-5 py-2 inline-block ">Hi Saikat</p>
        </div>
       {/* publish and delete parent navabar start */}
        <div className=' bg-gray-500   '>
            
        {/* publish and delete navabar start */}
<div className='flex bg-amber-500 flex-row-reverse gap-4 mr-10 py-2 '> 

<button className='px-5 bg-amber-600 p-4 rounded-4xl cursor-pointer'>PUBLISH</button>

    <button className='px-5 bg-red-600 p-4 rounded-4xl cursor-pointer'>Delete</button>
    
</div>
     {/* publish and delete navabar end */}
<div>
    <label> Enter Message</label>
    <input type='text' placeholder='Enter message'> </input>
</div>
     {/* publish and delete parent navabar end */}
 <div>
  
    <p>
        
    </p>
 </div>
        </div>
    </div>
  )
}

export default User_dashboard