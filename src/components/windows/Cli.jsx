import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'Full-stack developer with a strong foundation in Java, Data Structures & Algorithms, and RAG systems using LangChain. B.Tech CSE student, focused on backend and system design fundamentals for Software Engineer roles.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Languages: Java, JavaScript, TypeScript
Frontend: React.js, HTML5, CSS3, SCSS
Backend: Node.js, Express.js, REST APIs, JWT Authentication
Database: MongoDB (Schema Design, Indexing), Milvus (Vector Search)
AI/GenAI: LangChain, LangGraph, RAG, Groq
CS Fundamentals: Data Structures & Algorithms, OOP, DBMS, Operating Systems
Tools: Git, GitHub, Postman`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. AI-Powered RAG Q&A Chatbot - LangChain.js, Express, React, Milvus, Groq (in development)
2. Gamified Productivity Dashboard - React, Node.js, Express, MongoDB`
        },
        education: {
            description: 'Display education',
            usage: 'education',
            fn: () => `Lakshmi Narain College of Technology & Science
  B.Tech Computer Science Engineering, CGPA: 8.48/10 (Expected May 2027)

Shivpuri Public School
  Class 12 - 90.6% | Class 10 - 96.6%`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: kartiksharna321@gmail.com
Phone: 9589818471
GitHub: github.com/whykartik`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/whykartik', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => {
                window.open('/resume.pdf', '_blank')
                return 'Opening resume...'
            }
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my education, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • education - See my academic background
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'kartiksharma:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli