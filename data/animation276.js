setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = {id: 'aa', name:'bürgerst'},ab = {id: 'ab', name:'ein_rat'},ac = {id: 'ac', name:'rat_klemens'},ad = {id: 'ad', name:'roland'},ae = {id: 'ae', name:'die_räte'},af = {id: 'af', name:'femlna'},ag = {id: 'ag', name:'geschrei'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ad af ah ai aj ak */ var  aa = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,ah = {id: 'ah', name:'marie'},ai = {id: 'ai', name:'stimme'},aj = {id: 'aj', name:'hellebardier'},ak = {id: 'ak', name:'frau_künkelün'} ; nodes.push( ah,ai,aj,ak ); links.push( {source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ad },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae ah ai aj ak al am an ao ap aq */ var  aa = nodes[0] ,ab = {id: 'ab', name:'ein_rat'},ac = {id: 'ac', name:'rat_klemens'},ad = nodes[1] ,ae = {id: 'ae', name:'die_räte'},ah = nodes[2] ,ai = nodes[3] ,aj = nodes[4] ,ak = nodes[5] ,al = {id: 'al', name:'weib'},am = {id: 'am', name:'der_haufen'},an = {id: 'an', name:'ein_weib_3'},ao = {id: 'ao', name:'weiber'},ap = {id: 'ap', name:'frau_klemens'},aq = {id: 'aq', name:'die_angeflogenen'} ; nodes.push( ab,ac,ae,al,am,an,ao,ap,aq ); links.push( {source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ai },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: an },{source: ad , target: ae },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ai },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: an },{source: aa , target: ae },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ai },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: an },{source: ac , target: ae },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ai },{source: ae , target: al },{source: ae , target: am },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ai },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: an },{source: ab , target: ae },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ai },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: ae , target: al },{source: ae , target: am },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ai },{source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'al','am','aa','aj','ac','ae','ab','an','ao','ap','aq','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ah ak ar as */ var  ad = nodes[0] ,ah = nodes[1] ,ak = nodes[2] ,ar = {id: 'ar', name:'erste'},as = {id: 'as', name:'zweite'} ; nodes.push( ar,as ); links.push( {source: ak , target: ar },{source: ak , target: as },{source: ah , target: ak },{source: ah , target: ar },{source: ah , target: as },{source: ar , target: as },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ar },{source: ad , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac ad ah ai ak ap at au av aw ax ay az ba bb */ var  aa = {id: 'aa', name:'bürgerst'},ac = {id: 'ac', name:'rat_klemens'},ad = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'stimme'},ak = nodes[2] ,ap = {id: 'ap', name:'frau_klemens'},at = {id: 'at', name:'erstes'},au = {id: 'au', name:'zweites_web'},av = {id: 'av', name:'drittes_weib'},aw = {id: 'aw', name:'viertes_weib'},ax = {id: 'ax', name:'neues_weib'},ay = {id: 'ay', name:'franzose'},az = {id: 'az', name:'die_franzosen'},ba = {id: 'ba', name:'melak'},bb = {id: 'bb', name:'alle_männer'} ; nodes.push( aa,ac,ai,ap,at,au,av,aw,ax,ay,az,ba,bb ); links.push( {source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: at , target: au },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: au , target: bb },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: at , target: au },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: at , target: au },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: au , target: bb },{source: ah , target: at },{source: ah , target: au },{source: ah , target: av },{source: ah , target: aw },{source: ah , target: at },{source: ah , target: at },{source: ah , target: ax },{source: ah , target: au },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ba },{source: ah , target: ap },{source: ah , target: bb },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: at },{source: ai , target: at },{source: ai , target: ax },{source: ai , target: au },{source: ai , target: ak },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: ba },{source: ai , target: ap },{source: ai , target: bb },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: at },{source: ak , target: at },{source: ak , target: ax },{source: ak , target: au },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: ba },{source: ak , target: ap },{source: ak , target: bb },{source: ad , target: at },{source: ad , target: au },{source: ad , target: av },{source: ad , target: aw },{source: ad , target: at },{source: ad , target: at },{source: ad , target: ax },{source: ad , target: au },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: ay },{source: ad , target: az },{source: ad , target: ba },{source: ad , target: ap },{source: ad , target: bb },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: az , target: ba },{source: az , target: bb },{source: ba , target: bb },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: at },{source: ap , target: at },{source: ap , target: ax },{source: ap , target: au },{source: ap , target: ay },{source: ap , target: az },{source: ap , target: ba },{source: ap , target: bb },{source: aa , target: at },{source: aa , target: au },{source: aa , target: av },{source: aa , target: aw },{source: aa , target: at },{source: aa , target: at },{source: aa , target: ax },{source: aa , target: au },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: ay },{source: aa , target: az },{source: aa , target: ba },{source: aa , target: ap },{source: aa , target: bb },{source: aa , target: ac },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: aw },{source: ac , target: at },{source: ac , target: at },{source: ac , target: ax },{source: ac , target: au },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: ba },{source: ac , target: ap },{source: ac , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünften Aufzug.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
