import React from "react";
import "./Experiences.css";

const Experiences: React.FC = () => {
  const experiences = [
    {
      id: 1,
      comparyName: "Verizon Connect",
      location: "Christchurch, New Zealand",
      time: "November 2021 - February 2024",
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
      id: 1,
      comparyName: "Fiserv",
      location: "Auckland, New Zealand",
      time: "",
      keyArchiverment: [
        "Developed and maintained a Logbook application with a focus on reliability and performance.",
        "Taken part in the transition from MVP to MVVM architecture, enhancing maintainability.",
      ],
    },
  ];
  // const filteredKeyAchievements = experiences
  //   .filter((experience) => experience.id === 1)
  //   .map((experience) => experience.keyArchiverment || []);
  return (
    <>
      <h2>EXPERIENCE</h2>

      {experiences.map((experience) => (
        <div key={experience.id}>
          <h4>{experience.comparyName}</h4>
          <p className='company-location'>{experience.location}</p>
          <p className='company-time'>{experience.time}</p>
          <h4>Key Achievements</h4>
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
