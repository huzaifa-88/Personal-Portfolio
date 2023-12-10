import { headerItems } from "@/constants/constant"
import Image from 'next/image'
import facebook from '@/Images/fb_Grey.png'
import github from '@/Images/github.png'
import linkedin from '@/Images/linkedIn.png'
import twitter from '@/Images/twitter.png'



const Footer : React.FC = () => {
    return(
        <footer className="flex flex-col w-full">
            <hr className=" h-0.5 bg-neutral-200 border-0"/>
            <div className=" p-4 flex flex-row text-neutral-900 md:text-md text-sm justify-between">
                <div>© 2023 Huzaifa Mumtaz</div>
                <div className="flex flex-row items-center justify-center md:space-x-4 space-x-2">
                    <a href="https://github.com/huzaifa-88" rel="noreferrer" target="_blank">
                    <Image
                        src={github}
                        alt="dp"
                        className="md:w-10 w-6"
                    />
                    </a>
                    <a href="" rel="noreferrer" target="_blank">
                    <Image
                        src={twitter}
                        alt="dp"
                        className="md:w-8 w-5"
                    />
                    </a>
                    <a href="https://www.linkedin.com/in/huzaifa-mumtaz-276104235" rel="noreferrer" target="_blank">
                    <Image
                        src={linkedin}
                        alt="dp"
                        className="md:w-6 w-4"
                    />
                    </a>
                    <a href="" rel="noreferrer" target="_blank">
                    <Image
                        src={facebook}
                        alt="dp"
                        className="md:w-10 w-6"
                    />
                    </a>
                </div>

            </div>

        </footer>
    )
}

export default Footer