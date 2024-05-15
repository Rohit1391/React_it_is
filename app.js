import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement(
    "h1", { id:"ahead" }, "Hello world from React!...");
    const parent=React.createElement(
        "div", {id:"parent"}, React.createElement(
            "div", {id:"child"}, [React.createElement(
                "h1", {}, "Hii bey"), React.createElement(
                    "h2", {}, "Hii beby")]
            )
        ); 
        //const Heading =(<h1>Hii using JSX! </h1>);
        //React functional component:
        const Headingcomp=() => {
            return <h1>Hey this is functional component!</h1>
        };
        //Another way for the same:
        //This is component composition i.e combining two components in one!
        const Headingcomp2= ()=>
        (
            <div>
                <Headingcomp/>
                {Headingcomp()} 
               
                
            <h1> This is an another way! </h1>
            </div>
            
        );
        
    
    const roomt=ReactDOM.createRoot(document.getElementById("root"));
    roomt.render(parent);
    roomt.render(Headingcomp2());
    //roomt.render(Heading);