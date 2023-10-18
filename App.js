//const heading = React.createElement("h1", {}, "Hello React");
const parent = React.createElement("div", {id: 'parent'}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "h1"}, "I am h1"),
        React.createElement("h2", {id: "h2"}, "I am h2")
    ]),
    React.createElement("div", {id: "child2"}, React.createElement("h1", {id: "c-h1"}, "I am h1"))
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);