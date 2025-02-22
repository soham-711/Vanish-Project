
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
const gradientStyle = {
  backgroundImage: "linear-gradient(to left, #b2ef3c, #b8ed4d, #beec5c, #c3ea69, #c8e976, #cfe474, #d6de74, #dbd974, #e5cd6a, #edc162, #f5b55f, #fba85f)",

};
const gra={
  backgroundImage: "linear-gradient(to right top, #ff952a, #ff8729, #ff772a, #ff672d, #ff5531, #ff5f2e, #ff692c, #ff722a, #ff9427, #ffb430, #ffd243, #fbef5f)"
}




const User = () => {
  return (
    <div className='flex flex-row gap-10'>
      <div className=' w-[10%]   p-5 rounded-xl mt-10 flex flex-col gap-25 ml-5 h-[80%]' style={ gra}>
        <div className='m-auto'> 
                   <img src="/FireLogo.jpg " className='w-20 rounded-full' ></img>
        </div>
 
        <div className='flex flex-col gap-15 items-center '>  
      <p className='text-center'>Social Media</p>
       <a href="" className='text-5xl'><FaInstagram className='text-dark hover:text-orange-600 cursor-pointer' /></a> 
       <a href="" className='text-5xl'><IoLogoTwitter className='text-dark hover:text-blue-400 cursor-pointer'/></a>
        
        <a  href="" className='text-5xl'><FaFacebookSquare className='text-dark hover:text-blue-600 cursor-pointer' /></a>
        
      </div>

      </div>

<div className='w-[90%] h-screen bg-amber-100 rounded-xl '>
<div className="w-full h-[50px]  mt-8 " style={gradientStyle}></div>

<div className=' bg-amber-300 w-full'>


</div>

</div>


    </div>
  )
}

export default User