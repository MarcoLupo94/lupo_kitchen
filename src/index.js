console.log("HelloWOrld");
console.log("mah");
import {firstPage,services,gallery} from './modules/render';

$(document).ready(function(){
  firstPage();

$('#1').on('click', firstPage);
$('#2').on('click', services);
$('#3').on('click', gallery);

});