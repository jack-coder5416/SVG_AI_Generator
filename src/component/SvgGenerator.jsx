import React from 'react'
import { useState } from 'react'

const SvgGenerator = ({setSvgCode}) => {
  const [inp,setinp] = useState('');
  
  
  const handleClick = async ()=>{
      try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBzcfIqm-6ckDwh5nRaBVbeVuA6C506TOY',{
          method:'POST',
          body: `{"contents":[{"parts":[{"text":"SVG code for ${inp} icon with 90 width and 90 height"}]}]}`
        })
        const data = await response.json();
        const val = await data?.candidates[0]?.content?.parts[0]?.text;
        const match = val.match(/```xml([^`]+)```/);
        if (match) {
          setSvgCode(match[1]);
        }
        // console.log(match[1])
      } catch (error) {
        alert(error)
      }
  }
  const handleChange = (e)=>{
    setinp(e.target.value);
  }
  return (
    <div className='flex flex-col gap-5'>
       <textarea
          value={inp}
          onChange={handleChange}
          placeholder="Enter prompt..."
          rows="10"
          cols="40"
          className='border-[#92e84b] shadow-xl rounded-[4px] border-[5px] px-5 py-5 outline-none mx-auto'
        />
        <div onClick={handleClick} className=' cursor-pointer text-center
         text-[#fff] text-[17px] bg-[#175dc5] rounded-[10px] shadow-md py-2 hover:scale-[1.02] hover:bg-[#0f53b8]'>
          Generate
        </div>
    </div>
  )
}

export default SvgGenerator