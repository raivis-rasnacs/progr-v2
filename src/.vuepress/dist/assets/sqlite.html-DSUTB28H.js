import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as e}from"./app-DQhFOUgs.js";const t={},i=e(`<h1 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite"><span>SQLite</span></a></h1><p>SQLite ir atvieglots SQL paveids, jo datu bāzei nav nepieciešams serveris un tā var glabāties datnē ar paplašinājumu <code>.sqlite</code>. Tas rada zināmus drošības riskus, bet atvieglo datu bāzes izstrādi un testēšanu.</p><p>Lai darbotos ar SQLite un līdzīgām datu bāzēm, jāzina dažas svarīgākās komandas</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> preces<span class="token punctuation">;</span>
<span class="token comment">-- veido tabulu ar doto nosaukumu</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> preces<span class="token punctuation">;</span>
<span class="token comment">-- dzēš tabulu ar doto nosaukumu un datus no tās</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> preces <span class="token punctuation">(</span>nosaukums<span class="token punctuation">,</span> cena<span class="token punctuation">,</span> daudzums<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;Persiks&quot;</span><span class="token punctuation">,</span> <span class="token number">0.40</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- ievieto tabulā jaunu ierakstu ar dotajām vērtībām</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> preces <span class="token keyword">WHERE</span> cena <span class="token operator">&gt;</span> <span class="token number">1.20</span><span class="token punctuation">;</span>
<span class="token comment">-- atlasa preces, kurām cena lielāka par 1.20; izvada visus laukus</span>

<span class="token keyword">SELECT</span> nosaukums <span class="token keyword">FROM</span> preces <span class="token keyword">WHERE</span> nosaukums <span class="token operator">LIKE</span> <span class="token string">&#39;Z%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- atlasa preces, kurām nosaukums sākas ar Z; izvada tikai nosaukumus </span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> preces <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cena <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">-- atlasa 5 dārgākās preces, izvada visus laukus</span>

<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> preces <span class="token keyword">WHERE</span> daudzums <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">-- dzēš no tabulas tās preces, kurām daudzums ir 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Komandu var rakstīt vairākās rindās, bet tās beigās vienmēr jālieto semikols!</p>`,5),o=[i];function p(r,l){return a(),n("div",null,o)}const d=s(t,[["render",p],["__file","sqlite.html.vue"]]),k=JSON.parse('{"path":"/db/sqlite.html","title":"SQLite","lang":"en-US","frontmatter":{"title":"SQLite","description":"SQLite SQLite ir atvieglots SQL paveids, jo datu bāzei nav nepieciešams serveris un tā var glabāties datnē ar paplašinājumu .sqlite. Tas rada zināmus drošības riskus, bet atvieg...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/db/sqlite.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"SQLite"}],["meta",{"property":"og:description","content":"SQLite SQLite ir atvieglots SQL paveids, jo datu bāzei nav nepieciešams serveris un tā var glabāties datnē ar paplašinājumu .sqlite. Tas rada zināmus drošības riskus, bet atvieg..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQLite\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"db/sqlite.md","autoDesc":true}');export{d as comp,k as data};
