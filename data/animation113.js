setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj */ var  aa = {id: 'aa', name:'actäa'},ab = {id: 'ab', name:'parthenia'},ac = {id: 'ac', name:'polydor'},ad = {id: 'ad', name:'lykon'},ae = {id: 'ae', name:'theano'},af = {id: 'af', name:'adrast'},ag = {id: 'ag', name:'elpenor'},ah = {id: 'ah', name:'amyntas'},ai = {id: 'ai', name:'stimme_des_herolds'},aj = {id: 'aj', name:'der_timarch'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ai },{source: aa , target: aj },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ai },{source: ab , target: aj },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ai },{source: ac , target: aj },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ai },{source: ad , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac','ad','ae','af','ag','ah','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ak al am an ao ap aq ar */ var  ab = nodes[0] ,ak = {id: 'ak', name:'ambivar'},al = {id: 'al', name:'trinobant'},am = {id: 'am', name:'novio'},an = {id: 'an', name:'myron'},ao = {id: 'ao', name:'ingomar'},ap = {id: 'ap', name:'samo'},aq = {id: 'aq', name:'alastor'},ar = {id: 'ar', name:'andere'} ; nodes.push( ak,al,am,an,ao,ap,aq,ar ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: ar },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: ar },{source: aq , target: ar },{source: aq , target: ar },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'an','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ak al am ao ap aq */ var  ab = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = nodes[3] ,ao = nodes[4] ,ap = nodes[5] ,aq = nodes[6]  ; /* nodes.push(); */ links.push( {source: ao , target: aq },{source: ao , target: ap },{source: ab , target: aq },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ap , target: aq },{source: ak , target: aq },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: al },{source: ak , target: am },{source: al , target: aq },{source: al , target: ao },{source: al , target: ap },{source: al , target: am },{source: am , target: aq },{source: am , target: ao },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aq','ap','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab af ag an ao */ var  ab = nodes[0] ,af = {id: 'af', name:'adrast'},ag = {id: 'ag', name:'elpenor'},an = {id: 'an', name:'myron'},ao = nodes[1]  ; nodes.push( af,ag,an ); links.push( {source: an , target: ao },{source: af , target: an },{source: af , target: ag },{source: af , target: ao },{source: ag , target: an },{source: ag , target: ao },{source: ab , target: an },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ag aj am an ao aq */ var  aa = {id: 'aa', name:'actäa'},ab = nodes[0] ,ag = nodes[1] ,aj = {id: 'aj', name:'der_timarch'},am = {id: 'am', name:'novio'},an = nodes[2] ,ao = nodes[3] ,aq = {id: 'aq', name:'alastor'} ; nodes.push( aa,aj,am,aq ); links.push( {source: ag , target: an },{source: ag , target: ao },{source: ag , target: aj },{source: ag , target: aj },{source: ag , target: am },{source: ag , target: aq },{source: an , target: ao },{source: an , target: aq },{source: aa , target: ag },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: aj },{source: aa , target: aj },{source: aa , target: am },{source: aa , target: aq },{source: ab , target: ag },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: aj },{source: ab , target: am },{source: ab , target: aq },{source: ao , target: aq },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: aq },{source: am , target: an },{source: am , target: ao },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
