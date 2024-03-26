import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as t}from"./app-DQhFOUgs.js";const e={},i=t(`<h1 id="mainigo-pierakstisana" tabindex="-1"><a class="header-anchor" href="#mainigo-pierakstisana"><span>Mainīgo pierakstīšana</span></a></h1><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span>         <span class="token comment">// Tiek deklarēti 3 (a,b,c) skatiliski mainīgie bez vērtībām</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">// Tiek deklarēti 2 skatiliski mainīgie ar vērtībām</span>
<span class="token keyword">byte</span> <span class="token class-name">B</span> <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>         <span class="token comment">// Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir Byte</span>
<span class="token keyword">double</span> pi <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span> <span class="token comment">// Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir dubultas precizitātes decimāldaļa</span>
<span class="token keyword">char</span> a <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>        <span class="token comment">// Tiek deklarēts mainīgais ar nosaukumu B, kura tips ir simbols</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="mainigo-izdruka-kombinejot-ar-tekstu" tabindex="-1"><a class="header-anchor" href="#mainigo-izdruka-kombinejot-ar-tekstu"><span>Mainīgo izdruka kombinējot ar tekstu</span></a></h1><p>Ja ir tikai viens mainīgais:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>mainiganosaukums<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ja ir savs teksts un mainīgais:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Jūsu teksts pēdiņās&quot;</span><span class="token operator">+</span>mainiganosaukums<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ja ir savs teksts, kurš atkārtojas un ir mainīgais:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>mainīgais<span class="token operator">+</span> <span class="token string">&quot; šis ir mans teksts&quot;</span><span class="token operator">+</span>otrsmainigais<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Matemātiskās darbības:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Mainīgo summa:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>mainigais<span class="token operator">+</span>mainigais<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pirmstam mainīgie ir definēti un komanda tiek izmantota kopējā klasē.</p>`,12),p=[i];function o(r,c){return n(),s("div",null,p)}const k=a(e,[["render",o],["__file","mainigie.html.vue"]]),m=JSON.parse('{"path":"/programmesana/java/mainigie.html","title":"Mainīgie","lang":"en-US","frontmatter":{"title":"Mainīgie","description":"Mainīgo pierakstīšana Mainīgo izdruka kombinējot ar tekstu Ja ir tikai viens mainīgais: Ja ir savs teksts un mainīgais: Ja ir savs teksts, kurš atkārtojas un ir mainīgais: Matem...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/java/mainigie.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Mainīgie"}],["meta",{"property":"og:description","content":"Mainīgo pierakstīšana Mainīgo izdruka kombinējot ar tekstu Ja ir tikai viens mainīgais: Ja ir savs teksts un mainīgais: Ja ir savs teksts, kurš atkārtojas un ir mainīgais: Matem..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mainīgie\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"programmesana/java/mainigie.md","autoDesc":true}');export{k as comp,m as data};