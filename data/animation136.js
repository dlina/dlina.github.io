setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'leon'},ab = {id: 'ab', name:'hausverwalter'},ac = {id: 'ac', name:'gregor'},ad = {id: 'ad', name:'pilger'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ad = nodes[3],ae = {id: 'ae', name:'kattwalds_stimme'},af = {id: 'af', name:'edritas_stimme'},ag = {id: 'ag', name:'galomir'},ah = {id: 'ah', name:'schaffer'},ai = {id: 'ai', name:'ataeus'} ; nodes.push( ae,af,ag,ah,ai ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ae = nodes[2],ae = nodes[2],af = nodes[3],ai = nodes[6] ; /* nodes.push(); */ links.push( {source: aa , target: ai },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ae },{source: af , target: ai },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ae = nodes[1],af = nodes[3],af = nodes[3],ag = {id: 'ag', name:'galomir'},ah = {id: 'ah', name:'schaffer'},ai = nodes[4],ai = nodes[4],aj = {id: 'aj', name:'fährmann'},ak = {id: 'ak', name:'knecht'},al = {id: 'al', name:'krieger'},al = {id: 'al', name:'krieger'},am = {id: 'am', name:'zweiter_krieger'} ; nodes.push( ag,ah,aj,ak,al,am ); links.push( {source: aa , target: ai },{source: aa , target: af },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ae },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: al },{source: ai , target: am },{source: af , target: ai },{source: af , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: al },{source: af , target: am },{source: af , target: ai },{source: af , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: al },{source: af , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: al },{source: ai , target: am },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: al },{source: ag , target: am },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: al },{source: ah , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: al , target: am },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: al },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','ak','al','am','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ac = {id: 'ac', name:'gregor'},af = nodes[2],ag = nodes[4],ah = nodes[5],ai = nodes[6],an = {id: 'an', name:'erster_knecht'},an = {id: 'an', name:'erster_knecht'},ao = {id: 'ao', name:'zweiter_knecht'},ap = {id: 'ap', name:'kattwalds_schaffer'},aq = {id: 'aq', name:'anführer'} ; nodes.push( ac,an,ao,ap,aq ); links.push( {source: aa , target: an },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ap },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: aq },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: af },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: ap , target: aq },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ai },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: an },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ai },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: ap },{source: ai , target: aq },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: aq },{source: ac , target: ai },{source: ac , target: af },{source: af , target: an },{source: af , target: ao },{source: af , target: an },{source: af , target: ap },{source: af , target: ah },{source: af , target: ag },{source: af , target: aq },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufzug';
}, 20000);