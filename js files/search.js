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
    const arr = ["G","e","t"," " ,"Y","o","u","r"," ","T","r","a","i","n"," ","D","e","t","a","i","l","s"," ", "H", "e","r","e"," ","!"]

let i = 0;

    function head(){
        if(i<29){
            ani.textContent += arr[i];
           

            
            i++
            
        }
        
        else{
            ani.textContent = "Get Your Train Details Here !";
            
            
        }
    }

    setInterval(head,200);


    let alfa = document.getElementById("viz");
    let sign = document.getElementById("right");
    
    alfa.addEventListener('click', (e) => {
        
        sign.innerHTML = `<div id="sign">
        <h5>Already have an account?</h5>
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
    <h5>Don't have an account?</h5>
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
            <h5>Already have an account?</h5>
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

// rendering

let serbut = document.getElementById("ser");
let tname = document.getElementById("git");
let tnum = document.getElementById("pit");
let details = document.getElementById("details");

serbut.addEventListener('click', (e) => {

    localStorage.setItem("trainnum",tnum.value)
    
    if(tname.value === "" && tnum.value === ""){
        alert("Kindly enter the Train Name or Number completely")
    }

    else{
        details.innerHTML = `<div id="fifa">
        <h3 class="maj" id="ds">Train Name </h3>
        <h3 id="Tname">Dayodaya Express</h3>
    </div>

    <div id="giga">
        <h3 class="maj" id="sd">Train Number </h3>
        <h3 id="Tnum">12181</h3> 
    </div>

    <div id="aa">
        <h3 class="maj">From</h3>
        <h3 id="from">Jabalpur</h3>
        <h3 class="maj">To</h3>
        <h3 id="to">Ajmer</h3>

    </div>

    <h3 id="run">Running day</h3>
    <div id="days">
        <div class="box">Mon</div>
        <div class="box">Tue</div>
        <div class="box">Wed</div>
        <div class="box">Thu</div>
        <div class="box">Fri</div>
        <div class="box">Sat</div>
        <div class="box">Sun</div>
    </div>
    <div id="time">
        <div class="jj">
            <h3 class="maj">Departure Time : </h3>
            <h3 id="Dep"> 20:50</h3>
        </div>
        <div class="jj">
            <h3 class="maj">Arrival Time : </h3>
            <h3 id="Arr"> 13:55</h3>

        </div>
    </div>`
    }
})


// displaying ads

let ad = document.getElementById("ads");
let count = 0;

function display(){

    if(count === 0){
        ad.innerHTML = `<img src="/images/boxad1.png" alt="">`
        count++;
    
    }

    else if(count === 1){
        ad.innerHTML = `<img src="/images/boxad3.webp" alt="">`
        count++
    }

    else if(count === 2){
        ad.innerHTML = `<img src="/images/boxad4.jpg" alt="">`
        count++
    }

    else if(count === 3){
        ad.innerHTML = `<img src="/images/boxad5.png" alt="">`
        count++
    }

    else if(count === 4){
        ad.innerHTML = `<img src="/images/boxad6.webp" alt="">`
        count = 0
    }


}



setInterval(display,2500);


// api


let ham = document.getElementById("ham");
let hammer = document.getElementById("hammer");

let navbar = document.getElementById("navbar");
let ghar = document.getElementById("ghar");
let seart = document.getElementById("seart");
let juu = document.getElementById("juu");

let bla = document.getElementById("ani");

let coin = 0;

ham.addEventListener('click', (e) =>{

    if(coin%2 === 0){

        bla.style.display = "none";
        
        navbar.style.height = "250px";
        navbar.style.transition = "height 0.5s linear 0.1s";
        ghar.style.display = "block";
        seart.style.display = "block";
        juu.style.display = "block";
       
        ham.style.backgroundColor = "#fc4e4bd5";
        
        coin++;
    }
    else{
        bla.style.display = "block";
    
        ham.style.backgroundColor = "#ED6663";
        navbar.style.height = "50px";
        ghar.style.display = "none";
        seart.style.display = "none";
        juu.style.display = "none";
      

        coin++;
    }
    
    
})