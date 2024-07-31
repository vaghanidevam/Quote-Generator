let url = "https://api.quotable.io/random";
let btn = document.getElementById("btn");


btn.addEventListener("click", async ()=>{
  let data =  await g();
  console.log(data);
  let c = data.content;
  let a= data.author;
  
  let qt = document.querySelector("#quote");
  // let ans = quote[0].toUpperCase();
  qt.innerHTML = '"' + `${c}` + '"';

  let ath = document.querySelector("#author");
  ath.innerText = "- " + `${a}`;
})

async function g(){
   
    let quota = await fetch(url);
    let data  = await quota.json();
    return data;
}