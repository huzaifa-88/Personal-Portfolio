import { headerItems, userInfo } from "@/constants/constant"
import Image from "next/image"


const About : React.FC = () => {
    return(
        <section 
            id={headerItems.about.page}
            className="h-screen flex flex-col md:flex-row md:mb-0 mb-32 text-center justify-center items-center md:text-start"
        >
            <div className="md:ml-20 md:w-1/2 md:mr-16 md:p-0 p-6">
                <h2 className="md:text-5xl text-3xl my-6 font-semibold">About</h2>
                <h3 className="md:text-2xl text-xl">Let's Connect: Getting to Know Me!</h3>
                <p 
                    className="[&>p]:mt-5"
                    dangerouslySetInnerHTML={{__html: userInfo.about}}
                />
            </div>
            <div className="flex-col justify-center items-center text-center md:block hidden">
                <Image
                    src={userInfo.picture}
                    alt="dp"
                    width={300}
                    height={300}
                    className="rounded-full shadow-2xl mt-10"
                />
                {/* <div className="mt-3 w-3/4">
                    {
                        userInfo.skills.map(skill =>(
                            <span className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md">{skill}</span>
                        ))
                    }
                </div> */}
            </div>
        </section>
    )
}

export default About