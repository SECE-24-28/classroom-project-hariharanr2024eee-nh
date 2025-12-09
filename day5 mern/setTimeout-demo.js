  
  setTimeout(()=>{
    console.log("hello");
  },10000); 

  setTimeout(()=>{
    console.log("hii");
  },50000); 

  let myPromise=new Promise((resolve,reject)=>{ 
    let success=true; 
    if(success){
      resolve("Promise resolved successfully"); 
    }else{
      reject("Promise rejected");
    } 
  }); 
  myPromise.then((message)=>console.log(message)) 
  myPromise.catch((error)=>console.log(error)); 



   