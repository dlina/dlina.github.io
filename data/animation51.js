setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'fiebig'},ab = {id: 'ab', name:'hahn'},ac = {id: 'ac', name:'frau_fiebig'},ad = {id: 'ad', name:'anna'},ae = {id: 'ae', name:'meischen'},af = {id: 'af', name:'gehrke'},ag = {id: 'ag', name:'werner'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ae = nodes[4],af = nodes[5],ag = nodes[6],ah = {id: 'ah', name:'styczinski'},ai = {id: 'ai', name:'junge'},ai = {id: 'ai', name:'junge'},aj = {id: 'aj', name:'bellermann'},ak = {id: 'ak', name:'gendarm'} ; nodes.push( ah,ai,aj,ak ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ae },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ae },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ae = nodes[2],af = nodes[3],ag = nodes[4],ah = nodes[5],aj = nodes[8],al = {id: 'al', name:'amtsvorsteher'},am = {id: 'am', name:'schwabe'},an = {id: 'an', name:'naphtali'},ao = {id: 'ao', name:'dienstmann'} ; nodes.push( al,am,an,ao ); links.push( {source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: aj },{source: af , target: ah },{source: af , target: ag },{source: am , target: an },{source: am , target: ao },{source: an , target: ao },{source: aa , target: al },{source: aa , target: af },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ao },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ag },{source: ab , target: al },{source: ab , target: af },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ae },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ag },{source: ae , target: al },{source: ae , target: af },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: ag },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: aj },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: aj },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'al','am','an','ae','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1],af = nodes[3],ag = nodes[4],ah = nodes[5],ai = {id: 'ai', name:'junge'},aj = nodes[6],ap = {id: 'ap', name:'waschfrau'} ; nodes.push( ai,ap ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ap },{source: ai , target: aj },{source: ai , target: ap },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ap },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: af , target: ah },{source: af , target: ap },{source: aj , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ap },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ai','aj','ah','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = nodes[1],ae = {id: 'ae', name:'meischen'},af = nodes[2],ag = nodes[3] ; nodes.push( ae ); links.push( {source: ab , target: ag },{source: ab , target: ae },{source: ab , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
}, 20000);