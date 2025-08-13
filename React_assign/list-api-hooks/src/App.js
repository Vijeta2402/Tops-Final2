import List_map from "./Task-1/List_map";
import Users_List from "./Task-2/Users_list";
import UserForm from "./Task-3/UserForm";
import Form_validation from "./Task-4/Form_validation";
import ComponentDidMount from "./Task-5/ComponentDidMount.jsx";
import Compo_update_unmount from "./Task-6/Compo_update_unmount.jsx";
import CreateReactapp from "./Task-7_Hooks/CreateReactapp.jsx";
import UseEffect from "./Task-7_Hooks/UseEffect.jsx";
import UseRef from "./Task-7_Hooks/UseRef.jsx";
import UseState from "./Task-7_Hooks/UseState";

function App() {
  return (
    <div>
     <List_map/>
     <br/>
     <hr/>
     <Users_List/>
     <br/>
     <hr/>
     <UserForm/>
     <br/>
     <hr/>
     <Form_validation/>
      <br/>
      <hr/>
      <ComponentDidMount/>
      <br/>
      <hr/>
      <Compo_update_unmount/>
      <br/>
      <hr/>
      <UseState/>
      <br/>
      <hr/>
      <UseEffect/>
      <br/>
      <hr/>
      <CreateReactapp/>
      <br/>
      <hr/>
      <UseRef/>
      <br/>
      <hr/>
    </div>
  );
}

export default App;
