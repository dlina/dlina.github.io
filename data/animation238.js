setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'kandaules'},ab = {id: 'ab', name:'thoas'},ac = {id: 'ac', name:'gyges'},ad = {id: 'ad', name:'rhodope'},ae = {id: 'ae', name:'hero'},af = {id: 'af', name:'lesbia'},ag = {id: 'ag', name:'volk'},ah = {id: 'ah', name:'ein_diener'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad','ae','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,af = nodes[3]  ; /* nodes.push(); */ links.push( {source: ab , target: ac },{source: ab , target: af },{source: ac , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ad ae af ai */ var  aa = nodes[0] ,ad = {id: 'ad', name:'rhodope'},ae = {id: 'ae', name:'hero'},af = nodes[1] ,ai = {id: 'ai', name:'karna'} ; nodes.push( ad,ae,ai ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ai },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac ad af */ var  aa = nodes[0] ,ac = {id: 'ac', name:'gyges'},ad = nodes[1] ,af = nodes[2]  ; nodes.push( ac ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad ae af ag ai */ var  aa = nodes[0] ,ab = {id: 'ab', name:'thoas'},ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'hero'},af = nodes[3] ,ag = {id: 'ag', name:'volk'},ai = {id: 'ai', name:'karna'} ; nodes.push( ab,ae,ag,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ai },{source: af , target: ag },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
