let cross = document.getElementById("cross");
let loginpage = document.getElementById("visual");
let page = document.getElementById("shiro");
function see(){
    page.style.display = "block";
    console.log("under function")
}

function kilo(){
    page.style.display = "none";
    
}

cross.addEventListener('click',(e) => {
    kilo();
    
})

loginpage.addEventListener('click',(e) => {
    
    see();
    
})


    let ani = document.getElementById("ani");
    let but = document.getElementById("book");
    const arr = ["B","o","o","k"," ","Y","o","u","r"," ","J","o","u","r","n","e","y"," ","N","o","w"," ","!"]

let i = 0;

    function head(){
        if(i<23){
            ani.textContent += arr[i];
            if(i%2 === 0){
                but.style.backgroundColor = "#f24c4c";
            }
            
            else{
                but.style.backgroundColor = "#9f9e9e9a";
                but.style.color = "white";
                
                
            }

            
            i++
            
        }
        
        else{
            ani.textContent = "Book Your Journey Now !";
            
            
        }
    }

    setInterval(head,200);


    let alfa = document.getElementById("viz");
    let sign = document.getElementById("right");
    
    alfa.addEventListener('click', (e) => {
        
        sign.innerHTML = `<div id="sign">
        <h5 id="peela">Already have an account?</h5>
        <h5 id="ziv">Sign In</h5>
        <svg xmlns="http://www.w3.org/2000/svg" onclick = "kilo()" id="cross" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </div>
        <h2 id="log">Create your account</h2>
        
        <h5 class="al">Name*</h5>
        <input type="email" id="mail"  placeholder="Enter your Name">
        
<h5 class="al">Email*</h5>
<input type="email" id="mail"  placeholder="Enter your email">
<h5 class="al">Password*</h5>
<input type="password" id="pass" placeholder="Enter a password">

<h5 class="al">Confirm*</h5>
<input type="password" id="pass" placeholder="confirm your password">
<button id="btn">REGISTER</button>
<div id="para">
<p>By logging in, I understand & agree to BookMyJourney <span>terms of use</span> and <span>privacy policy </span>
This site is protected by reCAPTCHA</p>
</div>
</div>`


let gama = document.getElementById("ziv");

gama.addEventListener('click', (e) =>{
    
   beta();
})


})


function beta(){

    let sin = document.getElementById("right");
    sin.innerHTML = ` <div id="sign">
    <h5 id="neela">Don't have an account?</h5>
    <h5 id="viz">SignUp</h5>
    <svg xmlns="http://www.w3.org/2000/svg"  onclick = "kilo()" id="cross" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    </div>
    <h2 id="log">Log in to BookMyJourney</h2>
    <h5 class="al">Email</h5>
    <input type="email" id="mail"  placeholder="Enter your email">
    <h5 class="al">Password</h5>
    <input type="password" id="pass" placeholder="Enter your password">
    <button id="btn">LOGIN</button>
    <div id="para">
    <p>By logging in, I understand & agree to BookMyJourney <span>terms of use</span> and <span>privacy policy </span>
    This site is protected by reCAPTCHA</p>
        </div>
        
        </div>`

        let alfa = document.getElementById("viz");
        alfa.addEventListener('click', (e) => {
        
            sign.innerHTML = `<div id="sign">
            <h5 id="peela">Already have an account?</h5>
            <h5 id="ziv">Sign In</h5>
            <svg xmlns="http://www.w3.org/2000/svg" onclick = "kilo()" id="cross" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
            <h2 id="log">Create your account</h2>
            
            <h5 class="al">Name*</h5>
            <input type="email" id="mail"  placeholder="Enter your Name">
            
    <h5 class="al">Email*</h5>
    <input type="email" id="mail"  placeholder="Enter your email">
    <h5 class="al">Password*</h5>
    <input type="password" id="pass" placeholder="Enter a password">
    
    <h5 class="al">Confirm*</h5>
    <input type="password" id="pass" placeholder="confirm your password">
    <button id="btn">REGISTER</button>
    <div id="para">
    <p>By logging in, I understand & agree to BookMyJourney <span>terms of use</span> and <span>privacy policy </span>
    This site is protected by reCAPTCHA</p>
    </div>
    </div>`

        })
}



// displaying ads

let ad = document.getElementById("ad");
let count = 0;

function display(){

    if(count === 0){
        ad.innerHTML = `<img src="/images/long1.png" alt="">`
        count++;
    
    }

    else if(count === 1){
        ad.innerHTML = `<img src="/images/long2.jpg" alt="">`
        count++
    }

    else if(count === 2){
        ad.innerHTML = `<img src="/images/long3.webp" alt="">`
        count++
    }

    else if(count === 3){
        ad.innerHTML = `<img src="/images/long4.jpg" alt="">`
        count++
    }

    else if(count === 4){
        ad.innerHTML = `<img src="/images/long5.jpg" alt="">`
        count = 0
    }


}



setInterval(display,2500);



let engine = document.getElementById("engine");

engine.addEventListener('click',(e) => {
    window.location = "search.html";
})

let pnr = document.getElementById("status");

pnr.addEventListener('click',(e) => {
    window.location = "pnr.html";
})

let fex = document.getElementById("fex");

fex.addEventListener('click',(e) => {
    window.location = "book.html";
})

// responsive


let ham = document.getElementById("ham");
let hammer = document.getElementById("hammer");

let navbar = document.getElementById("navbar");
let ghar = document.getElementById("ghar");
let seart = document.getElementById("seart");
let juu = document.getElementById("juu");
let visual = document.getElementById("visual");
let bla = document.getElementById("ani");

let coin = 0;

ham.addEventListener('click', (e) =>{

    if(coin%2 === 0){

        bla.style.display = "none";
        but.style.display = "none"
        navbar.style.height = "250px";
        navbar.style.transition = "height 0.5s linear 0.1s";
        ghar.style.display = "block";
        seart.style.display = "block";
        juu.style.display = "block";
        visual.style.display = "block";
        ham.style.backgroundColor = "#fc4e4bd5";
        
        coin++;
    }
    else{
        bla.style.display = "block";
        but.style.display = "block"
        ham.style.backgroundColor = "#ED6663";
        navbar.style.height = "50px";
        ghar.style.display = "none";
        seart.style.display = "none";
        juu.style.display = "none";
        visual.style.display = "none";

        coin++;
    }
})


let book = document.getElementById("book");

book.addEventListener('click', (e)=>{
    window.location = "book.html"
})