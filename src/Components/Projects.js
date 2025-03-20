import React from 'react';
import ProjectBox from './ProjectBox';
import FlodaImage from '../images/floweEom.png';
import TodoImage from '../images/todo.png';
import GreenOrganicImage from '../images/greenOrganic.png';
import PortfolioImage from '../images/portfolio.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={FlodaImage} projectName="Floda" />
        <ProjectBox projectPhoto={GreenOrganicImage} projectName="GreenOrganic" />
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={TodoImage} projectName="Todo" />
      </div>

    </div>
  )
}

export default Projects