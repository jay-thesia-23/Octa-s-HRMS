let date = new Date();
let monthArr =  ["","January","February","March","April","May","June","July","August","September","October","November","December"];
let monthInNum = document.querySelector('.hidden-month');

let year = date.getFullYear();
let month = date.getMonth();
createCalendarTable();
let d = new Date(year, month);
let start = d.getDay();
dataInCalendar(month+1, year, start+1);
initalizAll(false);

function getDaysInMonth(month,year) {
   return new Date(year, month, 0).getDate();
}
function createCalendarTable(){
    monthInNum.innerHTML = month+1;
    let tbl = document.querySelector('.calendar');
    let count = 1;
    for(let row = 1; row <= 6; row++){
        let tr = tbl.insertRow(row);
        for(let cell = 0; cell < 7; cell++){
            let td =  tr.insertCell(cell);
            const mainDiv = document.createElement("div");
            const subDiv = document.createElement("div");
            mainDiv.className = 'mainDiv';
            subDiv.className = 'subDiv'+ count;
            mainDiv.appendChild(subDiv);
            td.appendChild(mainDiv);
            tr.appendChild(td);
            count ++;
        }   
        tbl.appendChild(tr);
    }
}

function dataInCalendar(month,year,start){
    let max = getDaysInMonth(month,year);   
    console.log(start, max);
    let count = 1;
    for(let tempDate = start; tempDate < 35; tempDate++){
        let Creclass = 'subDiv'+ tempDate;
        let subDiv = document.querySelector(`.${Creclass}`);      
        subDiv.innerHTML = "";
        if((tempDate >= start) && tempDate < max+start){    
            p = document.createElement('p');
            p.id = count;
            p.style.marginTop = '10px';
            subDiv.appendChild(p);
            p.innerHTML = count;
            count ++;
            }
    }
    count = 1;
}

function initalizAll(isMonthChange){

    let today = date.getDate();
    let todayStyle = document.getElementById(today);
    if(isMonthChange){
        todayStyle.style.background = 'none';
        todayStyle.style.color = 'black';
    }
    else{
        todayStyle.style.backgroundColor = 'blue';
        todayStyle.style.color = 'white';
        todayStyle.style.borderRadius = '50%';
        todayStyle.style.padding = '10px';  
    }
    let  MonthDetail =monthArr[month+1] +" "+ year;
    
    document.querySelector('.current-date').innerHTML =  MonthDetail;
}
function monthChange(newData){
    let newMonth = Number(monthInNum.innerHTML) + newData;
    if(newMonth == 0){
        newMonth = 12;
        year = year-1;
    }
    else if(newMonth == 13){
        newMonth = 1;
        year = year+1;
    }
    console.log(year);
    
    monthInNum.innerHTML = newMonth;
    
    let d = new Date(year, newMonth);
    
    start = d.getDay();
    dataInCalendar(newMonth, year, start+1);
    console.log(monthArr[newMonth], newMonth);
    
    let  MonthDetail =monthArr[newMonth] +" "+ year;
    document.querySelector('.current-date').innerHTML =  MonthDetail;

}