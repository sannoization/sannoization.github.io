// JavaScript Document
var d = new Date();

var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");

var month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

document.write(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()]+ " " + d.getFullYear() + " г.");