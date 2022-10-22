import React, { useState, useEffect } from 'react'

const Contests = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        const getContests = async () => {
            await fetch("https://clist.by:443/api/v1/contest//?username=pg99285&api_key=ef194948bde67ca824788a81565a54d54ca10721")
            .then((response) => response.json())
            .then((data) => {
                const cntst = data.map((contest) => ({
                    name: contest.objects.event,
                    link: contest.objects.href
                }));
                setContests(cntst);
            });
        };

        getContests();
        console.log(contests);
      }, []);

  return (
    <div>
      
    </div>
  )
}

export default Contests
