import "../stayle/Accordion.css";
import React, { useState } from 'react';
import Accordion from "./Accordion";
const Appacordino = () => {
    const accordionData = [
        {
          title: 'System Integration and Custom Software Development',
          content: `Design and development of Integrated IT Solutions and Tailor-made 
          Software, utilizing custom software development frameworks and 
          including training, help-desk and software engineering outsourcing 
          activities;
          `
        },
        {
            title: 'E-Services ',
            content: ` Design and development of portals exposing e-services for customers, 
            citizens and businesses , Target Organizations: Public Administration and Government, Regional, 
            and Private Sectors.`
            
          },
          {
            title: 'Technology Provision And It Consulting ',
            content: `Combining emerging technologies (like Cloud Computing, Software-as-aService, Social Networks) in order to help organizations to meet their 
            business strategy goals and benefit from the power of technology 
            innovation , Definition of the IT Strategy, Infrastructure and overall Enterprise 
            Architecture required for organizations and enterprises to support the 
            efficient and effective achievement of their business objectives, ensuring 
            the end-to-end IT security across the organization`
          },
          
        // {
        //   title: 'CUSTOM APPLICATION DEVELOPMENT SERVICES',
        //   content: ` Tewos Solutions specializes in developing custom software applications 
        //   that meet the specific needs of its clients and drive their business 
        //   processes. Combining in-depth technical and industry experience, Tewos 
        //   Solutions develops innovative custom software application solutions that 
        //   best meet clients’ most complex business needs, budget, schedule, and 
        //   existing IT infrastructure.`
        // },
        // {
        //   title: 'SYSTEM INTEGRATION',
        //   content: ` Tewos Solutions offers comprehensive third party integration services to 
        //   help clients enhance efficiency at their organizations, while saving time and 
        //   money. `
        // }
      
      ];
    
      return (
        <div>
          <h1 className="find">OUR BUSINESS ACTIVITIES  & PROFRSSIONAL    </h1>
          <h1><span className="accordioncolor">SERVICES</span></h1>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      );
    };

export default Appacordino;