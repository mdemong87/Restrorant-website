import { AiOutlineStar } from "react-icons/ai";


export default function WriteReview() {
    return (
        <div className='my-5 w-full borderB'>
            <div>
                <h1 className="py-2 font-medium text-md">BUYER NAME</h1>
                <input className="w-full p-3 text-gray-950" type="text" placeholder="Enter your name (public)" />
                <input className="w-full mt-5 p-3 text-gray-950" type="email" placeholder="Enter your email (private)" />
            </div>


            <div>
                <h1 className="py-2 font-medium text-md">RATING</h1>
                <div className="flex gap-3 pb-2">
                    <AiOutlineStar className="text-xl" />
                    <AiOutlineStar className="text-xl" />
                    <AiOutlineStar className="text-xl" />
                    <AiOutlineStar className="text-xl" />
                    <AiOutlineStar className="text-xl" />
                </div>
            </div>


            <div>
                <h1 className="py-2 font-medium text-md">REVIEW TITLE</h1>
                <input className="w-full p-3 text-gray-950" type="text" placeholder="Enter your name (public)" />
            </div>

            <div>
                <h1 className="py-2 font-medium text-md">BODY OF REVIEW <span>(1500)</span></h1>
                <textarea name="" id="" className="w-full p-3 h-40 text-gray-950" placeholder="Write your comment here..."></textarea>
            </div>

            <div className="w-full flex justify-end my-4">
                <button className="bg-yellow-300 rounded-sm text-slate-950 py-2 px-3 cursor-pointer font-bold">SUBMIT REVIEW</button>
            </div>


        </div>
    )
}
