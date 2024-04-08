import Link from "next/link";

const Home = (): React.ReactElement => {
  return (
    <div className="bg-second-color pt-20 pb-20 flex">
        <div className="pl-20 w-1/2 my-auto">
            <h1 className="text-5xl font-bold text-white pb-1">Vigor Health Care</h1>
            <h1 className="text-5xl font-bold text-emerald-750 pt-1 pb-1">Investment</h1>
            <h1 className="text-5xl font-bold text-white pt-1 pb-5">Platform</h1>
            <h1 className="text-base text-white pt-3 pb-6">You can Me, We Can Make Apollo Who is The God Of The Medical Art</h1>

            <Link href="#investments" legacyBehavior>
                <a className="inline-block text-sm px-6 py-4 leading-none rounded text-white bg-primary-color hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    Lets see Our Investment Plans
                </a>
            </Link>
        </div>
        <div className="pr-20 w-1/2">
            <div className="bg-amber-400 rounded-2xl" style={{width:'40vw', height:'40vw'}}></div>
        </div>
    </div>
  )
}

export default Home;