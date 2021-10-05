import React from 'react';
import Button from './Button';


const Header = ({title}) => {
    const onClick = () => {
      console.log('click');
    }
    return(
        <header className="header">
            {/* <h1 style={headingStyle}>{title}</h1> */}

            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Add"/>
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracer',
  }


  //CS in JS
  // const headingStyle = {
  //   color: 'blue'
  // }

export default Header;