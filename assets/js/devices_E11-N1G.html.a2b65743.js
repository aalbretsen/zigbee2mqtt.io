"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38600],{89006:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>i});var n=o(24691);const s={},a=(0,o(89260).A)(s,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[18]||(t[18]=(0,n.Lk)("h1",{id:"sengled-e11-n1g",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#sengled-e11-n1g"},[(0,n.Lk)("span",null,"Sengled E11-N1G")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"E11-N1G")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Sengled"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Sengled")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Vintage LED edison bulb (ST19)")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"light (state, brightness), linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E11-N1G.png",alt:"Sengled E11-N1G"})])],-1))])]),t[19]||(t[19]=(0,n.Lk)("h2",{id:"device-type",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#device-type"},[(0,n.Lk)("span",null,"Device Type")])],-1)),(0,n.Lk)("p",null,[t[9]||(t[9]=(0,n.eW)("Sengled bulbs are Zigbee ")),(0,n.bF)(o,{to:"/advanced/zigbee/01_zigbee_network.html#end-device"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("end devices")]))),_:1}),t[10]||(t[10]=(0,n.eW)(", not ")),(0,n.bF)(o,{to:"/advanced/zigbee/01_zigbee_network.html#router"},{default:(0,n.k6)((()=>t[8]||(t[8]=[(0,n.eW)("routers")]))),_:1}),t[11]||(t[11]=(0,n.eW)(", and therefore will not extend the reach of your Zigbee network. For more information see the ")),t[12]||(t[12]=(0,n.Lk)("a",{href:"https://support.sengled.com/hc/en-us/articles/115010871308-Do-any-Sengled-Zigbee-devices-act-as-Zigbee-repeaters-",target:"_blank",rel:"noopener noreferrer"},"Sengled FAQ",-1)),t[13]||(t[13]=(0,n.eW)("."))]),t[20]||(t[20]=(0,n.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,n.Lk)("span",null,"OTA updates")])],-1)),(0,n.Lk)("p",null,[t[15]||(t[15]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[14]||(t[14]=[(0,n.eW)("OTA updates")]))),_:1}),t[16]||(t[16]=(0,n.eW)("."))]),t[21]||(t[21]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[17]||(t[17]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[22]||(t[22]=(0,n.Fv)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),i=JSON.parse('{"path":"/devices/E11-N1G.html","title":"Sengled E11-N1G control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sengled E11-N1G control via MQTT","description":"Integrate your Sengled E11-N1G via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-07-01T18:17:29.000Z"},"headers":[{"level":2,"title":"Device Type","slug":"device-type","link":"#device-type","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729888553000},"filePathRelative":"devices/E11-N1G.md"}')}}]);