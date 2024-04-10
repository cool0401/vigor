import Link from "next/link";
import Image from 'next/image'

const Service = (): React.ReactElement => {
  return (
    <div className="bg-black pt-20 pb-20 relative">
        <Image
            src="/images/leave.png"
            width={400}
            height={400}
            alt="Leave"
            className="absolute top-0 end-0"
        />  
        <div className="text-white px-60 flex flex-col z-10">
            <h1 className="text-6xl text-semibold ml-10">Services</h1>
            <span className="text-2xl text-center mt-10">"The ease of opening an account completely won me over. The app is very easy to navigate and it's obvious they have the best  insterests of SMES at heart. I 'm  proud to call them my bank"</span>
            <span className="text-center mt-12 text-gray-500">Clokubi Adedipe Cdu Fahsion</span>
        </div>
        <Image
            src="/images/nature.png"
            width={200}
            height={200}
            alt="Leave"
            className="absolute left-48"
            style={{bottom:'-80px'}}
        /> 
    </div>
  )
}

export default Service;