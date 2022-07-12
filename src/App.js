import List from "./List";
import "./styles.css";

let obj = [
  {
    name: "File",
    isfolder: true,
    sub: [
      {
        name: "public",
        isfolder: true,
        sub: [
          {
            name: "index.html",
            isfolder: false
          }
        ]
      },
      {
        name: "src",
        isfolder: true,
        sub: [
          {
            name: "App.js",
            isfolder: false
          },
          {
            name: "index.js",
            isfolder: false
          },
          {
            name: "style.css",
            isfolder: false
          }
        ]
      },
      {
        name: "package.json",
        isfolder: false
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <List obj={obj} />
    </div>
  );
}
