setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = {id: 'aa', name:'erster_bürger'},ab = {id: 'ab', name:'zweiter_bürger'},ac = {id: 'ac', name:'andre_vom_volk'},ad = {id: 'ad', name:'schiffer'},ae = {id: 'ae', name:'einer_aus_dem_volk'},af = {id: 'af', name:'ein_zweiter_aus_dem_volk'},ag = {id: 'ag', name:'ein_dritter_aus_dem_volk'},ah = {id: 'ah', name:'ein_vierter_aus_dem_volk'},ai = {id: 'ai', name:'der_fünfte_aus_dem_volk'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ad },{source: aa , target: ac },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ad },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.857142857142857143%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ae','af','ag','ah','ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab aj ak */ var  aa = nodes[0] ,ab = nodes[1] ,aj = {id: 'aj', name:'kikin'},ak = {id: 'ak', name:'dolgoruki'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: ab , target: aj },{source: ab , target: ak },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.714285714285714286%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aj','ab','aa','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad al */ var  ad = {id: 'ad', name:'schiffer'},al = {id: 'al', name:'glebof'} ; nodes.push( ad,al ); links.push( {source: ad , target: al },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.571428571428571429%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* al am */ var  al = nodes[0] ,am = {id: 'am', name:'diener'} ; nodes.push( am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.428571428571428571%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aj ak al an ao ap at */ var  aj = {id: 'aj', name:'kikin'},ak = {id: 'ak', name:'dolgoruki'},al = nodes[0] ,an = {id: 'an', name:'lapuchin'},ao = {id: 'ao', name:'erzbischof'},ap = {id: 'ap', name:'ein_bojar'},at = {id: 'at', name:'andre_bojaren'} ; nodes.push( aj,ak,an,ao,ap,at ); links.push( {source: aj , target: ak },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: al },{source: aj , target: ap },{source: aj , target: at },{source: aj , target: at },{source: aj , target: at },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: al },{source: ak , target: ap },{source: ak , target: at },{source: ak , target: at },{source: ak , target: at },{source: an , target: ao },{source: an , target: ap },{source: an , target: at },{source: an , target: at },{source: an , target: at },{source: ao , target: ap },{source: ao , target: at },{source: ao , target: at },{source: ao , target: at },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: at },{source: al , target: at },{source: al , target: at },{source: ap , target: at },{source: ap , target: at },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ak al an ao ap aq ar as at au */ var  ak = nodes[0] ,al = nodes[1] ,an = nodes[2] ,ao = nodes[3] ,ap = nodes[4] ,aq = {id: 'aq', name:'ein_zweiter_bojar'},ar = {id: 'ar', name:'ein_dritter_bojar'},as = {id: 'as', name:'ein_vierter_bojar'},at = nodes[5] ,au = {id: 'au', name:'eudoxia'} ; nodes.push( aq,ar,as,au ); links.push( {source: al , target: ao },{source: al , target: at },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: an },{source: al , target: au },{source: ao , target: at },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: au },{source: at , target: au },{source: ap , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: au },{source: aq , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: au },{source: ar , target: at },{source: ar , target: as },{source: ar , target: au },{source: as , target: at },{source: as , target: au },{source: ak , target: al },{source: ak , target: ao },{source: ak , target: at },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: an },{source: ak , target: au },{source: an , target: ao },{source: an , target: at },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.142857142857142857%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aj ak al an ao ap aq ar as at */ var  aj = {id: 'aj', name:'kikin'},ak = nodes[0] ,al = nodes[1] ,an = nodes[2] ,ao = nodes[3] ,ap = nodes[4] ,aq = nodes[5] ,ar = nodes[6] ,as = nodes[7] ,at = nodes[8]  ; nodes.push( aj ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ap , target: at },{source: ap , target: at },{source: ap , target: at },{source: ap , target: at },{source: ap , target: as },{source: aq , target: ar },{source: aq , target: at },{source: aq , target: at },{source: aq , target: at },{source: aq , target: at },{source: aq , target: as },{source: ar , target: at },{source: ar , target: at },{source: ar , target: at },{source: ar , target: at },{source: ar , target: as },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: at },{source: aj , target: at },{source: aj , target: an },{source: aj , target: at },{source: aj , target: al },{source: aj , target: at },{source: aj , target: as },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: at },{source: ao , target: at },{source: ao , target: at },{source: ao , target: at },{source: ao , target: as },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: ao },{source: ak , target: at },{source: ak , target: at },{source: ak , target: an },{source: ak , target: at },{source: ak , target: al },{source: ak , target: at },{source: ak , target: as },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: ao },{source: an , target: at },{source: an , target: at },{source: an , target: at },{source: an , target: at },{source: an , target: as },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: ao },{source: al , target: at },{source: al , target: at },{source: al , target: an },{source: al , target: at },{source: al , target: at },{source: al , target: as },{source: as , target: at },{source: as , target: at },{source: as , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ap','aq','ar','at','an','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aj ak al ao */ var  aj = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,ao = nodes[3]  ; /* nodes.push(); */ links.push( {source: al , target: ao },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: ao },{source: ak , target: al },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.857142857142857143%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aj','ak','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* al au */ var  al = nodes[0] ,au = {id: 'au', name:'eudoxia'} ; nodes.push( au ); links.push( {source: al , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.714285714285714286%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* al am av */ var  al = nodes[0] ,am = {id: 'am', name:'diener'},av = {id: 'av', name:'markof'} ; nodes.push( am,av ); links.push( {source: al , target: am },{source: al , target: av },{source: am , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','am','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aw ax */ var  aw = {id: 'aw', name:'euphrosyne'},ax = {id: 'ax', name:'alexis'} ; nodes.push( aw,ax ); links.push( {source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.428571428571428571%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ax */ var  ax = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.285714285714285714%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ap aq ar as at au ax */ var  ap = {id: 'ap', name:'ein_bojar'},aq = {id: 'aq', name:'ein_zweiter_bojar'},ar = {id: 'ar', name:'ein_dritter_bojar'},as = {id: 'as', name:'ein_vierter_bojar'},at = {id: 'at', name:'andre_bojaren'},au = {id: 'au', name:'eudoxia'},ax = nodes[0]  ; nodes.push( ap,aq,ar,as,at,au ); links.push( {source: au , target: ax },{source: at , target: au },{source: at , target: ax },{source: ap , target: au },{source: ap , target: ax },{source: ap , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aq , target: au },{source: aq , target: ax },{source: aq , target: at },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: au },{source: ar , target: ax },{source: ar , target: at },{source: ar , target: as },{source: as , target: au },{source: as , target: ax },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.142857142857142857%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'au','ax','at','ap','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ay az ba */ var  ay = {id: 'ay', name:'menzikof'},az = {id: 'az', name:'katharina'},ba = {id: 'ba', name:'page'} ; nodes.push( ay,az,ba ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ay','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* az */ var  az = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ay az */ var  ay = {id: 'ay', name:'menzikof'},az = nodes[0]  ; nodes.push( ay ); links.push( {source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.714285714285714286%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* bb bc bd */ var  bb = {id: 'bb', name:'erster_matrose'},bc = {id: 'bc', name:'zweiter_matrose'},bd = {id: 'bd', name:'der_steuermann'} ; nodes.push( bb,bc,bd ); links.push( {source: bb , target: bc },{source: bb , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.571428571428571429%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'bb','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* bd be bf */ var  bd = nodes[0] ,be = {id: 'be', name:'peter'},bf = {id: 'bf', name:'gordon'} ; nodes.push( be,bf ); links.push( {source: be , target: bf },{source: bd , target: be },{source: bd , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.428571428571428571%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ay az bd be bf */ var  ay = {id: 'ay', name:'menzikof'},az = {id: 'az', name:'katharina'},bd = nodes[0] ,be = nodes[1] ,bf = nodes[2]  ; nodes.push( ay,az ); links.push( {source: be , target: bf },{source: az , target: be },{source: az , target: bd },{source: az , target: bf },{source: bd , target: be },{source: bd , target: bf },{source: ay , target: be },{source: ay , target: az },{source: ay , target: bd },{source: ay , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.285714285714285714%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'be','az','bd','ay','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ak bg */ var  ak = {id: 'ak', name:'dolgoruki'},bg = {id: 'bg', name:'adjutant'} ; nodes.push( ak,bg ); links.push( {source: ak , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ak */ var  ak = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ak al */ var  ak = nodes[0] ,al = {id: 'al', name:'glebof'} ; nodes.push( al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.857142857142857143%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ak ao */ var  ak = nodes[0] ,ao = {id: 'ao', name:'erzbischof'} ; nodes.push( ao ); links.push( {source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.714285714285714286%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* bh bi bj bk bl bm bn */ var  bh = {id: 'bh', name:'die_andern_bauern'},bi = {id: 'bi', name:'erster_bauer'},bj = {id: 'bj', name:'zweiter_bauer'},bk = {id: 'bk', name:'dritter_bauer'},bl = {id: 'bl', name:'vierter_bauer'},bm = {id: 'bm', name:'fünfter_bauer'},bn = {id: 'bn', name:'sechster_bauer'} ; nodes.push( bh,bi,bj,bk,bl,bm,bn ); links.push( {source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bm },{source: bi , target: bn },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bj , target: bn },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bl , target: bm },{source: bl , target: bn },{source: bm , target: bn },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bm },{source: bh , target: bn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.571428571428571429%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* be bf bh bi bj bk bl bm bn */ var  be = {id: 'be', name:'peter'},bf = {id: 'bf', name:'gordon'},bh = nodes[0] ,bi = nodes[1] ,bj = nodes[2] ,bk = nodes[3] ,bl = nodes[4] ,bm = nodes[5] ,bn = nodes[6]  ; nodes.push( be,bf ); links.push( {source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bm },{source: bh , target: bn },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bm },{source: bi , target: bn },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bj , target: bn },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bl , target: bm },{source: bl , target: bn },{source: bm , target: bn },{source: be , target: bh },{source: be , target: bi },{source: be , target: bj },{source: be , target: bk },{source: be , target: bl },{source: be , target: bm },{source: be , target: bn },{source: be , target: bf },{source: bf , target: bh },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bk },{source: bf , target: bl },{source: bf , target: bm },{source: bf , target: bn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bh','bi','bj','bk','bl','bm','bn' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* be bf */ var  be = nodes[0] ,bf = nodes[1]  ; /* nodes.push(); */ links.push( {source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.285714285714285714%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ay be bf */ var  ay = {id: 'ay', name:'menzikof'},be = nodes[0] ,bf = nodes[1]  ; nodes.push( ay ); links.push( {source: ay , target: be },{source: ay , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.142857142857142857%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ay be bf bo */ var  ay = nodes[0] ,be = nodes[1] ,bf = nodes[2] ,bo = {id: 'bo', name:'schepelew'} ; nodes.push( bo ); links.push( {source: be , target: bo },{source: be , target: bf },{source: bf , target: bo },{source: ay , target: bo },{source: ay , target: be },{source: ay , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bo','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ay be */ var  ay = nodes[0] ,be = nodes[1]  ; /* nodes.push(); */ links.push( {source: ay , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.857142857142857143%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'be','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ak an ap aq ar as at au ax */ var  ak = {id: 'ak', name:'dolgoruki'},an = {id: 'an', name:'lapuchin'},ap = {id: 'ap', name:'ein_bojar'},aq = {id: 'aq', name:'ein_zweiter_bojar'},ar = {id: 'ar', name:'ein_dritter_bojar'},as = {id: 'as', name:'ein_vierter_bojar'},at = {id: 'at', name:'andre_bojaren'},au = {id: 'au', name:'eudoxia'},ax = {id: 'ax', name:'alexis'} ; nodes.push( ak,an,ap,aq,ar,as,at,au,ax ); links.push( {source: ak , target: ax },{source: ak , target: an },{source: ak , target: au },{source: ak , target: at },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: an , target: ax },{source: an , target: au },{source: an , target: at },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: au , target: ax },{source: at , target: ax },{source: at , target: au },{source: ap , target: ax },{source: ap , target: au },{source: ap , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aq , target: ax },{source: aq , target: au },{source: aq , target: at },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: ax },{source: ar , target: au },{source: ar , target: at },{source: ar , target: as },{source: as , target: ax },{source: as , target: au },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ak al an ap at au ax */ var  ak = nodes[0] ,al = {id: 'al', name:'glebof'},an = nodes[1] ,ap = nodes[2] ,at = nodes[3] ,au = nodes[4] ,ax = nodes[5]  ; nodes.push( al ); links.push( {source: al , target: an },{source: al , target: ax },{source: al , target: at },{source: al , target: at },{source: al , target: ap },{source: al , target: au },{source: an , target: ax },{source: an , target: at },{source: an , target: at },{source: an , target: ap },{source: an , target: au },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ax },{source: ak , target: at },{source: ak , target: at },{source: ak , target: ap },{source: ak , target: au },{source: at , target: ax },{source: at , target: au },{source: at , target: ax },{source: at , target: au },{source: ap , target: ax },{source: ap , target: at },{source: ap , target: at },{source: ap , target: au },{source: au , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.571428571428571429%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ak al an ap aq ar as at au ax be */ var  ak = nodes[0] ,al = nodes[1] ,an = nodes[2] ,ap = nodes[3] ,aq = {id: 'aq', name:'ein_zweiter_bojar'},ar = {id: 'ar', name:'ein_dritter_bojar'},as = {id: 'as', name:'ein_vierter_bojar'},at = nodes[4] ,au = nodes[5] ,ax = nodes[6] ,be = {id: 'be', name:'peter'} ; nodes.push( aq,ar,as,be ); links.push( {source: al , target: be },{source: al , target: au },{source: al , target: an },{source: al , target: at },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: ax },{source: au , target: be },{source: au , target: ax },{source: an , target: be },{source: an , target: au },{source: an , target: at },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: ax },{source: ak , target: be },{source: ak , target: al },{source: ak , target: au },{source: ak , target: an },{source: ak , target: at },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: ax },{source: at , target: be },{source: at , target: au },{source: at , target: ax },{source: ap , target: be },{source: ap , target: au },{source: ap , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: ax },{source: aq , target: be },{source: aq , target: au },{source: aq , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: ax },{source: ar , target: be },{source: ar , target: au },{source: ar , target: at },{source: ar , target: as },{source: ar , target: ax },{source: as , target: be },{source: as , target: au },{source: as , target: at },{source: as , target: ax },{source: ax , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.428571428571428571%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'an','at','ap','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ak al au ax be bf bo */ var  ak = nodes[0] ,al = nodes[1] ,au = nodes[2] ,ax = nodes[3] ,be = nodes[4] ,bf = {id: 'bf', name:'gordon'},bo = {id: 'bo', name:'schepelew'} ; nodes.push( bf,bo ); links.push( {source: be , target: bo },{source: be , target: bf },{source: ak , target: be },{source: ak , target: al },{source: ak , target: bo },{source: ak , target: bf },{source: ak , target: ax },{source: ak , target: au },{source: al , target: be },{source: al , target: bo },{source: al , target: bf },{source: al , target: ax },{source: al , target: au },{source: bf , target: bo },{source: ax , target: be },{source: ax , target: bo },{source: ax , target: bf },{source: au , target: be },{source: au , target: bo },{source: au , target: bf },{source: au , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.285714285714285714%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'bo','ax','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ak al an ap aq ar as at ay be bf bp */ var  ak = nodes[0] ,al = nodes[1] ,an = {id: 'an', name:'lapuchin'},ap = {id: 'ap', name:'ein_bojar'},aq = {id: 'aq', name:'ein_zweiter_bojar'},ar = {id: 'ar', name:'ein_dritter_bojar'},as = {id: 'as', name:'ein_vierter_bojar'},at = {id: 'at', name:'andre_bojaren'},ay = {id: 'ay', name:'menzikof'},be = nodes[2] ,bf = nodes[3] ,bp = {id: 'bp', name:'gesang'} ; nodes.push( an,ap,aq,ar,as,at,ay,bp ); links.push( {source: be , target: bf },{source: be , target: bp },{source: ay , target: be },{source: ay , target: bf },{source: ay , target: bp },{source: al , target: be },{source: al , target: ay },{source: al , target: at },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: bf },{source: al , target: an },{source: al , target: bp },{source: at , target: be },{source: at , target: ay },{source: at , target: bf },{source: at , target: bp },{source: ap , target: be },{source: ap , target: ay },{source: ap , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: bf },{source: ap , target: bp },{source: aq , target: be },{source: aq , target: ay },{source: aq , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: bf },{source: aq , target: bp },{source: ar , target: be },{source: ar , target: ay },{source: ar , target: at },{source: ar , target: as },{source: ar , target: bf },{source: ar , target: bp },{source: as , target: be },{source: as , target: ay },{source: as , target: at },{source: as , target: bf },{source: as , target: bp },{source: bf , target: bp },{source: an , target: be },{source: an , target: ay },{source: an , target: at },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: bf },{source: an , target: bp },{source: ak , target: be },{source: ak , target: ay },{source: ak , target: al },{source: ak , target: at },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: bf },{source: ak , target: an },{source: ak , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.142857142857142857%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ay','al','at','ap','aq','ar','as','bf','an','ak','bp' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ax be */ var  ax = {id: 'ax', name:'alexis'},be = nodes[0]  ; nodes.push( ax ); links.push( {source: ax , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 170000);
