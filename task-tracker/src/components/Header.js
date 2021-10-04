import React from 'react';


const Header = ({title}) => {
    console.log(title);
    return(
        <header>
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
};

Header.defaultProps = {
    title: 'ku22ba',
  }


  //CS in JS
  const headingStyle = {
    color: 'blue'
  }

export default Header;