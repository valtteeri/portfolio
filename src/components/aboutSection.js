import { useEffect, useState } from "react";
import '../css/aboutSection.css'

function AboutSection() {
    const [age, setAge] = useState(0);

    useEffect(() => {
        /* Adding my birthdate, comparing to todays date and calculating differene */
        const birthDate = new Date('1999-10-29');
        const interval = setInterval(() => {
            const currentDate = new Date();
            const diff = currentDate - birthDate;
            const years = diff / (365 * 24 * 60 * 60 * 1000);
            setAge(years);
        }, 100);
        return () => {
            clearInterval(interval);
          };
    }, []);

    return(
        <>
            <div className="container">
                <div className="split">
                    <div className="seperate">
                        <h1>About me</h1>
                        My name is <span className="bold">Valtteri</span> and I'm a <span className="bold">{age.toFixed(8)}</span> year-old developer.
                    </div>
                    <div className="seperate">
                        I have been studying and learning about different coding languages for around 4 years now. I strive to learn and improve my skills in programming.
                    </div>
                    <div>
                        In my free time, I like to go fishing and spend times with friends.
                    </div>
                </div>
                <div className="split">
                    <div className="seperate">
                        <h1>Languages</h1>
                            Javascript, TypeScript, HTML and CSS
                        <h1>Frameworks</h1>
                            React, Node.js
                        <h1>Tools</h1>
                            Visual Studio Code, Git and npm
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;