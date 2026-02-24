import{i as Z,J as G,Z as Q,K as U,z as q,y as H,_ as u,a as z,b as I,M as X,a3 as Y,a5 as ee,j as te,E as ae,R as ie,a6 as y,a7 as re,a8 as R}from"./index-CAsv9qgO.js";import{t as ne}from"./chunk-4BX2VUAB-D_bYCPug-DJnjAsdF.js";import{g as le}from"./treemap-GDKQZRPO-DfMZn-q2-DuMXFZHc.js";import{h as j}from"./arc-royb1Gic-BSU2rSpg.js";import{h as se}from"./ordinal-Cboi1Yqb-DUCuiKwa.js";import"./_baseUniq-ByMA--1K-BWGbVqiX.js";import"./_basePickBy-BNpAqB1i-DeqvU6dF.js";import"./clone-Ju1su9vj-WmlbsvNe.js";import"./init-Gi6I4Gst-DHuO7-vr.js";function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function pe(){var e=ce,a=oe,f=null,s=y(0),o=y(R),w=y(0);function l(t){var r,c=(t=re(t)).length,d,$,m=0,p=new Array(c),n=new Array(c),x=+s.apply(this,arguments),v=Math.min(R,Math.max(-R,o.apply(this,arguments)-x)),h,b=Math.min(Math.abs(v)/c,w.apply(this,arguments)),C=b*(v<0?-1:1),g;for(r=0;r<c;++r)(g=n[p[r]=r]=+e(t[r],r,t))>0&&(m+=g);for(a!=null?p.sort(function(S,A){return a(n[S],n[A])}):f!=null&&p.sort(function(S,A){return f(t[S],t[A])}),r=0,$=m?(v-c*C)/m:0;r<c;++r,x=h)d=p[r],g=n[d],h=x+(g>0?g*$:0)+C,n[d]={data:t[d],index:r,value:g,startAngle:x,endAngle:h,padAngle:b};return n}return l.value=function(t){return arguments.length?(e=typeof t=="function"?t:y(+t),l):e},l.sortValues=function(t){return arguments.length?(a=t,f=null,l):a},l.sort=function(t){return arguments.length?(f=t,a=null,l):f},l.startAngle=function(t){return arguments.length?(s=typeof t=="function"?t:y(+t),l):s},l.endAngle=function(t){return arguments.length?(o=typeof t=="function"?t:y(+t),l):o},l.padAngle=function(t){return arguments.length?(w=typeof t=="function"?t:y(+t),l):w},l}var ue=ie.pie,W={sections:new Map,showData:!1},D=W.sections,E=W.showData,de=structuredClone(ue),ge=u(()=>structuredClone(de),"getConfig"),fe=u(()=>{D=new Map,E=W.showData,ae()},"clear"),he=u(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(e)||(D.set(e,a),z.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),me=u(()=>D,"getSections"),xe=u(e=>{E=e},"setShowData"),ye=u(()=>E,"getShowData"),B={getConfig:ge,clear:fe,setDiagramTitle:H,getDiagramTitle:q,setAccTitle:U,getAccTitle:Q,setAccDescription:G,getAccDescription:Z,addSection:he,getSections:me,setShowData:xe,getShowData:ye},we=u((e,a)=>{ne(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),$e={parse:u(async e=>{const a=await le("pie",e);z.debug(a),we(a,B)},"parse")},ve=u(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),Se=ve,Ae=u(e=>{const a=[...e.values()].reduce((s,o)=>s+o,0),f=[...e.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return pe().value(s=>s.value)(f)},"createPieArcs"),be=u((e,a,f,s)=>{z.debug(`rendering pie chart
`+e);const o=s.db,w=I(),l=X(o.getConfig(),w.pie),t=40,r=18,c=4,d=450,$=d,m=Y(a),p=m.append("g");p.attr("transform","translate("+$/2+","+d/2+")");const{themeVariables:n}=w;let[x]=ee(n.pieOuterStrokeWidth);x??=2;const v=l.textPosition,h=Math.min($,d)/2-t,b=j().innerRadius(0).outerRadius(h),C=j().innerRadius(h*v).outerRadius(h*v);p.append("circle").attr("cx",0).attr("cy",0).attr("r",h+x/2).attr("class","pieOuterCircle");const g=o.getSections(),S=Ae(g),A=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let T=0;g.forEach(i=>{T+=i});const F=S.filter(i=>(i.data.value/T*100).toFixed(0)!=="0"),O=se(A);p.selectAll("mySlices").data(F).enter().append("path").attr("d",b).attr("fill",i=>O(i.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(F).enter().append("text").text(i=>(i.data.value/T*100).toFixed(0)+"%").attr("transform",i=>"translate("+C.centroid(i)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const N=[...g.entries()].map(([i,M])=>({label:i,value:M})),k=p.selectAll(".legend").data(N).enter().append("g").attr("class","legend").attr("transform",(i,M)=>{const _=r+c,P=_*N.length/2,V=12*r,K=M*_-P;return"translate("+V+","+K+")"});k.append("rect").attr("width",r).attr("height",r).style("fill",i=>O(i.label)).style("stroke",i=>O(i.label)),k.append("text").attr("x",r+c).attr("y",r-c).text(i=>o.getShowData()?`${i.label} [${i.value}]`:i.label);const L=Math.max(...k.selectAll("text").nodes().map(i=>i?.getBoundingClientRect().width??0)),J=$+t+r+c+L;m.attr("viewBox",`0 0 ${J} ${d}`),te(m,d,J,l.useMaxWidth)},"draw"),Ce={draw:be},Fe={parser:$e,db:B,renderer:Ce,styles:Se};export{Fe as diagram};
