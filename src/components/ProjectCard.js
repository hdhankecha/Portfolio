import React from 'react';

export const ProjectCard = ({ title, description, imgUrl , skills}) => {
  return (
    <section className="dark">
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">{title}</h1>
        <div className="postcard dark blue">
          <img className="postcard__img" src={imgUrl} alt="Image Title" />
          <div className="postcard__text">
            
            <div className="postcard__preview-txt">{description}</div>
          <div className='skills'>
            {skills.map((skill, index) => (
            <div key={index} className='skill-card'>{ skill }</div>
            ))}
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
