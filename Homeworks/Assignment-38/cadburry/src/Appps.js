import "./App.css";

function HelloUser({name,emoji}){

    return(
        <div className="greeting-1">
            Hello, {name} {emoji}
        </div>
    )
}
function GreetingBye(){

    return(
        <div className="greeting-2">
            Bye Bye.............
        </div>
    )
}
function GreetingHAY(){

    return(
        <div className="greeting-3">
            how Are You.............
        </div>
    )
}
export default HelloUser;
export{GreetingBye,GreetingHAY}