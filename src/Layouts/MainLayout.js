import React from "react";


const MainLayout = props => {
    return (
        <div>
             <div className="main">
                {props.children}
             </div>
        </div>
    );
}

export default MainLayout;