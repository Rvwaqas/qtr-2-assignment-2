import Image from "next/image";

export default function Home() {
  return (
   <div className="w-[1440px] h-full bg-[#252B42]">
    {/* main nav div  */}
  <div className="w-[1322px] h-[91px] m-auto flex justify-around items-center ">
    
    <div className="w-[187px] h-[58px] mt-6">
              <h3 className="text-[#ffffff] font-mono font-[700] text-[24px] leading-[32px] tracking-[0.1px]">BrandName</h3>
    </div>

    <div className="w-[815px] h-[58px] text-white  flex space-x-3 justify-between items-center">
          <ul className="flex space-x-3">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>

          <div className="w-[189px] h-[52px]">
      <button className="w-[41px] h-[22px] font-bold text-[14px] leading-[22px] tracking-[0.2px]">Login</button>
      <button className="ml-[30px] w-[110px] h-[52px] rounded-[5px] px-[12px] gap-[15px] py-[5px] bg-[#23A6F0]">Join Us</button>
      </div>    
    </div>

    
              
  </div>  
      {/* main nav div end */}


    {/* hero sextion start */}
    
      <div className="py-[80px] w-[1046px] h-[1000px] mt-[104px] mx-auto">
        <div className="py-[40px] text-center  w-[700px] h-[496px]">
          <h1 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23A6F0] text-center">welcome</h1>
            <h1 className="font-bold text-[58px] leading-[100px] tracking-[0.2px] text-white">Sell on the</h1>
            <h1 className="font-bold text-[58px] leading-loose-[80px] tracking-[0.2px] text-white">internet like a pro</h1>
            <p className="font-normal text-[20px] leading-[20px] tracking-[0.2px] text-white">We know how large objects will act, but things on a 
            small scale just do not act that way.</p>
          <div className="gap-[15px]  h-[52px] mt-6 flex justify-center items-center ">
              <button className="w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0] text-white  ">Get Quote Now</button>
              <button className="font-bold text-[14px] border  border-dashed border-[#23A6F0] w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px]  text-[#23A6F0]  ">Learn More</button>
          </div>
        </div>
        <div className=" w-[700px] h-[300px] flex flex-1 gap-[30px] justify-around items-center">
          <div className="w-[200px] h-[180px] py-[20px] px-[25px] bg-white">
              <h1 className="w-[35px] h-[40px] rounded-[7px] bg-[#FFDCD1]"></h1>
              <h1 className="font-bold text-[10px] text-[#252B42] leading-[30px]">training Courses</h1>
              <h1 className="w-[25px] h-[1px] bg-[#E74040]"></h1>
              <p className="font-normal pt-3 text-[10px] leading-[15px] tracking-[0.2px]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
          </div>

          <div className="w-[200px] h-[180px] py-[20px] px-[25px] bg-white">
              <h1 className="w-[35px] h-[40px] rounded-[7px] bg-[#E9BAA8]"></h1>
              <h1 className="font-bold text-[10px] text-[#252B42] leading-[30px]">2,769 online courses</h1>
              <h1 className="w-[25px] h-[1px] bg-[#E74040]"></h1>
              <p className="font-normal pt-3 text-[10px] leading-[15px] tracking-[0.2px]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
          </div>

          <div className="w-[200px] h-[180px] py-[20px] px-[25px] bg-[#23A6F0]">
              <h1 className="w-[35px] h-[40px] rounded-[7px] bg-white"></h1>
              <h1 className="font-bold text-[10px] text-white leading-[30px]">training Courses</h1>
              <h1 className="w-[25px] h-[1px] bg-white"></h1>
              <p className="text-white font-normal pt-3 text-[10px] leading-[15px] tracking-[0.2px]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
          </div>
        </div>

      </div>
    
    
    
    {/* hero sextion start */}

   </div>
  );
}
