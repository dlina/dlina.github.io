setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},ab = {id: 'ab', name:'der_kurfürst'},ac = {id: 'ac', name:'kurfürstin'},ad = {id: 'ad', name:'natalie'},ae = {id: 'ae', name:'der_hofkavalier'},af = {id: 'af', name:'der_prinz_von_homburg'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ad },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.777777777777777778%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.555555555555555556%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},ag = {id: 'ag', name:'page'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'der_prinz_von_homburg'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad ae af ah ai aj ak al am */ var  aa = nodes[0] ,ab = {id: 'ab', name:'der_kurfürst'},ac = {id: 'ac', name:'kurfürstin'},ad = {id: 'ad', name:'natalie'},ae = {id: 'ae', name:'der_hofkavalier'},af = nodes[1] ,ah = {id: 'ah', name:'feldmarschall'},ai = {id: 'ai', name:'oberst_hennings'},aj = {id: 'aj', name:'truchss'},ak = {id: 'ak', name:'der_heiduck'},al = {id: 'al', name:'golz'},am = {id: 'am', name:'ein_reitknecht'} ; nodes.push( ab,ac,ad,ae,ah,ai,aj,ak,al,am ); links.push( {source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ak },{source: ab , target: af },{source: ab , target: al },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: al },{source: ae , target: am },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: am },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: al },{source: ad , target: ae },{source: ad , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: ak , target: al },{source: ak , target: am },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: al },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: am },{source: af , target: ah },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: al },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: am },{source: al , target: am },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: al },{source: ad , target: ae },{source: ad , target: am },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: al },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.888888888888888889%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','ah','ae','ac','ad','ai','aj','ak','aa','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa al an ao */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},al = {id: 'al', name:'golz'},an = {id: 'an', name:'kottwitz'},ao = {id: 'ao', name:'der_offizier'} ; nodes.push( aa,al,an,ao ); links.push( {source: an , target: ao },{source: an , target: ao },{source: aa , target: an },{source: aa , target: al },{source: aa , target: ao },{source: aa , target: ao },{source: al , target: an },{source: al , target: ao },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.444444444444444444%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa af al an ao ap aq */ var  aa = nodes[0] ,af = {id: 'af', name:'der_prinz_von_homburg'},al = nodes[1] ,an = nodes[2] ,ao = nodes[3] ,ap = {id: 'ap', name:'zweiter_offizier'},aq = {id: 'aq', name:'dritter_offizier'} ; nodes.push( af,ap,aq ); links.push( {source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: af , target: an },{source: af , target: al },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: af , target: an },{source: aa , target: an },{source: aa , target: af },{source: aa , target: al },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: an },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: an },{source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'an','af','aa','al','ao','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ar as at */ var  ar = {id: 'ar', name:'hofkavalier'},as = {id: 'as', name:'der_bauer'},at = {id: 'at', name:'die_frau'} ; nodes.push( ar,as,at ); links.push( {source: ar , target: as },{source: ar , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ar','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ad au aw */ var  ac = {id: 'ac', name:'kurfürstin'},ad = {id: 'ad', name:'natalie'},au = {id: 'au', name:'die_hofdamen'},aw = {id: 'aw', name:'die_hofdame'} ; nodes.push( ac,ad,au,aw ); links.push( {source: ac , target: ad },{source: ac , target: au },{source: ac , target: aw },{source: ad , target: au },{source: ad , target: aw },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.777777777777777778%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ad av aw */ var  ac = nodes[0] ,ad = nodes[1] ,av = {id: 'av', name:'mörner'},aw = nodes[2]  ; nodes.push( av ); links.push( {source: ac , target: av },{source: ac , target: ad },{source: ac , target: aw },{source: av , target: aw },{source: ad , target: av },{source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.555555555555555556%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'der_prinz_von_homburg'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad af ax */ var  ad = nodes[0] ,af = nodes[1] ,ax = {id: 'ax', name:'wachtmeister'} ; nodes.push( ax ); links.push( {source: af , target: ax },{source: ad , target: ax },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.111111111111111111%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac ad af au aw ax ay */ var  ac = {id: 'ac', name:'kurfürstin'},ad = nodes[0] ,af = nodes[1] ,au = {id: 'au', name:'die_hofdamen'},aw = {id: 'aw', name:'die_hofdame'},ax = nodes[2] ,ay = {id: 'ay', name:'graf_sparren'} ; nodes.push( ac,au,aw,ay ); links.push( {source: ac , target: ad },{source: ac , target: ax },{source: ac , target: af },{source: ac , target: ay },{source: ac , target: au },{source: ac , target: aw },{source: ad , target: ax },{source: ad , target: af },{source: ad , target: ay },{source: ad , target: au },{source: ad , target: aw },{source: ax , target: ay },{source: af , target: ax },{source: af , target: ay },{source: af , target: au },{source: af , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: aw },{source: aw , target: ax },{source: aw , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.888888888888888889%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac','ad','ax','af','ay','au','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab aj */ var  ab = {id: 'ab', name:'der_kurfürst'},aj = {id: 'aj', name:'truchss'} ; nodes.push( ab,aj ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab af ah aj al an ao */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},ab = nodes[0] ,af = {id: 'af', name:'der_prinz_von_homburg'},ah = {id: 'ah', name:'feldmarschall'},aj = nodes[1] ,al = {id: 'al', name:'golz'},an = {id: 'an', name:'kottwitz'},ao = {id: 'ao', name:'der_offizier'} ; nodes.push( aa,af,ah,al,an,ao ); links.push( {source: ah , target: aj },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: al },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: al },{source: af , target: ah },{source: af , target: aj },{source: af , target: ah },{source: af , target: an },{source: af , target: ao },{source: af , target: al },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: al },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: al },{source: an , target: ao },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: al },{source: al , target: an },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah','ab','aj','an','ao','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa af az */ var  aa = nodes[0] ,af = nodes[1] ,az = {id: 'az', name:'reuter'} ; nodes.push( az ); links.push( {source: af , target: az },{source: aa , target: af },{source: aa , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.222222222222222222%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa af ao */ var  aa = nodes[0] ,af = nodes[1] ,ao = {id: 'ao', name:'der_offizier'} ; nodes.push( ao ); links.push( {source: af , target: ao },{source: aa , target: af },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af','ao','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'kurfürstin'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.777777777777777778%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac ad aw */ var  ac = nodes[0] ,ad = {id: 'ad', name:'natalie'},aw = {id: 'aw', name:'die_hofdame'} ; nodes.push( ad,aw ); links.push( {source: ac , target: aw },{source: ac , target: ad },{source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ad af */ var  ac = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'der_prinz_von_homburg'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'der_kurfürst'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.111111111111111111%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ad ak ba */ var  ad = nodes[0] ,ak = {id: 'ak', name:'der_heiduck'},ba = {id: 'ba', name:'graf_reuss'} ; nodes.push( ak,ba ); links.push( {source: ad , target: ba },{source: ad , target: ak },{source: ak , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.888888888888888889%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ad','ba','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'der_prinz_von_homburg'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad af ba bb */ var  ad = {id: 'ad', name:'natalie'},af = nodes[0] ,ba = {id: 'ba', name:'graf_reuss'},bb = {id: 'bb', name:'läufer'} ; nodes.push( ad,ba,bb ); links.push( {source: af , target: bb },{source: af , target: ba },{source: ad , target: bb },{source: ad , target: af },{source: ad , target: ba },{source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.444444444444444444%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bb','af','ad','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ab aj al */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},ab = {id: 'ab', name:'der_kurfürst'},aj = {id: 'aj', name:'truchss'},al = {id: 'al', name:'golz'} ; nodes.push( aa,ab,aj,al ); links.push( {source: ab , target: aj },{source: ab , target: al },{source: aj , target: al },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.222222222222222222%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aj','aa','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab bc */ var  ab = nodes[0] ,bc = {id: 'bc', name:'erster_bedienter'} ; nodes.push( bc ); links.push( {source: ab , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = {id: 'ah', name:'feldmarschall'} ; nodes.push( ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ab bd be */ var  ab = nodes[0] ,bd = {id: 'bd', name:'erster_heiduck'},be = {id: 'be', name:'zweiter_heiduck'} ; nodes.push( bd,be ); links.push( {source: bd , target: be },{source: ab , target: bd },{source: ab , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.555555555555555556%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'bd','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ab ah ai aj an */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},ab = nodes[0] ,ah = {id: 'ah', name:'feldmarschall'},ai = {id: 'ai', name:'oberst_hennings'},aj = {id: 'aj', name:'truchss'},an = {id: 'an', name:'kottwitz'} ; nodes.push( aa,ah,ai,aj,an ); links.push( {source: ab , target: an },{source: ab , target: an },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ah },{source: ai , target: an },{source: ai , target: an },{source: ai , target: aj },{source: aj , target: an },{source: aj , target: an },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: an },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ah },{source: ah , target: an },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'an','ai','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab aj ao bf */ var  ab = nodes[0] ,aj = nodes[1] ,ao = {id: 'ao', name:'der_offizier'},bf = {id: 'bf', name:'mehrere_offiziere'} ; nodes.push( ao,bf ); links.push( {source: ao , target: bf },{source: ab , target: ao },{source: ab , target: bf },{source: ab , target: aj },{source: aj , target: ao },{source: aj , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.111111111111111111%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ab af aj an bf */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},ab = nodes[0] ,af = {id: 'af', name:'der_prinz_von_homburg'},aj = nodes[1] ,an = {id: 'an', name:'kottwitz'},bf = nodes[2]  ; nodes.push( aa,af,an ); links.push( {source: ab , target: af },{source: ab , target: an },{source: ab , target: aj },{source: ab , target: bf },{source: af , target: an },{source: af , target: aj },{source: af , target: bf },{source: an , target: bf },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: an },{source: aa , target: aj },{source: aa , target: bf },{source: aj , target: an },{source: aj , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ab','an','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ad af aj */ var  aa = nodes[0] ,ad = {id: 'ad', name:'natalie'},af = nodes[1] ,aj = nodes[2]  ; nodes.push( ad ); links.push( {source: ad , target: af },{source: ad , target: aj },{source: af , target: aj },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ad','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ah aj an */ var  ab = {id: 'ab', name:'der_kurfürst'},ah = {id: 'ah', name:'feldmarschall'},aj = nodes[0] ,an = {id: 'an', name:'kottwitz'} ; nodes.push( ab,ah,an ); links.push( {source: ah , target: an },{source: ah , target: aj },{source: ab , target: ah },{source: ab , target: an },{source: ab , target: aj },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.444444444444444444%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ah','an','ab','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* af bg */ var  af = {id: 'af', name:'der_prinz_von_homburg'},bg = {id: 'bg', name:'stranz'} ; nodes.push( af,bg ); links.push( {source: af , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.222222222222222222%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ad af ah aj an bf bg */ var  aa = {id: 'aa', name:'graf_von_hohenzollern'},ab = {id: 'ab', name:'der_kurfürst'},ad = {id: 'ad', name:'natalie'},af = nodes[0] ,ah = {id: 'ah', name:'feldmarschall'},aj = {id: 'aj', name:'truchss'},an = {id: 'an', name:'kottwitz'},bf = {id: 'bf', name:'mehrere_offiziere'},bg = nodes[1]  ; nodes.push( aa,ab,ad,ah,aj,an,bf ); links.push( {source: af , target: bg },{source: af , target: an },{source: af , target: bf },{source: af , target: aj },{source: af , target: ah },{source: af , target: bf },{source: ad , target: af },{source: ad , target: bg },{source: ad , target: an },{source: ad , target: bf },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: bf },{source: aa , target: af },{source: aa , target: bg },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: an },{source: aa , target: bf },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: bf },{source: ab , target: af },{source: ab , target: bg },{source: ab , target: ad },{source: ab , target: an },{source: ab , target: bf },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: bf },{source: an , target: bg },{source: an , target: bf },{source: an , target: bf },{source: bf , target: bg },{source: aj , target: bg },{source: aj , target: an },{source: aj , target: bf },{source: aj , target: bf },{source: ah , target: bg },{source: ah , target: an },{source: ah , target: bf },{source: ah , target: aj },{source: ah , target: bf },{source: bf , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 175000);
