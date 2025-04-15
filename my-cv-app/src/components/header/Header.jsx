import { useState } from 'react'
import './Header.css'

function Header() {
  
  return (
    <header>
        <div className='logo-name-wrapper'>
            <img className='photo' ></img>
            <h1 className='name'>
                OLEKSII POTAPOV
            </h1>
        </div>
        <div className='sum-wrap'>
            <h3>
                <p className='summary'>
                    Experienced Web developer with 3 years of expertise in using JavaScript, HTML/CSS, Angular, React and
                    other technologies to create outstanding customer experiences. Skilled in working collaboratively and
                    problem-solving to ensure customer satisfaction. Eager to expand and enhance frontend knowledge and
                    abilities, and an eﬀective communicator with an open-minded and solution- focused mindset, capable of
                    making valuable contributions to team eﬀorts.
                </p>
            </h3>
        </div>
        <nav className='contacts'>
            <div className='cont-wrap'>
                <a className='link' href="mailto:potapovaleksy@gmail.com">Email: potapovaleksy@gmail.com</a>
                <a target='_blank' className='link' href='https://www.linkedin.com/in/oleksii-potapov-2175441b3/'><b>linkedin</b></a>
            </div>
            <div className='cont-wrap'>
                <a target='_blank' className='link' href='https://github.com/Alex-Ptpv'><b>Github</b></a>
                <a className='link' href='tel:+491701150775'>Telephone: +491701150775</a>
            </div>
        </nav>
    </header>
  )
}

export default Header
