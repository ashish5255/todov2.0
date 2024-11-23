import React from 'react';


const Header = (props) => {
    const  isaskPlural = props.listLength >1;
    return (
       <header className="Header">
           <h1 className="text-gradient">
               {`You have ${props.listLength} open ${isaskPlural ? 'tasks' : 'task'}`}
           </h1>
       </header>
    );
};

export default Header;
