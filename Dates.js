const talkingCalendar = function(date) {
    arr = date.split("/");
    
    switch (arr[1]) {
        case '01': str = 'January'; break;
        case '02': str = 'February'; break;
        case '03': str = 'March'; break;
        case '04': str = 'April'; break;
        case '05': str = 'May'; break;
        case '06': str = 'June'; break;
        case '07': str = 'July'; break;
        case '08': str = 'August'; break;
        case '09': str = 'September'; break;
        case '10': str = 'October'; break;
        case '11': str = 'November'; break;
        case '12': str = 'December'; break;
    }

    day = arr[2].split('');

    if(day[1] === '1' && day[0] != '1') {
        if(day[0] === '0') {
            str += ` ${day[1]}st`;
        } else {
            str += ` ${day[0]}${day[1]}st`;
        }
    } else if (day[1] === '2' && day[0] != '1') {
        if(day[0] === '0') {
            str += ` ${day[1]}nd`;
        } else {
            str += ` ${day[0]}${day[1]}nd`;
        }
    } else if (day[1] === '3' && day[0] != '1') {
        if(day[0] === '0') {
            str += ` ${day[1]}rd`;
        } else {
            str += ` ${day[0]}${day[1]}rd`;
        }
    } else {
        if(day[0] === '0') {
            str += ` ${day[1]}th`;
        } else {
            str += ` ${day[0]}${day[1]}th`;
        }
    }
    return `${str}, ${arr[0]}`;

  };
   
console.log(talkingCalendar("2017/12/12"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));