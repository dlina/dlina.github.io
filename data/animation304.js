setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = {id: 'aa', name:'michl'},ab = {id: 'ab', name:'loisl'},ac = {id: 'ac', name:'veit'},ad = {id: 'ad', name:'martin'},ae = {id: 'ae', name:'strinklopferhanns'},af = {id: 'af', name:'alle_bursche'},ag = {id: 'ag', name:'sepp'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = nodes[5] ,ag = nodes[6] ,ah = {id: 'ah', name:'marthe'},ai = {id: 'ai', name:'anton'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ah','ac','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ae ag ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,ag = nodes[3] ,ai = nodes[4] ,aj = {id: 'aj', name:'liesel'} ; nodes.push( aj ); links.push( {source: ai , target: aj },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ag },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: ag },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ag },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai ak al am an */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'veit'},ad = {id: 'ad', name:'martin'},ae = nodes[2] ,af = {id: 'af', name:'alle_bursche'},ag = nodes[3] ,ah = {id: 'ah', name:'marthe'},ai = nodes[4] ,ak = {id: 'ak', name:'die_bauern'},al = {id: 'al', name:'grossbauer'},am = {id: 'am', name:'einzelne'},an = {id: 'an', name:'brenninger'} ; nodes.push( ac,ad,af,ah,ak,al,am,an ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: am },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ah },{source: ae , target: am },{source: ae , target: af },{source: ae , target: ag },{source: al , target: am },{source: al , target: an },{source: al , target: am },{source: am , target: an },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: am },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: an },{source: ah , target: am },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: af },{source: ac , target: ag },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ai },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: am },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: ad , target: ak },{source: ad , target: ae },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ai },{source: ad , target: an },{source: ad , target: ah },{source: ad , target: am },{source: ad , target: af },{source: ad , target: ag },{source: am , target: an },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: ai },{source: af , target: an },{source: af , target: ah },{source: af , target: am },{source: af , target: ag },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ai },{source: ab , target: an },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: am },{source: ab , target: af },{source: ab , target: ag },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ak','al','am','ai','an','ah','ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ad ae ag ao */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,ag = nodes[4] ,ao = {id: 'ao', name:'chor'} ; nodes.push( ao ); links.push( {source: ae , target: ag },{source: ae , target: ao },{source: ag , target: ao },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ao },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ao },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac ad ae af ag al ap aq ar */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'veit'},ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'alle_bursche'},ag = nodes[4] ,al = {id: 'al', name:'grossbauer'},ap = {id: 'ap', name:'klaus'},aq = {id: 'aq', name:'mathies'},ar = {id: 'ar', name:'altlechner'} ; nodes.push( ac,af,al,ap,aq,ar ); links.push( {source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar },{source: ae , target: al },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: af },{source: ae , target: ag },{source: af , target: al },{source: af , target: ap },{source: af , target: aq },{source: af , target: ar },{source: af , target: ag },{source: aa , target: al },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ac },{source: ab , target: al },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ac },{source: ad , target: al },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ag , target: al },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ac , target: al },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'al','ap','aq','ar','af','aa','ab','ad','ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae ai */ var  ae = nodes[0] ,ai = {id: 'ai', name:'anton'} ; nodes.push( ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ae ai as */ var  ae = nodes[0] ,ai = nodes[1] ,as = {id: 'as', name:'josepha'} ; nodes.push( as ); links.push( {source: ae , target: as },{source: ae , target: ai },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ai as */ var  ai = nodes[0] ,as = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae as */ var  ae = {id: 'ae', name:'strinklopferhanns'},as = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai as */ var  ai = {id: 'ai', name:'anton'},as = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'as','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ap aq at */ var  ap = {id: 'ap', name:'klaus'},aq = {id: 'aq', name:'mathies'},at = {id: 'at', name:'einige'} ; nodes.push( ap,aq,at ); links.push( {source: ap , target: aq },{source: ap , target: at },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ad ap aq at */ var  aa = {id: 'aa', name:'michl'},ad = {id: 'ad', name:'martin'},ap = nodes[0] ,aq = nodes[1] ,at = nodes[2]  ; nodes.push( aa,ad ); links.push( {source: aa , target: aq },{source: aa , target: ap },{source: aa , target: at },{source: aa , target: ad },{source: aq , target: at },{source: ap , target: aq },{source: ap , target: at },{source: ad , target: aq },{source: ad , target: ap },{source: ad , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab ac ad ae am an ap aq at */ var  aa = nodes[0] ,ab = {id: 'ab', name:'loisl'},ac = {id: 'ac', name:'veit'},ad = nodes[1] ,ae = {id: 'ae', name:'strinklopferhanns'},am = {id: 'am', name:'einzelne'},an = {id: 'an', name:'brenninger'},ap = nodes[2] ,aq = nodes[3] ,at = nodes[4]  ; nodes.push( ab,ac,ae,am,an ); links.push( {source: aa , target: ad },{source: aa , target: ae },{source: aa , target: aq },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: an },{source: aa , target: ap },{source: aa , target: at },{source: aa , target: am },{source: ad , target: ae },{source: ad , target: aq },{source: ad , target: an },{source: ad , target: ap },{source: ad , target: at },{source: ad , target: am },{source: ae , target: aq },{source: ae , target: an },{source: ae , target: ap },{source: ae , target: at },{source: ae , target: am },{source: aq , target: at },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: aq },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: at },{source: ac , target: am },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: aq },{source: ab , target: ac },{source: ab , target: an },{source: ab , target: ap },{source: ab , target: at },{source: ab , target: am },{source: an , target: aq },{source: an , target: ap },{source: an , target: at },{source: ap , target: aq },{source: ap , target: at },{source: am , target: aq },{source: am , target: an },{source: am , target: ap },{source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa','ad','ae','ac','ab','an','at','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ap aq ar */ var  ap = nodes[0] ,aq = nodes[1] ,ar = {id: 'ar', name:'altlechner'} ; nodes.push( ar ); links.push( {source: aq , target: ar },{source: ap , target: ar },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aq','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab ac ad ae ag ai aj al ao ar */ var  aa = {id: 'aa', name:'michl'},ab = {id: 'ab', name:'loisl'},ac = {id: 'ac', name:'veit'},ad = {id: 'ad', name:'martin'},ae = {id: 'ae', name:'strinklopferhanns'},ag = {id: 'ag', name:'sepp'},ai = {id: 'ai', name:'anton'},aj = {id: 'aj', name:'liesel'},al = {id: 'al', name:'grossbauer'},ao = {id: 'ao', name:'chor'},ar = nodes[0]  ; nodes.push( aa,ab,ac,ad,ae,ag,ai,aj,al,ao ); links.push( {source: aj , target: ao },{source: aj , target: ar },{source: aj , target: al },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ar },{source: ai , target: al },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ao },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: al },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ao },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ar },{source: aa , target: al },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: ao },{source: ae , target: ag },{source: ae , target: ar },{source: ae , target: al },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ao },{source: ad , target: ag },{source: ad , target: ar },{source: ad , target: al },{source: ao , target: ar },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ao },{source: ag , target: ar },{source: ag , target: al },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ao },{source: ab , target: ag },{source: ab , target: ar },{source: ab , target: al },{source: al , target: ao },{source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj','ac','aa','ad','ao','ag','ab','ar','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ae ai */ var  ae = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ai },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ai as */ var  ai = nodes[0] ,as = {id: 'as', name:'josepha'} ; nodes.push( as ); links.push( {source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'as','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ae af */ var  aa = {id: 'aa', name:'michl'},ae = {id: 'ae', name:'strinklopferhanns'},af = {id: 'af', name:'alle_bursche'} ; nodes.push( aa,ae,af ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae ai */ var  ae = nodes[0] ,ai = {id: 'ai', name:'anton'} ; nodes.push( ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* as au av */ var  as = {id: 'as', name:'josepha'},au = {id: 'au', name:'tobias'},av = {id: 'av', name:'ursel'} ; nodes.push( as,au,av ); links.push( {source: as , target: au },{source: as , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae ao ar as */ var  ae = {id: 'ae', name:'strinklopferhanns'},ao = {id: 'ao', name:'chor'},ar = {id: 'ar', name:'altlechner'},as = nodes[0]  ; nodes.push( ae,ao,ar ); links.push( {source: ae , target: as },{source: ae , target: ar },{source: ae , target: ao },{source: ar , target: as },{source: ao , target: as },{source: ao , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae ai aj ak ao ar as aw */ var  ae = nodes[0] ,ai = {id: 'ai', name:'anton'},aj = {id: 'aj', name:'liesel'},ak = {id: 'ak', name:'die_bauern'},ao = nodes[1] ,ar = nodes[2] ,as = nodes[3] ,aw = {id: 'aw', name:'mehrere_weiber'} ; nodes.push( ai,aj,ak,aw ); links.push( {source: ar , target: as },{source: ar , target: aw },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: aw },{source: ai , target: ar },{source: ai , target: ao },{source: ai , target: as },{source: ai , target: aw },{source: ai , target: aj },{source: ai , target: ak },{source: as , target: aw },{source: ae , target: ar },{source: ae , target: ao },{source: ae , target: ai },{source: ae , target: as },{source: ae , target: aw },{source: ae , target: aj },{source: ae , target: ak },{source: aj , target: ar },{source: aj , target: ao },{source: aj , target: as },{source: aj , target: aw },{source: aj , target: ak },{source: ak , target: ar },{source: ak , target: ao },{source: ak , target: as },{source: ak , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 110000);
