function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  
async function salam(){
    console.log("salam");
}

(async function hello(name){

console.log("before await....");

sleep(5000)

salam();

console.log("after await");

})()


