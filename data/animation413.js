setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'gurnemanz'},ab = {id: 'ab', name:'zweiter_ritter'},ac = {id: 'ac', name:'zweiter_knappe'},ad = {id: 'ad', name:'erster_knappe'},ae = {id: 'ae', name:'erster_ritter'},af = {id: 'af', name:'kundry'},ag = {id: 'ag', name:'amfortas'},ah = {id: 'ah', name:'dritter_knappe'},ai = {id: 'ai', name:'vierter_knappe'},aj = {id: 'aj', name:'alle_ritter'},aj = {id: 'aj', name:'alle_ritter'},ak = {id: 'ak', name:'knappen'},al = {id: 'al', name:'parsifal'},am = {id: 'am', name:'die_gralsritter'},an = {id: 'an', name:'titurel'},ao = {id: 'ao', name:'stimmen_aus_der_höhe'},ap = {id: 'ap', name:'jünglinge'},aq = {id: 'aq', name:'knabenstimmen'},aq = {id: 'aq', name:'knabenstimmen'},aq = {id: 'aq', name:'knabenstimmen'},ar = {id: 'ar', name:'eine_altstimme'},as = {id: 'as', name:'mittlere_höhe'},at = {id: 'at', name:'aus_der_höchsten_höhe'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: aq },{source: aa , target: an },{source: aa , target: aq },{source: aa , target: ap },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: aq },{source: ab , target: an },{source: ab , target: aq },{source: ab , target: ap },{source: ab , target: aj },{source: ab , target: ao },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: at },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: aq },{source: ac , target: an },{source: ac , target: aq },{source: ac , target: ap },{source: ac , target: aj },{source: ac , target: ao },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: aq },{source: ad , target: an },{source: ad , target: aq },{source: ad , target: ap },{source: ad , target: aj },{source: ad , target: ao },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: at },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: aq },{source: ae , target: an },{source: ae , target: aq },{source: ae , target: ap },{source: ae , target: aj },{source: ae , target: ao },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: as },{source: ae , target: at },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: aq },{source: af , target: an },{source: af , target: aq },{source: af , target: ap },{source: af , target: aj },{source: af , target: ao },{source: af , target: aq },{source: af , target: ar },{source: af , target: as },{source: af , target: at },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: aq },{source: ag , target: an },{source: ag , target: aq },{source: ag , target: ap },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: at },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: aq },{source: ah , target: an },{source: ah , target: aq },{source: ah , target: ap },{source: ah , target: aj },{source: ah , target: ao },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: aq },{source: ai , target: an },{source: ai , target: aq },{source: ai , target: ap },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: aq },{source: aj , target: ap },{source: aj , target: ao },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: ak , target: al },{source: ak , target: am },{source: ak , target: aq },{source: ak , target: an },{source: ak , target: aq },{source: ak , target: ap },{source: ak , target: ao },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: al , target: am },{source: al , target: aq },{source: al , target: an },{source: al , target: aq },{source: al , target: ap },{source: al , target: ao },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: at },{source: am , target: aq },{source: am , target: an },{source: am , target: aq },{source: am , target: ap },{source: am , target: ao },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: an , target: aq },{source: an , target: aq },{source: an , target: ap },{source: an , target: ao },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: aq },{source: aj , target: ap },{source: aj , target: ao },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: ao , target: aq },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ar , target: as },{source: ar , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','ag','ah','ai','aj','ak','am','aq','an','ap','ao','ar','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  af = nodes[5],al = nodes[12],au = {id: 'au', name:'klingsor'},av = {id: 'av', name:'alle_mädchen'},av = {id: 'av', name:'alle_mädchen'},av = {id: 'av', name:'alle_mädchen'},av = {id: 'av', name:'alle_mädchen'},av = {id: 'av', name:'alle_mädchen'},av = {id: 'av', name:'alle_mädchen'},aw = {id: 'aw', name:'erster_chor'},aw = {id: 'aw', name:'erster_chor'},aw = {id: 'aw', name:'erster_chor'},ax = {id: 'ax', name:'zweite_gruppe'},ax = {id: 'ax', name:'zweite_gruppe'},ax = {id: 'ax', name:'zweite_gruppe'},ay = {id: 'ay', name:'erstes_mädchen_der_zweiten_gruppe'},az = {id: 'az', name:'erstes_mädchen_der_ersten_gruppe'},ba = {id: 'ba', name:'zweites_mädchen_der_ersten_gruppe'},bb = {id: 'bb', name:'zweites_mädchen_der_zweiten_gruppe'},bc = {id: 'bc', name:'drittes_mädchen_der_ersten_gruppe'} ; nodes.push( au,av,aw,ax,ay,az,ba,bb,bc ); links.push( {source: au , target: av },{source: au , target: av },{source: au , target: av },{source: au , target: av },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: au , target: bb },{source: au , target: bc },{source: au , target: aw },{source: au , target: ax },{source: au , target: ax },{source: au , target: aw },{source: au , target: av },{source: af , target: au },{source: af , target: av },{source: af , target: av },{source: af , target: av },{source: af , target: av },{source: af , target: av },{source: af , target: al },{source: af , target: aw },{source: af , target: ax },{source: af , target: ay },{source: af , target: az },{source: af , target: ba },{source: af , target: bb },{source: af , target: bc },{source: af , target: aw },{source: af , target: ax },{source: af , target: ax },{source: af , target: aw },{source: af , target: av },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: av , target: aw },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: av , target: aw },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: av , target: aw },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: av , target: aw },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: av , target: aw },{source: al , target: au },{source: al , target: av },{source: al , target: av },{source: al , target: av },{source: al , target: av },{source: al , target: av },{source: al , target: aw },{source: al , target: ax },{source: al , target: ay },{source: al , target: az },{source: al , target: ba },{source: al , target: bb },{source: al , target: bc },{source: al , target: aw },{source: al , target: ax },{source: al , target: ax },{source: al , target: aw },{source: al , target: av },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: ax },{source: aw , target: ax },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: bb , target: bc },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: ax },{source: aw , target: ax },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: ax },{source: aw , target: ax },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'au','af','av','aw','ax','ay','az','ba','bb','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'gurnemanz'},ag = {id: 'ag', name:'amfortas'},aj = {id: 'aj', name:'alle_ritter'},al = nodes[1],bd = {id: 'bd', name:'erster_zug'},be = {id: 'be', name:'zweiter_zug'} ; nodes.push( aa,ag,aj,bd,be ); links.push( {source: aa , target: al },{source: aa , target: bd },{source: aa , target: be },{source: aa , target: ag },{source: aa , target: aj },{source: al , target: bd },{source: al , target: be },{source: bd , target: be },{source: ag , target: al },{source: ag , target: bd },{source: ag , target: be },{source: ag , target: aj },{source: aj , target: al },{source: aj , target: bd },{source: aj , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
}, 10000);