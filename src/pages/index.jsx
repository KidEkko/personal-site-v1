import { useEffect } from "react";
import KidEkkoDisplay from "/src/components/KidEkkoDisplay";

function Home() {
  useEffect(() => {
    document.title = "KidEkko";
  }, []);

  return (
    <>
      <KidEkkoDisplay />
    </>
  );
}

export default Home;
