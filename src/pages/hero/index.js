import {SmallText, Link, HighlightText, Title} from './heroElements';


const HeroPage = function(){

  return(
    <>
      <Title>Welcome to my <HighlightText>Fancy Nav app</HighlightText></Title>
      <SmallText>
        This website was built to practice my web development skills.
        <br/>
        This website is built only using <HighlightText>React.js, styled-components, and CSS</HighlightText> .
        <br/>
        Credit to <HighlightText>Bucky Maler + Sergey Melnik</HighlightText> for the navigation design, I really liked their work and wanted to repoduce it.
        <br/>
        You can find the original here: <HighlightText><Link href="https://www.free-css.com/free-css-templates/page288/global">https://www.free-css.com/free-css-templates/page288/global</Link></HighlightText>.
        <br/>
        Make sure to click the <HighlightText>hamburger menu</HighlightText> in the top right to see the navigation design.
      </SmallText>
    </>
  )
}

export default HeroPage;