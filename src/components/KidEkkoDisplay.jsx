import { useState, useEffect } from "react";
import { SendGithubAPIRequest } from "/src/generics/github.js";
import Socials from "./Socials";

function KidEkkoDisplay() {
  const meURL = "https://api.github.com/users/KidEkko";
  const [kidEkko, setKidEkko] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
    }
    getKidEkko();
  }, []);

  if (isLoading) {
    return <div>Loading KidEkko Profile...</div>;
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

  // Was introduced to Tailwind halfway through this, going to use it in my next site
  return (
    <>
      <div className="displaybod">
        <div className="max">
          <div className="rowWrap">
            <div className="amwrap">
              <h2>Hi, I'm {kidEkko.name}</h2>
              <p>
                I've loved writing code since I took my first class back in high
                school. It was tough to learn C++ and Java as my first
                languages, but it helped me develop a love for complex coding.
              </p>
              <p>
                Since then I've become a big fan of GoLang, and now I'm trying
                out React in order to develop the skills to create my own
                websites!
              </p>
              <p>Based in {kidEkko.location}</p>
              <p>
                {employed ? (
                  <p>Currently Employed</p>
                ) : (
                  <p>I am Currently Looking for Work!</p>
                )}
              </p>
              <div className="rowWrap socials">
                <Socials />
              </div>
            </div>
            <div className="rowWrap">
              <div className="reactShow">
                <a href="https://react.dev" target="_blank">
                  <img
                    src="/react.svg"
                    className="logo react"
                    alt="React logo"
                  />
                </a>
                <img
                  className="profilePic"
                  src={kidEkko.avatar_url}
                  alt={kidEkko.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KidEkkoDisplay;
