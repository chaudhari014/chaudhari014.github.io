import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Fade } from "react-reveal";

export const Calender = () => {
  return (
    <div
      name="calendar"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white calendar1"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 py-2">
            Github Calendar
          </p>
        </div>
        <Fade top duration={1000} distance="40px">
          <div className="border-2 justify-center mx-auto">
            <div className="justify-center px-4 lg:px-20 py-3 mx-auto mt-7">
              <GitHubCalendar
                username="chaudhari014"
                className="react-activity-calendar"
              />
            </div>
            <div className="flex justify-center mx-auto mb-5 gap-3 w-10/12">
              <div className="" id="github-stats-card">
                <img
                  align="center"
                  id="github-streak-stats"
                  src="https://github-readme-stats.vercel.app/api?username=chaudhari014&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark"
                  alt="rahulstats"
                  className="-mb-2 h-40"
                />
              </div>
              <div className="">
                <img
                  align="center"
                  id="github-top-langs"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=chaudhari014&layout=compact&hide=Shell&border_radius=0&theme=dark"
                  alt="rahullang"
                  className="h-40"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
