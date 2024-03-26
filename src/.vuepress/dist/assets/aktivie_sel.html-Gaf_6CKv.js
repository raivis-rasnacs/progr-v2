import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as e}from"./app-DQhFOUgs.js";const t={},i=e(`<h2 id="aktivie-selektori" tabindex="-1"><a class="header-anchor" href="#aktivie-selektori"><span>Aktīvie selektori</span></a></h2><p>Aktīvie selektori jeb pseido-klases ir selektori, kas nosaka, kā elements reaģēs uz noteiktām darbībām, piemēram, uzbraukšana ar kursoru vai klikšķis uz saites.</p><p>Apskatīsim piemēru ar hipersaiti...</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">a:link</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token comment">/* Krāsa neapskatītai saitei */</span>
<span class="token punctuation">}</span>

<span class="token selector">a:visited</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span> <span class="token comment">/* Krāsa apskatītai saitei */</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Citas biežāk lietotās pseido-klases ir <code>active</code>, <code>focus</code> un <code>hover</code>.</p><p>Ar <code>active</code> var iestatīt saites izskatu klikšķa brīdī. Ar <code>focus</code> iestata īpašības atlasītiem elementiem, piemēram, <code>input</code> laukam datu ievades brīdī. Ar <code>hover</code> iestata īpašības, kas stājas spēkā, uzbraucot elementam ar peles kursoru.</p><p>Dotajā piemērā pogas teksts palielinās 1.5x, ja tam uzbraucam ar kursoru.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">button:hover</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ievades lauks iegūs sarkanu rāmi, ja to atlasīs.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ar <code>::first-letter</code> selektoru iespējams atsevišķi nodefinēt pirmā burta stilu rindkopai vai virsrakstam.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p::first-letter</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
    <span class="token property">text-shadow</span><span class="token punctuation">:</span> 1px 1px grey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Selektoru <code>::selection</code> izmanto, lai nodefinētu īpašības atlasītam tekstam rindkopā vai virsrakstā.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p::selection</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Atlasītā rindkopas tekstā būs balti burti uz melna fona.</p><h2 id="iznemuma-selektori" tabindex="-1"><a class="header-anchor" href="#iznemuma-selektori"><span>Izņēmuma selektori</span></a></h2><p>Iedomāsimies, ka mums ir 4 attēli, kuriem jāiestata izmērs, bet attēlam ar <code>id=&quot;titulbilde&quot;</code> jāpaliek nemainīgam.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>titulbilde<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lieto <code>:not()</code>, iekavās rakstot elementu, uz kuru neattieksies dotās īpašības.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">img:not(#titulbilde)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),p=[i];function o(l,c){return a(),n("div",null,p)}const d=s(t,[["render",o],["__file","aktivie_sel.html.vue"]]),k=JSON.parse('{"path":"/programmesana/css/aktivie_sel.html","title":"Aktīvie un izņēmuma selektori","lang":"en-US","frontmatter":{"title":"Aktīvie un izņēmuma selektori","description":"Aktīvie selektori Aktīvie selektori jeb pseido-klases ir selektori, kas nosaka, kā elements reaģēs uz noteiktām darbībām, piemēram, uzbraukšana ar kursoru vai klikšķis uz saites...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/css/aktivie_sel.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Aktīvie un izņēmuma selektori"}],["meta",{"property":"og:description","content":"Aktīvie selektori Aktīvie selektori jeb pseido-klases ir selektori, kas nosaka, kā elements reaģēs uz noteiktām darbībām, piemēram, uzbraukšana ar kursoru vai klikšķis uz saites..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Aktīvie un izņēmuma selektori\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"Aktīvie selektori","slug":"aktivie-selektori","link":"#aktivie-selektori","children":[]},{"level":2,"title":"Izņēmuma selektori","slug":"iznemuma-selektori","link":"#iznemuma-selektori","children":[]}],"git":{},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"programmesana/css/aktivie_sel.md","autoDesc":true}');export{d as comp,k as data};