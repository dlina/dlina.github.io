setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae ak */ var  aa = {id: 'aa', name:'das_volk'},ab = {id: 'ab', name:'max'},ac = {id: 'ac', name:'chor_der_landleute'},ad = {id: 'ad', name:'kilian'},ae = {id: 'ae', name:'mädchen'},ak = {id: 'ak', name:'männer'} ; nodes.push( aa,ab,ac,ad,ae,ak ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ak },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ak },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ak },{source: ad , target: ae },{source: ad , target: ak },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad af ag ah ai aj ak al am as at au */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'kuno'},ag = {id: 'ag', name:'kaspar'},ah = {id: 'ah', name:'einige_jäger'},ai = {id: 'ai', name:'andere_jäger'},aj = {id: 'aj', name:'die_frauen'},ak = nodes[3] ,al = {id: 'al', name:'chor'},am = {id: 'am', name:'chor_der_jäger'},as = {id: 'as', name:'erster_jäger'},at = {id: 'at', name:'zweiter_jäger'},au = {id: 'au', name:'dritter_jäger'} ; nodes.push( af,ag,ah,ai,aj,al,am,as,at,au ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: as },{source: af , target: at },{source: af , target: au },{source: af , target: aj },{source: af , target: am },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: as },{source: ad , target: at },{source: ad , target: au },{source: ad , target: aj },{source: ad , target: am },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: aj },{source: ab , target: am },{source: ab , target: ac },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: aj },{source: ag , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: aj },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: aj },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: am },{source: al , target: am },{source: al , target: as },{source: al , target: at },{source: al , target: au },{source: al , target: am },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: aj , target: am },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: aj },{source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ag','ah','ai','aj','ak','al','am','as','at','au','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'kaspar'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* an ao */ var  an = {id: 'an', name:'ännchen'},ao = {id: 'ao', name:'agathe'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ao */ var  ao = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab an ao */ var  ab = {id: 'ab', name:'max'},an = {id: 'an', name:'ännchen'},ao = nodes[0]  ; nodes.push( ab,an ); links.push( {source: ab , target: ao },{source: ab , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao','ab','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ap */ var  ag = {id: 'ag', name:'kaspar'},ap = {id: 'ap', name:'stimmen_unsichtbarer_geister'} ; nodes.push( ag,ap ); links.push( {source: ag , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ag aq */ var  ag = nodes[0] ,aq = {id: 'aq', name:'samiel'} ; nodes.push( aq ); links.push( {source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ag al aq ar */ var  ab = {id: 'ab', name:'max'},ag = nodes[0] ,al = {id: 'al', name:'chor'},aq = nodes[1] ,ar = {id: 'ar', name:'echo'} ; nodes.push( ab,al,ar ); links.push( {source: ag , target: ar },{source: ag , target: ar },{source: ag , target: al },{source: ag , target: aq },{source: ab , target: ag },{source: ab , target: ar },{source: ab , target: ar },{source: ab , target: al },{source: ab , target: aq },{source: al , target: ar },{source: al , target: ar },{source: al , target: aq },{source: aq , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ar','al','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ag as at au */ var  ab = nodes[0] ,ag = nodes[1] ,as = {id: 'as', name:'erster_jäger'},at = {id: 'at', name:'zweiter_jäger'},au = {id: 'au', name:'dritter_jäger'} ; nodes.push( as,at,au ); links.push( {source: as , target: at },{source: as , target: au },{source: at , target: au },{source: ab , target: as },{source: ab , target: at },{source: ab , target: ag },{source: ab , target: au },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'as','at','ab','ag','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'agathe'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* an ao */ var  an = {id: 'an', name:'ännchen'},ao = nodes[0]  ; nodes.push( an ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ao av */ var  ao = nodes[0] ,av = {id: 'av', name:'eine_brautjungfer'} ; nodes.push( av ); links.push( {source: ao , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* an ao av */ var  an = {id: 'an', name:'ännchen'},ao = nodes[0] ,av = nodes[1]  ; nodes.push( an ); links.push( {source: an , target: ao },{source: an , target: av },{source: ao , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ac af ag ah ai am an ao as at au aw ax ay az */ var  ab = {id: 'ab', name:'max'},ac = {id: 'ac', name:'chor_der_landleute'},af = {id: 'af', name:'kuno'},ag = {id: 'ag', name:'kaspar'},ah = {id: 'ah', name:'einige_jäger'},ai = {id: 'ai', name:'andere_jäger'},am = {id: 'am', name:'chor_der_jäger'},an = nodes[0] ,ao = nodes[1] ,as = {id: 'as', name:'erster_jäger'},at = {id: 'at', name:'zweiter_jäger'},au = {id: 'au', name:'dritter_jäger'},aw = {id: 'aw', name:'ottokar'},ax = {id: 'ax', name:'chor_der_hofleute'},ay = {id: 'ay', name:'einige'},az = {id: 'az', name:'eremit'} ; nodes.push( ab,ac,af,ag,ah,ai,am,as,at,au,aw,ax,ay,az ); links.push( {source: am , target: as },{source: am , target: at },{source: am , target: au },{source: am , target: aw },{source: am , target: ao },{source: am , target: ax },{source: am , target: ay },{source: am , target: an },{source: am , target: az },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: aw },{source: ah , target: ao },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: an },{source: ah , target: az },{source: ah , target: am },{source: ai , target: am },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: aw },{source: ai , target: ao },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: an },{source: ai , target: az },{source: ai , target: am },{source: as , target: at },{source: as , target: au },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: at , target: au },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: at , target: az },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: af , target: am },{source: af , target: ah },{source: af , target: ai },{source: af , target: as },{source: af , target: at },{source: af , target: au },{source: af , target: aw },{source: af , target: ag },{source: af , target: ao },{source: af , target: ax },{source: af , target: ay },{source: af , target: an },{source: af , target: az },{source: af , target: am },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: aw },{source: ag , target: ao },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: an },{source: ag , target: az },{source: ag , target: am },{source: ab , target: am },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: aw },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ao },{source: ab , target: ax },{source: ab , target: ac },{source: ab , target: ay },{source: ab , target: an },{source: ab , target: az },{source: ab , target: am },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ao , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: aw },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: an },{source: ac , target: az },{source: ac , target: am },{source: ay , target: az },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: aw },{source: an , target: ao },{source: an , target: ax },{source: an , target: ay },{source: an , target: az },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: am , target: aw },{source: am , target: ao },{source: am , target: ax },{source: am , target: ay },{source: am , target: an },{source: am , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'am','ah','ai','as','at','au','aw','af','ag','ab','ao','ax','ac','ay','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* az */ var  az = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ao az */ var  ao = {id: 'ao', name:'agathe'},az = nodes[0]  ; nodes.push( ao ); links.push( {source: ao , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 95000);
