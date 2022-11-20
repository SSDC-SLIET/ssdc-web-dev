import React, { useState, useEffect } from "react";
import "./style.css";

const Contests = () => {
  const [contests, setContests] = useState([]);
  const [query, setquery] = useState(null)
  // console.log(contests);

  useEffect(() => {
    const getContests = async (siteName) => {
      await fetch("https://kontests.net/api/v1/" + siteName)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const cntst = data.map((contest) => ({
            name: contest.name,
            link: contest.url,
          }));
          setContests(cntst);
        });
    };
    getContests(query);
  }, [query]);

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
        {contests.map(({ name, link }) => {
          return (
            <div className="list__container">
              <a a className="list__contents" href={link} target="_blank" rel="noreferrer" >
                {name}
              </a>
            </div>
          );
        })}
      </div >
    </div >
  );
};

export default Contests;
