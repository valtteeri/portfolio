import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../css/heroSection.css'
import profile from '../images/profile.jpg';
import About from './aboutSection'


function HeroSection() {
    return (
        <div className="heroBackground">
            <div className="hero-section">
                <div className="card">
                    <div className="image-container">
                        <img src={profile} alt='mypicture' />
                    </div>
                    <div className="card-content">
                        <h2>Valtteri Hietala</h2>
                        <p>Student at Oulu university of Applied Sciences</p>
                        <div className="social-icons">
                            <a href="https://github.com/valtteeri" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/valtteri-hietala-684b40235/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="mailto:hietalavaltteri@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <div className="project-below">
                <div>
                    Projects below
                </div>
            </div>
        </div>
  );
}

export default HeroSection;