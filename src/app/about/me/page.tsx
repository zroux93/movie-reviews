import Image from "next/image";
import Link from "next/link";

export default function AboutMePage() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>About me</h3>
            <p>My name is Zachary Roux, and I'm a software engineer.</p>

            <h5>My background</h5>
            <ul>
              <li>
                Bachelor's degree in Computer Science from the University of
                Oklahoma. I took elective classes in robotics and machine
                learning.
              </li>
              <li>
                Internships at the National Weather Center and NextThought
              </li>
              <li>
                Worked at NextThought for 3 years after graduating, on the
                server, web, and QA teams.
              </li>
              <li>
                Currently employed at Technivation, working both on the server
                and web applications.
              </li>
            </ul>

            <h5>Why I created this website</h5>
            <p>
              I had been reading about the latest progress with React Server
              Components and NextJS, and wanted to play with it. Since I don't
              have the option to use NextJS at my current employment, I thought
              it would be a good opportunity to create a simple website of my
              own. In addition to giving me a chance to explore and learn about
              NextJS, it can serve as a playground for other tech ideas I want
              to explore and a public demonstration of some of the types of
              things I am able to work on (since my professional code is all
              closed-source).
            </p>

            <h5>My non-programming interests</h5>
            <ul>
              <li>
                Photography. You can view some of my photos on Instagram and
                500px.
              </li>
              <li>
                Music. I play classical guitar and piano and I also compose
                classical and cinematic music in my spare time.
              </li>
              <li>Rock climbing.</li>
            </ul>

            <h5>Where to find me</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
