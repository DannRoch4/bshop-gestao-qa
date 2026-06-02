((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,O,H,K,L,P,I,Q,M,G,C={b3h:function b3h(){},b3v:function b3v(){},Cr:function Cr(d,e){this.a=d
this.b=e},w7:function w7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6){var _=this
_.k3=d
_.k4=e
_.ok=null
_.p1=f
_.p2=g
_.p3=h
_.p4=i
_.R8=j
_.RG=k
_.rx=l
_.ry=m
_.to=n
_.x1=o
_.x2=p
_.xr=q
_.y1=r
_.y2=s
_.aT=t
_.aQ=u
_.v=v
_.Z=w
_.R=x
_.dx=_.db=$
_.dy=a0
_.fr=!1
_.iW$=a1
_.iC$=a2
_.jy$=a3
_.jz$=a4
_.je$=a5
_.jA$=a6},b3i:function b3i(d,e){this.a=d
this.b=e},b3j:function b3j(d){this.a=d},b3k:function b3k(d){this.a=d},b3n:function b3n(d){this.a=d},b3o:function b3o(d){this.a=d},b3m:function b3m(d){this.a=d},b3l:function b3l(d){this.a=d},b3p:function b3p(d,e){this.a=d
this.b=e},b3q:function b3q(d,e){this.a=d
this.b=e},
cMC(){return new C.HB(null)},
HB:function HB(d){this.a=d},
b3s:function b3s(d){this.a=d},
b3r:function b3r(d){this.a=d},
b3u:function b3u(d){this.a=d},
b3t:function b3t(d){this.a=d},
b3w:function b3w(d){this.a=d},
b3z:function b3z(d,e){this.a=d
this.b=e},
b3y:function b3y(){},
b3x:function b3x(d,e){this.a=d
this.b=e},
bXX:function bXX(d,e,f){this.a=d
this.b=e
this.c=f},
bXY:function bXY(){},
cMB(d){if(typeof d=="string")return C.cST(d)
return D.oi},
czA(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="historicoCompras",e="ultimaCompra",d=A.aW(a0.i(0,"codigoCliente"))
if(d==null)d=""
x=A.aW(a0.i(0,"nomeCliente"))
if(x==null)x="Cliente n\xe3o informado"
w=A.aW(a0.i(0,"email"))
v=A.aW(a0.i(0,"telefone"))
u=A.aW(a0.i(0,"celular"))
t=C.cMB(a0.i(0,"nivelRisco"))
s=A.bg(a0.i(0,"saldoCashbackDisponivel"))
if(s==null)s=g
if(s==null)s=0
r=A.bg(a0.i(0,"diasAteExpiracao"))
r=r==null?g:B.i.D(r)
if(r==null)r=0
q=A.bg(a0.i(0,"diasDesdeUltimaCompra"))
q=q==null?g:B.i.D(q)
if(q==null)q=0
p=A.aW(a0.i(0,"motivoRisco"))
if(p==null)p="-"
o=A.aW(a0.i(0,"mensagemWhatsapp"))
n=A.aW(a0.i(0,"menorDataExpiracao"))
m=A.bg(a0.i(0,"quantidadeCashbacks"))
m=m==null?g:B.i.D(m)
if(a0.i(0,f)==null)l=g
else{l=y.P
k=l.a(a0.i(0,f))
j=A.bg(k.i(0,"quantidadeCompras"))
j=j==null?g:B.i.D(j)
if(j==null)j=0
i=A.bg(k.i(0,"valorMedioCompra"))
if(i==null)i=g
if(i==null)i=0
if(k.i(0,e)==null)l=g
else{l=l.a(k.i(0,e))
k=A.aW(l.i(0,"data"))
h=A.bg(l.i(0,"valor"))
if(h==null)h=g
if(h==null)h=0
l=new C.bQX(k,h,A.aW(l.i(0,"documento")))}l=new C.bhs(j,i,l)}return new C.m4(d,x,w,v,u,t,s,r,q,p,o,n,m,l)},
cYE(d){var x=C.czA(y.P.a(d.i(0,"cliente"))),w=y.j,v=J.ch(w.a(d.i(0,"cashbacks")),new C.bTp(),y._)
v=A.F(v,v.$ti.h("a2.E"))
w=J.ch(w.a(d.i(0,"historicoCompras")),new C.bTq(),y.Z)
w=A.F(w,w.$ti.h("a2.E"))
return new C.tP(x,v,w)},
m4:function m4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q},
bhs:function bhs(d,e,f){this.a=d
this.b=e
this.c=f},
bQX:function bQX(d,e,f){this.a=d
this.b=e
this.c=f},
tP:function tP(d,e,f){this.a=d
this.b=e
this.c=f},
ON:function ON(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
QB:function QB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bTp:function bTp(){},
bTq:function bTq(){},
cYF(d){var x,w,v,u,t="distribuicaoPorNivel",s=J.ch(y.j.a(d.i(0,"dados")),new C.bTr(),y.I)
s=A.F(s,s.$ti.h("a2.E"))
x=y.P
w=x.a(d.i(0,"resumo"))
v=A.bg(w.i(0,"totalClientesEmRisco"))
v=v==null?null:B.i.D(v)
if(v==null)v=0
u=A.bg(w.i(0,"valorTotalEmRisco"))
if(u==null)u=null
if(u==null)u=0
if(w.i(0,t)==null)w=null
else{w=x.a(w.i(0,t))
w=new C.b8l(C.cmR(x.a(w.i(0,"alto"))),C.cmR(x.a(w.i(0,"medio"))),C.cmR(x.a(w.i(0,"baixo"))))}return new C.yM(s,new C.b3C(v,u,w),F.czD(x.a(d.i(0,"paginacao"))))},
cmR(d){var x,w=A.bg(d.i(0,"quantidade"))
w=w==null?null:B.i.D(w)
if(w==null)w=0
x=A.bg(d.i(0,"valor"))
if(x==null)x=null
return new C.btc(w,x==null?0:x)},
yM:function yM(d,e,f){this.a=d
this.b=e
this.c=f},
b3B:function b3B(){},
b3C:function b3C(d,e,f){this.a=d
this.b=e
this.c=f},
b8l:function b8l(d,e,f){this.a=d
this.b=e
this.c=f},
btc:function btc(d,e){this.a=d
this.b=e},
bTr:function bTr(){},
cST(d){switch(d.toUpperCase()){case"ALTO":return D.kc
case"MEDIO":case"M\xc9DIO":return D.C9
case"BAIXO":return D.oi
case"EXPIRADO":return D.dN
default:return D.oi}},
nb:function nb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
P5:function P5(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
b3A:function b3A(){},
crX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new C.ajX(r,d,g,e,m,l,i,f,q,n,null)},
ajX:function ajX(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.as=m
_.a=n},
ajY:function ajY(d,e,f){this.c=d
this.d=e
this.a=f},
ajZ:function ajZ(d,e,f){this.c=d
this.d=e
this.a=f},
crY(d,e,f,g,h,i,j,k,l,m){return new C.ZE(l,f,e,d,m,k,i,j,h,g,null)},
ZE:function ZE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.a=n},
aav:function aav(){var _=this
_.e=_.d=$
_.c=_.a=null},
bXZ:function bXZ(d){this.a=d},
bY_:function bY_(d){this.a=d},
bY0:function bY0(d){this.a=d},
aK7:function aK7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4D:function c4D(d,e,f){this.a=d
this.b=e
this.c=f},
c4C:function c4C(d){this.a=d},
c4B:function c4B(d,e){this.a=d
this.b=e},
aE0:function aE0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.a=j},
MH:function MH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9M:function a9M(){var _=this
_.f=_.e=_.d=$
_.c=_.a=_.r=null},
bU1:function bU1(d){this.a=d},
bU3:function bU3(d){this.a=d},
bU4:function bU4(d){this.a=d},
bU5:function bU5(d){this.a=d},
bU2:function bU2(d,e){this.a=d
this.b=e},
bU6:function bU6(d){this.a=d},
adV:function adV(d,e){this.c=d
this.a=e},
VK:function VK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
WN:function WN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adU:function adU(){this.c=this.a=null},
c8f:function c8f(){},
c8g:function c8g(d){this.a=d},
ak_:function ak_(d){this.a=d},
crZ(d,e,f,g,h,i,j,k,l){return new C.ak0(e,k,l,j,g,f,d,i,h,null)},
ak0:function ak0(d,e,f,g,h,i,j,k,l,m){var _=this
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
ak1:function ak1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3F:function b3F(d,e){this.a=d
this.b=e},
b3E:function b3E(d,e){this.a=d
this.b=e},
b3G:function b3G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b3D:function b3D(d,e){this.a=d
this.b=e},
b3I:function b3I(d,e){this.a=d
this.b=e},
b3H:function b3H(d,e){this.a=d
this.b=e},
acf:function acf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
afg:function afg(d,e,f){this.c=d
this.d=e
this.a=f},
ZF:function ZF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b3N:function b3N(d,e,f){this.a=d
this.b=e
this.c=f},
b3M:function b3M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b3J:function b3J(d){this.a=d},
b3K:function b3K(){},
b3L:function b3L(d,e){this.a=d
this.b=e},
cxi(d,e,f){return new C.axA(d,f,e,null)},
axA:function axA(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
a5R:function a5R(d,e){this.a=d
this.b=e},
acT:function acT(d,e){this.c=d
this.a=e},
aLo:function aLo(d,e){var _=this
_.e=_.d=$
_.d8$=d
_.aU$=e
_.c=_.a=null},
c6d:function c6d(d){this.a=d},
ag2:function ag2(){},
cOi(d,e,f,g,h,i,j){var x=null,w=e==null?x:e
return new C.PY(h,new C.b8U(j,d,g,h,x,x,x,x,x,8,i,x,x,x,24,!0,!0,x,x,x,!1,x,x,x,B.fx,x,x,!0,x,x),x,x,w,!0,B.xk,x,x,j.h("PY<0>"))},
PY:function PY(d,e,f,g,h,i,j,k,l,m){var _=this
_.at=d
_.c=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.a=l
_.$ti=m},
b8U:function b8U(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0
_.dy=a1
_.fr=a2
_.fx=a3
_.fy=a4
_.go=a5
_.id=a6
_.k1=a7
_.k2=a8},
b8T:function b8T(d,e){this.a=d
this.b=e},
MX:function MX(d,e,f,g,h,i,j,k){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.dR$=f
_.kg$=g
_.pE$=h
_.hw$=i
_.kH$=j
_.c=_.a=null
_.$ti=k},
d4a(d){var x=A.E(d).ok.as,w=x==null?null:x.r
if(w==null)w=14
x=A.d0(d,B.dg)
x=x==null?null:x.gdh()
x=(x==null?B.ca:x).bG(w)
return A.Ox(new A.aA(24,0,24,0),new A.aA(12,0,12,0),new A.aA(6,0,6,0),x/14)},
c0k:function c0k(d,e){this.a=d
this.b=e},
ao2:function ao2(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.at=n
_.ax=o
_.a=p},
aHz:function aHz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4){var _=this
_.fy=d
_.go=$
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.cy=x
_.db=a0
_.dx=a1
_.dy=a2
_.fr=a3
_.fx=a4},
c0f:function c0f(d){this.a=d},
c0h:function c0h(d){this.a=d},
c0j:function c0j(d){this.a=d},
c0g:function c0g(){},
c0i:function c0i(d){this.a=d},
auh(d,e){var x
if(e===1)x=d
else x=d+"s"
return x}},D,F,E,N,R,S
J=c[1]
A=c[0]
B=c[2]
O=c[45]
H=c[46]
K=c[39]
L=c[50]
P=c[49]
I=c[48]
Q=c[31]
M=c[26]
G=c[40]
C=a.updateHolder(c[7],C)
D=c[43]
F=c[17]
E=c[44]
N=c[30]
R=c[33]
S=c[47]
C.b3h.prototype={
e6(){var x,w,v,u,t=null,s=$.aY(),r=$.d
if(r==null)r=$.d=B.q
x=r.q(t,y.u)
r=x.ar$
r===$&&A.b()
r=r.bC$
r===$&&A.b()
w=y.N
v=y.t
u=y.B
u=new C.w7(new C.b3w(new C.bXX(x,r,Q.b63())),A.a([],y.d),A.ea(D.ahZ,y.O),A.nn(t,y.o),A.nn(t,y.L),A.bH(!1),A.ea(new C.P5(30,60,20,t,t,t,t,1,20),y.R),A.ea(E.vL,y.q),N.TH(A.b9(w),w),N.TH(A.b9(w),w),R.JQ(A.w(w,v),w,v),A.nn(t,y.I),A.iJ(B.fI,y.Y),F.clJ(),F.clJ(),A.bH(!1),A.bH(!1),A.bH(!1),new A.yF(new A.b2(new A.au($.aB,y.U),y.g)),A.j7(2),A.bH(!1),D.Gi,A.a([],y.D),A.ep(t,t,t,y.X,y.x),new A.de(u),new A.de(u),!1,!1)
u.jH()
u.kw(D.Gi)
A.fX(s,u,!1,y.e)}}
C.b3v.prototype={}
C.Cr.prototype={
F(){return"ClientesEmRiscoCashbackState."+this.b}}
C.w7.prototype={
gUQ(){var x,w=this.RG.gj(),v=this.p2.gj()
v=v==null?null:v.a
if(v==null)v=A.a([],y.l)
x=A.a(v.slice(0),A.R(v))
this.aRW(x,w)
return x},
aRW(d,e){if(e.a==null)return
B.e.cZ(d,new C.b3i(e,e.b===E.j0))},
gaAc(){var x=this.p2.gj()
return x==null?null:x.b},
gBZ(){var x=this.p2.gj()
x=x==null?null:x.c.a
return x==null?this.R8.gj().w:x},
gxu(){var x=this.p2.gj()
x=x==null?null:x.c.b
return x==null?0:x},
gNz(){var x=this.p2.gj()
x=x==null?null:x.c.c
return x==null?0:x},
bsm(d){return this.rx.gj().p(0,d)},
bsd(d){return this.ry.gj().p(0,d)},
aDY(d){var x=this.to
return x.gj().i(0,x.$ti.c.a(d))},
bW(){var x=this
x.ld()
x.aUC()
x.Sh()
x.fR()},
Sh(){var x=0,w=A.p(y.H),v=this,u,t
var $async$Sh=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.dx
u===$&&A.b()
t=v.aQ
x=2
return A.f(u.Hs(),$async$Sh)
case 2:t.sj(e)
return A.n(null,w)}})
return A.o($async$Sh,w)},
aUC(){var x=this.k4
$.aY()
x.push($.cM().e9(new C.b3j(this),y.y))
x.push($.cM().e9(new C.b3k(this),y.c))},
fR(){var x=0,w=A.p(y.H),v=this
var $async$fR=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:v.p1.sj(D.jt)
v.p3.sj(null)
x=2
return A.f(v.k3.Of(v.R8.gj()),$async$fR)
case 2:e.dL(0,new C.b3n(v),new C.b3o(v))
return A.n(null,w)}})
return A.o($async$fR,w)},
l4(){var x=0,w=A.p(y.H),v=this,u
var $async$l4=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:v.AY()
u=v.R8
u.sj(u.gj().BU(1))
x=2
return A.f(v.fR(),$async$l4)
case 2:return A.n(null,w)}})
return A.o($async$l4,w)},
nY(){var x=0,w=A.p(y.H),v=this
var $async$nY=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.fR(),$async$nY)
case 2:return A.n(null,w)}})
return A.o($async$nY,w)},
u9(d){return this.bhZ(d)},
bhZ(d){var x=0,w=A.p(y.H),v=this
var $async$u9=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v.AY()
v.R8.sj(d.BU(1))
x=2
return A.f(v.fR(),$async$u9)
case 2:return A.n(null,w)}})
return A.o($async$u9,w)},
wF(d){return this.bjm(d)},
bjm(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$wF=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.R8
if(d===t.gj().x){x=1
break}t.sj(t.gj().V3(1,d))
x=3
return A.f(u.fR(),$async$wF)
case 3:case 1:return A.n(v,w)}})
return A.o($async$wF,w)},
rR(){var x=0,w=A.p(y.H),v=this
var $async$rR=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:v.x2.sB(0,0)
v.xr.sj(null)
v.y1.sj(null)
v.R8.gj()
x=2
return A.f(v.u9(new C.P5(30,60,20,null,null,null,null,1,20)),$async$rR)
case 2:return A.n(null,w)}})
return A.o($async$rR,w)},
YV(d){return this.bz_(d)},
bz_(d){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$YV=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=v.x2
if(s.p(s,d))s.I(s,d)
else{u=s.bI$
u===$&&A.b()
J.ei(u,d)
u=s.cb$
t=s.gj()
u.r=t
u.cq(t)}u=v.R8
if(s.gB(0)===0)u.sj(u.gj().bl8(!0,1))
else u.sj(u.gj().blm(s.cV(s),1))
v.AY()
x=2
return A.f(v.fR(),$async$YV)
case 2:return A.n(null,w)}})
return A.o($async$YV,w)},
NK(d,e,f,g){return this.bzz(d,e,f,g)},
bzz(d,e,f,g){var x=0,w=A.p(y.H),v=this
var $async$NK=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:x=2
return A.f(v.u9(v.R8.gj().blJ(f==null,d,e,f,g)),$async$NK)
case 2:return A.n(null,w)}})
return A.o($async$NK,w)},
bpj(d){var x=this,w=(d==null?null:d.length===0)===!0?null:d
x.xr.sj(w)
w=x.ok
if(w!=null)w.aL()
x.ok=A.dn(B.eQ,new C.b3m(x))},
bpi(d){var x=this,w=(d==null?null:d.length===0)===!0?null:d
x.y1.sj(w)
w=x.ok
if(w!=null)w.aL()
x.ok=A.dn(B.eQ,new C.b3l(x))},
vO(d){return this.aGl(d)},
aGl(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$vO=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:if(d<1){x=1
break}if(u.gxu()>0&&d>u.gxu()){x=1
break}if(d===u.gBZ()){x=1
break}u.AY()
t=u.R8
t.sj(t.gj().BU(d))
x=3
return A.f(u.fR(),$async$vO)
case 3:case 1:return A.n(v,w)}})
return A.o($async$vO,w)},
DE(d){var x=this.RG
x.sj(x.gj().ayj(d))},
YW(d){return this.bz1(d)},
bz1(d){var x=0,w=A.p(y.H),v,u=this,t,s
var $async$YW=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=u.rx
if(s.gj().p(0,d)){s.I(0,d)
x=1
break}s.A(0,d)
s=u.to.gdu()
if(s.p(s,d)){x=1
break}s=u.ry
s.A(0,d)
x=3
return A.f(u.k3.vo(d),$async$YW)
case 3:t=f
s.I(0,d)
t.dL(0,new C.b3p(u,d),new C.b3q(u,d))
case 1:return A.n(v,w)}})
return A.o($async$YW,w)},
AY(){var x=this.rx,w=x.bI$
w===$&&A.b()
J.tB(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
x=this.ry
w=x.bI$
w===$&&A.b()
J.tB(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
x=this.to
w=x.bI$
w===$&&A.b()
J.tB(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)},
byU(){var x=this.aT
x.sj(!x.gj())},
jh(){var x,w,v,u=this
for(x=u.k4,w=x.length,v=0;v<x.length;x.length===w||(0,A.N)(x),++v)x[v].aL()
B.e.O(x)
x=u.ok
if(x!=null)x.aL()
u.AY()
u.lL()}}
C.HB.prototype={
om(d){var x=null
return A.hv(x,x,A.h0(!0,A.es(A.cK(new A.aO(new C.b3s(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,B.aa),!0,B.aM,!0,!0),x,x,x)},
oz(d){var x=null
return A.hv(x,x,A.h0(!0,A.es(A.cK(new A.aO(new C.b3u(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,B.aa),!0,B.aM,!0,!0),x,x,x)}}
C.b3w.prototype={
Of(d){return this.aDE(d)},
aDE(d){var x=0,w=A.p(y.i),v,u=this
var $async$Of=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new C.b3z(u,d),y.o),$async$Of)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Of,w)},
vo(d){return this.aDC(d)},
aDC(d){var x=0,w=A.p(y.G),v,u=this
var $async$vo=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new C.b3x(u,d),y.t),$async$vo)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vo,w)}}
C.bXX.prototype={
Og(d,e,f,g,h,i,j,k,l){return this.aDF(d,e,f,g,h,i,j,k,l)},
aDF(d,e,f,g,h,i,a0,a1,a2){var x=0,w=A.p(y.o),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Og=A.l(function(a4,a5){if(a4===1)return A.m(a5,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreSelectedCompanies",!1,"ignoreDefaultDates",!1],m,l)
j=A.A(["page",a0,"pageSize",a1,"diasSemCompra",f,"diasAteExpiracao",e,"valorMinimoRisco",a2,"nivelRisco[]",g,"nomeCliente",h,"codigoCliente",d,"ordenacao",i],m,l)
j.cG(0,new C.bXY())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/cashback/clientes-em-risco",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.ahi(o.cu(u.ahh(l,u.b)),y.o)
x=3
return A.f(m.co(t,y.P),$async$Og)
case 3:s=a5
r=A.aP()
try{m=s.a
m.toString
r.b=C.cYF(m)}catch(a3){q=A.a6(a3)
p=A.aq(a3)
u.c.nT(q,p,t)
throw a3}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Og,w)},
vo(d){return this.aDD(d)},
aDD(d){var x=0,w=A.p(y.t),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$vo=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:n=y.N
m=y.z
l=A.cq(A.A(["ignoreSelectedCompanies",!1],n,m),A.w(n,m),"GET",null)
k=u.a
j=k.ar$
j===$&&A.b()
m=l.ct(j,"/cashback/clientes-em-risco/"+A.z(d)+"/detalhes",null,A.w(n,m))
n=k.ar$.bC$
n===$&&A.b()
t=u.ahi(m.cu(u.ahh(n,u.b)),y.t)
x=3
return A.f(k.co(t,y.P),$async$vo)
case 3:s=f
r=A.aP()
try{n=s.a
n.toString
r.b=C.cYE(n)}catch(i){q=A.a6(i)
p=A.aq(i)
u.c.nT(q,p,t)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vo,w)},
ahi(d,e){var x
if(A.br(e)!==B.dq){x=d.r
x===$&&A.b()
x=!(x===B.dl||x===B.dB)}else x=!1
if(x)if(A.br(e)===B.de)d.r=B.cU
else d.r=B.d7
return d},
ahh(d,e){var x,w=B.n.bB(e)
if(w.length===0)return d
x=A.co(e,0,null)
if(x.gm4())return x.k(0)
return A.co(d,0,null).kn(x).k(0)}}
C.m4.prototype={
X(){var x=this,w=D.bzf.i(0,x.f)
w.toString
return A.A(["codigoCliente",x.a,"nomeCliente",x.b,"email",x.c,"telefone",x.d,"celular",x.e,"nivelRisco",w,"saldoCashbackDisponivel",x.r,"diasAteExpiracao",x.w,"diasDesdeUltimaCompra",x.x,"motivoRisco",x.y,"mensagemWhatsapp",x.z,"menorDataExpiracao",x.Q,"quantidadeCashbacks",x.as,"historicoCompras",x.at],y.N,y.z)},
gN6(){var x=this.e
if(x!=null&&x.length!==0)return x
x=this.d
if(x!=null&&x.length!==0)return x
x=this.c
if(x!=null&&x.length!==0)return x
return null},
gTv(){var x=this.e
if(x!=null&&x.length!==0)return x
x=this.d
if(x!=null&&x.length!==0)return x
return null},
gaUB(){var x,w=this.gTv()
if(w==null)return""
x=A.bq("[^\\d]",!0,!1,!1)
return A.bV(w,x,"")},
gNS(){var x,w=this.gTv()
if(!(w!=null&&w.length!==0))return""
w=this.gaUB()
x=w.length<=11?"55"+w:w
return"https://wa.me/"+x+"?text="+A.vB(2,this.aZq(),B.aV,!1)},
aZq(){var x,w,v=this,u=B.e.gS(v.b.split(" ")),t=A.a3u(null,"pt_BR","R$").ai(v.r),s=v.w
if(s<0){s=v.z
return s==null?"Ol\xe1, "+u+"!\n\nInfelizmente o seu cashback de "+t+" expirou.":s}x=""+s
if(s<=3){s=s===1?"dia":"dias"
w="*URGENTE: Expira em "+x+" "+s+"!*"}else w="*V\xe1lido por mais "+x+" dias*"
return"Ol\xe1, "+u+"!\n\n*Voc\xea tem cashback dispon\xedvel!*\n\n*Saldo: "+t+"*\n"+w+"\n\nN\xe3o deixe seu dinheiro expirar!\n\nVenha at\xe9 nossa loja e aproveite seu cashback em suas pr\xf3ximas compras.\n\nEsperamos voc\xea!"}}
C.bhs.prototype={
X(){return A.A(["quantidadeCompras",this.a,"valorMedioCompra",this.b,"ultimaCompra",this.c],y.N,y.z)}}
C.bQX.prototype={
X(){return A.A(["data",this.a,"valor",this.b,"documento",this.c],y.N,y.z)}}
C.tP.prototype={
X(){return A.A(["cliente",this.a,"cashbacks",this.b,"historicoCompras",this.c],y.N,y.z)}}
C.ON.prototype={
X(){var x=this
return A.A(["codigo_cashback",x.a,"valor",x.b,"data_geracao",x.c,"data_expiracao",x.d,"dias_ate_expiracao",x.e,"campanha_nome",x.f],y.N,y.z)}}
C.QB.prototype={
X(){var x=this
return A.A(["documento",x.a,"data_compra",x.b,"valor_total",x.c,"itens",x.d,"empresa_nome",x.e],y.N,y.z)}}
C.yM.prototype={
X(){return A.A(["dados",this.a,"resumo",this.b,"paginacao",this.c],y.N,y.z)},
h3(){var x=y.N,w=A.a([A.A(["key","cliente","nome","Cliente"],x,x),A.A(["key","codigo","nome","C\xf3digo"],x,x),A.A(["key","contato","nome","Contato"],x,x),A.A(["key","nivelRisco","nome","N\xedvel de Risco"],x,x),A.A(["key","valorEmRisco","nome","Valor em Risco (R$)"],x,x),A.A(["key","diasExpiracao","nome","Dias at\xe9 Expira\xe7\xe3o"],x,x),A.A(["key","diasSemCompra","nome","Dias sem Compra"],x,x),A.A(["key","motivoRisco","nome","Motivo"],x,x)],y.m),v=this.a,u=A.R(v).h("G<1,ae<c,I>>")
v=A.F(new A.G(v,new C.b3B(),u),u.h("a2.E"))
u=this.b
return A.A(["titulo","Clientes em Risco - Cashback","colunas",w,"dados",v,"totalRegistros",this.c.c,"resumo",A.A(["totalClientes",u.a,"valorTotalEmRisco",A.bt("pt_BR").ai(u.b),"clientesRiscoAlto",u.gazk(),"clientesRiscoMedio",u.gazm(),"clientesRiscoBaixo",u.gazl()],x,y.K)],x,y.z)}}
C.b3C.prototype={
X(){return A.A(["totalClientesEmRisco",this.a,"valorTotalEmRisco",this.b,"distribuicaoPorNivel",this.c],y.N,y.z)},
gazk(){var x=this.c
x=x==null?null:x.a.a
return x==null?0:x},
gazm(){var x=this.c
x=x==null?null:x.b.a
return x==null?0:x},
gazl(){var x=this.c
x=x==null?null:x.c.a
return x==null?0:x}}
C.b8l.prototype={
X(){return A.A(["alto",this.a,"medio",this.b,"baixo",this.c],y.N,y.z)}}
C.btc.prototype={
X(){return A.A(["quantidade",this.a,"valor",this.b],y.N,y.z)}}
C.nb.prototype={
F(){return"NivelRisco."+this.b},
qw(d){if(d)switch(this.a){case 0:return B.fD
case 1:return B.di
case 2:return B.h4
case 3:return B.R}switch(this.a){case 0:return B.xZ
case 1:return D.alZ
case 2:return D.aml
case 3:return B.Hx}},
aaK(d){if(d)switch(this.a){case 0:return B.fD
case 1:return D.alO
case 2:return D.amu
case 3:return D.al_}switch(this.a){case 0:return B.HA
case 1:return O.HL
case 2:return D.anO
case 3:return B.Hy}}}
C.P5.prototype={
wJ(d,e,f,g,h,i,j,k,l,m,n,a0,a1){var x,w,v,u,t,s=this,r=null,q=j==null?s.a:j,p=i==null?s.b:i,o=a1==null?s.c:a1
if(e)x=r
else x=k==null?s.d:k
if(f)w=r
else w=l==null?s.e:l
if(d)v=r
else v=h==null?s.f:h
if(g)u=r
else u=m==null?s.r:m
t=n==null?s.w:n
return new C.P5(q,p,o,x,w,v,u,t,a0==null?s.x:a0)},
BU(d){var x=null
return this.wJ(!1,!1,!1,!1,x,x,x,x,x,x,d,x,x)},
V3(d,e){var x=null
return this.wJ(!1,!1,!1,!1,x,x,x,x,x,x,d,e,x)},
bl7(d,e){var x=null
return this.wJ(d,!1,!1,!1,x,x,x,x,x,x,e,x,x)},
bla(d,e){var x=null
return this.wJ(!1,!1,!1,!1,d,x,x,x,x,x,e,x,x)},
bl9(d,e){var x=null
return this.wJ(!1,!1,d,!1,x,x,x,x,x,x,e,x,x)},
bln(d,e){var x=null
return this.wJ(!1,!1,!1,!1,x,x,x,x,d,x,e,x,x)},
blJ(d,e,f,g,h){var x=null
return this.wJ(!1,!1,!1,d,x,e,f,x,x,g,x,x,h)},
bl8(d,e){var x=null
return this.wJ(!1,d,!1,!1,x,x,x,x,x,x,e,x,x)},
blm(d,e){var x=null
return this.wJ(!1,!1,!1,!1,x,x,x,d,x,x,e,x,x)},
gGf(){var x,w=this,v=!0
if(w.a===30)if(w.b===60)if(w.c===20){x=w.d
if(!(x!=null&&x.length!==0)){x=w.e
if(!(x!=null&&x.length!==0)){v=w.f
v=v!=null&&v.length!==0}}}return v},
garU(){var x,w=this,v=w.a!==30?1:0
if(w.b!==60)++v
if(w.c!==20)++v
x=w.d
if(x!=null&&x.length!==0)++v
x=w.e
if(x!=null&&x.length!==0)++v
x=w.f
return x!=null&&x.length!==0?v+1:v},
gbpn(){var x=this,w=A.a([],y.s),v=x.a
if(v!==30)w.push(""+v+" dias sem compra")
v=x.b
if(v!==60)w.push(""+v+" dias at\xe9 expira\xe7\xe3o")
v=x.c
if(v!==20)w.push("M\xedn. R$ "+B.i.a4(v,2))
v=x.d
if(v!=null&&v.length!==0)w.push("Risco: "+new A.G(v,new C.b3A(),A.R(v).h("G<1,c>")).c8(0,", "))
v=x.e
if(v!=null&&v.length!==0)w.push('Nome: "'+v+'"')
v=x.f
if(v!=null&&v.length!==0)w.push("CPF: "+v)
return w.length===0?"Filtros padr\xe3o":B.e.c8(w," \u2022 ")}}
C.ajX.prototype={
t(d){var x=this
switch(x.c.a){case 0:case 1:return D.ai1
case 3:return new C.ajZ(x.f,x.r,null)
case 4:return new C.ajY(x.e,x.w,null)
case 2:return new C.ak1(x.d,x.x,x.y,x.z,x.as,null)}}}
C.ajY.prototype={
t(d){var x=null,w=this.c,v=w.gbpn(),u=A.E(d).ok.ax
v=A.a([A.P(v,x,x,x,x,u==null?x:u.a6K(B.R,B.eV),B.bd,x)],y.p)
if(w.gGf())v.push(new A.aD(B.qs,A.FE(E.K7,D.c60,this.d,x),x))
return M.ajl("N\xe3o foram encontrados clientes com cashback em risco de expira\xe7\xe3o\ncom os par\xe2metros atuais.",A.V(v,B.v,x,B.u,B.t,0),D.axK,"Nenhum cliente em risco!",G.azp)}}
C.ajZ.prototype={
t(d){var x=this.c
if(x==null)x="Erro desconhecido"
return M.ajl(x,A.anl(K.qX,K.oY,this.d,null),B.jQ,"Erro ao carregar dados",G.zM)}}
C.ZE.prototype={
ac(){return new C.aav()},
bv4(d){return this.y.$1(d)},
bux(d){return this.z.$1(d)}}
C.aav.prototype={
aw(){var x,w=this
w.aR()
x=$.aV()
w.d!==$&&A.bh()
w.d=new A.jI(B.f6,x)
w.e!==$&&A.bh()
w.e=new A.jI(B.f6,x)},
bh(d){this.bM(d)},
n(){var x,w=this.d
w===$&&A.b()
x=$.aV()
w.an$=x
w.a2$=0
w=this.e
w===$&&A.b()
w.an$=x
w.a2$=0
this.aI()},
b8b(){var x=this.c
x.toString
A.chi(new C.bXZ(this),x,y.z)},
t(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c,l=n.d,k=l?o:n.x,j=p.d
j===$&&A.b()
x=l?o:n.y
w=p.e
w===$&&A.b()
v=l?o:n.z
u=n.e
t=n.f
s=n.r
n=n.w
r=!0
if(u===30)if(t===60)if(s===20)r=n!=null&&n.length!==0
q=l?o:p.gb8a()
return A.h1(B.bO,A.a([new C.aK7(m,l,k,o),new C.WN(j,"Buscar por nome",B.oV,l,x,new C.bY_(p),o),new C.WN(w,"CPF do cliente",B.c0Q,l,v,new C.bY0(p),o),new C.aE0(u,t,s,n,r,q,o)],y.p),B.p3,B.aq,16,16)}}
C.aK7.prototype={
t(d){var x=A.E(d),w=A.a([this.aTe(d,x,this.c.length===0)],y.p)
B.e.E(w,new A.G(D.b8v,new C.c4D(this,d,x),y.A))
return A.h1(B.bO,w,B.c3,B.aq,0,6)},
aTe(d,e,f){var x,w=null,v=this.d?w:new C.c4C(this),u=f?e.ax.b.U(0.1):B.W,t=A.aC(10),s=f?e.ax.b.U(0.6):B.R.U(0.4)
s=A.ew(s,-1,B.V,f?1.5:1)
x=f?B.b2:B.a9
return A.f8(w,A.oJ(A.P("Todos",w,w,w,w,A.bA(w,w,f?e.ax.b:B.R,w,w,w,w,w,w,w,w,12,w,w,x,w,w,!0,w,w,w,w,w,w,w,w),w,w),w,w,B.az,new A.an(u,w,s,t,w,w,B.P),B.dW,w,w,w,D.aqm,w),B.aG,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w)},
aT8(d,e,f){var x,w,v=null,u=B.e.p(this.c,f),t=this.d?v:new C.c4B(this,f),s=u?f.qw(e.ax.a===B.b3).U(0.15):B.W,r=A.aC(10),q=u?f.qw(e.ax.a===B.b3):B.R.U(0.4)
q=A.ew(q,-1,B.V,u?1.5:1)
x=u?f.qw(e.ax.a===B.b3):B.R
x=A.bW(f.e,x,v,12)
w=u?B.b2:B.a9
return A.f8(v,A.oJ(A.a3(A.a([x,D.a8L,A.P(f.d,v,v,v,v,A.bA(v,v,u?f.aaK(e.ax.a===B.b3):B.R,v,v,v,v,v,v,v,v,12,v,v,w,v,v,!0,v,v,v,v,v,v,v,v),v,v)],y.p),B.v,B.u,B.Y,0),v,v,B.az,new A.an(s,v,q,r,v,v,B.P),B.dW,v,v,v,B.kY,v),B.aG,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v,v)}}
C.aE0.prototype={
t(d){var x,w,v,u,t,s,r=this,q=null,p=A.E(d),o=r.r,n=o?p.ax.b:B.R
if(o){x=A.a([],y.s)
w=r.c
if(w!==30)x.push("\u2265"+w+"d sem compra")
w=r.d
if(w!==60)x.push("expira \u2264"+w+"d")
w=r.e
if(w!==20)x.push("R$ "+B.i.a4(w,0))
w=r.f
if(w!=null&&w.length!==0)x.push("ordenado")
v=B.e.c8(x," \xb7 ")}else v=q
w=o?p.ax.b.U(0.07):B.W
u=A.aC(8)
if(o)o=p.ax.b.U(0.45)
else o=(!$.ce?B.bC:B.bM).U(0.12)
o=A.ew(o,-1,B.V,1)
t=y.p
s=A.a([A.bW(D.K1,n,q,14),B.fo],t)
if(v!=null)B.e.E(s,A.a([A.P(v,q,q,q,q,A.bA(q,q,n,q,q,q,q,q,q,q,q,11,q,q,B.b2,q,q,!0,q,q,q,q,q,q,q,q),q,q)],t))
else B.e.E(s,A.a([A.P("Filtros avan\xe7ados",q,q,q,q,A.bA(q,q,n,q,q,q,q,q,q,q,q,12,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q),q,q)],t))
return A.f8(q,A.oJ(A.a3(s,B.v,B.u,B.Y,0),q,q,B.az,new A.an(w,q,o,u,q,q,B.P),B.dW,q,36,q,H.IM,q),B.aG,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.x,q,q,q,q,q,q)}}
C.MH.prototype={
ac(){return new C.a9M()},
bun(d,e,f,g){return this.r.$4$diasAteExpiracao$diasSemCompra$ordenacao$valorMinimoRisco(d,e,f,g)}}
C.a9M.prototype={
aw(){var x,w,v,u=this
u.aR()
x=u.a
w=B.f.k(x.c)
v=$.aV()
u.d!==$&&A.bh()
u.d=new A.jI(new A.eI(w,B.fr,B.cq),v)
w=B.f.k(x.d)
u.e!==$&&A.bh()
u.e=new A.jI(new A.eI(w,B.fr,B.cq),v)
x=B.i.a4(x.e,2)
u.f!==$&&A.bh()
u.f=new A.jI(new A.eI(x,B.fr,B.cq),v)
x=u.a.f
u.r=x==null?"":x},
n(){var x,w=this,v=w.d
v===$&&A.b()
x=v.an$=$.aV()
v.a2$=0
v=w.e
v===$&&A.b()
v.an$=x
v.a2$=0
v=w.f
v===$&&A.b()
v.an$=x
v.a2$=0
w.aI()},
aRQ(){var x,w,v,u,t=this,s=t.d
s===$&&A.b()
s=A.eg(s.a.a,null)
x=B.f.aC(s==null?30:s,1,9999)
s=t.e
s===$&&A.b()
s=A.eg(s.a.a,null)
w=B.f.aC(s==null?60:s,1,9999)
s=t.f
s===$&&A.b()
s=s.a.a
s=A.lI(A.bV(s,",","."))
v=B.i.aC(s==null?20:s,0,999999)
u=t.r
if(u==null||u.length===0)u=null
t.a.bun(w,x,u,v)
s=t.c
s.toString
A.jA(s,!1).iG()},
aUE(){this.a6(new C.bU1(this))},
t(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=A.E(d),k=A.aC(10),j=l.ax.b,i=A.bW(D.K1,j,m,18),h=l.ok,g=h.x,f=y.p
g=A.a3(A.a([i,S.vI,A.ai(A.P("Par\xe2metros de risco",m,m,m,m,g==null?m:g.ie(B.ad),m,m),1),A.j0(B.R,B.kF,m,D.ayB,m,m,new C.bU3(d),B.aM,m,m,m,m)],f),B.v,B.u,B.t,0)
i=h.ax
x=i==null
w=A.P('Define quais clientes aparecem como "em risco".',m,m,m,m,x?m:i.c1(B.R),m,m)
v=n.d
v===$&&A.b()
u=A.ai(new C.VK("Dias sem compra","30",v,!1,m,"m\xednimo",m),1)
t=n.e
t===$&&A.b()
u=A.a3(A.a([u,A.ai(new C.VK("Dias p/ expirar","60",t,!1,m,"m\xe1ximo",m),1)],f),B.v,B.u,B.t,16)
s=n.f
s===$&&A.b()
r=n.r
q=A.aC(8)
p=(!$.ce?B.bC:B.bM).U(0.15)
o=A.aC(8)
j=A.zz(m,new A.hr(4,q,new A.bj(p,1,B.V,-1)),m,D.IO,m,m,m,m,!0,new A.hr(4,o,new A.bj((!$.ce?B.bC:B.bM).U(0.15),1,B.V,-1)),m,m,m,m,m,m,m,m,m,m,m,new A.hr(4,A.aC(8),new A.bj(j.U(0.6),1.5,B.V,-1)),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=D.bAl.ghe()
h=C.cOi(j,r,!0,q.eB(q,new C.bU4(l),y.r).cV(0),new C.bU5(n),h.Q,y.N)
q=A.a([],f)
j=A.eg(v.a.a,m)
v=!0
if((j==null?30:j)===30){j=A.eg(t.a.a,m)
if((j==null?60:j)===60){j=s.a.a
j=A.lI(A.bV(j,",","."))
if((j==null?20:j)===20){j=n.r
j=j!=null&&j.length!==0}else j=v}else j=v}else j=v
if(j)q.push(A.FE(D.ayN,D.c6k,n.gaUD(),A.xG(m,m,m,m,m,m,m,m,m,B.R,m,m,I.hS,m,m,m,m,m,i,m)))
q.push(B.fS)
q.push(A.Ul(D.c6C,m,m,new C.bU6(d),m,A.xG(m,m,m,m,m,m,m,m,m,B.R,m,m,m,m,m,m,m,m,i,m)))
q.push(D.a8L)
q.push(new C.ao2(n.gaRP(),m,m,m,A.cPV(m,m,E.n9,m,x?m:i.ie(B.b2)),B.B,m,!1,m,!0,m,D.c6s,m))
return A.a_s(m,m,new A.e3(D.aeh,new A.aD(B.eR,A.V(A.a([g,B.oR,w,B.iZ,D.cdf,B.dp,u,B.dp,new C.VK("Valor m\xednimo em risco","20,00",s,!0,"R$ ",m,m),B.iZ,H.Ip,B.iZ,D.cdg,B.dp,h,B.iZ,A.a3(q,B.v,B.u,B.t,0)],f),B.N,m,B.u,B.Y,0),m),m),m,m,m,m,B.oF,m,new A.er(k,B.a_),m)}}
C.adV.prototype={
t(d){var x=null,w=A.E(d).ok.ax
w=w==null?x:w.bly(B.R,B.ad,0.8)
return A.a3(A.a([A.P(this.c.toUpperCase(),x,x,x,x,w,x,x)],y.p),B.v,B.u,B.t,0)}}
C.VK.prototype={
t(d){var x,w,v,u,t,s=this,r=null,q=A.E(d),p=q.ok,o=p.ax,n=o==null,m=n?r:o.jx(q.ax.k3.U(0.8),B.b2),l=y.p
m=A.a([A.P(s.c,r,r,r,r,m,r,r)],l)
x=s.w
if(x!=null){o=n?r:o.c1(B.R)
B.e.E(m,A.a([B.e8,A.P("("+x+")",r,r,r,r,o,r,r)],l))}o=A.a3(m,B.v,B.u,B.t,0)
n=s.f
m=A.a([],y.V)
if(n)m.push(new A.IC(A.bq("[\\d.,]",!0,!1,!1),!0,""))
else m.push($.cFB())
p=p.Q
x=p==null
w=x?r:p.c1(B.R)
x=x?r:p.c1(B.R)
v=A.aC(8)
u=(!$.ce?B.bC:B.bM).U(0.15)
t=A.aC(8)
return A.V(A.a([o,B.da,A.Us(r,B.dZ,!1,r,!0,B.a6,r,A.ah2(),s.e,r,r,r,r,r,2,A.zz(r,new A.hr(4,v,new A.bj(u,1,B.V,-1)),r,D.IO,r,r,r,r,!0,new A.hr(4,t,new A.bj((!$.ce?B.bC:B.bM).U(0.15),1,B.V,-1)),r,r,r,r,r,r,r,r,r,r,r,new A.hr(4,A.aC(8),new A.bj(A.E(d).ax.b.U(0.6),1.5,B.V,-1)),r,r,r,r,r,r,r,r,w,s.d,r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,x,s.r,r,r,r,r,r,r,r,r),B.aG,!0,r,!0,r,!1,r,B.ft,r,r,m,r,new A.vc(2,!1,n),r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,B.eR,r,r,r,r,r,r,r,r,r,r,r,p,!0,B.bI,r,B.j2,r,r,r,r)],l),B.N,r,B.u,B.t,0)}}
C.WN.prototype={
ac(){return new C.adU()}}
C.adU.prototype={
aw(){this.aR()
this.a.c.al(this.ga3i())},
bh(d){var x,w,v=this
v.bM(d)
x=d.c
if(x!==v.a.c){w=v.ga3i()
x.W(w)
v.a.c.al(w)}},
n(){this.a.c.W(this.ga3i())
this.aI()},
b7W(){return this.a6(new C.c8f())},
t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.E(d),i=l.a,h=i.c,g=h.a.a.length!==0,f=i.f,e=i.e
i=i.r==null?k:new C.c8g(l)
x=j.ok.ax
w=x==null
v=w?k:x.c1(j.ax.k3)
u=l.a.d
x=w?k:x.c1(B.R)
w=A.bW(B.zF,g?j.ax.b:B.R,k,16)
if(g){t=l.a.w
t=A.cW(!1,A.aC(16),!0,E.Kd,k,!0,k,k,k,k,k,k,k,k,k,t,k,k,k,k,k)}else t=k
s=A.aC(8)
r=(!$.ce?B.bC:B.bM).U(0.12)
q=A.aC(8)
p=(!$.ce?B.bC:B.bM).U(0.12)
o=A.aC(8)
n=j.ax.b.U(0.6)
m=A.aC(8)
return new A.aj(220,36,A.Us(k,B.dZ,!1,k,!0,B.a6,k,A.ah2(),h,k,k,k,k,k,2,A.zz(k,new A.hr(4,s,new A.bj(r,1,B.V,-1)),k,P.IN,k,k,k,new A.hr(4,m,new A.bj((!$.ce?B.bC:B.bM).U(0.06),1,B.V,-1)),!0,new A.hr(4,q,new A.bj(p,1,B.V,-1)),k,k,k,k,k,j.at,!0,k,k,k,k,new A.hr(4,o,new A.bj(n,1.5,B.V,-1)),k,k,k,k,k,k,k,k,x,u,k,k,k,k,k,!0,k,k,k,!0,!0,!1,k,w,k,k,k,k,k,k,t,k,k,k,k,k),B.aG,!0,k,!0,!f,!1,k,B.ft,k,k,k,k,e,k,k,k,1,k,k,!1,"\u2022",k,i,k,k,k,!1,k,k,!1,k,!0,k,B.eR,k,k,k,k,k,k,k,k,k,k,k,v,!0,B.bI,k,B.j2,k,k,k,k),k)}}
C.ak_.prototype={
t(d){return E.HP}}
C.ak0.prototype={
t(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.by(d,p,y.w).w,n=A.E(d),m=y.p,l=A.a([],m)
if(q.w){x=n.ax.b
w=A.bW(D.ay6,x.U(0.7),p,14)
v=q.x
u=v===1?"filtro ativo":"filtros ativos"
t=q.e
s=t===1?"resultado filtrado":"resultados filtrados"
r=n.ok.ax
x=r==null?p:r.a6K(x.U(0.8),B.eV)
l.push(new A.aD(D.aq0,A.a3(A.a([w,B.e8,A.P(""+v+" "+u+" \u2014 mostrando "+t+" "+s,p,p,p,p,x,p,p)],m),B.v,B.u,B.t,0),p))}l.push(F.cw4(!(o.a.a>=1100),q.c,q.r,q.y,q.z,q.f,E.UA,q.d,q.e))
return A.V(l,B.bG,p,B.u,B.t,0)}}
C.ak1.prototype={
t(d){return A.by(d,null,y.w).w.a.a>=1100?this.aUF(d):this.aUG(d)},
aUF(d){var x=this,w=null,v=A.E(d),u=x.d,t=u?I.hS:E.n9,s=u?I.hS:E.n9,r=v.ok,q=u?r.ax:r.Q
u=B.R.U(0.1)
r=y.n
r=A.F(new A.G(D.bv7,new C.b3F(x,v),r),r.h("a2.E"))
u=A.a([A.al(w,A.a3(r,B.v,B.u,B.t,0),B.B,w,w,new A.an(v.at,w,new A.eM(B.a_,B.a_,new A.bj(u,1,B.V,-1),B.a_),E.xv,w,w,B.P),w,w,w,w,t,w,w,w)],y.p)
r=x.c
B.e.E(u,new A.G(r,new C.b3G(x,s,q,v,d),A.R(r).h("G<1,e>")))
return A.V(u,B.v,w,B.u,B.t,0)},
aUG(d){var x=this.c,w=A.R(x).h("G<1,e>")
x=A.F(new A.G(x,new C.b3I(this,d),w),w.h("a2.E"))
return A.V(x,B.v,null,B.u,B.t,0)},
EE(d){return this.b8c(d)},
b8c(d){var x=0,w=A.p(y.H),v
var $async$EE=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=A.co(d,0,null)
x=4
return A.f(F.aSt(v),$async$EE)
case 4:x=f?2:3
break
case 2:x=5
return A.f(F.aSL(v,E.zQ),$async$EE)
case 5:case 3:return A.n(null,w)}})
return A.o($async$EE,w)},
aSU(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.E(d),j=A.aC(10),i=e.w,h=i<0,g=h?D.dN:e.f,f=k.ax.a===B.b3
g=g.qw(f).U(0.3)
x=(h?D.dN:e.f)===D.kc&&i>=0?2:1
w=y.p
v=A.a([],w)
if(m.e){u=e.gTv()
v.push(new C.afg(u!=null&&u.length!==0?new C.b3H(m,e):l,!1,l))}t=k.ok
s=t.x
s=s==null?l:s.ie(B.ad)
s=A.a([A.P(e.b,1,B.O,l,l,s,l,l)],w)
if(e.gN6()!=null){r=e.gN6()
r.toString
q=t.Q
s.push(A.P(r,l,l,l,l,q==null?l:q.c1(B.R),l,l))}v.push(A.ai(A.V(s,B.N,l,B.u,B.t,0),1))
s=h?D.dN:e.f
v.push(C.cxi(s,(h?D.dN:e.f)===D.kc&&i>=0&&i<=3,D.bW9))
v=A.a3(v,B.v,B.u,B.t,5)
s=(h?D.dN:e.f).qw(f).U(0.15)
r=A.aC(10)
q=h?D.dN:e.f
q=A.bW(q.e,(h?D.dN:e.f).qw(f),l,20)
p=A.bt("pt_BR").ai(e.r)
o=t.w
if(o==null)o=l
else o=o.jx((h?D.dN:e.f).qw(f),B.ad)
o=A.P(p,l,l,l,l,o,l,l)
p=h?"expirado":"em risco"
t=t.Q
n=t==null
if(n)f=l
else f=t.c1((h?D.dN:e.f).aaK(f))
r=A.al(l,A.a3(A.a([q,o,A.P(p,l,l,l,l,f,l,l)],w),B.v,B.aL,B.t,16),B.B,l,l,new A.an(s,l,l,r,l,l,B.P),l,l,l,l,B.aR,l,l,l)
s=m.agy(e)
if(!h)i=i>0&&i<=7
else i=!0
h=A.a3(A.a([A.ai(new C.acf(H.zG,"Expira\xe7\xe3o",s,i,h,l),1),A.ai(new C.acf(D.axY,"Inativo",m.aSO(e),!1,!1,l),1)],w),B.v,B.u,B.t,0)
i=m.a0i(e)
return A.Hk(new A.aD(B.aS,A.V(A.a([v,r,h,A.P(i,2,B.O,l,l,n?l:t.a6K(B.R,B.eV),l,l)],w),B.N,l,B.u,B.t,8),l),l,k.at,l,G.qr,new A.er(j,new A.bj(g,x,B.V,-1)))},
agy(d){var x,w=d.w
if(w<0){x=Math.abs(w)
return"Expirado h\xe1 "+x+" "+C.auh("dia",x)}if(w===0)return"Expira hoje"
return"Expira em "+w+" "+C.auh("dia",w)},
aSD(d){var x=d.w
if(x<0)return"Exp."
if(x===0)return"Hoje"
return""+x+"d"},
agA(d,e){var x,w=d.x
if(w<=0)return e?"0d":"0 dias"
x=""+w
return e?x+"d":x+" "+C.auh("dia",w)},
aSO(d){return this.agA(d,!1)},
a0i(d){var x=A.a([],y.s),w=d.w,v=d.x
if(w<0)x.push("Cashback expirado")
else if(w===0)x.push("Cashback expira hoje")
else if(w>0)x.push("Cashback expira em "+w+" "+C.auh("dia",w))
if(v>0)x.push("cliente inativo h\xe1 "+v+" "+C.auh("dia",v))
if(x.length===0)return"-"
return B.e.c8(x," e ")}}
C.acf.prototype={
t(d){var x,w,v,u,t,s,r=this,q=null,p=A.E(d),o=r.r
if(o)x=B.bt
else x=r.f?B.dH:B.R
w=A.bW(r.c,x,q,16)
v=p.ok
u=v.ax
u=u==null?q:u.c1(B.R)
u=A.P(r.d,q,q,q,q,u,q,q)
v=v.Q
if(v==null)o=q
else{t=r.f
s=t||o?B.ad:q
if(o)o=B.bt
else o=t?B.dH:q
s=v.jx(o,s)
o=s}v=y.p
return A.a3(A.a([w,B.e8,A.V(A.a([u,A.P(r.e,q,q,q,q,o,q,q)],v),B.N,q,B.u,B.t,0)],v),B.v,B.u,B.t,0)}}
C.afg.prototype={
t(d){var x,w,v,u,t=null,s=this.c,r=s!=null,q=r?E.Hn:B.R,p=this.d,o=p?4:6,n=p?12:14
p=r?"Enviar mensagem no WhatsApp":"Telefone n\xe3o cadastrado"
x=A.aC(10)
w=q.U(0.1)
v=A.aC(10)
u=A.ew(q.U(0.3),-1,B.V,1)
return A.jb(A.fO(!1,B.aj,!0,t,A.cW(!1,x,!0,A.al(t,F.ctr(E.JJ,q,n),B.B,t,t,new A.an(w,t,u,v,t,t,B.P),t,t,t,t,new A.aA(o,o,o,o),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t),B.B,B.W,0,t,t,t,t,t,B.cm),t,t,t,p,t,t,t,t,t,t,t,t)}}
C.ZF.prototype={
t(d){var x=this.d
return A.cX(new C.b3N(this,this.c||x==null,x))}}
C.axA.prototype={
t(d){var x,w=this,v=null,u=w.bbT(),t=A.E(d).ax.a===B.b3,s=w.c,r=s.qw(t).U(0.15),q=A.aC(10),p=A.ew(s.qw(t),-1,B.V,1.5),o=y.p,n=A.a([A.bW(s.e,s.qw(t),v,u.c)],o),m=w.d
m=m===D.a7z||m===D.a7A?4:6
B.e.E(n,A.a([new A.aj(m,v,v,v),A.P(s.d,v,v,v,v,A.bA(v,v,s.aaK(t),v,v,v,v,v,v,v,v,u.b,v,v,B.ad,v,v,!0,v,v,v,v,v,v,v,v),v,v)],o))
x=A.al(v,A.a3(n,B.v,B.u,B.Y,0),B.B,v,v,new A.an(r,v,p,q,v,v,B.P),v,v,v,v,u.a,v,v,v)
return w.f&&s===D.kc?new C.acT(x,v):x},
bbT(){switch(this.d.a){case 0:return E.a7u
case 1:return D.bVX
case 2:return D.bVU
case 3:return E.a7t}}}
C.a5R.prototype={
F(){return"RiskBadgeSize."+this.b}}
C.acT.prototype={
ac(){return new C.aLo(null,null)}}
C.aLo.prototype={
aw(){var x,w,v=this,u=null
v.aR()
x=A.c2(u,B.fd,u,1,u,v)
x.GW(!0)
v.d=x
w=y.h
v.e=new A.aw(A.cj(B.dj,x,u),new A.aG(1,1.05,w),w.h("aw<aK.T>"))},
n(){var x=this.d
x===$&&A.b()
x.n()
this.aOS()},
t(d){var x=this.e
x===$&&A.b()
return A.h5(x,new C.c6d(this),this.a.c)}}
C.ag2.prototype={
n(){var x=this,w=x.aU$
if(w!=null)w.W(x.geg())
x.aU$=null
x.aI()},
c_(){this.cA()
this.cw()
this.eh()}}
C.PY.prototype={
ac(){var x=null
return new C.MX(new A.F7(!1,$.aV()),A.rx(!0,x,!0,!0,x,x,!1),x,A.w(y.S,y.M),x,!0,x,this.$ti.h("MX<1>"))}}
C.MX.prototype={
FM(d){var x
this.aed(d)
x=this.a
x.toString
this.$ti.h("PY<1>").a(x).at.$1(d)},
bh(d){var x
this.aee(d)
x=this.a.x
if(d.x!=x)this.d=x}}
C.c0k.prototype={
F(){return"_FilledButtonVariant."+this.b}}
C.ao2.prototype={
Lu(d){var x,w=null
switch(0){case 0:x=new C.aHz(d,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,B.aj,!0,B.X,w,w,w)
break}return x},
Nm(d){var x
d.aX(y.f)
x=A.E(d)
return x.aJ.a}}
C.aHz.prototype={
gp9(){var x,w=this,v=w.go
if(v===$){x=A.E(w.fy)
w.go!==$&&A.bi()
v=w.go=x.ax}return v},
ghU(){return new A.bT(A.E(this.fy).ok.as,y.F)},
gdq(){return new A.bN(new C.c0f(this),y.b)},
gfH(){return new A.bN(new C.c0h(this),y.b)},
gfm(){return new A.bN(new C.c0j(this),y.b)},
gdc(){var x=this.gp9().x1
if(x==null)x=B.Z
return new A.bT(x,y.T)},
gdz(){return B.dC},
ghQ(){return new A.bN(new C.c0g(),y.v)},
geq(){return new A.bT(C.d4a(this.fy),y.a)},
gm9(){return B.wi},
glu(){return B.we},
gex(){return new A.bN(new C.c0i(this),y.k)},
gm8(){return B.ja},
gdD(){return B.hz},
gj2(){return B.hE},
gir(){return A.E(this.fy).Q},
gl7(){return A.E(this.fy).f},
glc(){return A.E(this.fy).y}}
var z=a.updateTypes(["~()","J(c)","Q<~>()","Q<~>(k)","~(c?)","c(nb)","tP?(c)","Q<~>(nb)","~(c)","Q<~>(c)","k(m4,m4)","ah(yM)","ah(tP)","Q<yM>()","Q<tP>()","ON(@)","QB(@)","ae<c,I>(m4)","m4(@)","MH(T)","e(nb)","fL(j9)","kU(m4)","e(m4)","~(I?)"])
C.b3i.prototype={
$2(d,e){var x,w,v
switch(this.a.a){case"nomeCliente":x=B.n.aZ(d.b,e.b)
break
case"nivelRisco":w=d.w<0?D.dN:d.f
v=e.w<0?D.dN:e.f
x=B.f.aZ(w.a,v.a)
break
case"saldoCashbackDisponivel":x=B.i.aZ(d.r,e.r)
break
case"diasAteExpiracao":x=B.f.aZ(d.w,e.w)
break
case"diasDesdeUltimaCompra":x=B.f.aZ(d.x,e.x)
break
default:x=0}return this.b?x:-x},
$S:z+10}
C.b3j.prototype={
$1(d){return this.a.l4()},
$S:505}
C.b3k.prototype={
$1(d){return this.a.l4()},
$S:267}
C.b3n.prototype={
$1(d){var x=this.a
x.p1.sj(D.ai_)
x.p3.sj(d)},
$S:2}
C.b3o.prototype={
$1(d){var x,w=this.a
w.p2.sj(d)
w.p4.sj(!0)
x=d.a.length!==0?D.xR:D.ai0
w.p1.sj(x)},
$S:z+11}
C.b3m.prototype={
$0(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.R8
s=u.xr
t.sj(s.gj()==null?t.gj().bl9(!0,1):t.gj().bln(s.gj(),1))
u.AY()
x=2
return A.f(u.fR(),$async$$0)
case 2:return A.n(null,w)}})
return A.o($async$$0,w)},
$S:10}
C.b3l.prototype={
$0(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$$0=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.a
t=u.R8
s=u.y1
t.sj(s.gj()==null?t.gj().bl7(!0,1):t.gj().bla(s.gj(),1))
u.AY()
x=2
return A.f(u.fR(),$async$$0)
case 2:return A.n(null,w)}})
return A.o($async$$0,w)},
$S:10}
C.b3p.prototype={
$1(d){this.a.rx.I(0,this.b)
$.f0.$1("Erro ao carregar drill-down: "+d.k(0))},
$S:2}
C.b3q.prototype={
$1(d){var x=this.a.to,w=x.bI$
w===$&&A.b()
J.cD(w,this.b,d)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)},
$S:z+12}
C.b3s.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.a,a0=$.d
if(a0==null)a0=$.d=B.q
x=A.r(d).h("ab.T")
a0=a0.q(e,x).p1.gj()
w=$.d
w=(w==null?$.d=B.q:w).q(e,x).gaAc()
v=$.d
v=(v==null?$.d=B.q:v).q(e,x)
v.toString
u=$.d
u=(u==null?$.d=B.q:u).q(e,x).x2
u=u.cV(u)
t=$.d
t=(t==null?$.d=B.q:t).q(e,x).p1.gj()
s=$.d
s=(s==null?$.d=B.q:s).q(e,x).R8.gj()
r=$.d
r=(r==null?$.d=B.q:r).q(e,x).R8.gj()
q=$.d
q=(q==null?$.d=B.q:q).q(e,x).R8.gj()
p=$.d
p=(p==null?$.d=B.q:p).q(e,x).R8.gj()
o=$.d
o=(o==null?$.d=B.q:o).q(e,x).gaAI()
n=$.d
n=(n==null?$.d=B.q:n).q(e,x).gavE()
m=$.d
d=C.crY(r.b,s.a,t===D.jt,new C.b3r(d),(m==null?$.d=B.q:m).q(e,x).gavD(),o,n,p.r,u,q.c)
u=$.d
u=(u==null?$.d=B.q:u).q(e,x).p1.gj()
t=$.d
t=(t==null?$.d=B.q:t).q(e,x).gUQ()
s=$.d
s=(s==null?$.d=B.q:s).q(e,x).R8.gj()
r=$.d
r=(r==null?$.d=B.q:r).q(e,x).p3.gj()
r=r==null?e:r.k(0)
q=$.d
q=(q==null?$.d=B.q:q).q(e,x).gv3()
p=$.d
p=(p==null?$.d=B.q:p).q(e,x).gyV()
o=$.d
o=(o==null?$.d=B.q:o).q(e,x).aT.gj()
n=$.d
n=(n==null?$.d=B.q:n).q(e,x).aQ.gj()
m=$.d
m=(m==null?$.d=B.q:m).q(e,x).RG.gj()
l=$.d
l=(l==null?$.d=B.q:l).q(e,x).gaAE()
k=$.d
k=(k==null?$.d=B.q:k).q(e,x).gIl()
j=$.d
j=(j==null?$.d=B.q:j).q(e,x).gaxp()
i=$.d
i=(i==null?$.d=B.q:i).q(e,x).gaxl()
h=$.d
h=(h==null?$.d=B.q:h).q(e,x).gac0()
g=$.d
f=y.p
u=A.a([new A.aj(e,150,new C.ZF(a0===D.jt,w,v,!0,e),e),B.f3,new A.cx(B.fy,e,e,d,e),B.dp,C.crX(t,r,n,s,h,o,i,j,p,q,k,l,(g==null?$.d=B.q:g).q(e,x).gaAK(),m,u)],f)
d=$.d
d=(d==null?$.d=B.q:d).q(e,x)
if(d.p1.gj()===D.xR&&d.gUQ().length!==0){d=$.d
d=(d==null?$.d=B.q:d).q(e,x).gBZ()
a0=$.d
a0=(a0==null?$.d=B.q:a0).q(e,x).gxu()
w=$.d
w=(w==null?$.d=B.q:w).q(e,x).gNz()
v=$.d
v=(v==null?$.d=B.q:v).q(e,x).R8.gj()
t=$.d
t=(t==null?$.d=B.q:t).q(e,x).p1.gj()
s=$.d
s=(s==null?$.d=B.q:s).q(e,x).R8.gj().gGf()
r=$.d
r=(r==null?$.d=B.q:r).q(e,x).R8.gj().garU()
q=$.d
q=(q==null?$.d=B.q:q).q(e,x).gHZ()
p=$.d
B.e.E(u,A.a([B.f3,C.crZ(r,d,s,t===D.jt,(p==null?$.d=B.q:p).q(e,x).gL_(),q,v.x,a0,w)],f))}return A.V(u,B.bG,e,B.u,B.t,0)},
$S:32}
C.b3r.prototype={
$4$diasAteExpiracao$diasSemCompra$ordenacao$valorMinimoRisco(d,e,f,g){var x=$.d
if(x==null)x=$.d=B.q
return x.q(null,A.r(this.a).h("ab.T")).NK(d,e,f,g)},
$S:507}
C.b3u.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.a,a0=$.d
if(a0==null)a0=$.d=B.q
x=A.r(d).h("ab.T")
a0=a0.q(e,x).p1.gj()
w=$.d
w=(w==null?$.d=B.q:w).q(e,x).gaAc()
v=$.d
v=(v==null?$.d=B.q:v).q(e,x)
v.toString
u=$.d
u=(u==null?$.d=B.q:u).q(e,x).x2
u=u.cV(u)
t=$.d
t=(t==null?$.d=B.q:t).q(e,x).p1.gj()
s=$.d
s=(s==null?$.d=B.q:s).q(e,x).R8.gj()
r=$.d
r=(r==null?$.d=B.q:r).q(e,x).R8.gj()
q=$.d
q=(q==null?$.d=B.q:q).q(e,x).R8.gj()
p=$.d
p=(p==null?$.d=B.q:p).q(e,x).R8.gj()
o=$.d
o=(o==null?$.d=B.q:o).q(e,x).gaAI()
n=$.d
n=(n==null?$.d=B.q:n).q(e,x).gavE()
m=$.d
d=C.crY(r.b,s.a,t===D.jt,new C.b3t(d),(m==null?$.d=B.q:m).q(e,x).gavD(),o,n,p.r,u,q.c)
u=$.d
u=(u==null?$.d=B.q:u).q(e,x).p1.gj()
t=$.d
t=(t==null?$.d=B.q:t).q(e,x).gUQ()
s=$.d
s=(s==null?$.d=B.q:s).q(e,x).R8.gj()
r=$.d
r=(r==null?$.d=B.q:r).q(e,x).p3.gj()
r=r==null?e:r.k(0)
q=$.d
q=(q==null?$.d=B.q:q).q(e,x).gv3()
p=$.d
p=(p==null?$.d=B.q:p).q(e,x).gyV()
o=$.d
o=(o==null?$.d=B.q:o).q(e,x).aT.gj()
n=$.d
n=(n==null?$.d=B.q:n).q(e,x).aQ.gj()
m=$.d
m=(m==null?$.d=B.q:m).q(e,x).RG.gj()
l=$.d
l=(l==null?$.d=B.q:l).q(e,x).gaAE()
k=$.d
k=(k==null?$.d=B.q:k).q(e,x).gIl()
j=$.d
j=(j==null?$.d=B.q:j).q(e,x).gaxp()
i=$.d
i=(i==null?$.d=B.q:i).q(e,x).gaxl()
h=$.d
h=(h==null?$.d=B.q:h).q(e,x).gac0()
g=$.d
f=y.p
u=A.a([new A.aj(1/0,150,new C.ZF(a0===D.jt,w,v,!1,e),e),B.f3,d,B.dp,C.crX(t,r,n,s,h,o,i,j,p,q,k,l,(g==null?$.d=B.q:g).q(e,x).gaAK(),m,u)],f)
d=$.d
d=(d==null?$.d=B.q:d).q(e,x)
if(d.p1.gj()===D.xR&&d.gUQ().length!==0){d=$.d
d=(d==null?$.d=B.q:d).q(e,x).gBZ()
a0=$.d
a0=(a0==null?$.d=B.q:a0).q(e,x).gxu()
w=$.d
w=(w==null?$.d=B.q:w).q(e,x).gNz()
v=$.d
v=(v==null?$.d=B.q:v).q(e,x).R8.gj()
t=$.d
t=(t==null?$.d=B.q:t).q(e,x).p1.gj()
s=$.d
s=(s==null?$.d=B.q:s).q(e,x).R8.gj().gGf()
r=$.d
r=(r==null?$.d=B.q:r).q(e,x).R8.gj().garU()
q=$.d
q=(q==null?$.d=B.q:q).q(e,x).gHZ()
p=$.d
B.e.E(u,A.a([B.f3,C.crZ(r,d,s,t===D.jt,(p==null?$.d=B.q:p).q(e,x).gL_(),q,v.x,a0,w)],f))}return A.V(u,B.bG,e,B.u,B.t,0)},
$S:32}
C.b3t.prototype={
$4$diasAteExpiracao$diasSemCompra$ordenacao$valorMinimoRisco(d,e,f,g){var x=$.d
if(x==null)x=$.d=B.q
return x.q(null,A.r(this.a).h("ab.T")).NK(d,e,f,g)},
$S:507}
C.b3z.prototype={
$0(){var x,w=this.b,v=w.d
if(v==null)v=null
else{x=A.R(v).h("G<1,c>")
v=A.F(new A.G(v,new C.b3y(),x),x.h("a2.E"))}return this.a.a.Og(w.f,w.b,w.a,v,w.e,w.r,w.w,w.x,w.c)},
$S:z+13}
C.b3y.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+5}
C.b3x.prototype={
$0(){return this.a.a.vo(this.b)},
$S:z+14}
C.bXY.prototype={
$2(d,e){return e==null},
$S:20}
C.bTp.prototype={
$1(d){var x,w,v,u,t
y.P.a(d)
x=A.aW(d.i(0,"codigo_cashback"))
if(x==null)x=""
w=A.bg(d.i(0,"valor"))
if(w==null)w=null
if(w==null)w=0
v=A.aW(d.i(0,"data_geracao"))
if(v==null)v="-"
u=A.aW(d.i(0,"data_expiracao"))
if(u==null)u="-"
t=A.bg(d.i(0,"dias_ate_expiracao"))
t=t==null?null:B.i.D(t)
if(t==null)t=0
return new C.ON(x,w,v,u,t,A.aW(d.i(0,"campanha_nome")))},
$S:z+15}
C.bTq.prototype={
$1(d){var x,w,v,u
y.P.a(d)
x=A.aW(d.i(0,"documento"))
if(x==null)x="-"
w=A.aW(d.i(0,"data_compra"))
if(w==null)w="-"
v=A.bg(d.i(0,"valor_total"))
if(v==null)v=null
if(v==null)v=0
u=A.bg(d.i(0,"itens"))
u=u==null?null:B.i.D(u)
return new C.QB(x,w,v,u,A.aW(d.i(0,"empresa_nome")))},
$S:z+16}
C.b3B.prototype={
$1(d){var x=d.gN6()
if(x==null)x="-"
return A.A(["cliente",d.b,"codigo",d.a,"contato",x,"nivelRisco",d.f.d,"valorEmRisco",A.bt("pt_BR").ai(d.r),"diasExpiracao",d.w,"diasSemCompra",d.x,"motivoRisco",d.y],y.N,y.K)},
$S:z+17}
C.bTr.prototype={
$1(d){return C.czA(y.P.a(d))},
$S:z+18}
C.b3A.prototype={
$1(d){return d.d},
$S:z+5}
C.bXZ.prototype={
$1(d){var x=this.a.a
return new C.MH(x.e,x.f,x.r,x.w,x.Q,null)},
$S:z+19}
C.bY_.prototype={
$0(){var x=this.a,w=x.d
w===$&&A.b()
w.tR(B.DX)
x.a.bv4(null)},
$S:0}
C.bY0.prototype={
$0(){var x=this.a,w=x.e
w===$&&A.b()
w.tR(B.DX)
x.a.bux(null)},
$S:0}
C.c4D.prototype={
$1(d){return this.a.aT8(this.b,this.c,d)},
$S:z+20}
C.c4C.prototype={
$0(){var x,w,v=this.a,u=A.F(v.c,y.Y),t=u.length
v=v.e
x=0
for(;x<u.length;u.length===t||(0,A.N)(u),++x){w=u[x]
if(v!=null)v.$1(w)}},
$S:0}
C.c4B.prototype={
$0(){var x=this.a.e
return x==null?null:x.$1(this.b)},
$S:0}
C.bU1.prototype={
$0(){var x=this.a,w=x.d
w===$&&A.b()
w.ser("30")
w=x.e
w===$&&A.b()
w.ser("60")
w=x.f
w===$&&A.b()
w.ser("20.00")
x.r=""},
$S:0}
C.bU3.prototype={
$0(){return A.jA(this.a,!1).iG()},
$S:0}
C.bU4.prototype={
$1(d){var x=null
return A.z9(A.P(d.b,x,x,x,x,this.a.ok.Q,x,x),d.a,y.N)},
$S:1462}
C.bU5.prototype={
$1(d){var x=this.a
return x.a6(new C.bU2(x,d))},
$S:120}
C.bU2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bU6.prototype={
$0(){return A.jA(this.a,!1).iG()},
$S:0}
C.c8f.prototype={
$0(){},
$S:0}
C.c8g.prototype={
$1(d){var x=this.a.a.r
x.toString
return x.$1(d.length===0?null:d)},
$S:15}
C.b3F.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.f,r=d.b,q=s.a==r
if(r==null){t=this.b.ok.at
t=t==null?u:t.ie(B.ad)
return A.ai(new A.aD(B.h9,A.P(d.a,u,B.O,u,u,t,u,u),u),d.c)}r=A.aC(4)
x=this.b
w=x.ok.at
if(w==null)w=u
else w=w.jx(q?x.ax.b:u,B.ad)
v=y.p
w=A.a([new A.c5(1,B.ah,A.P(d.a,u,B.O,u,u,w,u,u),u)],v)
if(q){s=s.b===E.j0?L.qS:L.qR
B.e.E(w,A.a([B.e8,A.bW(s,x.ax.b,u,14)],v))}return A.ai(A.fO(!1,B.aj,!0,u,A.cW(!1,r,!0,new A.aD(B.h9,A.a3(w,B.v,B.u,B.Y,0),u),u,!0,u,u,u,u,u,u,u,u,u,new C.b3E(t,d),u,u,u,u,u),B.B,B.W,0,u,u,u,u,u,B.cm),d.c)},
$S:z+21}
C.b3E.prototype={
$0(){var x=this.b.b
x.toString
return this.a.r.$1(x)},
$S:0}
C.b3G.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.R.U(0.1),h=y.p,g=A.a([],h),f=k.a,e=f.e
if(e){x=d.gTv()
w=x!=null&&x.length!==0?new C.b3D(f,d):j
g.push(new C.afg(w,f.d,j))}if(e)g.push(B.fo)
e=f.d
w=k.c
v=d.b
if(e)v=A.P(v,1,B.O,j,j,w==null?j:w.ie(B.aD),j,j)
else{v=A.a([A.P(v,1,B.O,j,j,w==null?j:w.ie(B.aD),j,j)],h)
if(d.gN6()!=null){u=d.gN6()
u.toString
t=k.d.ok.ax
v.push(A.P(u,j,j,j,j,t==null?j:t.c1(B.R),j,j))}v=A.V(v,B.N,j,B.u,B.Y,0)}g.push(A.ai(v,1))
g=A.ai(A.a3(g,B.v,B.u,B.t,0),3)
v=d.w
u=v<0
t=u?D.dN:d.f
s=e?D.a7z:D.a7A
t=A.ai(new A.cx(B.cC,j,j,C.cxi(t,(u?D.dN:d.f)===D.kc&&v>=0&&v<=3,s),j),1)
s=A.bt("pt_BR").ai(d.r)
r=w==null
if(r)q=j
else{q=u?D.dN:d.f
q=w.jx(q.qw(k.d.ax.a===B.b3),B.ad)}q=A.ai(A.P(s,j,B.O,j,j,q,j,j),2)
p=A.E(k.e)
o=v>0&&v<=3
v=p.ok
n=e?v.ax:v.Q
m=e?f.aSD(d):f.agy(d)
v=u?D.dN:d.f
l=v.qw(p.ax.a===B.b3)
v=A.a([],h)
s=!u
if((!s||o)&&!e)v.push(new A.aD(B.aq1,A.bW(u?B.jQ:D.awZ,l,j,14),j))
if(n==null)u=j
else u=n.jx(l,!s||o?B.ad:j)
v.push(A.P(m,j,j,j,j,u,j,j))
v=A.ai(A.a3(v,B.v,B.u,B.Y,0),2)
u=f.agA(d,e)
if(r)s=j
else s=w.c1(d.x>30?B.dH:j)
s=A.ai(A.P(u,j,B.O,j,j,s,j,j),2)
u=f.a0i(d)
f=f.a0i(d)
return A.al(j,A.a3(A.a([g,t,q,v,s,A.ai(A.jb(A.P(f,e?1:2,B.O,j,j,w,j,j),j,j,j,u,j,j,j,j,j,j,j,j),3)],h),B.v,B.u,B.t,0),B.B,j,j,new A.an(j,j,new A.eM(B.a_,B.a_,new A.bj(i,1,B.V,-1),B.a_),j,j,j,B.P),j,j,j,j,k.b,j,j,j)},
$S:z+22}
C.b3D.prototype={
$0(){return this.a.EE(this.b.gNS())},
$S:0}
C.b3I.prototype={
$1(d){return this.a.aSU(this.b,d)},
$S:z+23}
C.b3H.prototype={
$0(){return this.a.EE(this.b.gNS())},
$S:0}
C.b3N.prototype={
$2(d,e){var x,w=e.b
if(w<600)x=0.6
else if(w<800)x=0.4
else{w=w<1000?0.3:0.2
x=w}return new A.aO(new C.b3M(this.a,this.b,this.c,e,x,d),null)},
$S:99}
C.b3M.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m="pt_BR",l=o.b,k=l?0:o.c.a,j=o.a,i=j.f
k=A.kp(n,n,!1,!1,n,n,"Quantidade total de clientes com cashback em risco.",!1,i,l,n,"Total Clientes",0,k,200)
x=A.mR(n,!1,!1,n,n,"Somat\xf3rio do valor de cashback em risco (alto, m\xe9dio e baixo).",!1,!1,i,l,!0,!1,"Valor Total em Risco",0,l?0:o.c.b,200)
w=l?0:o.c.gazk()
if(l)v=0
else{v=o.c.c
v=v==null?n:v.a.b
if(v==null)v=0
v=A.bt(m).ai(v)}w=A.kp(n,n,!1,!1,n,n,"Quantidade de clientes com alto risco de expira\xe7\xe3o.",!1,i,l,v,"Risco Alto",0,w,200)
v=l?0:o.c.gazm()
if(l)u=0
else{u=o.c.c
u=u==null?n:u.b.b
if(u==null)u=0
u=A.bt(m).ai(u)}v=A.kp(n,n,!1,!1,n,n,"Quantidade de clientes com risco m\xe9dio de expira\xe7\xe3o.",!1,i,l,u,"Risco M\xe9dio",0,v,200)
u=l?0:o.c.gazl()
if(l)t=0
else{t=o.c.c
t=t==null?n:t.c.b
if(t==null)t=0
t=A.bt(m).ai(t)}s=y.p
r=A.a([k,x,w,v,A.kp(n,n,!1,!1,n,n,"Quantidade de clientes com baixo risco de expira\xe7\xe3o.",!1,i,l,t,"Risco Baixo",0,u,200)],s)
u=j.e
t=o.d.d
l=u.Z
i=l.gj()
i=A.OL(!0,0.65,u.R.gj(),B.bh,!0,!0,!1,t*0.8,i,new C.b3J(j),!0,!0,!0,B.f9,o.e)
v=y.E
k=A.F(new A.G(r,new C.b3K(),v),v.h("a2.E"))
k=A.ai(A.Za(u.v,k,i),1)
q=J.cv(5,y.C)
for(i=t*0.05,x=o.f,p=0;p<5;++p){w=A.E(x)
v=$.pA
if(v!=null)v.al(l.cb$)
v=l.bI$
v===$&&A.b()
v=J.u(v,p)?0.9:0.4
q[p]=A.f8(n,A.al(n,n,B.B,n,n,new A.an(w.ax.b.U(v),n,n,n,n,n,B.bl),n,i,n,B.h9,n,n,n,i),B.aG,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.b3L(j,p),n,n,n,n,n,n)}l=A.a(q.slice(0),A.R(q))
return A.V(A.a([k,A.a3(l,B.v,B.aL,B.t,0)],s),B.v,n,B.u,B.t,0)},
$S:32}
C.b3J.prototype={
$2(d,e){this.a.e.Z.sj(d)},
$S:91}
C.b3K.prototype={
$1(d){return new A.aD(B.eS,d,null)},
$S:268}
C.b3L.prototype={
$0(){return this.a.e.v.wv(this.b)},
$S:0}
C.c6d.prototype={
$2(d,e){var x=this.a.e
x===$&&A.b()
return A.B0(B.X,e,null,x.b.bD(x.a))},
$S:118}
C.b8U.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a
k.h("MX<0>").a(d)
x=d.c
x.toString
w=m.b.Un(A.R2(x))
x=m.c
v=new A.aR(x,new C.b8T(d,k),A.R(x).h("aR<1>")).gad(0)
u=x.length!==0
t=w.z
s=t!=null
r=s?A.P(t,l,l,l,l,l,l,l):l
if(u)q=r!=null
else q=r!=null
p=v&&!q
v=d.e
v===$&&A.b()
t=v.y
o=t==null
if((o?A.r(v).h("dL.T").a(t):t)!=null||s){if(o)A.r(v).h("dL.T").a(t)
n=o?A.r(v).h("dL.T").a(t):t
w=w.blB(l,n,s?"":l)}v=d.gKp()
return A.u6(!1,!1,new A.CG(new A.CF(x,v,r,r,d.gbmK(),m.x,m.w,m.y,m.z,m.Q,m.as,m.at,m.ax,m.ay,m.ch,m.CW,m.cx,m.cy,m.db,m.dx,m.go,m.dy,m.fr,m.fx,m.fy,m.id,m.k1,m.k2,w,p,l,k.h("CF<0>")),l),l,l,l,l,!0,l,l,l,l,l,!0)},
$S(){return this.a.h("DD(n0<0>)")}}
C.b8T.prototype={
$1(d){return J.u(d.r,this.a.gKp())},
$S(){return this.b.h("J(ej<0>)")}}
C.c0f.prototype={
$1(d){var x
if(d.p(0,B.al)){x=this.a.gp9().k3
return A.aX(31,x.G()>>>16&255,x.G()>>>8&255,x.G()&255)}return this.a.gp9().b},
$S:9}
C.c0h.prototype={
$1(d){var x
if(d.p(0,B.al)){x=this.a.gp9().k3
return A.aX(97,x.G()>>>16&255,x.G()>>>8&255,x.G()&255)}return this.a.gp9().c},
$S:9}
C.c0j.prototype={
$1(d){if(d.p(0,B.aQ))return this.a.gp9().c.bY(0.1)
if(d.p(0,B.ap))return this.a.gp9().c.bY(0.08)
if(d.p(0,B.au))return this.a.gp9().c.bY(0.1)
return null},
$S:29}
C.c0g.prototype={
$1(d){if(d.p(0,B.al))return 0
if(d.p(0,B.aQ))return 0
if(d.p(0,B.ap))return 1
if(d.p(0,B.au))return 0
return 0},
$S:194}
C.c0i.prototype={
$1(d){var x,w=this
if(d.p(0,B.al)){x=w.a.gp9().k3
return A.aX(97,x.G()>>>16&255,x.G()>>>8&255,x.G()&255)}if(d.p(0,B.aQ))return w.a.gp9().c
if(d.p(0,B.ap))return w.a.gp9().c
if(d.p(0,B.au))return w.a.gp9().c
return w.a.gp9().c},
$S:9};(function aliases(){var x=C.ag2.prototype
x.aOS=x.n})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.w7.prototype,"gaxp","bsm",1)
x(v,"gaxl","bsd",1)
x(v,"gac0","aDY",6)
w(v,"gv3","nY",2)
x(v,"gL_","wF",3)
w(v,"gyV","rR",2)
x(v,"gaAI","YV",7)
x(v,"gavE","bpj",4)
x(v,"gavD","bpi",4)
x(v,"gHZ","vO",3)
x(v,"gIl","DE",8)
x(v,"gaAK","YW",9)
w(v,"gaAE","byU",0)
w(C.aav.prototype,"gb8a","b8b",0)
w(v=C.a9M.prototype,"gaRP","aRQ",0)
w(v,"gaUD","aUE",0)
w(C.adU.prototype,"ga3i","b7W",0)
x(C.MX.prototype,"gbmK","FM",24)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(C.b3h,A.ri)
w(C.b3v,A.vW)
v(A.li,[C.Cr,C.nb,C.a5R,C.c0k])
w(C.w7,A.ls)
v(A.iB,[C.b3i,C.bXY,C.b3N,C.b3J,C.c6d])
v(A.hn,[C.b3j,C.b3k,C.b3n,C.b3o,C.b3p,C.b3q,C.b3r,C.b3t,C.b3y,C.bTp,C.bTq,C.b3B,C.bTr,C.b3A,C.bXZ,C.c4D,C.bU4,C.bU5,C.c8g,C.b3F,C.b3G,C.b3I,C.b3K,C.b8U,C.b8T,C.c0f,C.c0h,C.c0j,C.c0g,C.c0i])
v(A.ie,[C.b3m,C.b3l,C.b3s,C.b3u,C.b3z,C.b3x,C.bY_,C.bY0,C.c4C,C.c4B,C.bU1,C.bU3,C.bU2,C.bU6,C.c8f,C.b3E,C.b3D,C.b3H,C.b3M,C.b3L])
w(C.HB,A.mQ)
w(C.b3w,A.oM)
v(A.I,[C.bXX,C.m4,C.bhs,C.bQX,C.tP,C.ON,C.QB,C.yM,C.b3C,C.b8l,C.btc,C.P5])
v(A.H,[C.ajX,C.ajY,C.ajZ,C.aK7,C.aE0,C.adV,C.VK,C.ak_,C.ak0,C.ak1,C.acf,C.afg,C.ZF,C.axA])
v(A.a8,[C.ZE,C.MH,C.WN,C.acT])
v(A.ad,[C.aav,C.a9M,C.adU,C.ag2])
w(C.aLo,C.ag2)
w(C.PY,A.qk)
w(C.MX,A.n0)
w(C.ao2,A.Ow)
w(C.aHz,A.dh)
x(C.ag2,A.dT)})()
A.i9(b.typeUniverse,JSON.parse('{"w7":{"aI":[],"da":[]},"HB":{"ab":["w7"],"H":[],"e":[],"i":[],"ab.T":"w7"},"ajX":{"H":[],"e":[],"i":[]},"ajY":{"H":[],"e":[],"i":[]},"ajZ":{"H":[],"e":[],"i":[]},"ZE":{"a8":[],"e":[],"i":[]},"MH":{"a8":[],"e":[],"i":[]},"WN":{"a8":[],"e":[],"i":[]},"aav":{"ad":["ZE"]},"aK7":{"H":[],"e":[],"i":[]},"aE0":{"H":[],"e":[],"i":[]},"a9M":{"ad":["MH"]},"adV":{"H":[],"e":[],"i":[]},"VK":{"H":[],"e":[],"i":[]},"adU":{"ad":["WN"]},"ak_":{"H":[],"e":[],"i":[]},"ak0":{"H":[],"e":[],"i":[]},"ak1":{"H":[],"e":[],"i":[]},"acf":{"H":[],"e":[],"i":[]},"afg":{"H":[],"e":[],"i":[]},"ZF":{"H":[],"e":[],"i":[]},"acT":{"a8":[],"e":[],"i":[]},"axA":{"H":[],"e":[],"i":[]},"aLo":{"ad":["acT"]},"PY":{"qk":["1"],"a8":[],"e":[],"i":[],"qk.T":"1"},"MX":{"n0":["1"],"ad":["qk<1>"]},"ao2":{"a8":[],"e":[],"i":[]},"aHz":{"dh":[]},"cPT":{"eX":[],"cm":[],"c4":[],"e":[],"i":[]}}'))
var y=(function rtii(){var x=A.a1
return{_:x("ON"),I:x("m4"),t:x("tP"),e:x("w7"),O:x("Cr"),R:x("P5"),o:x("yM"),u:x("qb"),r:x("ej<c>"),G:x("ca<az,tP>"),i:x("ca<az,yM>"),y:x("fU"),c:x("l1"),L:x("az"),f:x("cPT"),C:x("p3"),Z:x("QB"),B:x("de<~>"),l:x("x<m4>"),m:x("x<ae<c,c>>"),d:x("x<f4<@>>"),s:x("x<c>"),V:x("x<vb>"),p:x("x<e>"),D:x("x<~()?>"),j:x("B<@>"),x:x("B<~()>"),P:x("ae<c,@>"),A:x("G<nb,e>"),n:x("G<j9,fL>"),E:x("G<e,aD>"),w:x("j2"),Y:x("nb"),K:x("I"),S:x("j5<I?>"),q:x("M_"),N:x("c"),h:x("aG<K>"),T:x("bT<M>"),a:x("bT<fJ>"),F:x("bT<Y?>"),g:x("b2<ah>"),U:x("au<ah>"),k:x("bN<M>"),v:x("bN<K>"),b:x("bN<M?>"),z:x("@"),X:x("I?"),H:x("~"),M:x("~()")}})();(function constants(){var x=a.makeConstList
D.aeh=new A.av(0,380,0,1/0)
D.Gi=new C.b3v()
D.ahZ=new C.Cr(0,"init")
D.jt=new C.Cr(1,"loading")
D.xR=new C.Cr(2,"success")
D.ai_=new C.Cr(3,"error")
D.ai0=new C.Cr(4,"empty")
D.ai1=new C.ak_(null)
D.al_=new A.M(1,0.4235294117647059,0.4588235294117647,0.49019607843137253,B.y)
D.alO=new A.M(1,0.7568627450980392,0.4627450980392157,0.023529411764705882,B.y)
D.alZ=new A.M(1,0.8117647058823529,0.3607843137254902,0.11764705882352941,B.y)
D.aml=new A.M(1,0.9764705882352941,0.6588235294117647,0.1450980392156863,B.y)
D.amu=new A.M(1,0.5450980392156862,0.39215686274509803,0,B.y)
D.anO=new A.M(1,0.47843137254901963,0.34509803921568627,0,B.y)
D.aq0=new A.aA(0,0,0,5)
D.aqm=new A.aA(10,5,10,5)
D.IO=new A.aA(12,10,12,10)
D.awZ=new A.aZ(57458,"MaterialIcons",null,!1)
D.axK=new A.aZ(61240,"MaterialIcons",null,!1)
D.axY=new A.aZ(62333,"MaterialIcons",null,!1)
D.ay6=new A.aZ(63323,"MaterialIcons",null,!1)
D.K1=new A.aZ(983640,"MaterialIcons",null,!1)
D.ayB=new A.di(B.nl,18,null,null,null)
D.ayN=new A.di(E.K3,14,null,null,null)
D.ay5=new A.aZ(63251,"MaterialIcons",null,!1)
D.kc=new C.nb("ALTO","Alto",D.ay5,0,"alto")
D.aye=new A.aZ(983713,"MaterialIcons",null,!1)
D.C9=new C.nb("MEDIO","M\xe9dio",D.aye,1,"medio")
D.oi=new C.nb("BAIXO","Baixo",G.zx,2,"baixo")
D.dN=new C.nb("EXPIRADO","Expirado",B.axg,3,"expirado")
D.b8v=x([D.kc,D.C9,D.oi,D.dN],A.a1("x<nb>"))
D.bZx=new F.j9("Cliente","nomeCliente",3)
D.bZB=new F.j9("Risco","nivelRisco",1)
D.bZD=new F.j9("Valor","saldoCashbackDisponivel",2)
D.bZu=new F.j9("Expira\xe7\xe3o","diasAteExpiracao",2)
D.bZz=new F.j9("Inativo","diasDesdeUltimaCompra",2)
D.bZA=new F.j9("Motivo",null,3)
D.bv7=x([D.bZx,D.bZB,D.bZD,D.bZu,D.bZz,D.bZA],A.a1("x<j9>"))
D.bzf=new A.a_([D.kc,"alto",D.C9,"medio",D.oi,"baixo"],A.a1("a_<nb,c>"))
D.bQJ={"":0,valor_desc:1,valor_asc:2,expiracao_asc:3,expiracao_desc:4,dias_desc:5,dias_asc:6,nome_asc:7,nome_desc:8}
D.bAl=new A.j(D.bQJ,["Padr\xe3o (sem ordena\xe7\xe3o)","Maior valor em risco","Menor valor em risco","Expira mais cedo","Expira mais tarde","Mais dias sem comprar","Menos dias sem comprar","Nome A \u2192 Z","Nome Z \u2192 A"],A.a1("j<c,c>"))
D.bVU=new A.ki(B.iu,11,14)
D.aqM=new A.aA(6,3,6,3)
D.bVX=new A.ki(D.aqM,10,12)
D.a7z=new C.a5R(0,"compact")
D.a7A=new C.a5R(1,"small")
D.bW9=new C.a5R(2,"medium")
D.a8L=new A.aj(5,null,null,null)
D.c60=new A.cb("Usar filtros padr\xe3o",null,null,null,null,null,null,null,null,null)
D.c6k=new A.cb("Padr\xe3o",null,null,null,null,null,null,null,null,null)
D.c6s=new A.cb("Aplicar",null,null,null,null,null,null,null,null,null)
D.c6C=new A.cb("Cancelar",null,null,null,null,null,null,null,null,null)
D.ceC=new C.c0k(0,"filled")
D.cdf=new C.adV("Crit\xe9rios de risco",null)
D.cdg=new C.adV("Ordena\xe7\xe3o",null)})()};
(a=>{a["gnO4TXrnQYCO26jMsn5TRbxB2e4="]=a.current})($__dart_deferred_initializers__);