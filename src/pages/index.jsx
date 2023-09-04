import { useState } from "react";
import KidEkkoDisplay from "./components/KidEkkoDisplay";

function Home() {

  return (
    <>
      <div className="reactShow">
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
        <h1>KidEkko</h1>
        <KidEkkoDisplay />
        
    </>
  );
}

export default Home
