setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'leonore'},ab = {id: 'ab', name:'arabella'},ac = {id: 'ac', name:'rosa'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ad = {id: 'ad', name:'gianettino'},ae = {id: 'ae', name:'mohr'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ah = {id: 'ah', name:'julia'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = {id: 'ad', name:'gianettino'},aj = {id: 'aj', name:'gäste'},ak = {id: 'ak', name:'lomellin'} ; nodes.push( ad,aj,ak ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = nodes[0],ai = {id: 'ai', name:'fiesco'},aj = nodes[1],ak = nodes[2],am = {id: 'am', name:'eine_von_den_drei_masken'} ; nodes.push( ai,am ); links.push( {source: ai , target: ak },{source: ai , target: am },{source: ai , target: aj },{source: ak , target: am },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: am },{source: ad , target: aj },{source: aj , target: ak },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ak','ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},ai = nodes[1],al = {id: 'al', name:'masken'},am = nodes[4],an = {id: 'an', name:'verrina'} ; nodes.push( af,ag,al,an ); links.push( {source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: af , target: ai },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ag },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'al','an','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ai = nodes[2],am = nodes[4],ao = {id: 'ao', name:'bourgognino'} ; nodes.push( ao ); links.push( {source: am , target: ao },{source: ai , target: am },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ae = {id: 'ae', name:'mohr'},ai = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  an = {id: 'an', name:'verrina'},ap = {id: 'ap', name:'berta'} ; nodes.push( an,ap ); links.push( {source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},an = nodes[0],ap = nodes[1] ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: af , target: an },{source: af , target: ap },{source: ag , target: an },{source: ag , target: ap },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  af = nodes[0],ag = nodes[1],an = nodes[2],ao = {id: 'ao', name:'bourgognino'} ; nodes.push( ao ); links.push( {source: an , target: ao },{source: af , target: ao },{source: af , target: an },{source: af , target: ag },{source: ag , target: ao },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  af = nodes[0],an = nodes[2],ao = nodes[3] ; /* nodes.push(); */ links.push( {source: af , target: an },{source: af , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = {id: 'aa', name:'leonore'},ab = {id: 'ab', name:'arabella'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = nodes[0],ab = nodes[1],ah = {id: 'ah', name:'julia'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],af = {id: 'af', name:'calcagno'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ae = {id: 'ae', name:'mohr'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ai = nodes[1],aq = {id: 'aq', name:'zibo'},ar = {id: 'ar', name:'zenturione'},as = {id: 'as', name:'asserato'} ; nodes.push( aq,ar,as ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: ar , target: as },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ai = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = {id: 'ae', name:'mohr'},ai = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ai = nodes[1],at = {id: 'at', name:'einige'},au = {id: 'au', name:'erster_bürger'},au = {id: 'au', name:'erster_bürger'},au = {id: 'au', name:'erster_bürger'},av = {id: 'av', name:'zweiter'},aw = {id: 'aw', name:'ein_dritter'} ; nodes.push( at,au,av,aw ); links.push( {source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: au },{source: at , target: au },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: au },{source: ai , target: au },{source: au , target: av },{source: au , target: aw },{source: au , target: av },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'at','au','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = {id: 'ae', name:'mohr'},ai = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'leonore'},ac = {id: 'ac', name:'rosa'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ac = nodes[1],ax = {id: 'ax', name:'bella'} ; nodes.push( ax ); links.push( {source: aa , target: ax },{source: aa , target: ac },{source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ax','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = {id: 'ad', name:'gianettino'},ak = {id: 'ak', name:'lomellin'},ay = {id: 'ay', name:'andreas'} ; nodes.push( ad,ak,ay ); links.push( {source: ad , target: ak },{source: ad , target: ay },{source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ad = nodes[0],ay = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ad = nodes[0],ak = {id: 'ak', name:'lomellin'} ; nodes.push( ak ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ae = {id: 'ae', name:'mohr'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ai = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ai = nodes[0],an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},az = {id: 'az', name:'romano'} ; nodes.push( an,ao,az ); links.push( {source: ai , target: an },{source: ai , target: ao },{source: ai , target: az },{source: an , target: ao },{source: an , target: az },{source: ao , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ai = nodes[0],an = nodes[1],ao = nodes[2] ; /* nodes.push(); */ links.push( {source: ai , target: an },{source: ai , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ai = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ao','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ai = {id: 'ai', name:'fiesco'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'leonore'},ai = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ae = {id: 'ae', name:'mohr'},ai = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},ai = nodes[1],an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'} ; nodes.push( af,ag,an,ao ); links.push( {source: ai , target: an },{source: ai , target: ao },{source: an , target: ao },{source: af , target: ai },{source: af , target: an },{source: af , target: ao },{source: af , target: ag },{source: ag , target: ai },{source: ag , target: an },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'an','ao','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ae = {id: 'ae', name:'mohr'},ai = nodes[2] ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = {id: 'ad', name:'gianettino'},ah = {id: 'ah', name:'julia'} ; nodes.push( ad,ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ad = nodes[0],ah = nodes[1],ak = {id: 'ak', name:'lomellin'} ; nodes.push( ak ); links.push( {source: ad , target: ak },{source: ad , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ad = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'fiesco'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: ad , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ad = nodes[0],ah = nodes[1],ai = nodes[2],ba = {id: 'ba', name:'teutscher'} ; nodes.push( ba ); links.push( {source: ad , target: ba },{source: ad , target: ai },{source: ad , target: ah },{source: ai , target: ba },{source: ah , target: ba },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ad','ba','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ao = {id: 'ao', name:'bourgognino'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ar = {id: 'ar', name:'zenturione'},bb = {id: 'bb', name:'wachen'},bb = {id: 'bb', name:'wachen'},bc = {id: 'bc', name:'schildwachen_am_hoftor'} ; nodes.push( ar,bb,bc ); links.push( {source: bb , target: bc },{source: ar , target: bb },{source: ar , target: bc },{source: ar , target: bb },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  aq = {id: 'aq', name:'zibo'},ar = nodes[0],bb = nodes[1],bc = nodes[3] ; nodes.push( aq ); links.push( {source: aq , target: ar },{source: aq , target: bb },{source: aq , target: bc },{source: ar , target: bb },{source: ar , target: bc },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  aq = nodes[0],ar = nodes[1],as = {id: 'as', name:'asserato'},bb = nodes[2],bc = nodes[3] ; nodes.push( as ); links.push( {source: as , target: bc },{source: as , target: bb },{source: aq , target: as },{source: aq , target: ar },{source: aq , target: bc },{source: aq , target: bb },{source: ar , target: as },{source: ar , target: bc },{source: ar , target: bb },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'as','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ag = {id: 'ag', name:'sacco'},an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},aq = nodes[0],ar = nodes[1],bc = nodes[4],bc = nodes[4] ; nodes.push( ag,an,ao ); links.push( {source: an , target: bc },{source: an , target: bc },{source: an , target: aq },{source: an , target: ar },{source: an , target: ao },{source: aq , target: bc },{source: aq , target: bc },{source: aq , target: ar },{source: ag , target: bc },{source: ag , target: bc },{source: ag , target: an },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ao },{source: ar , target: bc },{source: ar , target: bc },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: aq },{source: ao , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  af = {id: 'af', name:'calcagno'},ag = nodes[0],ai = {id: 'ai', name:'fiesco'},an = nodes[1],ao = nodes[2],aq = nodes[3],ar = nodes[4],as = {id: 'as', name:'asserato'},bc = nodes[5],bc = nodes[5] ; nodes.push( af,ai,as ); links.push( {source: ai , target: an },{source: ai , target: ao },{source: ai , target: ar },{source: ai , target: aq },{source: ai , target: as },{source: ai , target: bc },{source: ai , target: bc },{source: an , target: ao },{source: an , target: ar },{source: an , target: aq },{source: an , target: as },{source: an , target: bc },{source: an , target: bc },{source: ao , target: ar },{source: ao , target: aq },{source: ao , target: as },{source: ao , target: bc },{source: ao , target: bc },{source: ag , target: ai },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ar },{source: ag , target: aq },{source: ag , target: as },{source: ag , target: bc },{source: ag , target: bc },{source: ar , target: as },{source: ar , target: bc },{source: ar , target: bc },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: bc },{source: aq , target: bc },{source: as , target: bc },{source: as , target: bc },{source: af , target: ai },{source: af , target: an },{source: af , target: ao },{source: af , target: ag },{source: af , target: ar },{source: af , target: aq },{source: af , target: as },{source: af , target: bc },{source: af , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ag','ar','aq','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  af = nodes[0],ai = nodes[2],an = nodes[3],ao = nodes[4],bc = nodes[8],bc = nodes[8],bd = {id: 'bd', name:'eine_stimme'} ; nodes.push( bd ); links.push( {source: af , target: ao },{source: af , target: ai },{source: af , target: an },{source: af , target: bc },{source: af , target: bc },{source: af , target: bd },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bd },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: bc },{source: ai , target: bc },{source: ai , target: bd },{source: an , target: ao },{source: an , target: bc },{source: an , target: bc },{source: an , target: bd },{source: bc , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'af','ao','an','bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ae = {id: 'ae', name:'mohr'},ai = nodes[1],ba = {id: 'ba', name:'teutscher'} ; nodes.push( ae,ba ); links.push( {source: ai , target: ba },{source: ae , target: ai },{source: ae , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ae = nodes[0],af = {id: 'af', name:'calcagno'},ai = nodes[1],an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},be = {id: 'be', name:'verschworene'},bh = {id: 'bh', name:'einige_verschworene'} ; nodes.push( af,an,ao,be,bh ); links.push( {source: be , target: bh },{source: ai , target: be },{source: ai , target: bh },{source: ai , target: an },{source: ai , target: ao },{source: an , target: be },{source: an , target: bh },{source: an , target: ao },{source: ao , target: be },{source: ao , target: bh },{source: af , target: be },{source: af , target: bh },{source: af , target: ai },{source: af , target: an },{source: af , target: ao },{source: ae , target: be },{source: ae , target: bh },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'be','bh','an','ao','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ai = nodes[2],bf = {id: 'bf', name:'bedienter'} ; nodes.push( bf ); links.push( {source: ai , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'bf','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  aa = {id: 'aa', name:'leonore'},ac = {id: 'ac', name:'rosa'},ax = {id: 'ax', name:'bella'} ; nodes.push( aa,ac,ax ); links.push( {source: aa , target: ac },{source: aa , target: ax },{source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'aa','ac','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ah = {id: 'ah', name:'julia'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  aa = {id: 'aa', name:'leonore'},ah = nodes[0],ai = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ai },{source: aa , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  aa = nodes[0],ai = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  ai = nodes[1],ao = {id: 'ao', name:'bourgognino'},be = {id: 'be', name:'verschworene'},bh = {id: 'bh', name:'einige_verschworene'} ; nodes.push( ao,be,bh ); links.push( {source: be , target: bh },{source: ai , target: be },{source: ai , target: bh },{source: ai , target: ao },{source: ao , target: be },{source: ao , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'be','bh','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  ai = nodes[0],ay = {id: 'ay', name:'andreas'} ; nodes.push( ay ); links.push( {source: ai , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ai','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ad = {id: 'ad', name:'gianettino'},ak = {id: 'ak', name:'lomellin'} ; nodes.push( ad,ak ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  ad = nodes[0],ak = nodes[1],ao = {id: 'ao', name:'bourgognino'},ar = {id: 'ar', name:'zenturione'} ; nodes.push( ao,ar ); links.push( {source: ao , target: ar },{source: ad , target: ao },{source: ad , target: ar },{source: ad , target: ak },{source: ak , target: ao },{source: ak , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ao','ar','ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  af = {id: 'af', name:'calcagno'},ay = {id: 'ay', name:'andreas'},ba = {id: 'ba', name:'teutscher'},bg = {id: 'bg', name:'teutsche'} ; nodes.push( af,ay,ba,bg ); links.push( {source: ba , target: bg },{source: ay , target: ba },{source: ay , target: bg },{source: af , target: ba },{source: af , target: ay },{source: af , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ba','ay','af','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  aa = {id: 'aa', name:'leonore'},ab = {id: 'ab', name:'arabella'},ag = {id: 'ag', name:'sacco'} ; nodes.push( aa,ab,ag ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  af = {id: 'af', name:'calcagno'},ag = nodes[2] ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  ae = {id: 'ae', name:'mohr'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  ao = {id: 'ao', name:'bourgognino'},ap = {id: 'ap', name:'berta'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67'); var  ai = {id: 'ai', name:'fiesco'},aq = {id: 'aq', name:'zibo'} ; nodes.push( ai,aq ); links.push( {source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68'); var  ae = {id: 'ae', name:'mohr'},ag = {id: 'ag', name:'sacco'},ai = nodes[0] ; nodes.push( ae,ag ); links.push( {source: ag , target: ai },{source: ae , target: ag },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69'); var  ai = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70'); var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},ai = nodes[0],aq = {id: 'aq', name:'zibo'},ar = {id: 'ar', name:'zenturione'} ; nodes.push( af,ag,aq,ar ); links.push( {source: ai , target: aq },{source: ai , target: ar },{source: af , target: ai },{source: af , target: aq },{source: af , target: ar },{source: af , target: ag },{source: aq , target: ar },{source: ag , target: ai },{source: ag , target: aq },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [ 'ar','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71'); var  ab = {id: 'ab', name:'arabella'},af = nodes[0],ai = nodes[2],aq = nodes[3],bh = {id: 'bh', name:'einige_verschworene'} ; nodes.push( ab,bh ); links.push( {source: ab , target: ai },{source: ab , target: bh },{source: ab , target: af },{source: ab , target: aq },{source: ai , target: bh },{source: ai , target: aq },{source: af , target: ai },{source: af , target: bh },{source: af , target: aq },{source: aq , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'ab','ai','bh','af','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72'); var  ak = {id: 'ak', name:'lomellin'},ay = {id: 'ay', name:'andreas'} ; nodes.push( ak,ay ); links.push( {source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 355000);

setTimeout(function() { console.log('remv72'); var rm = [ 'ay','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 358750);

setTimeout(function() { console.log('load73'); var  an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},ap = {id: 'ap', name:'berta'} ; nodes.push( an,ao,ap ); links.push( {source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 360000);

setTimeout(function() { console.log('remv73'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 363750);

setTimeout(function() { console.log('load74'); var  ai = {id: 'ai', name:'fiesco'},an = nodes[0] ; nodes.push( ai ); links.push( {source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 365000);

setTimeout(function() { console.log('remv74'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 368750);

setTimeout(function() { console.log('load75'); var  af = {id: 'af', name:'calcagno'},an = nodes[1],ar = {id: 'ar', name:'zenturione'} ; nodes.push( af,ar ); links.push( {source: af , target: an },{source: af , target: ar },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 370000);