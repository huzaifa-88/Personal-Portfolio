
import Intro from '@/components/Intro'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

const Main: React.FunctionComponent = () => {
    return(
        <div className='lg:mx-32 md:mx-4'>
            <Intro/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Main;