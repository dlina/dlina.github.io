setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al am an ao ap aq */ var  aa = {id: 'aa', name:'octavian'},ab = {id: 'ab', name:'marschallin'},ac = {id: 'ac', name:'stimme_des_barons'},ad = {id: 'ad', name:'die_lakaien'},ae = {id: 'ae', name:'stimme_des_haushofmeisters'},af = {id: 'af', name:'die_drei_adeligen_töchter'},ag = {id: 'ag', name:'marchande_de_modes'},ah = {id: 'ah', name:'tierhändler'},ai = {id: 'ai', name:'die_drei_waisen'},aj = {id: 'aj', name:'valzacchi'},ak = {id: 'ak', name:'der_sänger'},al = {id: 'al', name:'notar'},am = {id: 'am', name:'annina'},an = {id: 'an', name:'erster_lakai'},ao = {id: 'ao', name:'zweiter_lakai'},ap = {id: 'ap', name:'dritter_lakai'},aq = {id: 'aq', name:'vierter_lakai'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq ); links.push( {source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ad','af','ag','ah','ai','ak','al','an','ao','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ae aj am ar as at au av aw ax */ var  aa = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,aj = nodes[3] ,am = nodes[4] ,ar = {id: 'ar', name:'faninal'},as = {id: 'as', name:'sophie'},at = {id: 'at', name:'marianne'},au = {id: 'au', name:'die_duenna'},av = {id: 'av', name:'der_faninalsche_haushofmeister'},aw = {id: 'aw', name:'die_lerchenauischen'},ax = {id: 'ax', name:'die_faninalsche_dienerschaft'} ; nodes.push( ar,as,at,au,av,aw,ax ); links.push( {source: ar , target: as },{source: ar , target: at },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: ax },{source: as , target: at },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: as , target: ax },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: ae , target: ar },{source: ae , target: as },{source: ae , target: at },{source: ae , target: ar },{source: ae , target: at },{source: ae , target: au },{source: ae , target: av },{source: ae , target: aj },{source: ae , target: am },{source: ae , target: aw },{source: ae , target: ax },{source: ar , target: as },{source: ar , target: at },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: ax },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: aa , target: ae },{source: aa , target: ar },{source: aa , target: at },{source: aa , target: ac },{source: aa , target: au },{source: aa , target: av },{source: aa , target: aj },{source: aa , target: am },{source: aa , target: aw },{source: aa , target: ax },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: ae },{source: ac , target: ar },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: aj },{source: ac , target: am },{source: ac , target: aw },{source: ac , target: ax },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: av , target: aw },{source: av , target: ax },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: aj , target: ar },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: aj , target: am },{source: aj , target: aw },{source: aj , target: ax },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: am , target: ar },{source: am , target: at },{source: am , target: au },{source: am , target: av },{source: am , target: aw },{source: am , target: ax },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'at','ae','au','av','aw','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac aj am ar as ay az ba bb bc bd be bf bg bh */ var  aa = nodes[0] ,ab = {id: 'ab', name:'marschallin'},ac = nodes[1] ,aj = nodes[2] ,am = nodes[3] ,ar = nodes[4] ,as = nodes[5] ,ay = {id: 'ay', name:'wirt'},az = {id: 'az', name:'die_kellner'},ba = {id: 'ba', name:'die_kinder'},bb = {id: 'bb', name:'stimmen_von_aussen'},bc = {id: 'bc', name:'kommissarius'},bd = {id: 'bd', name:'viele_stimmen'},be = {id: 'be', name:'die_köpfe'},bf = {id: 'bf', name:'die_musikanten'},bg = {id: 'bg', name:'die_kutscher'},bh = {id: 'bh', name:'der_hausknecht'} ; nodes.push( ab,ay,az,ba,bb,bc,bd,be,bf,bg,bh ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: ay , target: bd },{source: ay , target: be },{source: ay , target: bf },{source: ay , target: bg },{source: ay , target: bh },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: az , target: bd },{source: az , target: be },{source: az , target: bf },{source: az , target: bg },{source: az , target: bh },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: am },{source: ac , target: ba },{source: ac , target: aj },{source: ac , target: bb },{source: ac , target: bc },{source: ac , target: ar },{source: ac , target: bd },{source: ac , target: as },{source: ac , target: be },{source: ac , target: bf },{source: ac , target: bg },{source: ac , target: bh },{source: aa , target: ay },{source: aa , target: az },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: ba },{source: aa , target: aj },{source: aa , target: bb },{source: aa , target: bc },{source: aa , target: ar },{source: aa , target: bd },{source: aa , target: as },{source: aa , target: be },{source: aa , target: ab },{source: aa , target: bf },{source: aa , target: bg },{source: aa , target: bh },{source: am , target: ay },{source: am , target: az },{source: am , target: ba },{source: am , target: bb },{source: am , target: bc },{source: am , target: ar },{source: am , target: bd },{source: am , target: as },{source: am , target: be },{source: am , target: bf },{source: am , target: bg },{source: am , target: bh },{source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: be },{source: ba , target: bf },{source: ba , target: bg },{source: ba , target: bh },{source: aj , target: ay },{source: aj , target: az },{source: aj , target: am },{source: aj , target: ba },{source: aj , target: bb },{source: aj , target: bc },{source: aj , target: ar },{source: aj , target: bd },{source: aj , target: as },{source: aj , target: be },{source: aj , target: bf },{source: aj , target: bg },{source: aj , target: bh },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bg },{source: bb , target: bh },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: bc , target: bh },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: ba },{source: ar , target: bb },{source: ar , target: bc },{source: ar , target: bd },{source: ar , target: as },{source: ar , target: be },{source: ar , target: bf },{source: ar , target: bg },{source: ar , target: bh },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bh },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: bb },{source: as , target: bc },{source: as , target: bd },{source: as , target: be },{source: as , target: bf },{source: as , target: bg },{source: as , target: bh },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: ba },{source: ab , target: aj },{source: ab , target: bb },{source: ab , target: bc },{source: ab , target: ar },{source: ab , target: bd },{source: ab , target: as },{source: ab , target: be },{source: ab , target: bf },{source: ab , target: bg },{source: ab , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);
