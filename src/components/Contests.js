import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import "./style.css";

const Contests = () => {
  const [contests, setContests] = useState([]);
  const [query, setquery] = useState('all')
  // console.log(contests);

  useEffect(() => {
    const getContests = async (siteName) => {
      await fetch("https://kontests.net/api/v1/" + siteName)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const cntst = data.map((contest) => ({
            name: contest.name,
            link: contest.url,
            start_time: contest.start_time,
            duration: contest.duration,
            status: contest.status,
          }));
          setContests(cntst);
        });
    };
    getContests(query);
  }, [query]);

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  return (
    <div className="contests">
      <div className="list__buttons">
        <button onClick={() => setquery("all")}>ALL</button>
        <button onClick={() => setquery("codeforces")}>Codeforces</button>
        <button onClick={() => setquery("code_chef")}>Codechef</button>
        <button onClick={() => setquery("leet_code")}>LeetCode</button>
        <button onClick={() => setquery("hacker_earth")}>Hacker Earth</button>
      </div>
      <div className="d-flex flex-column align-items-center mt-3 justify-content-center">
        {contests.map(({ name, link, start_time, duration, status }, i) => {
          return (
            <div key={link + i} className="list__container">
              <span className="grid__item">{moment(start_time).format('MMMM Do YYYY, h:mm:ss a')}</span>
              <a className="contest__link grid__item" href={link} target="_blank" rel="noreferrer" >
                {name}
              </a>
              <span className="grid__item">{secondsToHms(duration)}</span>
              {status === "CODING"
                ?
                <span className="grid__item" style={{ backgroundColor: "rgb(255, 51, 0)" }}>It's Live</span>
                :
                <span className="grid__item" style={{ backgroundColor: "#009933" }}>You're Early</span>
              }
            </div>
          );
        })}
      </div >
    </div>
  );
};

export default Contests;
