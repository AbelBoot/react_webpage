import React, { useContext } from 'react'
import { LocaleContext } from "./context/LocaleContext"
import "./Landing.css"
import { AboutMe } from "./AboutMe"
import { Button, BigDiv, Div, A, Span, SpanCV } from "./theme/SmallComp"
import { violet } from "./theme/variables"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { LandingText, LandingText1 } from "./components/Text"
import { Icon } from "./components/Icons"

function Landing() {
    const { locale } = useContext(LocaleContext)
  return (
    <>
    {locale === "en" && <h2><Span>{LandingText[0]}</Span></h2>}
    {locale === "fr" && <h2><Span>{LandingText[1]}</Span></h2>}
    {locale === "sp" && <h2><Span>{LandingText[2]}</Span></h2>}
    {locale === "pt" && <h2><Span>{LandingText[3]}</Span></h2>}
    
    {locale === "en" && <h4>{LandingText1[0]}</h4>}
    {locale === "fr" && <h4>{LandingText1[1]}</h4>}
    {locale === "sp" && <h4>{LandingText1[2]}</h4>}
    {locale === "pt" && <h4>{LandingText1[3]}</h4>}
    <AboutMe />
    <BigDiv justify={"center"}>
    <Div>
    <A target="_blank" href="https://www.linkedin.com/in/abel-locati-3912056b">
        <Icon name="linkedin" />
    </A>
    </Div>
    <Div>
    <A target="_blank" href="">
        <Icon name="mail" />
    </A>
    </Div>
    <Div>
    <A target="_blank" href="https://www.facebook.com/abel.locati">
        <Icon name="facebook2" />
    </A>
    </Div>
    <Div>
    <A target="_blank" href="https://github.com/AbelBoot">
        <Icon name="github" />
    </A>
    </Div>
    <Div>
                {locale === "en" && 
            <A target="_blank" href="/documents/Resume.pdf"><Icon name="resume" /><SpanCV>CV</SpanCV></A>}
            {locale === "fr" &&
            <A target="_blank" href="/documents/Resume.pdf"><Icon name="resume" /><SpanCV>Resume</SpanCV></A>}      
            {locale === "sp" && 
            <A target="_blank" href="/documents/Resume.pdf"><Icon name="resume" /><SpanCV>Curriculum</SpanCV></A>}   
            {locale === "pt" && 
            <A target="_blank" href="/documents/Resume.pdf"><Icon name="resume" /><SpanCV>Curriculum</SpanCV></A>}

    </Div>
    </BigDiv>

    
    </>
  );
}

export default Landing;
