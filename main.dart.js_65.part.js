((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,E,A={
bvk(d){var x
if(d==null)return 0
if(B.kK(d))return d
if(typeof d=="string"){x=B.eh(d,null)
return x==null?0:x}return 0},
cAf(d){var x="paginaAtual",w="totalPaginas",v="totalRegistros",u="registrosPorPagina",t=d.i(0,x)==null?1:A.bvk(d.i(0,x)),s=d.i(0,w)==null?0:A.bvk(d.i(0,w)),r=d.i(0,v)==null?0:A.bvk(d.i(0,v)),q=d.i(0,u)==null?20:A.bvk(d.i(0,u)),p=B.hM(d.i(0,"temProxima")),o=B.hM(d.i(0,"temAnterior"))
return new A.bvj(t,s,r,q,p===!0,o===!0)},
bvj:function bvj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jc:function jc(d,e,f){this.a=d
this.b=e
this.c=f},
azL:function azL(d,e){this.a=d
this.b=e},
M6:function M6(d,e){this.a=d
this.b=e},
cwH(d,e,f,g,h,i,j,k,l){return new A.auZ(e,k,l,i,j,g,h,f,d,null)},
auZ:function auZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
bvp:function bvp(d){this.a=d},
bvq:function bvq(d){this.a=d},
bvr:function bvr(d){this.a=d},
bvs:function bvs(d){this.a=d},
bvl:function bvl(d){this.a=d},
bvm:function bvm(d){this.a=d},
bvn:function bvn(d){this.a=d},
bvo:function bvo(d){this.a=d},
acK:function acK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c5H:function c5H(d,e){this.a=d
this.b=e},
c5I:function c5I(d){this.a=d},
cu2(d,e,f){return new A.ao5(d,f,e,null)},
ao5:function ao5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biA:function biA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cmj(){var x=new A.ay3($,!0,!1,new B.fW(B.a([],y.i),y.G),B.w(y._,y.N))
x.bI$=null
return x},
ay3:function ay3(d,e,f,g,h){var _=this
_.bI$=d
_.t8$=e
_.t9$=f
_.cb$=g
_.pL$=h},
Rg:function Rg(d,e){this.a=d
this.b=e},
bSD:function bSD(){},
aZe:function aZe(){},
d6P(d){switch(d.a){case 0:return C.CQ
case 2:return C.a7n
case 1:return C.a7m
case 3:return D.bVq
case 4:return C.a7o}},
aST(d,e){var x=0,w=B.p(y.y),v,u
var $async$aST=B.l(function(f,g){if(f===1)return B.m(g,w)
for(;;)switch(x){case 0:if(e===D.aAo||e===D.aAp)u=!(d.gf7()==="https"||d.gf7()==="http")
else u=!1
if(u)throw B.q(B.jT(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.cqb().Mu(d.k(0),new B.aqY(A.d6P(e),new B.aqa(!0,!0,C.bA),null))
x=1
break
case 1:return B.n(v,w)}})
return B.o($async$aST,w)},
aSB(d){var x=0,w=B.p(y.y),v
var $async$aSB=B.l(function(e,f){if(e===1)return B.m(f,w)
for(;;)switch(x){case 0:v=$.cqb().atw(d.k(0))
x=1
break
case 1:return B.n(v,w)}})
return B.o($async$aSB,w)}},D,F
B=c[0]
C=c[2]
E=c[48]
A=a.updateHolder(c[17],A)
D=c[44]
F=c[47]
A.bvj.prototype={
X(){var x=this
return B.A(["paginaAtual",x.a,"totalPaginas",x.b,"totalRegistros",x.c,"registrosPorPagina",x.d,"temProxima",x.e,"temAnterior",x.f],y.R,y.z)}}
A.jc.prototype={}
A.azL.prototype={
F(){return"SortDirection."+this.b}}
A.M6.prototype={
ayG(d){if(this.a===d)return new A.M6(d,this.b===D.j1?D.bZL:D.j1)
return new A.M6(d,D.j1)}}
A.auZ.prototype={
t(d){var x=B.D(d)
if(this.z)return this.aSY(x)
return this.aT8(x)},
aT8(d){var x,w,v,u,t=this,s=null,r=d.ok.ax,q=r==null,p=t.y,o=y.p,n=B.a2(B.a([B.P("Itens por p\xe1gina:",s,s,s,s,q?s:r.iB(C.Q,10),s,s),C.cI,new A.acK(t.f,t.r,p,t.x,s)],o),C.v,C.u,C.t,0),m=t.ajW()
m=B.P(m,s,s,s,s,q?s:r.iB(C.Q,10),s,s)
p=!p
x=B.j2(s,s,s,D.Ko,s,s,p&&t.c>1?new A.bvp(t):s,s,s,s,"Primeira p\xe1gina",C.eP)
w=B.j2(s,s,s,D.Kj,s,s,p&&t.c>1?new A.bvq(t):s,s,s,s,"P\xe1gina anterior",C.eP)
v=t.c
u=t.d
r=q?s:r.kG(C.Q,10,C.ac)
r=B.al(s,B.P(""+v+" / "+u,s,s,s,s,r,s,s),C.B,s,s,s,s,s,s,s,E.h9,s,s,s)
q=B.j2(s,s,s,D.Kn,s,s,p&&v<u?new A.bvr(t):s,s,s,s,"Pr\xf3xima p\xe1gina",C.eP)
return new B.aD(C.aS,B.a2(B.a([n,m,B.a2(B.a([x,w,r,q,B.j2(s,s,s,D.Kq,s,s,p&&v<u?new A.bvs(t):s,s,s,s,"\xdaltima p\xe1gina",C.eP)],o),C.v,C.u,C.t,0)],o),C.v,C.as,C.t,0),s)},
aSY(d){var x,w,v,u,t,s,r=this,q=null,p=r.ajW(),o=d.ok.ax,n=o==null
p=B.P(p,q,q,q,q,n?q:o.iB(C.Q,10),q,q)
x=r.y
w=y.p
p=B.a2(B.a([p,B.a2(B.a([B.P("Itens:",q,q,q,q,n?q:o.iB(C.Q,10),q,q),C.eL,new A.acK(r.f,r.r,x,r.x,q)],w),C.v,C.u,C.t,0)],w),C.v,C.as,C.t,0)
x=!x
v=B.j2(q,q,q,D.Ko,q,q,x&&r.c>1?new A.bvl(r):q,q,q,q,q,C.eP)
u=B.j2(q,q,q,D.Kj,q,q,x&&r.c>1?new A.bvm(r):q,q,q,q,q,C.eP)
t=r.c
s=r.d
o=n?q:o.kG(C.Q,10,C.ac)
o=B.P(""+t+" / "+s,q,q,q,q,o,q,q)
n=B.j2(q,q,q,D.Kn,q,q,x&&t<s?new A.bvn(r):q,q,q,q,q,C.eP)
return B.V(B.a([p,C.dc,B.a2(B.a([v,u,new B.aD(C.eh,o,q),n,B.j2(q,q,q,D.Kq,q,q,x&&t<s?new A.bvo(r):q,q,q,q,q,C.eP)],w),C.v,C.aL,C.t,0)],w),C.v,q,C.u,C.t,0)},
ajW(){var x,w,v=this.e
if(v===0)return"Nenhum registro"
x=this.f
w=(this.c-1)*x+1
return"Mostrando "+w+"-"+C.f.aC(w+x-1,1,v)+" de "+v}}
A.acK.prototype={
t(d){var x,w,v,u,t=this,s=null,r=B.D(d),q=t.e,p=q?0.4:1,o=r.at,n=B.aB(4),m=!$.cd?C.bv:C.bI
m=B.eq(B.aZ(C.i.af(25.5),m.G()>>>16&255,m.G()>>>8&255,m.G()&255),-1,C.T,1)
x=B.aB(4)
w=r.ok.ax
w=w==null?s:w.jx(r.ax.k3,C.aD)
v=t.d
u=B.R(v).h("G<1,el<k>>")
v=B.F(new B.G(v,new A.c5H(t,r),u),u.h("a3.E"))
u=q?s:new A.c5I(t)
return B.eP(B.al(s,new B.CI(B.ck_(x,o,0,s,D.azb,!0,!1,v,u,s,w,t.c,y.S),s),C.B,s,s,new B.am(o,s,m,n,s,s,C.P),s,32,s,s,C.fi,s,s,s),p)}}
A.ao5.prototype={
t(d){var x,w,v,u,t=null,s=d.aX(y.I).w,r=B.QM(d),q=r.gdZ()
if(q==null)q=1
x=this.e
if(q!==1)x=x.U(x.a*q)
w=this.c
v=B.eY(w.a)
u=B.bCT(t,t,t,C.i9,t,t,!0,t,B.ej(t,t,t,t,t,t,t,t,t,B.bC(t,t,x,t,t,t,t,t,w.b,t,t,this.d,t,t,t,t,t,!1,t,t,t,t,w.c,r.w,t,t),v),C.bB,s,t,C.ca,C.bR)
if(w.d)switch(s.a){case 0:w=new B.bY(new Float64Array(16))
w.e0()
w.ix(-1,1,1,1)
u=B.kb(C.X,u,t,w,!1)
break
case 1:break}return B.cw(t,t,t,new B.wl(!0,u,t),!1,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.ak,t)}}
A.biA.prototype={}
A.ay3.prototype={
aZ(d,e){var x=this.gj()
x.toString
return C.m.aZ(x,e)},
$idV:1}
A.Rg.prototype={
F(){return"LaunchMode."+this.b}}
A.bSD.prototype={}
A.aZe.prototype={}
var z=a.updateTypes([])
A.bvp.prototype={
$0(){return this.a.w.$1(1)},
$S:0}
A.bvq.prototype={
$0(){var x=this.a
return x.w.$1(x.c-1)},
$S:0}
A.bvr.prototype={
$0(){var x=this.a
return x.w.$1(x.c+1)},
$S:0}
A.bvs.prototype={
$0(){var x=this.a
return x.w.$1(x.d)},
$S:0}
A.bvl.prototype={
$0(){return this.a.w.$1(1)},
$S:0}
A.bvm.prototype={
$0(){var x=this.a
return x.w.$1(x.c-1)},
$S:0}
A.bvn.prototype={
$0(){var x=this.a
return x.w.$1(x.c+1)},
$S:0}
A.bvo.prototype={
$0(){var x=this.a
return x.w.$1(x.d)},
$S:0}
A.c5H.prototype={
$1(d){var x=null,w=d===this.a.c,v=this.b,u=v.ok.ax
if(u==null)v=x
else{v=v.ax
v=w?v.b:v.k3
v=u.jx(v,w?C.ac:C.aa)}return B.za(B.P(""+d,x,x,x,x,v,x,x),d,y.S)},
$S:425}
A.c5I.prototype={
$1(d){if(d!=null)this.a.f.$1(d)},
$S:215};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.bvj,A.jc,A.M6,A.bSD,A.aZe])
x(B.li,[A.azL,A.Rg])
x(B.H,[A.auZ,A.acK,A.ao5])
x(B.ig,[A.bvp,A.bvq,A.bvr,A.bvs,A.bvl,A.bvm,A.bvn,A.bvo])
x(B.hq,[A.c5H,A.c5I])
w(A.biA,B.aY)
w(A.ay3,B.k8)})()
B.ia(b.typeUniverse,JSON.parse('{"auZ":{"H":[],"f":[],"i":[]},"acK":{"H":[],"f":[],"i":[]},"ao5":{"H":[],"f":[],"i":[]},"ay3":{"k8":["c?"],"oi":["c?"],"hj":["c?"],"hg":["c?"],"dV":["c"],"hj.T":"c?","k8.T":"c?","hg.T":"c?"}}'))
var y=(function rtii(){var x=B.a1
return{I:x("lw"),_:x("fW<@>"),G:x("fW<c?>"),i:x("x<lC<c?>>"),p:x("x<f>"),t:x("x<k>"),N:x("B<f4<@>>"),R:x("c"),y:x("J"),z:x("@"),S:x("k")}})();(function constants(){var x=a.makeConstList
D.xF=new B.dJ(C.i0,C.i0,C.ad,C.ad)
D.ce2=new A.aZe()
D.ce9=new A.bSD()
D.Hx=new B.M(1,0.1450980392156863,0.8274509803921568,0.4,C.y)
D.blF=x([F.WN],y.p)
D.HZ=new B.i0(C.a9,C.u,C.Y,C.v,null,C.bX,null,0,D.blF,null)
D.nf=new B.az(8,16,8,16)
D.JS=new A.biA(62002,"FontAwesomeBrands","font_awesome_flutter",!1)
D.Kc=new B.aY(984320,"MaterialIcons",null,!1)
D.Kg=new B.di(D.Kc,null,null,null,null)
D.Kj=new B.di(C.jR,20,null,null,null)
D.zU=new B.di(C.nr,14,C.Q,null,null)
D.Kn=new B.di(C.hV,20,null,null,null)
D.axr=new B.aY(57995,"MaterialIcons",null,!0)
D.Ko=new B.di(D.axr,20,null,null,null)
D.axy=new B.aY(58219,"MaterialIcons",null,!0)
D.Kq=new B.di(D.axy,20,null,null,null)
D.azb=new B.di(C.ix,18,C.Q,null,null)
D.ceo=new A.Rg(0,"platformDefault")
D.aAo=new A.Rg(1,"inAppWebView")
D.aAp=new A.Rg(2,"inAppBrowserView")
D.A_=new A.Rg(3,"externalApplication")
D.ceq=x([10,20,50,100],y.t)
D.UJ=x([20,50,100,200,500],y.t)
D.bVq=new B.L1(3,"externalApplication")
D.a7C=new B.ki(C.yS,14,18)
D.a7D=new B.ki(C.aqS,9,10)
D.j1=new A.azL(0,"ascending")
D.bZL=new A.azL(1,"descending")
D.vS=new A.M6(null,D.j1)})()};
(a=>{a["KNBjxwIgmTqnAqXtPN3qegLrCZI="]=a.current})($__dart_deferred_initializers__);