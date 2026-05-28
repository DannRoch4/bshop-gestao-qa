((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,E,B={
bv0(d){var x
if(d==null)return 0
if(A.kK(d))return d
if(typeof d=="string"){x=A.eg(d,null)
return x==null?0:x}return 0},
czD(d){var x="paginaAtual",w="totalPaginas",v="totalRegistros",u="registrosPorPagina",t=d.i(0,x)==null?1:B.bv0(d.i(0,x)),s=d.i(0,w)==null?0:B.bv0(d.i(0,w)),r=d.i(0,v)==null?0:B.bv0(d.i(0,v)),q=d.i(0,u)==null?20:B.bv0(d.i(0,u)),p=A.hM(d.i(0,"temProxima")),o=A.hM(d.i(0,"temAnterior"))
return new B.bv_(t,s,r,q,p===!0,o===!0)},
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
cw4(d,e,f,g,h,i,j,k,l){return new B.auO(e,k,l,i,j,g,h,f,d,null)},
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
ctr(d,e,f){var x=null
return new B.anT(d,f,x,x,x,x,e,x,x,x,x,x,x,x)},
anT:function anT(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.a=q},
biq:function biq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clJ(){var x=new B.axU($,!0,!1,new A.fV(A.a([],y.i),y.G),A.w(y._,y.N))
x.bI$=null
return x},
axU:function axU(d,e,f,g,h){var _=this
_.bI$=d
_.t4$=e
_.t5$=f
_.cb$=g
_.pG$=h},
Ra:function Ra(d,e){this.a=d
this.b=e},
bSh:function bSh(){},
aZ6:function aZ6(){},
d6c(d){switch(d.a){case 0:return C.CG
case 2:return C.a7f
case 1:return C.a7e
case 3:return D.bVa
case 4:return C.a7g}},
aSL(d,e){var x=0,w=A.p(y.y),v,u
var $async$aSL=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:if(e===D.aAc||e===D.aAd)u=!(d.gf7()==="https"||d.gf7()==="http")
else u=!1
if(u)throw A.q(A.jT(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.cpA().Mr(d.k(0),new A.aqM(B.d6c(e),new A.apZ(!0,!0,C.bD),null))
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$aSL,w)},
aSt(d){var x=0,w=A.p(y.y),v
var $async$aSt=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=$.cpA().atb(d.k(0))
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$aSt,w)}},D,F
A=c[0]
C=c[2]
E=c[48]
B=a.updateHolder(c[17],B)
D=c[44]
F=c[47]
B.bv_.prototype={
X(){var x=this
return A.A(["paginaAtual",x.a,"totalPaginas",x.b,"totalRegistros",x.c,"registrosPorPagina",x.d,"temProxima",x.e,"temAnterior",x.f],y.R,y.z)}}
B.j9.prototype={}
B.azB.prototype={
F(){return"SortDirection."+this.b}}
B.M_.prototype={
ayj(d){if(this.a===d)return new B.M_(d,this.b===D.j0?D.bZu:D.j0)
return new B.M_(d,D.j0)}}
B.auO.prototype={
t(d){var x=A.E(d)
if(this.z)return this.aSx(x)
return this.aSI(x)},
aSI(d){var x,w,v,u,t=this,s=null,r=d.ok.ax,q=r==null,p=t.y,o=y.p,n=A.a3(A.a([A.P("Itens por p\xe1gina:",s,s,s,s,q?s:r.ja(C.R,10),s,s),C.cy,new B.acA(t.f,t.r,p,t.x,s)],o),C.v,C.u,C.t,0),m=t.ajG()
m=A.P(m,s,s,s,s,q?s:r.ja(C.R,10),s,s)
p=!p
x=A.j0(s,s,s,D.K7,s,s,p&&t.c>1?new B.bv5(t):s,s,s,s,"Primeira p\xe1gina",C.eN)
w=A.j0(s,s,s,D.Kb,s,s,p&&t.c>1?new B.bv6(t):s,s,s,s,"P\xe1gina anterior",C.eN)
v=t.c
u=t.d
r=q?s:r.kg(C.R,10,C.ad)
r=A.al(s,A.P(""+v+" / "+u,s,s,s,s,r,s,s),C.B,s,s,s,s,s,s,s,E.hS,s,s,s)
q=A.j0(s,s,s,D.Kh,s,s,p&&v<u?new B.bv7(t):s,s,s,s,"Pr\xf3xima p\xe1gina",C.eN)
return new A.aD(C.aS,A.a3(A.a([n,m,A.a3(A.a([x,w,r,q,A.j0(s,s,s,D.Kc,s,s,p&&v<u?new B.bv8(t):s,s,s,s,"\xdaltima p\xe1gina",C.eN)],o),C.v,C.u,C.t,0)],o),C.v,C.as,C.t,0),s)},
aSx(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.ajG(),m=d.ok,l=m.Q,k=l==null
n=A.P(n,o,o,o,o,k?o:l.c1(C.ce),o,o)
x=p.y
w=!x
v=A.j0(o,o,o,D.K7,o,o,w&&p.c>1?new B.bv1(p):o,o,o,o,o,C.eN)
u=A.j0(o,o,o,D.Kb,o,o,w&&p.c>1?new B.bv2(p):o,o,o,o,o,C.eN)
t=p.c
s=p.d
m=m.z
m=m==null?o:m.ie(C.aB)
m=A.P(""+t+" / "+s,o,o,o,o,m,o,o)
r=A.j0(o,o,o,D.Kh,o,o,w&&t<s?new B.bv3(p):o,o,o,o,o,C.eN)
q=y.p
r=A.a3(A.a([v,u,new A.aD(C.ew,m,o),r,A.j0(o,o,o,D.Kc,o,o,w&&t<s?new B.bv4(p):o,o,o,o,o,C.eN)],q),C.v,C.aL,C.t,0)
return A.V(A.a([n,C.dp,r,C.dp,A.a3(A.a([A.P("Itens:",o,o,o,o,k?o:l.c1(C.ce),o,o),C.cy,new B.acA(p.f,p.r,x,p.x,o)],q),C.v,C.aL,C.t,0)],q),C.v,o,C.u,C.t,0)},
ajG(){var x,w,v=this.e
if(v===0)return"Nenhum registro"
x=this.f
w=(this.c-1)*x+1
return"Mostrando "+w+"-"+C.f.aC(w+x-1,1,v)+" de "+v}}
B.acA.prototype={
t(d){var x,w,v,u,t=this,s=null,r=A.E(d),q=t.e,p=q?0.4:1,o=r.at,n=A.aC(4),m=!$.ce?C.bC:C.bM
m=A.ew(A.aX(C.i.af(25.5),m.G()>>>16&255,m.G()>>>8&255,m.G()&255),-1,C.V,1)
x=A.aC(4)
w=r.ok.ax
w=w==null?s:w.jx(r.ax.k3,C.aB)
v=t.d
u=A.R(v).h("G<1,ej<k>>")
v=A.F(new A.G(v,new B.c5g(t,r),u),u.h("a2.E"))
u=q?s:new B.c5h(t)
return A.eP(A.al(s,new A.CG(A.cjq(x,o,0,s,D.ayz,!0,!1,v,u,w,t.c,y.S),s),C.B,s,s,new A.an(o,s,m,n,s,s,C.O),s,32,s,s,C.fe,s,s,s),p)}}
B.anT.prototype={
t(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=d.aX(y.I).w,l=A.QF(d),k=o.d,j=k==null?l.a:k
if(j==null)j=14
if(l.x===!0){k=A.cY(d,C.cZ)
k=k==null?n:k.gde()
x=(k==null?C.c4:k).bF(j)}else x=j
w=l.b
v=l.c
u=l.d
t=l.e
s=o.c
if(s==null)return A.cu(n,n,n,new A.ai(x,x,n,n),!1,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,o.z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.aj,n)
r=l.gdZ()
if(r==null)r=1
q=o.x
if(q==null){k=l.f
k.toString
q=k}if(r!==1)q=q.U(q.gaJ()*r)
k=A.a([],y.d)
if(w!=null)k.push(new A.o0("FILL",w))
if(v!=null)k.push(new A.o0("wght",v))
if(u!=null)k.push(new A.o0("GRAD",u))
if(t!=null)k.push(new A.o0("opsz",t))
p=A.bCw(n,n,n,C.i8,n,n,!0,n,A.en(n,n,n,n,n,n,n,n,n,A.bA(n,n,q,n,n,n,n,n,s.b,n,n,x,n,k,o.ax,n,1,!1,C.aZ,n,n,n,s.c,l.w,n,n),A.eY(s.a)),C.bI,m,n,C.c4,C.bV)
if(s.d)switch(m.a){case 0:k=new A.bX(new Float64Array(16))
k.e0()
k.iw(-1,1,1,1)
p=A.kb(C.X,p,n,k,!1)
break
case 1:break}return A.cu(n,n,n,new A.wl(!0,p,n),!1,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,o.z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.aj,n)}}
B.biq.prototype={}
B.axU.prototype={
aZ(d,e){var x=this.gj()
x.toString
return C.n.aZ(x,e)},
$idV:1}
B.Ra.prototype={
F(){return"LaunchMode."+this.b}}
B.bSh.prototype={}
B.aZ6.prototype={}
var z=a.updateTypes([])
B.bv5.prototype={
$0(){return this.a.w.$1(1)},
$S:0}
B.bv6.prototype={
$0(){var x=this.a
return x.w.$1(x.c-1)},
$S:0}
B.bv7.prototype={
$0(){var x=this.a
return x.w.$1(x.c+1)},
$S:0}
B.bv8.prototype={
$0(){var x=this.a
return x.w.$1(x.d)},
$S:0}
B.bv1.prototype={
$0(){return this.a.w.$1(1)},
$S:0}
B.bv2.prototype={
$0(){var x=this.a
return x.w.$1(x.c-1)},
$S:0}
B.bv3.prototype={
$0(){var x=this.a
return x.w.$1(x.c+1)},
$S:0}
B.bv4.prototype={
$0(){var x=this.a
return x.w.$1(x.d)},
$S:0}
B.c5g.prototype={
$1(d){var x=null,w=d===this.a.c,v=this.b,u=v.ok.ax
if(u==null)v=x
else{v=v.ax
v=w?v.b:v.k3
v=u.jx(v,w?C.ad:C.a9)}return A.z9(A.P(""+d,x,x,x,x,v,x,x),d,y.S)},
$S:424}
B.c5h.prototype={
$1(d){if(d!=null)this.a.f.$1(d)},
$S:222};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.bv_,B.j9,B.M_,B.bSh,B.aZ6])
x(A.li,[B.azB,B.Ra])
x(A.H,[B.auO,B.acA])
x(A.ie,[B.bv5,B.bv6,B.bv7,B.bv8,B.bv1,B.bv2,B.bv3,B.bv4])
x(A.hn,[B.c5g,B.c5h])
w(B.anT,A.dg)
w(B.biq,A.aZ)
w(B.axU,A.k8)})()
A.i9(b.typeUniverse,JSON.parse('{"auO":{"H":[],"e":[],"i":[]},"acA":{"H":[],"e":[],"i":[]},"anT":{"H":[],"e":[],"i":[]},"axU":{"k8":["c?"],"og":["c?"],"hi":["c?"],"hf":["c?"],"dV":["c"],"hi.T":"c?","k8.T":"c?","hf.T":"c?"}}'))
var y=(function rtii(){var x=A.a1
return{I:x("lw"),_:x("fV<@>"),G:x("fV<c?>"),d:x("x<o0>"),i:x("x<lC<c?>>"),p:x("x<e>"),t:x("x<k>"),N:x("B<f4<@>>"),R:x("c"),y:x("J"),z:x("@"),S:x("k")}})();(function constants(){var x=a.makeConstList
D.xv=new A.dJ(C.i0,C.i0,C.ac,C.ac)
D.cdO=new B.aZ6()
D.cdV=new B.bSh()
D.Hn=new A.M(1,0.1450980392156863,0.8274509803921568,0.4,C.y)
D.blp=x([F.WF],y.p)
D.HP=new A.hZ(C.aa,C.u,C.Y,C.v,null,C.bX,null,0,D.blp,null)
D.n9=new A.aA(8,16,8,16)
D.JK=new B.biq(62002,"FontAwesomeBrands","font_awesome_flutter",!1)
D.ayz=new A.dg(C.iw,18,null,null,null,null,C.R,null,null,null,null,null,null,null)
D.K4=new A.aZ(984320,"MaterialIcons",null,!1)
D.axe=new A.aZ(57995,"MaterialIcons",null,!0)
D.K7=new A.dg(D.axe,20,null,null,null,null,null,null,null,null,null,null,null,null)
D.K9=new A.dg(C.nl,14,null,null,null,null,C.R,null,null,null,null,null,null,null)
D.Kb=new A.dg(C.jP,20,null,null,null,null,null,null,null,null,null,null,null,null)
D.axl=new A.aZ(58219,"MaterialIcons",null,!0)
D.Kc=new A.dg(D.axl,20,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ke=new A.dg(D.K4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kh=new A.dg(C.hV,20,null,null,null,null,null,null,null,null,null,null,null,null)
D.ce9=new B.Ra(0,"platformDefault")
D.aAc=new B.Ra(1,"inAppWebView")
D.aAd=new B.Ra(2,"inAppBrowserView")
D.zQ=new B.Ra(3,"externalApplication")
D.ceb=x([10,20,50,100],y.t)
D.UB=x([20,50,100,200,500],y.t)
D.bVa=new A.KV(3,"externalApplication")
D.a7u=new A.ki(C.yJ,14,18)
D.a7v=new A.ki(C.aqG,9,10)
D.j0=new B.azB(0,"ascending")
D.bZu=new B.azB(1,"descending")
D.vL=new B.M_(null,D.j0)})()};
(a=>{a["yHKM1+NLRd7Xx2xvV1olvFoNbCc="]=a.current})($__dart_deferred_initializers__);