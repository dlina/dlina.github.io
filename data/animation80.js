setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'fritzens_stimme'},ab = {id: 'ab', name:'stimme_des_dieners'},ac = {id: 'ac', name:'theodor'},ad = {id: 'ad', name:'mizi'},ae = {id: 'ae', name:'christine'},af = {id: 'af', name:'der_herr'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad ae ag ah */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,ag = {id: 'ag', name:'katharina'},ah = {id: 'ah', name:'weiring'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ah },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad ae ah ai */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,ah = nodes[3] ,ai = {id: 'ai', name:'lina'} ; nodes.push( ai ); links.push( {source: ae , target: ai },{source: ae , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ah },{source: ah , target: ai },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);
