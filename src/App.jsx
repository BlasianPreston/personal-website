import React from 'react';
import Logo from './images/logo.png'
import Me from './images/graduation.png'
import Resume from './images/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faPython, faJava, faJs, faGitAlt, faReact, faDartLang, faFlutter, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

const App = () => {
    return (
        <>
            <body>
                <nav>
                    <div class='nav'>
                        <a href='#'>
                            <img class='nav-logo' src={Logo}></img>
                        </a>
                        <ul class='nav-links'>
                            <li class='link'><a href='#'>Home</a></li>
                            <li class='link'><a href='/#link1'>Skills</a></li>
                            <li class='link'><a href='#link2'>Projects</a></li>
                            <li class='link'><a href={Resume} target='_blank'>Resume</a></li>
                        </ul>
                        <ul class='socials'>
                            <li><a href='https://www.instagram.com/isiahw06/' target="_blank"><span><FontAwesomeIcon class='social-media' icon={faInstagram}/></span></a></li>
                            <li><a href='https://www.linkedin.com/in/isiah-preston-williams-72b581261/' target="_blank"><span><FontAwesomeIcon class='social-media' icon={faLinkedin}/></span></a></li>
                            <li><a href='https://github.com/BlasianPreston' target="_blank"><span><FontAwesomeIcon class='social-media' icon={faGithub}/></span></a></li>
                        </ul>
                    </div>
                </nav>
                <header class='container'>
                    <div class='content'>
                        <h4>Aspiring Computer Science Student</h4>
                        <h1>Hi, I'm <span class='name'>Preston</span></h1>
                        <p>I am a freshman at <a class='underlined' href='https://www.engineering.cornell.edu/' target='_blank'>Cornell Engineering</a> that is interested in exploring the different fields of computer science and engineering.
                            If you would like to get in contact with me, please feel free to email me at <span class='underlined'>ipw5@cornell.edu</span>.
                        </p>
                    </div>
                    <div>
                        <img class='me-image' src={Me}></img>
                    </div>
                </header>
                <section id='link1' class='container'>
                    <div class='skills-header'>
                        <h2>My Skills</h2>
                    </div>
                    <div class='features'>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faPython}/></span>
                            <h4 class='skill-label'>Python</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faJava}/></span>
                            <h4 class='skill-label'>Java</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faHtml5}/></span>
                            <h4 class='skill-label'>HTML</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faCss3Alt}/></span>
                            <h4 class='skill-label'>CSS</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faJs}/></span>
                            <h4 class='skill-label'>Javascript</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faReact}/></span>
                            <h4 class='skill-label'>React</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faDartLang}/></span>
                            <h4 class='skill-label'>Dart</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faFlutter}/></span>
                            <h4 class='skill-label'>Flutter</h4>
                        </div>
                        <div class='card'>
                            <span class='skills'><FontAwesomeIcon icon={faGitAlt}/></span>
                            <h4 class='skill-label'>Git</h4>
                        </div>
                    </div>
                </section>
                <section class='container'>
                    <div class='projects-header'>
                        <h2 id='link2'>My Projects</h2>
                    </div>
                    <div class='projects-features'>
                        <div class='projects-card'>
                            <a href='https://github.com/BlasianPreston/Bank-Customer-Complaint-Analysis' target='_blank'><span class='projects'><h2>AI Complaint Analysis</h2></span></a>
                            <p class='projects-label'>This is the capstone project I had made in collaboration with my peers for Citi Bank during my AI Preinternship program. This program allows Citi to classify the customer complaints by their sentiment.</p>
                        </div>
                        <div class='projects-card'>
                            <a href='https://github.com/BlasianPreston/AI-Recommender' target='_blank'><span class='projects'><h2>AI Movie Recommender</h2></span></a>
                            <p class='projects-label'>This is a project I made in preparation for my AI PreInternship program which takes in a string for a movie that the user had recently enjoyed and provides results based on the genre of the inputted movie.</p>
                        </div>
                        <div class='projects-card'>
                            <a href='https://github.com/BlasianPreston/Chess' target='_blank'><span class='projects'><h2>AI Chess Game</h2></span></a>
                            <p class='projects-label'>This is a project I created during my time at a summer program which took place at Columbia University. This project allows the user to play Chess against an opponent or an AI with varying difficulties.</p>
                        </div>
                        <div class='projects-card'>
                            <a href='https://github.com/frykher/course_guide' target='_blank'><span class='projects'><h2>School Course Guide</h2></span></a>
                            <p class='projects-label'>This is a project I made with a friend for our App Development class that allows students to choose their classes for the next school year and apply for courses they did not previously qualify for.</p>
                        </div>
                        <div class='projects-card'>
                            <a href='https://github.com/frykher/scholar_snacks' target='_blank'><span class='projects'><h2>Scholar Snacks</h2></span></a>
                            <p class='projects-label'>This is another project I made with a friend for our App Developemt class that is similar to DoorDash and Grubhub where students are able to order food and have it delivered to their class.</p>
                        </div>
                        <div class='projects-card'>
                            <a href='https://github.com/BlasianPreston/Spam-Email-Classifier' target='_blank'><span class='projects'><h2>Spam Email Classifier</h2></span></a>
                            <p class='projects-label'>This is a project I had made for my App Development class which takes in emails and can determine whether or not they are spam based on the subject of the email and the body of the email.</p>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}
export default App;