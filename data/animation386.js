setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'milli'},aa = {id: 'aa', name:'milli'},ab = {id: 'ab', name:'beschliesserin'},ac = {id: 'ac', name:'gärtner'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[2],ac = nodes[3],ad = {id: 'ad', name:'stimme_der_baronin'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = nodes[3],ae = {id: 'ae', name:'kutscher'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],af = {id: 'af', name:'general'},ag = {id: 'ag', name:'jaromir'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ag = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = nodes[0],ah = {id: 'ah', name:'stimme_des_kleinen_jaromir'},ai = {id: 'ai', name:'anna'} ; nodes.push( ah,ai ); links.push( {source: ad , target: ah },{source: ad , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ad = nodes[0],af = {id: 'af', name:'general'},ah = nodes[1],ai = nodes[2] ; nodes.push( af ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: ad , target: ai },{source: ah , target: ai },{source: af , target: ah },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ad = nodes[0],af = nodes[1],ai = nodes[3] ; /* nodes.push(); */ links.push( {source: ad , target: af },{source: ad , target: ai },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ad = nodes[0],ah = {id: 'ah', name:'stimme_des_kleinen_jaromir'},ai = nodes[2] ; nodes.push( ah ); links.push( {source: ah , target: ai },{source: ad , target: ah },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ad = nodes[0],af = {id: 'af', name:'general'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ad = nodes[0],af = nodes[1],aj = {id: 'aj', name:'theodor'} ; nodes.push( aj ); links.push( {source: af , target: aj },{source: ad , target: af },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ad = nodes[0],af = nodes[1],aj = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: aj },{source: ad , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = {id: 'aa', name:'milli'},ad = nodes[0],af = nodes[1],ak = {id: 'ak', name:'marie'} ; nodes.push( aa,ak ); links.push( {source: ad , target: ak },{source: ad , target: af },{source: af , target: ak },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ad = nodes[1],aj = {id: 'aj', name:'theodor'} ; nodes.push( aj ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = nodes[0],af = {id: 'af', name:'general'},ah = {id: 'ah', name:'stimme_des_kleinen_jaromir'},ai = {id: 'ai', name:'anna'},aj = nodes[1],al = {id: 'al', name:'melanie'} ; nodes.push( af,ah,ai,al ); links.push( {source: af , target: al },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: ai , target: al },{source: ai , target: aj },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ad , target: af },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'af','al','ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ah = nodes[2],ai = nodes[3] ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ag = {id: 'ag', name:'jaromir'},al = {id: 'al', name:'melanie'} ; nodes.push( ag,al ); links.push( {source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ag = nodes[0],al = nodes[1],am = {id: 'am', name:'hermine'} ; nodes.push( am ); links.push( {source: al , target: am },{source: ag , target: al },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'am','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aj = {id: 'aj', name:'theodor'},al = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'al','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  af = {id: 'af', name:'general'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ah = {id: 'ah', name:'stimme_des_kleinen_jaromir'},ai = {id: 'ai', name:'anna'},ak = {id: 'ak', name:'marie'} ; nodes.push( ah,ai,ak ); links.push( {source: ai , target: ak },{source: ah , target: ak },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aj = {id: 'aj', name:'theodor'},am = {id: 'am', name:'hermine'} ; nodes.push( aj,am ); links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ah = {id: 'ah', name:'stimme_des_kleinen_jaromir'},ai = {id: 'ai', name:'anna'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ak = {id: 'ak', name:'marie'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aj = {id: 'aj', name:'theodor'},ak = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ag = {id: 'ag', name:'jaromir'},ak = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ag = nodes[0],aj = {id: 'aj', name:'theodor'} ; nodes.push( aj ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aj = nodes[1],al = {id: 'al', name:'melanie'} ; nodes.push( al ); links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aj = nodes[0],al = nodes[1] ; /* nodes.push(); */ links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ag = {id: 'ag', name:'jaromir'},aj = nodes[0],al = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: al },{source: ag , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ag = nodes[0],aj = nodes[1],al = nodes[2],am = {id: 'am', name:'hermine'} ; nodes.push( am ); links.push( {source: aj , target: al },{source: aj , target: am },{source: al , target: am },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'al','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ah = {id: 'ah', name:'stimme_des_kleinen_jaromir'},aj = nodes[1],am = nodes[3] ; nodes.push( ah ); links.push( {source: aj , target: am },{source: ah , target: aj },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ah = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ac = {id: 'ac', name:'gärtner'},ad = {id: 'ad', name:'stimme_der_baronin'},aj = nodes[1],am = {id: 'am', name:'hermine'} ; nodes.push( ac,ad,am ); links.push( {source: aj , target: am },{source: ac , target: aj },{source: ac , target: am },{source: ac , target: ad },{source: ad , target: aj },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aj','ac','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ad = nodes[1],af = {id: 'af', name:'general'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = {id: 'aa', name:'milli'},ad = nodes[0],af = nodes[1],ai = {id: 'ai', name:'anna'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai },{source: aa , target: ad },{source: aa , target: af },{source: ad , target: ai },{source: ad , target: af },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aa','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ag = {id: 'ag', name:'jaromir'},ai = nodes[3],aj = {id: 'aj', name:'theodor'} ; nodes.push( ag,aj ); links.push( {source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ac = {id: 'ac', name:'gärtner'},ad = {id: 'ad', name:'stimme_der_baronin'},ad = {id: 'ad', name:'stimme_der_baronin'},af = {id: 'af', name:'general'},ag = nodes[0],ai = nodes[1],aj = nodes[2],ak = {id: 'ak', name:'marie'},al = {id: 'al', name:'melanie'} ; nodes.push( ac,ad,af,ak,al ); links.push( {source: ac , target: aj },{source: ac , target: ad },{source: ac , target: al },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: ad },{source: aj , target: al },{source: aj , target: ak },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: ak },{source: af , target: aj },{source: af , target: al },{source: af , target: ai },{source: af , target: ag },{source: af , target: ak },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: ai },{source: ag , target: ak },{source: ak , target: al },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ac','ad','al','af','ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ai = nodes[5],aj = nodes[6] ; /* nodes.push(); */ links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 190000);