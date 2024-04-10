import Link from "next/link";
import Image from 'next/image'

const Resource = (): React.ReactElement => {
  return (
    <div className="bg-white pt-20 pb-20 flex justify-center">        
        <div className="text-black flex flex-col z-10 w-2/5">
            <h1 className="text-6xl text-bold text-center">Resources</h1>
            <span className="text-xl text-center mt-10">We have partnered with business on the same mission on ours to help local businesses. We have also added resources you need to start, run and grow your business.</span>
        </div>
    </div>
  )
}

export default Resource;