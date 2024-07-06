// src/App.js
import React, { useState } from 'react';
import SvgPreview from './component/SvgPreview';
import './App.css'
import SvgGenerator from './component/SvgGenerator';
import { arrow } from './assets';
const App = () => {
  const [svgCode, setSvgCode] = useState('');

  const handleChange = (event) => {
    setSvgCode(event.target.value);
  };

  const handleCopy = ()=>{
        if(svgCode){
          navigator.clipboard.writeText(svgCode);
        }
  };


  return (
    <div className="flex flex-col items-center rounded-xl border-t-[#ffafbd] border-b-[#2193b0] border-x-[#cc2] border-[5px] justify-center m-10 py-10 gap-5">
      <h1 className='text-[32px] text-[#4858a8] font-mono font-semibold'>SVG Previewer</h1>
      <div className='flex md:flex-row flex-col gap-7 items-center mx-5 px-3'>
        <SvgGenerator setSvgCode={setSvgCode}/>
        <img src={arrow}/>
        <div className='flex flex-col gap-5'>
          <textarea
            value={svgCode}
            onChange={handleChange}
            placeholder="Enter SVG code here"
            rows="10"
            cols="40"
            className='border-[#92e84b] shadow-xl rounded-[4px] border-[5px] px-5 py-5 outline-none mx-auto'
          />
          <div className='flex flex-row justify-between'>
              <div onClick={handleCopy} className=' px-5 cursor-pointer text-center
              text-[#fff] text-[17px] bg-[#175dc5] rounded-[10px] shadow-md py-2 hover:scale-[1.02] hover:bg-[#0f53b8]'>
                Copy
              </div>
              <div className=' px-5 cursor-pointer text-center
              text-[#fff] text-[17px] bg-[#175dc5] rounded-[10px] shadow-md py-2 hover:scale-[1.02] hover:bg-[#0f53b8]'>
                Download
              </div>
          </div>
        </div>
        <img src={arrow}/>
        <div className='border-[#ddd] border-[4px] min-h-[100px] max-h-[100px] min-w-[100px] items-center justify-center flex flex-col bg-custom-radial-gradient'>
          <SvgPreview svgCode={svgCode} />
        </div>
      </div>
    </div>
  );
};

export default App;
