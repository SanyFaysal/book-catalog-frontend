
import logo from "../../assets/logo.png";
export default function HomeHeroSection() {
    return (
        <div className="  px-12  flex justify-between items-center text-white py-10 mx-[-48px] bg-gradient-to-r from-[#63abef] to-[#49e4f5] ">
            <div>
                <h1 className="text-4xl font-semibold  ">
                    Welcome to Our Beautiful
                    <br /> Book Catalog!
                </h1>

                <p className="text-2xl mt-5 ">
                    Explore a vast collection of captivating stories and literary wonders.
                </p>
            </div>
            <div>
                <img src={logo} className="max-w-" />
            </div>
        </div>

    )
}

