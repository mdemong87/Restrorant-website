"use client"

import { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillStar, AiOutlineRight, AiOutlineTwitter } from "react-icons/ai";
import { CgMail } from "react-icons/cg";


export default function Righthero() {

    const [count, setcount] = useState(1);
    const [size, setsize] = useState('S');


    return (
        <div>
            <div className="">
                <h1 className="text-3xl text-gray-500">M.A.G.A. Tee</h1>
                <div className="flex items-center py-4">
                    <AiFillStar className="text-2xl text-yellow-300" />
                    <AiFillStar className="text-2xl text-yellow-300" />
                    <AiFillStar className="text-2xl text-yellow-300" />
                    <AiFillStar className="text-2xl text-yellow-300" />
                    <AiFillStar className="text-2xl text-yellow-300" />
                    <span className="text -2xl pl-2">1 review</span>
                </div>
            </div>
            <div className="border-y py-5">
                <div className="flex justify-between pb-4">
                    <h2 className="text-2xl">$35</h2>
                    <button className="text-yellow-300 flex items-center gap-2 hover:text-white"><p>Size Guide</p> <AiOutlineRight /> </button>
                </div>
                <div>
                    <span className="text-md font-medium">SIZE</span>
                    <div className="flex mt-1 gap-3">
                        <div onClick={() => setsize("S")} className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${size == "S" && "border-2 bg-gray-800"}`}>S</div>
                        <div onClick={() => setsize("M")} className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${size == "M" && "border-2 bg-gray-800"}`}>M</div>
                        <div onClick={() => setsize("L")} className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${size == "L" && "border-2 bg-gray-800"}`}>L</div>
                        <div onClick={() => setsize("XL")} className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${size == "XL" && "border-2 bg-gray-800"}`}>XL</div>
                        <div onClick={() => setsize("2XL")} className={`border w-10 h-10 flex items-center justify-center cursor-pointer ${size == "2XL" && "border-2 bg-gray-800"}`}>2XL</div>
                        <div onClick={() => setsize("UP")} className={`border w-fit px-2 h-10 flex items-center justify-center cursor-pointer ${size == "UP" && "border-2 bg-gray-800"}`}>3XL, 4XL, 5XL – Selling For special price</div>
                    </div>
                </div>

                <div className="mt-4">
                    <span className="text-md font-medium">COLOR</span>
                    <div className="flex mt-1 gap-3">
                        <div className="border w-10 h-10 flex items-center justify-center cursor-pointer">
                            <div className="border mrgin bg-gray-300" />
                        </div>
                        <div className="border w-10 h-10 flex items-center justify-center cursor-pointer">
                            <div className="border mrgin bg-gray-900" />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="text-md font-medium">QUANTITY</span>
                    <div className="flex mt-1 gap-3">
                        <div className="border w-60 h-10 flex items-center justify-between bg-gray-200 text-gray-900">
                            <button onClick={() => setcount((prev) => prev - 1)} className="bg-gray-400 cursor-pointer text-2xl font-medium h-full w-10 hover:bg-yellow-300 focus:bg-yellow-300">-</button>
                            <span>{count}</span>
                            <button onClick={() => setcount((prev) => prev + 1)} className="bg-gray-400 cursor-pointer text-2xl h-full w-10 font-medium hover:bg-yellow-300 focus:bg-yellow-300">+</button>
                        </div>
                        <div className="border w-60 h-10 flex items-center justify-center bg-gray-300 text-gray-950 font-bold cursor-pointer">ADD TO CART</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 py-5">
                <div className="border h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-sky-500">
                    <AiOutlineTwitter className="text-xl" />
                </div>
                <div className="border h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-blue-500">
                    <AiFillFacebook className="text-xl" />
                </div>
                <div className="border h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-red-600">
                    <AiFillInstagram className="text-xl" />
                </div>
                <div className="border h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-green-600">
                    <CgMail className="text-xl" />
                </div>
            </div>
        </div >
    )
}



