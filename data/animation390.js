setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'marianne'},ab = {id: 'ab', name:'onkel_ludwig_wo'},ac = {id: 'ac', name:'georg'},ad = {id: 'ad', name:'prof'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ad },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = {id: 'ae', name:'uexküll'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = {id: 'af', name:'stimme'},ag = {id: 'ag', name:'die_erscheinung'} ; nodes.push( af,ag ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4]  ; /* nodes.push(); */ links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
