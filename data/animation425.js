setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'molly_griesinger'},ab = {id: 'ab', name:'von_keith'},ac = {id: 'ac', name:'hermann'},ad = {id: 'ad', name:'anna'},ae = {id: 'ae', name:'sascha'},af = {id: 'af', name:'scholz'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al am */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = nodes[5] ,ag = {id: 'ag', name:'saranieff'},ah = {id: 'ah', name:'raspe'},ai = {id: 'ai', name:'der_konsul_casimir'},aj = {id: 'aj', name:'ostermeier'},ak = {id: 'ak', name:'krenzl'},al = {id: 'al', name:'grandauer'},am = {id: 'am', name:'sommersberg'} ; nodes.push( ag,ah,ai,aj,ak,al,am ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ai','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad ae af ag ah aj am an ao ap aq ar as */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ag = nodes[5] ,ah = nodes[6] ,aj = nodes[7] ,am = nodes[8] ,an = {id: 'an', name:'simba'},ao = {id: 'ao', name:'frau_ostermeier'},ap = {id: 'ap', name:'frau_krenzl'},aq = {id: 'aq', name:'freifrau_von_rosenkron'},ar = {id: 'ar', name:'freifrau_von_totleben'},as = {id: 'as', name:'zamrjaki'} ; nodes.push( an,ao,ap,aq,ar,as ); links.push( {source: ab , target: am },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: an },{source: ab , target: ah },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aj },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: ad },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: af , target: am },{source: af , target: ag },{source: af , target: an },{source: af , target: ah },{source: af , target: ao },{source: af , target: ap },{source: af , target: aj },{source: af , target: aq },{source: af , target: ar },{source: af , target: as },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aj },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: as },{source: ae , target: am },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: an },{source: ae , target: ah },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aj },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aj },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: as },{source: ad , target: am },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: an },{source: ad , target: ah },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aj },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: as },{source: aa , target: ab },{source: aa , target: am },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aj },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'am','ag','ao','ap','aj','aq','ar','as','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad ae af ah ai an at */ var  ab = nodes[0] ,ac = {id: 'ac', name:'hermann'},ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ah = nodes[4] ,ai = {id: 'ai', name:'der_konsul_casimir'},an = nodes[5] ,at = {id: 'at', name:'ernst_scholz'} ; nodes.push( ac,ai,at ); links.push( {source: ad , target: ah },{source: ad , target: an },{source: ad , target: ai },{source: ad , target: ai },{source: ad , target: at },{source: ad , target: af },{source: ad , target: ae },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: at },{source: an , target: at },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: an },{source: ac , target: ai },{source: ac , target: ai },{source: ac , target: at },{source: ac , target: af },{source: ac , target: ae },{source: ai , target: an },{source: ai , target: at },{source: ai , target: an },{source: ai , target: at },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: an },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ai },{source: ab , target: at },{source: ab , target: af },{source: ab , target: ae },{source: af , target: ah },{source: af , target: an },{source: af , target: ai },{source: af , target: ai },{source: af , target: at },{source: ae , target: ah },{source: ae , target: an },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: at },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','an','at','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ad af ai aj au av aw */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ai = nodes[4] ,aj = {id: 'aj', name:'ostermeier'},au = {id: 'au', name:'der_metzgerknecht'},av = {id: 'av', name:'ein_packträger'},aw = {id: 'aw', name:'ein_bäckerweib'} ; nodes.push( aj,au,av,aw ); links.push( {source: ab , target: aj },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: au },{source: ab , target: av },{source: ab , target: aw },{source: ab , target: au },{source: ab , target: ai },{source: ab , target: ai },{source: aj , target: au },{source: aj , target: av },{source: aj , target: aw },{source: aj , target: au },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: au },{source: ad , target: av },{source: ad , target: aw },{source: ad , target: au },{source: ad , target: ai },{source: ad , target: ai },{source: af , target: aj },{source: af , target: au },{source: af , target: av },{source: af , target: aw },{source: af , target: au },{source: af , target: ai },{source: af , target: ai },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: au },{source: ac , target: av },{source: ac , target: aw },{source: ac , target: au },{source: ac , target: ai },{source: ac , target: ai },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: au , target: av },{source: au , target: aw },{source: ai , target: aj },{source: ai , target: au },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: au },{source: ai , target: aj },{source: ai , target: au },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
