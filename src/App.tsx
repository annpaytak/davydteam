import styled from "@emotion/styled";

import Davyd from "./assets/images/Davyd.svg";
import Team from "./assets/images/Team.svg";

import "./App.css";
import { breakpoints } from "./variables";

function App() {
  return (
    <Page>
      <CommingSoon>SITE COMMING SOON</CommingSoon>

      <SocialsPhone>
        <li>Contact</li>
        <li>
          <a href="https://www.instagram.com/davyd_team/?igshid=OGQ5ZDc2ODk2ZA">
            INSTAGRAM
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/davyd_team">Behance</a>
        </li>
      </SocialsPhone>

      <SocialsDesktop>
        <li>
          <a href="https://www.instagram.com/davyd_team/?igshid=OGQ5ZDc2ODk2ZA">
            INST
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/davyd_team">BE</a>
        </li>
      </SocialsDesktop>

      <ServicesList>
        <li>Services</li>
        <li>Branding</li>
        <li>Brand strategy</li>
        <li>Naming</li>
        <li>Creative & Art direction</li>
        <LiWithIndent>Packaging</LiWithIndent>
        <li>Digital & WEB design</li>
        <li>Photography</li>
        <li>Content creation</li>
        <li>Social Media Management</li>
      </ServicesList>

      <Logo>
        <img src={Davyd} alt="" />
        <img src={Team} alt="" />
      </Logo>

      <TextShort>
        <p>Unique comprehensive</p>
        <p>brand identity</p>
      </TextShort>

      <TextLongFirst>
        We provide a holistic approach to the brand identity that captures the
        main essence of the brand, its values, vision, and distinctive
        qualities.
        <span>
          Revealing the brand idea which will be reflected throughout every
          aspect and component of the brand recognition.
        </span>
      </TextLongFirst>

      <TextLongLast>
        We strive to decently <span>package </span>
        and lead a <span>visual narrative</span> of the client's story, where
        minimalism, thoughtfulness and timelessness come first.
      </TextLongLast>

      <TeamBased>
        <p>Creative team.</p>
        <p>Based in Lviv, Ukraine</p>
      </TeamBased>

      <Mail href="mailto:hellodavyd@gmail.com">hellodavyd@gmail.com</Mail>
    </Page>
  );
}

const LiWithIndent = styled.li`
  text-indent: 0.5rem;
`;

const Page = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 20px;

  display: grid;
  grid-template-rows: repeat(8, auto);

  grid-template-areas:
    "teamBased"
    "logo"
    "textShort"
    "textLongLast"
    "textLongFirst"
    "servicesList"
    "socialsPhone"
    "mail";

  @media (min-width: ${breakpoints.md}) {
    margin: 0;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 10% 25% 40% 5% 15% 5%;
    grid-template-areas:
      "commingSoon commingSoon commingSoon commingSoon"
      ". . servicesList socialsDesktop"
      "logo logo logo logo"
      "textShort textShort . . "
      "textLongFirst textLongLast textLongLast ."
      ". teamBased . mail";
  }
`;

const CommingSoon = styled.p`
  grid-area: commingSoon;
  text-transform: uppercase;
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

const TeamBased = styled.div`
  grid-area: teamBased;
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12vh 0;

  img {
    height: 1.05rem;
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: center;
    margin: 0;

    img:first-of-type {
      margin-right: 30.4%;
    }
    img {
      height: 1.75rem;
    }
  }
`;

const ServicesList = styled.ul`
  grid-area: servicesList;
  li:first-of-type {
    margin-bottom: 34px;
  }
`;

const SocialsDesktop = styled.nav`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    grid-area: socialsDesktop;
    display: flex;

    li:first-of-type {
      margin-right: 23px;
    }
    li:last-of-type {
      margin-left: 23px;
    }
  }
`;

const SocialsPhone = styled.nav`
  grid-area: socialsPhone;
  list-style: none;

  li:first-of-type {
    margin-top: 32px;
    margin-bottom: 37px;
  }

  li:last-of-type {
    margin-bottom: 120px;
  }

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const TextShort = styled.div`
  grid-area: textShort;
  p:last-of-type {
    text-transform: uppercase;
  }

  margin-bottom: 37px;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
  }
`;

const TextLongFirst = styled.p`
  grid-area: textLongFirst;
  text-indent: 3rem;
  height: 220px;
  margin-bottom: 79px;

  @media (min-width: ${breakpoints.md}) {
    max-width: 30.5vw;
    min-width: 527px;
    text-indent: 0;
    height: auto;
    margin-bottom: 0;
  }

  span {
    margin-left: 2rem;
  }
`;

const TextLongLast = styled.p`
  grid-area: textLongLast;
  text-indent: 3rem;
  height: 122px;
  margin-bottom: 15px;

  @media (min-width: ${breakpoints.md}) {
    max-width: 20.7vw;
    min-width: 358px;
    text-indent: 0;
    height: auto;
    margin-bottom: 0;
  }
  span {
    text-transform: uppercase;
  }
`;

const Mail = styled.a`
  grid-area: mail;
`;

export default App;
