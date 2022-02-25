import { Typography, Container } from "@mui/material";
import "./index.css";

function Index() {
  return (
    <Container maxWidth="lg" className="container">
      <div className="experience_timeline">
        <ul>
          <li>
            <div className="item">
              <h2 className="date">September 2020</h2>
              <h1>Frontend Intern (Neobis Clubs)</h1>
              <p>Went through JS,HTML and CSS prepcourse</p>
            </div>
          </li>
          <li>
            <div className="item">
              <h2 className="date">January 2021</h2>
              <h1>Frontend Intern (Neobis Clubs)</h1>
              <p>
                Landed my first ever project. Developed a website platform
                that simplified access to information about all transactions of
                the company and make all transactions and operations by
                themselves without the need of a specialized person.
              </p>
            </div>
          </li>
          <li>
            <div className="item">
              <h2 className="date">August 2020</h2>
              <h1>Junior Frontend Developer (CodifyLab,Bishkek/Kyrgyzstan)</h1>
              <p>
                Developed a landing page for law-firm. 
                <hr></hr>
                - Designed and
                implemented role-based access to all in-app operations. This
                feature prevents access to transactions and information from
                random people. 
                <hr></hr>
                - Overall, it simplified company workflow and
                contributed to the easy distribution of responsibilities.
                Technology: React, Redux, Redux-thunk middleware, React hook
                form. Created authorization with tokens.
              </p>
            </div>
          </li>
          <li>
            <div className="item">
              <h2 className="date">January 2022</h2>
              <h1>Frontend Inter (Neobis Clubs)</h1>
              <p>
                This project is social and that is why more advanced. Using
                Redux Saga and Typescript.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Index;
