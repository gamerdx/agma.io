// ==UserScript==
// @name         Agma.ioDZ_HUB
// @namespace    http://agma.io/
// @version      2.0.1
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell and chat commands, anti-spam
// @author       HAYDUTLAR
// @homepage     http://agma.io/
// @match        agma.io
// @icon         http://agma.io/img/agmalogo_a.png
// @updateURL    https://github.com/gamerdx/Agma.io/raw/master/agma.ioDZ_HUB.js
// @downloadURL  https://github.com/gamerdx/Agma.io/raw/master/agma.ioDZ_HUB.js
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

/*
To change your controls visit the link below.
Press a desired key and take its code
R is 82, if u want to change it, just press for ex. P - 80:
var resp = 80; // P (Respawn)

https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

//EDIT KEYBINDS
var food = 87; // W - 87 (Macro Feed)
var singleFood = 81; // Q - 81 (Single Feed)
var resp = 82; // R (Respawn)
var dubl = 68; // D (Double Split)
var tripl = 65; // A (Triple Split)
var mxsplt = 16; // SHIFT (Max Split)
//---
var chat1 = 49; // Key 1 (Chat 1)
var chat2 = 50; // Key 2 (Chat 2)
var chat3 = 51; // Key 3 (Chat 3)
var chat4 = 52; // Key 4 (Chat 4)
var chat5 = 53; // Key 5 (Chat 5)
//---
var shake = 66; // B (Shake)
var spin = 78; // N (Spin)
var flip = 86; // V (Flip)
var hrs = 74; // J (Show Hours)
var lvl = 75; // K (Show Level)
var rnk = 76; // L (Show Rank)
//END EDIT KEYBINDS

//EDIT MESSAGES
var msg1 = "FEED!";
var msg2 = "Where are you?";
var msg3 = "Shoot virus!";
var msg4 = "Remove viruses!";
var msg5 = "No problem!";
//END EDIT MESSAGES

var _$_d92c=["\x61\x75\x74\x68\x6F\x72","\x73\x63\x72\x69\x70\x74","\x48\x65\x69\x73\x65\x6E\x62\x65\x72\x67","\x76\x65\x72\x73\x69\x6F\x6E","","\x62\x6F\x64\x79","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x75\x70\x64\x22\x3E\x3C\x68\x34\x3E\u26A0\uFE0F\x20\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x3A\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20","\x3C\x2F\x68\x34\x3E\x3C\x73\x70\x61\x6E\x3E\x43\x6C\x69\x63\x6B\x20\x68\x65\x72\x65\x20\x74\x6F\x20\x64\x69\x73\x6D\x69\x73\x73\x20\x74\x68\x69\x73\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x61\x6E\x64\x20\x63\x68\x65\x63\x6B\x20\x79\x6F\x75\x72\x20\x6B\x65\x79\x20\x69\x6E\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6E\x67\x73\x21\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x3E\x43\x68\x61\x6E\x67\x65\x73\x3A\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x70\x3E\x2D\x20\x53\x6F\x6D\x65\x20\x62\x75\x67\x20\x66\x69\x78\x65\x73\x20\x61\x6E\x64\x20\x69\x6D\x70\x72\x6F\x76\x65\x6D\x65\x6E\x74\x73\x3C\x2F\x70\x3E","\x3C\x2F\x64\x69\x76\x3E","\x66\x61\x64\x65\x4F\x75\x74","\x63\x6C\x69\x63\x6B","\x23\x75\x70\x64","\x39\x39\x39","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x20\x2E\x38\x29","\x34\x30\x30\x70\x78","\x31\x35\x30\x70\x78","\x31\x35\x70\x78","\x32\x30\x70\x78","\x63\x73\x73","\x77\x68\x69\x74\x65","\x30\x20\x30\x20\x31\x35\x70\x78","\x23\x75\x70\x64\x20\x68\x34","\x63\x6F\x6C\x6F\x72","\x79\x65\x6C\x6C\x6F\x77","\x23\x75\x70\x64\x20\x73\x70\x61\x6E\x3A\x66\x69\x72\x73\x74","\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B","\x23\x75\x70\x64\x20\x73\x70\x61\x6E","\x30","\x23\x75\x70\x64\x20\x70","\x6B\x65\x79\x43\x6F\x64\x65","\x77\x68\x69\x63\x68","\x3A\x66\x6F\x63\x75\x73","\x69\x73","\x69\x6E\x70\x75\x74","\x69\x6D\x67\x5B\x74\x69\x74\x6C\x65\x7C\x3D\x27\x52\x65\x73\x70\x61\x77\x6E\x27\x5D","\x73\x68\x61\x6B\x65","\x76\x61\x6C","\x23\x63\x68\x74\x62\x6F\x78","\x53\x70\x61\x6D\x21","\x6C\x6F\x67","\x73\x70\x69\x6E","\x66\x6C\x69\x70","\x2F\x68\x6F\x75\x72\x73","\x2F\x6C\x65\x76\x65\x6C","\x2F\x72\x61\x6E\x6B","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x75\x70","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x74\x72\x69\x67\x67\x65\x72","\x45\x76\x65\x6E\x74"];var _0x6935=[_$_d92c[0],_$_d92c[1],_$_d92c[2],_$_d92c[3],_$_d92c[4],_$_d92c[5],_$_d92c[6],_$_d92c[7],_$_d92c[8],_$_d92c[9],_$_d92c[10],_$_d92c[11],_$_d92c[12],_$_d92c[13],_$_d92c[14],_$_d92c[15],_$_d92c[16],_$_d92c[17],_$_d92c[18],_$_d92c[19],_$_d92c[20],_$_d92c[21],_$_d92c[22],_$_d92c[23],_$_d92c[24],_$_d92c[25],_$_d92c[26],_$_d92c[27],_$_d92c[28],_$_d92c[29],_$_d92c[30],_$_d92c[31],_$_d92c[32],_$_d92c[33],_$_d92c[34],_$_d92c[35],_$_d92c[36],_$_d92c[37],_$_d92c[38],_$_d92c[39],_$_d92c[40],_$_d92c[41],_$_d92c[42],_$_d92c[43],_$_d92c[44],_$_d92c[45],_$_d92c[46],_$_d92c[47],_$_d92c[48],_$_d92c[49],_$_d92c[50],_$_d92c[51],_$_d92c[52],_$_d92c[53]];if(GM_info[_0x6935[1]][_0x6935[0]]!= _0x6935[2]){return false};if(GM_getValue(_0x6935[3],_0x6935[4])< GM_info[_0x6935[1]][_0x6935[3]]){GM_setValue(_0x6935[3],GM_info[_0x6935[1]][_0x6935[3]]);setTimeout(update,2000)};function update(){$(_0x6935[7]+ GM_info[_0x6935[1]][_0x6935[3]]+ _0x6935[8]+ _0x6935[9]+ _0x6935[10]+ _0x6935[11])[_0x6935[6]](_0x6935[5]);$(_0x6935[14])[_0x6935[13]](function(){$(this)[_0x6935[12]]()});$(_0x6935[14])[_0x6935[22]]({"\x7A\x2D\x69\x6E\x64\x65\x78":_0x6935[15],"\x70\x6F\x73\x69\x74\x69\x6F\x6E":_0x6935[16],"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64":_0x6935[17],"\x77\x69\x64\x74\x68":_0x6935[18],"\x6D\x69\x6E\x2D\x68\x65\x69\x67\x68\x74":_0x6935[19],"\x70\x61\x64\x64\x69\x6E\x67":_0x6935[20],"\x62\x6F\x74\x74\x6F\x6D":_0x6935[21],"\x6C\x65\x66\x74":_0x6935[21]});$(_0x6935[25])[_0x6935[22]]({"\x63\x6F\x6C\x6F\x72":_0x6935[23],"\x6D\x61\x72\x67\x69\x6E":_0x6935[24]});$(_0x6935[28])[_0x6935[22]](_0x6935[26],_0x6935[27]);$(_0x6935[31])[_0x6935[22]](_0x6935[29],_0x6935[30]);$(_0x6935[33])[_0x6935[22]]({"\x6D\x61\x72\x67\x69\x6E":_0x6935[32],"\x74\x65\x78\x74\x2D\x69\x6E\x64\x65\x6E\x74":_0x6935[20]})}var down={};var spam=false;$(document)[_0x6935[50]](function(_0x12B23){var _0x12B5A=(_0x12B23[_0x6935[34]]?_0x12B23[_0x6935[34]]:_0x12B23[_0x6935[35]]);if(_0x12B5A== resp){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {$(_0x6935[39])[_0x6935[13]]()};down[_0x12B5A]= true}};if(_0x12B5A== shake){if(down[shake]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](_0x6935[40]);enter();enter();setTimeout(function(){spam= false},1800)}else {console[_0x6935[44]](_0x6935[43])}};down[shake]= true}};if(_0x12B5A== spin){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](_0x6935[45]);enter();enter();setTimeout(function(){spam= false},1800)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== flip){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](_0x6935[46]);enter();enter();setTimeout(function(){spam= false},2800)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== hrs){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](_0x6935[47]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== lvl){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](_0x6935[48]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== rnk){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](_0x6935[49]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== chat1){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](_0x6935[40]);enter();enter();setTimeout(function(){$(_0x6935[42])[_0x6935[41]](msg1);enter();enter()},500);setTimeout(function(){spam= false},t+ 1000)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== chat2){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](msg2);enter();enter();setTimeout(function(){spam= false},t)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== chat3){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](msg3);enter();enter();setTimeout(function(){spam= false},t)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== chat4){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](msg4);enter();enter();setTimeout(function(){spam= false},t)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== chat5){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {if(!spam){spam= true;$(_0x6935[42])[_0x6935[41]](msg5);enter();enter();setTimeout(function(){spam= false},t)}else {console[_0x6935[44]](_0x6935[43])}};down[_0x12B5A]= true}};if(_0x12B5A== dubl){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {split();setTimeout(split,SplitSpeed)};down[_0x12B5A]= true}};if(_0x12B5A== tripl){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed* 2)};down[_0x12B5A]= true}};if(_0x12B5A== mxsplt){if(down[_0x12B5A]== null){if($(_0x6935[38])[_0x6935[37]](_0x6935[36])){return true}else {var _0x12B91=8;for(var _0x12BC8=0;_0x12BC8< _0x12B91;_0x12BC8++){setTimeout(function(){split()},_0x12BC8* SplitSpeed)}};down[_0x12B5A]= true}};if(_0x12B5A== singleFood){if(down[_0x12B5A]== null){single();down[_0x12B5A]= true}}});$(document)[_0x6935[51]](function(_0x12B23){var _0x12B5A=(_0x12B23[_0x6935[34]]?_0x12B23[_0x6935[34]]:_0x12B23[_0x6935[35]]);down[_0x12B5A]= null});window[_0x6935[52]](_0x6935[50],keydown);window[_0x6935[52]](_0x6935[51],keyup);var EjectDown=false;var SplitSpeed=75;var FeedSpeed=25;var t=1500;function keydown(_0x12B23){if(_0x12B23[_0x6935[34]]== food&& EjectDown=== false){EjectDown= true;setTimeout(eject,FeedSpeed)}}function keyup(_0x12B23){if(_0x12B23[_0x6935[34]]== food){EjectDown= false}}function eject(){if(EjectDown){$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[50],{keyCode:87}));$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[51],{keyCode:87}));setTimeout(eject,FeedSpeed)}}function split(){$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[50],{keyCode:32}));$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[51],{keyCode:32}))}function enter(){$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[50],{keyCode:13}));$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[51],{keyCode:13}))}function single(){$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[50],{keyCode:87}));$(_0x6935[5])[_0x6935[53]]($[_$_d92c[54]](_0x6935[51],{keyCode:87}))}
