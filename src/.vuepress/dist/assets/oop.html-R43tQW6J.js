import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-DQhFOUgs.js";const t={},i=e(`<h1 id="objekti" tabindex="-1"><a class="header-anchor" href="#objekti"><span>Objekti</span></a></h1><p>PHP programmēšanas valodā ir iespējams definēt arī objektus un strukturēt tos klasēs. Tas ir veids kā strukturēt kodu, lai tas būtu labāks saprotams citiem programmētājiem un arī vieglāk lasāms. Objektu definēšanu sāk sāk ar vārdu <code>class</code>, kas nozīmē klase, tad tiek definēts klases nosaukums. Piemērs - tukša klase.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">kermenis</span>
<span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tukša klase nevar pastāvēt tai noteikti ir nepieciešamas raksturojošās funkcijas, kuras veic darbību. Ir definēta klase <code>kermenis</code>, kurā definēsim trīs funkcijas <code>galva</code>, <code>veders</code>, <code>kajas</code></p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">kermenis</span>
<span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function-definition function">galva</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Šī ir galva&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
	
	<span class="token keyword">function</span> <span class="token function-definition function">veders</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Šis ir vēders&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
	
	<span class="token keyword">function</span> <span class="token function-definition function">kajas</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Šīs ir kājas&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lai izsauktu klasi jāizmanot vārds <code>new</code>, jo tādā veidā tiek definēta jauna klase. Piemērā izsauks funkciju ar nosaukumu <code>galva</code></p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">kermenis</span>
<span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function-definition function">galva</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Šī ir galva&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
	
	<span class="token keyword">function</span> <span class="token function-definition function">veders</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Šis ir vēders&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
	
	<span class="token keyword">function</span> <span class="token function-definition function">kajas</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Šīs ir kājas&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$mainigais</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">kermenis</span><span class="token punctuation">;</span> <span class="token comment">// Definējam klasi iekš mainīgā</span>
<span class="token variable">$mainigais</span><span class="token operator">-&gt;</span><span class="token function">galva</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Tagad izsaucam funkciju galva un mums tiks izdrukāts tā saturs.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[i];function p(c,l){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","oop.html.vue"]]),k=JSON.parse('{"path":"/programmesana/php/oop.html","title":"Objekti","lang":"en-US","frontmatter":{"title":"Objekti","description":"Objekti PHP programmēšanas valodā ir iespējams definēt arī objektus un strukturēt tos klasēs. Tas ir veids kā strukturēt kodu, lai tas būtu labāks saprotams citiem programmētāji...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/php/oop.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Objekti"}],["meta",{"property":"og:description","content":"Objekti PHP programmēšanas valodā ir iespējams definēt arī objektus un strukturēt tos klasēs. Tas ir veids kā strukturēt kodu, lai tas būtu labāks saprotams citiem programmētāji..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Objekti\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.53,"words":159},"filePathRelative":"programmesana/php/oop.md","autoDesc":true}');export{r as comp,k as data};
