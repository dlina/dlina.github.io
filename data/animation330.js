setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'isabelle'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'clarisse'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'clitander'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = {id: 'ae', name:'cleon'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad af */ var  ad = {id: 'ad', name:'clitander'},af = {id: 'af', name:'hanswurst'} ; nodes.push( ad,af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'isabelle'},ac = {id: 'ac', name:'clarisse'},ad = nodes[0] ,ae = {id: 'ae', name:'cleon'} ; nodes.push( aa,ab,ac,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: ad , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = {id: 'af', name:'hanswurst'},ag = {id: 'ag', name:'lysimon'} ; nodes.push( af,ag ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: af , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ae , target: af },{source: ae , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa','ab','af','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'isabelle'},ag = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'leander'},ad = {id: 'ad', name:'clitander'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'isabelle'},ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'cleon'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: aa , target: ae },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ab ad ae ag */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'clitander'},ae = nodes[2] ,ag = {id: 'ag', name:'lysimon'} ; nodes.push( ad,ag ); links.push( {source: ae , target: ag },{source: ad , target: ag },{source: ad , target: ae },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','ae','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'clarisse'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'hanswurst'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'clarisse'},af = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ac af */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'isabelle'},ac = nodes[0] ,af = nodes[1]  ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ac ad ag */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'clitander'},ag = {id: 'ag', name:'lysimon'} ; nodes.push( ad,ag ); links.push( {source: ac , target: ag },{source: ac , target: ad },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ac af ag */ var  ab = {id: 'ab', name:'isabelle'},ac = nodes[0] ,af = {id: 'af', name:'hanswurst'},ag = nodes[1]  ; nodes.push( ab,af ); links.push( {source: af , target: ag },{source: af , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'cleon'},ag = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ae af ag */ var  ae = nodes[0] ,af = {id: 'af', name:'hanswurst'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ab ac ag */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'isabelle'},ac = {id: 'ac', name:'clarisse'},ag = nodes[0]  ; nodes.push( aa,ab,ac ); links.push( {source: ab , target: ag },{source: ab , target: ac },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac af ag */ var  ac = nodes[0] ,af = {id: 'af', name:'hanswurst'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'leander'},ag = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ac ad ag */ var  ac = {id: 'ac', name:'clarisse'},ad = {id: 'ad', name:'clitander'},ag = nodes[0]  ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ad af ag */ var  aa = {id: 'aa', name:'leander'},ad = nodes[0] ,af = {id: 'af', name:'hanswurst'},ag = nodes[1]  ; nodes.push( aa,af ); links.push( {source: af , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ab ad ae ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'isabelle'},ad = nodes[1] ,ae = {id: 'ae', name:'cleon'},ag = nodes[2]  ; nodes.push( ab,ae ); links.push( {source: ae , target: ag },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ad },{source: ad , target: ae },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'clarisse'},ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'hanswurst'},ag = nodes[4]  ; nodes.push( ac,af ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ae','aa','ac','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ac ae af ag */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'isabelle'},ac = {id: 'ac', name:'clarisse'},ae = {id: 'ae', name:'cleon'},af = nodes[0] ,ag = nodes[1]  ; nodes.push( aa,ab,ac,ae ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ac af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,af = nodes[3]  ; /* nodes.push(); */ links.push( {source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab },{source: ac , target: af },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '18. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter und letzter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 175000);
