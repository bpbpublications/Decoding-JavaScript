var hours = new Date().getHours();
if(hours < 16) {
    alert('Good Morning');
} else {
    alert('Good Evening');
}


var hours = new Date().getHours();
if(hours < 16) {
    alert('Good Morning');
} else if(hours > 16 && hours < 23) {
    alert('Good Evening');
} else {
    alert('Good Night');
}