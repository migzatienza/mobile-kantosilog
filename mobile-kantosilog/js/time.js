// var $document = $(document);
// (function () {
//   var clock = function () {
//     clearTimeout(timer);

//     date = new Date();
//     hours = date.getHours();
//     minutes = date.getMinutes();
//     seconds = date.getSeconds();
//     dd = (hours >= 12) ? 'pm' : 'am';

//     hours = (hours > 12) ? (hours - 12) : hours

//     var timer = setTimeout(clock, 1000);

//     $('.hours').html(Math.floor(hours));
//     $('.minutes').html(Math.floor(minutes));
//     $('.seconds').html(Math.floor(seconds));
//     $('.am-pm').html(dd);
//   };
//   clock();
// })();

$(document).ready(function () {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDay();
    
    //Month, Year, Date
    var month = today.getMonth();
    var year = today.getFullYear();
    var date = today.getDate();

    var dd = (h >= 12) ? 'PM' : 'AM';

    h = (h > 12) ? (h - 12) : h;

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    day = checkDay(day);
    month = checkMonth(month);

    $('#timepiece').html(h + ":" + m + ":" + s + ' ' + dd );
    var t = setTimeout(startTime, 500);
    $('#day').html(day);
    $('#calendar').html(month + ' ' + date +','+year );

    
  }
  function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
  }
  function checkDay(day) {
    if (day == 1) {
      return day = 'Monday';
    }
    else if(day == 2){
      return day = 'Tuesday';
    }
    else if(day == 3){
      return day = 'Wednesday';
    }
    else if(day == 4){
      return day = 'Thursday';
    }
    else if(day == 5){
      return day = 'Friday';
    }
    else if(day == 6){
      return day = 'Saturday';
    }
    else if(day == 0){
      return day = 'Sunday';
    }
  }
  function checkMonth(month){
    if (month == 0){
      return month = 'January';
    }
    else if(month == 1){
      return month = 'February';
    }
    else if(month == 2){
      return month = 'March';
    }
    else if(month == 3){
      return month = 'April';
    }
    else if(month == 4){
      return month = 'May';
    }
    else if(month == 5){
      return month = 'June';
    }
    else if(month == 6){
      return month = 'July';
    }
    else if(month == 7){
      return month = 'August';
    }
    else if(month == 8){
      return month = 'September';
    }
    else if(month == 9){
      return month = 'October';
    }
    else if(month == 10){
      return month = 'November';
    }
    else if(month == 11){
      return month = 'December';
    }
  }

  startTime();
});