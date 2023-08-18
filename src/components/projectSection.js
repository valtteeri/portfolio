import '../css/projectSection.css'
import Lucky from '../images/luckyshrub.png'
import c2c from '../images/c2c.png'
import capstone from '../images/capstone.png'
import lostark from '../images/lostark.png'

function ProjectSection() {
    return(
        <>
            <div className="projects">
                <div className="project-section">
                    <div>
                        <img src={Lucky} alt="project" />
                        <h1> Lucky Shrub</h1>
                        <div className="project-text">
                            This was a task to create an website for "Lucky Shrub". This was created using HTML and CSS.
                        </div>
                        <a className="linkto" href="https://github.com/valtteeri/lucky-shrub" target="_blank" rel="noreferrer noopener">Link to github</a>
                    </div>
                </div>
                <div className="project-section">
                    <div>
                        <img src={c2c} alt="project" />
                        <h1> C2C Marketplace</h1>
                        <div className="project-text">
                            This was a group task to create an mobile marketplace for items. This was made using Kotlin.
                        </div>
                        <a className="linkto" href="https://github.com/MDP-Group-4/MDProject" target="_blank" rel="noreferrer noopener">Link to github</a>
                    </div>
                </div>
                <div className="project-section">
                    <div>
                        <img src={capstone} alt="project" />
                        <h1> Capstone Course</h1>
                        <div className="project-text">
                            This was an restaurant main page and a simple form. This was created with React.
                        </div>
                        <a className="linkto" href="https://github.com/valtteeri/Coursera-Capstone" target="_blank" rel="noreferrer noopener">Link to github</a>
                    </div>
                </div>
                <div className="project-section">
                    <div>
                        <img src={lostark} alt="project" />
                        <h1> Lost Ark Planner</h1>
                        <div className="project-text">
                            This was a group task where we created an simple desktop app. This was made using tkinter and Python.
                        </div>
                        <a className="linkto" href="https://github.com/Product-Design-Implementation-Group18/LostArkPlanner" target="_blank" rel="noreferrer noopener">Link to github</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSection;