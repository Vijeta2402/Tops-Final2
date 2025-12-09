import Func_state from "./Hide-Show/Func_state";
import Call_func from "./Movie_card/Call_func";





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
        
        //Props
        //<Func_props/>
        //<Class_props/>
        <Call_func/>
     //. <Func_state/>
      }
     
    </div>
  );
}

export default App;