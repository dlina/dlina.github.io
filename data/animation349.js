setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'siegmunds_stimme'},ab = {id: 'ab', name:'sieglinde'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'hundings_stimme'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae af */ var  ad = {id: 'ad', name:'wotans_stimme'},ae = {id: 'ae', name:'brünnhilde'},af = {id: 'af', name:'fricka'} ; nodes.push( ad,ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'siegmunds_stimme'},ab = {id: 'ab', name:'sieglinde'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = {id: 'ae', name:'brünnhilde'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = {id: 'ab', name:'sieglinde'},ac = {id: 'ac', name:'hundings_stimme'},ad = {id: 'ad', name:'wotans_stimme'},ae = nodes[1]  ; nodes.push( ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ad ae ag ah ai aj ak al am an */ var  ab = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,ag = {id: 'ag', name:'gerhilde'},ah = {id: 'ah', name:'orthilde'},ai = {id: 'ai', name:'waltraute'},aj = {id: 'aj', name:'helmwiges_stimme'},ak = {id: 'ak', name:'schwertleite'},al = {id: 'al', name:'grimgerdes_stimme'},am = {id: 'am', name:'rossweisses_stimme'},an = {id: 'an', name:'siegrunes_stimme'} ; nodes.push( ag,ah,ai,aj,ak,al,am,an ); links.push( {source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: an },{source: ag , target: al },{source: ag , target: am },{source: ag , target: am },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ah },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: al },{source: ah , target: am },{source: ah , target: am },{source: ah , target: al },{source: ah , target: an },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: an },{source: ai , target: al },{source: ai , target: am },{source: ai , target: am },{source: ai , target: al },{source: ai , target: an },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: al , target: an },{source: al , target: am },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: al , target: an },{source: al , target: am },{source: al , target: am },{source: al , target: an },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: al },{source: ah , target: am },{source: ah , target: am },{source: ah , target: al },{source: ah , target: an },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: an },{source: ae , target: al },{source: ae , target: am },{source: ae , target: am },{source: ae , target: al },{source: ae , target: an },{source: ae , target: ah },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: an },{source: ab , target: al },{source: ab , target: am },{source: ab , target: am },{source: ab , target: al },{source: ab , target: an },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: an },{source: ad , target: al },{source: ad , target: am },{source: ad , target: am },{source: ad , target: al },{source: ad , target: an },{source: ad , target: ah },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ad ae ag ah ai aj ak al am an */ var  ad = nodes[0] ,ae = nodes[1] ,ag = nodes[2] ,ah = nodes[3] ,ai = nodes[4] ,aj = nodes[5] ,ak = nodes[6] ,al = nodes[7] ,am = nodes[8] ,an = nodes[9]  ; /* nodes.push(); */ links.push( {source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: an },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ae },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: al },{source: ag , target: am },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: al },{source: ah , target: am },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: al },{source: ai , target: am },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: al },{source: aj , target: am },{source: al , target: an },{source: al , target: am },{source: am , target: an },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: al },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ah','ai','ak','aj','an','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 50000);
