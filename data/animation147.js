setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'die_gesellen'},ab = {id: 'ab', name:'graf'},ac = {id: 'ac', name:'georg'},ad = {id: 'ad', name:'geselle'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],aa = nodes[0],ac = nodes[2],ae = {id: 'ae', name:'stadinger'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = {id: 'ab', name:'graf'},ac = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  af = {id: 'af', name:'brenner'},ag = {id: 'ag', name:'adelhof'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  af = nodes[0],ag = nodes[1],ah = {id: 'ah', name:'irmentraut'} ; nodes.push( ah ); links.push( {source: ag , target: ah },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ah = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ah = nodes[0],ai = {id: 'ai', name:'marie'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = {id: 'ab', name:'graf'},ah = nodes[0],ai = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = {id: 'aa', name:'die_gesellen'},ab = nodes[0],ac = {id: 'ac', name:'georg'},ae = {id: 'ae', name:'stadinger'},ah = nodes[1],ai = nodes[2] ; nodes.push( aa,ac,ae ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ae },{source: ah , target: ai },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ae },{source: ae , target: ai },{source: ae , target: ah },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],aa = nodes[0],ac = nodes[2],ae = nodes[3],ah = nodes[4],ai = nodes[5] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ah },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ah },{source: ah , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa','ae','ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ai = nodes[5] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'graf'},ai = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = nodes[0],ah = {id: 'ah', name:'irmentraut'},ai = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: ai },{source: ab , target: ah },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ac = {id: 'ac', name:'georg'},ah = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = {id: 'ab', name:'graf'},ac = nodes[0],ae = {id: 'ae', name:'stadinger'},ah = nodes[1],ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ae,ai ); links.push( {source: ae , target: ah },{source: ae , target: ai },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = nodes[0],ac = nodes[1],ae = nodes[2],ag = {id: 'ag', name:'adelhof'},ah = nodes[3],ai = nodes[4] ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ah },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ag','ae','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ab = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ab = nodes[0],ac = nodes[1],ae = {id: 'ae', name:'stadinger'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = nodes[2],ag = {id: 'ag', name:'adelhof'} ; nodes.push( ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = nodes[0],af = {id: 'af', name:'brenner'},ag = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = nodes[0],ag = nodes[2],ah = {id: 'ah', name:'irmentraut'} ; nodes.push( ah ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  af = {id: 'af', name:'brenner'},ag = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = {id: 'ac', name:'georg'},ad = {id: 'ad', name:'geselle'},ae = {id: 'ae', name:'stadinger'},aj = {id: 'aj', name:'chor'} ; nodes.push( ac,ad,ae,aj ); links.push( {source: ad , target: ae },{source: ad , target: aj },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: aj },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = nodes[0],ae = nodes[2],af = {id: 'af', name:'brenner'},ag = {id: 'ag', name:'adelhof'} ; nodes.push( af,ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = {id: 'ab', name:'graf'},ac = nodes[0],ae = nodes[1],af = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'irmentraut'},ai = {id: 'ai', name:'marie'},aj = {id: 'aj', name:'chor'},ak = {id: 'ak', name:'einige_männer'} ; nodes.push( ab,ah,ai,aj,ak ); links.push( {source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: ak },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj },{source: af , target: ai },{source: af , target: ak },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ak },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ak },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah','ae','af','ac','ag','aj','ab','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ai = nodes[6] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ae = {id: 'ae', name:'stadinger'},af = {id: 'af', name:'brenner'},ai = nodes[0] ; nodes.push( ae,af ); links.push( {source: af , target: ai },{source: ae , target: af },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = {id: 'ac', name:'georg'},ae = nodes[0],ai = nodes[2] ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ai },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ad = {id: 'ad', name:'geselle'},ae = nodes[1],af = {id: 'af', name:'brenner'} ; nodes.push( ad,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ab = {id: 'ab', name:'graf'},ac = {id: 'ac', name:'georg'},ae = nodes[1],af = nodes[2],ah = {id: 'ah', name:'irmentraut'},ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ac,ah,ai ); links.push( {source: ae , target: ai },{source: ae , target: ah },{source: ae , target: af },{source: ah , target: ai },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: af , target: ai },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = nodes[0],ac = nodes[1],ae = nodes[2],af = nodes[3],ag = {id: 'ag', name:'adelhof'},ah = nodes[4],ai = nodes[5] ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: ah , target: ai },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ah },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ag','ai','ah','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ae = nodes[2],af = nodes[3] ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ac = {id: 'ac', name:'georg'},ae = nodes[0],ah = {id: 'ah', name:'irmentraut'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ae },{source: ac , target: ah },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ab = {id: 'ab', name:'graf'},ac = nodes[0],ad = {id: 'ad', name:'geselle'},ae = nodes[1],af = {id: 'af', name:'brenner'},ah = nodes[2],ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ad,af,ai ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ah },{source: af , target: ai },{source: af , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad','ac','ai','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ae = nodes[3],af = nodes[4] ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ab = {id: 'ab', name:'graf'},ac = {id: 'ac', name:'georg'},ae = nodes[0],af = nodes[1],ah = {id: 'ah', name:'irmentraut'},ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ac,ah,ai ); links.push( {source: ae , target: ai },{source: ae , target: af },{source: ae , target: ah },{source: af , target: ai },{source: af , target: ah },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ah },{source: ah , target: ai },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 180000);