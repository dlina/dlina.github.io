setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'hannibal'},ab = {id: 'ab', name:'katharina'},ac = {id: 'ac', name:'meta'},ad = {id: 'ad', name:'max'},ae = {id: 'ae', name:'knipski'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],af = {id: 'af', name:'strick'},ag = {id: 'ag', name:'schlammberger'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ag },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ag },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = {id: 'ae', name:'knipski'},ae = {id: 'ae', name:'knipski'},af = nodes[4],ag = nodes[5],ah = {id: 'ah', name:'reitzer'} ; nodes.push( ae,ah ); links.push( {source: ac , target: af },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: af , target: ag },{source: af , target: ah },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ad },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = nodes[4],ae = nodes[4],af = nodes[6],ag = nodes[7],ah = nodes[8],ai = {id: 'ai', name:'finkenstein'} ; nodes.push( ai ); links.push( {source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = nodes[4],ae = nodes[4],af = nodes[6],ag = nodes[7],ah = nodes[8],ai = nodes[9],aj = {id: 'aj', name:'oberkellner'} ; nodes.push( aj ); links.push( {source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: aj },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: aj },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: aj },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: aj },{source: ai , target: aj },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
}, 20000);