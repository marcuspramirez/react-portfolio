import React, { Component } from 'react';
import { ProjectItems } from "./ProjectsItems";
import './Projects.css';




class ProjectsPage extends Component {
    

    render() {
        return(
            <div className="ProjectItems">
                <h1 className="repo-logo">Repos</h1>
               
                <ul>
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
            </div>
        )
    }
}

export default ProjectsPage