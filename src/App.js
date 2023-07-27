import React from 'react';
import HeroPage from './pages/hero';
import InfoPage from './pages/info';
import ContactPage from './pages/contact';

import './App.css';
import {GiHamburgerMenu} from 'react-icons/gi'


const pageInfo = {
  pages: ['Home', 'Info', 'Contact'],
  pageDetails: {
    'Home': HeroPage,
    'Info': InfoPage,
    'Contact': ContactPage,
  }
}



function MenuItem({pageTitle, pageName, setPage, selected}){
  function handleClick(){
    setPage(pageName);
  }
  
  return (
    <>
      <h1 value={pageName} onClick={handleClick} className={selected + " menuItem"} >{pageTitle}</h1>
    </>
  )
}

class Menu extends React.Component{

  render(){
    return(
      pageInfo.pages.map((pageName) => {
        const selected = (pageName === this.props.curPage) ? 'selected' : 'unSelected';

        return(
          <MenuItem pageTitle={pageName} pageName={pageName} setPage={this.props.setPage} selected={selected}/>
        )
      })
    )
  }
}




class Navigator extends React.Component{
  state = {
    page: 'Home',
    menuVisible: false,
  }

  Renderpage = pageInfo[this.state.page];

  // functions
  openMenu (){
    console.log("openning menu");
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }

  closeMenu = () => {
    console.log("closing menu");
    if(this.state.menuVisible){
      this.setState({
        menuVisible: false
      })
    }
  }

  setPage = (pageString) => {
    this.setState({
      page: pageString,
      menuVisible: false
    })
  }
  

  // bindings
  toggleMenuHandler = this.openMenu.bind(this);

  render(){
    const Page = pageInfo.pageDetails[this.state.page];
    const menuVisibility = (this.state.menuVisible? "menuVis":"menuInvis");
    return(
      <>
        <div id="menu" className={menuVisibility}>
          <Menu setPage={this.setPage} curPage={this.state.page}/>
        </div>
        <div id="container">
          <div id="content" className={menuVisibility} onClick={this.closeMenu}>
            <div id="returnContainer">
              <GiHamburgerMenu id="hamborg" onClick={this.toggleMenuHandler}/>

              <Page/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

function App() {

  return (
    <>
      <Navigator/>
    </>
  );
}

export default App;
