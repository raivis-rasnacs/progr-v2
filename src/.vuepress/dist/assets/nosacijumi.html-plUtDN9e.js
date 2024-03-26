import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as s,c as t,d as o,e,a as d,w as l,b as r}from"./app-DQhFOUgs.js";const c={},p=r(`<h1 id="nosacijumu-veidosana" tabindex="-1"><a class="header-anchor" href="#nosacijumu-veidosana"><span>Nosacījumu veidošana</span></a></h1><p>Python programmēšanas valodā nosacījumi teik veidoti šadā veidā:</p><p>Python kodā atdalīšana notiek līmeņos. Visi vienādie līmeņi tiek izpildīti pēc kārtas. Līmeņus ievieš ar <code>TAB</code> taustiņu vai <code>SPACE</code> spiežot 4 reizes, bet visā kodā jābūt vienādiem atdalītājiem, atsarpes vai tabulatori.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if nosacījums :
    [TABULATORA ATKĀPE] notikums
else:
    [TABULATORA ATKĀPE] notikums
Ja mums ir vairāk par vienu pārbaudi:
if nosacījums :
    [TABULATORA ATKĀPE] notikums
elif nosacījums2:
    [TABULATORA ATKĀPE] notikums
elif nosacījums3:
    [TABULATORA ATKĀPE] notikums

Kur [TABULATORA ATKĀPE] ir taustiņš TAB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Veidojot nosacījumus pēc principa <code>if ... elif ... else</code> tie izpildās šādi:</p><p>Ja neizpildās <code>if</code>, pārbauda <code>elif</code> bloku. Ja neizpildās <code>elif</code> bloks, jebkurā gadījumā izpilda <code>else</code> bloku.</p><p>Piemēri:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">0</span>
y <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">if</span> x <span class="token operator">&lt;</span> y<span class="token punctuation">:</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;x ir mazāks nekā y&#39;</span><span class="token punctuation">)</span>
    
<span class="token keyword">if</span> y <span class="token operator">&lt;</span> x<span class="token punctuation">:</span> 
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;y ir mazāks nekā x&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(u,v){const a=i("RouteLink");return s(),t("div",null,[p,o("p",null,[e("Dodies "),d(a,{to:"/programmesana/python/saraksti.html#meklesana"},{default:l(()=>[e("šeit")]),_:1}),e(" un izpēti, kā nosacījumus pielieto sarakstiem!")])])}const b=n(c,[["render",m],["__file","nosacijumi.html.vue"]]),y=JSON.parse('{"path":"/programmesana/python/nosacijumi.html","title":"Nosacījumu veidošana","lang":"en-US","frontmatter":{"title":"Nosacījumu veidošana","description":"Nosacījumu veidošana Python programmēšanas valodā nosacījumi teik veidoti šadā veidā: Python kodā atdalīšana notiek līmeņos. Visi vienādie līmeņi tiek izpildīti pēc kārtas. Līme...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/python/nosacijumi.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Nosacījumu veidošana"}],["meta",{"property":"og:description","content":"Nosacījumu veidošana Python programmēšanas valodā nosacījumi teik veidoti šadā veidā: Python kodā atdalīšana notiek līmeņos. Visi vienādie līmeņi tiek izpildīti pēc kārtas. Līme..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nosacījumu veidošana\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.47,"words":142},"filePathRelative":"programmesana/python/nosacijumi.md","autoDesc":true}');export{b as comp,y as data};