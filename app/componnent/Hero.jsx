import Container from "./Container";
import Description from "./Description";
import Discount from "./Discount";
import LeftHero from "./Favourites";
import Righthero from "./Righthero";


export default function Hero() {
    return (
        <div className="hero">
            <video className="vidioWrp" autoPlay muted loop>
                <source className="vidio" src="https://rajahrowing.com/wp-content/themes/rajah_rowing/assets/videos/rajah.m4v" type="video/mp4" />
            </video>
        </div>
    )
}
