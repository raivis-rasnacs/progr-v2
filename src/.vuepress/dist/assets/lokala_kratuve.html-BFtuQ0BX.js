import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as t,b as e}from"./app-DQhFOUgs.js";const n="/cookie-local-session.png",o={},i=e('<h2 id="lokala-kratuve-localstorage" tabindex="-1"><a class="header-anchor" href="#lokala-kratuve-localstorage"><span>Lokālā krātuve (localStorage)</span></a></h2><hr><p><img src="'+n+`" alt="cookie-local-session"> Attēls: loginradius.com</p><p>Jau noskaidrojām, ka mainīgie datus glabā tikai īslaicīgi un, aizverot lapu, savas vērtības pazaudē. Tāpēc lieto lokālo krātuvi...</p><p>Tā darbojas līdzīgi kā sīkdatnes un ir piesaistīta konkrētai mājas lapai, taču pieejams daudz lielāks atmiņas apjoms līdz pat 10MB un dati glabājas JSON formātā.</p><p>Dati no lokālās krātuves tiek dzēsti, notīrot parlūkošanas vēsturi pārlūkprogrammā visā periodā.</p><p>Apskatīsim, kā saglabāt datus lokālā krātuvē.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;apmekletajs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Ilze&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lokālā krātuvē ērti saglabāt dažādus lapas iestatījumus, piemēram, izvēlēto valodu</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;valoda&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Eng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lai nolasītu vērtību, lieto <code>getItem()</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> valoda <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;valoda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Vērtību dzēš ar <code>removeItem()</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;valoda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Visu lokālo krātuvi dzēš ar <code>clear()</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="sesijas-kratuve-sessionstorage" tabindex="-1"><a class="header-anchor" href="#sesijas-kratuve-sessionstorage"><span>Sesijas krātuve (sessionStorage)</span></a></h2><p>Sesijas krātuve darbojas ļoti līdzīgi, bet tajā dati saglabājas tikai sesijas laikā. Aizverot cilni vai pārlūkprogrammu, tie dzēšas.</p>`,19),l=[i];function r(p,c){return s(),t("div",null,l)}const k=a(o,[["render",r],["__file","lokala_kratuve.html.vue"]]),v=JSON.parse('{"path":"/programmesana/js/lokala_kratuve.html","title":"Lokālā krātuve","lang":"en-US","frontmatter":{"title":"Lokālā krātuve","description":"Lokālā krātuve (localStorage) cookie-local-session Attēls: loginradius.com Jau noskaidrojām, ka mainīgie datus glabā tikai īslaicīgi un, aizverot lapu, savas vērtības pazaudē. T...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/js/lokala_kratuve.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Lokālā krātuve"}],["meta",{"property":"og:description","content":"Lokālā krātuve (localStorage) cookie-local-session Attēls: loginradius.com Jau noskaidrojām, ka mainīgie datus glabā tikai īslaicīgi un, aizverot lapu, savas vērtības pazaudē. T..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://prog.kmu.lv/cookie-local-session.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lokālā krātuve\\",\\"image\\":[\\"https://prog.kmu.lv/cookie-local-session.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"Lokālā krātuve (localStorage)","slug":"lokala-kratuve-localstorage","link":"#lokala-kratuve-localstorage","children":[]},{"level":2,"title":"Sesijas krātuve (sessionStorage)","slug":"sesijas-kratuve-sessionstorage","link":"#sesijas-kratuve-sessionstorage","children":[]}],"git":{},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"programmesana/js/lokala_kratuve.md","autoDesc":true}');export{k as comp,v as data};
