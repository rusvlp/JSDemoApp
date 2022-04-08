let username = localStorage.getItem("username");
if (username == null){
    username = prompt("Введите имя");
    while(username == "" || username == null){
        alert("Неккоректное значение");
        username = prompt("Введите имя");
    }

    localStorage.setItem("username", username);
}

let usernameDiv = document.getElementById("topleftusername");
usernameDiv.innerHTML += username;

let usernameSleep = document.getElementById("sun")
usernameSleep.innerHTML += username;

let dateSleep = document.getElementById("sd");
dateSleep.innerHTML += new Date().toISOString().slice(0, 10);

let menu = document.querySelector(".menu");
console.log(menu);

let navi = document.querySelector(".navi");

function showMenu(){
    menu.classList.toggle("active");
    navi.classList.toggle("active");
}

function hideMenu(){
    menu.classList.toggle("active");
}

function logout(){
    localStorage.clear();
    location.reload();
}

let sleepScreen = document.querySelector(".sleep");
let sleepusername = document.querySelector(".sleepusername");
let sleepDate = document.querySelector(".sleepDate");
function sleep(){
    sleepScreen.classList.toggle("active");
    sleepusername.classList.toggle("active");
    sleepDate.classList.toggle("active");
}

let jslogo = document.querySelector(".jslogocontainer");

setInterval(() => {jslogo.classList.toggle("active")}, 1000)



let header = document.querySelector("#header");
let lastScrollTop = 0;
let upcounter = 0;
let downcounter = 0;
let set = {
    html: false,
    css: false,
    js: false,
    i2m: false,
    i2d: false,
    cc: false,
    pc: false,
    prosh: false,
    prosd: false,
    consh: false,
    consd: false
};
window.addEventListener("scroll", () => {

    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop){
        upcounter++;
        downcounter = 0;
        rolled = true;
    }
    else{
        downcounter++;
        upcounter = 0;
        rolled = true;
    }
    lastScrollTop = st;
    if (upcounter == 1){
        header.classList.toggle("passive");
    }
    if (downcounter == 1){
        header.classList.toggle("passive");
    }
    hcjReveal();
})

function hcjReveal(){
    let screenPos = window.innerHeight / 1.25;

    let prosh = document.querySelector(".prosh")
    let proshPos = prosh.getBoundingClientRect().top;

    let prosd = document.querySelector(".prosd")
    let prosdPos = prosd.getBoundingClientRect().top;

    let consh = document.querySelector(".consh")
    let conshPos = consh.getBoundingClientRect().top;

    let consd = document.querySelector(".consd")
    let consdPos = consd.getBoundingClientRect().top;

    let pc = document.querySelector(".proscontainer")
    let pcPos = pc.getBoundingClientRect().top;

    let cc = document.querySelector(".conscontainer")
    let ccPos = cc.getBoundingClientRect().top;

    let i2m = document.querySelector(".aboutjs");
    let i2mpos = i2m.getBoundingClientRect().top;

    let i2d = document.querySelector(".i2d");
    let i2dpos = i2d.getBoundingClientRect().top;

    let css = document.querySelector(".css");
    let cssPos = css.getBoundingClientRect().top;
  
    let html = document.querySelector(".html");
    let htmlPos = html.getBoundingClientRect().top;
    
    let js = document.querySelector(".js");
    let jsPos = js.getBoundingClientRect().top;

    if (consdPos < screenPos && !set.consd) {
        consd.classList.add("reveal");
        set.consd = true;
    }

    if (conshPos < screenPos && !set.consh) {
        consh.classList.add("reveal");
        set.consh = true;
    }

    if (prosdPos < screenPos && !set.prosd) {
        prosd.classList.add("reveal");
        set.prosd = true;
    }

    if (proshPos < screenPos && !set.prosh) {
        prosh.classList.add("reveal");
        set.prosh = true;
    }

    if (ccPos < screenPos && !set.cc) {
        cc.classList.add("reveal");
        set.cc = true;
    }

    if (pcPos < screenPos && !set.pc) {
        pc.classList.add("reveal");
        set.pc = true;
    }

    if (i2mpos < screenPos && !set.i2m) {
        i2m.classList.add("reveal");
        set.i2m = true;
    }

    if (i2dpos < screenPos && !set.i2d) {
        i2d.classList.add("reveal");
        set.i2d = true;
    }

    if (htmlPos < screenPos && !set.html) {
        html.classList.add("reveal");
        set.html = true;
    }

    if (cssPos < screenPos && !set.css) {
        css.classList.add("reveal");
        set.css = true;
    }

    if (jsPos < screenPos && !set.js) {
        js.classList.add("reveal");
        set.js = true;
    }
}


