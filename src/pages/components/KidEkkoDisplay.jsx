import { useState, useEffect } from "react";
import {SendGithubAPIRequest} from "/src/generics/github.js"

function KidEkkoDisplay() {
  const meURL = "https://api.github.com/users/KidEkko";
  const [kidEkko, setKidEkko] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [socials, setSocials] = useState([]);
  const [employed, setEmployed] = useState(false);


  useEffect(() => {
    async function getKidEkko() {
      try {
        const user = await SendGithubAPIRequest(meURL);
        setKidEkko(user);
        setEmployed(user.company);
        setIsLoading(false);
      } catch {
        setIsError(true);
      }

      try {
        const socialURL = meURL.concat("/social_accounts");
        const socials = await SendGithubAPIRequest(socialURL);
        setSocials(socials);
      } catch {}
    }
    getKidEkko();
  }, []);

  if (isLoading) {
    return <div className="loadingProfile">Loading KidEkko Profile...</div>;
  }
  if (isError) {
    // maybe make css for an error class and then add secondaries to it?
    return (
      <div className="loadError">
        Error loading KidEkko's Profile! &#128561;
      </div>
    );
  }

  // only render socials if they exist, also should probably be somewhere else on the page

  return (
    <>
      <div>
        <img className="profilePic" src={kidEkko.avatar_url} alt={kidEkko.name} />
        <h2>{kidEkko.name}</h2>
        <p>{employed ? <p>Employed</p> : <p> Not Employed</p>}</p>
        <div className="socials">{socials.map((social) => {
            const { provider, url } = social;
            return (
                <a href={url}>{provider}</a>
            );
        })}</div>
        <div className="commits">
            
        </div>
      </div>
    </>
  );
}

export default KidEkkoDisplay;
