import { headerItems, userInfo } from "@/constants/constant"
import Image from "next/image"


const Intro : React.FC = () => {
    return(
        <section 
            id={headerItems.home.page}
            className="h-screen flex flex-col md:flex-row text-center justify-center items-center md:text-start"
        >
            <div>
                <Image
                    src={userInfo.picture}
                    alt="dp"
                    width={300}
                    height={300}
                    className="rounded-full shadow-2xl mt-10"
                />
            </div>
            <div className="md:ml-20 md:mt-0 mt-12 md:w-1/2">
                <h2 className="text-6xl font-semibold uppercase hidden md:block">Software Engineer</h2>
                <h2 className="text-xl mt-4 md:text-2xl">Hi, I&#39;m <span className="md:text-3xl text-red-600">{userInfo.name}</span></h2>
                <p 
                    className="mt-4 mb-4"
                    dangerouslySetInnerHTML={{__html: userInfo.heading}}
                />
                <button className="bg-teal-600 h-10 rounded text-neutral-100 px-4">Download CV</button>
            </div>
        </section>
    )
}

export default Intro