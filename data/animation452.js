setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al */ var  aa = {id: 'aa', name:'fischerknabe'},ab = {id: 'ab', name:'hirte'},ac = {id: 'ac', name:'hirten'},ad = {id: 'ad', name:'alpenjäger'},ae = {id: 'ae', name:'ruodi'},af = {id: 'af', name:'kuoni'},ag = {id: 'ag', name:'werni'},ah = {id: 'ah', name:'seppi'},ai = {id: 'ai', name:'baumgarten'},aj = {id: 'aj', name:'tell'},ak = {id: 'ak', name:'erster'},al = {id: 'al', name:'zweiter'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al ); links.push( {source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ak },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ak },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: ak },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ak },{source: ak , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ad','ae','af','ag','ah','ai','ac','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aj am an ao */ var  aj = nodes[0] ,am = {id: 'am', name:'pfeiffer'},an = {id: 'an', name:'stauffacher'},ao = {id: 'ao', name:'gertrud'} ; nodes.push( am,an,ao ); links.push( {source: am , target: an },{source: am , target: ao },{source: an , target: ao },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aj an ap aq ar as at au av aw */ var  aj = nodes[0] ,an = nodes[1] ,ap = {id: 'ap', name:'fronvogt'},aq = {id: 'aq', name:'erster_gesell'},ar = {id: 'ar', name:'alter_mann'},as = {id: 'as', name:'zweiter_gesell'},at = {id: 'at', name:'gesellen'},au = {id: 'au', name:'meister'},av = {id: 'av', name:'ausrufer'},aw = {id: 'aw', name:'berta'} ; nodes.push( ap,aq,ar,as,at,au,av,aw ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ap , target: au },{source: ap , target: at },{source: ap , target: as },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: au },{source: aq , target: ar },{source: aq , target: au },{source: aq , target: at },{source: aq , target: as },{source: aq , target: au },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: au },{source: ar , target: au },{source: ar , target: at },{source: ar , target: as },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: au },{source: au , target: av },{source: au , target: aw },{source: at , target: au },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: au },{source: as , target: au },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: as , target: au },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: au },{source: an , target: at },{source: an , target: as },{source: an , target: au },{source: an , target: av },{source: an , target: aw },{source: an , target: au },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: au },{source: aj , target: at },{source: aj , target: as },{source: aj , target: an },{source: aj , target: au },{source: aj , target: av },{source: aj , target: aw },{source: aj , target: au },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: au , target: av },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ap','aq','ar','au','at','as','aj','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* an ax ay */ var  an = nodes[0] ,ax = {id: 'ax', name:'melchthal'},ay = {id: 'ay', name:'walter_fürst'} ; nodes.push( ax,ay ); links.push( {source: ax , target: ay },{source: an , target: ax },{source: an , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ax','ay','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af az ba */ var  af = {id: 'af', name:'kuoni'},az = {id: 'az', name:'rudenz'},ba = {id: 'ba', name:'attinghausen'} ; nodes.push( af,az,ba ); links.push( {source: az , target: ba },{source: af , target: az },{source: af , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'az','ba','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ai an ax ay bb bc bd be bf bg bh bi bj bk bl bm */ var  ai = {id: 'ai', name:'baumgarten'},an = {id: 'an', name:'stauffacher'},ax = {id: 'ax', name:'melchthal'},ay = {id: 'ay', name:'walter_fürst'},bb = {id: 'bb', name:'winkelried'},bc = {id: 'bc', name:'sewa'},bd = {id: 'bd', name:'meier'},be = {id: 'be', name:'am_bühel'},bf = {id: 'bf', name:'von_der_flüe'},bg = {id: 'bg', name:'konrad_hunn'},bh = {id: 'bh', name:'auf_der_mauer'},bi = {id: 'bi', name:'rösselmann'},bj = {id: 'bj', name:'sigrist'},bk = {id: 'bk', name:'im_hofe'},bl = {id: 'bl', name:'reding'},bm = {id: 'bm', name:'jost_von_weiler'} ; nodes.push( ai,an,ax,ay,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm ); links.push( {source: ax , target: bb },{source: ax , target: bc },{source: ax , target: bd },{source: ax , target: be },{source: ax , target: bf },{source: ax , target: bg },{source: ax , target: bh },{source: ax , target: ay },{source: ax , target: bi },{source: ax , target: bj },{source: ax , target: bk },{source: ax , target: bl },{source: ax , target: bm },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bg },{source: bb , target: bh },{source: bb , target: bi },{source: bb , target: bj },{source: bb , target: bk },{source: bb , target: bl },{source: bb , target: bm },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: bc , target: bh },{source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bk },{source: bc , target: bl },{source: bc , target: bm },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bh },{source: bd , target: bi },{source: bd , target: bj },{source: bd , target: bk },{source: bd , target: bl },{source: bd , target: bm },{source: ai , target: ax },{source: ai , target: bb },{source: ai , target: bc },{source: ai , target: bd },{source: ai , target: be },{source: ai , target: bf },{source: ai , target: an },{source: ai , target: bg },{source: ai , target: bh },{source: ai , target: ay },{source: ai , target: bi },{source: ai , target: bj },{source: ai , target: bk },{source: ai , target: bl },{source: ai , target: bm },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bi },{source: be , target: bj },{source: be , target: bk },{source: be , target: bl },{source: be , target: bm },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bk },{source: bf , target: bl },{source: bf , target: bm },{source: an , target: ax },{source: an , target: bb },{source: an , target: bc },{source: an , target: bd },{source: an , target: be },{source: an , target: bf },{source: an , target: bg },{source: an , target: bh },{source: an , target: ay },{source: an , target: bi },{source: an , target: bj },{source: an , target: bk },{source: an , target: bl },{source: an , target: bm },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: bg , target: bm },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bm },{source: ay , target: bb },{source: ay , target: bc },{source: ay , target: bd },{source: ay , target: be },{source: ay , target: bf },{source: ay , target: bg },{source: ay , target: bh },{source: ay , target: bi },{source: ay , target: bj },{source: ay , target: bk },{source: ay , target: bl },{source: ay , target: bm },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bm },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bk , target: bl },{source: bk , target: bm },{source: bl , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ax','bb','bc','bd','ai','be','bf','an','bg','bh','ay','bi','bj','bk','bl','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aj bn bo bp */ var  aj = {id: 'aj', name:'tell'},bn = {id: 'bn', name:'walter'},bo = {id: 'bo', name:'hedwig'},bp = {id: 'bp', name:'wilhelm'} ; nodes.push( aj,bn,bo,bp ); links.push( {source: bn , target: bo },{source: bn , target: bp },{source: aj , target: bn },{source: aj , target: bo },{source: aj , target: bp },{source: bo , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'bn','aj','bo','bp' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aw az */ var  aw = {id: 'aw', name:'berta'},az = {id: 'az', name:'rudenz'} ; nodes.push( aw,az ); links.push( {source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aj an aw ax ay az bi bj bn bq br bs bt bu bv bw bx by bz ca */ var  aj = {id: 'aj', name:'tell'},an = {id: 'an', name:'stauffacher'},aw = nodes[0] ,ax = {id: 'ax', name:'melchthal'},ay = {id: 'ay', name:'walter_fürst'},az = nodes[1] ,bi = {id: 'bi', name:'rösselmann'},bj = {id: 'bj', name:'sigrist'},bn = {id: 'bn', name:'walter'},bq = {id: 'bq', name:'friesshardt'},br = {id: 'br', name:'leuthold'},bs = {id: 'bs', name:'mechthild'},bt = {id: 'bt', name:'elsbet'},bu = {id: 'bu', name:'noch_drei_landleute'},bv = {id: 'bv', name:'weiber'},bw = {id: 'bw', name:'rudolf_der_harras'},bx = {id: 'bx', name:'gessler'},by = {id: 'by', name:'walter_tell'},bz = {id: 'bz', name:'viele_stimmen'},ca = {id: 'ca', name:'landleute'} ; nodes.push( aj,an,ax,ay,bi,bj,bn,bq,br,bs,bt,bu,bv,bw,bx,by,bz,ca ); links.push( {source: bq , target: br },{source: bq , target: bs },{source: bq , target: bt },{source: bq , target: bu },{source: bq , target: bv },{source: bq , target: bw },{source: bq , target: bx },{source: bq , target: by },{source: bq , target: bz },{source: bq , target: ca },{source: br , target: bs },{source: br , target: bt },{source: br , target: bu },{source: br , target: bv },{source: br , target: bw },{source: br , target: bx },{source: br , target: by },{source: br , target: bz },{source: br , target: ca },{source: bs , target: bt },{source: bs , target: bu },{source: bs , target: bv },{source: bs , target: bw },{source: bs , target: bx },{source: bs , target: by },{source: bs , target: bz },{source: bs , target: ca },{source: bt , target: bu },{source: bt , target: bv },{source: bt , target: bw },{source: bt , target: bx },{source: bt , target: by },{source: bt , target: bz },{source: bt , target: ca },{source: bn , target: bq },{source: bn , target: br },{source: bn , target: bs },{source: bn , target: bt },{source: bn , target: bu },{source: bn , target: bv },{source: bn , target: bw },{source: bn , target: bx },{source: bn , target: by },{source: bn , target: bz },{source: bn , target: ca },{source: aj , target: bq },{source: aj , target: br },{source: aj , target: bs },{source: aj , target: bt },{source: aj , target: bn },{source: aj , target: bj },{source: aj , target: bi },{source: aj , target: ay },{source: aj , target: an },{source: aj , target: ax },{source: aj , target: bu },{source: aj , target: bv },{source: aj , target: bw },{source: aj , target: bx },{source: aj , target: by },{source: aj , target: aw },{source: aj , target: az },{source: aj , target: bz },{source: aj , target: ca },{source: bj , target: bq },{source: bj , target: br },{source: bj , target: bs },{source: bj , target: bt },{source: bj , target: bn },{source: bj , target: bu },{source: bj , target: bv },{source: bj , target: bw },{source: bj , target: bx },{source: bj , target: by },{source: bj , target: bz },{source: bj , target: ca },{source: bi , target: bq },{source: bi , target: br },{source: bi , target: bs },{source: bi , target: bt },{source: bi , target: bn },{source: bi , target: bj },{source: bi , target: bu },{source: bi , target: bv },{source: bi , target: bw },{source: bi , target: bx },{source: bi , target: by },{source: bi , target: bz },{source: bi , target: ca },{source: ay , target: bq },{source: ay , target: br },{source: ay , target: bs },{source: ay , target: bt },{source: ay , target: bn },{source: ay , target: bj },{source: ay , target: bi },{source: ay , target: bu },{source: ay , target: bv },{source: ay , target: bw },{source: ay , target: bx },{source: ay , target: by },{source: ay , target: az },{source: ay , target: bz },{source: ay , target: ca },{source: an , target: bq },{source: an , target: br },{source: an , target: bs },{source: an , target: bt },{source: an , target: bn },{source: an , target: bj },{source: an , target: bi },{source: an , target: ay },{source: an , target: ax },{source: an , target: bu },{source: an , target: bv },{source: an , target: bw },{source: an , target: bx },{source: an , target: by },{source: an , target: aw },{source: an , target: az },{source: an , target: bz },{source: an , target: ca },{source: ax , target: bq },{source: ax , target: br },{source: ax , target: bs },{source: ax , target: bt },{source: ax , target: bn },{source: ax , target: bj },{source: ax , target: bi },{source: ax , target: ay },{source: ax , target: bu },{source: ax , target: bv },{source: ax , target: bw },{source: ax , target: bx },{source: ax , target: by },{source: ax , target: az },{source: ax , target: bz },{source: ax , target: ca },{source: bu , target: bv },{source: bu , target: bw },{source: bu , target: bx },{source: bu , target: by },{source: bu , target: bz },{source: bu , target: ca },{source: bv , target: bw },{source: bv , target: bx },{source: bv , target: by },{source: bv , target: bz },{source: bv , target: ca },{source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: by , target: bz },{source: by , target: ca },{source: aw , target: bq },{source: aw , target: br },{source: aw , target: bs },{source: aw , target: bt },{source: aw , target: bn },{source: aw , target: bj },{source: aw , target: bi },{source: aw , target: ay },{source: aw , target: ax },{source: aw , target: bu },{source: aw , target: bv },{source: aw , target: bw },{source: aw , target: bx },{source: aw , target: by },{source: aw , target: az },{source: aw , target: bz },{source: aw , target: ca },{source: az , target: bq },{source: az , target: br },{source: az , target: bs },{source: az , target: bt },{source: az , target: bn },{source: az , target: bj },{source: az , target: bi },{source: az , target: bu },{source: az , target: bv },{source: az , target: bw },{source: az , target: bx },{source: az , target: by },{source: az , target: bz },{source: az , target: ca },{source: bz , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'bq','br','bs','bt','bn','bj','bi','ay','an','ax','bu','bv','bw','bx','by','aw','az','bz','ca' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aj cb cc cd */ var  aj = nodes[0] ,cb = {id: 'cb', name:'kunz'},cc = {id: 'cc', name:'fischer'},cd = {id: 'cd', name:'knabe'} ; nodes.push( cb,cc,cd ); links.push( {source: cb , target: cc },{source: cb , target: cd },{source: cc , target: cd },{source: aj , target: cb },{source: aj , target: cc },{source: aj , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'cb','cc','cd','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai an ax ay az ba bo by */ var  ai = {id: 'ai', name:'baumgarten'},an = {id: 'an', name:'stauffacher'},ax = {id: 'ax', name:'melchthal'},ay = {id: 'ay', name:'walter_fürst'},az = {id: 'az', name:'rudenz'},ba = {id: 'ba', name:'attinghausen'},bo = {id: 'bo', name:'hedwig'},by = {id: 'by', name:'walter_tell'} ; nodes.push( ai,an,ax,ay,az,ba,bo,by ); links.push( {source: ay , target: bo },{source: ay , target: by },{source: ay , target: ba },{source: ay , target: az },{source: an , target: ay },{source: an , target: bo },{source: an , target: by },{source: an , target: ax },{source: an , target: ba },{source: an , target: az },{source: ai , target: ay },{source: ai , target: an },{source: ai , target: bo },{source: ai , target: by },{source: ai , target: ax },{source: ai , target: ba },{source: ai , target: az },{source: bo , target: by },{source: ax , target: ay },{source: ax , target: bo },{source: ax , target: by },{source: ax , target: ba },{source: ax , target: az },{source: ba , target: bo },{source: ba , target: by },{source: az , target: bo },{source: az , target: by },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ay','an','ai','bo','by','ax','ba','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aj bq bv bw bx bz ce cf cg ch ci */ var  aj = {id: 'aj', name:'tell'},bq = {id: 'bq', name:'friesshardt'},bv = {id: 'bv', name:'weiber'},bw = {id: 'bw', name:'rudolf_der_harras'},bx = {id: 'bx', name:'gessler'},bz = {id: 'bz', name:'viele_stimmen'},ce = {id: 'ce', name:'stüssi'},cf = {id: 'cf', name:'wanderer'},cg = {id: 'cg', name:'armgard'},ch = {id: 'ch', name:'volk'},ci = {id: 'ci', name:'barmherzige_brüder'} ; nodes.push( aj,bq,bv,bw,bx,bz,ce,cf,cg,ch,ci ); links.push( {source: aj , target: ce },{source: aj , target: cf },{source: aj , target: cg },{source: aj , target: bq },{source: aj , target: bx },{source: aj , target: bw },{source: aj , target: ch },{source: aj , target: bz },{source: aj , target: bv },{source: aj , target: ci },{source: ce , target: cf },{source: ce , target: cg },{source: ce , target: ch },{source: ce , target: ci },{source: cf , target: cg },{source: cf , target: ch },{source: cf , target: ci },{source: cg , target: ch },{source: cg , target: ci },{source: bq , target: ce },{source: bq , target: cf },{source: bq , target: cg },{source: bq , target: bx },{source: bq , target: bw },{source: bq , target: ch },{source: bq , target: bz },{source: bq , target: bv },{source: bq , target: ci },{source: bx , target: ce },{source: bx , target: cf },{source: bx , target: cg },{source: bx , target: ch },{source: bx , target: bz },{source: bx , target: ci },{source: bw , target: ce },{source: bw , target: cf },{source: bw , target: cg },{source: bw , target: bx },{source: bw , target: ch },{source: bw , target: bz },{source: bw , target: ci },{source: ch , target: ci },{source: bz , target: ce },{source: bz , target: cf },{source: bz , target: cg },{source: bz , target: ch },{source: bz , target: ci },{source: bv , target: ce },{source: bv , target: cf },{source: bv , target: cg },{source: bv , target: bx },{source: bv , target: bw },{source: bv , target: ch },{source: bv , target: bz },{source: bv , target: ci } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj','ce','cf','cg','bq','bx','bw','ch','bv','ci' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae ai an au ax ay bi bj bz ca cj ck cl */ var  ae = {id: 'ae', name:'ruodi'},ai = {id: 'ai', name:'baumgarten'},an = {id: 'an', name:'stauffacher'},au = {id: 'au', name:'meister'},ax = {id: 'ax', name:'melchthal'},ay = {id: 'ay', name:'walter_fürst'},bi = {id: 'bi', name:'rösselmann'},bj = {id: 'bj', name:'sigrist'},bz = nodes[0] ,ca = {id: 'ca', name:'landleute'},cj = {id: 'cj', name:'stier_von_uri'},ck = {id: 'ck', name:'kinder'},cl = {id: 'cl', name:'mehrere_stimmen'} ; nodes.push( ae,ai,an,au,ax,ay,bi,bj,ca,cj,ck,cl ); links.push( {source: ae , target: au },{source: ae , target: cj },{source: ae , target: bi },{source: ae , target: an },{source: ae , target: bj },{source: ae , target: ay },{source: ae , target: ax },{source: ae , target: ck },{source: ae , target: ai },{source: ae , target: cl },{source: ae , target: ca },{source: ae , target: bz },{source: au , target: cj },{source: au , target: bi },{source: au , target: bj },{source: au , target: ay },{source: au , target: ax },{source: au , target: ck },{source: au , target: cl },{source: au , target: ca },{source: au , target: bz },{source: cj , target: ck },{source: cj , target: cl },{source: bi , target: cj },{source: bi , target: bj },{source: bi , target: ck },{source: bi , target: cl },{source: bi , target: ca },{source: bi , target: bz },{source: an , target: au },{source: an , target: cj },{source: an , target: bi },{source: an , target: bj },{source: an , target: ay },{source: an , target: ax },{source: an , target: ck },{source: an , target: cl },{source: an , target: ca },{source: an , target: bz },{source: bj , target: cj },{source: bj , target: ck },{source: bj , target: cl },{source: bj , target: ca },{source: bj , target: bz },{source: ay , target: cj },{source: ay , target: bi },{source: ay , target: bj },{source: ay , target: ck },{source: ay , target: cl },{source: ay , target: ca },{source: ay , target: bz },{source: ax , target: cj },{source: ax , target: bi },{source: ax , target: bj },{source: ax , target: ay },{source: ax , target: ck },{source: ax , target: cl },{source: ax , target: ca },{source: ax , target: bz },{source: ck , target: cl },{source: ai , target: au },{source: ai , target: cj },{source: ai , target: bi },{source: ai , target: an },{source: ai , target: bj },{source: ai , target: ay },{source: ai , target: ax },{source: ai , target: ck },{source: ai , target: cl },{source: ai , target: ca },{source: ai , target: bz },{source: ca , target: cj },{source: ca , target: ck },{source: ca , target: cl },{source: bz , target: cj },{source: bz , target: ck },{source: bz , target: cl },{source: bz , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae','au','cj','bi','an','bj','ay','ax','ck','ai','cl','ca','bz' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aj bn bo bp cm cn */ var  aj = {id: 'aj', name:'tell'},bn = {id: 'bn', name:'walter'},bo = {id: 'bo', name:'hedwig'},bp = {id: 'bp', name:'wilhelm'},cm = {id: 'cm', name:'mönch'},cn = {id: 'cn', name:'parricida'} ; nodes.push( aj,bn,bo,bp,cm,cn ); links.push( {source: bo , target: bp },{source: bo , target: cm },{source: bo , target: cn },{source: bo , target: cn },{source: bn , target: bo },{source: bn , target: bp },{source: bn , target: cm },{source: bn , target: cn },{source: bn , target: cn },{source: bp , target: cm },{source: bp , target: cn },{source: bp , target: cn },{source: cm , target: cn },{source: cm , target: cn },{source: aj , target: bo },{source: aj , target: bn },{source: aj , target: bp },{source: aj , target: cm },{source: aj , target: cn },{source: aj , target: cn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'bo','bn','bp','cm','aj','cn' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* an aw ax ay az ca */ var  an = {id: 'an', name:'stauffacher'},aw = {id: 'aw', name:'berta'},ax = {id: 'ax', name:'melchthal'},ay = {id: 'ay', name:'walter_fürst'},az = {id: 'az', name:'rudenz'},ca = {id: 'ca', name:'landleute'} ; nodes.push( an,aw,ax,ay,az,ca ); links.push( {source: ay , target: ca },{source: ay , target: az },{source: ax , target: ay },{source: ax , target: ca },{source: ax , target: az },{source: an , target: ay },{source: an , target: ax },{source: an , target: ca },{source: an , target: aw },{source: an , target: az },{source: aw , target: ay },{source: aw , target: ax },{source: aw , target: ca },{source: aw , target: az },{source: az , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 70000);
