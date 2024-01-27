const heading=React.createElement(
    "h1", { id:"ahead" }, "Hello world from React!...");
    const parent=React.createElement(
        "div", {id:"parent"}, React.createElement(
            "div", {id:"child"}, [React.createElement(
                "h1", {}, "Hii bey"), React.createElement(
                    "h2", {}, "Hii bey")]
            )
        );
    
    const roomt=ReactDOM.createRoot(document.getElementById("root"));
    roomt.render(parent);