setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'könig'},ab = {id: 'ab', name:'narr'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad ae af ag ah ai aj ak al am an ao ap */ var  ab = nodes[0] ,ac = {id: 'ac', name:'bürgermeister'},ad = {id: 'ad', name:'paphnutius'},ae = {id: 'ae', name:'erster_bürger'},af = {id: 'af', name:'zweiter_bürger'},ag = {id: 'ag', name:'dritter_bürger'},ah = {id: 'ah', name:'vierter_bürger'},ai = {id: 'ai', name:'sechster_bürger'},aj = {id: 'aj', name:'andrer_bürger'},ak = {id: 'ak', name:'fünfter_bürger'},al = {id: 'al', name:'siebenter_bürger'},am = {id: 'am', name:'achter_bürger'},an = {id: 'an', name:'gymnasiast'},ao = {id: 'ao', name:'neunter_bürger'},ap = {id: 'ap', name:'zehnter_bürger'} ; nodes.push( ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa aq ar as at au av aw ax ay az cd */ var  aa = {id: 'aa', name:'könig'},aq = {id: 'aq', name:'reigen'},ar = {id: 'ar', name:'er'},as = {id: 'as', name:'sie'},at = {id: 'at', name:'vater'},au = {id: 'au', name:'bauer'},av = {id: 'av', name:'tänzer'},aw = {id: 'aw', name:'erster_jäger'},ax = {id: 'ax', name:'oberjägermeister'},ay = {id: 'ay', name:'zweiter_jäger'},az = {id: 'az', name:'dritter_jäger'},cd = {id: 'cd', name:'bauern'} ; nodes.push( aa,aq,ar,as,at,au,av,aw,ax,ay,az,cd ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: au },{source: aq , target: cd },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: az },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: aa , target: au },{source: aa , target: au },{source: aa , target: cd },{source: aa , target: av },{source: aa , target: aw },{source: aa , target: ax },{source: aa , target: ay },{source: aa , target: az },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: au },{source: ar , target: cd },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: az },{source: as , target: at },{source: as , target: au },{source: as , target: au },{source: as , target: cd },{source: as , target: av },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: at , target: au },{source: at , target: au },{source: at , target: cd },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: at , target: az },{source: au , target: cd },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: cd },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: av , target: cd },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: aw , target: cd },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: ax , target: cd },{source: ax , target: ay },{source: ax , target: az },{source: ay , target: cd },{source: ay , target: az },{source: az , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aq','aa','ar','as','at','au','cd','av','aw','ax','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ba bb bc bd be */ var  ba = {id: 'ba', name:'kriegsgesang'},bb = {id: 'bb', name:'biester'},bc = {id: 'bc', name:'nicolai'},bd = {id: 'bd', name:'nothanker'},be = {id: 'be', name:'gesang'} ; nodes.push( ba,bb,bc,bd,be ); links.push( {source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: bd },{source: ba , target: be },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: bd },{source: bb , target: be },{source: bc , target: bd },{source: bc , target: bd },{source: bc , target: be },{source: bd , target: be },{source: bd , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ba','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa bb bc be bf bg bh bi bj bk bl bm bn bo bp bq br bs cb */ var  aa = {id: 'aa', name:'könig'},bb = nodes[0] ,bc = nodes[1] ,be = nodes[2] ,bf = {id: 'bf', name:'ralf'},bg = {id: 'bg', name:'kunz'},bh = {id: 'bh', name:'offizier'},bi = {id: 'bi', name:'soldaten'},bj = {id: 'bj', name:'blaue'},bk = {id: 'bk', name:'freimund'},bl = {id: 'bl', name:'willibald'},bm = {id: 'bm', name:'draussen'},bn = {id: 'bn', name:'mathilde'},bo = {id: 'bo', name:'die_schlepptragenden_jünglinge'},bp = {id: 'bp', name:'erster_soldat'},bq = {id: 'bq', name:'zweiter_soldat'},br = {id: 'br', name:'dritter_soldat'},bs = {id: 'bs', name:'vierter_soldat'},cb = {id: 'cb', name:'andre'} ; nodes.push( aa,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,cb ); links.push( {source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bj },{source: bf , target: bk },{source: bf , target: bl },{source: bf , target: bn },{source: bf , target: bo },{source: bf , target: cb },{source: bf , target: bp },{source: bf , target: bq },{source: bf , target: br },{source: bf , target: bs },{source: bf , target: bm },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: bg , target: bn },{source: bg , target: bo },{source: bg , target: cb },{source: bg , target: bp },{source: bg , target: bq },{source: bg , target: br },{source: bg , target: bs },{source: bg , target: bm },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bn },{source: bh , target: bo },{source: bh , target: cb },{source: bh , target: bp },{source: bh , target: bq },{source: bh , target: br },{source: bh , target: bs },{source: bh , target: bm },{source: bi , target: bj },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bn },{source: bi , target: bo },{source: bi , target: cb },{source: bi , target: bp },{source: bi , target: bq },{source: bi , target: br },{source: bi , target: bs },{source: bi , target: bm },{source: bc , target: bf },{source: bc , target: bg },{source: bc , target: bh },{source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bj },{source: bc , target: bk },{source: bc , target: bl },{source: bc , target: bn },{source: bc , target: bo },{source: bc , target: cb },{source: bc , target: bp },{source: bc , target: bq },{source: bc , target: br },{source: bc , target: bs },{source: bc , target: bm },{source: bc , target: be },{source: bb , target: bf },{source: bb , target: bg },{source: bb , target: bh },{source: bb , target: bi },{source: bb , target: bc },{source: bb , target: bj },{source: bb , target: bj },{source: bb , target: bk },{source: bb , target: bl },{source: bb , target: bn },{source: bb , target: bo },{source: bb , target: cb },{source: bb , target: bp },{source: bb , target: bq },{source: bb , target: br },{source: bb , target: bs },{source: bb , target: bm },{source: bb , target: be },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bn },{source: bj , target: bo },{source: bj , target: cb },{source: bj , target: bp },{source: bj , target: bq },{source: bj , target: br },{source: bj , target: bs },{source: bj , target: bm },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bn },{source: bj , target: bo },{source: bj , target: cb },{source: bj , target: bp },{source: bj , target: bq },{source: bj , target: br },{source: bj , target: bs },{source: bj , target: bm },{source: bk , target: bl },{source: bk , target: bn },{source: bk , target: bo },{source: bk , target: cb },{source: bk , target: bp },{source: bk , target: bq },{source: bk , target: br },{source: bk , target: bs },{source: bk , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bl , target: cb },{source: bl , target: bp },{source: bl , target: bq },{source: bl , target: br },{source: bl , target: bs },{source: bl , target: bm },{source: bn , target: bo },{source: bn , target: cb },{source: bn , target: bp },{source: bn , target: bq },{source: bn , target: br },{source: bn , target: bs },{source: bo , target: cb },{source: bo , target: bp },{source: bo , target: bq },{source: bo , target: br },{source: bo , target: bs },{source: aa , target: bf },{source: aa , target: bg },{source: aa , target: bh },{source: aa , target: bi },{source: aa , target: bc },{source: aa , target: bb },{source: aa , target: bj },{source: aa , target: bj },{source: aa , target: bk },{source: aa , target: bl },{source: aa , target: bn },{source: aa , target: bo },{source: aa , target: cb },{source: aa , target: bp },{source: aa , target: bq },{source: aa , target: br },{source: aa , target: bs },{source: aa , target: bm },{source: aa , target: be },{source: bp , target: cb },{source: bp , target: bq },{source: bp , target: br },{source: bp , target: bs },{source: bq , target: cb },{source: bq , target: br },{source: bq , target: bs },{source: br , target: cb },{source: br , target: bs },{source: bs , target: cb },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: cb },{source: bm , target: bp },{source: bm , target: bq },{source: bm , target: br },{source: bm , target: bs },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bi },{source: be , target: bj },{source: be , target: bj },{source: be , target: bk },{source: be , target: bl },{source: be , target: bn },{source: be , target: bo },{source: be , target: cb },{source: be , target: bp },{source: be , target: bq },{source: be , target: br },{source: be , target: bs },{source: be , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'bf','bg','bh','bi','bc','bb','bj','bl','bn','bo','cb','aa','bp','bq','br','bs','bm','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ad bk bt */ var  ab = {id: 'ab', name:'narr'},ad = {id: 'ad', name:'paphnutius'},bk = nodes[0] ,bt = {id: 'bt', name:'colombine'} ; nodes.push( ab,ad,bt ); links.push( {source: ad , target: bk },{source: ad , target: bt },{source: ab , target: ad },{source: ab , target: bk },{source: ab , target: bt },{source: bk , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VI.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ad bc bf bg bk bl bn bt bu bv bw bx by bz ca cb cc */ var  aa = {id: 'aa', name:'könig'},ab = nodes[0] ,ad = nodes[1] ,bc = {id: 'bc', name:'nicolai'},bf = {id: 'bf', name:'ralf'},bg = {id: 'bg', name:'kunz'},bk = nodes[2] ,bl = {id: 'bl', name:'willibald'},bn = {id: 'bn', name:'mathilde'},bt = nodes[3] ,bu = {id: 'bu', name:'erster_diener'},bv = {id: 'bv', name:'zweiter_diener'},bw = {id: 'bw', name:'dritter_diener'},bx = {id: 'bx', name:'vierter_diener'},by = {id: 'by', name:'fünfter_diener'},bz = {id: 'bz', name:'sechster_diener'},ca = {id: 'ca', name:'wächter'},cb = {id: 'cb', name:'andre'},cc = {id: 'cc', name:'general'} ; nodes.push( aa,bc,bf,bg,bl,bn,bu,bv,bw,bx,by,bz,ca,cb,cc ); links.push( {source: bt , target: bu },{source: bt , target: bv },{source: bt , target: bw },{source: bt , target: bx },{source: bt , target: by },{source: bt , target: bz },{source: bt , target: ca },{source: bt , target: cb },{source: bt , target: cb },{source: bt , target: cb },{source: bt , target: cc },{source: ad , target: bt },{source: ad , target: bu },{source: ad , target: bv },{source: ad , target: bw },{source: ad , target: bx },{source: ad , target: by },{source: ad , target: bz },{source: ad , target: bk },{source: ad , target: ca },{source: ad , target: cb },{source: ad , target: cb },{source: ad , target: cb },{source: ad , target: bf },{source: ad , target: cc },{source: ad , target: bg },{source: ad , target: bl },{source: ad , target: bn },{source: ad , target: bc },{source: ab , target: bt },{source: ab , target: ad },{source: ab , target: bu },{source: ab , target: bv },{source: ab , target: bw },{source: ab , target: bx },{source: ab , target: by },{source: ab , target: bz },{source: ab , target: bk },{source: ab , target: ca },{source: ab , target: cb },{source: ab , target: cb },{source: ab , target: cb },{source: ab , target: bf },{source: ab , target: cc },{source: ab , target: bg },{source: ab , target: bl },{source: ab , target: bn },{source: ab , target: bc },{source: bu , target: bv },{source: bu , target: bw },{source: bu , target: bx },{source: bu , target: by },{source: bu , target: bz },{source: bu , target: ca },{source: bu , target: cb },{source: bu , target: cb },{source: bu , target: cb },{source: bu , target: cc },{source: bv , target: bw },{source: bv , target: bx },{source: bv , target: by },{source: bv , target: bz },{source: bv , target: ca },{source: bv , target: cb },{source: bv , target: cb },{source: bv , target: cb },{source: bv , target: cc },{source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bw , target: cb },{source: bw , target: cb },{source: bw , target: cb },{source: bw , target: cc },{source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: bx , target: cb },{source: bx , target: cb },{source: bx , target: cb },{source: bx , target: cc },{source: by , target: bz },{source: by , target: ca },{source: by , target: cb },{source: by , target: cb },{source: by , target: cb },{source: by , target: cc },{source: bz , target: ca },{source: bz , target: cb },{source: bz , target: cb },{source: bz , target: cb },{source: bz , target: cc },{source: bk , target: bt },{source: bk , target: bu },{source: bk , target: bv },{source: bk , target: bw },{source: bk , target: bx },{source: bk , target: by },{source: bk , target: bz },{source: bk , target: ca },{source: bk , target: cb },{source: bk , target: cb },{source: bk , target: cb },{source: bk , target: cc },{source: bk , target: bl },{source: bk , target: bn },{source: ca , target: cb },{source: ca , target: cb },{source: ca , target: cb },{source: ca , target: cc },{source: cb , target: cc },{source: cb , target: cc },{source: cb , target: cc },{source: aa , target: bt },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: bu },{source: aa , target: bv },{source: aa , target: bw },{source: aa , target: bx },{source: aa , target: by },{source: aa , target: bz },{source: aa , target: bk },{source: aa , target: ca },{source: aa , target: cb },{source: aa , target: cb },{source: aa , target: cb },{source: aa , target: bf },{source: aa , target: cc },{source: aa , target: bg },{source: aa , target: bl },{source: aa , target: bn },{source: aa , target: bc },{source: bf , target: bt },{source: bf , target: bu },{source: bf , target: bv },{source: bf , target: bw },{source: bf , target: bx },{source: bf , target: by },{source: bf , target: bz },{source: bf , target: bk },{source: bf , target: ca },{source: bf , target: cb },{source: bf , target: cb },{source: bf , target: cb },{source: bf , target: cc },{source: bf , target: bg },{source: bf , target: bl },{source: bf , target: bn },{source: bg , target: bt },{source: bg , target: bu },{source: bg , target: bv },{source: bg , target: bw },{source: bg , target: bx },{source: bg , target: by },{source: bg , target: bz },{source: bg , target: bk },{source: bg , target: ca },{source: bg , target: cb },{source: bg , target: cb },{source: bg , target: cb },{source: bg , target: cc },{source: bg , target: bl },{source: bg , target: bn },{source: bl , target: bt },{source: bl , target: bu },{source: bl , target: bv },{source: bl , target: bw },{source: bl , target: bx },{source: bl , target: by },{source: bl , target: bz },{source: bl , target: ca },{source: bl , target: cb },{source: bl , target: cb },{source: bl , target: cb },{source: bl , target: cc },{source: bl , target: bn },{source: bn , target: bt },{source: bn , target: bu },{source: bn , target: bv },{source: bn , target: bw },{source: bn , target: bx },{source: bn , target: by },{source: bn , target: bz },{source: bn , target: ca },{source: bn , target: cb },{source: bn , target: cb },{source: bn , target: cb },{source: bn , target: cc },{source: bc , target: bt },{source: bc , target: bu },{source: bc , target: bv },{source: bc , target: bw },{source: bc , target: bx },{source: bc , target: by },{source: bc , target: bz },{source: bc , target: bk },{source: bc , target: ca },{source: bc , target: cb },{source: bc , target: cb },{source: bc , target: cb },{source: bc , target: bf },{source: bc , target: cc },{source: bc , target: bg },{source: bc , target: bl },{source: bc , target: bn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VII.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 30000);
