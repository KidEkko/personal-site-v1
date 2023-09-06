function Socials() {
  const renderLinks = () => {
    const links = [
      {
        path: "github.svg",
        url: "https://github.com/KidEkko",
      },
      {
        path: "linkedIn.svg",
        url: "https://www.linkedin.com/in/ryan-berryman-6b6a68223/",
      },
    ];

    return links.map((link) => (
      <img
        src={`/${link.path}`}
        alt={`${link.url}`}
        onClick={() => (window.location.href = link.url)}
      />
    ));
  };
  return <div className="rowWrap socials">{renderLinks()}</div>;
}

export default Socials;
