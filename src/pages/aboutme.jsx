import { useEffect } from "react";

function KidEkko() {

  useEffect(() => {
    document.title = "KidEkko - About Me";
  }, [])

  return (
    <>
      <div className="displaybod">
        <div className="max50">
          <div className="colWrap about">
            <h1>About Me</h1>
            <p>
              I've lived in San Diego for about a year now, but I come all the
              way from Michigan.
            </p>
            {/*Some kind of Michigan picture?*/}
            <p>
              I'm a software engineer, but I've got a few interests outside of
              computers.
            </p>
            <h3>Hiking</h3>
            <p>
              I've always liked walking trails, but California has given me a
              new love for it. So many incredible views around the state leave
              me constantly searching for a new spot.
            </p>
            {/*album of some pics I've taken*/}
            <h3>Cocktail Drinking</h3>
            <p>
              I didn't drink too much before I came to California, but San Diego
              has given me reason to try it out. In particular, I really enjoy
              trying the various concoctions that the many bars come up with.
            </p>
            {/*album of some alcohol pics I've taken, grouped by bar?*/}
            <h2>Nerd Stuff</h2>
            <p>
              You don't become a software engineer without being at least a bit
              of a nerd.. in my opinion.
            </p>
            <h3>Anime</h3>
            <p>
              I was one of those kids that loved the old nighttime Toonami runs
              on Cartoon Network. I always looked forward to shows like Samurai
              Jack and Naruto, the good old days before I knew what filler was.
            </p>
            <p>
              Then one day back in 2014, some friends of mine introduced me to
              the broader anime genre, and I've been watching ever since. I'm a
              fan of action and story driven shows, and my current favorites of
              all time range from Demon Slayer to Steins;Gate.
            </p>
            {/*Maybe make it less about me? idk it's an about me page */}
          </div>
          <h3>Games</h3>
          <p>
            Video games have always been fun for me. I'll forever cherish
            memories playing my GameBoy Advance, the SP, and Playstation 2. I've
            since become a PC gamer, mostly playing games like Valorant and
            League of Legends as I'm a fan of competitive games.
          </p>
          <p>
            That said, I have love for many games outside of Riot. Strategy
            games like Darkest Dungeon and XCOM keep me engaged and coming back
            for more. Open world games like Fallout 3/4 keep me a bit too
            engaged, so much so that I need to almost speedrun them to keep
            myself sane. The latest example being Baldur's Gate 3, absolute
            masterpiece of a game.
          </p>
        </div>
      </div>
    </>
  );
}

export default KidEkko;