function navigation(element){
    switch(element){
        case(1):
            break;
    }
}



let mainDis = new Switcher([".main", ".main2", ".main3", ".main4"], "reveal");
let strDis = new Switcher([".string"], "reveal")
let arrayDis = new Switcher([".array"], "reveal");
let timerDis = new Switcher([".timer"], "reveal");
let testDis = new Switcher([".test"], "reveal");
let rightTimerDis = new Switcher([".rightTimer"], "reveal");
let triangleDis = new Switcher([".triangle"], "reveal");

mainDis.switch();

let active = mainDis;

function switcherEl(el){
    let ts = document.querySelector(".ts")

    ts.classList.toggle("shown");
    setTimeout(() => {
        switch(el){
            case(1):
                active.switch();
                mainDis.switch();
                active = mainDis;
                break;
            case(2):
                active.switch();
                strDis.switch();
                active = strDis;
                break;
            case(3):
                active.switch()
                arrayDis.switch();
                active = arrayDis;
                break;
            case(4):
                active.switch();
                timerDis.switch();
                active = timerDis;
                break;
            case(5):   
                active.switch();
                testDis.switch();
                active = testDis;
                break;
            case(6):
                active.switch();
                rightTimerDis.switch();
                active = rightTimerDis;
                break;
            case(7):
                active.switch();
                triangleDis.switch();
                active = triangleDis;
                break;

        }
        ts.classList.toggle("shown");
    }, 250)
   // ts.classList.toggle("shown");
}

function Switcher(querySelectors, disabledSelector){
    this.querySelectors = querySelectors;
    this.disabledSelector = disabledSelector;


    this.switch = function(){
        let qS;
        querySelectors.forEach(element => {
            qS = document.querySelector(element);
            qS.classList.toggle(disabledSelector);
        });
    }
}

let stringComparator = {
    result: undefined,
    compare: function(){
        let bg = document.querySelector(".strel");

        let str1 = document.querySelector("#str1").value;
        let str2 = document.querySelector("#str2").value;
        
        if (str1 == "" || str2 == "")
            return;

        if (str1.length == str2.length && this.result != true){
            if (this.result == false)
                bg.classList.toggle("false");
            this.result = true;
            bg.classList.toggle("true");
        } else if (str1.length != str2.length && this.result != false){
            if (this.result == true)
                bg.classList.toggle("true");
            this.result = false;
            bg.classList.toggle("false");
        }
    }

}

function findMinMax(){
    document.querySelector(".minmax").innerHTML = "";
    let string = document.querySelector(".arr").value;
    let array = string.split(" ");

    let min = max = Number.parseInt(array[0]);


    array.forEach((el) => {
        el = Number.parseInt(el);

        if (el < min || !Number.isFinite(el))
            min = el;
        
        if (el > max || !Number.isFinite(el))
            max = el;
    })
    console.log(min + " " +max);
    if (!Number.isFinite(min) || !Number.isFinite(max)){
        document.querySelector(".minmax").innerHTML = "Одно из введенных значений не является конечным числом";
        return;
    }
        
    

    document.querySelector(".minmax").innerHTML += "Мин: " + min + ", макс: " + max;
}


