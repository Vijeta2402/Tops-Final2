import Class_component from "./Component/Class_component";
import Func_component from "./Component/Func_component";

/*
Download & use Extension in React 

es7 + react
JavaScript and React/Redux snippets in ES7+ with Babel plugin features for VS Code
Short code for program 
imr    : import react
imrc : import react with component

rfce : create function component
rce : create class component
rcc :  create class component with export
rcep  : create class component with proptype
*/

function App() {
  return (
    <div className="container mt-5"> 
      {
        // Component Types

        //<Func_component/>
        <Class_component/>
      }
     
    </div>
  );
}

export default App;