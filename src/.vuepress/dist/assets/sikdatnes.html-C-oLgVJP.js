import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,b as s}from"./app-DQhFOUgs.js";const n={},r=s(`<h1 id="sikdatnes" tabindex="-1"><a class="header-anchor" href="#sikdatnes"><span>Sīkdatnes</span></a></h1><p>Sīkdatnes (cookies) ļauj datorā saglabāt mazas datu vienības par mājas lapas apmeklētāju.</p><p>Var teikt, ka sīkdatne ir mazs fails pārlūkprogrammas kešatmiņā, kas satur parametrus un to vērtības.</p><p>Apskatīsim piemēru...</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;lietotajs=Andris&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Piemērā redzams, kā sīkdatnē iestata lapas apmeklētāja vārdu.</p><p>Noklusēti sīkdatnes tiek dzēstas, aizverot pārlūkprogrammu, bet iespējams definēt arī sīkdatnes derīguma termiņu.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;lietotajs=Andris; expires=Wed, 10 Nov 2021 12:00:00 UTC; path=/;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parametrs <em>path</em> norāda noklusēto ceļu uz mājas lapas direktoriju.</p><p>Lai dzēstu sīkdatni, tai iestata atpakaļejošu datumu.</p>`,10),i=[r];function o(p,d){return t(),e("div",null,i)}const c=a(n,[["render",o],["__file","sikdatnes.html.vue"]]),k=JSON.parse('{"path":"/programmesana/js/sikdatnes.html","title":"Sīkdatnes","lang":"en-US","frontmatter":{"title":"Sīkdatnes","description":"Sīkdatnes Sīkdatnes (cookies) ļauj datorā saglabāt mazas datu vienības par mājas lapas apmeklētāju. Var teikt, ka sīkdatne ir mazs fails pārlūkprogrammas kešatmiņā, kas satur pa...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/js/sikdatnes.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Sīkdatnes"}],["meta",{"property":"og:description","content":"Sīkdatnes Sīkdatnes (cookies) ļauj datorā saglabāt mazas datu vienības par mājas lapas apmeklētāju. Var teikt, ka sīkdatne ir mazs fails pārlūkprogrammas kešatmiņā, kas satur pa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sīkdatnes\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.29,"words":88},"filePathRelative":"programmesana/js/sikdatnes.md","autoDesc":true}');export{c as comp,k as data};
