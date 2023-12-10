import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"

export const userInfo: UserObject = {
    name: 'Huzaifa Mumtaz',
    picture : 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D',
    heading : 'I&#39;m passionate Software developer and have expertise in developing and mainting software development life cycle.',
    about : `
            <p>As a passionate software engineer, I thrive on crafting elegant solutions to complex problems, leveraging my expertise in software development. With a relentless pursuit of innovation and a dedication to quality code, I aim to drive impactful and efficient results, contributing to cutting-edge projects and pushing the boundaries of technology.</p>
            <p>In 2021, my journey into the world of software engineering commenced, igniting my curiosity and passion for crafting innovative solutions. Since then, I've embarked on a fulfilling journey of learning, growth, and hands-on experiences, continuously evolving as a proficient software engineer driven by a fervent pursuit of knowledge and mastery in the field. </p>
            `,
    skills : ['React', 'Next JS', 'Data Structures', 'Microsoft SQL', 'Desktop Applications', 'MongoDB', 'Python', 'C++', 'Win-UI3']
}

export const headerItems: NavItems = {
    home: {label: 'Home', page: 'home'},
    about: {label: 'About', page: 'about'},
    language: {label: 'Languages', page: 'language'},
    projects: {label: 'Projects', page: 'projects'}
}