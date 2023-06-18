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
    const arr = ["I","n","d","i" ,"a","n"," ","R","a","i","l","w","a","y","s"]

let i = 0;

    function head(){
        if(i<15){
            ani.textContent += arr[i];
           

            
            i++
            
        }
        
        else{
            ani.textContent = "Indian Railways";
            
            
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

let shiro = document.getElementById("shiro");

function check(){
    shiro.style.display = "block"
    shiro.innerHTML = `  <div id="login">
    <div id="side">
    <div class="io">
    <div class="chi">
    <img src="/images/shield.png" alt="">
    </div>
    
    <div class="ka">
    <h4>Trusted by over 50 millions Indians</h4>
    </div>
    </div>
    
    <div class="io">
    <div class="chi">
    <img src="/images/credit-cards-payment.png" alt="">
    </div>
    
    <div class="ka">
    <h4>Fast & secure payments</h4>
    </div>
    </div>
    
    
    <div class="io">
    <div class="chi">
    <img src="/images/briefcase.png" alt="">
    </div>
    <div class="ka">
    <h4> Manage trip, get PNR status and predictions</h4>
    </div>
    </div>
    </div>
    
    <!-- main loginform -->
    
    <div id="right">
    <div id="sign">
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
    </div>
    
    
        
        
    </div>`
}



let route = document.getElementById("details");

let size = 0
let pro = document.getElementById("ser");
  pro.addEventListener('click', (e) =>{
    
      
      console.log("mellow")
      
      if(size === 0){
          route.innerHTML = `<h1>Book Your Ticket Online</h1>
          
          <h3>Passanger Details</h3>
          <h4>Passanger 1</h4>
          
          <h4>Full Name</h4>
          <input type="text" placeholder="Name">
          
          <h4 id="cat">Age</h4>
          <input type="number" placeholder="Age">
          <h4>Gender</h4>
          <div id="gender">
          <div class="genx" id="male">Male</div>
          <div class="genx" id="female">Female</div>
          <div class="genx" id="other">Other</div>
          </div>

        <h4 id="moo">Berth Preference</h4>
        <div id="seat">
        <div id="circle">
        <h5>Normal</h5>
        <div class="low" id="up">Upper</div>
        <div class="low" id="middle">Middle</div>
        <div class="low" id="lower">Lower</div>
        </div>
        <div id="triangle">
        <h5>Side</h5>
        <div id="pap">
        <div class="upper" id="sidelo">L</div>
        <div class="upper" id="sideup">U</div>
        </div>
        </div>
        </div>
        
        <div id="more">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
        <h3 id="xx">Add Passanger</h3>
        </div>
        <button id="ser" onclick="duck()">Save and Proceed</button>`




        // gender selecting function

let male = document.getElementById("male");
let female = document.getElementById("female");
let other = document.getElementById("other");

male.addEventListener('click' ,(e) =>{
    male.style.color = "white";
    male.style.backgroundColor = "blue";
    
    female.style.color = "blue"
    female.style.backgroundColor = "white"
    
    other.style.color = "blue"
    other.style.backgroundColor = "white"
    
    
    
})


female.addEventListener('click' ,(e) =>{
    female.style.color = "white";
    female.style.backgroundColor = "blue";
    
    male.style.color = "blue"
    male.style.backgroundColor = "white"
    
    other.style.color = "blue"
    other.style.backgroundColor = "white"
    
    
    
})

other.addEventListener('click' ,(e) =>{
    other.style.color = "white";
    other.style.backgroundColor = "blue";
    
    male.style.color = "blue"
    male.style.backgroundColor = "white"

    female.style.color = "blue"
    female.style.backgroundColor = "white"
    
    
    
})

// Seat preference selecting


let up = document.getElementById("up");
let middle = document.getElementById("middle");
let lower = document.getElementById("lower");
let sidelo = document.getElementById("sidelo");
let sideup = document.getElementById("sideup");

up.addEventListener('click', (e) =>{
    up.style.color = "white";
    up.style.background = "rgb(29, 241, 29)";
    
    middle.style.color = "black";
    middle.style.backgroundColor = "white";
    
    lower.style.color = "black";
    lower.style.backgroundColor = "white";
    
    sidelo.style.color = "black";
    sidelo.style.backgroundColor = "white";
    
    sideup.style.color = "black";
    sideup.style.backgroundColor = "white";
    
    
})


middle.addEventListener('click', (e) =>{
    middle.style.color = "white";
    middle.style.background = "rgb(29, 241, 29)";
    
    up.style.color = "black";
    up.style.backgroundColor = "white";
    
    lower.style.color = "black";
    lower.style.backgroundColor = "white";
    
    sidelo.style.color = "black";
    sidelo.style.backgroundColor = "white";
    
    sideup.style.color = "black";
    sideup.style.backgroundColor = "white";
    
    
})

lower.addEventListener('click', (e) =>{
    lower.style.color = "white";
    lower.style.background = "rgb(29, 241, 29)";
    
    middle.style.color = "black";
    middle.style.backgroundColor = "white";
    
    up.style.color = "black";
    up.style.backgroundColor = "white";
    
    sidelo.style.color = "black";
    sidelo.style.backgroundColor = "white";
    
    sideup.style.color = "black";
    sideup.style.backgroundColor = "white";
    
    
})

sidelo.addEventListener('click', (e) =>{
    sidelo.style.color = "white";
    sidelo.style.background = "rgb(29, 241, 29)";

    middle.style.color = "black";
    middle.style.backgroundColor = "white";
    
    lower.style.color = "black";
    lower.style.backgroundColor = "white";
    
    up.style.color = "black";
    up.style.backgroundColor = "white";
    
    sideup.style.color = "black";
    sideup.style.backgroundColor = "white";
    
    
})


sideup.addEventListener('click', (e) =>{
    sideup.style.color = "white";
    sideup.style.background = "rgb(29, 241, 29)";
    
    middle.style.color = "black";
    middle.style.backgroundColor = "white";
    
    lower.style.color = "black";
    lower.style.backgroundColor = "white";
    
    sidelo.style.color = "black";
    sidelo.style.backgroundColor = "white";
    
    up.style.color = "black";
    up.style.backgroundColor = "white";
    
    
})




    //adding passanger

let details = document.getElementById("details");
let addpass = document.getElementById("more");
let ser = document.getElementById("ser");
let main = document.getElementById("main");

addpass.addEventListener('click', (e) => {
    addpass.remove();
    ser.remove();
    main.style.height = "1700px"
    details.innerHTML += ` <h3>Passanger Details</h3>
    <h4>Passanger 2</h4>
    
    <h4>Full Name</h4>
    <input type="text" placeholder="Name">
    
    <h4 id="cat">Age</h4>
    <input type="number" placeholder="Age">
    <h4>Gender</h4>
    <div id="gender">
        <div class="genx" id="male2">Male</div>
        <div class="genx" id="female2">Female</div>
        <div class="genx" id="other2">Other</div>
    </div>

    <h4 id="moo">Berth Preference</h4>
    <div id="seat">
        <div id="circle">
            <h5>Normal</h5>
            <div class="low" id="up2">Upper</div>
            <div class="low" id="middle2">Middle</div>
            <div class="low" id="lower2">Lower</div>
        </div>
        <div id="triangle">
            <h5>Side</h5>
            <div id="pap">
                <div class="upper" id="sidelo2">L</div>
                <div class="upper" id="sideup2">U</div>
            </div>
        </div>
    </div>

    <button id="ser" onclick="duck()">Save and Proceed</button>`
    
    
    // second part
    
    
    let male2 = document.getElementById("male2");
    let female2 = document.getElementById("female2");
    let other2 = document.getElementById("other2");
    
    male2.addEventListener('click' ,(e) =>{
    male2.style.color = "white";
    male2.style.backgroundColor = "blue";
    
    female2.style.color = "blue"
    female2.style.backgroundColor = "white"
    
    other2.style.color = "blue"
    other2.style.backgroundColor = "white"
    
    
    
})


female2.addEventListener('click' ,(e) =>{
    female2.style.color = "white";
    female2.style.backgroundColor = "blue";
    
    male2.style.color = "blue"
    male2.style.backgroundColor = "white"
    
    other2.style.color = "blue"
    other2.style.backgroundColor = "white"
    
    
    
})

other2.addEventListener('click' ,(e) =>{
    other2.style.color = "white";
    other2.style.backgroundColor = "blue";
    
    male2.style.color = "blue"
    male2.style.backgroundColor = "white"
    
    female2.style.color = "blue"
    female2.style.backgroundColor = "white"    
    
   })

//    uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu



let up2 = document.getElementById("up2");
let middle2 = document.getElementById("middle2");
let lower2 = document.getElementById("lower2");
let sidelo2 = document.getElementById("sidelo2");
let sideup2 = document.getElementById("sideup2");

up2.addEventListener('click', (e) =>{
    up2.style.color = "white";
    up2.style.background = "rgb(29, 241, 29)";
    
    middle2.style.color = "black";
    middle2.style.backgroundColor = "white";
    
    lower2.style.color = "black";
    lower2.style.backgroundColor = "white";
    
    sidelo2.style.color = "black";
    sidelo2.style.backgroundColor = "white";
    
    sideup2.style.color = "black";
    sideup2.style.backgroundColor = "white";
    
    
})


middle2.addEventListener('click', (e) =>{
    middle2.style.color = "white";
    middle2.style.background = "rgb(29, 241, 29)";
    
    up2.style.color = "black";
    up2.style.backgroundColor = "white";
    
    lower2.style.color = "black";
    lower2.style.backgroundColor = "white";
    
    sidelo2.style.color = "black";
    sidelo2.style.backgroundColor = "white";
    
    sideup2.style.color = "black";
    sideup2.style.backgroundColor = "white";
    
    
})

lower2.addEventListener('click', (e) =>{
    lower2.style.color = "white";
    lower2.style.background = "rgb(29, 241, 29)";
    
    middle2.style.color = "black";
    middle2.style.backgroundColor = "white";
    
    up2.style.color = "black";
    up2.style.backgroundColor = "white";
    
    sidelo2.style.color = "black";
    sidelo2.style.backgroundColor = "white";
    
    sideup2.style.color = "black";
    sideup2.style.backgroundColor = "white";
    
    
})

sidelo2.addEventListener('click', (e) =>{
    sidelo2.style.color = "white";
    sidelo2.style.background = "rgb(29, 241, 29)";
    
    middle2.style.color = "black";
    middle2.style.backgroundColor = "white";
    
    lower2.style.color = "black";
    lower2.style.backgroundColor = "white";
    
    up2.style.color = "black";
    up2.style.backgroundColor = "white";
    
    sideup2.style.color = "black";
    sideup2.style.backgroundColor = "white";
    
    
})


sideup2.addEventListener('click', (e) =>{
    sideup2.style.color = "white";
    sideup2.style.background = "rgb(29, 241, 29)";
    
    middle2.style.color = "black";
    middle2.style.backgroundColor = "white";
    
    lower2.style.color = "black";
    lower2.style.backgroundColor = "white";
    
    sidelo2.style.color = "black";
    sidelo2.style.backgroundColor = "white";
    
    up2.style.color = "black";
    up2.style.backgroundColor = "white";
    
    
     })

    })
     
     
        
        size++;
    }
    
    else{
        alert("Something Went Wrong!, Please try again later")
    }
    
})


function duck(){
    let main = document.getElementById("main");
    main.style.height = "860px"
    route.innerHTML = ` <h3>Contact Details</h3>
    <h4 id="mnum">Mobile Number*</h4>
    <input type="number" placeholder="Mobile Number">
    
    <h4 id="malu">Email*</h4>
    <input type="email" placeholder="Email">
    <div id="insider">
    <div class="rect" id="bmw">
    <p>By clicking on 'Proceed to Pay', I confirm that I have read, understood and agree with the <span id="fish">Cancellation & Refund Policy, Privacy Policy</span> and <span id="fish">Terms of use.</span></p>
    </div>
    <div class="rect" id="audi">
    <div id="ctc"><img src="/images/img2.png" alt=""></div>
    <h4>Bookings are powered by IRCTC</h4>
    </div>
    </div>
    <button id="ser" onclick="jam()">Proceed to Pay</button>`
    
   }

   function jam(){
    alert("This Feature is currently under production, we can't proccess your request at this time, Please try again later.")
   }



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