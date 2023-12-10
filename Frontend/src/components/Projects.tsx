import { headerItems } from "@/constants/constant"
import Image from "next/image"
import python from "@/Images/python.png" 
import c from "@/Images/C++.png"
import cSharp from "@/Images/cSharp.png"
import ReactLogo from "@/Images/react.png"
import NextLogo from "@/Images/nextJS.png"
import SQLLogo from "@/Images/SQL.png"



const Projects : React.FC = () => {
    return(
        <section 
            id={headerItems.projects.page}
            className="md:max-h-screen h-screen md:my-0 my-56 md:mt-0 mt-72 flex flex-col text-center justify-center items-center md:text-start md:mb-24"
        >
            <div className="">
                <h2 className="md:text-5xl text-3xl my-6 font-semibold">{headerItems.projects.label}</h2>
            </div>
            <div className="flex md:flex-row flex-col md:justify-center md:items-center text-center md:space-x-4 space-y-6">
            <Image
                src={python}
                alt="404 Not found"
                className="lg:h-32 lg:w-32 h-28 w-28 mt-6"
            />
            <Image
                src={cSharp}
                alt="404 Not found"
                className="lg:h-36 lg:w-36 h-28 w-28"
            />
            <Image
                src={c}
                alt="404 Not found"
                className="lg:h-36 lg:w-36 h-28 w-28"
            />
            <Image
                src={ReactLogo}
                alt="404 Not found"
                className="lg:h-36 lg:w-36 h-28 w-28"
            />
            <Image
                src={NextLogo}
                alt="404 Not found"
                className="lg:h-36 lg:w-36 h-28 w-28"
            />
            <Image
                src={SQLLogo}
                alt="404 Not found"
                className="lg:h-36 lg:w-36 h-28 w-28"
            />
            </div>
        </section>
    )
}

export default Projects