let month=[31,28,31,30,31,30,31,31,30,31,30,31];

function calculator(){
//Birth Details
let birthDay = document.getElementById("date").value;
let birthMonth = document.getElementById("month").value;
let birthYear = document.getElementById("year").value;

//Current Time
let today=new Date();
let currentDate=today.getDate();
let currentMonth=today.getMonth()+1;
let currentYear=today.getFullYear();

leapYearChecker(currentYear);
    if(birthYear > currentYear ||( birthMonth > currentMonth && birthYear == currentYear) || (birthDay > currentDate && birthMonth == currentMonth && birthMonth && birthYear == currentYear)){
      alert("Not Yet Born !");
      return ;
    }
    
let resultYear,resultMonth,resultDay;
resultYear = currentYear - birthYear;
if(currentMonth >= birthMonth){
    birthMonth = currentMonth - birthMonth ;
}
else{
    resultYear--;
    resultMonth=12+currentMonth-birthMonth;
}
if(currentDate >= birthDay){
    resultDay=currentDate-birthDay;
}
else{
    resultMonth--;
    resultDay=month[currentMonth-1] + currentDate - birthDay ;
    {
        if(resultMonth < 0){
            resultMonth =11;
            resultYear--;
        }
    }
}
let ans=resultYear + " Years ,"+ resultMonth+"Months ,"+resultDay+"Days";
document.getElementById("show-age").innerHTML=ans;
}
function leapYearChecker(birthYear){
    if(birthYear % 4 == 0 || (birthYear % 100 == 0 && birthYear % 400 == 0)){
        month[1]=29;
    }
    else{
        month[1]=28;
    }
}
