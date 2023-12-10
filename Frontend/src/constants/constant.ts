import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"

export const userInfo: UserObject = {
    name: 'Huzaifa Mumtaz',
    picture : 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D',
    heading : 'Embracing the World of Computer Science: Merging Creativity and Logic. With a passion for technology, I craft solutions that blend innovation and functionality, navigating the digital landscape to create impactful and efficient solutions. Join me on this journey through algorithms and software engineering as we shape tomorrow"s possibilities today',
    about : `
            <p>As a computer science enthusiast fascinated by the fusion of creativity and technology. I began my journey into coding with a keen interest in problem-solving and a quest for innovation. Exploring the realms of algorithms and software engineering, I thrive on crafting efficient, impactful solutions.</p>
            <p>In 2021, I started my journey in the field of science. I'm always eager to learn and explore. This drive keeps me motivated to take on challenges, expand my knowledge, and reach new frontiers.</p>
            <p>I have wide range of hobbies and passions that keep me busy. From reading, playing sports, watch movies, I am always seeking new experinces and love to keep myself engaged and learning new things.</p>
            `,
    skills : ['React', 'Next JS', 'Data Structures', 'Microsoft SQL', 'Desktop Applications', 'MongoDB', 'Python', 'C++', 'Win-UI3']
}

export const headerItems: NavItems = {
    home: {label: 'Home', page: 'home'},
    about: {label: 'About', page: 'about'},
    language: {label: 'Languages', page: 'language'},
    projects: {label: 'Projects', page: 'projects'}
}