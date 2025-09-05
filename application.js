const parent = React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child"},[
React.createElement("h1",{},"hello world!"),
React.createElement("h1",{},"hello world!")
]),
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"hello world!"),
React.createElement("h1",{},"hello world!"),
]),
]);
const root = ReactDOM.createElement(document.getElementById("root"));
root.render(header);