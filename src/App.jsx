import "./App.css";

function App() {
  return (
    <div>
      <div className="card-wrapper">
        <div className="card-profile">
          <img
            src="src/assets/profile-thumbnail.png"
            alt="User profile picture"
          />
          <div className="card-user-name">
            <h1>Sarah Dole</h1>
            <span>@sarahdole</span>
          </div>
        </div>
        <p>
          I&apos;ve been searching for high-quality abstract images for my
          design projects, and I&apos;m thrilled to have found this platform.
          The variety and depth of creativity are astounding!
        </p>
      </div>
      <div className="credits">
        A challenge by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank">
          GreatFrontEnd Projects
        </a>
        . Built by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects/u/alineprasser"
          target="_blank">
          Aline Prasser :)
        </a>
        .
      </div>
    </div>
  );
}

export default App;
