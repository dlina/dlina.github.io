setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'baroninn'},ab = {id: 'ab', name:'babette'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'blümlein'} ; nodes.push( ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bedienter'},ae = {id: 'ae', name:'wolf'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ae */ var  aa = nodes[0] ,ab = {id: 'ab', name:'babette'},ac = nodes[1] ,ae = nodes[2]  ; nodes.push( ab ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa af ag */ var  aa = nodes[0] ,af = {id: 'af', name:'nina'},ag = {id: 'ag', name:'emy'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa af ag ah */ var  aa = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'marie'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: ag , target: ah },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'babette'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'bedienter'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ae ai aj */ var  aa = nodes[0] ,ae = {id: 'ae', name:'wolf'},ai = {id: 'ai', name:'waldberg'},aj = {id: 'aj', name:'grünau'} ; nodes.push( ae,ai,aj ); links.push( {source: ae , target: ai },{source: ae , target: aj },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ae af ag ai aj */ var  aa = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'nina'},ag = {id: 'ag', name:'emy'},ai = nodes[2] ,aj = nodes[3]  ; nodes.push( af,ag ); links.push( {source: ae , target: ai },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ai , target: aj },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ag },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae','aj','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ac ai */ var  aa = nodes[0] ,ac = {id: 'ac', name:'blümlein'},ai = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ai },{source: aa , target: ac },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* af ag ai aj */ var  af = {id: 'af', name:'nina'},ag = {id: 'ag', name:'emy'},ai = nodes[0] ,aj = {id: 'aj', name:'grünau'} ; nodes.push( af,ag,aj ); links.push( {source: ai , target: aj },{source: ag , target: aj },{source: ag , target: ai },{source: af , target: aj },{source: af , target: ai },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ab ac af ag ai aj */ var  aa = {id: 'aa', name:'baroninn'},ab = {id: 'ab', name:'babette'},ac = {id: 'ac', name:'blümlein'},af = nodes[0] ,ag = nodes[1] ,ai = nodes[2] ,aj = nodes[3]  ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ai },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: ab },{source: ai , target: aj },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aj },{source: af , target: ai },{source: af , target: ag },{source: af , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab ac af ag ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ai = nodes[5] ,aj = nodes[6]  ; /* nodes.push(); */ links.push( {source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ac },{source: ai , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac af ag ai aj ak al am an ao ap aq as */ var  aa = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ai = nodes[4] ,aj = nodes[5] ,ak = {id: 'ak', name:'frau_von_lichtberg'},al = {id: 'al', name:'fräulein_grinzberg'},am = {id: 'am', name:'fräulein_impfen'},an = {id: 'an', name:'frau_von_dorn'},ao = {id: 'ao', name:'räthinn_sommer'},ap = {id: 'ap', name:'herr_von_hacken'},aq = {id: 'aq', name:'herr_von_dorn'},as = {id: 'as', name:'traufbach'} ; nodes.push( ak,al,am,an,ao,ap,aq,as ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: aq },{source: ak , target: an },{source: ak , target: ap },{source: ak , target: as },{source: ak , target: ao },{source: al , target: am },{source: al , target: aq },{source: al , target: an },{source: al , target: ap },{source: al , target: as },{source: al , target: ao },{source: am , target: aq },{source: am , target: an },{source: am , target: ap },{source: am , target: as },{source: am , target: ao },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: aq },{source: aa , target: an },{source: aa , target: ap },{source: aa , target: as },{source: aa , target: ao },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: af , target: aq },{source: af , target: an },{source: af , target: ap },{source: af , target: as },{source: af , target: ao },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aq },{source: ag , target: an },{source: ag , target: ap },{source: ag , target: as },{source: ag , target: ao },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: aq },{source: ai , target: an },{source: ai , target: ap },{source: ai , target: as },{source: ai , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: ap },{source: aj , target: as },{source: aj , target: ao },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: aq },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: as },{source: ac , target: ao },{source: aq , target: as },{source: an , target: aq },{source: an , target: ap },{source: an , target: as },{source: an , target: ao },{source: ap , target: aq },{source: ap , target: as },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ac af ag ai aj ak al am an ao ap aq ar as */ var  aa = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ai = nodes[4] ,aj = nodes[5] ,ak = nodes[6] ,al = nodes[7] ,am = nodes[8] ,an = nodes[9] ,ao = nodes[10] ,ap = nodes[11] ,aq = nodes[12] ,ar = {id: 'ar', name:'baroninn_dürrer'},as = nodes[13]  ; nodes.push( ar ); links.push( {source: aa , target: ar },{source: aa , target: an },{source: aa , target: am },{source: aa , target: al },{source: aa , target: as },{source: aa , target: aq },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ao },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: ap },{source: aa , target: as },{source: ar , target: as },{source: ar , target: as },{source: an , target: ar },{source: an , target: as },{source: an , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: as },{source: am , target: ar },{source: am , target: an },{source: am , target: as },{source: am , target: aq },{source: am , target: ao },{source: am , target: ap },{source: am , target: as },{source: al , target: ar },{source: al , target: an },{source: al , target: am },{source: al , target: as },{source: al , target: aq },{source: al , target: ao },{source: al , target: ap },{source: al , target: as },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: as },{source: ac , target: ar },{source: ac , target: an },{source: ac , target: am },{source: ac , target: al },{source: ac , target: as },{source: ac , target: aq },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ao },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: ap },{source: ac , target: as },{source: aj , target: ar },{source: aj , target: an },{source: aj , target: am },{source: aj , target: al },{source: aj , target: as },{source: aj , target: aq },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: ap },{source: aj , target: as },{source: ai , target: ar },{source: ai , target: an },{source: ai , target: am },{source: ai , target: al },{source: ai , target: as },{source: ai , target: aq },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ak },{source: ai , target: ap },{source: ai , target: as },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: as },{source: af , target: ar },{source: af , target: an },{source: af , target: am },{source: af , target: al },{source: af , target: as },{source: af , target: aq },{source: af , target: aj },{source: af , target: ai },{source: af , target: ao },{source: af , target: ag },{source: af , target: ak },{source: af , target: ap },{source: af , target: as },{source: ag , target: ar },{source: ag , target: an },{source: ag , target: am },{source: ag , target: al },{source: ag , target: as },{source: ag , target: aq },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ao },{source: ag , target: ak },{source: ag , target: ap },{source: ag , target: as },{source: ak , target: ar },{source: ak , target: an },{source: ak , target: am },{source: ak , target: al },{source: ak , target: as },{source: ak , target: aq },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: as },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: aq },{source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac af ag ai aj ak al am an ao ap aq ar as */ var  aa = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ai = nodes[4] ,aj = nodes[5] ,ak = nodes[6] ,al = nodes[7] ,am = nodes[8] ,an = nodes[9] ,ao = nodes[10] ,ap = nodes[11] ,aq = nodes[12] ,ar = nodes[13] ,as = nodes[14]  ; /* nodes.push(); */ links.push( {source: ai , target: ar },{source: ai , target: an },{source: ai , target: ap },{source: ai , target: am },{source: ai , target: al },{source: ai , target: as },{source: ai , target: aq },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ak },{source: ar , target: as },{source: aa , target: ai },{source: aa , target: ar },{source: aa , target: an },{source: aa , target: ap },{source: aa , target: am },{source: aa , target: al },{source: aa , target: as },{source: aa , target: aq },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ak },{source: an , target: ar },{source: an , target: ap },{source: an , target: as },{source: an , target: aq },{source: an , target: ao },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: aq },{source: am , target: ar },{source: am , target: an },{source: am , target: ap },{source: am , target: as },{source: am , target: aq },{source: am , target: ao },{source: al , target: ar },{source: al , target: an },{source: al , target: ap },{source: al , target: am },{source: al , target: as },{source: al , target: aq },{source: al , target: ao },{source: aq , target: ar },{source: aq , target: as },{source: ac , target: ai },{source: ac , target: ar },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: am },{source: ac , target: al },{source: ac , target: as },{source: ac , target: aq },{source: ac , target: aj },{source: ac , target: ao },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ak },{source: aj , target: ar },{source: aj , target: an },{source: aj , target: ap },{source: aj , target: am },{source: aj , target: al },{source: aj , target: as },{source: aj , target: aq },{source: aj , target: ao },{source: aj , target: ak },{source: ao , target: ar },{source: ao , target: ap },{source: ao , target: as },{source: ao , target: aq },{source: af , target: ai },{source: af , target: ar },{source: af , target: an },{source: af , target: ap },{source: af , target: am },{source: af , target: al },{source: af , target: as },{source: af , target: aq },{source: af , target: aj },{source: af , target: ao },{source: af , target: ag },{source: af , target: ak },{source: ag , target: ai },{source: ag , target: ar },{source: ag , target: an },{source: ag , target: ap },{source: ag , target: am },{source: ag , target: al },{source: ag , target: as },{source: ag , target: aq },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: ak },{source: ak , target: ar },{source: ak , target: an },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: al },{source: ak , target: as },{source: ak , target: aq },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ac af ag ah ai aj ak al am an ap aq ar as */ var  aa = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ah = {id: 'ah', name:'marie'},ai = nodes[4] ,aj = nodes[5] ,ak = nodes[6] ,al = nodes[7] ,am = nodes[8] ,an = nodes[9] ,ap = nodes[10] ,aq = nodes[11] ,ar = nodes[12] ,as = nodes[13]  ; nodes.push( ah ); links.push( {source: ah , target: ai },{source: ah , target: ar },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: as },{source: ah , target: ap },{source: ah , target: aj },{source: ah , target: aq },{source: ah , target: an },{source: ah , target: al },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ar },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: ak },{source: aa , target: as },{source: aa , target: ap },{source: aa , target: aj },{source: aa , target: aq },{source: aa , target: an },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ag },{source: ai , target: ar },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: as },{source: ai , target: ap },{source: ai , target: aj },{source: ai , target: aq },{source: ai , target: an },{source: ai , target: al },{source: ar , target: as },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ar },{source: ac , target: am },{source: ac , target: ak },{source: ac , target: as },{source: ac , target: ap },{source: ac , target: aj },{source: ac , target: aq },{source: ac , target: an },{source: ac , target: al },{source: ac , target: af },{source: ac , target: ag },{source: am , target: ar },{source: am , target: as },{source: am , target: ap },{source: am , target: aq },{source: am , target: an },{source: ak , target: ar },{source: ak , target: am },{source: ak , target: as },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: an },{source: ak , target: al },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: aq },{source: aj , target: ar },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: as },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: al },{source: aq , target: ar },{source: aq , target: as },{source: an , target: ar },{source: an , target: as },{source: an , target: ap },{source: an , target: aq },{source: al , target: ar },{source: al , target: am },{source: al , target: as },{source: al , target: ap },{source: al , target: aq },{source: al , target: an },{source: af , target: ah },{source: af , target: ai },{source: af , target: ar },{source: af , target: am },{source: af , target: ak },{source: af , target: as },{source: af , target: ap },{source: af , target: aj },{source: af , target: aq },{source: af , target: an },{source: af , target: al },{source: af , target: ag },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ar },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: as },{source: ag , target: ap },{source: ag , target: aj },{source: ag , target: aq },{source: ag , target: an },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa','ai','ar','ac','am','ak','as','ap','aj','aq','an','al','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ah at */ var  ah = nodes[0] ,at = {id: 'at', name:'gertraude'} ; nodes.push( at ); links.push( {source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ah ai at */ var  ah = nodes[0] ,ai = {id: 'ai', name:'waldberg'},at = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: at },{source: ah , target: ai },{source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* af ai aj */ var  af = {id: 'af', name:'nina'},ai = nodes[0] ,aj = {id: 'aj', name:'grünau'} ; nodes.push( af,aj ); links.push( {source: af , target: ai },{source: af , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* af ai aj */ var  af = nodes[0] ,ai = nodes[1] ,aj = nodes[2]  ; /* nodes.push(); */ links.push( {source: af , target: aj },{source: af , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aj','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac ae ai */ var  ac = {id: 'ac', name:'blümlein'},ae = {id: 'ae', name:'wolf'},ai = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ac , target: ai },{source: ac , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ai */ var  ac = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'marie'},ai = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = {id: 'aj', name:'grünau'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ae af ag ai aj */ var  aa = {id: 'aa', name:'baroninn'},ae = {id: 'ae', name:'wolf'},af = {id: 'af', name:'nina'},ag = {id: 'ag', name:'emy'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( aa,ae,af,ag ); links.push( {source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ae },{source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ai','aj','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ab ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'babette'},ag = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ab ae af ag ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'wolf'},af = {id: 'af', name:'nina'},ag = nodes[2] ,ah = {id: 'ah', name:'marie'},ai = {id: 'ai', name:'waldberg'},aj = {id: 'aj', name:'grünau'} ; nodes.push( ae,af,ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: ai , target: aj },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab ac ae af ag ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'blümlein'},ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ai = nodes[5] ,aj = nodes[6]  ; nodes.push( ac ); links.push( {source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: af },{source: ag , target: ai },{source: ag , target: aj },{source: ai , target: aj },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: af },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 150000);
