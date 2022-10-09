
// Fetching the age from the API using Async and await method
import fetch from "node-fetch";
import promptSync from "prompt-sync"
async function returnAge (myAge){
    try{
        const response=await fetch(`https://api.agify.io/?name=${myAge}`);
        const result= await response.json();
        const {perAge,name}=result;
        console.log(`Age of ${name} is:`,perAge);
    }catch(err){
        console.log("Got an error");
    }
}
const prompt=promptSync();
var name=prompt("Enter the name :");
returnAge(myAge);
