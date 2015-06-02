---
layout: post
title: "Longest German-Language Theatre Plays"
author: frank, mathias
description: 
headline: 
modified: 2015-06-02
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: true
---
We had another meeting today and, as always, were working our way through the vast [TextGrid Repository}(http://www.textgridrep.de/). Since we're only interested in the dramatic texts contained in the corpus, we had to find a way to automatically extract these kinds of texts which isn't as easy as it sounds. Anyway, we finally finished this task and also wrote a small (hehe) 30.000-character piece on the subject which is to appear later. For the time being, the extracted dramas can be found as single XML files [here on our Github](https://github.com/DLiNa/project/tree/master/data/textgrid-repository-dramas).

When we were looking at the files we had the quick idea to make a list of the top 10 longest German-language theatre plays contained in the TextGrid Repository. And here they are, measured by their file size:

1. Holz, Arno: Ignorabimus (2,1 MB)
2. Schiller, Friedrich: Wallenstein (1,99 MB)
3. Fouqué, Friedrich de la Motte: Der Held des Nordens (1,88 MB)
4. Brentano, Clemens: Die Gründung Prags (1,81 MB)
5. Baggesen, Jens: Der vollendete Faust oder Romanien in Jauer (1,69 MB)
6. Hebbel, Friedrich: Die Nibelungen (1,61 MB)
7. Immermann, Karl: Alexis (1,49 MB)
8. Rosner, Ferdinand: Oberammergauer Passionspiel (1,48 MB)
9. Grabbe, Christian Dietrich: Herzog Theodor von Gothland (1,40 MB)
10. Arnim, Ludwig Achim von: Halle und Jerusalem (1,35 MB)

Around two thirds of each file is TEI markup (wild guess). So here is another version of our top 10, this time measured by the number of words inside `<sp>` (since we're talking about theatre plays here):

1. Holz, Arno: Ignorabimus (100,283 words)
2. Arnim, Ludwig Achim von: Halle und Jerusalem (74,675 words)
3. Brentano, Clemens: Die Gründung Prags (70,672 words)
4. Fouqué, Friedrich de la Motte: Der Held des Nordens (63,074 words)
5. Schiller, Friedrich: Wallenstein (56,820 words)
6. Tieck, Ludwig: Prinz Zerbino oder die Reise nach dem guten Geschmack (56,759 words)
7. Holz, Arno: Sonnenfinsternis (53,909 words)
8. Rosner, Ferdinand: Oberammergauer Passionspiel (52,717 words)
9. Goethe, Johann Wolfgang: Faust. Der Tragödie zweiter Teil (46,180 words)
10. Müller, Friedrich (Maler Müller): Golo und Genovefa (45,904 words)

For the fans, this is our query ("textgrid-repository-dramas" is our collection):

    xquery version "3.0";
    declare namespace tei = "http://www.tei-c.org/ns/1.0";
    for $file in xmldb:get-child-resources('/db/data/textgrid-repository-dramas')
	    order by count(tokenize(string-join(doc('/db/data/textgrid-repository-dramas/' || $file)//tei:sp), '\W+')[. != '']) descending
    return
        (count(tokenize(string-join(doc('/db/data/textgrid-repository-dramas/' || $file)//tei:sp), '\W+')[. != '']), $file)

Ok, there's more where this came from, stay tuned! :-)