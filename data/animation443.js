setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'sarazenenkönig'},ab = {id: 'ab', name:'grisaldo'},ac = {id: 'ac', name:'almerine'},ad = {id: 'ad', name:'malvizino'},ae = {id: 'ae', name:'ballona'},af = {id: 'af', name:'prinz_zifaldo'},ag = {id: 'ag', name:'ein_kastilier'},ah = {id: 'ah', name:'alle_kastilier'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.25%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ai aj ak */ var  ai = {id: 'ai', name:'curio'},aj = {id: 'aj', name:'infantin'},ak = {id: 'ak', name:'lilla'} ; nodes.push( ai,aj,ak ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.5%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'grisaldo'},ac = {id: 'ac', name:'almerine'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.75%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ai ak al am an */ var  ai = {id: 'ai', name:'curio'},ak = {id: 'ak', name:'lilla'},al = {id: 'al', name:'bastiano'},am = {id: 'am', name:'fernando'},an = {id: 'an', name:'truffaldino'} ; nodes.push( ai,ak,al,am,an ); links.push( {source: al , target: am },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: am , target: an },{source: ai , target: al },{source: ai , target: am },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ak },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ad ai aj ak al an ao */ var  ab = {id: 'ab', name:'grisaldo'},ad = {id: 'ad', name:'malvizino'},ai = nodes[0] ,aj = {id: 'aj', name:'infantin'},ak = nodes[1] ,al = nodes[2] ,an = nodes[3] ,ao = {id: 'ao', name:'könig'} ; nodes.push( ab,ad,aj,ao ); links.push( {source: ak , target: ao },{source: ak , target: an },{source: ak , target: al },{source: aj , target: ak },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: al },{source: an , target: ao },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: al },{source: al , target: ao },{source: al , target: an },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ao },{source: ad , target: an },{source: ad , target: ai },{source: ad , target: al },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ao },{source: ab , target: an },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.25%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ao','an','al','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ai aj ak */ var  ai = nodes[0] ,aj = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.5%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aj','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ad ae */ var  ab = {id: 'ab', name:'grisaldo'},ad = {id: 'ad', name:'malvizino'},ae = {id: 'ae', name:'ballona'} ; nodes.push( ab,ad,ae ); links.push( {source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.75%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai al an */ var  ai = {id: 'ai', name:'curio'},al = {id: 'al', name:'bastiano'},an = {id: 'an', name:'truffaldino'} ; nodes.push( ai,al,an ); links.push( {source: ai , target: an },{source: ai , target: al },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai','an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ae ap aq */ var  ab = {id: 'ab', name:'grisaldo'},ae = {id: 'ae', name:'ballona'},ap = {id: 'ap', name:'saluzzo'},aq = {id: 'aq', name:'isabella'} ; nodes.push( ab,ae,ap,aq ); links.push( {source: ap , target: aq },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ae },{source: ae , target: ap },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.25%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ap','aq','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab af ai ak al */ var  ab = nodes[0] ,af = {id: 'af', name:'prinz_zifaldo'},ai = {id: 'ai', name:'curio'},ak = {id: 'ak', name:'lilla'},al = {id: 'al', name:'bastiano'} ; nodes.push( af,ai,ak,al ); links.push( {source: ak , target: al },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ai },{source: ab , target: af },{source: ai , target: ak },{source: ai , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.5%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ab','al','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ae af aj ak aq */ var  ac = {id: 'ac', name:'almerine'},ae = {id: 'ae', name:'ballona'},af = nodes[0] ,aj = {id: 'aj', name:'infantin'},ak = nodes[1] ,aq = {id: 'aq', name:'isabella'} ; nodes.push( ac,ae,aj,aq ); links.push( {source: ac , target: ae },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: aq },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: aq },{source: ak , target: aq },{source: aj , target: ak },{source: aj , target: aq },{source: af , target: ak },{source: af , target: aj },{source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.75%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac','ae','ak','aj','af','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'könig'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af aj ak al aq */ var  af = {id: 'af', name:'prinz_zifaldo'},aj = {id: 'aj', name:'infantin'},ak = {id: 'ak', name:'lilla'},al = {id: 'al', name:'bastiano'},aq = {id: 'aq', name:'isabella'} ; nodes.push( af,aj,ak,al,aq ); links.push( {source: aj , target: ak },{source: aj , target: aq },{source: aj , target: al },{source: ak , target: aq },{source: ak , target: al },{source: af , target: aj },{source: af , target: ak },{source: af , target: aq },{source: af , target: al },{source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.25%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aj','ak','af','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ac ad ae aq ar */ var  ab = {id: 'ab', name:'grisaldo'},ac = {id: 'ac', name:'almerine'},ad = {id: 'ad', name:'malvizino'},ae = {id: 'ae', name:'ballona'},aq = nodes[0] ,ar = {id: 'ar', name:'einer_von_den_männern'} ; nodes.push( ab,ac,ad,ae,ar ); links.push( {source: aq , target: ar },{source: aq , target: ar },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ar },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ar },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: ar },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: ae },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.5%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aq','ar','ac','ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab af ai al an */ var  ab = nodes[0] ,af = {id: 'af', name:'prinz_zifaldo'},ai = {id: 'ai', name:'curio'},al = {id: 'al', name:'bastiano'},an = {id: 'an', name:'truffaldino'} ; nodes.push( af,ai,al,an ); links.push( {source: al , target: an },{source: ai , target: al },{source: ai , target: an },{source: af , target: al },{source: af , target: ai },{source: af , target: an },{source: ab , target: al },{source: ab , target: ai },{source: ab , target: an },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.75%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ad an ao */ var  ab = nodes[0] ,ad = {id: 'ad', name:'malvizino'},an = nodes[1] ,ao = {id: 'ao', name:'könig'} ; nodes.push( ad,ao ); links.push( {source: ad , target: ao },{source: ad , target: an },{source: ab , target: ad },{source: ab , target: ao },{source: ab , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 75000);
