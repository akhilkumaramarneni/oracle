// calling api call
let response = await fetch('https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867', {
  method: 'GET',
  headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
})

// get and parse data
let t=await response.text()
let len = t.length

// get API data
let getData = JSON.parse(t.slice(11,len-1))


// adding inital HTML[given in documentaion]
let sttipDiv = document.createElement("div");
sttipDiv.setAttribute('class','sttip')

let tooltip_in = document.createElement("div");
tooltip_in.setAttribute('class','tooltip in')

let tooltip_ar = document.createElement("div");
tooltip_ar.setAttribute('class','tooltip-arrow')

let tooltip_se = document.createElement("div");
tooltip_se.setAttribute('class','tooltip-arrow second-arrow')

let popover_inner = document.createElement("div");
popover_inner.setAttribute('class','popover-inner')

tooltip_in.appendChild(tooltip_ar)
tooltip_in.appendChild(tooltip_se)
tooltip_in.appendChild(popover_inner)
sttipDiv.appendChild(tooltip_in)

let body = document.getElementsByTagName('body')[0]
body.appendChild(sttipDiv)


// adding tiplates data from API
let pop_inner = document.getElementsByClassName("popover-inner")[0]
let textdata = getData.data.tiplates.tip;
pop_inner.innerHTML  = textdata;



// adding api css after head
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.type = 'text/css';
var css = getData.data.css;
style.appendChild(document.createTextNode(css));
head.appendChild(style);


// adding css dynamically links [more css]
// var link = document.createElement('link');
// link.rel = "stylesheet";
// link.type = "text/css";
// link.href = "https://guidedlearning.oracle.com/player/latest/static/css/stTip.css";
// document.head.appendChild(link);


// get each selector and add tooltip from api
// id : hplogo actually it should be logo

let len_of_actions = getData.data.structure.step.length;

// for (let i = 0; i < len_of_actions; i++) {
//     let ele;
//     if(i==0)
//         ele = document.getElementById("logo")
//     else{
//         if(getData.data.structure.steps[0].action.hasOwnProperty('contents'))
//          ele = document.getElementById("logo")   
//     }
// }


// [later chnage to loop]

let logo = document.getElementById("logo")
let child_tooltip1 = document.createElement('div');
child_tooltip1.innerHTML=getData.data.structure.steps[0].action.contents["#content"]
child_tooltip1.setAttribute('id','content1')
logo.appendChild(child_tooltip1)
child_tooltip1.style.display="none"


let logocodes = document.getElementById("logo");
logocodes.addEventListener("mouseover", function () {
    var logotooltip = document.getElementById("content1");
    logotooltip.style.display='block';
    });

logocodes.addEventListener("mouseout", function () {
    var logotooltip = document.getElementById("content1");
    logotooltip.style.display='none';
    });


let image = document.getElementsByClassName("gb_g")[1]
let child_tooltip2 = document.createElement('div');
child_tooltip2.innerHTML=getData.data.structure.steps[1].action.contents["#content"]
child_tooltip2.setAttribute('id','content2')
image.appendChild(child_tooltip2)
child_tooltip2.style.display="none"

logocodes = document.getElementsByClassName("gb_g")[1];
logocodes.addEventListener("mouseover", function () {
    var logotooltip = document.getElementById("content2");
    logotooltip.style.display='block';
    });

logocodes.addEventListener("mouseout", function () {
    var logotooltip = document.getElementById("content2");
    logotooltip.style.display='none';
    });


let search = document.getElementById("realbox-container")
let child_tooltip3 = document.createElement('div');
child_tooltip3.innerHTML=getData.data.structure.steps[2].action.contents["#content"]
child_tooltip3.setAttribute('id','content3')
search.appendChild(child_tooltip3)
child_tooltip3.style.display="none"

logocodes = document.getElementById("realbox-container")
logocodes.addEventListener("mouseover", function () {
    var logotooltip = document.getElementById("content3");
    logotooltip.style.display='block';
    });

logocodes.addEventListener("mouseout", function () {
    var logotooltip = document.getElementById("content3");
    logotooltip.style.display='none';
    });

