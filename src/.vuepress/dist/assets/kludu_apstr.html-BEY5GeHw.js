import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as t}from"./app-DQhFOUgs.js";const e={},i=t(`<h1 id="kludu-apstrade" tabindex="-1"><a class="header-anchor" href="#kludu-apstrade"><span>Kļūdu apstrāde</span></a></h1><p>Apskatīsim, kā programmā paredzēt dažādus izņēmuma gadījumus...</p><p>Izveidosim datu ievadu, kas saņem skaitli.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>
skaitlis <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Ievadi skaitli!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ja mēģināsim ievadīt burtus, saņemsim kļūdu.</p><p>Pielietosim <code>try ... except</code> bloku, lai <em>noķertu</em> kļūdu</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    skaitlis <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Ievadi skaitli!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Tu kļūdījies! Tas nav skaitlis!&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Tavs skaitlis ir&quot;</span><span class="token punctuation">,</span> skaitlis<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ja dati nebūs derīgi, izvadīs kļūdas paziņojumu un <code>try</code> bloks neizpildīsies</p><p>Ja dati būs derīgi, izpildīsies <code>try</code> bloks un tad <code>else</code> bloks</p><p>Pamēģināsim paredzēt gadījumu, kad skaitli dala ar 0...</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>
sk1 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Ievadi skaitli!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sk2 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Ievadi skaitli!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    dalijums <span class="token operator">=</span> sk1<span class="token operator">/</span>sk2
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Ar nulli dalīt nedrīkst!&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Rezultāts ir&quot;</span><span class="token punctuation">,</span> dalijums<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ja otrais skaitlis būs 0, tad izdrukāsies teksts <em>Ar nulli dalīt nedrīkst!</em></p>`,12),p=[i];function o(l,u){return a(),n("div",null,p)}const r=s(e,[["render",o],["__file","kludu_apstr.html.vue"]]),k=JSON.parse('{"path":"/programmesana/python/kludu_apstr.html","title":"Kļūdu apstrāde","lang":"en-US","frontmatter":{"title":"Kļūdu apstrāde","description":"Kļūdu apstrāde Apskatīsim, kā programmā paredzēt dažādus izņēmuma gadījumus... Izveidosim datu ievadu, kas saņem skaitli. Ja mēģināsim ievadīt burtus, saņemsim kļūdu. Pielietosi...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/python/kludu_apstr.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Kļūdu apstrāde"}],["meta",{"property":"og:description","content":"Kļūdu apstrāde Apskatīsim, kā programmā paredzēt dažādus izņēmuma gadījumus... Izveidosim datu ievadu, kas saņem skaitli. Ja mēģināsim ievadīt burtus, saņemsim kļūdu. Pielietosi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kļūdu apstrāde\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.42,"words":125},"filePathRelative":"programmesana/python/kludu_apstr.md","autoDesc":true}');export{r as comp,k as data};
