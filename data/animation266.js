setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'don'},ab = {id: 'ab', name:'leporello'},ac = {id: 'ac', name:'der_alte_fischer'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.030303030303030303%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.060606060606060606%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'ghita'} ; nodes.push( ad ); links.push( {source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.121212121212121212%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = {id: 'ae', name:'der_karthäuser'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.151515151515151515%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa af ag */ var  aa = nodes[0] ,af = {id: 'af', name:'erster_strolch'},ag = {id: 'ag', name:'zweiter_strolch'} ; nodes.push( af,ag ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa af ag ah */ var  aa = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'gianotto'} ; nodes.push( ah ); links.push( {source: af , target: ah },{source: af , target: ag },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.212121212121212121%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ah ai aj */ var  aa = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'der_wirth'},aj = {id: 'aj', name:'biondetta'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.242424242424242424%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ah aj */ var  aa = nodes[0] ,ah = nodes[1] ,aj = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ah },{source: aa , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ad ah ai ak */ var  aa = nodes[0] ,ad = {id: 'ad', name:'ghita'},ah = nodes[1] ,ai = {id: 'ai', name:'der_wirth'},ak = {id: 'ak', name:'martina'} ; nodes.push( ad,ai,ak ); links.push( {source: ah , target: ak },{source: ah , target: ai },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ai },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.30303030303030303%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ak */ var  aa = nodes[0] ,ab = {id: 'ab', name:'leporello'},ak = nodes[1]  ; nodes.push( ab ); links.push( {source: aa , target: ab },{source: aa , target: ak },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ah aj */ var  aa = nodes[0] ,ah = {id: 'ah', name:'gianotto'},aj = {id: 'aj', name:'biondetta'} ; nodes.push( ah,aj ); links.push( {source: aa , target: ah },{source: aa , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad ah */ var  ad = {id: 'ad', name:'ghita'},ah = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.393939393939393939%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ad ah ak */ var  aa = {id: 'aa', name:'don'},ad = nodes[0] ,ah = nodes[1] ,ak = {id: 'ak', name:'martina'} ; nodes.push( aa,ak ); links.push( {source: ad , target: ak },{source: ad , target: ah },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.424242424242424242%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ak','ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'biondetta'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.484848484848484848%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.515151515151515152%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad ak */ var  ad = {id: 'ad', name:'ghita'},ak = {id: 'ak', name:'martina'} ; nodes.push( ad,ak ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ad ah */ var  aa = {id: 'aa', name:'don'},ad = nodes[0] ,ah = {id: 'ah', name:'gianotto'} ; nodes.push( aa,ah ); links.push( {source: ad , target: ah },{source: aa , target: ad },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.575757575757575758%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ad ah */ var  aa = nodes[0] ,ad = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: ad , target: ah },{source: aa , target: ah },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.606060606060606061%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ah','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'martina'},al = {id: 'al', name:'gräfin'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ad al */ var  ad = {id: 'ad', name:'ghita'},al = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* al am */ var  al = nodes[0] ,am = {id: 'am', name:'diener'} ; nodes.push( am ); links.push( {source: al , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.69696969696969697%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa al am */ var  aa = {id: 'aa', name:'don'},al = nodes[0] ,am = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: al },{source: aa , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aa','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah al */ var  ah = {id: 'ah', name:'gianotto'},al = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.757575757575757576%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ah al */ var  aa = {id: 'aa', name:'don'},ah = nodes[0] ,al = nodes[1]  ; nodes.push( aa ); links.push( {source: ah , target: al },{source: aa , target: ah },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.787878787878787879%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'leporello'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.848484848484848485%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = {id: 'ab', name:'leporello'},ae = {id: 'ae', name:'der_karthäuser'} ; nodes.push( ab,ae ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.878787878787878788%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ah */ var  aa = nodes[0] ,ah = {id: 'ah', name:'gianotto'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ac ah ak */ var  ac = {id: 'ac', name:'der_alte_fischer'},ah = nodes[0] ,ak = {id: 'ak', name:'martina'} ; nodes.push( ac,ak ); links.push( {source: ac , target: ak },{source: ac , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.939393939393939394%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac ah ak al an */ var  ac = nodes[0] ,ah = nodes[1] ,ak = nodes[2] ,al = {id: 'al', name:'gräfin'},an = {id: 'an', name:'stimmen'} ; nodes.push( al,an ); links.push( {source: al , target: an },{source: ak , target: al },{source: ak , target: an },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: an },{source: ac , target: ah },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.969696969696969697%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ac ae ah ai ak al */ var  aa = {id: 'aa', name:'don'},ab = {id: 'ab', name:'leporello'},ac = nodes[0] ,ae = {id: 'ae', name:'der_karthäuser'},ah = nodes[1] ,ai = {id: 'ai', name:'der_wirth'},ak = nodes[2] ,al = nodes[3]  ; nodes.push( aa,ab,ae,ai ); links.push( {source: ai , target: al },{source: ai , target: ak },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ac },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: ai },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: al },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ac },{source: ak , target: al },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: ai },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: ai },{source: ai , target: al },{source: ai , target: ak },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 160000);
