"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44541],{48805:(e,i,n)=>{n.r(i),n.d(i,{comp:()=>l,data:()=>o});var t=n(24691);const a={},l=(0,n(89260).A)(a,[["render",function(e,i){const n=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[i[8]||(i[8]=(0,t.Lk)("h1",{id:"tuya-zg-102zl",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#tuya-zg-102zl"},[(0,t.Lk)("span",null,"Tuya ZG-102ZL")])],-1)),(0,t.Lk)("table",null,[i[6]||(i[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[i[2]||(i[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"ZG-102ZL")],-1)),(0,t.Lk)("tr",null,[i[1]||(i[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(n,{to:"/supported-devices/#v=Tuya"},{default:(0,t.k6)((()=>i[0]||(i[0]=[(0,t.eW)("Tuya")]))),_:1})])]),i[3]||(i[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Luminance door sensor")],-1)),i[4]||(i[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"contact, illuminance, battery, illuminance_interval, linkquality")],-1)),i[5]||(i[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-102ZL.png",alt:"Tuya ZG-102ZL"})])],-1))])]),i[9]||(i[9]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To start pairing, press the button (pinhole on the side of the device) using a pin/paperclip for approx. 5 seconds. The led will turn on, then start blinking while the pairing process is in progress.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>i[7]||(i[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,t.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-interval-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-interval-numeric"><span>Illuminance interval (numeric)</span></a></h3><p>Brightness acquisition interval (refresh and update only while active). Value can be found in the published state on the <code>illuminance_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>720</code>. The unit of this value is <code>minutes</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12))])}]]),o=JSON.parse('{"path":"/devices/ZG-102ZL.html","title":"Tuya ZG-102ZL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZG-102ZL control via MQTT","description":"Integrate your Tuya ZG-102ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-11-09T01:17:42.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Illuminance interval (numeric)","slug":"illuminance-interval-numeric","link":"#illuminance-interval-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729888553000},"filePathRelative":"devices/ZG-102ZL.md"}')}}]);