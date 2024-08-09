import{createRoot} from "react-dom/client";
import GreetingGm,{GreetingGA} from "./App";
import HelloUser,{GreetingBye,GreetingHAY} from "./Appps";

const root = createRoot(document.getElementById("root"));

root.render(<>
    <h1>All Choclates</h1>
    
    <GreetingGm/>
    <GreetingGA/>

    <HelloUser name="john" emoji="🤗"/>
    <HelloUser name="Bhai" emoji="🙂"/>

    <GreetingBye/>
    <GreetingHAY/>
     
</>)