setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'volpin'},ab = {id: 'ab', name:'lisel'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[1],ac = {id: 'ac', name:'johann'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'volpin'},ab = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = {id: 'ab', name:'lisel'},ad = {id: 'ad', name:'fränzl'} ; nodes.push( ab,ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = {id: 'ab', name:'lisel'},ae = {id: 'ae', name:'frau_von_habicht_allein'},af = {id: 'af', name:'fräule_allein'} ; nodes.push( ab,ae,af ); links.push( {source: ab , target: ae },{source: ab , target: af },{source: ae , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ae = nodes[2],af = nodes[3] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ac = {id: 'ac', name:'johann'},ad = {id: 'ad', name:'fränzl'},ae = nodes[1],af = nodes[2] ; nodes.push( ac,ad ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: af },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae','ad','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ac = nodes[1],ag = {id: 'ag', name:'bär'},ah = {id: 'ah', name:'wolf'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ag = nodes[1],ah = nodes[2] ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ae = {id: 'ae', name:'frau_von_habicht_allein'},af = {id: 'af', name:'fräule_allein'},ag = nodes[0],ah = nodes[1] ; nodes.push( ae,af ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = {id: 'aa', name:'volpin'},ac = {id: 'ac', name:'johann'},ae = nodes[0],af = nodes[1],ag = nodes[2],ah = nodes[3] ; nodes.push( aa,ac ); links.push( {source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = nodes[0],ae = nodes[2],af = nodes[3],ag = nodes[4],ah = nodes[5] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = nodes[0],ac = {id: 'ac', name:'johann'},ae = nodes[1],af = nodes[2],ag = nodes[3],ah = nodes[4] ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ag , target: ah },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ae = nodes[2],ag = nodes[4],ai = {id: 'ai', name:'chor'},aj = {id: 'aj', name:'chloe'},ak = {id: 'ak', name:'daphne'},al = {id: 'al', name:'ganymedes'},am = {id: 'am', name:'tirus'},an = {id: 'an', name:'dardos'} ; nodes.push( ai,aj,ak,al,am,an ); links.push( {source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ae','aa','ai','aj','ak','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ag = nodes[2],ah = {id: 'ah', name:'wolf'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ag = nodes[0],ah = nodes[1],ao = {id: 'ao', name:'jakob'} ; nodes.push( ao ); links.push( {source: ag , target: ao },{source: ag , target: ah },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = {id: 'aa', name:'volpin'},ag = nodes[0],ah = nodes[1] ; nodes.push( aa ); links.push( {source: ag , target: ah },{source: aa , target: ag },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ag = nodes[1],ah = nodes[2] ; /* nodes.push(); */ links.push( {source: ag , target: ah },{source: aa , target: ah },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ag = nodes[1],ag = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'volpin'},ah = {id: 'ah', name:'wolf'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ah = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ag = {id: 'ag', name:'bär'},ah = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = {id: 'ab', name:'lisel'},ag = nodes[0],ag = nodes[0],ah = nodes[1],ah = nodes[1],ap = {id: 'ap', name:'peter'} ; nodes.push( ab,ap ); links.push( {source: ah , target: ap },{source: ab , target: ap },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ag },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: ah },{source: ah , target: ap },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = {id: 'aa', name:'volpin'},aa = {id: 'aa', name:'volpin'},ab = nodes[0],ag = nodes[1],ag = nodes[1],ah = nodes[3],ah = nodes[3],ai = {id: 'ai', name:'chor'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ai },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ai },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ai },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aa','ab','ag','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = {id: 'ac', name:'johann'},ad = {id: 'ad', name:'fränzl'},ae = {id: 'ae', name:'frau_von_habicht_allein'},af = {id: 'af', name:'fräule_allein'} ; nodes.push( ac,ad,ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = {id: 'ab', name:'lisel'},ad = nodes[1],ae = nodes[2] ; nodes.push( ab ); links.push( {source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ae = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ab = {id: 'ab', name:'lisel'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ac = {id: 'ac', name:'johann'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  af = {id: 'af', name:'fräule_allein'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = {id: 'aa', name:'volpin'},ab = {id: 'ab', name:'lisel'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'johann'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = nodes[0],ab = nodes[2],ac = nodes[3],ae = {id: 'ae', name:'frau_von_habicht_allein'},af = {id: 'af', name:'fräule_allein'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ac , target: ae },{source: ac , target: af },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ae = nodes[3],af = nodes[4] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = nodes[0],aa = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ad = {id: 'ad', name:'fränzl'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = {id: 'aa', name:'volpin'},af = {id: 'af', name:'fräule_allein'} ; nodes.push( aa,af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ab = {id: 'ab', name:'lisel'},ac = {id: 'ac', name:'johann'},ad = {id: 'ad', name:'fränzl'},ae = {id: 'ae', name:'frau_von_habicht_allein'},af = nodes[1],ag = {id: 'ag', name:'bär'},ah = {id: 'ah', name:'wolf'} ; nodes.push( ab,ac,ad,ae,ag,ah ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ac },{source: af , target: ag },{source: af , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ab','af','ae','ag','ah','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ai = {id: 'ai', name:'chor'},aq = {id: 'aq', name:'tomaso'} ; nodes.push( ai,aq ); links.push( {source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'aq','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ab = {id: 'ab', name:'lisel'},ac = {id: 'ac', name:'johann'},ad = {id: 'ad', name:'fränzl'} ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ab = nodes[0],ac = nodes[1],ad = nodes[2],ae = {id: 'ae', name:'frau_von_habicht_allein'},ag = {id: 'ag', name:'bär'},aq = {id: 'aq', name:'tomaso'} ; nodes.push( ae,ag,aq ); links.push( {source: ac , target: aq },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ab , target: ac },{source: ab , target: aq },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ad , target: aq },{source: ad , target: ae },{source: ad , target: ag },{source: ae , target: aq },{source: ae , target: ag },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ac','ab','ad','ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ah = {id: 'ah', name:'wolf'},aq = nodes[5] ; nodes.push( ah ); links.push( {source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'aq','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ae = {id: 'ae', name:'frau_von_habicht_allein'},ag = {id: 'ag', name:'bär'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ae = nodes[0],ae = nodes[0],af = {id: 'af', name:'fräule_allein'},af = {id: 'af', name:'fräule_allein'},ag = nodes[1],ag = nodes[1],ah = {id: 'ah', name:'wolf'},ah = {id: 'ah', name:'wolf'},aq = {id: 'aq', name:'tomaso'} ; nodes.push( af,ah,aq ); links.push( {source: ah , target: aq },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ah },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: af , target: ah },{source: af , target: ag },{source: af , target: aq },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ah },{source: ah , target: aq },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: af , target: ah },{source: af , target: ag },{source: af , target: aq },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Ein und zwanzigster Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ae = nodes[0],af = nodes[2],ag = nodes[4],ah = nodes[6],aq = nodes[8] ; /* nodes.push(); */ links.push( {source: ae , target: aq },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: aq },{source: af , target: ag },{source: af , target: ah },{source: ag , target: aq },{source: ag , target: ah },{source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwei und zwanzigster Auftritt.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  aa = {id: 'aa', name:'volpin'},ac = {id: 'ac', name:'johann'},ae = nodes[0],af = nodes[1],ag = nodes[2],ah = nodes[3],ai = {id: 'ai', name:'chor'},aq = nodes[4] ; nodes.push( aa,ac,ai ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: aq },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ai },{source: ah , target: aq },{source: ah , target: ai },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: aq },{source: aa , target: ac },{source: aa , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: aq },{source: ac , target: ai },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 245000);