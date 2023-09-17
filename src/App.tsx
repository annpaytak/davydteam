import { createRef } from "react";
import styled from "@emotion/styled";
import { TypeAnimation } from "react-type-animation";

import Davyd from "./assets/images/Davyd.svg";
import Team from "./assets/images/Team.svg";
import { breakpoints } from "./variables";

import "./App.css";

const Typed = ({ text, style }: { text: string; style?: any }) => {
  const ref = createRef<HTMLSpanElement>();
  const CURSOR_CLASS_NAME = "animation-cursor";

  const showCursorAnimation = (show: boolean) => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;
    if (show) {
      el.classList.add(CURSOR_CLASS_NAME);
    } else {
      el.classList.remove(CURSOR_CLASS_NAME);
    }
  };

  return (
    <TypeAnimation
      ref={ref}
      cursor={false}
      className={CURSOR_CLASS_NAME}
      speed={70}
      style={style}
      sequence={[text, 1000, () => showCursorAnimation(false)]}
      omitDeletionAnimation
    />
  );
};

function App() {
  return (
    <Page>
      <CommingSoon>
        <Typed text="SITE COMMING SOON" />
      </CommingSoon>

      <SocialsPhone>
        <li>
          <Typed text="Contact" />
        </li>
        <li>
          <a
            href="https://www.instagram.com/davyd_team/?igshid=OGQ5ZDc2ODk2ZA"
            target="_blank"
          >
            <Typed text="INSTAGRAM" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/davyd_team" target="_blank">
            <Typed text="Behance" />
          </a>
        </li>
      </SocialsPhone>

      <SocialsDesktop>
        <li>
          <a
            href="https://www.instagram.com/davyd_team/?igshid=OGQ5ZDc2ODk2ZA"
            target="_blank"
          >
            <Typed text="INST" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/davyd_team" target="_blank">
            <Typed text="BE" />
          </a>
        </li>
      </SocialsDesktop>

      <ServicesList>
        {[
          "Services",
          "Branding",
          "Brand strategy",
          "Naming",
          "Creative   &   Art direction",
          " Packaging",
          "Digital & WEB design",
          "Photography",
          "Content creation",
          "Social Media Management",
        ].map((text) => (
          <li>
            <Typed text={text} />
          </li>
        ))}
      </ServicesList>

      <Logo>
        <img src={Davyd} alt="" />
        <img src={Team} alt="" />
      </Logo>

      <TextShort>
        <Typed text="Unique comprehensive" />
        <Typed text="BRAND IDENTITY" />
      </TextShort>

      <TextLongFirst>
        <Typed
          text={`  We provide a holistic approach to the brand
identity that captures the main essence of the
brand, its values, vision, and distinctive
qualities.       Revealing the brand idea which will
be reflected throughout every aspect and component
of the brand recognition.`}
        />
      </TextLongFirst>

      <TextLongLast>
        <Typed
          text={`      We strive to decently PACKAGE
and lead a VISUAL NARRATIVE of the
client's story, where minimalism,
thoughtfulness and timelessness
come first.`}
        />
      </TextLongLast>

      <TeamBased>
        <Typed text="Creative team." />
        <Typed text="Based in Lviv, Ukraine" />
      </TeamBased>

      <Mail href="mailto:hellodavyd@gmail.com">
        <Typed text="hellodavyd@gmail.com" />
      </Mail>
    </Page>
  );
}

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
    grid-template-columns: 37% 31% 19.6% 12%;
    grid-template-rows: 9.2% 28.6% 36% 7.4% 15.8% 3%;
    grid-template-areas:
      "commingSoon commingSoon commingSoon commingSoon"
      ". . servicesList socialsDesktop"
      "logo logo logo logo"
      "textShort textShort . . "
      "textLongFirst textLongLast textLongLast ."
      ". teamBased mail mail";
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14.2vh 0;

  img {
    height: 1.05rem;
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: center;
    margin: 0;

    img:first-of-type {
      margin-right: 32%;
    }
    img {
      height: 1.72rem;
    }
  }
`;

const ServicesList = styled.ul`
  grid-area: servicesList;
  li > span {
    white-space: pre;
  }
  li:first-of-type {
    margin-bottom: 34px;
    @media (min-width: ${breakpoints.md}) {
      margin-bottom: 24px;
    }
  }
`;

const SocialsDesktop = styled.nav`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    grid-area: socialsDesktop;
    display: flex;

    li:first-of-type {
      margin-right: 10px;
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
  display: flex;
  flex-direction: column;
`;

const TextLongFirst = styled.p`
  grid-area: textLongFirst;
  text-indent: 3rem;
  height: 220px;
  margin-bottom: 78px;

  @media (min-width: ${breakpoints.md}) {
    text-indent: 0;
    height: auto;
    margin-bottom: 0;
    > span {
      white-space: pre;
    }
  }

  span {
    margin-left: 2rem;
  }
`;

const TextLongLast = styled.p`
  grid-area: textLongLast;
  text-indent: 3rem;
  height: 122px;
  margin-top: 38px;
  margin-bottom: 15px;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
    max-width: 20.7vw;
    min-width: 358px;
    text-indent: 0;
    margin-bottom: 0;
    > span {
      white-space: pre;
    }
  }
`;

const Mail = styled.a`
  grid-area: mail;
  align-self: end;
  justify-self: center;

  @media (min-width: ${breakpoints.md}) {
    justify-self: flex-end;
  }
`;

export default App;
