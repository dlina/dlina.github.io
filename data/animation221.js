setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = {id: 'aa', name:'der_wirkliche_scheik'},ab = {id: 'ab', name:'erster_aeltester'},ac = {id: 'ac', name:'zweiter_aeltester'},ad = {id: 'ad', name:'dritter_aeltester'},ae = {id: 'ae', name:'babel'},af = {id: 'af', name:'schatten_des_imām'},ag = {id: 'ag', name:'schatten_des_kādi'},ah = {id: 'ah', name:'hākawāti'},ai = {id: 'ai', name:'schēfakā'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.083333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad','ae','af','ag','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'vorbeter'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.166666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = nodes[0] ,ab = {id: 'ab', name:'erster_aeltester'},ac = {id: 'ac', name:'zweiter_aeltester'},ad = {id: 'ad', name:'dritter_aeltester'},ae = {id: 'ae', name:'babel'},af = {id: 'af', name:'schatten_des_imām'},ag = {id: 'ag', name:'schatten_des_kādi'},ah = {id: 'ah', name:'hākawāti'},ai = {id: 'ai', name:'schēfakā'} ; nodes.push( ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: ah , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.25%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ag','ae','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3]  ; /* nodes.push(); */ links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad af ag aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,af = {id: 'af', name:'schatten_des_imām'},ag = {id: 'ag', name:'schatten_des_kādi'},aj = {id: 'aj', name:'vorbeter'} ; nodes.push( af,ag,aj ); links.push( {source: aa , target: aj },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: af , target: aj },{source: af , target: ag },{source: ag , target: aj },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.416666666666666667%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aj','aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.5%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa af ag */ var  aa = {id: 'aa', name:'der_wirkliche_scheik'},af = nodes[0] ,ag = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.583333333333333333%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ae af ag ai */ var  aa = nodes[0] ,ae = {id: 'ae', name:'babel'},af = nodes[1] ,ag = nodes[2] ,ai = {id: 'ai', name:'schēfakā'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: af , target: ai },{source: af , target: ag },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ae ai */ var  aa = nodes[0] ,ae = nodes[1] ,ai = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ai },{source: aa , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.75%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.833333333333333333%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ae aj */ var  aa = nodes[0] ,ae = nodes[1] ,aj = {id: 'aj', name:'vorbeter'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ae },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.916666666666666667%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ae ai */ var  aa = nodes[0] ,ae = nodes[1] ,ai = {id: 'ai', name:'schēfakā'} ; nodes.push( ai ); links.push( {source: aa , target: ae },{source: aa , target: ai },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '13. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.083333333333333333%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ae ai ak */ var  aa = nodes[0] ,ae = nodes[1] ,ai = nodes[2] ,ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'} ; nodes.push( ak ); links.push( {source: ai , target: ak },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ak },{source: ae , target: ai },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.166666666666666667%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ai','ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ag */ var  aa = nodes[0] ,ag = {id: 'ag', name:'schatten_des_kādi'} ; nodes.push( ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.25%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ah */ var  aa = nodes[0] ,ah = {id: 'ah', name:'hākawāti'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ai ak */ var  ai = {id: 'ai', name:'schēfakā'},ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'} ; nodes.push( ai,ak ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.416666666666666667%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'der_wirkliche_scheik'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.5%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ae af ag ah ai ak al */ var  aa = nodes[0] ,ae = {id: 'ae', name:'babel'},af = {id: 'af', name:'schatten_des_imām'},ag = {id: 'ag', name:'schatten_des_kādi'},ah = {id: 'ah', name:'hākawāti'},ai = {id: 'ai', name:'schēfakā'},ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'},al = {id: 'al', name:'phantasie'} ; nodes.push( ae,af,ag,ah,ai,ak,al ); links.push( {source: ah , target: al },{source: ah , target: ak },{source: ah , target: ai },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ak },{source: aa , target: ai },{source: aa , target: ag },{source: af , target: ah },{source: af , target: al },{source: af , target: ak },{source: af , target: ai },{source: af , target: ag },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: ag },{source: ak , target: al },{source: ai , target: al },{source: ai , target: ak },{source: ag , target: ah },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.583333333333333333%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah','al','ae','ak','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa af aj */ var  aa = nodes[0] ,af = nodes[1] ,aj = {id: 'aj', name:'vorbeter'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ae af ag al */ var  aa = nodes[0] ,ae = {id: 'ae', name:'babel'},af = nodes[1] ,ag = {id: 'ag', name:'schatten_des_kādi'},al = {id: 'al', name:'phantasie'} ; nodes.push( ae,ag,al ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: al },{source: af , target: ag },{source: af , target: al },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.75%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ae af ag */ var  aa = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = nodes[3]  ; /* nodes.push(); */ links.push( {source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: af , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: ae , target: af },{source: ae , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.833333333333333333%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'af','ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa aj am */ var  aa = nodes[0] ,aj = {id: 'aj', name:'vorbeter'},am = {id: 'am', name:'der_vorbeter'} ; nodes.push( aj,am ); links.push( {source: aa , target: am },{source: aa , target: aj },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.916666666666666667%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'am','aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* al an */ var  al = {id: 'al', name:'phantasie'},an = {id: 'an', name:'bibel'} ; nodes.push( al,an ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ai al an */ var  ai = {id: 'ai', name:'schēfakā'},al = nodes[0] ,an = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: al },{source: ai , target: an },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.083333333333333333%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ai ak al an */ var  ai = nodes[0] ,ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'},al = nodes[1] ,an = nodes[2]  ; nodes.push( ak ); links.push( {source: ak , target: al },{source: ak , target: an },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: an },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.166666666666666667%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ai','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ak al */ var  ak = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.25%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ai al */ var  ai = {id: 'ai', name:'schēfakā'},al = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ah ai ak */ var  ah = {id: 'ah', name:'hākawāti'},ai = nodes[0] ,ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'} ; nodes.push( ah,ak ); links.push( {source: ah , target: ak },{source: ah , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.416666666666666667%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ae ah ai al */ var  aa = {id: 'aa', name:'der_wirkliche_scheik'},ae = {id: 'ae', name:'babel'},ah = nodes[0] ,ai = nodes[1] ,al = {id: 'al', name:'phantasie'} ; nodes.push( aa,ae,al ); links.push( {source: aa , target: ae },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: ah },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: ah },{source: ai , target: al },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: ah },{source: ah , target: ai },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.5%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ae','ai','al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'vorbeter'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.583333333333333333%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ae ai ak */ var  aa = nodes[0] ,ae = {id: 'ae', name:'babel'},ai = {id: 'ai', name:'schēfakā'},ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'} ; nodes.push( ae,ai,ak ); links.push( {source: ae , target: ai },{source: ae , target: ak },{source: ai , target: ak },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai ak al ao ap aq ar as at au av aw */ var  aa = nodes[0] ,ab = {id: 'ab', name:'erster_aeltester'},ac = {id: 'ac', name:'zweiter_aeltester'},ad = {id: 'ad', name:'dritter_aeltester'},ae = nodes[1] ,af = {id: 'af', name:'schatten_des_imām'},ag = {id: 'ag', name:'schatten_des_kādi'},ah = {id: 'ah', name:'hākawāti'},ai = nodes[2] ,ak = nodes[3] ,al = {id: 'al', name:'phantasie'},ao = {id: 'ao', name:'erster_scheik'},ap = {id: 'ap', name:'zweiter_scheik'},aq = {id: 'aq', name:'dritter_scheik'},ar = {id: 'ar', name:'vierter_scheik'},as = {id: 'as', name:'fünfter_scheik'},at = {id: 'at', name:'sechster_scheik'},au = {id: 'au', name:'siebenter_scheik'},av = {id: 'av', name:'achter_scheik'},aw = {id: 'aw', name:'alle_ānallāh'} ; nodes.push( ab,ac,ad,af,ag,ah,al,ao,ap,aq,ar,as,at,au,av,aw ); links.push( {source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: aa , target: au },{source: aa , target: av },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aw },{source: aa , target: al },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ak },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: av },{source: ao , target: aw },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: aw },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: af , target: ar },{source: af , target: as },{source: af , target: at },{source: af , target: au },{source: af , target: av },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aw },{source: af , target: al },{source: af , target: ak },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: av },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aw },{source: ag , target: al },{source: ag , target: ak },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: as },{source: ae , target: at },{source: ae , target: au },{source: ae , target: av },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aw },{source: ae , target: al },{source: ae , target: ak },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: av },{source: ah , target: ai },{source: ah , target: aw },{source: ah , target: al },{source: ah , target: ak },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: al },{source: ai , target: ak },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: at },{source: al , target: au },{source: al , target: av },{source: al , target: aw },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aw },{source: ab , target: al },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ak },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aw },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: ak },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: at },{source: ad , target: au },{source: ad , target: av },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aw },{source: ad , target: al },{source: ad , target: ak },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '10. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.75%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ao','ap','aq','ar','as','at','au','av','aw','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ae af ag ah ai aj ak al */ var  aa = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,ai = nodes[5] ,aj = {id: 'aj', name:'vorbeter'},ak = nodes[6] ,al = nodes[7]  ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: ak },{source: af , target: aj },{source: af , target: ai },{source: af , target: ag },{source: af , target: ak },{source: af , target: al },{source: af , target: ah },{source: af , target: ak },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: ak },{source: ak , target: al },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ak },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.833333333333333333%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aa','aj','ai','ak','al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ae af ag as at au av */ var  ae = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,as = {id: 'as', name:'fünfter_scheik'},at = {id: 'at', name:'sechster_scheik'},au = {id: 'au', name:'siebenter_scheik'},av = {id: 'av', name:'achter_scheik'} ; nodes.push( as,at,au,av ); links.push( {source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av },{source: ae , target: as },{source: ae , target: at },{source: ae , target: au },{source: ae , target: av },{source: ae , target: af },{source: ae , target: ag },{source: af , target: as },{source: af , target: at },{source: af , target: au },{source: af , target: av },{source: af , target: ag },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.916666666666666667%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'as','at','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ae af ag ah ai ak al */ var  aa = {id: 'aa', name:'der_wirkliche_scheik'},ae = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'hākawāti'},ai = {id: 'ai', name:'schēfakā'},ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'},al = {id: 'al', name:'phantasie'} ; nodes.push( aa,ah,ai,ak,al ); links.push( {source: aa , target: ak },{source: aa , target: al },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ah },{source: ak , target: al },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: af , target: ak },{source: af , target: al },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ai },{source: ag , target: ah },{source: ai , target: ak },{source: ai , target: al },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ak','al','ae','af','ag','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'vorbeter'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.083333333333333333%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ai */ var  aa = nodes[0] ,ai = {id: 'ai', name:'schēfakā'} ; nodes.push( ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.166666666666666667%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ae af ag ai ao ap aq ar */ var  aa = nodes[0] ,ae = {id: 'ae', name:'babel'},af = {id: 'af', name:'schatten_des_imām'},ag = {id: 'ag', name:'schatten_des_kādi'},ai = nodes[1] ,ao = {id: 'ao', name:'erster_scheik'},ap = {id: 'ap', name:'zweiter_scheik'},aq = {id: 'aq', name:'dritter_scheik'},ar = {id: 'ar', name:'vierter_scheik'} ; nodes.push( ae,af,ag,ao,ap,aq,ar ); links.push( {source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ai },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: af , target: ar },{source: af , target: ag },{source: af , target: ai },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ai },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.25%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ao','ap','aq','ar','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ae af ag aj */ var  aa = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,aj = {id: 'aj', name:'vorbeter'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: af , target: aj },{source: af , target: ag },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aj','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ae ah ai ak al */ var  aa = nodes[0] ,ae = nodes[1] ,ah = {id: 'ah', name:'hākawāti'},ai = {id: 'ai', name:'schēfakā'},ak = {id: 'ak', name:'stimme_des_scheikes_der_todeskara_wane'},al = {id: 'al', name:'phantasie'} ; nodes.push( ah,ai,ak,al ); links.push( {source: aa , target: al },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ai },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: ai },{source: ak , target: al },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: ai },{source: ai , target: al },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.416666666666666667%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ah ai aj ak al */ var  ah = nodes[0] ,ai = nodes[1] ,aj = {id: 'aj', name:'vorbeter'},ak = nodes[2] ,al = nodes[3]  ; nodes.push( aj ); links.push( {source: ah , target: al },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ak , target: al },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: aj },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.5%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ae ah ai ak al */ var  ae = {id: 'ae', name:'babel'},ah = nodes[0] ,ai = nodes[1] ,ak = nodes[2] ,al = nodes[3]  ; nodes.push( ae ); links.push( {source: ai , target: al },{source: ai , target: ak },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: ak },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.583333333333333333%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ab ac ae ah ai ak al */ var  aa = {id: 'aa', name:'der_wirkliche_scheik'},ab = {id: 'ab', name:'erster_aeltester'},ac = {id: 'ac', name:'zweiter_aeltester'},ae = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,ak = nodes[3] ,al = nodes[4]  ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: al },{source: ab , target: ai },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: ai },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: ai },{source: ak , target: al },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai },{source: ai , target: ak },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ab','ac','ae','ah','al','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aa ak */ var  aa = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.75%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa ah ak al */ var  aa = nodes[0] ,ah = {id: 'ah', name:'hākawāti'},ak = nodes[1] ,al = {id: 'al', name:'phantasie'} ; nodes.push( ah,al ); links.push( {source: aa , target: ak },{source: aa , target: al },{source: aa , target: ah },{source: ak , target: al },{source: ah , target: ak },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.833333333333333333%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa ak al */ var  aa = nodes[0] ,ak = nodes[1] ,al = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ak },{source: aa , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.916666666666666667%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai ak al an aw ax ay */ var  aa = nodes[0] ,ab = {id: 'ab', name:'erster_aeltester'},ac = {id: 'ac', name:'zweiter_aeltester'},ad = {id: 'ad', name:'dritter_aeltester'},ae = {id: 'ae', name:'babel'},af = {id: 'af', name:'schatten_des_imām'},ag = {id: 'ag', name:'schatten_des_kādi'},ah = {id: 'ah', name:'hākawāti'},ai = {id: 'ai', name:'schēfakā'},ak = nodes[1] ,al = nodes[2] ,an = {id: 'an', name:'bibel'},aw = {id: 'aw', name:'alle_ānallāh'},ax = {id: 'ax', name:'die_vier_schmiede'},ay = {id: 'ay', name:'die_aeltesten_der_ānallāh'} ; nodes.push( ab,ac,ad,ae,af,ag,ah,ai,an,aw,ax,ay ); links.push( {source: aa , target: ae },{source: aa , target: ax },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: an },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: aw },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ay },{source: aa , target: ak },{source: ae , target: ax },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: an },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: aw },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: ay },{source: ae , target: ak },{source: ax , target: ay },{source: al , target: ax },{source: al , target: an },{source: al , target: aw },{source: al , target: ay },{source: ak , target: ax },{source: ak , target: al },{source: ak , target: an },{source: ak , target: aw },{source: ak , target: ay },{source: an , target: ax },{source: an , target: aw },{source: an , target: ay },{source: af , target: ax },{source: af , target: al },{source: af , target: ak },{source: af , target: an },{source: af , target: ag },{source: af , target: aw },{source: af , target: ai },{source: af , target: ah },{source: af , target: ay },{source: af , target: ak },{source: ag , target: ax },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: an },{source: ag , target: aw },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ay },{source: ag , target: ak },{source: aw , target: ax },{source: aw , target: ay },{source: ai , target: ax },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: an },{source: ai , target: aw },{source: ai , target: ay },{source: ai , target: ak },{source: ah , target: ax },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: aw },{source: ah , target: ai },{source: ah , target: ay },{source: ah , target: ak },{source: ab , target: ae },{source: ab , target: ax },{source: ab , target: al },{source: ab , target: ak },{source: ab , target: an },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: aw },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ay },{source: ab , target: ak },{source: ac , target: ae },{source: ac , target: ax },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: an },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aw },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ay },{source: ac , target: ak },{source: ad , target: ae },{source: ad , target: ax },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: an },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: aw },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ay },{source: ad , target: ak },{source: aa , target: ae },{source: aa , target: ax },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: an },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: aw },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ay },{source: aa , target: ak },{source: ak , target: ax },{source: ak , target: al },{source: ak , target: an },{source: ak , target: aw },{source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 235000);
