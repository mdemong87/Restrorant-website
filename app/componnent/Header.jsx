'use client'
import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterSquare,AiFillFacebook} from "react-icons/ai";
import {FaPinterestSquare,FaInstagramSquare}from "react-icons/fa";
import {ImCross}from "react-icons/im";
import {FaBars}from "react-icons/fa";
import logo from "../../public/logo.svg";
import Container from "./Container";
import { useState } from "react";

export default function Header() {

const [manuOpem,setmanuOpen]=useState(false);



    return (
        <header className="w-screen pBg sticky top-0 border-b-2 border-green-800">
            <Container>

                <div className="grid  grid-cols-2 text-white items-center md:grid-cols-3">
                    <div className="hidden items-center justify-start md:flex">
                        <div className="flex gap-2 py-2 px-2">
                            <AiFillFacebook className="text-4xl cursor-pointer" />
                            <FaInstagramSquare className="text-4xl cursor-pointer" />
                            <AiFillTwitterSquare className="text-4xl cursor-pointer" />
                            <FaPinterestSquare className="text-4xl cursor-pointer" />
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                        <Image src={logo} height="300" width="300" alt="logo" />
                    </div>
                    <div className="flex justify-end">
                        <FaBars onClick={()=>setmanuOpen(true)} className="text-4xl cursor-pointer" />
                        {
                            manuOpem && <nav className="sBg manuside">
                            <div className="w-full flex justify-end items-center">
                            <ImCross onClick={()=>setmanuOpen(false)} className="text-3xl cursor-pointer pr-3 text-white"/>
                            </div>
                            <ul className="nabUl">
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>HOME</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>HOW IT STARTED</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>COLLECTIONS</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>RETURNS</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>CONTACT</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>HOW IT STARTED</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>COLLECTIONS</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>RETURNS</Link>
                                <Link className="text-lg hover:bg-slate-200 p-4" href={"/"}>CONTACT</Link>
                            </ul>
                        </nav>
                        }
                    </div>
                </div>
            </Container >
        </header >
    )
}
