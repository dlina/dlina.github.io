setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'allgemeiner_chor'},ab = {id: 'ab', name:'edwiga'},ac = {id: 'ac', name:'guisto'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.761904761904761905%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'troila'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.52380952380952381%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'alfonso'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae af ag ao */ var  aa = {id: 'aa', name:'allgemeiner_chor'},ab = {id: 'ab', name:'edwiga'},ac = {id: 'ac', name:'guisto'},ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'chor_der_männer'},ag = {id: 'ag', name:'chor_der_mädchen'},ao = {id: 'ao', name:'chor_der_frauen'} ; nodes.push( aa,ab,ac,af,ag,ao ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ao },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ao },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: af },{source: ac , target: ao },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: af , target: ao },{source: af , target: ag },{source: ag , target: ao },{source: ad , target: af },{source: ad , target: ao },{source: ad , target: ag },{source: ad , target: ae },{source: ae , target: af },{source: ae , target: ao },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.047619047619047619%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa','ab','ac','af','ao','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.809523809523809524%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ae ah ai */ var  aa = {id: 'aa', name:'allgemeiner_chor'},ae = nodes[0] ,ah = {id: 'ah', name:'estrella'},ai = {id: 'ai', name:'chor_der_landleute'} ; nodes.push( aa,ah,ai ); links.push( {source: ae , target: ah },{source: ae , target: ai },{source: ah , target: ai },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ah','ai','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'mauregato'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ah aj ak */ var  aa = {id: 'aa', name:'allgemeiner_chor'},ah = {id: 'ah', name:'estrella'},aj = nodes[0] ,ak = {id: 'ak', name:'chor_des_gefolges'} ; nodes.push( aa,ah,ak ); links.push( {source: aj , target: ak },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ah },{source: ah , target: ak },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.095238095238095238%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa af ah aj al am an ao au */ var  aa = nodes[0] ,af = {id: 'af', name:'chor_der_männer'},ah = nodes[1] ,aj = nodes[2] ,al = {id: 'al', name:'chor_der_krieger'},am = {id: 'am', name:'chor_des_volkes'},an = {id: 'an', name:'adolfo'},ao = {id: 'ao', name:'chor_der_frauen'},au = {id: 'au', name:'chor_des_hofstaates'} ; nodes.push( af,al,am,an,ao,au ); links.push( {source: al , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: au },{source: al , target: au },{source: al , target: ao },{source: am , target: an },{source: am , target: au },{source: am , target: au },{source: am , target: ao },{source: al , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: au },{source: al , target: au },{source: al , target: ao },{source: am , target: an },{source: am , target: au },{source: am , target: au },{source: am , target: ao },{source: an , target: au },{source: an , target: au },{source: an , target: ao },{source: aj , target: al },{source: aj , target: am },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: au },{source: aj , target: au },{source: aj , target: ao },{source: ah , target: al },{source: ah , target: am },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: aj },{source: ah , target: au },{source: ah , target: au },{source: ah , target: ao },{source: aa , target: al },{source: aa , target: am },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: au },{source: aa , target: au },{source: aa , target: ao },{source: aa , target: af },{source: ao , target: au },{source: ao , target: au },{source: af , target: al },{source: af , target: am },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: aj },{source: af , target: ah },{source: af , target: au },{source: af , target: au },{source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'al','am','an','aj','ah','au','aa','ao','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'erster_chor'},aq = {id: 'aq', name:'zweiter_chor'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.619047619047619048%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ap aq */ var  ap = nodes[0] ,aq = nodes[1]  ; /* nodes.push(); */ links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.380952380952380952%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa an */ var  aa = {id: 'aa', name:'allgemeiner_chor'},an = {id: 'an', name:'adolfo'} ; nodes.push( aa,an ); links.push( {source: aa , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ab ag ao ar */ var  aa = nodes[0] ,ab = {id: 'ab', name:'edwiga'},ag = {id: 'ag', name:'chor_der_mädchen'},ao = {id: 'ao', name:'chor_der_frauen'},ar = {id: 'ar', name:'greis'} ; nodes.push( ab,ag,ao,ar ); links.push( {source: ab , target: ar },{source: ab , target: ao },{source: ab , target: ag },{source: ao , target: ar },{source: ag , target: ar },{source: ag , target: ao },{source: aa , target: ab },{source: aa , target: ar },{source: aa , target: ao },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.904761904761904762%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab','ar','ao','ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ah an */ var  ah = {id: 'ah', name:'estrella'},an = {id: 'an', name:'adolfo'} ; nodes.push( ah,an ); links.push( {source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ae ah an as */ var  ae = {id: 'ae', name:'alfonso'},ah = nodes[0] ,an = nodes[1] ,as = {id: 'as', name:'die_begleiter'} ; nodes.push( ae,as ); links.push( {source: ae , target: an },{source: ae , target: ah },{source: ae , target: as },{source: an , target: as },{source: ah , target: an },{source: ah , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'an','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ae ah */ var  aa = {id: 'aa', name:'allgemeiner_chor'},ae = nodes[0] ,ah = nodes[1]  ; nodes.push( aa ); links.push( {source: ae , target: ah },{source: aa , target: ah },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.190476190476190476%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ae ah al at */ var  ae = nodes[0] ,ah = nodes[1] ,al = {id: 'al', name:'chor_der_krieger'},at = {id: 'at', name:'jägerchor'} ; nodes.push( al,at ); links.push( {source: ae , target: ah },{source: ae , target: at },{source: ae , target: al },{source: ae , target: at },{source: ah , target: at },{source: ah , target: al },{source: ah , target: at },{source: al , target: at },{source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.952380952380952381%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ad ae ah al at */ var  aa = {id: 'aa', name:'allgemeiner_chor'},ad = {id: 'ad', name:'troila'},ae = nodes[0] ,ah = nodes[1] ,al = nodes[2] ,at = nodes[3]  ; nodes.push( aa,ad ); links.push( {source: ad , target: ae },{source: ad , target: ah },{source: ad , target: al },{source: ad , target: at },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: at },{source: ah , target: al },{source: ah , target: at },{source: al , target: at },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad','ae','ah','al','at','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'mauregato'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.47619047619047619%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad aj */ var  ad = {id: 'ad', name:'troila'},aj = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.238095238095238095%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ad ae ah ai aj al at */ var  aa = {id: 'aa', name:'allgemeiner_chor'},ad = nodes[0] ,ae = {id: 'ae', name:'alfonso'},ah = {id: 'ah', name:'estrella'},ai = {id: 'ai', name:'chor_der_landleute'},aj = nodes[1] ,al = {id: 'al', name:'chor_der_krieger'},at = {id: 'at', name:'jägerchor'} ; nodes.push( aa,ae,ah,ai,al,at ); links.push( {source: ad , target: aj },{source: ad , target: ah },{source: ad , target: al },{source: ad , target: at },{source: ad , target: ae },{source: ad , target: ai },{source: aj , target: al },{source: aj , target: at },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: at },{source: ah , target: ai },{source: al , target: at },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: at },{source: ae , target: ai },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: at },{source: aa , target: ae },{source: aa , target: ai },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: at },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: at },{source: aa , target: ae },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 100000);
