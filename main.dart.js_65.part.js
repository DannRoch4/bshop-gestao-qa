((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,E,A={
bv0(d){var x
if(d==null)return 0
if(B.kK(d))return d
if(typeof d=="string"){x=B.eg(d,null)
return x==null?0:x}return 0},
czD(d){var x="paginaAtual",w="totalPaginas",v="totalRegistros",u="registrosPorPagina",t=d.i(0,x)==null?1:A.bv0(d.i(0,x)),s=d.i(0,w)==null?0:A.bv0(d.i(0,w)),r=d.i(0,v)==null?0:A.bv0(d.i(0,v)),q=d.i(0,u)==null?20:A.bv0(d.i(0,u)),p=B.hM(d.i(0,"temProxima")),o=B.hM(d.i(0,"temAnterior"))
return new A.bv_(t,s,r,q,p===!0,o===!0)},
bv_:function bv_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j9:function j9(d,e,f){this.a=d
this.b=e
this.c=f},
azB:function azB(d,e){this.a=d
this.b=e},
M_:function M_(d,e){this.a=d
this.b=e},
cw4(d,e,f,g,h,i,j,k,l){return new A.auO(e,k,l,i,j,g,h,f,d,null)},
auO:function auO(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
bv5:function bv5(d){this.a=d},
bv6:function bv6(d){this.a=d},
bv7:function bv7(d){this.a=d},
bv8:function bv8(d){this.a=d},
bv1:function bv1(d){this.a=d},
bv2:function bv2(d){this.a=d},
bv3:function bv3(d){this.a=d},
bv4:function bv4(d){this.a=d},
acA:function acA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c5g:function c5g(d,e){this.a=d
this.b=e},
c5h:function c5h(d){this.a=d},
ctr(d,e,f){return new A.anT(d,f,e,null)},
anT:function anT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biq:function biq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clJ(){var x=new A.axU($,!0,!1,new B.fV(B.a([],y.i),y.G),B.w(y._,y.N))
x.bI$=null
return x},
axU:function axU(d,e,f,g,h){var _=this
_.bI$=d
_.t4$=e
_.t5$=f
_.cb$=g
_.pG$=h},
Rb:function Rb(d,e){this.a=d
this.b=e},
bSh:function bSh(){},
aZ6:function aZ6(){},
d6c(d){switch(d.a){case 0:return C.CH
case 2:return C.a7f
case 1:return C.a7e
case 3:return D.bV9
case 4:return C.a7g}},
aSL(d,e){var x=0,w=B.p(y.y),v,u
var $async$aSL=B.l(function(f,g){if(f===1)return B.m(g,w)
for(;;)switch(x){case 0:if(e===D.aAb||e===D.aAc)u=!(d.gf7()==="https"||d.gf7()==="http")
else u=!1
if(u)throw B.q(B.jT(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.cpA().Mr(d.k(0),new B.aqM(A.d6c(e),new B.apZ(!0,!0,C.bD),null))
x=1
break
case 1:return B.n(v,w)}})
return B.o($async$aSL,w)},
aSt(d){var x=0,w=B.p(y.y),v
var $async$aSt=B.l(function(e,f){if(e===1)return B.m(f,w)
for(;;)switch(x){case 0:v=$.cpA().atb(d.k(0))
x=1
break
case 1:return B.n(v,w)}})
return B.o($async$aSt,w)}},D,F
B=c[0]
C=c[2]
E=c[48]
A=a.updateHolder(c[17],A)
D=c[44]
F=c[47]
A.bv_.prototype={
X(){var x=this
return B.A(["paginaAtual",x.a,"totalPaginas",x.b,"totalRegistros",x.c,"registrosPorPagina",x.d,"temProxima",x.e,"temAnterior",x.f],y.R,y.z)}}
A.j9.prototype={}
A.azB.prototype={
F(){return"SortDirection."+this.b}}
A.M_.prototype={
ayj(d){if(this.a===d)return new A.M_(d,this.b===D.j0?D.bZt:D.j0)
return new A.M_(d,D.j0)}}
A.auO.prototype={
t(d){var x=B.E(d)
if(this.z)return this.aSx(x)
return this.aSI(x)},
aSI(d){var x,w,v,u,t=this,s=null,r=d.ok.ax,q=r==null,p=t.y,o=y.p,n=B.a3(B.a([B.P("Itens por p\xe1gina:",s,s,s,s,q?s:r.ja(C.R,10),s,s),C.cy,new A.acA(t.f,t.r,p,t.x,s)],o),C.v,C.u,C.t,0),m=t.ajG()
m=B.P(m,s,s,s,s,q?s:r.ja(C.R,10),s,s)
p=!p
x=B.j0(s,s,s,D.Kg,s,s,p&&t.c>1?new A.bv5(t):s,s,s,s,"Primeira p\xe1gina",C.eN)
w=B.j0(s,s,s,D.Kb,s,s,p&&t.c>1?new A.bv6(t):s,s,s,s,"P\xe1gina anterior",C.eN)
v=t.c
u=t.d
r=q?s:r.l1(C.R,10,C.ad)
r=B.al(s,B.P(""+v+" / "+u,s,s,s,s,r,s,s),C.B,s,s,s,s,s,s,s,E.hS,s,s,s)
q=B.j0(s,s,s,D.Kf,s,s,p&&v<u?new A.bv7(t):s,s,s,s,"Pr\xf3xima p\xe1gina",C.eN)
return new B.aD(C.aS,B.a3(B.a([n,m,B.a3(B.a([x,w,r,q,B.j0(s,s,s,D.Ki,s,s,p&&v<u?new A.bv8(t):s,s,s,s,"\xdaltima p\xe1gina",C.eN)],o),C.v,C.u,C.t,0)],o),C.v,C.as,C.t,0),s)},
aSx(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.ajG(),m=d.ok,l=m.Q,k=l==null
n=B.P(n,o,o,o,o,k?o:l.c1(C.ce),o,o)
x=p.y
w=!x
v=B.j0(o,o,o,D.Kg,o,o,w&&p.c>1?new A.bv1(p):o,o,o,o,o,C.eN)
u=B.j0(o,o,o,D.Kb,o,o,w&&p.c>1?new A.bv2(p):o,o,o,o,o,C.eN)
t=p.c
s=p.d
m=m.z
m=m==null?o:m.ie(C.aD)
m=B.P(""+t+" / "+s,o,o,o,o,m,o,o)
r=B.j0(o,o,o,D.Kf,o,o,w&&t<s?new A.bv3(p):o,o,o,o,o,C.eN)
q=y.p
r=B.a3(B.a([v,u,new B.aD(C.ew,m,o),r,B.j0(o,o,o,D.Ki,o,o,w&&t<s?new A.bv4(p):o,o,o,o,o,C.eN)],q),C.v,C.aL,C.t,0)
return B.V(B.a([n,C.dp,r,C.dp,B.a3(B.a([B.P("Itens:",o,o,o,o,k?o:l.c1(C.ce),o,o),C.cy,new A.acA(p.f,p.r,x,p.x,o)],q),C.v,C.aL,C.t,0)],q),C.v,o,C.u,C.t,0)},
ajG(){var x,w,v=this.e
if(v===0)return"Nenhum registro"
x=this.f
w=(this.c-1)*x+1
return"Mostrando "+w+"-"+C.f.aC(w+x-1,1,v)+" de "+v}}
A.acA.prototype={
t(d){var x,w,v,u,t=this,s=null,r=B.E(d),q=t.e,p=q?0.4:1,o=r.at,n=B.aC(4),m=!$.ce?C.bC:C.bM
m=B.ew(B.aX(C.i.af(25.5),m.G()>>>16&255,m.G()>>>8&255,m.G()&255),-1,C.V,1)
x=B.aC(4)
w=r.ok.ax
w=w==null?s:w.jx(r.ax.k3,C.aD)
v=t.d
u=B.R(v).h("G<1,ej<k>>")
v=B.F(new B.G(v,new A.c5g(t,r),u),u.h("a2.E"))
u=q?s:new A.c5h(t)
return B.eP(B.al(s,new B.CG(B.cjq(x,o,0,s,D.ayZ,!0,!1,v,u,w,t.c,y.S),s),C.B,s,s,new B.an(o,s,m,n,s,s,C.P),s,32,s,s,C.fe,s,s,s),p)}}
A.anT.prototype={
t(d){var x,w,v,u,t=null,s=d.aX(y.I).w,r=B.QG(d),q=r.gdZ()
if(q==null)q=1
x=this.e
if(q!==1)x=x.U(x.a*q)
w=this.c
v=B.eY(w.a)
u=B.bCw(t,t,t,C.i8,t,t,!0,t,B.en(t,t,t,t,t,t,t,t,t,B.bC(t,t,x,t,t,t,t,t,w.b,t,t,this.d,t,t,t,t,t,!1,t,t,t,t,w.c,r.w,t,t),v),C.bI,s,t,C.ca,C.bV)
if(w.d)switch(s.a){case 0:w=new B.bX(new Float64Array(16))
w.e0()
w.iw(-1,1,1,1)
u=B.kb(C.X,u,t,w,!1)
break
case 1:break}return B.cw(t,t,t,new B.wk(!0,u,t),!1,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.ak,t)}}
A.biq.prototype={}
A.axU.prototype={
aZ(d,e){var x=this.gj()
x.toString
return C.n.aZ(x,e)},
$idV:1}
A.Rb.prototype={
F(){return"LaunchMode."+this.b}}
A.bSh.prototype={}
A.aZ6.prototype={}
var z=a.updateTypes([])
A.bv5.prototype={
$0(){return this.a.w.$1(1)},
$S:0}
A.bv6.prototype={
$0(){var x=this.a
return x.w.$1(x.c-1)},
$S:0}
A.bv7.prototype={
$0(){var x=this.a
return x.w.$1(x.c+1)},
$S:0}
A.bv8.prototype={
$0(){var x=this.a
return x.w.$1(x.d)},
$S:0}
A.bv1.prototype={
$0(){return this.a.w.$1(1)},
$S:0}
A.bv2.prototype={
$0(){var x=this.a
return x.w.$1(x.c-1)},
$S:0}
A.bv3.prototype={
$0(){var x=this.a
return x.w.$1(x.c+1)},
$S:0}
A.bv4.prototype={
$0(){var x=this.a
return x.w.$1(x.d)},
$S:0}
A.c5g.prototype={
$1(d){var x=null,w=d===this.a.c,v=this.b,u=v.ok.ax
if(u==null)v=x
else{v=v.ax
v=w?v.b:v.k3
v=u.jx(v,w?C.ad:C.a9)}return B.z9(B.P(""+d,x,x,x,x,v,x,x),d,y.S)},
$S:424}
A.c5h.prototype={
$1(d){if(d!=null)this.a.f.$1(d)},
$S:222};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.bv_,A.j9,A.M_,A.bSh,A.aZ6])
x(B.li,[A.azB,A.Rb])
x(B.H,[A.auO,A.acA,A.anT])
x(B.ie,[A.bv5,A.bv6,A.bv7,A.bv8,A.bv1,A.bv2,A.bv3,A.bv4])
x(B.hn,[A.c5g,A.c5h])
w(A.biq,B.aZ)
w(A.axU,B.k8)})()
B.i9(b.typeUniverse,JSON.parse('{"auO":{"H":[],"e":[],"i":[]},"acA":{"H":[],"e":[],"i":[]},"anT":{"H":[],"e":[],"i":[]},"axU":{"k8":["c?"],"of":["c?"],"hi":["c?"],"hf":["c?"],"dV":["c"],"hi.T":"c?","k8.T":"c?","hf.T":"c?"}}'))
var y=(function rtii(){var x=B.a1
return{I:x("lw"),_:x("fV<@>"),G:x("fV<c?>"),i:x("x<lC<c?>>"),p:x("x<e>"),t:x("x<k>"),N:x("B<f4<@>>"),R:x("c"),y:x("J"),z:x("@"),S:x("k")}})();(function constants(){var x=a.makeConstList
D.xw=new B.dJ(C.i0,C.i0,C.ac,C.ac)
D.cdN=new A.aZ6()
D.cdU=new A.bSh()
D.Ho=new B.M(1,0.1450980392156863,0.8274509803921568,0.4,C.y)
D.blo=x([F.WF],y.p)
D.HQ=new B.hZ(C.aa,C.u,C.Y,C.v,null,C.bX,null,0,D.blo,null)
D.n9=new B.aA(8,16,8,16)
D.JK=new A.biq(62002,"FontAwesomeBrands","font_awesome_flutter",!1)
D.K4=new B.aZ(984320,"MaterialIcons",null,!1)
D.K8=new B.di(D.K4,null,null,null,null)
D.Kb=new B.di(C.jP,20,null,null,null)
D.Ke=new B.di(C.nl,14,C.R,null,null)
D.Kf=new B.di(C.hV,20,null,null,null)
D.axd=new B.aZ(57995,"MaterialIcons",null,!0)
D.Kg=new B.di(D.axd,20,null,null,null)
D.axk=new B.aZ(58219,"MaterialIcons",null,!0)
D.Ki=new B.di(D.axk,20,null,null,null)
D.ayZ=new B.di(C.iw,18,C.R,null,null)
D.ce8=new A.Rb(0,"platformDefault")
D.aAb=new A.Rb(1,"inAppWebView")
D.aAc=new A.Rb(2,"inAppBrowserView")
D.zR=new A.Rb(3,"externalApplication")
D.cea=x([10,20,50,100],y.t)
D.UB=x([20,50,100,200,500],y.t)
D.bV9=new B.KV(3,"externalApplication")
D.a7u=new B.ki(C.yK,14,18)
D.a7v=new B.ki(C.aqF,9,10)
D.j0=new A.azB(0,"ascending")
D.bZt=new A.azB(1,"descending")
D.vM=new A.M_(null,D.j0)})()};
(a=>{a["z2oPJUJYUlEdGhmgUymhwJL+tro="]=a.current})($__dart_deferred_initializers__);