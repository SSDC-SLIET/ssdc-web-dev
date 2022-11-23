import React, { useState, useEffect } from 'react'

const Contests = () => {
    const [contests, setContests] = useState([]);
    console.log(contests);

    useEffect(() => {
        const getContests = async (siteName) => {
            await fetch("https://kontests.net/api/v1/"+siteName)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const cntst = data.map((contest) => ({
                    name: contest.name,
                    link: contest.url
                }));
                setContests(cntst);
            });
        };
        getContests('codeforces');
      }, []);

  return (
    <div>
      
    </div>
  )
}

export default Contests
