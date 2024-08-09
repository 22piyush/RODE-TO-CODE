function GreetingGm (){

 const date = new Date();

 const currentHour = date.getHours();
 const currentMinute = date.getMinutes();

    return(

        <h1>Good Morning ({currentHour}:{currentMinute})</h1>
    )
}
function GreetingGA (){

    const date = new Date();
   
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
   
       return(
   
           <h1>Good Afternoon ({currentHour}:{currentMinute})</h1>
       )
   }
//Default Export
export default GreetingGm;

//Named Export
export{
    GreetingGA
}