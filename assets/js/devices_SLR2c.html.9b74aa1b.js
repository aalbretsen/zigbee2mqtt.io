"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53146],{54270:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>n});var a=o(24691);const d={},i=(0,o(89260).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"hive-slr2c",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#hive-slr2c"},[(0,a.Lk)("span",null,"Hive SLR2c")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SLR2c")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Hive"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Hive")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Dual channel heating and hot water thermostat")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SLR2c.png",alt:"Hive SLR2c"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-heat-endpoint"><span>Climate (heat endpoint)</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_heat&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_heat&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_heat&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_heat&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-heat-endpoint"><span>Temperature setpoint hold (binary, heat endpoint)</span></a></h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature setpoint hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-heat-endpoint"><span>Temperature setpoint hold duration (numeric, heat endpoint)</span></a></h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="climate-water-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-water-endpoint"><span>Climate (water endpoint)</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>22</code> and <code>22</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_water&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_water&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>, <code>emergency_heating</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_water&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_water&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-water-endpoint"><span>Temperature setpoint hold (binary, water endpoint)</span></a></h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature setpoint hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-water-endpoint"><span>Temperature setpoint hold duration (numeric, water endpoint)</span></a></h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18))])}]]),n=JSON.parse('{"path":"/devices/SLR2c.html","title":"Hive SLR2c control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Hive SLR2c control via MQTT","description":"Integrate your Hive SLR2c via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate (heat endpoint)","slug":"climate-heat-endpoint","link":"#climate-heat-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold (binary, heat endpoint)","slug":"temperature-setpoint-hold-binary-heat-endpoint","link":"#temperature-setpoint-hold-binary-heat-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold duration (numeric, heat endpoint)","slug":"temperature-setpoint-hold-duration-numeric-heat-endpoint","link":"#temperature-setpoint-hold-duration-numeric-heat-endpoint","children":[]},{"level":3,"title":"Climate (water endpoint)","slug":"climate-water-endpoint","link":"#climate-water-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold (binary, water endpoint)","slug":"temperature-setpoint-hold-binary-water-endpoint","link":"#temperature-setpoint-hold-binary-water-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold duration (numeric, water endpoint)","slug":"temperature-setpoint-hold-duration-numeric-water-endpoint","link":"#temperature-setpoint-hold-duration-numeric-water-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729888553000},"filePathRelative":"devices/SLR2c.md"}')}}]);