import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as i,d as a,e as s,a as l,b as o}from"./app-DQhFOUgs.js";const c="/paragrafssarkans.png",u="/idzalu.png",r="/classzalu.png",d={},m=a("h1",{id:"stila-pieskirsana-elementam",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#stila-pieskirsana-elementam"},[a("span",null,"Stila piešķiršana elementam")])],-1),k=a("p",null,"Ir divi veidi kā piešķirt stilu elementam:",-1),v=a("ol",null,[a("li",null,"Pievienojot stila noteikumu pie paša elementa;"),a("li",null,"Definējot stila failu/stila birkas pašā lapā.")],-1),g=a("p",null,[s("Piešķirot stilu kādam elementam to raksta atribūtā "),a("code",null,"style"),s(".")],-1),h={href:"https://www.w3schools.com/cssref/",target:"_blank",rel:"noopener noreferrer"},b=o(`<p>Piemērs. Pievienojam elementam fona krāsu <code>background-color</code> un teksta krāsu <code>color</code>, un izmēru <code>font-size</code>.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Paragrāfs ar sarkanu fonu un baltu tekstu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Izskats: <img src="`+c+`" alt="example image"></p><p>Šajā piemērā stila noteikumi darbosies tikai uz šo elementu.</p><p>Otrs veids ir definēt stilu kā failu vai stila birku dokumentā.</p><p>Piemērs. Izveidojam stila birkas HTML dokumentā. Un uzstādam visus tos pašus noteikumus.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">p</span><span class="token punctuation">{</span>
        <span class="token property">backround-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Šajā piemērā stila noteikumi darbosies uz visiem <code>p</code> elementiem.</p><p>Stila failu definē ar paplašinājumu <code>.css</code> un ievieto lapā ar šādu birku:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>manstils.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-note line-numbers-mode" data-ext="note" data-title="note"><pre class="language-note"><code>Stila faila ievietošanu veic lapas galvenē jeb \`&lt;head&gt;\` birkās. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Stila noteikumu izskats stila failā:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">backround-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>20px
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="stila-pieskirsana-elementam-pec-ta-identifikatora-vai-klases" tabindex="-1"><a class="header-anchor" href="#stila-pieskirsana-elementam-pec-ta-identifikatora-vai-klases"><span>Stila piešķiršana elementam pēc tā identifikatora vai klases</span></a></h1><p>Iepriekšējā nodaļā apskatījām piemēru kā var piešķirt stilu konkrētam elementam vai viena veida elementiem, piemēram, paragrāfiem.</p><p>Ir arī veids, kurā var piešķirt stilus konkrētiem elementiem tos grupējot pēc klases vai identifikatora.</p><p>Lai pievienotu stilu elementam pēc tā identifikatora <code>id</code>.</p><p>Nodefinēsim paragrāfu ar identifikatoru <code>zalu</code>.</p><div class="language-note line-numbers-mode" data-ext="note" data-title="note"><pre class="language-note"><code>Klases un identifikātorus veido programmētājs.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zalu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Paragrāfs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lai atlasītu šo elementu pēc identifikatora stila failā jāizmanto tā nosaukums un restīte <code>#</code>.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">#zalu</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Izskats:</p><p><img src="`+u+`" alt="example image"></p><p>Tieši tāpat var atlasīt visus elementus pēc tā klases. Tad izmanto atribūtu <code>class</code>. Restītes vietā izmanto punktu.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zalu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Paragrāfs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.zalu</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>20px
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Izskats: <img src="`+r+`" alt="example image"></p><p>Elements var saturēt vairākas klases.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zalu centret<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Paragrāfs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30);function f(_,y){const n=e("ExternalLinkIcon");return p(),i("div",null,[m,k,v,g,a("p",null,[s("Ar visiem pieejamajiem stila definējumiem var iepazīties "),a("a",h,[s("šeit"),l(n)])]),b])}const j=t(d,[["render",f],["__file","stilapieskirsana.html.vue"]]),q=JSON.parse('{"path":"/programmesana/html/stilapieskirsana.html","title":"Stila piešķiršana","lang":"en-US","frontmatter":{"title":"Stila piešķiršana","description":"Stila piešķiršana elementam Ir divi veidi kā piešķirt stilu elementam: Pievienojot stila noteikumu pie paša elementa; Definējot stila failu/stila birkas pašā lapā. Piešķirot sti...","head":[["meta",{"property":"og:url","content":"https://prog.kmu.lv/programmesana/html/stilapieskirsana.html"}],["meta",{"property":"og:site_name","content":"Proghelp"}],["meta",{"property":"og:title","content":"Stila piešķiršana"}],["meta",{"property":"og:description","content":"Stila piešķiršana elementam Ir divi veidi kā piešķirt stilu elementam: Pievienojot stila noteikumu pie paša elementa; Definējot stila failu/stila birkas pašā lapā. Piešķirot sti..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://prog.kmu.lv/paragrafssarkans.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Kristaps Muižnieks"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stila piešķiršana\\",\\"image\\":[\\"https://prog.kmu.lv/paragrafssarkans.png\\",\\"https://prog.kmu.lv/idzalu.png\\",\\"https://prog.kmu.lv/classzalu.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kristaps Muižnieks\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.08,"words":323},"filePathRelative":"programmesana/html/stilapieskirsana.md","autoDesc":true}');export{j as comp,q as data};