setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'graves'},ab = {id: 'ab', name:'berkley'},ac = {id: 'ac', name:'hammond'},ad = {id: 'ad', name:'coke'},ae = {id: 'ae', name:'richmond'},af = {id: 'af', name:'karl'},ag = {id: 'ag', name:'mantague'},ah = {id: 'ah', name:'lindsay'},ai = {id: 'ai', name:'joyce'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac','ad','ae','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[1],ai = nodes[8],aj = {id: 'aj', name:'cromwell'},ak = {id: 'ak', name:'prynne'},al = {id: 'al', name:'sydney'},al = {id: 'al', name:'sydney'},am = {id: 'am', name:'ireton'},an = {id: 'an', name:'lilburne'},an = {id: 'an', name:'lilburne'},ao = {id: 'ao', name:'fairfax'},ap = {id: 'ap', name:'ludlow'},aq = {id: 'aq', name:'stimme_harrisons'},ar = {id: 'ar', name:'manchesters_stimme'},ar = {id: 'ar', name:'manchesters_stimme'} ; nodes.push( aj,ak,al,am,an,ao,ap,aq,ar ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ar },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ar },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: an },{source: al , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: an },{source: am , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ar },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: al },{source: ai , target: an },{source: ai , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: ar },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ai },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: al },{source: ab , target: an },{source: ab , target: ar },{source: aq , target: ar },{source: aq , target: ar },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: an },{source: al , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'graves'},ab = nodes[0],ad = {id: 'ad', name:'coke'},af = {id: 'af', name:'karl'},ag = {id: 'ag', name:'mantague'},ai = nodes[1],aj = nodes[2],ak = nodes[3],al = nodes[4],al = nodes[4],am = nodes[6],an = nodes[7],ao = nodes[9],ap = nodes[10],aq = nodes[11],ar = nodes[12],as = {id: 'as', name:'bradshaw'},at = {id: 'at', name:'mehrere'},au = {id: 'au', name:'die_presbyterianer'} ; nodes.push( aa,ad,af,ag,as,at,au ); links.push( {source: af , target: am },{source: af , target: aj },{source: af , target: ar },{source: af , target: ag },{source: af , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: ao },{source: af , target: ap },{source: af , target: as },{source: af , target: an },{source: af , target: aq },{source: af , target: au },{source: af , target: ai },{source: af , target: at },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: am },{source: aa , target: aj },{source: aa , target: ar },{source: aa , target: ag },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: al },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: as },{source: aa , target: an },{source: aa , target: aq },{source: aa , target: au },{source: aa , target: ai },{source: aa , target: at },{source: ab , target: af },{source: ab , target: am },{source: ab , target: aj },{source: ab , target: ar },{source: ab , target: ag },{source: ab , target: al },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: al },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: as },{source: ab , target: an },{source: ab , target: aq },{source: ab , target: au },{source: ab , target: ai },{source: ab , target: at },{source: am , target: ar },{source: am , target: ao },{source: am , target: ap },{source: am , target: as },{source: am , target: an },{source: am , target: aq },{source: am , target: au },{source: am , target: at },{source: aj , target: am },{source: aj , target: ar },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: as },{source: aj , target: an },{source: aj , target: aq },{source: aj , target: au },{source: aj , target: at },{source: ar , target: as },{source: ar , target: au },{source: ar , target: at },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: ar },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: as },{source: ag , target: an },{source: ag , target: aq },{source: ag , target: au },{source: ag , target: ai },{source: ag , target: at },{source: al , target: am },{source: al , target: ar },{source: al , target: ao },{source: al , target: ap },{source: al , target: as },{source: al , target: an },{source: al , target: aq },{source: al , target: au },{source: al , target: at },{source: ak , target: am },{source: ak , target: ar },{source: ak , target: al },{source: ak , target: al },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: as },{source: ak , target: an },{source: ak , target: aq },{source: ak , target: au },{source: ak , target: at },{source: ad , target: af },{source: ad , target: am },{source: ad , target: aj },{source: ad , target: ar },{source: ad , target: ag },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: as },{source: ad , target: an },{source: ad , target: aq },{source: ad , target: au },{source: ad , target: ai },{source: ad , target: at },{source: al , target: am },{source: al , target: ar },{source: al , target: ao },{source: al , target: ap },{source: al , target: as },{source: al , target: an },{source: al , target: aq },{source: al , target: au },{source: al , target: at },{source: ao , target: ar },{source: ao , target: ap },{source: ao , target: as },{source: ao , target: aq },{source: ao , target: au },{source: ao , target: at },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: aq },{source: ap , target: au },{source: ap , target: at },{source: as , target: au },{source: as , target: at },{source: an , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: as },{source: an , target: aq },{source: an , target: au },{source: an , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: au },{source: aq , target: at },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: ar },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: as },{source: ai , target: an },{source: ai , target: aq },{source: ai , target: au },{source: ai , target: at },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','am','aj','ar','ak','ad','ao','ap','as','an','au','ai','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[1],ac = {id: 'ac', name:'hammond'},ae = {id: 'ae', name:'richmond'},af = nodes[3],ag = nodes[4],ah = {id: 'ah', name:'lindsay'},al = nodes[8],aq = nodes[14],aq = nodes[14] ; nodes.push( ac,ae,ah ); links.push( {source: af , target: ag },{source: af , target: al },{source: af , target: ah },{source: af , target: aq },{source: af , target: aq },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: aq },{source: al , target: aq },{source: al , target: aq },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: aq },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: al },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: aq },{source: ac , target: aq },{source: ah , target: al },{source: ah , target: aq },{source: ah , target: aq },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: al },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: aq },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'graves'},ac = nodes[1],ad = {id: 'ad', name:'coke'},af = nodes[3],ag = nodes[4],ag = nodes[4],ai = {id: 'ai', name:'joyce'},aj = {id: 'aj', name:'cromwell'},al = nodes[6],am = {id: 'am', name:'ireton'},ap = {id: 'ap', name:'ludlow'},aq = nodes[7],ar = {id: 'ar', name:'manchesters_stimme'},as = {id: 'as', name:'bradshaw'},av = {id: 'av', name:'draussen_jubelgeschrei'},av = {id: 'av', name:'draussen_jubelgeschrei'},av = {id: 'av', name:'draussen_jubelgeschrei'},aw = {id: 'aw', name:'milton'},ax = {id: 'ax', name:'die_soldaten'},ay = {id: 'ay', name:'stimme_des_henkers'} ; nodes.push( aa,ad,ai,aj,am,ap,ar,as,av,aw,ax,ay ); links.push( {source: al , target: av },{source: al , target: ar },{source: al , target: as },{source: al , target: am },{source: al , target: aq },{source: al , target: ap },{source: al , target: av },{source: al , target: aw },{source: al , target: ax },{source: al , target: ay },{source: al , target: av },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: ag , target: al },{source: ag , target: av },{source: ag , target: ar },{source: ag , target: aj },{source: ag , target: as },{source: ag , target: am },{source: ag , target: aq },{source: ag , target: ap },{source: ag , target: ai },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: av },{source: ar , target: av },{source: ar , target: as },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: av },{source: ac , target: al },{source: ac , target: av },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: aj },{source: ac , target: as },{source: ac , target: am },{source: ac , target: aq },{source: ac , target: ad },{source: ac , target: ap },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: av },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: af },{source: ac , target: ay },{source: ac , target: av },{source: aa , target: al },{source: aa , target: av },{source: aa , target: ag },{source: aa , target: ar },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: as },{source: aa , target: am },{source: aa , target: aq },{source: aa , target: ad },{source: aa , target: ap },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: av },{source: aa , target: aw },{source: aa , target: ax },{source: aa , target: af },{source: aa , target: ay },{source: aa , target: av },{source: aj , target: al },{source: aj , target: av },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: ap },{source: aj , target: av },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: ay },{source: aj , target: av },{source: as , target: av },{source: as , target: av },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: av },{source: am , target: av },{source: am , target: ar },{source: am , target: as },{source: am , target: aq },{source: am , target: ap },{source: am , target: av },{source: am , target: aw },{source: am , target: ax },{source: am , target: ay },{source: am , target: av },{source: aq , target: av },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: av },{source: ad , target: al },{source: ad , target: av },{source: ad , target: ag },{source: ad , target: ar },{source: ad , target: aj },{source: ad , target: as },{source: ad , target: am },{source: ad , target: aq },{source: ad , target: ap },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: av },{source: ad , target: aw },{source: ad , target: ax },{source: ad , target: af },{source: ad , target: ay },{source: ad , target: av },{source: ap , target: av },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: aq },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: av },{source: ai , target: al },{source: ai , target: av },{source: ai , target: ar },{source: ai , target: aj },{source: ai , target: as },{source: ai , target: am },{source: ai , target: aq },{source: ai , target: ap },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: av },{source: ag , target: al },{source: ag , target: av },{source: ag , target: ar },{source: ag , target: aj },{source: ag , target: as },{source: ag , target: am },{source: ag , target: aq },{source: ag , target: ap },{source: ag , target: ai },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: av },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: af , target: al },{source: af , target: av },{source: af , target: ag },{source: af , target: ar },{source: af , target: aj },{source: af , target: as },{source: af , target: am },{source: af , target: aq },{source: af , target: ap },{source: af , target: ai },{source: af , target: ag },{source: af , target: av },{source: af , target: aw },{source: af , target: ax },{source: af , target: ay },{source: af , target: av },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt.';
}, 20000);