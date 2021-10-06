import React from 'react';
import Button from './Button';


const Header = ({title, onAdd, showAdd}) => {

    return(
        <header className="header">
            {/* <h1 style={headingStyle}>{title}</h1> */}

            <h1>{title}</h1>
            <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'}/>
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