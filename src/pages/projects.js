import React, { Component } from 'react';
import { ProjectItems } from "./ProjectsItems";
import './Projects.css';




class ProjectsPage extends Component {
    

    render() {
        return(
            <div className="ProjectItems">
                <h1 className="repo-logo">Repos</h1>
               
                <ul className="repos">
                    {ProjectItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.repo}>
                                {item.name} 
                                </a>
                            </li>
                        )
                    })}               
                </ul>
                <img className="clickit1" alt="screenshot of clickit drinkit app" src="https://github.com/marcuspramirez/Clickit-Drinkit/blob/master/assets/images/initialPage.JPG?raw=true"></img>
                <img className="clickit1" alt="screenshot of bracket game" src="https://github.com/prabin544/Bracketeers/raw/main/public/imgs/bracketspage.png"></img>
                <img className="clickit1" alt="passwrord generator" src="./components/images/pw-generator.png"></img>
                <img className="clickit1" alt="read me generator" src="https://github.com/marcuspramirez/readme-generator/blob/master/assets/readmescrrenshot.PNGhttps://github.com/marcuspramirez/readme-generator/blob/master/assets/readmescrrenshot.PNG?raw=true"></img>
                <img className="clickit1" alt="daily planner" src="https://github.com/marcuspramirez/daily-planner/blob/master/assets/DailyPlannerImage.PNG"></img>
                <img className="clickit1" alt="eat da burger app" src="https://github.com/marcuspramirez/burger/raw/master/public/images/burgerappsn.PNG"></img>
            </div>
        )
    }
}

export default ProjectsPage