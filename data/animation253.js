setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'odowalsky'},ab = {id: 'ab', name:'poniatowsky'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.298701298701298701%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'gregory'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.597402597402597403%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'maschinka'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.896103896103896104%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'demetrius'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.194805194805194805%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ae af */ var  ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'marina'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.493506493506493506%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.792207792207792208%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ae af */ var  aa = {id: 'aa', name:'odowalsky'},ab = {id: 'ab', name:'poniatowsky'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( aa,ab ); links.push( {source: ab , target: ae },{source: ab , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ae ag */ var  ab = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'mniczek'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ab , target: ag },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.38961038961038961%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ah */ var  ac = {id: 'ac', name:'gregory'},ah = {id: 'ah', name:'kardinal'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.688311688311688312%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'demetrius'},ag = {id: 'ag', name:'mniczek'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.987012987012987013%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'gregory'},ae = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac ae ah ai */ var  ac = nodes[0] ,ae = nodes[1] ,ah = {id: 'ah', name:'kardinal'},ai = {id: 'ai', name:'stimmen_vorspiel'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ae },{source: ae , target: ah },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.584415584415584416%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ae af ag ah */ var  ab = {id: 'ab', name:'poniatowsky'},ae = nodes[0] ,af = {id: 'af', name:'marina'},ag = {id: 'ag', name:'mniczek'},ah = nodes[1]  ; nodes.push( ab,af,ag ); links.push( {source: ag , target: ah },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: af , target: ah },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.883116883116883117%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag','ae','ah','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aj ak al */ var  aj = {id: 'aj', name:'basmanow'},ak = {id: 'ak', name:'mstislawski'},al = {id: 'al', name:'schuiskoi'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aj ak al am an */ var  aj = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'boris'},an = {id: 'an', name:'hiob'} ; nodes.push( am,an ); links.push( {source: am , target: an },{source: aj , target: am },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: an },{source: al , target: am },{source: al , target: an },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.480519480519480519%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj','ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* al am */ var  al = nodes[0] ,am = nodes[1]  ; /* nodes.push(); */ links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.779220779220779221%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'äbtissin'},ap = {id: 'ap', name:'marfa'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.077922077922077922%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* an ao ap aq */ var  an = {id: 'an', name:'hiob'},ao = nodes[0] ,ap = nodes[1] ,aq = {id: 'aq', name:'klosterschwester'} ; nodes.push( an,aq ); links.push( {source: an , target: aq },{source: an , target: ao },{source: an , target: ap },{source: ao , target: aq },{source: ao , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.376623376623376623%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* an ao ap aq ar */ var  an = nodes[0] ,ao = nodes[1] ,ap = nodes[2] ,aq = nodes[3] ,ar = {id: 'ar', name:'otrepiep'} ; nodes.push( ar ); links.push( {source: aq , target: ar },{source: an , target: aq },{source: an , target: ar },{source: an , target: ap },{source: an , target: ao },{source: ap , target: aq },{source: ap , target: ar },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.675324675324675325%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aq','ar','an','ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'poniatowsky'},ag = {id: 'ag', name:'mniczek'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.974025974025974026%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'demetrius'},ag = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'poniatowsky'},ag = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ae ag */ var  ab = nodes[0] ,ae = {id: 'ae', name:'demetrius'},ag = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: ab , target: ae },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.87012987012987013%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.168831168831168831%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ar */ var  ab = nodes[0] ,ar = {id: 'ar', name:'otrepiep'} ; nodes.push( ar ); links.push( {source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.467532467532467532%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ae ag ar */ var  ab = nodes[0] ,ae = {id: 'ae', name:'demetrius'},ag = {id: 'ag', name:'mniczek'},ar = nodes[1]  ; nodes.push( ae,ag ); links.push( {source: ae , target: ar },{source: ae , target: ag },{source: ab , target: ae },{source: ab , target: ar },{source: ab , target: ag },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.766233766233766234%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae ag ap ar as */ var  ae = nodes[0] ,ag = nodes[1] ,ap = {id: 'ap', name:'marfa'},ar = nodes[2] ,as = {id: 'as', name:'adjutant'} ; nodes.push( ap,as ); links.push( {source: ag , target: ar },{source: ag , target: ap },{source: ag , target: as },{source: ar , target: as },{source: ae , target: ag },{source: ae , target: ar },{source: ae , target: ap },{source: ae , target: as },{source: ap , target: ar },{source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.064935064935064935%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ar','ap','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae ag al */ var  ae = nodes[0] ,ag = nodes[1] ,al = {id: 'al', name:'schuiskoi'} ; nodes.push( al ); links.push( {source: ae , target: al },{source: ae , target: ag },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'al','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ae as at */ var  ae = nodes[0] ,as = {id: 'as', name:'adjutant'},at = {id: 'at', name:'bürgermeister'} ; nodes.push( as,at ); links.push( {source: as , target: at },{source: ae , target: as },{source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.662337662337662338%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ae ag al ap */ var  ae = nodes[0] ,ag = {id: 'ag', name:'mniczek'},al = {id: 'al', name:'schuiskoi'},ap = {id: 'ap', name:'marfa'} ; nodes.push( ag,al,ap ); links.push( {source: ag , target: al },{source: ag , target: ap },{source: ae , target: ag },{source: ae , target: al },{source: ae , target: ap },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.961038961038961039%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ag','ae','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* al ar */ var  al = nodes[0] ,ar = {id: 'ar', name:'otrepiep'} ; nodes.push( ar ); links.push( {source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.25974025974025974%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.558441558441558442%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'äbtissin'},ap = {id: 'ap', name:'marfa'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* au av aw */ var  au = {id: 'au', name:'rurik'},av = {id: 'av', name:'ossip'},aw = {id: 'aw', name:'petrowitsch'} ; nodes.push( au,av,aw ); links.push( {source: au , target: av },{source: au , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.155844155844155844%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* au av aw ax */ var  au = nodes[0] ,av = nodes[1] ,aw = nodes[2] ,ax = {id: 'ax', name:'barbara'} ; nodes.push( ax ); links.push( {source: au , target: ax },{source: au , target: av },{source: au , target: aw },{source: av , target: ax },{source: av , target: aw },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ax','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* au av */ var  au = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.753246753246753247%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ar au av ax */ var  ar = {id: 'ar', name:'otrepiep'},au = nodes[0] ,av = nodes[1] ,ax = {id: 'ax', name:'barbara'} ; nodes.push( ar,ax ); links.push( {source: ar , target: av },{source: ar , target: ax },{source: ar , target: au },{source: av , target: ax },{source: au , target: av },{source: au , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.051948051948051948%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ar','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* av ax */ var  av = nodes[0] ,ax = nodes[1]  ; /* nodes.push(); */ links.push( {source: av , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.350649350649350649%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ae av ax ay */ var  ae = {id: 'ae', name:'demetrius'},av = nodes[0] ,ax = nodes[1] ,ay = {id: 'ay', name:'soldat'} ; nodes.push( ae,ay ); links.push( {source: ax , target: ay },{source: ae , target: ax },{source: ae , target: ay },{source: ae , target: av },{source: av , target: ax },{source: av , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.649350649350649351%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* av ax */ var  av = nodes[0] ,ax = nodes[1]  ; /* nodes.push(); */ links.push( {source: av , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.948051948051948052%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ar av */ var  ar = {id: 'ar', name:'otrepiep'},av = nodes[0]  ; nodes.push( ar ); links.push( {source: ar , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.246753246753246753%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ao ap ar */ var  ao = {id: 'ao', name:'äbtissin'},ap = {id: 'ap', name:'marfa'},ar = nodes[0]  ; nodes.push( ao,ap ); links.push( {source: ap , target: ar },{source: ao , target: ar },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ao ap az */ var  ao = nodes[0] ,ap = nodes[1] ,az = {id: 'az', name:'küster'} ; nodes.push( az ); links.push( {source: ao , target: az },{source: ao , target: ap },{source: ap , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.844155844155844156%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ao ap */ var  ao = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ao ap */ var  ao = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.441558441558441558%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ar av ax */ var  ar = {id: 'ar', name:'otrepiep'},av = {id: 'av', name:'ossip'},ax = {id: 'ax', name:'barbara'} ; nodes.push( ar,av,ax ); links.push( {source: ar , target: av },{source: ar , target: ax },{source: av , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.74025974025974026%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* av ax */ var  av = nodes[0] ,ax = nodes[1]  ; /* nodes.push(); */ links.push( {source: av , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.038961038961038961%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'av','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aj ak al */ var  aj = {id: 'aj', name:'basmanow'},ak = {id: 'ak', name:'mstislawski'},al = {id: 'al', name:'schuiskoi'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.337662337662337662%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* al ar ax */ var  al = nodes[0] ,ar = {id: 'ar', name:'otrepiep'},ax = {id: 'ax', name:'barbara'} ; nodes.push( ar,ax ); links.push( {source: ar , target: ax },{source: al , target: ar },{source: al , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ar','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aj ak al */ var  aj = {id: 'aj', name:'basmanow'},ak = {id: 'ak', name:'mstislawski'},al = nodes[0]  ; nodes.push( aj,ak ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.935064935064935065%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ag al */ var  ag = {id: 'ag', name:'mniczek'},al = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.233766233766233766%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ag al ao ap */ var  ag = nodes[0] ,al = nodes[1] ,ao = {id: 'ao', name:'äbtissin'},ap = {id: 'ap', name:'marfa'} ; nodes.push( ao,ap ); links.push( {source: ag , target: al },{source: ag , target: ao },{source: ag , target: ap },{source: al , target: ao },{source: al , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.532467532467532468%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ag ao ap az bb */ var  ag = nodes[0] ,ao = nodes[1] ,ap = nodes[2] ,az = {id: 'az', name:'küster'},bb = {id: 'bb', name:'stimmen'} ; nodes.push( az,bb ); links.push( {source: ag , target: az },{source: ag , target: ap },{source: ag , target: ao },{source: ag , target: bb },{source: az , target: bb },{source: ap , target: az },{source: ap , target: bb },{source: ao , target: az },{source: ao , target: ap },{source: ao , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.831168831168831169%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ag','az','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ae ao ap au av */ var  ae = {id: 'ae', name:'demetrius'},ao = nodes[0] ,ap = nodes[1] ,au = {id: 'au', name:'rurik'},av = {id: 'av', name:'ossip'} ; nodes.push( ae,au,av ); links.push( {source: au , target: av },{source: ae , target: av },{source: ae , target: au },{source: ae , target: ao },{source: ae , target: ap },{source: ao , target: av },{source: ao , target: au },{source: ao , target: ap },{source: ap , target: av },{source: ap , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.12987012987012987%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'av','au','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ae ag aj */ var  ae = nodes[0] ,ag = {id: 'ag', name:'mniczek'},aj = {id: 'aj', name:'basmanow'} ; nodes.push( ag,aj ); links.push( {source: ag , target: aj },{source: ae , target: ag },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.025974025974025974%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ae af ag */ var  ae = nodes[0] ,af = {id: 'af', name:'marina'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.324675324675324675%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.623376623376623377%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'demetrius'},ag = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.922077922077922078%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'gregory'},ae = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.220779220779220779%' ;
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* ac ae ag */ var  ac = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'mniczek'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ac , target: ag },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.519480519480519481%' ;
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ae ag ax */ var  ae = nodes[0] ,ag = nodes[1] ,ax = {id: 'ax', name:'barbara'} ; nodes.push( ax ); links.push( {source: ae , target: ax },{source: ae , target: ag },{source: ag , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.116883116883116883%' ;
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* ae ax */ var  ae = nodes[0] ,ax = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.415584415584415584%' ;
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* ae ag ax */ var  ae = nodes[0] ,ag = {id: 'ag', name:'mniczek'},ax = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: ax },{source: ae , target: ag },{source: ae , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* ae ag ap */ var  ae = nodes[0] ,ag = nodes[1] ,ap = {id: 'ap', name:'marfa'} ; nodes.push( ap ); links.push( {source: ae , target: ap },{source: ae , target: ag },{source: ag , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.012987012987012987%' ;
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* ae af ag ap */ var  ae = nodes[0] ,af = {id: 'af', name:'marina'},ag = nodes[1] ,ap = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ap },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ap },{source: ae , target: ag },{source: ag , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.311688311688311688%' ;
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'af','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.61038961038961039%' ;
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70');nodes.sort(compare); /* au av */ var  au = {id: 'au', name:'rurik'},av = {id: 'av', name:'ossip'} ; nodes.push( au,av ); links.push( {source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71');nodes.sort(compare); /* au av aw */ var  au = nodes[0] ,av = nodes[1] ,aw = {id: 'aw', name:'petrowitsch'} ; nodes.push( aw ); links.push( {source: av , target: aw },{source: au , target: aw },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.207792207792207792%' ;
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72');nodes.sort(compare); /* ar au aw */ var  ar = {id: 'ar', name:'otrepiep'},au = nodes[0] ,aw = nodes[1]  ; nodes.push( ar ); links.push( {source: ar , target: au },{source: ar , target: aw },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.506493506493506494%' ;
}, 355000);

setTimeout(function() { console.log('remv72'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 358750);

setTimeout(function() { console.log('load73');nodes.sort(compare); /* ar au av */ var  ar = nodes[0] ,au = nodes[1] ,av = {id: 'av', name:'ossip'} ; nodes.push( av ); links.push( {source: ar , target: av },{source: ar , target: au },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.805194805194805195%' ;
}, 360000);

setTimeout(function() { console.log('remv73'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 363750);

setTimeout(function() { console.log('load74');nodes.sort(compare); /* au av */ var  au = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.103896103896103896%' ;
}, 365000);

setTimeout(function() { console.log('remv74'); var rm = [ 'au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 368750);

setTimeout(function() { console.log('load75');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'basmanow'},ak = {id: 'ak', name:'mstislawski'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.402597402597402597%' ;
}, 370000);

setTimeout(function() { console.log('remv75'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 373750);

setTimeout(function() { console.log('load76');nodes.sort(compare); /* ak ar au av ba */ var  ak = nodes[0] ,ar = {id: 'ar', name:'otrepiep'},au = {id: 'au', name:'rurik'},av = {id: 'av', name:'ossip'},ba = {id: 'ba', name:'geschrei'} ; nodes.push( ar,au,av,ba ); links.push( {source: ar , target: au },{source: ar , target: av },{source: ar , target: ba },{source: ak , target: ar },{source: ak , target: au },{source: ak , target: av },{source: ak , target: ba },{source: au , target: av },{source: au , target: ba },{source: av , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.701298701298701299%' ;
}, 375000);

setTimeout(function() { console.log('remv76'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 378750);

setTimeout(function() { console.log('load77');nodes.sort(compare); /* al ar au av ba */ var  al = {id: 'al', name:'schuiskoi'},ar = nodes[0] ,au = nodes[1] ,av = nodes[2] ,ba = nodes[3]  ; nodes.push( al ); links.push( {source: al , target: au },{source: al , target: ar },{source: al , target: av },{source: al , target: ba },{source: au , target: av },{source: au , target: ba },{source: ar , target: au },{source: ar , target: av },{source: ar , target: ba },{source: av , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 380000);
