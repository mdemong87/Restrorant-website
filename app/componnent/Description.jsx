import Review from "./Review";

export default function Description() {
    return (
        <div className="text-white mt-12 ml-8 mr-8">
            <h1 className="text-2xl font-medium text-gray-500">Make America Great Again’ is not just a campaign slogan, it’s a mission! Wear this tee with the same pride and conviction that our Founding Fathers demonstrated when creating the greatest country on earth, over 200 years ago!  </h1>
            <h1 className="text-3xl font-medium mt-10 mb-3 text-gray-500">Details:</h1>
            <ul className="text-gray-400 list-disc pl-10">
                <li>Made in the U.S.</li>
                <li>We only use Gilden 5000 Tee’s.</li>
                <li>True to size fit.</li>
                <li>Crew taped neck and shoulders. </li>
                <li>Heavy, 100% cotton material. </li>
                <li>Relaxed style ideal for everyday and casual wear. </li>
                <li>Authentic Sons A Bitches Licensed Apparels</li>
            </ul>


            <Review />
        </div>
    )
}