let timer = {
    msCtr: 0,
    sCtr: 0,
    mCtr: 0,
    hCtr: 0,

    seconds: document.querySelector(".seconds"),
    minutes: document.querySelector(".minutes"),
    hours: document.querySelector(".hours"),
    interval: undefined,
    isPaused: false,
    isStopped: true,
    pauseBtn: document.querySelector(".pause"),

    pause: function(){
        if (this.isStopped != true){
            if (this.isPaused != true){
                clearInterval(this.interval)
                this.isPaused = true;
                this.pauseBtn.innerHTML = "ПРОДОЛЖИТЬ"
                this.pauseBtn.classList.add("paused");
            } else{
                this.interval = setInterval(() => {this.start()}, 1000);
                this.isPaused = false;
                this.pauseBtn.innerHTML = "ПАУЗА"
                this.pauseBtn.classList.remove("paused");
            }
        } else {
            clearInterval(this.interval)
        }

    },

    disable: function(){
        this.sCtr = 0
        this.mCtr = 0
        this.hCtr = 0
        this.pauseBtn.innerHTML = "ПАУЗА"
        this.pauseBtn.classList.remove("paused");

        this.seconds.innerHTML = "00"
        this.minutes.innerHTML = "00"
        this.hours.innerHTML = "00"
        this.isStopped = true;

        clearInterval(this.interval)
    },

    enable: function(){
        this.isPaused = false
        this.sCtr = 0
        this.mCtr = 0
        this.hCtr = 0
        this.isStopped = false;
        this.pauseBtn.innerHTML = "ПАУЗА"
        this.pauseBtn.classList.remove("paused");

        this.seconds.innerHTML = "00"
        this.minutes.innerHTML = "00"
        this.hours.innerHTML = "00"

        clearInterval(this.interval)
        this.interval = setInterval(() => {this.start()}, 1000);
    },

    start: function(){
        
        this.sCtr ++;
        
        if (this.sCtr<=9)
            this.seconds.innerHTML = "0" + this.sCtr;
        else
            this.seconds.innerHTML = this.sCtr;

        if (this.sCtr > 59){
            this.sCtr = 0;
            this.seconds.innerHTML = "00";
            this.mCtr++;
            this.minutes.innerHTML = this.mCtr <= 9 ? "0" + this.mCtr : this.mCtr;
        }

        if (this.mCtr > 59){
            this.mCtr = 0;
            this.minutes.innerHTML = "00";
            this.hCtr++;
            this.hours.innerHTML = this.hCtr <= 9 ? "0" + this.hCtr : this.hCtr;
        }
            
    }
}

