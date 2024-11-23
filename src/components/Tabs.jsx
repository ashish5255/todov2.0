import React from 'react';

const Tabs = () => {
    const tabs  = ['All', "Open", "Completed"]
    return (
        <nav className="tab-container ">
            {tabs.map((tab, i) => {
                return (
                    <button className='tab-button' key={i} >
                        <h4> {tab} <span>(0)</span> </h4>
                    </button>
                )
            })}
        </nav>
    );
};

export default Tabs;
