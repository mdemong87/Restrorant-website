import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import Container from "./Container";
export default function () {
    return (
        <div className="pBg text-white px-5">
            <Container>
                <div className="pl-5">

                <div className='flex justify-center'>
                            <Image className="footerlogo" src={logo} height="800" width="800" alt="logo" />
                        </div>

                    <div className="grid grid-rows-4 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4  md:grid-rows-1 pt-10 pb-5 border-b-2 border-green-800">
                        <div className=''>
                        <h2 className="text-xl text-gray-400 font-medium">QUICK LINKS</h2>
                            <ul className="flex flex-col gap-5 my-7">
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOME</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOW IT STARTED</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">COLLECTIONS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">RETURNS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">CONTACT</Link>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl text-gray-400 font-medium">QUICK LINKS</h2>
                            <ul className="flex flex-col gap-5 my-7">
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOME</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOW IT STARTED</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">COLLECTIONS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">RETURNS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">CONTACT</Link>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl text-gray-400 font-medium">QUICK LINKS</h2>
                            <ul className="flex flex-col gap-5 my-7">
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOME</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOW IT STARTED</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">COLLECTIONS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">RETURNS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">CONTACT</Link>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h1 className="text-xl text-gray-400">Sign me up to RAJAH ROWING's emails
                            for access to exclusive offers.
                            </h1>
                            <div className="mt-5 flex gap-5 justify-center flex-col m-10">
                                <input className="w-full p-3 rounded-sm text-gray-950 placeholder:text-center" type="email" placeholder="Enter your email here" />
                                <button className="w-full border p-3 rounded-sm cursor-pointer bg-gray-400 text-gray-950 font-bold">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-center text-gray-300 py-7">
                            © 2023-Rajahrowing.com - All Right Resurved || Developd By <Link className="sCl" href={"https://www.facebook.com/mdemong87"}>Md Emon Hossen</Link>.
                        </p>
                    </div>

                </div>
            </Container>
        </div>
    )
}
