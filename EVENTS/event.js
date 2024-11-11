let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () =>{
    console.log("You touched me once")
});



const handler1 = ("click", () => {
    console.log("You touched me twice")
})
btn1.addEventListener("click", handler1);



btn1.addEventListener("click", () =>{
    console.log("You touched me thrice")
});
btn1.addEventListener("click", () =>{
    console.log("You touched me 4 times")
});
/*let box = document.querySelector("div");

box.onmouseover = () => {
    alert("No No No Wait Wait Wait");
}*/

btn1.removeEventListener("click", handler1);
