import{_ as n,o as s,c as a,d as e}from"./app-5b49b1a3.js";const i={},t=e(`<h1 id="请求池控制同时并发请求数量-并在全部结束后调用callback" tabindex="-1"><a class="header-anchor" href="#请求池控制同时并发请求数量-并在全部结束后调用callback" aria-hidden="true">#</a> 请求池控制同时并发请求数量，并在全部结束后调用callback</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token parameter">requestList<span class="token punctuation">,</span>limits<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">const</span> promises <span class="token operator">=</span> requestList<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 取得请求list（浅拷贝一份）</span>

    <span class="token comment">// 得到开始时，能执行的并发数</span>

    <span class="token keyword">const</span> concurrentNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>limits<span class="token punctuation">,</span>requestList<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

    <span class="token keyword">let</span> concurrentCount <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 当前并发数</span>

    <span class="token comment">// 第一次先跑起可以并发的任务</span>

    <span class="token keyword">const</span> <span class="token function-variable function">runTaskNeeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>

        <span class="token comment">// 启动当前能执行的任务</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>concurrentNum<span class="token punctuation">)</span><span class="token punctuation">{</span>

            i<span class="token operator">++</span>

            <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// 取出任务并且执行任务</span>

    <span class="token keyword">const</span> <span class="token function-variable function">runTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token keyword">const</span> task <span class="token operator">=</span> promises<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        task <span class="token operator">&amp;&amp;</span> <span class="token function">runner</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>




    <span class="token comment">// 执行器</span>

    <span class="token comment">// 执行任务，同时更新当前并发数</span>

    <span class="token keyword">const</span> <span class="token function-variable function">runner</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            concurrentCount<span class="token operator">++</span>

            <span class="token keyword">await</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>

            <span class="token comment">// 并发数--</span>

            concurrentCount<span class="token operator">--</span>
            
            <span class="token comment">// 捞起下一个任务</span>
            <span class="token function">picker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token comment">// 捞起下一个任务</span>

    <span class="token keyword">const</span> <span class="token function-variable function">picker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        
        <span class="token comment">// 任务队列里还有任务并且此时还有剩余并发数的时候 执行</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>concurrentCount <span class="token operator">&lt;</span> limits <span class="token operator">&amp;&amp;</span> promises<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">// 继续执行任务</span>

            <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// 队列为空的时候，并且请求池清空了，就可以执行最后的回调函数了</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> concurrentCount <span class="token operator">==</span><span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">// 执行结束</span>

            callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>



    <span class="token comment">// 入口执行</span>

    <span class="token function">runTaskNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function p(l,o){return s(),a("div",null,c)}const d=n(i,[["render",p],["__file","controlRequest.html.vue"]]);export{d as default};
