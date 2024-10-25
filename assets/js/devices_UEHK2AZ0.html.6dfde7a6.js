"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79800],{38545:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>o,data:()=>i});var t=n(24691);const s={},o=(0,n(89260).A)(s,[["render",function(e,a){const n=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[a[8]||(a[8]=(0,t.Lk)("h1",{id:"universal-electronics-inc-uehk2az0",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#universal-electronics-inc-uehk2az0"},[(0,t.Lk)("span",null,"Universal Electronics Inc UEHK2AZ0")])],-1)),(0,t.Lk)("table",null,[a[6]||(a[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[a[2]||(a[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"UEHK2AZ0")],-1)),(0,t.Lk)("tr",null,[a[1]||(a[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(n,{to:"/supported-devices/#v=Universal%20Electronics%20Inc"},{default:(0,t.k6)((()=>a[0]||(a[0]=[(0,t.eW)("Universal Electronics Inc")]))),_:1})])]),a[3]||(a[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Xfinity security keypad")],-1)),a[4]||(a[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"battery, voltage, occupancy, battery_low, tamper, presence, contact, temperature, action_code, action_transaction, action_zone, action, linkquality")],-1)),a[5]||(a[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/UEHK2AZ0.png",alt:"Universal Electronics Inc UEHK2AZ0"})])],-1))])]),a[9]||(a[9]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="arming-disarming-from-the-server" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-server"><span>Arming/Disarming from the server</span></a></h3><p>To set arming mode publish the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> topic:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Valid <code>mode</code> values as per ZCL specifications are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>entry_delay</code>, <code>not_ready</code>, <code>in_alarm</code>, <code>arming_stay</code>, <code>arming_night</code>, <code>arming_away</code>.</p><h3 id="arming-disarming-from-the-keypad" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-keypad"><span>Arming/Disarming from the keypad</span></a></h3><p>When an attempt to set arm mode is done on the keypad, Zigbee2MQTT will publish the following payload to topic <code>zigbee2mqtt/FRIENDLY_NAME</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span><span class="token punctuation">,</span> <span class="token comment">// This is the example</span></span>\n<span class="line">    <span class="token string-property property">&quot;action_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token comment">// The code being entered</span></span>\n<span class="line">    <span class="token string-property property">&quot;action_zone&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// The zone being armed (always 0)</span></span>\n<span class="line">    <span class="token string-property property">&quot;action_transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span> <span class="token comment">// The transaction number</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The automation server must validate the request and send a notification to the keypad, confirming or denying the request.</p><p>Do so by sending the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token string-property property">&quot;transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Transaction number (this must be the same as the keypad request `action_transaction`)</span></span>\n<span class="line">        <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span> <span class="token comment">// Mode (this must be the same as the keypad request `action`)</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Valid <code>mode</code> values are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>invalid_code</code>, <code>not_ready</code>, <code>already_disarmed</code></p><p>The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with <code>exit_delay</code>, count the elapsed time (e.g 30 secs), then change mode again to <code>arm_all_zones</code> (see &quot;Arming/Disarming from the server&quot; section above)</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',14)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>a[7]||(a[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),a[10]||(a[10]=(0,t.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="action-code-numeric" tabindex="-1"><a class="header-anchor" href="#action-code-numeric"><span>Action code (numeric)</span></a></h3><p>Pin code introduced.. Value can be found in the published state on the <code>action_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-transaction-numeric" tabindex="-1"><a class="header-anchor" href="#action-transaction-numeric"><span>Action transaction (numeric)</span></a></h3><p>Last action transaction number.. Value can be found in the published state on the <code>action_transaction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-zone-text" tabindex="-1"><a class="header-anchor" href="#action-zone-text"><span>Action zone (text)</span></a></h3><p>Alarm zone. Default value 0. Value can be found in the published state on the <code>action_zone</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>disarm</code>, <code>arm_day_zones</code>, <code>identify</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>emergency</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28))])}]]),i=JSON.parse('{"path":"/devices/UEHK2AZ0.html","title":"Universal Electronics Inc UEHK2AZ0 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Universal Electronics Inc UEHK2AZ0 control via MQTT","description":"Integrate your Universal Electronics Inc UEHK2AZ0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-15T18:11:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Arming/Disarming from the server","slug":"arming-disarming-from-the-server","link":"#arming-disarming-from-the-server","children":[]},{"level":3,"title":"Arming/Disarming from the keypad","slug":"arming-disarming-from-the-keypad","link":"#arming-disarming-from-the-keypad","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Action code (numeric)","slug":"action-code-numeric","link":"#action-code-numeric","children":[]},{"level":3,"title":"Action transaction (numeric)","slug":"action-transaction-numeric","link":"#action-transaction-numeric","children":[]},{"level":3,"title":"Action zone (text)","slug":"action-zone-text","link":"#action-zone-text","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729888553000},"filePathRelative":"devices/UEHK2AZ0.md"}')}}]);