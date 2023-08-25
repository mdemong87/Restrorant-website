import { AiFillStar } from "react-icons/ai";


export default function SingleReview() {
    return (
        <div>
            <div className="flex my-4">
                <AiFillStar className="text-2xl text-yellow-300" />
                <AiFillStar className="text-2xl text-yellow-300" />
                <AiFillStar className="text-2xl text-yellow-300" />
                <AiFillStar className="text-2xl text-yellow-300" />
                <AiFillStar className="text-2xl text-yellow-300" />
            </div>
            <h1 className="text-xl">Jhone Mickel</h1>
            <span className="text-gray-400"> Sep 02, 2020</span>
            <p className="pt-5">Very nice shirt, I got the grey and love it. Gonna be wearing it on 9-11.</p>
            <div className="flex justify-end">
                <span className="text-yellow-300">Report as Inappropriate</span>
            </div>
        </div>
    )
}
