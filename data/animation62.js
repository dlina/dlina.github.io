setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'chor_der_alten_zauberer'},ab = {id: 'ab', name:'stellaris'},ac = {id: 'ac', name:'mystifax'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'lumpazi'},ae = {id: 'ae', name:'fludribus'},af = {id: 'af', name:'die_väter'},ag = {id: 'ag', name:'alle_söhne'},ag = {id: 'ag', name:'alle_söhne'},ah = {id: 'ah', name:'hilaris'},ai = {id: 'ai', name:'fortuna'},aj = {id: 'aj', name:'brillantine'} ; nodes.push( ad,ae,af,ag,ah,ai,aj ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: af , target: ag },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ae','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ac = nodes[1],ah = nodes[7],ai = nodes[8],aj = nodes[9],ak = {id: 'ak', name:'amorosa'},al = {id: 'al', name:'chor'} ; nodes.push( ak,al ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: al },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ai','aj','ah','ab','ac','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  am = {id: 'am', name:'leim'},an = {id: 'an', name:'knieriem'},ao = {id: 'ao', name:'zwirn'} ; nodes.push( am,an,ao ); links.push( {source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  am = nodes[0],an = nodes[1],ao = nodes[2],ap = {id: 'ap', name:'fassel'},aq = {id: 'aq', name:'hannerl'},ar = {id: 'ar', name:'handwerksbursch'},as = {id: 'as', name:'kniereim'} ; nodes.push( ap,aq,ar,as ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: an , target: ap },{source: an , target: ao },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: am , target: ap },{source: am , target: ao },{source: am , target: an },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ap','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  am = nodes[0],an = nodes[1],ao = nodes[2],at = {id: 'at', name:'pantsch'},au = {id: 'au', name:'stimmen'} ; nodes.push( at,au ); links.push( {source: am , target: an },{source: am , target: ao },{source: am , target: at },{source: am , target: au },{source: an , target: ao },{source: an , target: at },{source: an , target: au },{source: ao , target: at },{source: ao , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  am = nodes[0],an = nodes[1],ao = nodes[2],aq = {id: 'aq', name:'hannerl'},av = {id: 'av', name:'sepherl'} ; nodes.push( aq,av ); links.push( {source: aq , target: av },{source: ao , target: aq },{source: ao , target: av },{source: am , target: aq },{source: am , target: av },{source: am , target: ao },{source: am , target: an },{source: an , target: aq },{source: an , target: av },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aq','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  am = nodes[0],an = nodes[1],ao = nodes[2],aw = {id: 'aw', name:'hausierer'} ; nodes.push( aw ); links.push( {source: am , target: aw },{source: am , target: an },{source: am , target: ao },{source: an , target: aw },{source: an , target: ao },{source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  am = nodes[0],an = nodes[1],ao = nodes[2],av = {id: 'av', name:'sepherl'},ax = {id: 'ax', name:'alle_weiber'},ay = {id: 'ay', name:'ein_zimmermann'} ; nodes.push( av,ax,ay ); links.push( {source: av , target: ax },{source: av , target: ay },{source: am , target: av },{source: am , target: ao },{source: am , target: ax },{source: am , target: ay },{source: am , target: an },{source: ao , target: av },{source: ao , target: ax },{source: ao , target: ay },{source: ax , target: ay },{source: an , target: av },{source: an , target: ao },{source: an , target: ax },{source: an , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'av','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  al = {id: 'al', name:'chor'},am = nodes[0],an = nodes[1],ao = nodes[2],at = {id: 'at', name:'pantsch'} ; nodes.push( al,at ); links.push( {source: am , target: at },{source: am , target: an },{source: am , target: ao },{source: an , target: at },{source: an , target: ao },{source: ao , target: at },{source: al , target: at },{source: al , target: am },{source: al , target: an },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'at','am','an','ao','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  az = {id: 'az', name:'fremder'},ba = {id: 'ba', name:'gertraud'} ; nodes.push( az,ba ); links.push( {source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  az = nodes[0],bb = {id: 'bb', name:'hobelmann'} ; nodes.push( bb ); links.push( {source: az , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'bb','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  am = {id: 'am', name:'leim'},ba = {id: 'ba', name:'gertraud'} ; nodes.push( am,ba ); links.push( {source: am , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  am = nodes[0],bb = {id: 'bb', name:'hobelmann'} ; nodes.push( bb ); links.push( {source: am , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  am = nodes[0],bb = nodes[1],bc = {id: 'bc', name:'peppi'} ; nodes.push( bc ); links.push( {source: am , target: bc },{source: am , target: bb },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  am = nodes[0],bb = nodes[1] ; /* nodes.push(); */ links.push( {source: am , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  am = nodes[0],bb = nodes[1],bc = {id: 'bc', name:'peppi'},bd = {id: 'bd', name:'strudl'} ; nodes.push( bc,bd ); links.push( {source: bb , target: bd },{source: bb , target: bc },{source: am , target: bb },{source: am , target: bd },{source: am , target: bc },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'bb','bd','am','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ao = {id: 'ao', name:'zwirn'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ao = nodes[0],be = {id: 'be', name:'erster_bedienter'},bf = {id: 'bf', name:'erster_gesell'},bg = {id: 'bg', name:'zweiter_gesell'},bh = {id: 'bh', name:'zweiter_bedienter'} ; nodes.push( be,bf,bg,bh ); links.push( {source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: ao , target: be },{source: ao , target: bf },{source: ao , target: bg },{source: ao , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'be','bf','bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ao = nodes[0],bi = {id: 'bi', name:'maler'} ; nodes.push( bi ); links.push( {source: ao , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ao = nodes[0],bi = nodes[1],bj = {id: 'bj', name:'hackauf'} ; nodes.push( bj ); links.push( {source: ao , target: bj },{source: ao , target: bi },{source: bi , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'bj','bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ao = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ao = nodes[0],bk = {id: 'bk', name:'windwachel'},bl = {id: 'bl', name:'lüftig'} ; nodes.push( bk,bl ); links.push( {source: bk , target: bl },{source: ao , target: bk },{source: ao , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ao = nodes[0],bk = nodes[1],bm = {id: 'bm', name:'palpiti'} ; nodes.push( bm ); links.push( {source: ao , target: bm },{source: ao , target: bk },{source: bk , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  bk = nodes[1],bm = nodes[2],bn = {id: 'bn', name:'camilla'},bo = {id: 'bo', name:'laura'} ; nodes.push( bn,bo ); links.push( {source: bn , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: bk , target: bn },{source: bk , target: bo },{source: bk , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ao = {id: 'ao', name:'zwirn'},be = {id: 'be', name:'erster_bedienter'},bk = nodes[0],bn = nodes[2],bo = nodes[3] ; nodes.push( ao,be ); links.push( {source: bn , target: bo },{source: ao , target: bn },{source: ao , target: bk },{source: ao , target: be },{source: ao , target: bo },{source: bk , target: bn },{source: bk , target: bo },{source: be , target: bn },{source: be , target: bk },{source: be , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bk','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  al = {id: 'al', name:'chor'},ao = nodes[0],bl = {id: 'bl', name:'lüftig'},bn = nodes[3],bo = nodes[4],bp = {id: 'bp', name:'chor_der_gesellschaft'} ; nodes.push( al,bl,bp ); links.push( {source: ao , target: bp },{source: ao , target: bl },{source: ao , target: bn },{source: ao , target: bo },{source: bl , target: bp },{source: bl , target: bn },{source: bl , target: bo },{source: bn , target: bp },{source: bn , target: bo },{source: bo , target: bp },{source: al , target: bp },{source: al , target: ao },{source: al , target: bl },{source: al , target: bn },{source: al , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bp','ao','bl','bn','bo','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ba = {id: 'ba', name:'gertraud'},bq = {id: 'bq', name:'reserl'} ; nodes.push( ba,bq ); links.push( {source: ba , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  an = {id: 'an', name:'knieriem'},ao = {id: 'ao', name:'zwirn'},ba = nodes[0],bq = nodes[1] ; nodes.push( an,ao ); links.push( {source: ao , target: ba },{source: ao , target: bq },{source: ba , target: bq },{source: an , target: ao },{source: an , target: ba },{source: an , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ba','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  an = nodes[0],ao = nodes[1] ; /* nodes.push(); */ links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  an = nodes[0],ao = nodes[1],bb = {id: 'bb', name:'hobelmann'} ; nodes.push( bb ); links.push( {source: ao , target: bb },{source: an , target: bb },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  am = {id: 'am', name:'leim'},an = nodes[0],ao = nodes[1] ; nodes.push( am ); links.push( {source: am , target: ao },{source: am , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  am = nodes[0],ao = nodes[2],bb = {id: 'bb', name:'hobelmann'},bc = {id: 'bc', name:'peppi'} ; nodes.push( bb,bc ); links.push( {source: am , target: bc },{source: am , target: ao },{source: am , target: bb },{source: ao , target: bc },{source: ao , target: bb },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'am','ao','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  an = {id: 'an', name:'knieriem'},bc = nodes[3] ; nodes.push( an ); links.push( {source: an , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  an = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ao = {id: 'ao', name:'zwirn'},bq = {id: 'bq', name:'reserl'} ; nodes.push( ao,bq ); links.push( {source: ao , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  am = {id: 'am', name:'leim'},ao = nodes[0] ; nodes.push( am ); links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  am = nodes[0],an = {id: 'an', name:'knieriem'} ; nodes.push( an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  an = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ab = {id: 'ab', name:'stellaris'},br = {id: 'br', name:'wirtin'} ; nodes.push( ab,br ); links.push( {source: ab , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'br' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ab = nodes[0],an = {id: 'an', name:'knieriem'} ; nodes.push( an ); links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  an = nodes[1],ao = {id: 'ao', name:'zwirn'},br = {id: 'br', name:'wirtin'},bs = {id: 'bs', name:'alle_bauern'} ; nodes.push( ao,br,bs ); links.push( {source: br , target: bs },{source: an , target: br },{source: an , target: bs },{source: an , target: ao },{source: ao , target: br },{source: ao , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'br','bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ab = {id: 'ab', name:'stellaris'},an = nodes[0],ao = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ao },{source: ab , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ab = nodes[0],ah = {id: 'ah', name:'hilaris'},ai = {id: 'ai', name:'fortuna'},ak = {id: 'ak', name:'amorosa'},al = {id: 'al', name:'chor'},am = {id: 'am', name:'leim'},an = nodes[1],ao = nodes[2],bf = {id: 'bf', name:'erster_gesell'},bg = {id: 'bg', name:'zweiter_gesell'},bt = {id: 'bt', name:'alle_gesellen'} ; nodes.push( ah,ai,ak,al,am,bf,bg,bt ); links.push( {source: ai , target: ak },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: bt },{source: ai , target: bf },{source: ai , target: bg },{source: ai , target: am },{source: ai , target: al },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: bt },{source: ah , target: bf },{source: ah , target: bg },{source: ah , target: am },{source: ah , target: al },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: bt },{source: ak , target: bf },{source: ak , target: bg },{source: ak , target: am },{source: ak , target: al },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: bt },{source: ab , target: bf },{source: ab , target: bg },{source: ab , target: am },{source: ab , target: al },{source: an , target: ao },{source: an , target: bt },{source: an , target: bf },{source: an , target: bg },{source: ao , target: bt },{source: ao , target: bf },{source: ao , target: bg },{source: bf , target: bt },{source: bf , target: bg },{source: bg , target: bt },{source: am , target: an },{source: am , target: ao },{source: am , target: bt },{source: am , target: bf },{source: am , target: bg },{source: al , target: an },{source: al , target: ao },{source: al , target: bt },{source: al , target: bf },{source: al , target: bg },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 215000);