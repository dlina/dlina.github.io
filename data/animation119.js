setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'speck'},ab = {id: 'ab', name:'chor'},ac = {id: 'ac', name:'frau_steigerl'},ad = {id: 'ad', name:'steigerl'},ae = {id: 'ae', name:'schmalz'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.777777777777777778%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.555555555555555556%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'jean'},ag = {id: 'ag', name:'malchen'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* af ag ah */ var  af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'lottchen'} ; nodes.push( ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af ag ah */ var  af = nodes[0] ,ag = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.888888888888888889%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'fritz'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag ah ai aj */ var  ag = {id: 'ag', name:'malchen'},ah = {id: 'ah', name:'lottchen'},ai = nodes[0] ,aj = {id: 'aj', name:'marie'} ; nodes.push( ag,ah,aj ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.444444444444444444%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aj','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* af ai ak al am an ao */ var  af = {id: 'af', name:'jean'},ai = nodes[0] ,ak = {id: 'ak', name:'chor_der_schuldner'},al = {id: 'al', name:'öbstlerin'},am = {id: 'am', name:'schneider'},an = {id: 'an', name:'schuster'},ao = {id: 'ao', name:'kutscher'} ; nodes.push( af,ak,al,am,an,ao ); links.push( {source: af , target: ak },{source: af , target: ai },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ad af ai ak al am an */ var  ac = {id: 'ac', name:'frau_steigerl'},ad = {id: 'ad', name:'steigerl'},af = nodes[0] ,ai = nodes[1] ,ak = nodes[2] ,al = nodes[3] ,am = nodes[4] ,an = nodes[5]  ; nodes.push( ac,ad ); links.push( {source: ac , target: ai },{source: ac , target: am },{source: ac , target: ad },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: an },{source: ac , target: af },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: an },{source: am , target: an },{source: ad , target: ai },{source: ad , target: am },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: an },{source: ad , target: af },{source: al , target: am },{source: al , target: an },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: af , target: ai },{source: af , target: am },{source: af , target: al },{source: af , target: ak },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.777777777777777778%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','ad','al','ak','an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ai */ var  ac = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.555555555555555556%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ap */ var  aa = {id: 'aa', name:'speck'},ap = {id: 'ap', name:'magier'} ; nodes.push( aa,ap ); links.push( {source: aa , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.111111111111111111%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ad ai ap aq */ var  aa = nodes[0] ,ac = {id: 'ac', name:'frau_steigerl'},ad = {id: 'ad', name:'steigerl'},ai = {id: 'ai', name:'fritz'},ap = nodes[1] ,aq = {id: 'aq', name:'chor_der_vier_diener'} ; nodes.push( ac,ad,ai,aq ); links.push( {source: aa , target: ap },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: aq },{source: ap , target: aq },{source: ad , target: ap },{source: ad , target: ai },{source: ad , target: aq },{source: ac , target: ap },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: aq },{source: ai , target: ap },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.888888888888888889%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa','ai','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ad ap */ var  ac = nodes[0] ,ad = nodes[1] ,ap = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ap },{source: ac , target: ad },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ap','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'lottchen'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ah ai ar */ var  ah = nodes[0] ,ai = {id: 'ai', name:'fritz'},ar = {id: 'ar', name:'satire'} ; nodes.push( ai,ar ); links.push( {source: ah , target: ar },{source: ah , target: ai },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.222222222222222222%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ah ai ar as at au */ var  ah = nodes[0] ,ai = nodes[1] ,ar = nodes[2] ,as = {id: 'as', name:'laster'},at = {id: 'at', name:'die_begierde'},au = {id: 'au', name:'die_amoretten'} ; nodes.push( as,at,au ); links.push( {source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ah , target: ar },{source: ah , target: ai },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: as , target: at },{source: as , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ai ar as */ var  ai = nodes[0] ,ar = nodes[1] ,as = nodes[2]  ; /* nodes.push(); */ links.push( {source: ai , target: as },{source: ai , target: ar },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.777777777777777778%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'as','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ai av aw */ var  ai = nodes[0] ,av = {id: 'av', name:'kaprice'},aw = {id: 'aw', name:'mode'} ; nodes.push( av,aw ); links.push( {source: av , target: aw },{source: av , target: aw },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ai ar */ var  ai = nodes[0] ,ar = {id: 'ar', name:'satire'} ; nodes.push( ar ); links.push( {source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ai','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'lottchen'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.111111111111111111%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ah ai ar as ax */ var  ah = nodes[0] ,ai = {id: 'ai', name:'fritz'},ar = {id: 'ar', name:'satire'},as = {id: 'as', name:'laster'},ax = {id: 'ax', name:'luxus'} ; nodes.push( ai,ar,as,ax ); links.push( {source: ah , target: ax },{source: ah , target: as },{source: ah , target: ai },{source: ah , target: ar },{source: as , target: ax },{source: ai , target: ax },{source: ai , target: as },{source: ai , target: ar },{source: ar , target: ax },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.888888888888888889%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ah ai ar ax ay */ var  ah = nodes[0] ,ai = nodes[1] ,ar = nodes[2] ,ax = nodes[3] ,ay = {id: 'ay', name:'kompliment'} ; nodes.push( ay ); links.push( {source: ah , target: ar },{source: ah , target: ay },{source: ah , target: ai },{source: ah , target: ay },{source: ah , target: ax },{source: ar , target: ay },{source: ar , target: ay },{source: ar , target: ax },{source: ai , target: ar },{source: ai , target: ay },{source: ai , target: ay },{source: ai , target: ax },{source: ax , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ay','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah ar as av aw ax */ var  ah = nodes[0] ,ar = nodes[1] ,as = {id: 'as', name:'laster'},av = {id: 'av', name:'kaprice'},aw = {id: 'aw', name:'mode'},ax = nodes[2]  ; nodes.push( as,av,aw ); links.push( {source: ah , target: ar },{source: ah , target: ax },{source: ah , target: as },{source: ah , target: av },{source: ah , target: aw },{source: ar , target: ax },{source: ar , target: as },{source: ar , target: av },{source: ar , target: aw },{source: as , target: ax },{source: as , target: av },{source: as , target: aw },{source: av , target: ax },{source: av , target: aw },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.444444444444444444%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ar','ax','as','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = {id: 'ai', name:'fritz'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.222222222222222222%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ai az */ var  ai = nodes[0] ,az = {id: 'az', name:'armut'} ; nodes.push( az ); links.push( {source: ai , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ai as */ var  ai = nodes[0] ,as = {id: 'as', name:'laster'} ; nodes.push( as ); links.push( {source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.555555555555555556%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ai ba */ var  ai = nodes[0] ,ba = {id: 'ba', name:'koketterie'} ; nodes.push( ba ); links.push( {source: ai , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ai as ba */ var  ai = nodes[0] ,as = {id: 'as', name:'laster'},ba = nodes[1]  ; nodes.push( as ); links.push( {source: as , target: ba },{source: ai , target: as },{source: ai , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.111111111111111111%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai as az bb */ var  ai = nodes[0] ,as = nodes[1] ,az = {id: 'az', name:'armut'},bb = {id: 'bb', name:'schande'} ; nodes.push( az,bb ); links.push( {source: ai , target: as },{source: ai , target: az },{source: ai , target: bb },{source: as , target: az },{source: as , target: bb },{source: az , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'as','az','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ai ar */ var  ai = nodes[0] ,ar = {id: 'ar', name:'satire'} ; nodes.push( ar ); links.push( {source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ah ai ar bc bd */ var  ah = {id: 'ah', name:'lottchen'},ai = nodes[0] ,ar = nodes[1] ,bc = {id: 'bc', name:'chor_aus_orpheus'},bd = {id: 'bd', name:'die_hoffnung'} ; nodes.push( ah,bc,bd ); links.push( {source: ai , target: bc },{source: ai , target: ar },{source: ai , target: bd },{source: ah , target: ai },{source: ah , target: bc },{source: ah , target: ar },{source: ah , target: bd },{source: bc , target: bd },{source: ar , target: bc },{source: ar , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.444444444444444444%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ai','ah','bc','ar','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ac ad ap */ var  aa = {id: 'aa', name:'speck'},ac = {id: 'ac', name:'frau_steigerl'},ad = {id: 'ad', name:'steigerl'},ap = {id: 'ap', name:'magier'} ; nodes.push( aa,ac,ad,ap ); links.push( {source: aa , target: ap },{source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ap },{source: ac , target: ad },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.222222222222222222%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab ac ad ah ai ap */ var  ab = {id: 'ab', name:'chor'},ac = nodes[0] ,ad = nodes[1] ,ah = {id: 'ah', name:'lottchen'},ai = {id: 'ai', name:'fritz'},ap = nodes[2]  ; nodes.push( ab,ah,ai ); links.push( {source: ai , target: ap },{source: ac , target: ap },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ad },{source: ah , target: ap },{source: ah , target: ai },{source: ad , target: ap },{source: ad , target: ai },{source: ad , target: ah },{source: ab , target: ap },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 175000);
