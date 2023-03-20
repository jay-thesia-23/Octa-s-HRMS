let date = new Date();
let monthArr =  [" ", "January","February","March","April","May","June","July","August","September","October","November","December"];
let lastMonth;   
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
    lastMonth = month;
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
    let count = 1;
    let startP = start;
    for(let tempDate = start; tempDate < max+start; tempDate++){
        let Creclass = 'subDiv'+ tempDate;
        let subDiv = document.querySelector(`.${Creclass}`);      
        subDiv.innerHTML = "";
        p = document.createElement('p');
        p.id = count;
        p.style.marginTop = '10px';
        subDiv.appendChild(p);
        p.innerHTML = count;
        count ++;
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
    let  MonthDetail =monthArr[month] +" "+ year;
    
    document.querySelector('.current-date').innerHTML =  MonthDetail;
}
function monthChange(newData){
    let newMonth = lastMonth + newData;
    let d = new Date(year, newMonth);
    start = d.getDay();
    dataInCalendar(newMonth, year, start+1);
    let  MonthDetail =monthArr[newMonth] +" "+ year;
    document.querySelector('.current-date').innerHTML =  MonthDetail;

}