import React, { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";
import "./style.css";

const Contests = () => {
  const [contests, setContests] = useState([]);
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
          }));
          setContests(cntst);
        });
    };
    getContests("codeforces");
  }, []);

  return (
    <div className="contests">
      <Slide left>
        <div className="d-flex justify-content-center">
          <div>
            {contests.map(({ name, link }) => {
              return (
                <tr key={link}>
                  <td>
                    <strong>
                      <a href={link} target="_blank" rel="noreferrer">
                        {name}
                      </a>
                    </strong>
                  </td>
                </tr>
              );
            })}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Contests;
