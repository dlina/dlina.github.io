setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'carbo'},ab = {id: 'ab', name:'kleon'},ac = {id: 'ac', name:'agricola'},ad = {id: 'ad', name:'euporus'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ae af ag ah */ var  ae = {id: 'ae', name:'lätorius'},af = {id: 'af', name:'volk'},ag = {id: 'ag', name:'cornelia'},ah = {id: 'ah', name:'licinnia'} ; nodes.push( ae,af,ag,ah ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ag ah ai */ var  ag = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'pomponius'} ; nodes.push( ai ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ae af aj ak al */ var  aa = {id: 'aa', name:'carbo'},ab = {id: 'ab', name:'kleon'},ac = {id: 'ac', name:'agricola'},ae = {id: 'ae', name:'lätorius'},af = {id: 'af', name:'volk'},aj = {id: 'aj', name:'volkshaufe'},ak = {id: 'ak', name:'metellus'},al = {id: 'al', name:'opimius'} ; nodes.push( aa,ab,ac,ae,af,aj,ak,al ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: af },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al },{source: af , target: aj },{source: af , target: ak },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','ae','aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac af ak al am an */ var  ac = nodes[0] ,af = nodes[1] ,ak = nodes[2] ,al = nodes[3] ,am = {id: 'am', name:'drusus'},an = {id: 'an', name:'lictor'} ; nodes.push( am,an ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: af },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ae af ai ak al ao at */ var  aa = {id: 'aa', name:'carbo'},ac = nodes[0] ,ae = {id: 'ae', name:'lätorius'},af = nodes[1] ,ai = {id: 'ai', name:'pomponius'},ak = nodes[2] ,al = nodes[3] ,ao = {id: 'ao', name:'gracchus'},at = {id: 'at', name:'senatoren'} ; nodes.push( aa,ae,ai,ao,at ); links.push( {source: al , target: ao },{source: al , target: at },{source: ai , target: al },{source: ai , target: ao },{source: ai , target: ak },{source: ai , target: at },{source: ao , target: at },{source: ac , target: al },{source: ac , target: ai },{source: ac , target: ao },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: at },{source: ac , target: ae },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: at },{source: aa , target: ae },{source: af , target: al },{source: af , target: ai },{source: af , target: ao },{source: af , target: ak },{source: af , target: at },{source: ak , target: al },{source: ak , target: ao },{source: ak , target: at },{source: ae , target: al },{source: ae , target: ai },{source: ae , target: ao },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai','ao','ac','aa','af','at','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ak al am ap aq */ var  ad = {id: 'ad', name:'euporus'},ak = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'drusus'},ap = {id: 'ap', name:'aulus'},aq = {id: 'aq', name:'rufus'} ; nodes.push( ad,am,ap,aq ); links.push( {source: ad , target: ak },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: al },{source: ad , target: am },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ap , target: aq },{source: al , target: ap },{source: al , target: aq },{source: al , target: am },{source: am , target: ap },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad','ak','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* al am */ var  al = nodes[0] ,am = nodes[1]  ; /* nodes.push(); */ links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak ao ap */ var  ak = {id: 'ak', name:'metellus'},ao = {id: 'ao', name:'gracchus'},ap = {id: 'ap', name:'aulus'} ; nodes.push( ak,ao,ap ); links.push( {source: ao , target: ap },{source: ak , target: ao },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ad ae ao */ var  ad = {id: 'ad', name:'euporus'},ae = {id: 'ae', name:'lätorius'},ao = nodes[0]  ; nodes.push( ad,ae ); links.push( {source: ae , target: ao },{source: ad , target: ao },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ao ar */ var  ab = {id: 'ab', name:'kleon'},ao = nodes[0] ,ar = {id: 'ar', name:'sklavin'} ; nodes.push( ab,ar ); links.push( {source: ao , target: ar },{source: ab , target: ao },{source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ad ae af ah ao */ var  ab = nodes[0] ,ad = {id: 'ad', name:'euporus'},ae = {id: 'ae', name:'lätorius'},af = {id: 'af', name:'volk'},ah = {id: 'ah', name:'licinnia'},ao = nodes[1]  ; nodes.push( ad,ae,af,ah ); links.push( {source: ae , target: af },{source: ae , target: ao },{source: ae , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ao },{source: ab , target: ad },{source: ab , target: ah },{source: af , target: ao },{source: af , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ao },{source: ad , target: ah },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae','ab','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag ah ao */ var  ag = {id: 'ag', name:'cornelia'},ah = nodes[0] ,ao = nodes[1]  ; nodes.push( ag ); links.push( {source: ah , target: ao },{source: ag , target: ao },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ao','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'carbo'},ac = {id: 'ac', name:'agricola'},ad = {id: 'ad', name:'euporus'} ; nodes.push( aa,ac,ad ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac af */ var  aa = nodes[0] ,ac = nodes[1] ,af = {id: 'af', name:'volk'} ; nodes.push( af ); links.push( {source: aa , target: ac },{source: aa , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ac as */ var  aa = nodes[0] ,ac = nodes[1] ,as = {id: 'as', name:'scipio'} ; nodes.push( as ); links.push( {source: aa , target: as },{source: aa , target: ac },{source: ac , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac af al am */ var  aa = nodes[0] ,ac = nodes[1] ,af = {id: 'af', name:'volk'},al = {id: 'al', name:'opimius'},am = {id: 'am', name:'drusus'} ; nodes.push( af,al,am ); links.push( {source: aa , target: ac },{source: aa , target: af },{source: aa , target: al },{source: aa , target: am },{source: ac , target: af },{source: ac , target: al },{source: ac , target: am },{source: af , target: al },{source: af , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ad ae af ai an ao */ var  ac = nodes[0] ,ad = {id: 'ad', name:'euporus'},ae = {id: 'ae', name:'lätorius'},af = nodes[1] ,ai = {id: 'ai', name:'pomponius'},an = {id: 'an', name:'lictor'},ao = {id: 'ao', name:'gracchus'} ; nodes.push( ad,ae,ai,an,ao ); links.push( {source: af , target: ao },{source: af , target: ai },{source: af , target: an },{source: ac , target: af },{source: ac , target: ao },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: an },{source: ae , target: af },{source: ae , target: ao },{source: ae , target: ai },{source: ae , target: an },{source: ai , target: ao },{source: ai , target: an },{source: ad , target: af },{source: ad , target: ao },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ae af ai ak al am an ao as at */ var  ae = nodes[0] ,af = nodes[1] ,ai = nodes[2] ,ak = {id: 'ak', name:'metellus'},al = {id: 'al', name:'opimius'},am = {id: 'am', name:'drusus'},an = nodes[3] ,ao = nodes[4] ,as = {id: 'as', name:'scipio'},at = {id: 'at', name:'senatoren'} ; nodes.push( ak,al,am,as,at ); links.push( {source: ao , target: as },{source: ao , target: at },{source: ao , target: at },{source: as , target: at },{source: as , target: at },{source: an , target: ao },{source: an , target: as },{source: an , target: at },{source: an , target: at },{source: ak , target: ao },{source: ak , target: as },{source: ak , target: an },{source: ak , target: al },{source: ak , target: at },{source: ak , target: am },{source: ak , target: at },{source: al , target: ao },{source: al , target: as },{source: al , target: an },{source: al , target: at },{source: al , target: am },{source: al , target: at },{source: af , target: ao },{source: af , target: as },{source: af , target: an },{source: af , target: ak },{source: af , target: al },{source: af , target: at },{source: af , target: am },{source: af , target: ai },{source: af , target: at },{source: am , target: ao },{source: am , target: as },{source: am , target: an },{source: am , target: at },{source: am , target: at },{source: ae , target: ao },{source: ae , target: as },{source: ae , target: an },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: at },{source: ae , target: af },{source: ae , target: am },{source: ae , target: ai },{source: ae , target: at },{source: ai , target: ao },{source: ai , target: as },{source: ai , target: an },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: at },{source: ai , target: am },{source: ai , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ao','as','an','ak','al','at','af','am','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad ah ai */ var  ad = {id: 'ad', name:'euporus'},ah = {id: 'ah', name:'licinnia'},ai = nodes[0]  ; nodes.push( ad,ah ); links.push( {source: ah , target: ai },{source: ad , target: ah },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ad af ag ah ai ao */ var  ac = {id: 'ac', name:'agricola'},ad = nodes[0] ,af = {id: 'af', name:'volk'},ag = {id: 'ag', name:'cornelia'},ah = nodes[1] ,ai = nodes[2] ,ao = {id: 'ao', name:'gracchus'} ; nodes.push( ac,af,ag,ao ); links.push( {source: ac , target: ao },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ai },{source: af , target: ao },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ah , target: ao },{source: ah , target: ai },{source: ag , target: ao },{source: ag , target: ah },{source: ag , target: ai },{source: ad , target: ao },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ai },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ao','ac','af','ah','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'lätorius'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae al as */ var  ae = nodes[0] ,al = {id: 'al', name:'opimius'},as = {id: 'as', name:'scipio'} ; nodes.push( al,as ); links.push( {source: ae , target: al },{source: ae , target: as },{source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ad ag as */ var  ad = {id: 'ad', name:'euporus'},ag = {id: 'ag', name:'cornelia'},as = nodes[0]  ; nodes.push( ad,ag ); links.push( {source: ag , target: as },{source: ad , target: as },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'as','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ae af ak al am ap aq au av */ var  ae = {id: 'ae', name:'lätorius'},af = {id: 'af', name:'volk'},ak = {id: 'ak', name:'metellus'},al = {id: 'al', name:'opimius'},am = {id: 'am', name:'drusus'},ap = {id: 'ap', name:'aulus'},aq = {id: 'aq', name:'rufus'},au = {id: 'au', name:'stimme'},av = {id: 'av', name:'stimme_eines_sclaven'} ; nodes.push( ae,af,ak,al,am,ap,aq,au,av ); links.push( {source: ak , target: ap },{source: ak , target: aq },{source: ak , target: au },{source: ak , target: av },{source: ak , target: av },{source: ak , target: al },{source: ak , target: am },{source: ap , target: aq },{source: ap , target: au },{source: ap , target: av },{source: ap , target: av },{source: aq , target: au },{source: aq , target: av },{source: aq , target: av },{source: au , target: av },{source: au , target: av },{source: ae , target: ak },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: au },{source: ae , target: av },{source: ae , target: av },{source: ae , target: al },{source: ae , target: am },{source: ae , target: af },{source: al , target: ap },{source: al , target: aq },{source: al , target: au },{source: al , target: av },{source: al , target: av },{source: al , target: am },{source: am , target: ap },{source: am , target: aq },{source: am , target: au },{source: am , target: av },{source: am , target: av },{source: af , target: ak },{source: af , target: ap },{source: af , target: aq },{source: af , target: au },{source: af , target: av },{source: af , target: av },{source: af , target: al },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ap','aq','au','ae','av','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ag ah ai ak al am ao */ var  ag = {id: 'ag', name:'cornelia'},ah = {id: 'ah', name:'licinnia'},ai = {id: 'ai', name:'pomponius'},ak = nodes[0] ,al = nodes[1] ,am = nodes[2] ,ao = {id: 'ao', name:'gracchus'} ; nodes.push( ag,ah,ai,ao ); links.push( {source: ai , target: ao },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ak },{source: am , target: ao },{source: ag , target: ai },{source: ag , target: ao },{source: ag , target: am },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: ah },{source: al , target: ao },{source: al , target: am },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: al },{source: ah , target: ai },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ao','am','ag','al','ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ad ai */ var  ac = {id: 'ac', name:'agricola'},ad = {id: 'ad', name:'euporus'},ai = nodes[0]  ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ac , target: ai },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad ai an ao */ var  ad = nodes[0] ,ai = nodes[1] ,an = {id: 'an', name:'lictor'},ao = {id: 'ao', name:'gracchus'} ; nodes.push( an,ao ); links.push( {source: ai , target: ao },{source: ai , target: an },{source: ad , target: ao },{source: ad , target: ai },{source: ad , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ac ai an ao aw */ var  ac = {id: 'ac', name:'agricola'},ai = nodes[0] ,an = nodes[1] ,ao = nodes[2] ,aw = {id: 'aw', name:'bürger'} ; nodes.push( ac,aw ); links.push( {source: an , target: ao },{source: an , target: aw },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: aw },{source: ao , target: aw },{source: ac , target: an },{source: ac , target: ai },{source: ac , target: ao },{source: ac , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ac ag ah ai ao aw */ var  aa = {id: 'aa', name:'carbo'},ac = nodes[0] ,ag = {id: 'ag', name:'cornelia'},ah = {id: 'ah', name:'licinnia'},ai = nodes[1] ,ao = nodes[2] ,aw = nodes[3]  ; nodes.push( aa,ag,ah ); links.push( {source: ao , target: aw },{source: ah , target: ao },{source: ah , target: aw },{source: ah , target: ai },{source: ag , target: ao },{source: ag , target: ah },{source: ag , target: aw },{source: ag , target: ai },{source: aa , target: ao },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: aw },{source: aa , target: ai },{source: aa , target: ac },{source: ai , target: ao },{source: ai , target: aw },{source: ac , target: ao },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: aw },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ac ad ae ag ah ai an ao aw */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'euporus'},ae = {id: 'ae', name:'lätorius'},ag = nodes[2] ,ah = nodes[3] ,ai = nodes[4] ,an = {id: 'an', name:'lictor'},ao = nodes[5] ,aw = nodes[6]  ; nodes.push( ad,ae,an ); links.push( {source: ao , target: aw },{source: ae , target: ao },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aw },{source: ae , target: ah },{source: ae , target: an },{source: ag , target: ao },{source: ag , target: ai },{source: ag , target: aw },{source: ag , target: ah },{source: ag , target: an },{source: ai , target: ao },{source: ai , target: aw },{source: ai , target: an },{source: aa , target: ao },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: aw },{source: aa , target: ah },{source: aa , target: an },{source: aa , target: ad },{source: aa , target: ac },{source: ah , target: ao },{source: ah , target: ai },{source: ah , target: aw },{source: ah , target: an },{source: an , target: ao },{source: an , target: aw },{source: ad , target: ao },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: aw },{source: ad , target: ah },{source: ad , target: an },{source: ac , target: ao },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: aw },{source: ac , target: ah },{source: ac , target: an },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae','ai','aa','aw','an','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ad ag ah ak ao */ var  ad = nodes[0] ,ag = nodes[1] ,ah = nodes[2] ,ak = {id: 'ak', name:'metellus'},ao = nodes[3]  ; nodes.push( ak ); links.push( {source: ad , target: ao },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ak },{source: ah , target: ao },{source: ah , target: ak },{source: ag , target: ao },{source: ag , target: ah },{source: ag , target: ak },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 155000);
