setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'rosa'},ab = {id: 'ab', name:'meissner'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.17391304347826087%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'gollwitz'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.347826086956521739%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad ae */ var  ac = nodes[0] ,ad = {id: 'ad', name:'neumeister'},ae = {id: 'ae', name:'marianne'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.521739130434782609%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac ad ae */ var  aa = {id: 'aa', name:'rosa'},ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.695652173913043478%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'striese'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.869565217391304348%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'gollwitz'},af = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.043478260869565217%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ac af ag */ var  aa = {id: 'aa', name:'rosa'},ac = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'gross'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.217391304347826087%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ac af */ var  aa = nodes[0] ,ac = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ac },{source: aa , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.391304347826086957%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.565217391304347826%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ah ai */ var  aa = nodes[0] ,ah = {id: 'ah', name:'friederike'},ai = {id: 'ai', name:'paula'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: aa , target: ah },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.739130434782608696%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ah ai */ var  ac = {id: 'ac', name:'gollwitz'},ah = nodes[0] ,ai = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.913043478260869565%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ad aj ak */ var  ad = {id: 'ad', name:'neumeister'},aj = {id: 'aj', name:'auguste'},ak = {id: 'ak', name:'sterneck'} ; nodes.push( ad,aj,ak ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.086956521739130435%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad ae ak */ var  ad = nodes[0] ,ae = {id: 'ae', name:'marianne'},ak = nodes[1]  ; nodes.push( ae ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.260869565217391304%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.434782608695652174%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ad ae ah ai */ var  ad = nodes[0] ,ae = nodes[1] ,ah = {id: 'ah', name:'friederike'},ai = {id: 'ai', name:'paula'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ae , target: ai },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.608695652173913043%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ai ak */ var  ai = nodes[0] ,ak = {id: 'ak', name:'sterneck'} ; nodes.push( ak ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.782608695652173913%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ai ak */ var  ac = {id: 'ac', name:'gollwitz'},ai = nodes[0] ,ak = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ak },{source: ac , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.956521739130434783%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ah ai */ var  ac = nodes[0] ,ah = {id: 'ah', name:'friederike'},ai = nodes[1]  ; nodes.push( ah ); links.push( {source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.130434782608695652%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ad ae ah */ var  ac = nodes[0] ,ad = {id: 'ad', name:'neumeister'},ae = {id: 'ae', name:'marianne'},ah = nodes[1]  ; nodes.push( ad,ae ); links.push( {source: ad , target: ah },{source: ad , target: ae },{source: ae , target: ah },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.304347826086956522%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac ad af */ var  ac = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'striese'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.478260869565217391%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ah */ var  ad = nodes[0] ,ah = {id: 'ah', name:'friederike'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.652173913043478261%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* af ah */ var  af = {id: 'af', name:'striese'},ah = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.82608695652173913%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ad af ah */ var  ad = {id: 'ad', name:'neumeister'},af = nodes[0] ,ah = nodes[1]  ; nodes.push( ad ); links.push( {source: af , target: ah },{source: ad , target: ah },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ah','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac ai */ var  ac = {id: 'ac', name:'gollwitz'},ai = {id: 'ai', name:'paula'} ; nodes.push( ac,ai ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.17391304347826087%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ac ai */ var  aa = {id: 'aa', name:'rosa'},ac = nodes[0] ,ai = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ai },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.347826086956521739%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac af ak */ var  ac = nodes[0] ,af = {id: 'af', name:'striese'},ak = {id: 'ak', name:'sterneck'} ; nodes.push( af,ak ); links.push( {source: ac , target: af },{source: ac , target: ak },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.521739130434782609%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ak */ var  aa = {id: 'aa', name:'rosa'},ak = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.695652173913043478%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ai ak */ var  aa = nodes[0] ,ai = {id: 'ai', name:'paula'},ak = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: ak },{source: aa , target: ai },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.869565217391304348%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ak */ var  aa = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.043478260869565217%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa af ak */ var  aa = nodes[0] ,af = {id: 'af', name:'striese'},ak = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ak },{source: aa , target: af },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.217391304347826087%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'af','ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ac ad ai */ var  ac = {id: 'ac', name:'gollwitz'},ad = {id: 'ad', name:'neumeister'},ai = {id: 'ai', name:'paula'} ; nodes.push( ac,ad,ai ); links.push( {source: ad , target: ai },{source: ac , target: ad },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.391304347826086957%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac ad ae ah ai */ var  ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'marianne'},ah = {id: 'ah', name:'friederike'},ai = nodes[2]  ; nodes.push( ae,ah ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ai },{source: ae , target: ah },{source: ae , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.565217391304347826%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ac','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae ag ah */ var  ae = nodes[0] ,ag = {id: 'ag', name:'gross'},ah = nodes[1]  ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.739130434782608696%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae ah ai */ var  ae = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'paula'} ; nodes.push( ai ); links.push( {source: ae , target: ai },{source: ae , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.913043478260869565%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ae ah ai */ var  aa = {id: 'aa', name:'rosa'},ae = nodes[0] ,ah = nodes[1] ,ai = nodes[2]  ; nodes.push( aa ); links.push( {source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ai },{source: ah , target: ai },{source: ae , target: ah },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.086956521739130435%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ac ad ae ah */ var  ac = {id: 'ac', name:'gollwitz'},ad = {id: 'ad', name:'neumeister'},ae = nodes[0] ,ah = nodes[1]  ; nodes.push( ac,ad ); links.push( {source: ad , target: ae },{source: ad , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '13. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.260869565217391304%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ac ad af */ var  ac = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'striese'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '14. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.434782608695652174%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ac ad af ah */ var  aa = {id: 'aa', name:'rosa'},ac = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,ah = {id: 'ah', name:'friederike'} ; nodes.push( aa,ah ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: af , target: ah },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: af },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '15. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.608695652173913043%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ac af */ var  aa = nodes[0] ,ac = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: af },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.782608695652173913%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa af ai ak */ var  aa = nodes[0] ,af = nodes[1] ,ai = {id: 'ai', name:'paula'},ak = {id: 'ak', name:'sterneck'} ; nodes.push( ai,ak ); links.push( {source: af , target: ak },{source: af , target: ai },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.956521739130434783%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa af ai ak */ var  aa = nodes[0] ,af = nodes[1] ,ai = nodes[2] ,ak = nodes[3]  ; /* nodes.push(); */ links.push( {source: ai , target: ak },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ak },{source: af , target: ai },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.130434782608695652%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ai','aa','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'gollwitz'},af = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.304347826086956522%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ac ae ah */ var  ac = nodes[0] ,ae = {id: 'ae', name:'marianne'},ah = {id: 'ah', name:'friederike'} ; nodes.push( ae,ah ); links.push( {source: ae , target: ah },{source: ac , target: ae },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.478260869565217391%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ac ag ah */ var  ac = nodes[0] ,ag = {id: 'ag', name:'gross'},ah = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.652173913043478261%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ac ad ae ag ah ak */ var  ac = nodes[0] ,ad = {id: 'ad', name:'neumeister'},ae = {id: 'ae', name:'marianne'},ag = nodes[1] ,ah = nodes[2] ,ak = {id: 'ak', name:'sterneck'} ; nodes.push( ad,ae,ak ); links.push( {source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ah , target: ak },{source: ag , target: ak },{source: ag , target: ah },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ae },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.82608695652173913%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ak','ag','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa ac af ah */ var  aa = {id: 'aa', name:'rosa'},ac = nodes[0] ,af = {id: 'af', name:'striese'},ah = nodes[1]  ; nodes.push( aa,af ); links.push( {source: af , target: ah },{source: ac , target: af },{source: ac , target: ah },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 225000);
