import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as t}from"./app-DQhFOUgs.js";const e="/js_alert.jpg",p="/prompt.jpg",i="/js_alert2.jpg",o="/js_alert3.jpg",l="/pirkumi.jpg",u={},c=t(`<h1 id="praktiski-piemeri" tabindex="-1"><a class="header-anchor" href="#praktiski-piemeri"><span>Praktiski piemēri</span></a></h1><h2 id="pazinojuma-lodzins" tabindex="-1"><a class="header-anchor" href="#pazinojuma-lodzins"><span>Paziņojuma lodziņš</span></a></h2><p>Pārlūkos ir iespējams izveidot paziņojuma lodziņu vēl angļu valodā to sauc par <code>alert</code> lodziņu.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Paziņojuma saturs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Iznākums:</p><p><img src="`+e+`" alt="html1"></p><h2 id="ievades-lodzins" tabindex="-1"><a class="header-anchor" href="#ievades-lodzins"><span>Ievades lodziņš</span></a></h2><p><code>prompt()</code> darbojas līdzīgi kā <code>alert()</code>, bet ļauj ievadīt arī, piemēram, vārdu.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> vards <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;Ievadu savu vārdu!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ievadītais vārds saglabājas mainīgajā <code>vards</code>, kuru var izmantot, piemēram, izvadot sveicienu lappusē.</p><p><img src="`+p+`" alt="prompt"></p><h2 id="ievades-laucina-nolasisana" tabindex="-1"><a class="header-anchor" href="#ievades-laucina-nolasisana"><span>Ievades lauciņa nolasišana</span></a></h2><p>Ar Javascript progr. valodu ir iespējams arī nolasīt ievades lauciņu vērtības. Mēs definēsim teksta ievades lauciņu un paziņojumā izvadīsim tā saturu.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Ievade: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ievades_lauks<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">nolasi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tika definēti 3 elementi lapā. <code>label</code> - elements, kurš kalpo kā skaidrojums ievades lauciņam. <code>&lt;input type=&quot;text&quot; id=&quot;ievades_lauks&quot;&gt;</code> - tekstuāls ievades lauks, kura <code>type</code> atribūtā ir pateikts, ka ievades lauks ir tekstuāls. <code>id=&quot;ievades_lauks&quot;</code> unikāls identifikātors visā lapā.</p><p><code>&lt;button onclick=&quot;nolasi();&quot;&gt;Nolasi mani!&lt;/button&gt;</code> - poga, kura nospiežot palaiž funkciju <code>nolasi()</code></p><p>Izskats lapā:</p><p><img src="`+i+`" alt="html1"></p><p>Tad tiek definēts Javascript kods:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">nolasi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> ievades_lauks_atlasi <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;ievades_lauks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Atlasām elementu no mūsu HTML lapas.</span>
    <span class="token keyword">let</span> vertiba <span class="token operator">=</span> ievades_lauks_atlasi<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// Paņemam no mūsu elementa tikai un vienīgi tā vērtību</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Ievades lauka vērtība ir: &quot;</span> <span class="token operator">+</span> vertiba<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Paziņojam lapā ievades lauka vērtību.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="html1"></p><h2 id="html-elementa-vertibas-nomainisana" tabindex="-1"><a class="header-anchor" href="#html-elementa-vertibas-nomainisana"><span>HTML elementa vērtības nomainīšana</span></a></h2><p>Ar Javascript ir iespējams arī nomainīt elementa saturu lapu nepārlādējot.</p><p>Iedomāsimies, ka mums ir pirmā līmeņa virsraksts, kurā ir vārds &quot;Diena&quot;, bet mēs vēlamies ar pogas palīdzību nomainīt tā saturu uz &quot;Nakts&quot;.</p><p>HTML Kods:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mainit_so<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Diena<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">maini_mani</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Nomainīt saturu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maini_mani</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> ievades_lauks_atlasi <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;mainit_so&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Atlasām elementu no mūsu HTML lapas.</span>
    ievades_lauks_atlasi<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>  <span class="token string">&quot;Nakts&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Iestatām tā HTML saturu uz vārdu &quot;Nakts&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iepirkumu-saraksts" tabindex="-1"><a class="header-anchor" href="#iepirkumu-saraksts"><span>Iepirkumu saraksts</span></a></h2><p>Uzbūvēsim vienkāršu iepirkšanās sarakstu, ko var papildināt, ievadot pirkumus</p><p>Sākumā nepieciešams tukšs saraksts, ievades lauks un poga</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pirkums<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">pievienot</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Pievienot pirkumu!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>saraksts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nospiežot pogu, pirkums no ievades lauka <em>pārcelsies</em> uz sarakstu</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">pievienot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pirkums <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;pirkums&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">let</span> rinda <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rinda<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> pirkums<span class="token punctuation">;</span>
    <span class="token keyword">let</span> saraksts <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;saraksts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    saraksts<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>rinda<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rezultāts:<br><img src="`+l+'" alt="pirkumi"></p>',34),r=[c];function d(k,m){return s(),n("div",null,r)}const b=a(u,[["render",d],["__file","piemeri.html.vue"]]),h=JSON.parse('{"path":"/programmesana/js/piemeri.html","title":"Piemēri","lang":"en-US","frontmatter":{"title":"Piemēri","description":"Praktiski piemēri Paziņojuma lodziņš Pārlūkos ir iespējams izveidot paziņojuma lodziņu vēl angļu valodā to sauc par alert lodziņu. Iznākums: html1 Ievades lodziņš prompt() darbo...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/js/piemeri.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Piemēri"}],["meta",{"property":"og:description","content":"Praktiski piemēri Paziņojuma lodziņš Pārlūkos ir iespējams izveidot paziņojuma lodziņu vēl angļu valodā to sauc par alert lodziņu. Iznākums: html1 Ievades lodziņš prompt() darbo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://prog.kmu.lv/js_alert.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Piemēri\\",\\"image\\":[\\"https://prog.kmu.lv/js_alert.jpg\\",\\"https://prog.kmu.lv/prompt.jpg\\",\\"https://prog.kmu.lv/js_alert2.jpg\\",\\"https://prog.kmu.lv/js_alert3.jpg\\",\\"https://prog.kmu.lv/pirkumi.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"Paziņojuma lodziņš","slug":"pazinojuma-lodzins","link":"#pazinojuma-lodzins","children":[]},{"level":2,"title":"Ievades lodziņš","slug":"ievades-lodzins","link":"#ievades-lodzins","children":[]},{"level":2,"title":"Ievades lauciņa nolasišana","slug":"ievades-laucina-nolasisana","link":"#ievades-laucina-nolasisana","children":[]},{"level":2,"title":"HTML elementa vērtības nomainīšana","slug":"html-elementa-vertibas-nomainisana","link":"#html-elementa-vertibas-nomainisana","children":[]},{"level":2,"title":"Iepirkumu saraksts","slug":"iepirkumu-saraksts","link":"#iepirkumu-saraksts","children":[]}],"git":{},"readingTime":{"minutes":1.12,"words":337},"filePathRelative":"programmesana/js/piemeri.md","autoDesc":true}');export{b as comp,h as data};
