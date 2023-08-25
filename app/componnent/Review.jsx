"use client"

import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import SingleReview from "./SingleReview";
import WriteReview from "./WriteReview";

export default function Review() {

    const [isshowreview, setisshowreview] = useState(false);

    return (
        <div className="my-8 border">
            <div className="m-5">
                <div className="w-full borderB">
                    <h1 className="text-2xl font-medium text-gray-400">Customer Reviews</h1>
                    <div className="flex justify-between">
                        <div className="flex items-center py-4">
                            <AiFillStar className="text-2xl text-yellow-300" />
                            <AiFillStar className="text-2xl text-yellow-300" />
                            <AiFillStar className="text-2xl text-yellow-300" />
                            <AiFillStar className="text-2xl text-yellow-300" />
                            <AiFillStar className="text-2xl text-yellow-300" />
                            <span className="text -2xl pl-2">Based on 1 review</span>
                        </div>
                        <button onClick={() => setisshowreview(!isshowreview)} className="text-yellow-300 flex items-center gap-2 hover:text-white">Write a Review</button>
                    </div>
                </div>

                {
                    isshowreview && <WriteReview />
                }


                <div>
                    <SingleReview />
                </div>


            </div>
        </div>
    )
}
