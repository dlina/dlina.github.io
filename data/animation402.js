setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'albertine'},ab = {id: 'ab', name:'frau_gieseke'},ac = {id: 'ac', name:'franziska'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = nodes[2],ad = {id: 'ad', name:'emilie'},ae = {id: 'ae', name:'frau_klinkert'} ; nodes.push( ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ad = nodes[2],ae = nodes[3] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ad = nodes[1],ae = nodes[2],af = {id: 'af', name:'rosa'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ad },{source: aa , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af','aa','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ag = {id: 'ag', name:'anna'},ah = {id: 'ah', name:'hasemann'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ah = nodes[1],ai = {id: 'ai', name:'körner'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'albertine'},ah = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],aj = {id: 'aj', name:'eduard'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aj = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ad = {id: 'ad', name:'emilie'},aj = nodes[0],ak = {id: 'ak', name:'wilhelm'} ; nodes.push( ad,ak ); links.push( {source: ad , target: ak },{source: ad , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ad = nodes[0],ah = {id: 'ah', name:'hasemann'},aj = nodes[1],ak = nodes[2] ; nodes.push( ah ); links.push( {source: ah , target: ak },{source: ah , target: aj },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = {id: 'aa', name:'albertine'},ad = nodes[0],ah = nodes[1],aj = nodes[2],ak = nodes[3] ; nodes.push( aa ); links.push( {source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: aj },{source: ah , target: ak },{source: ah , target: aj },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'frau_klinkert'},ah = nodes[2],ak = nodes[4],al = {id: 'al', name:'klinkert'} ; nodes.push( ae,al ); links.push( {source: ae , target: al },{source: ae , target: ak },{source: ae , target: ah },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ad },{source: ak , target: al },{source: ah , target: al },{source: ah , target: ak },{source: ad , target: ae },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = nodes[0],ae = nodes[2],ag = {id: 'ag', name:'anna'},ah = nodes[3],ai = {id: 'ai', name:'körner'},aj = {id: 'aj', name:'eduard'},ak = nodes[4],al = nodes[5] ; nodes.push( ag,ai,aj ); links.push( {source: ag , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ak , target: al },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: aj },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ai },{source: ae , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '15. Szene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ag','ah','ak','al','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = nodes[0],ad = {id: 'ad', name:'emilie'},ae = nodes[1],ai = nodes[4] ; nodes.push( ad ); links.push( {source: ae , target: ai },{source: ad , target: ae },{source: ad , target: ai },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '16. Szene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ae = nodes[2],af = {id: 'af', name:'rosa'},ag = {id: 'ag', name:'anna'},ai = nodes[3] ; nodes.push( af,ag ); links.push( {source: af , target: ai },{source: af , target: ag },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ae },{source: ag , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '17. Szene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = nodes[0],ad = {id: 'ad', name:'emilie'},ae = nodes[1],af = nodes[2],ag = nodes[3],ai = nodes[4],am = {id: 'am', name:'zinnow'} ; nodes.push( ad,am ); links.push( {source: aa , target: am },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ae },{source: ai , target: am },{source: af , target: am },{source: af , target: ai },{source: af , target: ag },{source: ad , target: am },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ag , target: am },{source: ag , target: ai },{source: ae , target: am },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '18. Szene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ad','ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0],ac = {id: 'ac', name:'franziska'},af = nodes[3],ai = nodes[5],am = nodes[6] ; nodes.push( ac ); links.push( {source: ac , target: ai },{source: ac , target: am },{source: ac , target: af },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: am },{source: aa , target: af },{source: ai , target: am },{source: af , target: ai },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '19. Szene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'emilie'},ae = {id: 'ae', name:'frau_klinkert'},af = nodes[2],ag = {id: 'ag', name:'anna'},ai = nodes[3] ; nodes.push( ad,ae,ag ); links.push( {source: ag , target: ai },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: af },{source: af , target: ag },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '20. Szene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag','ac','aa','ae','ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = nodes[2],an = {id: 'an', name:'lohmann'},ao = {id: 'ao', name:'bartsch'},ap = {id: 'ap', name:'fritz'} ; nodes.push( an,ao,ap ); links.push( {source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = nodes[0],aj = {id: 'aj', name:'eduard'} ; nodes.push( aj ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ad = nodes[0],ak = {id: 'ak', name:'wilhelm'} ; nodes.push( ak ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = nodes[0],ak = nodes[1],ap = {id: 'ap', name:'fritz'} ; nodes.push( ap ); links.push( {source: ak , target: ap },{source: ad , target: ap },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ad = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = {id: 'aa', name:'albertine'},ad = nodes[0],ak = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ad },{source: aa , target: ak },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0],ad = nodes[1],ah = {id: 'ah', name:'hasemann'},ak = nodes[2],ap = {id: 'ap', name:'fritz'} ; nodes.push( ah,ap ); links.push( {source: ah , target: ap },{source: ah , target: ak },{source: ad , target: ah },{source: ad , target: ap },{source: ad , target: ak },{source: aa , target: ah },{source: aa , target: ap },{source: aa , target: ad },{source: aa , target: ak },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ap','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ad = nodes[1],ah = nodes[2],ak = nodes[3] ; /* nodes.push(); */ links.push( {source: ah , target: ak },{source: ad , target: ah },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ah','ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  af = {id: 'af', name:'rosa'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  af = nodes[0],aq = {id: 'aq', name:'marthe'} ; nodes.push( aq ); links.push( {source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = {id: 'aa', name:'albertine'},af = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],af = nodes[1],ai = {id: 'ai', name:'körner'} ; nodes.push( ai ); links.push( {source: aa , target: ai },{source: aa , target: af },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ai = nodes[2],ak = {id: 'ak', name:'wilhelm'} ; nodes.push( ak ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ai = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aj = {id: 'aj', name:'eduard'},aq = {id: 'aq', name:'marthe'} ; nodes.push( aj,aq ); links.push( {source: aj , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ai = {id: 'ai', name:'körner'},aq = nodes[1],ar = {id: 'ar', name:'dr'} ; nodes.push( ai,ar ); links.push( {source: aq , target: ar },{source: ai , target: aq },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ah = {id: 'ah', name:'hasemann'},ai = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  af = {id: 'af', name:'rosa'},ai = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  af = nodes[0],ah = {id: 'ah', name:'hasemann'} ; nodes.push( ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = {id: 'aa', name:'albertine'},ac = {id: 'ac', name:'franziska'},ad = {id: 'ad', name:'emilie'},ae = {id: 'ae', name:'frau_klinkert'} ; nodes.push( aa,ac,ad,ae ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = nodes[0],ad = nodes[2],ak = {id: 'ak', name:'wilhelm'} ; nodes.push( ak ); links.push( {source: aa , target: ak },{source: aa , target: ad },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = nodes[0],ac = {id: 'ac', name:'franziska'},ad = nodes[1],ae = {id: 'ae', name:'frau_klinkert'} ; nodes.push( ac,ae ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  aa = nodes[0],ae = nodes[3],ah = {id: 'ah', name:'hasemann'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ae },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  aa = nodes[0],ad = {id: 'ad', name:'emilie'},af = {id: 'af', name:'rosa'},ah = nodes[2] ; nodes.push( ad,af ); links.push( {source: aa , target: ah },{source: aa , target: ad },{source: aa , target: af },{source: ad , target: ah },{source: ad , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  aa = nodes[0],ac = {id: 'ac', name:'franziska'},ah = nodes[3] ; nodes.push( ac ); links.push( {source: aa , target: ah },{source: aa , target: ac },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  aa = nodes[0],ah = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ah = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ac = {id: 'ac', name:'franziska'},ah = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  aa = {id: 'aa', name:'albertine'},ac = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  aa = nodes[0],ak = {id: 'ak', name:'wilhelm'} ; nodes.push( ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ad = {id: 'ad', name:'emilie'},ak = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ad = nodes[0],ah = {id: 'ah', name:'hasemann'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  ah = nodes[1],ai = {id: 'ai', name:'körner'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene.';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ai = nodes[1],aj = {id: 'aj', name:'eduard'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '15. Szene.';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  af = {id: 'af', name:'rosa'},aj = nodes[1] ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '16. Szene.';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  af = nodes[0],ai = {id: 'ai', name:'körner'} ; nodes.push( ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '17. Szene.';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'af','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  ah = {id: 'ah', name:'hasemann'},aj = {id: 'aj', name:'eduard'} ; nodes.push( ah,aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '18. Szene.';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  aa = {id: 'aa', name:'albertine'},af = {id: 'af', name:'rosa'},ah = nodes[0] ; nodes.push( aa,af ); links.push( {source: aa , target: ah },{source: aa , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '19. Szene.';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ac = {id: 'ac', name:'franziska'},ah = nodes[2] ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '20. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = '20. Szene.';
}, 295000);