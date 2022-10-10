
// Fetching the age from the API using Async and await method
import fetch from "node-fetch";
async function returnAge (myAge){
    try{
        const response=await fetch(`https://api.agify.io/?name=${myAge}`);
        const result= await response.json();
        const {age,name}=result;
        console.log(`Age of ${name} is:`,age);
    }catch(err){
        console.log("Got an error");
    }
}
returnAge("Dikshya");
