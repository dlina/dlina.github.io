setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'brenner'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.5625%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'mepistopheles'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.125%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = {id: 'ac', name:'erster_student'},ad = {id: 'ad', name:'zweiter_student'},ae = {id: 'ae', name:'dritter_student'} ; nodes.push( ac,ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.6875%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac ad ae af */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'dokotor_faust'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.25%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.8125%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = {id: 'ag', name:'fausts_vater'} ; nodes.push( ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.375%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af ag ah */ var  af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'gerichtsdiener'} ; nodes.push( ah ); links.push( {source: af , target: ah },{source: af , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.9375%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'brenner'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.5%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'gerichtsdiener'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.0625%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'dokotor_faust'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.625%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa af */ var  aa = {id: 'aa', name:'brenner'},af = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.1875%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.75%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af ai */ var  af = nodes[0] ,ai = {id: 'ai', name:'ithuriel'} ; nodes.push( ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.3125%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'mepistopheles'},ai = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.875%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.4375%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'dokotor_faust'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa af */ var  aa = {id: 'aa', name:'brenner'},af = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.5625%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.125%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af aj ak al am an ao */ var  af = nodes[0] ,aj = {id: 'aj', name:'stimme'},ak = {id: 'ak', name:'erster_geist'},al = {id: 'al', name:'zweiter_geist'},am = {id: 'am', name:'siebenter_geist'},an = {id: 'an', name:'dritter_geist'},ao = {id: 'ao', name:'vierter_geist'} ; nodes.push( aj,ak,al,am,an,ao ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: an },{source: af , target: ao },{source: af , target: am },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: am },{source: an , target: ao },{source: am , target: an },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.6875%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aj','ak','al','an','ao','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.25%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.8125%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab af aj */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0] ,aj = {id: 'aj', name:'stimme'} ; nodes.push( ab,aj ); links.push( {source: ab , target: af },{source: ab , target: aj },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.375%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* af ai */ var  af = nodes[0] ,ai = {id: 'ai', name:'ithuriel'} ; nodes.push( ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.9375%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab af ap */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0] ,ap = {id: 'ap', name:'liese'} ; nodes.push( ab,ap ); links.push( {source: ab , target: af },{source: ab , target: ap },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.5%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* af ap */ var  af = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.0625%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.625%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab af ag */ var  ab = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'fausts_vater'} ; nodes.push( ag ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.1875%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.75%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* af aq */ var  af = nodes[0] ,aq = {id: 'aq', name:'wirt'} ; nodes.push( aq ); links.push( {source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.3125%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.875%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.4375%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* af ar */ var  af = nodes[0] ,ar = {id: 'ar', name:'eremit'} ; nodes.push( ar ); links.push( {source: af , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* af as */ var  af = nodes[0] ,as = {id: 'as', name:'mädchen'} ; nodes.push( as ); links.push( {source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.5625%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* af at */ var  af = nodes[0] ,at = {id: 'at', name:'mann'} ; nodes.push( at ); links.push( {source: af , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.125%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* af au */ var  af = nodes[0] ,au = {id: 'au', name:'alter'} ; nodes.push( au ); links.push( {source: af , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.6875%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* af av */ var  af = nodes[0] ,av = {id: 'av', name:'maler'} ; nodes.push( av ); links.push( {source: af , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.25%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* af aw */ var  af = nodes[0] ,aw = {id: 'aw', name:'dame'} ; nodes.push( aw ); links.push( {source: af , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.8125%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '15. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.375%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '16. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.9375%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* af ai ax */ var  af = nodes[0] ,ai = {id: 'ai', name:'ithuriel'},ax = {id: 'ax', name:'geist'} ; nodes.push( ai,ax ); links.push( {source: af , target: ax },{source: af , target: ai },{source: ai , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '17. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.5%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ax','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.0625%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ab af ay */ var  ab = nodes[0] ,af = nodes[1] ,ay = {id: 'ay', name:'sokrates'} ; nodes.push( ay ); links.push( {source: af , target: ay },{source: ab , target: af },{source: ab , target: ay },{source: ab , target: af },{source: af , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.625%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ay','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* af az */ var  af = nodes[0] ,az = {id: 'az', name:'cato'} ; nodes.push( az ); links.push( {source: af , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.1875%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* af ba */ var  af = nodes[0] ,ba = {id: 'ba', name:'solon'} ; nodes.push( ba ); links.push( {source: af , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.75%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.3125%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.875%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ab af bb bc bd be bf */ var  ab = nodes[0] ,af = nodes[1] ,bb = {id: 'bb', name:'erster_höfling'},bc = {id: 'bc', name:'zweiter_höfling'},bd = {id: 'bd', name:'dritter_höfling'},be = {id: 'be', name:'vierter_höfling'},bf = {id: 'bf', name:'fünfter_höfling'} ; nodes.push( bb,bc,bd,be,bf ); links.push( {source: af , target: bb },{source: af , target: bc },{source: af , target: bd },{source: af , target: be },{source: af , target: bf },{source: ab , target: af },{source: ab , target: bb },{source: ab , target: bc },{source: ab , target: bd },{source: ab , target: be },{source: ab , target: bf },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bd , target: be },{source: bd , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.4375%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* af bb bc bd be bf bg bh bi bj bk */ var  af = nodes[0] ,bb = nodes[1] ,bc = nodes[2] ,bd = nodes[3] ,be = nodes[4] ,bf = nodes[5] ,bg = {id: 'bg', name:'fürst'},bh = {id: 'bh', name:'kämmerer'},bi = {id: 'bi', name:'obrister'},bj = {id: 'bj', name:'jägermeister'},bk = {id: 'bk', name:'kanzler'} ; nodes.push( bg,bh,bi,bj,bk ); links.push( {source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: af , target: bg },{source: af , target: bb },{source: af , target: bc },{source: af , target: bd },{source: af , target: be },{source: af , target: bf },{source: af , target: bh },{source: af , target: bi },{source: af , target: bj },{source: af , target: bk },{source: bb , target: bg },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bh },{source: bb , target: bi },{source: bb , target: bj },{source: bb , target: bk },{source: bc , target: bg },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bh },{source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bk },{source: bd , target: bg },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bh },{source: bd , target: bi },{source: bd , target: bj },{source: bd , target: bk },{source: be , target: bg },{source: be , target: bf },{source: be , target: bh },{source: be , target: bi },{source: be , target: bj },{source: be , target: bk },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bk },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bi , target: bj },{source: bi , target: bk },{source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'bg','bb','bc','bd','be','bf','bh','bi','bj','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ab af bl */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0] ,bl = {id: 'bl', name:'helena'} ; nodes.push( ab,bl ); links.push( {source: ab , target: af },{source: ab , target: bl },{source: af , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.5625%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'af','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.125%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'ithuriel'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.6875%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* af ai */ var  af = {id: 'af', name:'dokotor_faust'},ai = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.25%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.8125%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.375%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* af ai */ var  af = nodes[0] ,ai = {id: 'ai', name:'ithuriel'} ; nodes.push( ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.9375%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ag ap bm */ var  ag = {id: 'ag', name:'fausts_vater'},ap = {id: 'ap', name:'liese'},bm = {id: 'bm', name:'fausts_mutter'} ; nodes.push( ag,ap,bm ); links.push( {source: ag , target: bm },{source: ag , target: ap },{source: ap , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.5%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ag ap bm bn */ var  ag = nodes[0] ,ap = nodes[1] ,bm = nodes[2] ,bn = {id: 'bn', name:'reisender'} ; nodes.push( bn ); links.push( {source: ag , target: bn },{source: ag , target: bm },{source: ag , target: ap },{source: bm , target: bn },{source: ap , target: bn },{source: ap , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.0625%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'bn' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* af ag ap bm */ var  af = {id: 'af', name:'dokotor_faust'},ag = nodes[0] ,ap = nodes[1] ,bm = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: af , target: bm },{source: af , target: ap },{source: ag , target: bm },{source: ag , target: ap },{source: ap , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.625%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ag','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* af ap */ var  af = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.1875%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* af ag ap bm bo */ var  af = nodes[0] ,ag = {id: 'ag', name:'fausts_vater'},ap = nodes[1] ,bm = {id: 'bm', name:'fausts_mutter'},bo = {id: 'bo', name:'gürgel'} ; nodes.push( ag,bm,bo ); links.push( {source: ag , target: bm },{source: ag , target: ap },{source: ag , target: bo },{source: bm , target: bo },{source: af , target: ag },{source: af , target: bm },{source: af , target: ap },{source: af , target: bo },{source: ap , target: bm },{source: ap , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.75%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* af ag aj ap bm bo bp */ var  af = nodes[0] ,ag = nodes[1] ,aj = {id: 'aj', name:'stimme'},ap = nodes[2] ,bm = nodes[3] ,bo = nodes[4] ,bp = {id: 'bp', name:'eine_stimme'} ; nodes.push( aj,bp ); links.push( {source: af , target: bp },{source: af , target: bp },{source: af , target: ag },{source: af , target: bm },{source: af , target: ap },{source: af , target: bo },{source: af , target: bp },{source: af , target: aj },{source: ag , target: bp },{source: ag , target: bp },{source: ag , target: bm },{source: ag , target: ap },{source: ag , target: bo },{source: ag , target: bp },{source: ag , target: aj },{source: bm , target: bp },{source: bm , target: bp },{source: bm , target: bo },{source: bm , target: bp },{source: ap , target: bp },{source: ap , target: bp },{source: ap , target: bm },{source: ap , target: bo },{source: ap , target: bp },{source: bo , target: bp },{source: bo , target: bp },{source: bo , target: bp },{source: aj , target: bp },{source: aj , target: bp },{source: aj , target: bm },{source: aj , target: ap },{source: aj , target: bo },{source: aj , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.3125%' ;
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ag','bm','ap','bo','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* ab af bp */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0] ,bp = nodes[1]  ; nodes.push( ab ); links.push( {source: af , target: bp },{source: af , target: bp },{source: af , target: bp },{source: af , target: bp },{source: ab , target: af },{source: ab , target: bp },{source: ab , target: bp },{source: ab , target: bp },{source: ab , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.875%' ;
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'bp','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.4375%' ;
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'mepistopheles'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '11. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 315000);
