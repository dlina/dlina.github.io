setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'jarl'},ab = {id: 'ab', name:'erichson'},ac = {id: 'ac', name:'der_trabant_1.1'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[1],ae = {id: 'ae', name:'irma'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ae = nodes[1],af = {id: 'af', name:'asla'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'jarl'},ab = {id: 'ab', name:'erichson'},ae = nodes[0],af = nodes[1] ; nodes.push( aa,ab ); links.push( {source: ab , target: ae },{source: ab , target: af },{source: ae , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[1],ae = nodes[2],af = nodes[3],ag = {id: 'ag', name:'nös'},ah = {id: 'ah', name:'egrösund'},ai = {id: 'ai', name:'ourdal'},aj = {id: 'aj', name:'biörneland'} ; nodes.push( ag,ah,ai,aj ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: af },{source: ah , target: ai },{source: ah , target: aj },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: af },{source: ai , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'jarl'},ae = nodes[1],af = nodes[2],ag = nodes[3],ah = nodes[4],ai = nodes[5],aj = nodes[6],ak = {id: 'ak', name:'yngurds'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ae },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ak },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: aj , target: ak },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: af , target: ag },{source: af , target: ak },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa','ae','ai','ah','aj','af','ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  al = {id: 'al', name:'droll'},am = {id: 'am', name:'knaut'} ; nodes.push( al,am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  al = nodes[0],am = nodes[1],an = {id: 'an', name:'der_ritter'} ; nodes.push( an ); links.push( {source: al , target: an },{source: al , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  an = nodes[2],ao = {id: 'ao', name:'alf'},ap = {id: 'ap', name:'gyldenbrog'},aq = {id: 'aq', name:'eine_stimme'},ar = {id: 'ar', name:'eine_andere_stimme'} ; nodes.push( ao,ap,aq,ar ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'an','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ao = nodes[1],ap = nodes[2],as = {id: 'as', name:'der_ostländer'},at = {id: 'at', name:'der_knapp'} ; nodes.push( as,at ); links.push( {source: as , target: at },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: at },{source: ap , target: as },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'as','ap','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  al = {id: 'al', name:'droll'},am = {id: 'am', name:'knaut'},ao = nodes[0],au = {id: 'au', name:'stimmen'},av = {id: 'av', name:'andere_stimmen'},aw = {id: 'aw', name:'noch_andere'},ax = {id: 'ax', name:'oskar'},ay = {id: 'ay', name:'brunhilde'} ; nodes.push( al,am,au,av,aw,ax,ay ); links.push( {source: al , target: au },{source: al , target: av },{source: al , target: aw },{source: al , target: ao },{source: al , target: ax },{source: al , target: ay },{source: al , target: am },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ao , target: au },{source: ao , target: av },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ax , target: ay },{source: am , target: au },{source: am , target: av },{source: am , target: aw },{source: am , target: ao },{source: am , target: ax },{source: am , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'al','au','av','aw','ax','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ao = nodes[2],ay = nodes[7],az = {id: 'az', name:'der_krieger'},ba = {id: 'ba', name:'einer_aus_dem_gefolge'} ; nodes.push( az,ba ); links.push( {source: az , target: ba },{source: ao , target: az },{source: ao , target: ay },{source: ao , target: ba },{source: ay , target: az },{source: ay , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'az','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  an = {id: 'an', name:'der_ritter'},ao = nodes[0],ay = nodes[1] ; nodes.push( an ); links.push( {source: an , target: ao },{source: an , target: ay },{source: ao , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ak = {id: 'ak', name:'yngurds'},an = nodes[0],ao = nodes[1],ap = {id: 'ap', name:'gyldenbrog'},ax = {id: 'ax', name:'oskar'},ay = nodes[2],az = {id: 'az', name:'der_krieger'},ba = {id: 'ba', name:'einer_aus_dem_gefolge'} ; nodes.push( ak,ap,ax,az,ba ); links.push( {source: ak , target: ao },{source: ak , target: ay },{source: ak , target: ap },{source: ak , target: ax },{source: ak , target: an },{source: ak , target: az },{source: ak , target: ba },{source: ao , target: ay },{source: ao , target: ap },{source: ao , target: ax },{source: ao , target: az },{source: ao , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: ap , target: ay },{source: ap , target: ax },{source: ap , target: az },{source: ap , target: ba },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: an , target: ao },{source: an , target: ay },{source: an , target: ap },{source: an , target: ax },{source: an , target: az },{source: an , target: ba },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ak','ao','ay','ap','ax','an','az','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = {id: 'ab', name:'erichson'},ai = {id: 'ai', name:'ourdal'},bb = {id: 'bb', name:'ein_knappe'} ; nodes.push( ab,ai,bb ); links.push( {source: ai , target: bb },{source: ab , target: ai },{source: ab , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ai','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = {id: 'aa', name:'jarl'},ab = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = nodes[1],af = {id: 'af', name:'asla'},ag = {id: 'ag', name:'nös'},bc = {id: 'bc', name:'andere'},bc = {id: 'bc', name:'andere'},bc = {id: 'bc', name:'andere'} ; nodes.push( af,ag,bc ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: ab , target: bc },{source: ab , target: bc },{source: ab , target: bc },{source: af , target: ag },{source: af , target: bc },{source: af , target: bc },{source: af , target: bc },{source: ag , target: bc },{source: ag , target: bc },{source: ag , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  af = nodes[1],ag = nodes[2],aj = {id: 'aj', name:'biörneland'},ak = {id: 'ak', name:'yngurds'},at = {id: 'at', name:'der_knapp'},au = {id: 'au', name:'stimmen'},bc = nodes[3],bd = {id: 'bd', name:'biörnelands_heerhaufe'},be = {id: 'be', name:'kurl'},bf = {id: 'bf', name:'marduff'},bg = {id: 'bg', name:'ein_knapp'} ; nodes.push( aj,ak,at,au,bd,be,bf,bg ); links.push( {source: au , target: bd },{source: au , target: bc },{source: au , target: be },{source: au , target: bf },{source: au , target: bg },{source: ak , target: au },{source: ak , target: bd },{source: ak , target: bc },{source: ak , target: be },{source: ak , target: bf },{source: ak , target: bg },{source: ak , target: at },{source: aj , target: au },{source: aj , target: ak },{source: aj , target: bd },{source: aj , target: bc },{source: aj , target: be },{source: aj , target: bf },{source: aj , target: bg },{source: aj , target: at },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: be , target: bf },{source: be , target: bg },{source: ag , target: au },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: bd },{source: ag , target: bc },{source: ag , target: be },{source: ag , target: bf },{source: ag , target: bg },{source: ag , target: at },{source: bf , target: bg },{source: af , target: au },{source: af , target: ak },{source: af , target: aj },{source: af , target: bd },{source: af , target: bc },{source: af , target: be },{source: af , target: ag },{source: af , target: bf },{source: af , target: bg },{source: af , target: at },{source: at , target: au },{source: at , target: bd },{source: at , target: bc },{source: at , target: be },{source: at , target: bf },{source: at , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'au','aj','bd','bc','be','ag','bf','bg','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = {id: 'ae', name:'irma'},af = nodes[0],ak = nodes[3] ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: af },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = nodes[0],af = nodes[1],ak = nodes[2],bf = {id: 'bf', name:'marduff'} ; nodes.push( bf ); links.push( {source: ak , target: bf },{source: ae , target: bf },{source: ae , target: ak },{source: ae , target: af },{source: af , target: bf },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = nodes[0],af = nodes[1],ak = nodes[2],ax = {id: 'ax', name:'oskar'},be = {id: 'be', name:'kurl'},bf = nodes[3] ; nodes.push( ax,be ); links.push( {source: be , target: bf },{source: ak , target: be },{source: ak , target: ax },{source: ak , target: bf },{source: ae , target: be },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: ax },{source: ae , target: bf },{source: af , target: be },{source: af , target: ak },{source: af , target: ax },{source: af , target: bf },{source: ax , target: be },{source: ax , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'be','ak','ae','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  af = nodes[1],ax = nodes[3] ; /* nodes.push(); */ links.push( {source: af , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  af = nodes[0],ax = nodes[1],bf = {id: 'bf', name:'marduff'} ; nodes.push( bf ); links.push( {source: af , target: bf },{source: af , target: ax },{source: ax , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bf','af','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ae = {id: 'ae', name:'irma'},ak = {id: 'ak', name:'yngurds'},ak = {id: 'ak', name:'yngurds'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ak = nodes[1],bf = {id: 'bf', name:'marduff'} ; nodes.push( bf ); links.push( {source: ak , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ak = nodes[0],ao = {id: 'ao', name:'alf'} ; nodes.push( ao ); links.push( {source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = {id: 'ae', name:'irma'},af = {id: 'af', name:'asla'},ag = {id: 'ag', name:'nös'},ai = {id: 'ai', name:'ourdal'},aj = {id: 'aj', name:'biörneland'},ak = nodes[0],ao = nodes[1],ap = {id: 'ap', name:'gyldenbrog'},ax = {id: 'ax', name:'oskar'},bh = {id: 'bh', name:'das_volk'} ; nodes.push( ae,af,ag,ai,aj,ap,ax,bh ); links.push( {source: ag , target: bh },{source: ag , target: ak },{source: ag , target: ao },{source: ag , target: ax },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ap },{source: ak , target: bh },{source: ak , target: ao },{source: ak , target: ax },{source: ak , target: ap },{source: ao , target: bh },{source: ao , target: ax },{source: ao , target: ap },{source: ae , target: ag },{source: ae , target: bh },{source: ae , target: ak },{source: ae , target: ao },{source: ae , target: af },{source: ae , target: ax },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ap },{source: af , target: ag },{source: af , target: bh },{source: af , target: ak },{source: af , target: ao },{source: af , target: ax },{source: af , target: ai },{source: af , target: aj },{source: af , target: ap },{source: ax , target: bh },{source: ai , target: bh },{source: ai , target: ak },{source: ai , target: ao },{source: ai , target: ax },{source: ai , target: aj },{source: ai , target: ap },{source: aj , target: bh },{source: aj , target: ak },{source: aj , target: ao },{source: aj , target: ax },{source: aj , target: ap },{source: ap , target: bh },{source: ap , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ag','bh','ao','ae','af','ax','ai','aj','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ak = nodes[5],bf = {id: 'bf', name:'marduff'} ; nodes.push( bf ); links.push( {source: ak , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  bf = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ax = {id: 'ax', name:'oskar'},bf = nodes[0] ; nodes.push( ax ); links.push( {source: ax , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ax = nodes[0],bf = nodes[1] ; /* nodes.push(); */ links.push( {source: ax , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  bf = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ax = {id: 'ax', name:'oskar'},bf = nodes[0] ; nodes.push( ax ); links.push( {source: ax , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ax = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ae = {id: 'ae', name:'irma'},ak = {id: 'ak', name:'yngurds'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ad = {id: 'ad', name:'trabant_v11'},ae = nodes[0],ak = nodes[1],ay = {id: 'ay', name:'brunhilde'} ; nodes.push( ad,ay ); links.push( {source: ad , target: ay },{source: ad , target: ak },{source: ad , target: ae },{source: ak , target: ay },{source: ae , target: ay },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ay','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ae = nodes[1],af = {id: 'af', name:'asla'},ak = nodes[2] ; nodes.push( af ); links.push( {source: af , target: ak },{source: ae , target: af },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = {id: 'aa', name:'jarl'},ak = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ad = {id: 'ad', name:'trabant_v11'},ae = {id: 'ae', name:'irma'},af = {id: 'af', name:'asla'},ak = nodes[1],ay = {id: 'ay', name:'brunhilde'},bf = {id: 'bf', name:'marduff'} ; nodes.push( ad,ae,af,ay,bf ); links.push( {source: ad , target: ak },{source: ad , target: bf },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ay },{source: ak , target: bf },{source: ak , target: ay },{source: ae , target: ak },{source: ae , target: bf },{source: ae , target: af },{source: ae , target: ay },{source: af , target: ak },{source: af , target: bf },{source: af , target: ay },{source: ay , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = nodes[0],ae = nodes[1],af = nodes[2],ai = {id: 'ai', name:'ourdal'},ak = nodes[3],ay = nodes[4],be = {id: 'be', name:'kurl'},bf = nodes[5] ; nodes.push( ai,be ); links.push( {source: ai , target: ak },{source: ai , target: bf },{source: ai , target: ay },{source: ai , target: be },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: ae },{source: ad , target: bf },{source: ad , target: af },{source: ad , target: ay },{source: ad , target: be },{source: ak , target: bf },{source: ak , target: ay },{source: ak , target: be },{source: ae , target: ai },{source: ae , target: ak },{source: ae , target: bf },{source: ae , target: af },{source: ae , target: ay },{source: ae , target: be },{source: af , target: ai },{source: af , target: ak },{source: af , target: bf },{source: af , target: ay },{source: af , target: be },{source: ay , target: bf },{source: ay , target: be },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ai','ad','ae','bf','af','ay','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ak = nodes[4],ao = {id: 'ao', name:'alf'} ; nodes.push( ao ); links.push( {source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ak = nodes[0],ao = nodes[1],ay = {id: 'ay', name:'brunhilde'},bf = {id: 'bf', name:'marduff'} ; nodes.push( ay,bf ); links.push( {source: ao , target: bf },{source: ao , target: ay },{source: ak , target: bf },{source: ak , target: ao },{source: ak , target: ay },{source: ay , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'bf','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = {id: 'aa', name:'jarl'},ak = nodes[0],ao = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ak },{source: aa , target: ao },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ak = nodes[1],ao = nodes[2],ap = {id: 'ap', name:'gyldenbrog'},aq = {id: 'aq', name:'eine_stimme'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ak , target: ap },{source: ak , target: ao },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Scene.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ap','ak','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  aa = {id: 'aa', name:'jarl'},an = {id: 'an', name:'der_ritter'},ao = nodes[1],ay = {id: 'ay', name:'brunhilde'} ; nodes.push( aa,an,ay ); links.push( {source: an , target: ao },{source: an , target: ay },{source: ao , target: ay },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Scene.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'an','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ab = {id: 'ab', name:'erichson'},ai = {id: 'ai', name:'ourdal'},aj = {id: 'aj', name:'biörneland'},ak = {id: 'ak', name:'yngurds'},ao = nodes[2],ay = nodes[3],bi = {id: 'bi', name:'allgemeiner_ruf'} ; nodes.push( ab,ai,aj,ak,bi ); links.push( {source: ak , target: ao },{source: ak , target: ay },{source: ak , target: bi },{source: ai , target: ak },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: ay },{source: ai , target: bi },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: ay },{source: ab , target: bi },{source: ao , target: ay },{source: ao , target: bi },{source: aj , target: ak },{source: aj , target: ao },{source: aj , target: ay },{source: aj , target: bi },{source: ay , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Scene.';
}, 225000);