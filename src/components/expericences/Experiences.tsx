import React from "react";
import "./Experiences.css";

const Experiences: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Mobile Developer",
      comparyName: "Verizon Connect",
      location: "Christchurch, New Zealand",
      time: "November 2021 - February 2024",
      responsibility:
        "Responsible leading the design, development, and optimization of high-quality mobile applications across iOS and Android platforms, while collaborating with cross-functional teams to deliver innovative solutions.",
      keyArchiverment: [
        "Developed and maintained a Logbook application with a focus on reliability and performance.",
        "Taken part in the transition from MVP to MVVM architecture, enhancing maintainability.",
        "Boosted unit test coverage by 30%, strengthening app reliability and maintainability.",
        "Collaborated with Product and UI/UX teams to update the app layout with Jetpack Compose.",
        "Presented new features and updates to the team, gathering and integrating feedback to refine the app.",
        "Regularly reviewed and provided constructive feedback on team submissions, focusing on readability, performance, and adherence to best practices.",
      ],
    },
    {
      id: 2,
      title: "Mobile Developer, Staff - Contract",
      comparyName: "Fiserv",
      location: "Auckland, New Zealand",
      time: "April 2021 - November 2021",
      responsibility:
        "Developed and maintained secure native Android banking applications with focus on reliability and performance.",
      keyArchiverment: [
        "Developed and maintained a Logbook application with a focus on reliability and performance.Implemented critical security features though Cyber Unified Vulnerability Management Services and executed security patches based on industry standards.",
      ],
    },
    {
      id: 3,
      title: "Senior Android Developer",
      comparyName: "RCH Asia",
      location: "Ho Chi Minh City, Vietnam",
      time: "February 2018 - February 2020",
      responsibility:
        "Responsible for developing and maintaining native Android applications for Point-of-Sale systems and mobile ordering devices, including secure EFTPOS payment integration",
      keyArchiverment: [
        "Implemented automated testing frameworks and CI/CD pipelines using Jenkins, reducing QA cycles and improving deployment efficiency.",
      ],
    },
    {
      id: 4,
      title: "Senior Android Developer",
      comparyName: "Gotadi.com - HG Group",
      location: "Ho Chi Minh City, Vietnam",
      time: "January 2017 - January 2018",
      responsibility:
        "Responsible for designing, developing, and maintaining advanced Android applications, ensuring high performance, scalability, and seamless user experiences while collaborating with cross-functional teams.",
      keyArchiverment: [
        "Architected and developed comprehensive travel booking application for flights and hotels, featuring secure banking integration and multi-flavor support for different markets.",
        "Contributed to full development lifecycle using MVVM/MVP architecture, implementing Kotlin migration and Crashlytics for robust error tracking and version management",
      ],
    },
    {
      id: 5,
      title: "Android Developer",
      comparyName: "Zinio",
      location: "Ho Chi Minh City, Vietnam",
      time: "August 2015 - February 2017",
      responsibility:
        "Developed and optimized digital newsstand application, implementing efficient PDF/XML file management and reading functionality using MVP architecture",
      keyArchiverment: [],
    },
  ];
  return (
    <>
      <h2 id='experience'>EXPERIENCE</h2>

      {experiences.map((experience) => (
        <div className='experience-container' key={experience.id}>
          <div className='location-name'>
            <p className='name'>{experience.comparyName}</p>
            <p className='location'>{experience.location}</p>
            <p className='company-time'>{experience.time}</p>
          </div>
          <p>{experience.title}</p>
          <p className='responsibility'>{experience.responsibility}</p>
          <p className='archiverment'>Key Achievements</p>
          <ul>
            {experience.keyArchiverment?.map((achievement, index) =>
              achievement ? <li key={index}>{achievement}</li> : null
            )}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Experiences;
