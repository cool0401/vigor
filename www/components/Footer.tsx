import Link from "next/link";
import Image from 'next/image'

const Footer = (): React.ReactElement => {
  return (
    <div className="w-full bg-black p-20 mx-auto flex flex-col items-center">
        <Image
            src="/images/logo.png"
            width={300}
            alt="Logo"
            height={300}
            className="pb-16"
        />

        <div className="w-full block flex-grow lg:flex lg:items-center border-b-2 border-gray-700 pb-4">
            <div className="text-sm lg:flex-grow flex justify-center">
            <Link href="#home" legacyBehavior>
                <a className="block mt-6 lg:inline-block lg:mt-0 text-white text-lg hover:text-white ml-6 mr-6">
                Home
                </a>
            </Link>
            <Link href="#services" legacyBehavior>
                <a className="block mt-6 lg:inline-block lg:mt-0 text-white text-lg hover:text-white mr-6">
                Services
                </a>
            </Link>
            <Link href="#resources" legacyBehavior>
                <a className="block mt-6 lg:inline-block lg:mt-0 text-white text-lg hover:text-white mr-6">
                Resources
                </a>
            </Link>
            <Link href="#investments" legacyBehavior>
                <a className="block mt-6 lg:inline-block lg:mt-0 text-white text-lg hover:text-white mr-6">
                Investments
                </a>
            </Link>
            <Link href="#reviews" legacyBehavior>
                <a className="block mt-6 lg:inline-block lg:mt-0 text-white text-lg hover:text-white mr-6">
                Reviews
                </a>
            </Link>
            <Link href="#contactus" legacyBehavior>
                <a className="block mt-6 lg:inline-block lg:mt-0 text-white text-lg hover:text-white mr-6">
                Contact Us
                </a>
            </Link>
            </div>
        </div>

        <h1 className="text-gray-500 text-xl mt-8">Copyright Reserved</h1>
    </div>
  )
}

export default Footer;