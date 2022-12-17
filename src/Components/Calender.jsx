
import "./Calender.css"
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Md10K } from "react-icons/md";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (

   

    <div className="git-Calender">
    <h2 className="git1">Days I Code</h2>
    <div className="git2" >
      <GitHubCalendar
        style={{ margin: "auto" ,borderRadius:"20px"}}
        username="shikhu51197"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
      </div>
      <div align="center">
     <h2 className='skillDes'>My <span className='name1'>My github Statistics</span></h2>
      <div id='stats'>
      
        <img src="https://github-readme-stats.vercel.app/api?username=shikhu51197&theme=highcontrast&hide_border=false&include_all_commits=true&count_public=true&count_private=true" alt="stat" />
      <br></br>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shikhu51197&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="stat" />
        <br></br>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=shikhu51197&theme=highcontrast&hide_border=false" alt="stat" />
      
      </div>
   </div>


    </div>
  );
};

export default Calender;

