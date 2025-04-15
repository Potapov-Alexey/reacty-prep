import { useState } from 'react'
import './Main.css'

function Main() {

  return (
    <main className='main'>
        <section className='work-experience'>
            <h2>WORK EXPERIENCE</h2>
            <div className='position-wrap'>
                <h3>
                    Front End Software Developer (Software
                    Product Development)
                </h3>
                <h4>06/2021 - 09/2022, Krakow/Poland</h4>
                <p>
                    Achievements/Tasks
                     - Improved UX: Collaborated with UX team to enhance app
                    usability. Implemented front-end changes for smoother
                    navigation, boosting user satisfaction.
                     - Faster Loading: Optimized front-end for quicker page loads.
                    Reduced file sizes and implemented caching, improving
                    performance.
                </p>
            </div>
            <div className='position-wrap'>
                <h3>
                    Front End Software Developer (Digital
                    Transformation)
                </h3>
                <h4>09/2019 - 06/2021, Dnipro, Ukraine</h4>
                <p>
                    Achievements/Tasks
                     - Responsive Design: Developed a responsive UI for digital
                    document system, enhancing accessibility across devices.
                    Increased user engagement and satisfaction.
                     - Feature Implementation: Added search functionality for
                    document retrieval and streamlined document management
                    processes. Increased system eﬃciency and user adoption.
                </p>
            </div>
        </section>
       <section className='right-block'>
            <div className='skills'>
                <div>
                <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>HTML5</span>
                    <span>CSS/SCSS</span>
                    <span>React</span>
                    <span>React Router</span>
                    <span>Material UI</span>
                    <span>Redux</span>
                    <span>Angular</span>
                    <span>RxJS</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>MongoDB</span>
                    <span>PgSQL</span>
                    <span>Jest</span>
                    <span>Mocha</span>
                    <span>Docker</span>
                    <span>Agile/Scrum</span>
                    <span>Figma</span>
                    <span>PowerPoint</span>
                    <span>AWS</span>
                    <span>Datadog</span>
                </div>
            </div>
            <div>
                <h2>ACHIEVEMENTS</h2>
                <p>College Diploma (01/2023 - 05/2024)
                    Completed Software Development program in Keyin College, Canada
                </p>
                <div className='achiv-wrap'>
                    <span className='achiv'>
                        <b>AWS Academy Graduate - AWS Academy Cloud
                        Architecting
                        </b> 
                        https://www.credly.com/badges/8edcec7b-b71b-45e4-b0ec-
                        6fcd085bbd48/public
                        url
                    </span>
                    <span className='achiv'> 
                        <b>AWS Academy Graduate - AWS Academy Cloud
                        Foundations
                        </b> 
                        https://www.credly.com/badges/96f96eec-c912-45f7-a693-
                        953fe5e3eb7b/public
                        url
                    </span>
                    <p className='achiv lang'>
                        <b>LANGUAGES</b> <br />
                        <span> <b>Russian</b> Native or Bilingual Proficiency</span> <br />
                        <span><b>Ukrainian</b>  Native or Bilingual Proficiency</span> <br />
                        <span><b>English</b> Full Professional Proficiency </span> 
                        
                    </p>
                </div>
            </div>
       </section>
    </main>
  )
}

export default Main;
