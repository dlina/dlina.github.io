setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'till'},ab = {id: 'ab', name:'der_baron'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.222222222222222222%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'schönburg'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.444444444444444444%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'horst'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.666666666666666667%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad an */ var  ab = {id: 'ab', name:'der_baron'},ac = nodes[0] ,ad = nodes[1] ,an = {id: 'an', name:'bedienter_schönburg'} ; nodes.push( ab,an ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ab , target: an },{source: ad , target: an },{source: ac , target: ad },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.888888888888888889%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','ad','ac','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ae af am */ var  ae = {id: 'ae', name:'frau'},af = {id: 'af', name:'sophie'},am = {id: 'am', name:'bediente'} ; nodes.push( ae,af,am ); links.push( {source: ae , target: af },{source: ae , target: am },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = {id: 'ag', name:'feldkirch'} ; nodes.push( ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.333333333333333333%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae af ag */ var  ae = nodes[0] ,af = {id: 'af', name:'sophie'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.555555555555555556%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ae ag */ var  aa = {id: 'aa', name:'till'},ae = nodes[0] ,ag = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ae },{source: aa , target: ag },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.777777777777777778%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae af am */ var  ae = nodes[0] ,af = {id: 'af', name:'sophie'},am = {id: 'am', name:'bediente'} ; nodes.push( af,am ); links.push( {source: af , target: am },{source: ae , target: af },{source: ae , target: am },{source: ae , target: af },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'horst'},ae = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ad ae am */ var  ad = nodes[0] ,ae = nodes[1] ,am = {id: 'am', name:'bediente'} ; nodes.push( am ); links.push( {source: ad , target: ae },{source: ad , target: am },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.444444444444444444%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ad ae ag */ var  aa = {id: 'aa', name:'till'},ad = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'feldkirch'} ; nodes.push( aa,ag ); links.push( {source: ae , target: ag },{source: ad , target: ag },{source: ad , target: ae },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.666666666666666667%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ae ag */ var  aa = nodes[0] ,ae = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: ag },{source: aa , target: ae },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.888888888888888889%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ae al */ var  aa = nodes[0] ,ae = nodes[1] ,al = {id: 'al', name:'bedient'} ; nodes.push( al ); links.push( {source: aa , target: ae },{source: aa , target: al },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.111111111111111111%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ae ah */ var  aa = nodes[0] ,ae = nodes[1] ,ah = {id: 'ah', name:'witte'} ; nodes.push( ah ); links.push( {source: ae , target: ah },{source: aa , target: ah },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.555555555555555556%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'ritter'},aj = {id: 'aj', name:'löwenklau'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.777777777777777778%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* af ai */ var  af = {id: 'af', name:'sophie'},ai = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af ai aj */ var  af = nodes[0] ,ai = nodes[1] ,aj = {id: 'aj', name:'löwenklau'} ; nodes.push( aj ); links.push( {source: ai , target: aj },{source: af , target: ai },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.222222222222222222%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'schönburg'},ad = {id: 'ad', name:'horst'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.666666666666666667%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ac ad */ var  ab = {id: 'ab', name:'der_baron'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.888888888888888889%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ah ak */ var  ah = {id: 'ah', name:'witte'},ak = {id: 'ak', name:'diener'} ; nodes.push( ah,ak ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.111111111111111111%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ah aj */ var  ah = nodes[0] ,aj = {id: 'aj', name:'löwenklau'} ; nodes.push( aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.333333333333333333%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ah aj */ var  ac = {id: 'ac', name:'schönburg'},ah = nodes[0] ,aj = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: ac , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac ah */ var  ac = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.777777777777777778%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae af al */ var  ae = {id: 'ae', name:'frau'},af = {id: 'af', name:'sophie'},al = {id: 'al', name:'bedient'} ; nodes.push( ae,af,al ); links.push( {source: ae , target: af },{source: ae , target: al },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae','af','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'der_baron'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.222222222222222222%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'frau'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.444444444444444444%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ae am */ var  ae = nodes[0] ,am = {id: 'am', name:'bediente'} ; nodes.push( am ); links.push( {source: ae , target: am },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae ah */ var  ae = nodes[0] ,ah = {id: 'ah', name:'witte'} ; nodes.push( ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.888888888888888889%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.111111111111111111%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'till'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.333333333333333333%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.555555555555555556%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'luchs'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ac ad ao */ var  ac = {id: 'ac', name:'schönburg'},ad = {id: 'ad', name:'horst'},ao = nodes[0]  ; nodes.push( ac,ad ); links.push( {source: ac , target: ao },{source: ac , target: ad },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ac','ao','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'frau'},af = {id: 'af', name:'sophie'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.222222222222222222%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'horst'},ae = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.444444444444444444%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ae af ai aj */ var  ae = nodes[0] ,af = {id: 'af', name:'sophie'},ai = {id: 'ai', name:'ritter'},aj = {id: 'aj', name:'löwenklau'} ; nodes.push( af,ai,aj ); links.push( {source: ae , target: af },{source: ae , target: aj },{source: ae , target: ai },{source: af , target: aj },{source: af , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.666666666666666667%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ae af */ var  aa = {id: 'aa', name:'till'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.111111111111111111%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ab ae af */ var  ab = {id: 'ab', name:'der_baron'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.333333333333333333%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.555555555555555556%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'till'},ab = nodes[0] ,ac = {id: 'ac', name:'schönburg'},ad = {id: 'ad', name:'horst'},ae = nodes[1] ,af = {id: 'af', name:'sophie'} ; nodes.push( aa,ac,ad,af ); links.push( {source: ae , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.777777777777777778%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aa ac ad ae af ai aj */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ai = {id: 'ai', name:'ritter'},aj = {id: 'aj', name:'löwenklau'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: af },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: af , target: aj },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 220000);
