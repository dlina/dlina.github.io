setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'postmeisterin'},ab = {id: 'ab', name:'der_junge'},ac = {id: 'ac', name:'lucie'},ad = {id: 'ad', name:'cäcilie'},ae = {id: 'ae', name:'postillion'},af = {id: 'af', name:'annchen'},ag = {id: 'ag', name:'bedienter'},ah = {id: 'ah', name:'fernando'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ae','af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad ag ai */ var  ac = nodes[0] ,ad = nodes[1] ,ag = nodes[2] ,ai = {id: 'ai', name:'stella'} ; nodes.push( ai ); links.push( {source: ag , target: ai },{source: ad , target: ai },{source: ad , target: ag },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad ag ah ai aj */ var  ac = nodes[0] ,ad = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'fernando'},ai = nodes[3] ,aj = {id: 'aj', name:'verwalter'} ; nodes.push( ah,aj ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: aj },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad af ah ai */ var  ac = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'annchen'},ah = nodes[2] ,ai = nodes[3]  ; nodes.push( af ); links.push( {source: ah , target: ai },{source: af , target: ai },{source: af , target: ah },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ad },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ag ah ai */ var  ad = nodes[0] ,ag = {id: 'ag', name:'bedienter'},ah = nodes[1] ,ai = nodes[2]  ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