let rtController = {
    sCtr: 1,
    mCtr: 1,
    hCtr: 1,
    isEnabled: false,
    interval: null,
    isPaused: false,

    initialize: () => {
        this.sCtr = 0;
        this.mCtr = 0;
        this.hCtr = 0;
        this.isEnabled = false;
        this.interval = null;
        this.isPaused = false;
    },

    startTimer: () => {
    
        let hours = document.querySelector(".rthr .numrt");
        let minutes = document.querySelector(".rtm .numrt");
        let seconds = document.querySelector(".rts .numrt");
        console.log(this.sCtr);
        
        this.isEnabled = true;
        if (!(this.hCtr == 0 && this.mCtr == 0 && this.sCtr == 0))
            this.interval = setInterval(() => {
                rtController.decrease(1);
                if (this.sCtr == 0 && this.mCtr == 0 && this.hCtr == 0){   //время таймера вышло
                    this.isEnabled = false;
                    clearInterval(this.interval);
                    setTimeout(() => {alert("Время вышло!")}, 1000);
                }
            }, 1000);
            
    },

    pauseTimer: () => {
        let pauseBtn = document.getElementById("rtPause");

        if (!this.isPaused){
            if (this.isEnabled){
    
         
                this.isPaused = true;
                clearInterval(this.interval);
            }
        } else {
            if (this.isEnabled){
        
                this.isPaused = false;
                this.interval = setInterval(() => {
                    rtController.decrease(1);
                    if (this.sCtr == 0 && this.mCtr == 0 && this.hCtr == 0){   //время таймера вышло
                        clearInterval(this.interval);
                        setTimeout(() => {alert("Время вышло!")}, 1000);
                        this.isPaused = false
                        this.isEnabled = false
                    }
                }, 1000);
            }
        }
    },

    stopTimer: () => {
        let hours = document.querySelector(".rthr .numrt");
        let minutes = document.querySelector(".rtm .numrt");
        let seconds = document.querySelector(".rts .numrt");
        this.sCtr = 0;
        this.mCtr = 0;
        this.hCtr = 0;
        
        hours.innerHTML = "00";
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";

        clearInterval(this.interval);
        this.isEnabled = false;
        this.isPaused = false;
    },

    increase: (index) => {
        console.log("worked");

        switch(index){
            case(1):
                if (this.sCtr < 59){
                    this.sCtr++;
                    this.sCtr > 9 ? document.querySelector(".rts .numrt").innerHTML = this.sCtr : document.querySelector(".rts .numrt").innerHTML = "0" + this.sCtr; 
                    break;
                } else {
                    rtController.increase(2);
                    this.sCtr = 0;
                    document.querySelector(".rts .numrt").innerHTML = "00";
                    break;
                }
            case(2):
                if (this.mCtr < 59){
                    this.mCtr++;
                    this.mCtr > 9 ? document.querySelector(".rtm .numrt").innerHTML = this.mCtr : document.querySelector(".rtm .numrt").innerHTML = "0" + this.mCtr;
                    break;
                } else {
                    rtController.increase(3);
                    this.mCtr = 0;
                    document.querySelector(".rtm .numrt").innerHTML = "00";
                    break;
                }
            case(3):
                this.hCtr++;
                this.hCtr > 9 ? document.querySelector(".rthr .numrt").innerHTML = this.hCtr : document.querySelector(".rthr .numrt").innerHTML = "0" + this.hCtr;
                break;
        }
        console.log(this.sCtr);
    }, 

    decrease: (index) => {
        switch(index){
            case(1):
                if (this.sCtr > 0){
                    this.sCtr--;
                    this.sCtr > 9 ? document.querySelector(".rts .numrt").innerHTML = this.sCtr : document.querySelector(".rts .numrt").innerHTML = "0" + this.sCtr; 
                    break;
                } else {
                    if (this.mCtr >= 0){
                        this.sCtr = 59;
                        document.querySelector(".rts .numrt").innerHTML = this.sCtr;
                        rtController.decrease(2);
                    }
                    break;
                }
            case(2):
            
                if (this.mCtr > 0){
                    this.mCtr--;
                    this.mCtr > 9 ? document.querySelector(".rtm .numrt").innerHTML = this.mCtr : document.querySelector(".rtm .numrt").innerHTML = "0" + this.mCtr;
                    break;
                } else {
                    if (this.hCtr > 0){
                        ; 
                        this.mCtr = 59;
                        document.querySelector(".rtm .numrt").innerHTML = this.mCtr;

                        if (this.hCtr >= 1){
                            this.hCtr++;

                        } 
                        rtController.decrease(3)
                        
                    }
                }
            case(3):
           
                if (this.hCtr > 0){
                    this.hCtr--;
                    this.hCtr > 9 ? document.querySelector(".rthr .numrt").innerHTML = this.hCtr : document.querySelector(".rthr .numrt").innerHTML = "0" + this.hCtr;
                    break;    
                } else {
                   
                    break;
                }
        }
        
    },

    increaseBtn: (index) => {
        
        if (!this.isEnabled && !this.isPaused){
            console.log("increased");
            rtController.increase(index);
        }
    },

    decreaseBtn: (index) => {
        
        if (!this.isEnabled && !this.isPaused){
            console.log("decreased");
            rtController.decrease(index);
        }
    }
}

window.onload = function(){
    rtController.initialize();
}

function calcTriangle(){
    let a = document.getElementById("aTri").value
    let h = document.getElementById("hTri").value
    let answerDiv = document.querySelector(".triangleResult");

    let answer = (a * h) / 2;

    if (!Number.isFinite(answer))
        answerDiv.innerHTML = "Ошибка"
    else
        answerDiv.innerHTML = "Ответ: " + answer;
}


function checkTest(){
    let resultCtr = 0;

    if (document.getElementById("dyname").checked)
        resultCtr++;
    
    if (document.getElementById("block").checked)
        resultCtr++;

    if (document.getElementById("funcVar").checked)
         resultCtr++;
    
    if (document.getElementById("error").checked)
        resultCtr++;

    if (document.getElementById("script").checked)
        resultCtr++;


    if (document.getElementById("obnot").checked)
        resultCtr++;

    if (document.getElementById("varType").checked)
        resultCtr++;

    if (document.getElementById("letType").checked)
        resultCtr++;

    if (document.getElementById("constType").checked)
        resultCtr++;

    if (document.getElementById("req").checked)
        resultCtr++;

    if (document.getElementById("iden").checked)
        resultCtr++;

    if (document.getElementById("yes").checked)
        resultCtr++;

    document.getElementById("resultTest").innerHTML = "Результат: " + resultCtr + " из 12";
}