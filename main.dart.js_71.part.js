((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,S,T,H,I,L,M,U,N,V,K,O,G,W,F,E,P,Q,R,B={
czB(d){var x,w,v,u,t,s,r,q,p=y.P,o=p.a(d.i(0,"empresa")),n=A.b1(o.i(0,"codigo"))
o=A.b1(o.i(0,"nome"))
x=A.b1(d.i(0,"serie"))
w=A.b1(d.i(0,"numero"))
v=A.b1(d.i(0,"data"))
p=p.a(d.i(0,"valores"))
u=A.bP(p.i(0,"subtotal"))
t=A.bP(p.i(0,"desconto"))
s=A.bP(p.i(0,"acrescimo"))
r=A.bP(p.i(0,"total"))
p=A.bg(p.i(0,"cashbackUtilizado"))
if(p==null)p=null
q=J.ch(y.j.a(d.i(0,"formasPagamento")),new B.bTx(),y.Z)
q=A.F(q,q.$ti.h("a2.E"))
return new B.b8n(new B.b8o(n,o),x,w,v,new B.b8p(u,t,s,r,p),q)},
tO:function tO(d,e,f){this.a=d
this.b=e
this.c=f},
b8n:function b8n(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b8o:function b8o(d,e){this.a=d
this.b=e},
b8p:function b8p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DF:function DF(d,e){this.a=d
this.b=e},
bTx:function bTx(){},
cMi(d){switch(d.toUpperCase()){case"ACTIVE":return D.xP
case"USED":return D.mG
case"EXPIRED":return D.xO
case"CANCELLED":return D.xN
case"PENDING":return D.mH
default:return D.mH}},
iS:function iS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
my:function my(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
ST:function ST(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cUC(d){if(typeof d=="string")return B.cMi(d)
return D.mH},
xi(d){var x,w,v
if(d.length===0||d==="-")return"-"
try{x=A.mU(d)
w=$.cHn().ai(x)
return w}catch(v){return d}},
cx2(d){var x,w,v
if(d==null||d.length===0||d==="-")return"-"
try{x=A.mU(d)
w=$.cHo().ai(x)
return w}catch(v){return d}},
nk:function nk(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1){var _=this
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
_.dy=a1},
cYS(d){var x,w,v,u,t,s,r,q=null,p=J.ch(y.j.a(d.i(0,"dados")),new B.bTI(),y.G)
p=A.F(p,p.$ti.h("a2.E"))
x=y.P
w=x.a(d.i(0,"resumo"))
v=A.bg(w.i(0,"quantidadeRegistros"))
v=v==null?q:C.i.D(v)
if(v==null)v=0
u=A.bg(w.i(0,"totalCashbackGerado"))
if(u==null)u=q
if(u==null)u=0
t=A.bg(w.i(0,"totalCashbackLiquido"))
if(t==null)t=q
if(t==null)t=0
s=A.bg(w.i(0,"totalCashbackResgatado"))
if(s==null)s=q
if(s==null)s=0
r=A.bg(w.i(0,"quantidadeClientesUnicos"))
r=r==null?q:C.i.D(r)
if(r==null)r=0
w=A.bg(w.i(0,"mediaRepresentatividade"))
if(w==null)w=q
if(w==null)w=0
return new B.Ah(p,new B.bAR(v,u,t,s,r,w),F.czD(x.a(d.i(0,"paginacao"))))},
Ah:function Ah(d,e,f){this.a=d
this.b=e
this.c=f},
bAI:function bAI(){},
bTI:function bTI(){},
bAR:function bAR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bzX:function bzX(){},
bAt:function bAt(){},
F2:function F2(d,e){this.a=d
this.b=e},
xh:function xh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.k3=d
_.k4=e
_.ok=f
_.p1=g
_.p2=h
_.p3=i
_.p4=j
_.R8=k
_.RG=l
_.rx=m
_.ry=n
_.to=o
_.x1=p
_.x2=q
_.xr=r
_.y1=s
_.y2=t
_.aT=u
_.aQ=v
_.v=w
_.Z=x
_.R=a0
_.dx=_.db=$
_.dy=a1
_.fr=!1
_.iW$=a2
_.iC$=a3
_.jy$=a4
_.jz$=a5
_.je$=a6
_.jA$=a7},
bA_:function bA_(d){this.a=d},
bA0:function bA0(d){this.a=d},
bA3:function bA3(d){this.a=d},
bA4:function bA4(d){this.a=d},
bA1:function bA1(d,e){this.a=d
this.b=e},
bA2:function bA2(d,e){this.a=d
this.b=e},
bzY:function bzY(){},
bzZ:function bzZ(d,e){this.a=d
this.b=e},
cUB(){return new B.L7(null)},
L7:function L7(d){this.a=d},
bAg:function bAg(d){this.a=d},
bA7:function bA7(d){this.a=d},
bA5:function bA5(d){this.a=d},
bA8:function bA8(d){this.a=d},
bA6:function bA6(d){this.a=d},
bAb:function bAb(d){this.a=d},
bAf:function bAf(d){this.a=d},
bAc:function bAc(d){this.a=d},
bAa:function bAa(d){this.a=d},
bA9:function bA9(d){this.a=d},
bAe:function bAe(d){this.a=d},
bAd:function bAd(){},
bAs:function bAs(d){this.a=d},
bAj:function bAj(d){this.a=d},
bAh:function bAh(d){this.a=d},
bAk:function bAk(d){this.a=d},
bAi:function bAi(d){this.a=d},
bAn:function bAn(d){this.a=d},
bAr:function bAr(d){this.a=d},
bAo:function bAo(d){this.a=d},
bAm:function bAm(d){this.a=d},
bAl:function bAl(d){this.a=d},
bAq:function bAq(d){this.a=d},
bAp:function bAp(){},
bAu:function bAu(d){this.a=d},
bAx:function bAx(d,e){this.a=d
this.b=e},
bAw:function bAw(){},
bAv:function bAv(d,e){this.a=d
this.b=e},
c6z:function c6z(d,e,f){this.a=d
this.b=e
this.c=f},
c6A:function c6A(){},
cZD(d){var x,w
try{x=$.cIB().ai(A.mU(d))
return x}catch(w){return d}},
Zd:function Zd(d,e){this.c=d
this.a=e},
ab1:function ab1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bZW:function bZW(d){this.a=d},
VY:function VY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
NA:function NA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ajj:function ajj(d){this.a=d},
Ze:function Ze(d,e,f){this.c=d
this.d=e
this.a=f},
m7:function m7(d,e){this.a=d
this.b=e},
anL:function anL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc8:function bc8(){},
bc7:function bc7(){},
aHr:function aHr(d,e,f){this.c=d
this.d=e
this.a=f},
aHs:function aHs(d,e){this.c=d
this.a=e},
cx0(d,e,f,g,h,i){return new B.awt(h,d,e,g,f,i,null)},
awt:function awt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
awu:function awu(d,e,f){this.c=d
this.d=e
this.a=f},
awv:function awv(d,e,f){this.c=d
this.d=e
this.a=f},
cx1(d,e,f,g,h,i,j,k,l,m){return new B.aww(l,k,d,m,i,g,j,f,h,e,null)},
cn1(d,e,f,g,h,i,j,k,l){return new B.aaw(k,d,e,g,h,j,i,null,l.h("aaw<0>"))},
aww:function aww(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bAG:function bAG(){},
bAH:function bAH(){},
aPk:function aPk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cc1:function cc1(){},
cc2:function cc2(d){this.a=d},
cc3:function cc3(d){this.a=d},
aaw:function aaw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.y=j
_.a=k
_.$ti=l},
bY3:function bY3(d){this.a=d},
awx:function awx(d){this.a=d},
cx3(d,e,f,g,h,i,j,k){return new B.awy(f,d,j,k,i,e,g,h,null)},
awy:function awy(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
cx4(d,e,f,g,h,i,j,k,l,m,n,o){return new B.awz(j,g,o,m,h,n,i,f,e,l,d,k,null)},
awz:function awz(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.a=p},
bAM:function bAM(d,e){this.a=d
this.b=e},
bAL:function bAL(d,e){this.a=d
this.b=e},
bAN:function bAN(d){this.a=d},
bAK:function bAK(d,e){this.a=d
this.b=e},
bAJ:function bAJ(d,e){this.a=d
this.b=e},
bAQ:function bAQ(d){this.a=d},
bAP:function bAP(d,e){this.a=d
this.b=e},
bAO:function bAO(d,e){this.a=d
this.b=e},
VH:function VH(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c_S:function c_S(d){this.a=d},
c_R:function c_R(d){this.a=d},
MZ:function MZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
c_P:function c_P(d,e){this.a=d
this.b=e},
c_Q:function c_Q(d){this.a=d},
c_O:function c_O(d){this.a=d},
Ge:function Ge(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aff:function aff(d,e,f){this.c=d
this.d=e
this.a=f},
a5c:function a5c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bAW:function bAW(d,e,f){this.a=d
this.b=e
this.c=f},
bAV:function bAV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bAS:function bAS(d){this.a=d},
bAT:function bAT(){},
bAU:function bAU(d,e){this.a=d
this.b=e},
bAz(d,e,f,g){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$bAz=A.l(function(a0,a1){if(a0===1)return A.m(a1,w)
for(;;)switch(x){case 0:h=A.ctj(new A.Oi().bS("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"))
h.AU("Relat\xf3rio Detalhado")
v=h.y.i(0,"Relat\xf3rio Detalhado")
v.toString
h.a79("Sheet1")
h.a_8("Relat\xf3rio Detalhado")
u=A.ro(new A.a7("#1976D2",null,null),!0,null,null,!1,!1,new A.a7("#FFFFFF",null,null),null,null,null,C.nj,!1,null,C.co,null,0,!1,null,null,C.dg,C.fU)
t=A.ro(C.d6,!0,null,null,!1,!1,C.bN,null,null,14,C.jO,!1,null,C.co,null,0,!1,null,null,C.dg,C.fU)
s=A.ro(C.d6,!1,null,null,!1,!1,C.bN,null,null,null,C.JG,!1,null,C.co,null,0,!1,null,null,C.dg,C.fU)
r=v.fF(new A.cs(0,0))
q=r.c
A.fd(q,new A.cs(r.e,r.f),new A.dZ(new A.eJ("Relat\xf3rio Detalhado de Cashback",null,null)),null)
q.a.a=!0
r.a=t
r=v.fF(new A.cs(1,0))
A.fd(r.c,new A.cs(r.e,r.f),new A.dZ(new A.eJ("Per\xedodo: "+f+" a "+e,null,null)),null)
p=A.dP("dd/MM/yyyy HH:mm",null).ai(new A.aE(Date.now(),0,!1))
r=v.fF(new A.cs(2,0))
A.fd(r.c,new A.cs(r.e,r.f),new A.dZ(new A.eJ("Gerado em: "+p,null,null)),null)
if(g!=null){r=v.fF(new A.cs(4,0))
q=r.c
A.fd(q,new A.cs(r.e,r.f),new A.dZ(new A.eJ("RESUMO",null,null)),null)
o=A.ro(C.d6,!0,null,null,!1,!1,C.bN,null,null,null,C.jO,!1,null,C.co,null,0,!1,null,null,C.dg,C.fU)
q.a.a=!0
r.a=o
o=v.fF(new A.cs(5,0))
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ("Total de Registros:",null,null)),null)
o=v.fF(new A.cs(5,1))
A.fd(o.c,new A.cs(o.e,o.f),new A.n7(g.a),null)
o=v.fF(new A.cs(6,0))
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ("Clientes \xdanicos:",null,null)),null)
o=v.fF(new A.cs(6,1))
A.fd(o.c,new A.cs(o.e,o.f),new A.n7(g.e),null)
o=v.fF(new A.cs(7,0))
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ("Valor Total Gerado:",null,null)),null)
o=v.fF(new A.cs(7,1))
r=g.b
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ(A.bt("pt_BR").ai(r),null,null)),null)
r=v.fF(new A.cs(8,0))
A.fd(r.c,new A.cs(r.e,r.f),new A.dZ(new A.eJ("Valor Total Ativo:",null,null)),null)
r=v.fF(new A.cs(8,1))
o=g.c
A.fd(r.c,new A.cs(r.e,r.f),new A.dZ(new A.eJ(A.bt("pt_BR").ai(o),null,null)),null)
o=v.fF(new A.cs(9,0))
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ("Valor Total Utilizado:",null,null)),null)
o=v.fF(new A.cs(9,1))
r=g.d
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ(A.bt("pt_BR").ai(r),null,null)),null)
r=v.fF(new A.cs(10,0))
A.fd(r.c,new A.cs(r.e,r.f),new A.dZ(new A.eJ("Taxa de Utiliza\xe7\xe3o:",null,null)),null)
r=v.fF(new A.cs(10,1))
A.fd(r.c,new A.cs(r.e,r.f),new A.dZ(new A.eJ(C.i.a3(g.gYL(),1)+"%",null,null)),null)
n=12}else n=4
m=["Data Gera\xe7\xe3o","Cliente","C\xf3digo","Telefone","Valor","Valor Resgatado","Valor L\xedquido","Status","Data Expira\xe7\xe3o","Data Resgate","Campanha","Vendedor","Empresa"]
for(l=0;l<13;++l){r=v.fF(new A.cs(n,l))
q=r.c
A.fd(q,new A.cs(r.e,r.f),new A.dZ(new A.eJ(m[l],null,null)),null)
q.a.a=!0
r.a=u}++n
for(r=J.bz(d);r.C();){q=r.gP()
o=v.fF(new A.cs(n,0))
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ(B.xi(q.b),null,null)),null)
o=v.fF(new A.cs(n,1))
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ(q.r,null,null)),null)
o=v.fF(new A.cs(n,2))
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ(q.w,null,null)),null)
o=v.fF(new A.cs(n,3))
k=q.x
if(k==null)k="-"
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ(k,null,null)),null)
k=v.fF(new A.cs(n,4))
o=q.d
j=k.c
A.fd(j,new A.cs(k.e,k.f),new A.dZ(new A.eJ(A.bt("pt_BR").ai(o),null,null)),null)
j.a.a=!0
k.a=s
k=v.fF(new A.cs(n,5))
j=q.e
o=k.c
A.fd(o,new A.cs(k.e,k.f),new A.dZ(new A.eJ(A.bt("pt_BR").ai(j),null,null)),null)
o.a.a=!0
k.a=s
k=v.fF(new A.cs(n,6))
o=q.f
j=k.c
A.fd(j,new A.cs(k.e,k.f),new A.dZ(new A.eJ(A.bt("pt_BR").ai(o),null,null)),null)
j.a.a=!0
k.a=s
k=v.fF(new A.cs(n,7))
A.fd(k.c,new A.cs(k.e,k.f),new A.dZ(new A.eJ(q.y.d,null,null)),null)
k=v.fF(new A.cs(n,8))
A.fd(k.c,new A.cs(k.e,k.f),new A.dZ(new A.eJ(B.xi(q.Q),null,null)),null)
k=v.fF(new A.cs(n,9))
A.fd(k.c,new A.cs(k.e,k.f),new A.dZ(new A.eJ(B.cx2(q.z),null,null)),null)
k=v.fF(new A.cs(n,10))
j=q.at
o=j==null?"-":j
A.fd(k.c,new A.cs(k.e,k.f),new A.dZ(new A.eJ(o,null,null)),null)
o=v.fF(new A.cs(n,11))
k=q.ay
if(k==null)k="-"
A.fd(o.c,new A.cs(o.e,o.f),new A.dZ(new A.eJ(k,null,null)),null)
k=v.fF(new A.cs(n,12))
q=q.db
if(q==null)q="-"
A.fd(k.c,new A.cs(k.e,k.f),new A.dZ(new A.eJ(q,null,null)),null);++n}for(l=0;l<13;++l)A.bMJ(v,l,15)
A.bMJ(v,1,30)
A.bMJ(v,10,25)
v=h.dy
v===$&&A.b()
i=A.cxu(h,v).aoo()
x=2
return A.f(B.bAy(new Uint8Array(A.bQ(i)),"relatorio_detalhado_"+A.dP("yyyyMMdd_HHmmss",null).ai(new A.aE(Date.now(),0,!1)),C.a2U),$async$bAz)
case 2:return A.n(null,w)}})
return A.o($async$bAz,w)},
bAA(d,e,f,g){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o
var $async$bAA=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:v=A.cjo()
u=B.cl2("#1976D2")
t=B.cl2("#E3F2FD")
s=B.cl2("#F5F5F5")
r=A.AU(null,u,null,null,null,null,null,null,null,C.ez,null,null,18,null,C.ha,null,!0,null,null,null,null)
q=A.AU(null,D.bSh,null,null,null,null,null,null,null,C.ez,null,null,8,null,C.ha,null,!0,null,null,null,null)
p=A.dP("dd/MM/yyyy HH:mm",null).ai(new A.aE(Date.now(),0,!1))
o=C.v2.atU(595.275590551181,841.8897637795275)
v.a5p(A.cvx(new B.bAC(g,t,u,q,d,s),new B.bAD(),new B.bAE(r,f,e,p,u),D.aqx,o))
x=2
return A.f(A.clm("relatorio_detalhado_"+A.dP("yyyyMMdd_HHmmss",null).ai(new A.aE(Date.now(),0,!1)),new B.bAF(v)),$async$bAA)
case 2:return A.n(null,w)}})
return A.o($async$bAA,w)},
a5b(d,e){var x=null
return B.ciS(A.a([A.on(d,D.c2c,x,x),new A.ld(x,2,x),A.on(e,A.AU(x,x,x,x,x,x,x,x,x,C.ez,x,x,10,x,C.ha,x,!0,x,x,x,x),x,x)],y.n),C.HW)},
bAy(d,e,f){var x=0,w=A.p(y.H)
var $async$bAy=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=2
return A.f(new A.ao_().Am(d,f,e),$async$bAy)
case 2:$.f0.$1("\ud83d\udcc1 Arquivo salvo: "+e)
return A.n(null,w)}})
return A.o($async$bAy,w)},
bAE:function bAE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bAD:function bAD(){},
bAC:function bAC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bAB:function bAB(){},
bAF:function bAF(d){this.a=d},
cyg(d,e){return new B.azW(e,d,null)},
azW:function azW(d,e,f){this.c=d
this.d=e
this.a=f},
a7L:function a7L(d,e){this.a=d
this.b=e},
Sp:function Sp(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.f=e
_.w=f
_.ax=g
_.CW=h
_.cx=i
_.cy=j
_.db=k
_.a=l
_.$ti=m},
Sq:function Sq(d){var _=this
_.d=!1
_.e=null
_.f=$
_.c=_.a=_.w=_.r=null
_.$ti=d},
bxP:function bxP(d){this.a=d},
an8:function an8(d,e){var _=this
_.d=d
_.w=e
_.a=_.b=null},
awb:function awb(d,e){this.a=d
this.b=e},
aYD:function aYD(){},
aYC:function aYC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clH(d,e){return new B.axM(D.xo,e,D.Bu,C.HW,D.Ez,new B.a0r(),d)},
ciS(d,e){return new B.Po(D.pw,C.byn,D.Bu,e,D.Ez,new B.a0r(),d)},
aia:function aia(d,e){this.a=d
this.b=e},
bnu:function bnu(d,e){this.a=d
this.b=e},
aBm:function aBm(d,e){this.a=d
this.b=e},
a0r:function a0r(){this.b=this.a=0},
aoi:function aoi(){},
axM:function axM(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.b=j
_.a=null},
Po:function Po(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.b=j
_.a=null},
aHO:function aHO(){},
atS:function atS(){},
cl2(d){var x,w,v,u,t
if(C.n.bm(d,"#"))d=C.n.bU(d,1)
x=d.length
if(x===3)return new A.pq(1,A.cr(C.n.ae(C.n.ab(d,0,1),2),16)/255,A.cr(C.n.ae(C.n.ab(d,1,2),2),16)/255,A.cr(C.n.ae(C.n.ab(d,2,3),2),16)/255)
w=A.cr(C.n.ab(d,0,2),16)
v=A.cr(C.n.ab(d,2,4),16)
u=A.cr(C.n.ab(d,4,6),16)
t=x===8?A.cr(C.n.ab(d,6,8),16)/255:1
return new A.pq(t,w/255,v/255,u/255)},
cWI(d){var x=d.a
if(x===0)return C.vQ
else if(x<0)return C.c0n
else return C.c0o},
cWJ(d,e,f,g,h,i,j,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
y.aD.a(h.c.i(0,A.br(y.ae))).toString
x=A.a([],y.b)
w=y.n
v=A.a([],w)
for(u=0;u<8;++u){t=a2[u]
s=d.i(0,v.length)
if(s==null)s=C.ph
r=A.on(t,a1,k,k)
v.push(A.Pw(s,r,new A.iR(0,1/0,a0,1/0),k,k,k,D.IW))}x.push(new A.va(v,!0,j))
A.PR(h)
for(s=i.length,q=1,u=0;u<i.length;i.length===s||(0,A.N)(i),++u){p=i[u]
v=A.a([],w)
r=C.f.Y(q-1,2)
for(o=J.bz(p);o.C();){t=o.gP()
n=d.i(0,v.length)
if(n==null)n=D.abW
if(t instanceof A.fw)m=t
else{m=J.c1(t)
m=A.on(m,f,B.cWI(n),k)}v.push(A.Pw(n,m,new A.iR(0,1/0,e,1/0),k,k,k,D.IW))}l=r!==0?a3:k
x.push(new A.va(v,!1,l));++q}return A.cyq(D.c0l,x,g,C.Gp,C.a9h,C.DR)}},D
J=c[1]
A=c[0]
C=c[2]
S=c[58]
T=c[57]
H=c[27]
I=c[39]
L=c[50]
M=c[36]
U=c[56]
N=c[48]
V=c[31]
K=c[42]
O=c[26]
G=c[40]
W=c[41]
F=c[17]
E=c[44]
P=c[30]
Q=c[33]
R=c[47]
B=a.updateHolder(c[8],B)
D=c[55]
B.tO.prototype={
X(){return A.A(["cashbackId",this.a,"documentoOrigem",this.b,"documentoResgate",this.c],y.N,y.z)}}
B.b8n.prototype={
X(){var x=this
return A.A(["empresa",x.a,"serie",x.b,"numero",x.c,"data",x.d,"valores",x.e,"formasPagamento",x.f],y.N,y.z)}}
B.b8o.prototype={
X(){return A.A(["codigo",this.a,"nome",this.b],y.N,y.z)}}
B.b8p.prototype={
X(){var x=this
return A.A(["subtotal",x.a,"desconto",x.b,"acrescimo",x.c,"total",x.d,"cashbackUtilizado",x.e],y.N,y.z)}}
B.DF.prototype={
X(){return A.A(["descricao",this.a,"valor",this.b],y.N,y.z)}}
B.iS.prototype={
F(){return"CashbackStatusAnalitico."+this.b}}
B.my.prototype={
F(){return"TipoDataFiltro."+this.b}}
B.ST.prototype={
ui(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r=this,q=h==null?r.a:h,p=g==null?r.b:g
if(f)x=null
else x=l==null?r.c:l
if(e)w=null
else w=d==null?r.r:d
v=m==null?r.y:m
u=i==null?r.Q:i
t=j==null?r.as:j
s=k==null?r.at:k
return new B.ST(q,p,x,r.d,r.e,r.f,w,r.w,r.x,v,r.z,u,t,s)},
V3(d,e){var x=null
return this.ui(x,!1,!1,x,x,x,d,e,x,x)},
blo(d,e){var x=null
return this.ui(x,!1,!1,x,x,d,e,x,x,x)},
bl6(d,e){var x=null
return this.ui(x,d,!1,x,x,x,e,x,x,x)},
bl4(d,e){var x=null
return this.ui(d,!1,!1,x,x,x,e,x,x,x)},
blq(d,e){var x=null
return this.ui(x,!1,!1,x,x,x,d,x,x,e)},
blC(d,e,f){var x=null
return this.ui(x,!1,!1,x,x,x,d,x,e,f)},
blw(d,e,f){var x=null
return this.ui(x,!1,d,x,x,x,e,x,x,f)},
BU(d){var x=null
return this.ui(x,!1,!1,x,x,x,d,x,x,x)},
bld(d,e){var x=null
return this.ui(x,!1,!1,d,e,x,x,x,x,x)},
blz(d,e,f){var x=null
return this.ui(x,!1,!1,d,e,x,f,x,x,x)},
gGf(){var x=!0
if(this.c==null)x=this.r!=null
return x}}
B.nk.prototype={
X(){var x=this,w=D.bDJ.i(0,x.y)
w.toString
return A.A(["cashbackId",x.a,"dataGeracao",x.b,"dataReferencia",x.c,"valorCashback",x.d,"valorResgatado",x.e,"valorLiquido",x.f,"nomeCliente",x.r,"codigoCliente",x.w,"telefone",x.x,"status",w,"dataResgate",x.z,"dataExpiracao",x.Q,"dataAtivacao",x.as,"campanha",x.at,"campanhaId",x.ax,"vendedor",x.ay,"vendedorResgate",x.ch,"documentoFiscal",x.CW,"documentoResgate",x.cx,"codigoEmpresa",x.cy,"nomeEmpresa",x.db,"valorVendaResgate",x.dx,"percentualRepresentatividade",x.dy],y.N,y.z)},
gaA1(){var x=this.dy
if(x==null)return"-"
return C.i.a3(x,2)+"%"},
gbeq(){var x,w=this.x
if(w==null)return""
x=A.bq("[^\\d]",!0,!1,!1)
return A.bV(w,x,"")},
gNS(){var x,w,v,u,t=this,s=t.x
if(!(s!=null&&s.length!==0))return""
x=t.gbeq()
w=x.length<=11?"55"+x:x
v=C.e.gS(t.r.split(" "))
u=A.a3t(null,"pt_BR","R$").ai(t.f)
s=t.db
if(s==null)s="Nossa Loja"
return"https://wa.me/"+w+"?text="+A.vC(2,"Ol\xe1, "+v+"!\n\nAqui \xe9 a *"+s+"*!\n\n*Voc\xea tem cashback dispon\xedvel!*\n\n*Saldo: "+u+"*\n*V\xe1lido at\xe9: "+B.xi(t.Q)+"*\n\nN\xe3o deixe seu dinheiro expirar!\n\nVenha at\xe9 nossa loja e aproveite seu cashback em suas pr\xf3ximas compras.\n\nEsperamos voc\xea!",C.aV,!1)}}
B.Ah.prototype={
X(){return A.A(["dados",this.a,"resumo",this.b,"paginacao",this.c],y.N,y.z)},
h3(){var x="pt_BR",w=y.N,v=A.a([A.A(["key","codigo","nome","ID"],w,w),A.A(["key","dataGeracao","nome","Data Gera\xe7\xe3o"],w,w),A.A(["key","cliente","nome","Cliente"],w,w),A.A(["key","cpf","nome","CPF/C\xf3digo"],w,w),A.A(["key","valorGerado","nome","Valor Gerado (R$)"],w,w),A.A(["key","valorResgatado","nome","Valor Resgatado (R$)"],w,w),A.A(["key","valorLiquido","nome","Valor L\xedquido (R$)"],w,w),A.A(["key","status","nome","Status"],w,w),A.A(["key","dataResgate","nome","Data Resgate"],w,w),A.A(["key","dataExpiracao","nome","Data Expira\xe7\xe3o"],w,w),A.A(["key","campanha","nome","Campanha"],w,w),A.A(["key","vendedor","nome","Vendedor"],w,w),A.A(["key","documento","nome","Documento"],w,w)],y.o),u=this.a,t=A.R(u).h("G<1,ae<c,I>>")
u=A.F(new A.G(u,new B.bAI(),t),t.h("a2.E"))
t=this.b
return A.A(["titulo","Relat\xf3rio Detalhado de Cashback","colunas",v,"dados",u,"totalRegistros",this.c.c,"resumo",A.A(["valorTotalGerado",A.bt(x).ai(t.b),"valorTotalResgatado",A.bt(x).ai(t.d),"valorTotalLiquido",A.bt(x).ai(t.c),"taxaResgate",C.i.a3(t.gYL(),1)+"%","clientesUnicos",t.e],w,y.K)],w,y.z)}}
B.bAR.prototype={
X(){var x=this
return A.A(["quantidadeRegistros",x.a,"totalCashbackGerado",x.b,"totalCashbackLiquido",x.c,"totalCashbackResgatado",x.d,"quantidadeClientesUnicos",x.e,"mediaRepresentatividade",x.f],y.N,y.z)},
gYL(){var x=this.b
if(x===0)return 0
return this.d/x*100}}
B.bzX.prototype={
e6(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=$.aY(),j=$.d
if(j==null)j=$.d=C.q
x=j.q(l,y.I)
j=x.ar$
j===$&&A.b()
j=j.bC$
j===$&&A.b()
w=V.b63()
v=A.a([],y.d)
u=A.ea(D.bW1,y.q)
t=A.nn(l,y.m)
s=A.nn(l,y.L)
r=A.bH(!1)
q=new A.aE(Date.now(),0,!1)
p=y.N
o=y.S
n=y.A
m=y.B
m=new B.xh(new B.bAu(new B.c6z(x,j,w)),v,u,t,s,r,A.ea(new B.ST(A.bK(A.aQ(q),A.aU(q),1,0,0,0,0),q,l,l,l,l,l,l,l,D.m7,l,l,1,20),y.cr),A.ea(E.vL,y.cq),A.nn(l,y.C),F.clJ(),A.ea(D.m7,y.a),A.iJ(A.a([],y.s),p),P.TG(A.b9(o),o),P.TG(A.b9(o),o),Q.JQ(A.w(o,n),o,n),Q.JQ(A.w(o,p),o,p),A.bH(!1),A.bH(!1),A.bH(!1),new A.yF(new A.b2(new A.au($.aB,y.U),y.g)),A.j7(2),A.bH(!1),D.Gx,A.a([],y.Q),A.ep(l,l,l,y.X,y.x),new A.de(m),new A.de(m),!1,!1)
m.jH()
m.kx(D.Gx)
A.fX(k,m,!1,y.l)}}
B.bAt.prototype={}
B.F2.prototype={
F(){return"RelatorioDetalhadoCashbackState."+this.b}}
B.xh.prototype={
gGq(){var x=this.p1.gj()
x=x==null?null:x.a
return x==null?A.a([],y.Y):x},
gZ_(){var x=this.p1.gj()
return x==null?null:x.b},
gBZ(){var x=this.p1.gj()
x=x==null?null:x.c.a
return x==null?this.p4.gj().as:x},
gxu(){var x=this.p1.gj()
x=x==null?null:x.c.b
return x==null?0:x},
gNz(){var x=this.p1.gj()
x=x==null?null:x.c.c
return x==null?0:x},
bW(){this.ld()
this.b4t()
this.B8()},
B8(){var x=0,w=A.p(y.H),v=this,u,t,s,r
var $async$B8=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=v.dx
s===$&&A.b()
x=2
return A.f(s.k9(),$async$B8)
case 2:u=e
x=3
return A.f(v.dx.k8(),$async$B8)
case 3:t=e
s=v.p4
s.sj(s.gj().bld(t,u))
r=v.aQ
x=4
return A.f(v.dx.Hs(),$async$B8)
case 4:r.sj(e)
x=5
return A.f(v.fR(),$async$B8)
case 5:return A.n(null,w)}})
return A.o($async$B8,w)},
b4t(){var x=this.k4
$.aY()
x.push($.cM().e9(new B.bA_(this),y.y))
x.push($.cM().e9(new B.bA0(this),y._))},
fR(){var x=0,w=A.p(y.H),v=this
var $async$fR=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:v.ok.sj(D.kl)
v.p2.sj(null)
x=2
return A.f(v.k3.HP(v.p4.gj()),$async$fR)
case 2:e.dL(0,new B.bA3(v),new B.bA4(v))
return A.n(null,w)}})
return A.o($async$fR,w)},
aYs(d){var x,w,v,u,t,s=this.to,r=s.k5(s)
for(x=d.length,w=!1,v=0;v<d.length;d.length===x||(0,A.N)(d),++v){u=d[v].at
if(u!=null&&u.length!==0&&r.A(0,u))w=!0}if(w){s.sB(0,0)
x=A.F(r,A.r(r).c)
C.e.kZ(x)
t=s.bI$
t===$&&A.b()
J.id(t,x)
x=s.cb$
s=s.gj()
x.r=s
x.cq(s)}},
l4(){var x=0,w=A.p(y.H),v=this,u,t
var $async$l4=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.xr
t=u.bI$
t===$&&A.b()
J.tC(t)
t=u.cb$
u=u.gj()
t.r=u
t.cq(u)
u=v.x1
t=u.bI$
t===$&&A.b()
J.tC(t)
t=u.cb$
u=u.gj()
t.r=u
t.cq(u)
v.to.sB(0,0)
u=v.p4
u.sj(u.gj().BU(1))
x=2
return A.f(v.fR(),$async$l4)
case 2:return A.n(null,w)}})
return A.o($async$l4,w)},
nY(){var x=0,w=A.p(y.H),v,u=this
var $async$nY=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:v=u.fR()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$nY,w)},
u9(d){return this.bi_(d)},
bi_(d){var x=0,w=A.p(y.H),v,u=this
var $async$u9=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:if(C.f.aH(d.b.i0(d.a).a,864e8)>365){u.p2.sj(new A.mG("O per\xedodo m\xe1ximo permitido \xe9 de 1 ano"))
u.ok.sj(D.a7w)
x=1
break}u.p4.sj(d.BU(1))
x=3
return A.f(u.fR(),$async$u9)
case 3:case 1:return A.n(v,w)}})
return A.o($async$u9,w)},
wF(d){return this.bjn(d)},
bjn(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$wF=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.p4
if(d===t.gj().at){x=1
break}t.sj(t.gj().V3(1,d))
x=3
return A.f(u.fR(),$async$wF)
case 3:case 1:return A.n(v,w)}})
return A.o($async$wF,w)},
rR(){var x=0,w=A.p(y.H),v=this,u
var $async$rR=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.p4.gj()
x=2
return A.f(v.u9(new B.ST(u.a,u.b,null,null,null,null,null,null,null,D.m7,null,null,1,20)),$async$rR)
case 2:return A.n(null,w)}})
return A.o($async$rR,w)},
vO(d){return this.aGm(d)},
aGm(d){var x=0,w=A.p(y.H),v,u=this,t,s
var $async$vO=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:if(d>=1)t=u.gxu()>0&&d>u.gxu()
else t=!0
if(t){x=1
break}if(d===u.gBZ()){x=1
break}t=u.x1
s=t.bI$
s===$&&A.b()
J.tC(s)
s=t.cb$
t=t.gj()
s.r=t
s.cq(t)
t=u.p4
t.sj(t.gj().BU(d))
x=3
return A.f(u.fR(),$async$vO)
case 3:case 1:return A.n(v,w)}})
return A.o($async$vO,w)},
LR(d){return this.bpk(d)},
bpk(d){var x=0,w=A.p(y.H),v,u=this,t,s
var $async$LR=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=u.RG
if(s.gj()==d){x=1
break}s.sj(d)
u.R8.sj(E.vL)
s=u.p4
t=u.ry
if(d!=null)s.sj(s.gj().blC(1,A.a([d],y.t),t.gj()))
else s.sj(s.gj().blw(!0,1,t.gj()))
x=3
return A.f(u.fR(),$async$LR)
case 3:case 1:return A.n(v,w)}})
return A.o($async$LR,w)},
LS(d){return this.bpl(d)},
bpl(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$LS=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.ry
if(t.gj()===d){x=1
break}t.sj(d)
t=u.p4
t.sj(t.gj().blq(1,d))
x=3
return A.f(u.fR(),$async$LS)
case 3:case 1:return A.n(v,w)}})
return A.o($async$LS,w)},
Ga(d){return this.bph(d)},
bph(d){var x=0,w=A.p(y.H),v,u=this,t,s,r,q,p
var $async$Ga=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:p=u.rx
if(p.gj()==d){x=1
break}p.sj(d)
u.R8.sj(E.vL)
x=d==null||d.length===0?3:4
break
case 3:p=u.p4
p.sj(p.gj().bl6(!0,1))
x=5
return A.f(u.fR(),$async$Ga)
case 5:x=1
break
case 4:p=u.p1.gj()
t=p==null?null:p.a
if(t==null)t=A.a([],y.Y)
p=t.length
r=0
for(;;){if(!(r<p)){s=null
break}q=t[r]
if(q.at===d&&q.ax!=null){s=q.ax
break}++r}if(s==null){x=1
break}p=u.p4
p.sj(p.gj().bl4(s,1))
x=6
return A.f(u.fR(),$async$Ga)
case 6:case 1:return A.n(v,w)}})
return A.o($async$Ga,w)},
Nw(d){return this.byV(d)},
byV(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$Nw=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.x1
if(t.gj().p(0,d)){t.I(0,d)
x=1
break}t.A(0,d)
t=u.xr.gdu()
x=!t.p(t,d)?3:4
break
case 3:x=5
return A.f(u.JD(d),$async$Nw)
case 5:case 4:case 1:return A.n(v,w)}})
return A.o($async$Nw,w)},
JD(d){return this.b5t(d)},
b5t(d){var x=0,w=A.p(y.H),v=this,u
var $async$JD=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=v.x2
u.A(0,d)
v.y1.I(0,d)
x=2
return A.f(v.k3.vl(d),$async$JD)
case 2:f.dL(0,new B.bA1(v,d),new B.bA2(v,d))
u.I(0,d)
return A.n(null,w)}})
return A.o($async$JD,w)},
Ni(d){return this.bym(d)},
bym(d){var x=0,w=A.p(y.H),v=this
var $async$Ni=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=2
return A.f(v.JD(d),$async$Ni)
case 2:return A.n(null,w)}})
return A.o($async$Ni,w)},
DE(d){return this.aJj(d)},
aJj(d){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$DE=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=v.R8
s.sj(s.gj().ayj(d))
u=s.gj().b===E.j0?"asc":"desc"
s=s.gj()
t=v.p4
t.sj(t.gj().blo(A.z(s.a)+"_"+u,1))
x=2
return A.f(v.fR(),$async$DE)
case 2:return A.n(null,w)}})
return A.o($async$DE,w)},
J3(){return this.aYy()},
aYy(){var x=0,w=A.p(y.v),v,u=this,t,s,r,q,p
var $async$J3=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:q={}
p=A.a([],y.Y)
q.a=1
t=u.p4
s=u.k3
r=1
case 3:x=6
return A.f(s.HP(t.gj().V3(r,500)),$async$J3)
case 6:e.dL(0,new B.bzY(),new B.bzZ(q,p));++r
case 4:if(r<=q.a){x=3
break}case 5:v=p
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$J3,w)},
FY(){var x=0,w=A.p(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FY=A.l(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=r.y2
if(!j.gj())o=!(r.ok.gj()===D.ox&&r.gGq().length!==0)
else o=!0
if(o){x=1
break}j.sj(!0)
u=4
x=7
return A.f(r.J3(),$async$FY)
case 7:q=e
o=r.gZ_()
n=$.cpt()
m=r.p4
l=n.ai(m.gj().a)
x=8
return A.f(B.bAz(q,n.ai(m.gj().b),l,o),$async$FY)
case 8:$.f0.$1("\u2705 Exporta\xe7\xe3o Excel conclu\xedda - "+J.bv(q)+" registros")
s.push(6)
x=5
break
case 4:u=3
i=t.pop()
p=A.a6(i)
$.f0.$1("\u274c Erro na exporta\xe7\xe3o Excel: "+A.z(p))
throw i
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
j.sj(!1)
x=s.pop()
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$FY,w)},
FZ(){var x=0,w=A.p(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$FZ=A.l(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=r.y2
if(!j.gj())o=!(r.ok.gj()===D.ox&&r.gGq().length!==0)
else o=!0
if(o){x=1
break}j.sj(!0)
u=4
x=7
return A.f(r.J3(),$async$FZ)
case 7:q=e
o=r.gZ_()
n=$.cpt()
m=r.p4
l=n.ai(m.gj().a)
x=8
return A.f(B.bAA(q,n.ai(m.gj().b),l,o),$async$FZ)
case 8:$.f0.$1("\u2705 Exporta\xe7\xe3o PDF conclu\xedda - "+J.bv(q)+" registros")
s.push(6)
x=5
break
case 4:u=3
i=t.pop()
p=A.a6(i)
$.f0.$1("\u274c Erro na exporta\xe7\xe3o PDF: "+A.z(p))
throw i
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
j.sj(!1)
x=s.pop()
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$FZ,w)},
jh(){var x,w,v,u=this
for(x=u.k4,w=x.length,v=0;v<x.length;x.length===w||(0,A.N)(x),++v)x[v].aL()
C.e.O(x)
x=u.x1
w=x.bI$
w===$&&A.b()
J.tC(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
x=u.x2
w=x.bI$
w===$&&A.b()
J.tC(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
u.lL()}}
B.L7.prototype={
om(d){var x=null
return A.hv(x,x,A.h0(!0,A.es(A.cK(new A.aO(new B.bAg(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.aa),!0,C.aM,!0,!0),x,x,x)},
oz(d){var x=null
return A.hv(x,x,A.h0(!0,A.es(A.cK(new A.aO(new B.bAs(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.aa),!0,C.aM,!0,!0),x,x,x)}}
B.bAu.prototype={
HP(d){return this.aFl(d)},
aFl(d){var x=0,w=A.p(y.r),v,u=this
var $async$HP=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bAx(u,d),y.m),$async$HP)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$HP,w)},
vl(d){return this.aDv(d)},
aDv(d){var x=0,w=A.p(y.f),v,u=this
var $async$vl=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bAv(u,d),y.A),$async$vl)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vl,w)}}
B.c6z.prototype={
Pc(d,e,f,g,h,i,j,k,l,m,n,o){return this.aFm(d,e,f,g,h,i,j,k,l,m,n,o)},
aFm(d,e,f,g,h,i,a0,a1,a2,a3,a4,a5){var x=0,w=A.p(y.m),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Pc=A.l(function(a7,a8){if(a7===1)return A.m(a8,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreSelectedCompanies",!1,"ignoreDefaultDates",!1],m,l)
j=A.A(["page",a0,"pageSize",a1,"status",a2,"codigoCliente",f,"nomeCliente",h,"codigoVendedor",g,"campanhaId",e,"valorMinimo",a5,"valorMaximo",a4,"tipoData",a3,"agrupamento",d,"ordenacao",i],m,l)
j.cG(0,new B.c6A())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/cashback/relatorio-detalhado",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.anS(o.cu(u.anR(l,u.b)),y.m)
x=3
return A.f(m.co(t,y.P),$async$Pc)
case 3:s=a8
r=A.aP()
try{m=s.a
m.toString
r.b=B.cYS(m)}catch(a6){q=A.a6(a6)
p=A.aq(a6)
u.c.nT(q,p,t)
throw a6}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Pc,w)},
vl(d){return this.aDw(d)},
aDw(d){var x=0,w=A.p(y.A),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$vl=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:n=y.N
m=y.z
l=A.cq(A.A(["ignoreSelectedCompanies",!0,"ignoreDefaultDates",!0],n,m),A.w(n,m),"GET",null)
k=u.a
j=k.ar$
j===$&&A.b()
m=l.ct(j,"/cashback/"+d+"/documentos",null,A.w(n,m))
n=k.ar$.bC$
n===$&&A.b()
t=u.anS(m.cu(u.anR(n,u.b)),y.A)
n=y.P
x=3
return A.f(k.co(t,n),$async$vl)
case 3:s=f
r=A.aP()
try{m=s.a
l=C.i.D(A.bP(m.i(0,"cashbackId")))
k=B.czB(n.a(m.i(0,"documentoOrigem")))
n=m.i(0,"documentoResgate")==null?null:B.czB(n.a(m.i(0,"documentoResgate")))
r.b=new B.tO(l,k,n)}catch(i){q=A.a6(i)
p=A.aq(i)
u.c.nT(q,p,t)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vl,w)},
anS(d,e){var x
if(A.br(e)!==C.dq){x=d.r
x===$&&A.b()
x=!(x===C.dl||x===C.dB)}else x=!1
if(x)if(A.br(e)===C.df)d.r=C.cU
else d.r=C.d8
return d},
anR(d,e){var x,w=C.n.bB(e)
if(w.length===0)return d
x=A.co(e,0,null)
if(x.gm4())return x.k(0)
return A.co(d,0,null).ko(x).k(0)}}
B.Zd.prototype={
t(d){var x=null,w=C.R.U(0.1),v=this.c,u=y.p,t=A.a([new B.ab1("Documento de Origem","Venda que gerou o cashback",C.qU,M.cS,v.b,!1,x)],u)
v=v.c
if(v!=null)C.e.E(t,A.a([C.f3,new B.ab1("Documento de Resgate","Venda onde o cashback foi utilizado",D.ayl,C.bu,v,!0,x)],u))
return A.al(x,A.V(t,C.N,x,C.u,C.t,0),C.B,x,x,new A.an(w,x,x,x,x,x,C.O),x,x,x,x,C.aS,x,x,x)}}
B.ab1.prototype={
t(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.f,m=n.U(0.1)
m=A.al(o,A.bW(p.e,o,o,n,o,o,o,o,o,o,o,20,o,o),C.B,o,o,new A.an(m,o,o,o,o,o,C.bl),o,o,o,o,C.aS,o,o,o)
n=A.fe(p.c,o,!1,2,C.P,o)
x=A.E(d).ok.ax
x=x==null?o:x.ja(C.R,10)
w=y.p
x=A.a3(A.a([m,R.vI,A.aj(A.V(A.a([n,A.P(p.d,o,o,o,o,x,o,o)],w),C.N,o,C.u,C.t,0),1)],w),C.v,C.u,C.t,0)
n=H.a_A(C.R.U(0.2),1,o)
m=p.r
v=m.a
v=A.h1(C.bO,A.a([new B.VY("Empresa",v.a+" - "+v.b,D.axC,o),new B.VY("Documento",m.b+"/"+m.c,C.zy,o),new B.VY("Data",B.cZD(m.d),C.JL,o)],w),C.c3,C.aq,16,16)
u=m.e
m=A.E(d).ok.ax
m=A.P("Valores",o,o,o,o,m==null?o:m.ja(C.R,10),o,o)
t=C.R.U(0.1)
s=A.aC(10)
r=A.a([new B.NA("Subtotal",u.a,!1,!1,o)],w)
q=u.b
if(q>0)r.push(new B.NA("Desconto",q,!0,!1,o))
q=u.c
if(q>0)r.push(new B.NA("Acr\xe9scimo",q,!1,!1,o))
r.push(H.a_A(C.R.U(0.2),1,o))
r.push(new B.NA("Total",u.d,!1,!0,o))
return A.eh(o,8,new A.aD(C.aS,A.V(A.a([x,n,v,A.V(A.a([m,A.al(o,A.V(r,C.v,o,C.u,C.t,8),C.B,o,o,new A.an(t,o,o,s,o,o,C.O),o,o,o,o,C.aR,o,o,o)],w),C.N,o,C.u,C.t,8),p.aSH(d)],w),C.N,o,C.u,C.t,8),o),o,o,o,C.aM,o,o)},
aSH(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.E(d),m=this.r,l=m.f,k=m.e.e,j=this.w&&k!=null&&k>0
if(l.length===0&&!j)return C.aP
m=A.E(d).ok.ax
m=A.P("Formas de Pagamento",o,o,o,o,m==null?o:m.ja(C.R,10),o,o)
x=y.p
w=A.a([],x)
if(j){v=C.bu.U(0.15)
u=A.aC(10)
t=A.ew(C.bu.U(0.4),-1,C.V,1)
s=n.ok.Q
r=s==null
q=A.P("CASHBACK: ",o,o,o,o,r?o:s.jx(C.xV,C.aB),o,o)
p=A.bt("pt_BR").ai(k)
w.push(A.al(o,A.a3(A.a([D.ayu,C.e8,q,A.P(p,o,o,o,o,r?o:s.jx(C.xV,C.ad),o,o)],x),C.v,C.u,C.Y,0),C.B,o,o,new A.an(v,o,t,u,o,o,C.O),o,o,o,o,C.yK,o,o,o))}C.e.E(w,new A.G(l,new B.bZW(n),A.R(l).h("G<1,e>")))
return A.V(A.a([m,C.dp,A.h1(C.bO,w,C.c3,C.aq,16,16)],x),C.N,o,C.u,C.t,0)}}
B.VY.prototype={
t(d){var x=null,w=A.bW(this.e,x,x,C.R,x,x,x,x,x,x,x,14,x,x),v=A.E(d).ok.ax
v=v==null?x:v.ja(C.R,10)
return A.a3(A.a([w,C.e8,A.P(this.c+": ",x,x,x,x,v,x,x),A.fe(this.d,x,!1,2,C.P,x)],y.p),C.v,C.u,C.Y,0)}}
B.NA.prototype={
t(d){var x,w=this,v=null,u=A.E(d),t=A.bt("pt_BR").ai(w.d),s=w.e,r=s?"- "+t:t,q=u.ok.Q,p=q==null
if(p)x=v
else x=q.ie(w.f?C.ad:C.a9)
x=A.P(w.c,v,v,v,v,x,v,v)
if(p)s=v
else{p=w.f?C.ad:C.aB
q=q.jx(s?C.bt:v,p)
s=q}return new A.aD(D.aqa,A.a3(A.a([x,A.P(r,v,v,v,v,s,v,v)],y.p),C.v,C.as,C.t,0),v)}}
B.ajj.prototype={
t(d){var x=null
return A.al(x,D.aho,C.B,x,x,new A.an(C.R.U(0.1),x,x,x,x,x,C.O),x,x,x,x,C.aR,x,x,x)}}
B.Ze.prototype={
t(d){var x,w,v,u=null,t=A.E(d),s=t.ax,r=s.id
r=(r==null?s.fy:r).U(0.1)
s=s.fy
x=s.U(0.3)
w=A.bW(C.jQ,u,u,s,u,u,u,u,u,u,u,20,u,u)
v=t.ok.Q
s=v==null?u:v.c1(s)
s=A.a([w,R.vI,A.aj(A.P(this.c,u,u,u,u,s,u,u),1)],y.p)
s.push(A.FE(D.ayN,I.oY,this.d,u))
return A.al(u,A.a3(s,C.v,C.u,C.t,0),C.B,u,u,new A.an(r,u,new A.eM(new A.bj(x,1,C.V,-1),C.a_,C.a_,C.a_),u,u,u,C.O),u,u,u,u,C.aS,u,u,u)}}
B.m7.prototype={
F(){return"ExportType."+this.b},
gX6(){switch(this.a){case 0:var x="Excel"
break
case 1:x="PDF"
break
default:x=null}return x},
gbmF(){switch(this.a){case 0:var x="Planilha com todos os dados"
break
case 1:x="Relat\xf3rio formatado"
break
default:x=null}return x},
gbru(){switch(this.a){case 0:var x=D.axE
break
case 1:x=D.axv
break
default:x=null}return x},
gen(){switch(this.a){case 0:var x=D.akE
break
case 1:x=D.al9
break
default:x=null}return x}}
B.anL.prototype={
t(d){var x=this,w=x.e,v=!w&&!x.d,u=A.E(d)
return new B.Sp(new B.bc8(),x.c,"Exportar relat\xf3rio",new B.aHr(x.d,w,null),D.bR4,v,new A.er(A.aC(10),C.a_),u.at,null,y.k)}}
B.aHr.prototype={
t(d){var x,w,v,u,t,s,r,q=null,p=A.E(d),o=!this.d&&!this.c
if(o){x=p.ax.b
x=new A.pg(C.ec,C.mq,C.eM,A.a([x,x.abE(C.f.aC(C.i.af(x.gaN()*255*0.8),0,255))],y.O),q,q)}else x=q
w=o?q:C.jw
v=A.aC(8)
u=o?A.a([new A.cS(0,C.b_,p.ax.b.U(0.3),C.iP,4)],y.V):q
t=A.a([],y.p)
s=this.c
if(s)t.push(D.bZ3)
else t.push(A.bW(D.axP,q,q,o?C.I:C.ev,q,q,q,q,q,q,q,16,q,q))
t.push(C.fo)
s=s?"Exportando...":"Exportar"
r=p.ok.ax
if(r==null)r=q
else r=r.jx(o?C.I:C.ev,C.b2)
t.push(A.P(s,q,q,q,q,r,q,q))
t.push(U.a8L)
t.push(A.bW(C.iw,q,q,o?C.I:C.ev,q,q,q,q,q,q,q,18,q,q))
return A.al(q,A.a3(t,C.v,C.u,C.Y,0),C.B,q,q,new A.an(w,q,q,v,u,x,C.O),q,32,q,q,C.yI,q,q,q)}}
B.aHs.prototype={
t(d){var x,w,v=null,u=A.E(d),t=this.c,s=t.gen().U(0.1),r=A.aC(10)
r=A.al(v,A.bW(t.gbru(),v,v,t.gen(),v,v,v,v,v,v,v,18,v,v),C.B,v,v,new A.an(s,v,v,r,v,v,C.O),v,32,v,v,v,v,v,32)
s=t.gX6()
x=u.ok
w=x.z
s=A.P(s,v,v,v,v,w==null?v:w.ie(C.b2),v,v)
t=t.gbmF()
x=x.Q
w=y.p
return A.a3(A.a([r,C.vH,A.aj(A.V(A.a([s,A.P(t,v,v,v,v,x==null?v:x.c1(C.ce),v,v)],w),C.N,v,C.u,C.Y,0),1)],w),C.v,C.u,C.t,0)}}
B.awt.prototype={
t(d){var x=this
switch(x.c.a){case 0:case 1:return D.bW3
case 3:return new B.awv(x.d,x.f,null)
case 4:return new B.awu(x.e,x.r,null)
case 2:return x.w}}}
B.awu.prototype={
t(d){return O.ajl("N\xe3o foram encontrados cashbacks para o per\xedodo e filtros selecionados.",this.c?A.FE(E.Ke,D.c6n,this.d,null):null,K.axT,"Nenhum registro encontrado",G.Kv)}}
B.awv.prototype={
t(d){var x=this.c
if(x==null)x="Erro desconhecido"
return O.ajl(x,A.anl(I.qY,I.oY,this.d,null),C.jQ,"Erro ao carregar dados",G.zM)}}
B.aww.prototype={
t(d){var x,w,v,u=this,t=null,s=u.y,r=A.a([D.apl],y.J)
C.e.E(r,new A.G(D.bpV,new B.bAG(),y.e))
x=s?t:u.r
x=B.cn1("Status",D.axQ,s,r,x,t,!1,u.c,y.i)
r=A.a([D.apk],y.u)
w=u.e
C.e.E(r,new A.G(w,new B.bAH(),w.$ti.h("G<am.E,ej<c?>>")))
w=s?t:u.w
v=y.p
w=A.a([new B.aPk(u.f,s,u.x,t),x,B.cn1("Campanha",D.axJ,s,r,w,t,!1,u.d,y.T)],v)
C.e.E(w,A.a([new B.anL(u.z,u.Q,s,t)],v))
return A.h1(C.bO,w,C.c3,C.aq,4,8)}}
B.aPk.prototype={
t(d){var x=this,w=x.c,v=y.c
v=A.F(new A.G(D.bso,new B.cc1(),v),v.h("a2.E"))
return B.cn1("Tipo de Data",C.nm,x.d,v,new B.cc2(x),new B.cc3(x),w!==D.m7,w,y.a)}}
B.aaw.prototype={
t(d){var x,w=this,v=null,u=A.E(d),t=w.c,s=t!=null,r=w.x||s,q=A.E(d),p=A.aC(4),o=A.ew((!$.ce?C.bC:C.bM).U(0.1),-1,C.V,1),n=A.E(d),m=A.aC(4),l=A.bW(w.e,v,v,C.R,v,v,v,v,v,v,v,14,v,v),k=u.ok.ax,j=k==null,i=j?v:k.c1(C.R),h=y.p
i=A.a3(A.a([l,C.e8,A.P(w.d,v,v,v,v,i,v,v)],h),C.v,C.u,C.Y,0)
l=r?24:2
x=A.bW(C.iw,v,v,r?u.ax.b:C.R,v,v,v,v,v,v,v,18,v,v)
k=j?v:k.c1(u.ax.k3)
j=w.r
h=A.a([new A.CG(A.cjq(m,n.at,0,i,new A.aD(new A.aA(0,0,l,0),x,v),!0,!1,w.f,j,k,t,w.$ti.c),v)],h)
if(r){t=w.y
if(t==null)t=j!=null?new B.bY3(w):v
h.push(A.nf(v,A.cW(!1,A.aC(16),!0,A.al(v,E.K9,C.B,v,v,new A.an(C.R.U(0.1),v,v,v,v,v,C.bl),v,v,v,v,C.IV,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v),v,v,v,0,v,v))}return A.al(v,A.dH(C.fy,h,C.a6,C.aW,v),C.B,v,v,new A.an(q.at,v,o,p,v,v,C.O),v,32,v,v,C.fe,v,v,v)}}
B.awx.prototype={
t(d){return E.HP}}
B.awy.prototype={
t(d){var x=this
return F.cw4(x.c,x.d,x.w,x.x,x.y,x.r,E.UB,x.e,x.f)}}
B.awz.prototype={
t(d){return A.by(d,null,y.w).w.a.a>=1100?this.aSA(d):this.aSV(d)},
aSA(d){var x=this,w=null,v=A.E(d),u=x.d?N.hS:E.n9,t=C.R.U(0.1),s=y.p,r=A.a([D.bZ1],s)
C.e.E(r,new A.G(D.bnL,new B.bAM(x,v),y.R))
s=A.a([A.al(w,A.a3(r,C.v,C.u,C.t,0),C.B,w,w,new A.an(v.at,w,new A.eM(C.a_,C.a_,new A.bj(t,1,C.V,-1),C.a_),E.xv,w,w,C.O),w,w,w,w,u,w,w,w)],s)
t=x.c
C.e.E(s,new A.G(t,new B.bAN(x),A.R(t).h("G<1,e>")))
return A.V(s,C.v,w,C.u,C.t,0)},
aSV(d){var x=this.c,w=A.R(x).h("G<1,MZ>")
x=A.F(new A.G(x,new B.bAQ(this),w),w.h("a2.E"))
return A.V(x,C.v,null,C.u,C.t,0)}}
B.VH.prototype={
t(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.E(d),m=p.f,l=m?N.hS:E.n9,k=p.r,j=k?C.R.U(0.1):o,i=C.R.U(0.1),h=k?0.25:0
h=A.cij(A.bW(C.hV,o,o,k?n.ax.b:C.ce,o,o,o,o,o,o,o,20,o,o),C.ak,h)
x=p.c
w=A.aj(A.fe(B.xi(x.c),o,!1,o,C.P,o),2)
v=y.p
u=A.a([],v)
t=p.d
if(t)u.push(new B.aff(p.e,m,o))
if(t)u.push(C.fo)
t=x.r
if(m)t=A.fe(t,o,!1,o,C.P,o)
else{t=A.fe(t,o,!1,o,C.P,o)
s=A.E(d).ok.ax
s=s==null?o:s.ja(C.R,10)
s=A.V(A.a([t,A.P(x.w,o,o,o,o,s,o,o)],v),C.N,o,C.u,C.Y,0)
t=s}u.push(A.aj(t,1))
u=A.aj(A.a3(u,C.v,C.u,C.t,0),3)
t=A.aj(A.fe(A.bt("pt_BR").ai(x.d),n.ax.b,!0,o,C.P,o),2)
s=x.y
r=A.aj(new A.cx(C.cC,o,o,B.cyg(m?D.a92:D.DB,s),o),2)
q=x.gaA1()
m=s===D.mG
s=m?K.pQ:C.R
m=A.aj(A.fe(q,s,m,o,C.P,o),3)
s=A.aj(A.fe(B.xi(x.Q),o,!1,o,C.P,o),2)
x=x.at
m=A.a([A.cW(!1,o,!0,A.al(o,A.a3(A.a([h,w,u,t,r,m,s,A.aj(A.fe(x==null?"-":x,o,!1,1,C.P,o),2)],v),C.v,C.u,C.t,5),C.B,o,o,new A.an(j,o,new A.eM(C.a_,C.a_,new A.bj(i,1,C.V,-1),C.a_),o,o,o,C.O),o,o,o,o,l,o,o,o),o,!0,o,o,o,o,o,o,o,o,o,p.w,o,o,o,o,o)],v)
if(k)m.push(new A.aO(new B.c_S(p),o))
return A.V(m,C.v,o,C.u,C.t,0)}}
B.MZ.prototype={
t(d){var x,w,v=this,u=null,t=A.E(d),s=A.aC(8),r=C.R.U(0.1),q=v.f,p=q?C.R.U(0.1):C.W,o=C.R.U(0.1),n=y.p,m=A.a([],n),l=v.d
if(l)m.push(new B.aff(v.e,!1,u))
if(l)m.push(C.fo)
l=v.c
x=t.ok
w=x.x
w=w==null?u:w.ie(C.ad)
w=A.P(l.r,1,C.P,u,u,w,u,u)
x=x.Q
x=x==null?u:x.c1(C.ce)
m.push(A.aj(A.V(A.a([w,A.P(l.w,u,u,u,u,x,u,u)],n),C.N,u,C.u,C.t,0),1))
m.push(B.cyg(D.DB,l.y))
m.push(C.e8)
l=q?0.5:0
m.push(A.cij(A.bW(T.zz,u,u,q?t.ax.b:C.ce,u,u,u,u,u,u,u,20,u,u),C.ak,l))
p=A.a([A.cW(!1,u,!0,A.al(u,A.V(A.a([A.a3(m,C.v,C.u,C.t,0),C.dp,H.a_A(C.R.U(0.2),1,u),C.dp,A.cX(new B.c_P(v,t))],n),C.N,u,C.u,C.t,0),C.B,u,u,new A.an(p,u,new A.eM(C.a_,C.a_,new A.bj(o,1,C.V,-1),C.a_),E.xv,u,u,C.O),u,u,u,u,C.aS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u)],n)
if(q)p.push(new A.aO(new B.c_Q(v),u))
return A.Hk(A.V(p,C.v,u,C.u,C.t,0),C.bZ,t.at,u,G.qr,new A.er(s,new A.bj(r,1,C.V,-1)))}}
B.Ge.prototype={
t(d){var x=null,w=A.E(d).ok,v=w.ax
v=v==null?x:v.c1(C.ce)
v=A.P(this.c,x,x,x,x,v,x,x)
w=w.Q
w=w==null?x:w.jx(this.e,C.aB)
return A.V(A.a([v,A.P(this.d,x,x,x,x,w,x,x)],y.p),C.N,x,C.u,C.Y,0)}}
B.aff.prototype={
t(d){var x,w,v,u,t=null,s=this.c,r=s!=null,q=r?E.Hn:C.ce,p=this.d,o=p?4:6,n=p?12:14
p=r?"Enviar mensagem no WhatsApp":"Telefone n\xe3o cadastrado"
x=A.aC(10)
w=q.U(0.1)
v=A.aC(10)
u=A.ew(q.U(0.3),-1,C.V,1)
return A.jb(A.fO(!1,C.ak,!0,t,A.cW(!1,x,!0,A.al(t,F.ctr(E.JK,q,n),C.B,t,t,new A.an(w,t,u,v,t,t,C.O),t,t,t,t,new A.aA(o,o,o,o),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t),C.B,C.W,0,t,t,t,t,t,C.cm),t,t,t,p,t,t,t,t,t,t,t,t)}}
B.a5c.prototype={
t(d){var x=this.d
return A.cX(new B.bAW(this,this.c||x==null,x))}}
B.azW.prototype={
t(d){var x=this,w=null,v=x.b_A(),u=x.c,t=u.e,s=t.U(0.15),r=A.aC(10),q=A.ew(t,-1,C.V,1),p=y.p,o=A.a([A.bW(x.b_B(),w,w,t,w,w,w,w,w,w,w,v.c,w,w)],p),n=x.d
n=n===D.a92||n===D.DB?4:6
C.e.E(o,A.a([new A.ai(n,w,w,w),new A.c5(1,C.ah,A.P(u.d,1,C.P,w,!1,A.bA(w,w,t,w,w,w,w,w,w,w,w,v.b,w,w,C.b2,w,w,!0,w,w,w,w,w,w,w,w),w,w),w)],p))
return A.al(w,A.a3(o,C.v,C.u,C.Y,0),C.B,w,w,new A.an(s,w,q,r,w,w,C.O),w,w,w,w,v.a,w,w,w)},
b_B(){switch(this.c.a){case 0:return G.zx
case 1:return D.ay_
case 2:return D.ay1
case 3:return D.axK
case 4:return D.axi}},
b_A(){switch(this.d.a){case 0:return E.a7v
case 1:return D.bVX
case 2:return D.bVW
case 3:return E.a7u}}}
B.a7L.prototype={
F(){return"StatusBadgeSize."+this.b}}
B.Sp.prototype={
ac(){return new B.Sq(this.$ti.h("Sq<1>"))},
bsu(d){return this.c.$1(d)}}
B.Sq.prototype={
d_(){this.f0()
this.aqB()},
aqB(){var x,w,v,u,t=this,s=t.c
if(s!=null){t.f=A.avJ(s)
v=t.c.gaG()
if(v instanceof A.X)t.r=v
try{s=t.c
s.toString
t.a.toString
x=A.jA(s,!1)
s=x.d
s===$&&A.b()
s=s.gak()
w=s==null?null:s.c.gaG()
if(w instanceof A.X)t.w=w}catch(u){t.w=t.r=null}}},
ajF(d){var x=this.e
return x==null?A.cx_(C.bE,new A.W(A.a4(1/0,d.a,d.b),A.a4(1/0,d.c,d.d))):x},
b9V(d,e){var x,w,v,u,t,s=this
if(s.c==null)return s.ajF(e)
s.f===$&&A.b()
x=s.r
w=s.w
if(x==null||w==null||x.y==null||w.y==null)return s.ajF(e)
s.a.toString
v=A.aP()
switch(0){case 0:v.b=s.a.CW
break}u=v.ah()
u=A.d9(x.ci(w),u)
t=x.gH().KS(C.M).ag(0,v.ah())
t=A.mp(u,A.d9(x.ci(w),t))
u=w.gH()
return s.e=A.cUA(t,new A.Z(0,0,0+u.a,0+u.b))},
aJ_(){var x,w,v,u=this,t=null
u.aqB()
x=u.a
x.toString
w=u.c
w.toString
v=x.bsu(w)
if(J.lr(v)){x=u.a
x.toString
u.d=!0
w=u.c
w.toString
A.cDY(C.B,x.db,t,w,t,t,v,t,t,t,u.gb9U(),t,t,t,x.cy,t,!1,u.$ti.h("1?")).bc(new B.bxP(u),y.H)}},
gb9T(){var x,w=this.c
w.toString
w=A.cY(w,C.ml)
x=w==null?null:w.CW
switch((x==null?C.kb:x).a){case 0:w=this.a.cx
break
case 1:w=!0
break
default:w=null}return w},
t(d){var x,w,v,u=this,t=null
A.QF(d)
A.avJ(d)
u.a.toString
A.avJ(d)
x=u.a
w=x.w
x=x.cx?u.gaIZ():t
v=A.jb(A.cW(!1,t,u.gb9T(),u.a.ax,t,!0,t,t,t,t,t,t,t,t,t,x,t,t,t,t,t),t,t,t,w,t,t,t,t,t,t,t,t)
return A.cu(t,t,t,v,!1,t,t,!1,u.d,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.aj,t)}}
B.an8.prototype={
t(d){var x=null,w=this.w
return new A.ld(x,16,A.crH(A.Pw(x,x,x,A.aiR(new A.YK(C.xw,new A.Hd(this.d,w,C.xy),C.xw,C.xw),x,x),w,new A.qh(0,0,0,0),x)))}}
B.awb.prototype={}
B.aYD.prototype={
k(d){var x,w,v,u=this,t="BorderRadius.only(",s=u.a,r=u.b
if(s===r){x=u.c
x=r===x&&x===u.d}else x=!1
if(x)if(s!==D.ow){r=s.a
w=r===s.b?"BorderRadius.circular("+C.f.a3(r,1)+")":"BorderRadius.all("+s.k(0)+")"}else w=null
else{v=s!==D.ow
s=v?t+("topLeft: "+s.k(0)):t
if(r!==D.ow){if(v)s+=", "
r=s+("topRight: "+r.k(0))
s=r
v=!0}r=u.c
if(r!==D.ow){if(v)s+=", "
r=s+("bottomLeft: "+r.k(0))
s=r
v=!0}r=u.d
if(r!==D.ow){if(v)s+=", "
r=s+("bottomRight: "+r.k(0))
s=r}s+=")"
w=s.charCodeAt(0)==0?s:s}if(w!=null)return w
return"BorderRadius.zero"}}
B.aYC.prototype={
b1(d,e){var x,w,v,u,t=this,s=d.b,r=e.a,q=e.b,p=t.c,o=p.b,n=q+o
s.oA(r,n)
p=p.a
s.z1(r,q-0.551784*o+o,r-0.551784*p+p,q,r+p,q)
p=e.c
o=r+p
x=t.d
w=x.a
s.n4(o-w,q)
x=x.b
s.z1(r+0.551784*w+p-w,q,o,q-0.551784*x+x,o,q+x)
x=e.d
w=q+x
v=t.b
u=v.b
s.n4(o,w-u)
v=v.a
s.z1(o,q+0.551784*u+x-u,r+0.551784*v+p-v,w,o-v,w)
v=t.a
o=v.a
s.n4(r+o,w)
v=v.b
s.z1(r-0.551784*o+o,w,r,q+0.551784*v+x-v,r,w-v)
s.n4(r,n)},
az(d){return this}}
B.aia.prototype={
F(){return"Axis."+this.b}}
B.bnu.prototype={
F(){return"MainAxisSize."+this.b}}
B.aBm.prototype={
F(){return"VerticalDirection."+this.b}}
B.a0r.prototype={
fp(d){this.a=d.a
this.b=d.b},
cr(){var x=new B.a0r()
x.a=this.a
x.b=this.b
return x},
k(d){return A.U(this).k(0)+" first:"+this.a+" last:"+this.b}}
B.aoi.prototype={
a1A(d){switch(this.d.a){case 0:return d.a.d
case 1:return d.a.c}},
a1B(d){switch(this.d.a){case 0:return d.a.c
case 1:return d.a.d}},
fv(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.d,a9=a8===D.xo?b4.b:b4.d,b0=a9<1/0,b1=a6.x,b2=b1.a
for(x=a6.b,w=C.e.h4(x,b2),v=w.length,u=a8===D.pw,t=a8.a,s=a6.r,r=s===C.ao2,q=b4.b,p=b4.d,o=0,n=0,m=0,l=0;l<w.length;w.length===v||(0,A.N)(w),++l){k=w[l]
j=a7
if(r)switch(t){case 0:j=new A.iR(0,1/0,p,p)
break
case 1:j=new A.iR(q,q,0,1/0)
break}else switch(t){case 0:j=new A.iR(0,1/0,0,p)
break
case 1:j=new A.iR(0,q,0,1/0)
break}k.fv(b3,j,!0)
m+=a6.a1B(k)
n=Math.max(n,a6.a1A(k))
if(u&&m>p)break;++b2}b1.b=b2
i=b2-b1.a
Math.max(0,(b0?a9:0)-m)
h=b0&&a6.f===D.Bu?a9:m
g=A.aP()
switch(t){case 0:g.b=b4.c5(new A.fv(h,n))
f=g.ah().a
n=g.ah().b
break
case 1:g.b=b4.c5(new A.fv(n,h))
f=g.ah().b
n=g.ah().a
break
default:f=a7}w=g.ah()
a6.a=new A.ht(0,0,w.a,w.b)
e=Math.max(0,f-m)
d=A.aP()
a0=A.PR(b3)
w=a6.w
v=a6.apA(a8,a0,w)
a1=v===!1
a2=0
switch(a6.e.a){case 0:d.b=0
break
case 1:d.b=0
a2=e
break
case 2:a2=e/2
d.b=0
break
case 3:d.b=i>1?e/(i-1):0
break
case 4:d.b=i>0?e/i:0
a2=d.ah()/2
break
case 5:d.b=i>0?e/(i+1):0
a2=d.ah()
break
default:a2=a7}a3=a1?f-a2:a2
for(b1=C.e.cv(x,b1.a,b1.b),x=b1.length,v=s.a,u=n/2,s=s===C.yq,r=d.a,l=0;l<x;++l){k=b1[l]
switch(v){case 0:case 1:a4=a6.apA(a6.bpO(a8),a0,w)===s?0:n-a6.a1A(k)
break
case 2:a4=u-a6.a1A(k)/2
break
case 3:a4=0
break
default:a4=a7}if(a1)a3-=a6.a1B(k)
switch(t){case 0:q=a6.a
p=q.a
q=q.b
a5=k.a
k.a=new A.ht(p+a3,q+a4,a5.c,a5.d)
break
case 1:q=k.a
k.a=new A.ht(a4,a3,q.c,q.d)
break}if(a1){q=d.b
if(q===d)A.a5(A.pd(r))
a3-=q}else{q=a6.a1B(k)
p=d.b
if(p===d)A.a5(A.pd(r))
a3+=q+p}}},
hz(d,e){return this.fv(d,e,!1)},
bpO(d){switch(d.a){case 0:return D.pw
case 1:return D.xo}},
apA(d,e,f){switch(d.a){case 0:switch(e){case C.a9u:return!0
case C.DV:return!1
case null:case void 0:return null}break
case 1:switch(f){case D.Ez:return!1
case D.c99:return!0
case null:case void 0:return null}break}},
jj(d){var x,w,v,u,t,s=this
s.rs(d)
x=new A.bX(new Float64Array(16))
x.e0()
w=s.a
x.ec(w.a,w.b,0,1)
w=d.b
w.jI()
w.Au(x)
for(v=s.x,v=C.e.cv(s.b,v.a,v.b),u=v.length,t=0;t<v.length;v.length===u||(0,A.N)(v),++t)v[t].jj(d)
w.xn()},
guf(){return this.d===D.pw},
gCm(){return!0},
CY(d){this.x.a=d.b},
jI(){return this.x}}
B.axM.prototype={}
B.Po.prototype={}
B.aHO.prototype={}
B.atS.prototype={}
var z=a.updateTypes(["Q<~>()","Q<~>(k)","ah(Ah)","~(iS?)","~(my)","~(m7)","tO?(@)","DF(@)","ae<c,I>(nk)","nk(@)","Q<~>(c)","ah(tO)","Q<Ah>()","c(iS)","Q<tO>()","kU(DF)","B<uH<m7>>(T)","uH<m7>(m7)","ej<iS?>(iS)","ej<my>(my)","~(my?)","fL(j9)","VH(nk)","MZ(nk)","Po(nN)","B<c>(ar<k,nk>)","F1(T,av)","~()"])
B.bTx.prototype={
$1(d){y.P.a(d)
return new B.DF(A.b1(d.i(0,"descricao")),A.bP(d.i(0,"valor")))},
$S:z+7}
B.bAI.prototype={
$1(d){var x,w,v="pt_BR",u=B.xi(d.b),t=A.bt(v).ai(d.d),s=A.bt(v).ai(d.e),r=A.bt(v).ai(d.f),q=B.cx2(d.z),p=B.xi(d.Q),o=d.at
if(o==null)o="-"
x=d.ay
if(x==null)x="-"
w=d.CW
if(w==null)w="-"
return A.A(["codigo",d.a,"dataGeracao",u,"cliente",d.r,"cpf",d.w,"valorGerado",t,"valorResgatado",s,"valorLiquido",r,"status",d.y.d,"dataResgate",q,"dataExpiracao",p,"campanha",o,"vendedor",x,"documento",w],y.N,y.K)},
$S:z+8}
B.bTI.prototype={
$1(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
y.P.a(a3)
x=A.bg(a3.i(0,"cashbackId"))
x=x==null?a2:C.i.D(x)
if(x==null)x=0
w=A.aW(a3.i(0,"dataGeracao"))
if(w==null)w="-"
v=A.aW(a3.i(0,"dataReferencia"))
if(v==null)v="-"
u=A.bg(a3.i(0,"valorCashback"))
if(u==null)u=a2
if(u==null)u=0
t=A.bg(a3.i(0,"valorResgatado"))
if(t==null)t=a2
if(t==null)t=0
s=A.bg(a3.i(0,"valorLiquido"))
if(s==null)s=a2
if(s==null)s=0
r=A.aW(a3.i(0,"nomeCliente"))
if(r==null)r="Cliente n\xe3o informado"
q=A.aW(a3.i(0,"codigoCliente"))
if(q==null)q="-"
p=A.aW(a3.i(0,"telefone"))
o=B.cUC(a3.i(0,"status"))
n=A.aW(a3.i(0,"dataResgate"))
m=A.aW(a3.i(0,"dataExpiracao"))
if(m==null)m="-"
l=A.aW(a3.i(0,"dataAtivacao"))
k=A.aW(a3.i(0,"campanha"))
j=A.bg(a3.i(0,"campanhaId"))
j=j==null?a2:C.i.D(j)
i=A.aW(a3.i(0,"vendedor"))
h=A.aW(a3.i(0,"vendedorResgate"))
g=A.aW(a3.i(0,"documentoFiscal"))
f=A.aW(a3.i(0,"documentoResgate"))
e=A.aW(a3.i(0,"codigoEmpresa"))
d=A.aW(a3.i(0,"nomeEmpresa"))
a0=A.bg(a3.i(0,"valorVendaResgate"))
if(a0==null)a0=a2
a1=A.bg(a3.i(0,"percentualRepresentatividade"))
return new B.nk(x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1==null?a2:a1)},
$S:z+9}
B.bA_.prototype={
$1(d){var x=this.a,w=x.p4
w.sj(w.gj().blz(d.b,d.a,1))
x.l4()},
$S:93}
B.bA0.prototype={
$1(d){return this.a.l4()},
$S:267}
B.bA3.prototype={
$1(d){var x=this.a
x.ok.sj(D.a7w)
x.p2.sj(d)},
$S:2}
B.bA4.prototype={
$1(d){var x,w,v=this.a
v.p1.sj(d)
v.p3.sj(!0)
x=d.a
w=x.length===0?D.bW2:D.ox
v.ok.sj(w)
v.aYs(x)},
$S:z+2}
B.bA1.prototype={
$1(d){var x,w=this.a.y1,v=d.k(0)
v=A.bV(v,"Exception: ","")
x=w.bI$
x===$&&A.b()
J.cD(x,this.b,v)
v=w.cb$
w=w.gj()
v.r=w
v.cq(w)},
$S:2}
B.bA2.prototype={
$1(d){var x=this.a.xr,w=x.bI$
w===$&&A.b()
J.cD(w,this.b,d)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)},
$S:z+11}
B.bzY.prototype={
$1(d){return A.a5(d)},
$S:1463}
B.bzZ.prototype={
$1(d){C.e.E(this.b,d.a)
this.a.a=d.c.b},
$S:z+2}
B.bAg.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=$.d
if(e==null)e=$.d=C.q
x=A.r(f).h("ab.T")
w=e.q(g,x).ok.gj()
e=$.d
v=(e==null?$.d=C.q:e).q(g,x).gZ_()
e=$.d
e=(e==null?$.d=C.q:e).q(g,x)
u=e.ok.gj()===D.ox&&e.gGq().length!==0
e=$.d
e=(e==null?$.d=C.q:e).q(g,x).x1.gj()
e.gB(e)
e=$.d
e=(e==null?$.d=C.q:e).q(g,x).RG.gj()
t=$.d
t=(t==null?$.d=C.q:t).q(g,x).rx.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(g,x).to
r=$.d
r=(r==null?$.d=C.q:r).q(g,x).ry.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).ok.gj()
p=$.d
e=B.cx1(s,(p==null?$.d=C.q:p).q(g,x).y2.gj(),q===D.kl,new B.bA5(f),new B.bA6(f),new B.bA7(f),new B.bA8(f),t,e,r)
t=$.d
t=(t==null?$.d=C.q:t).q(g,x).ok.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(g,x)
s.toString
r=A.ew(C.R.U(0.1),-1,C.V,1)
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).p2.gj()
q=q==null?g:q.k(0)
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).p4.gj().gGf()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).gv3()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).gyV()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gGq()
l=$.d
l=(l==null?$.d=C.q:l).q(g,x).aT.gj()
k=$.d
k=(k==null?$.d=C.q:k).q(g,x).R8.gj()
j=$.d
j=(j==null?$.d=C.q:j).q(g,x).gIl()
i=$.d
h=y.p
k=A.a([B.cx0(q,p,n,o,w,B.cx4((i==null?$.d=C.q:i).q(g,x).aQ.gj(),new B.bA9(f),new B.bAa(f),l,new B.bAb(f),new B.bAc(f),m,new B.bAd(),new B.bAe(f),j,new B.bAf(f),k))],h)
if(u){f=$.d
f=(f==null?$.d=C.q:f).q(g,x).gBZ()
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).gxu()
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).gNz()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).p4.gj()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).ok.gj()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gHZ()
l=$.d
k.push(B.cx3(f,n===D.kl,!1,m,(l==null?$.d=C.q:l).q(g,x).gL_(),o.at,q,p))}return A.V(A.a([new A.cx(C.Fb,g,g,e,g),new A.ai(g,150,new B.a5c(t===D.kl,v,s,!0,g),g),A.al(g,A.V(k,C.bG,g,C.u,C.t,20),C.B,g,g,new A.an(g,g,r,C.ie,g,g,C.O),g,g,g,g,g,g,g,g),C.da],h),C.bG,g,C.u,C.t,20)},
$S:32}
B.bA7.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LR(d)},
$S:z+3}
B.bA5.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Ga(d)},
$S:120}
B.bA8.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LS(d)},
$S:z+4}
B.bA6.prototype={
$1(d){var x
switch(d.a){case 0:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).FY()
break
case 1:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).FZ()
break}},
$S:z+5}
B.bAb.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x1.gj().p(0,d)},
$S:88}
B.bAf.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).Nw(d)},
$S:34}
B.bAc.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x2.gj().p(0,d)},
$S:88}
B.bAa.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).y1
return x.gj().i(0,x.$ti.c.a(d))},
$S:508}
B.bA9.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).xr
return x.gj().i(0,x.$ti.c.a(d))},
$S:z+6}
B.bAe.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).Ni(d)},
$S:34}
B.bAd.prototype={
$1(d){return this.aCt(d)},
aCt(d){var x=0,w=A.p(y.H),v
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=A.co(d,0,null)
x=4
return A.f(F.aSt(v),$async$$1)
case 4:x=f?2:3
break
case 2:x=5
return A.f(F.aSL(v,E.zQ),$async$$1)
case 5:case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:509}
B.bAs.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=$.d
if(e==null)e=$.d=C.q
x=A.r(f).h("ab.T")
w=e.q(g,x).ok.gj()
e=$.d
v=(e==null?$.d=C.q:e).q(g,x).gZ_()
e=$.d
e=(e==null?$.d=C.q:e).q(g,x)
u=e.ok.gj()===D.ox&&e.gGq().length!==0
e=$.d
e=(e==null?$.d=C.q:e).q(g,x).x1.gj()
e.gB(e)
e=$.d
e=(e==null?$.d=C.q:e).q(g,x).RG.gj()
t=$.d
t=(t==null?$.d=C.q:t).q(g,x).rx.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(g,x).to
r=$.d
r=(r==null?$.d=C.q:r).q(g,x).ry.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).ok.gj()
p=$.d
e=B.cx1(s,(p==null?$.d=C.q:p).q(g,x).y2.gj(),q===D.kl,new B.bAh(f),new B.bAi(f),new B.bAj(f),new B.bAk(f),t,e,r)
t=$.d
t=(t==null?$.d=C.q:t).q(g,x).ok.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(g,x)
s.toString
r=A.ew(C.R.U(0.1),-1,C.V,1)
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).p2.gj()
q=q==null?g:q.k(0)
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).p4.gj().gGf()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).gv3()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).gyV()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gGq()
l=$.d
l=(l==null?$.d=C.q:l).q(g,x).aT.gj()
k=$.d
k=(k==null?$.d=C.q:k).q(g,x).R8.gj()
j=$.d
j=(j==null?$.d=C.q:j).q(g,x).gIl()
i=$.d
h=y.p
k=A.a([B.cx0(q,p,n,o,w,B.cx4((i==null?$.d=C.q:i).q(g,x).aQ.gj(),new B.bAl(f),new B.bAm(f),l,new B.bAn(f),new B.bAo(f),m,new B.bAp(),new B.bAq(f),j,new B.bAr(f),k))],h)
if(u){f=$.d
f=(f==null?$.d=C.q:f).q(g,x).gBZ()
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).gxu()
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).gNz()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).p4.gj()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).ok.gj()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gHZ()
l=$.d
k.push(B.cx3(f,n===D.kl,!0,m,(l==null?$.d=C.q:l).q(g,x).gL_(),o.at,q,p))}k.push(C.da)
return A.V(A.a([e,new A.ai(1/0,150,new B.a5c(t===D.kl,v,s,!1,g),g),A.al(g,A.V(k,C.bG,g,C.u,C.t,20),C.B,g,g,new A.an(g,g,r,C.ie,g,g,C.O),g,g,g,g,g,g,g,g)],h),C.bG,g,C.u,C.t,20)},
$S:32}
B.bAj.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LR(d)},
$S:z+3}
B.bAh.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Ga(d)},
$S:120}
B.bAk.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LS(d)},
$S:z+4}
B.bAi.prototype={
$1(d){var x
switch(d.a){case 0:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).FY()
break
case 1:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).FZ()
break}},
$S:z+5}
B.bAn.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x1.gj().p(0,d)},
$S:88}
B.bAr.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).Nw(d)},
$S:34}
B.bAo.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x2.gj().p(0,d)},
$S:88}
B.bAm.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).y1
return x.gj().i(0,x.$ti.c.a(d))},
$S:508}
B.bAl.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).xr
return x.gj().i(0,x.$ti.c.a(d))},
$S:z+6}
B.bAq.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).Ni(d)},
$S:34}
B.bAp.prototype={
$1(d){return this.aCu(d)},
aCu(d){var x=0,w=A.p(y.H),v
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=A.co(d,0,null)
x=4
return A.f(F.aSt(v),$async$$1)
case 4:x=f?2:3
break
case 2:x=5
return A.f(F.aSL(v,E.zQ),$async$$1)
case 5:case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:509}
B.bAx.prototype={
$0(){var x=this.b,w=x.c
w=w==null?null:new A.G(w,new B.bAw(),A.R(w).h("G<1,c>")).c8(0,",")
return this.a.a.Pc(x.z,x.r,x.d,x.f,x.e,x.Q,x.as,x.at,w,x.y.c,x.x,x.w)},
$S:z+12}
B.bAw.prototype={
$1(d){return d.c},
$S:z+13}
B.bAv.prototype={
$0(){return this.a.a.vl(this.b)},
$S:z+14}
B.c6A.prototype={
$2(d,e){return e==null},
$S:20}
B.bZW.prototype={
$1(d){var x,w,v=null,u=this.a.ax,t=u.d
t=(t==null?u.b:t).U(0.3)
x=A.aC(10)
u=u.b
w=A.ew(u.U(0.2),-1,C.V,1)
return A.al(v,A.a3(A.a([A.bW(D.axW,v,v,u,v,v,v,v,v,v,v,14,v,v),A.fe(d.a+": ",v,!1,2,C.P,v),A.fe(A.bt("pt_BR").ai(d.b),v,!0,v,C.P,v)],y.p),C.v,C.u,C.Y,8),C.B,v,v,new A.an(t,v,w,x,v,v,C.O),v,v,v,v,C.yK,v,v,v)},
$S:z+15}
B.bc8.prototype={
$1(d){var x=y.M
x=A.F(new A.G(D.bjW,new B.bc7(),x),x.h("a2.E"))
return x},
$S:z+16}
B.bc7.prototype={
$1(d){return A.clj(new B.aHs(d,null),null,d,y.W)},
$S:z+17}
B.bAG.prototype={
$1(d){var x=null
return A.z9(A.a3(A.a([A.al(x,x,C.B,x,x,new A.an(d.e,x,x,x,x,x,C.bl),x,8,x,x,x,x,x,8),C.fo,A.P(d.d,x,x,x,x,x,x,x)],y.p),C.v,C.u,C.Y,0),d,y.i)},
$S:z+18}
B.bAH.prototype={
$1(d){var x=null
return A.z9(A.P(d,x,C.P,x,x,x,x,x),d,y.T)},
$S:1466}
B.cc1.prototype={
$1(d){var x=null
return A.z9(A.P(d.d,x,x,x,x,x,x,x),d,y.a)},
$S:z+19}
B.cc2.prototype={
$1(d){if(d!=null)this.a.e.$1(d)},
$S:z+20}
B.cc3.prototype={
$0(){return this.a.e.$1(D.m7)},
$S:0}
B.bY3.prototype={
$0(){return this.a.r.$1(null)},
$S:0}
B.bAM.prototype={
$1(d){var x,w=null,v=this.a,u=v.e,t=d.b,s=u.a==t,r=this.b,q=d.a,p=r.ok
if(t!=null){t=A.aC(4)
p=p.at
if(p==null)p=w
else p=p.jx(s?r.ax.b:w,C.ad)
x=y.p
p=A.a([new A.c5(1,C.ah,A.P(q,w,C.P,w,w,p,w,w),w)],x)
if(s){u=u.b===E.j0?L.qS:L.qR
C.e.E(p,A.a([C.e8,A.bW(u,w,w,r.ax.b,w,w,w,w,w,w,w,14,w,w)],x))}v=A.fO(!1,C.ak,!0,w,A.cW(!1,t,!0,new A.aD(C.h9,A.a3(p,C.v,C.u,C.Y,0),w),w,!0,w,w,w,w,w,w,w,w,w,new B.bAL(v,d),w,w,w,w,w),C.B,C.W,0,w,w,w,w,w,C.cm)}else{v=p.at
v=new A.aD(C.h9,A.P(q,w,w,w,w,v==null?w:v.ie(C.ad),w,w),w)}return A.aj(v,d.c)},
$S:z+21}
B.bAL.prototype={
$0(){var x=this.b.b
x.toString
return this.a.f.$1(x)},
$S:0}
B.bAN.prototype={
$1(d){var x,w=this.a,v=w.r.$1(d.a),u=w.as
if(u){x=d.x
x=x!=null&&x.length!==0}else x=!1
x=x?new B.bAJ(w,d):null
return new B.VH(d,u,x,w.d,v,new B.bAK(w,d),w.x,w.y,w.z,w.Q,null)},
$S:z+22}
B.bAK.prototype={
$0(){return this.a.w.$1(this.b.a)},
$S:0}
B.bAJ.prototype={
$0(){return this.a.at.$1(this.b.gNS())},
$S:0}
B.bAQ.prototype={
$1(d){var x,w=this.a,v=w.r.$1(d.a),u=w.as
if(u){x=d.x
x=x!=null&&x.length!==0}else x=!1
x=x?new B.bAO(w,d):null
return new B.MZ(d,u,x,v,new B.bAP(w,d),w.x,w.y,w.z,w.Q,null)},
$S:z+23}
B.bAP.prototype={
$0(){return this.a.w.$1(this.b.a)},
$S:0}
B.bAO.prototype={
$0(){return this.a.at.$1(this.b.gNS())},
$S:0}
B.c_S.prototype={
$0(){var x=this.a,w=x.c.a,v=x.x.$1(w),u=x.y.$1(w),t=x.z.$1(w)
if(v)return D.GL
if(u!=null)return new B.Ze(u,new B.c_R(x),null)
if(t!=null)return new B.Zd(t,null)
return C.aP},
$S:36}
B.c_R.prototype={
$0(){var x=this.a
return x.Q.$1(x.c.a)},
$S:0}
B.c_P.prototype={
$2(d,e){var x=null,w=(e.b-16)/2,v=this.a.c,u=A.a([new A.ai(w,x,new B.Ge("Valor",A.bt("pt_BR").ai(v.d),this.b.ax.b,x),x),new A.ai(w,x,new B.Ge("Gera\xe7\xe3o",B.xi(v.c),x,x),x),new A.ai(w,x,new B.Ge("Expira\xe7\xe3o",B.xi(v.Q),x,x),x)],y.p)
if(v.y===D.mG)u.push(new A.ai(w,x,new B.Ge("% Representatividade",v.gaA1(),K.pQ,x),x))
v=v.at
if(v!=null)u.push(new A.ai(w,x,new B.Ge("Campanha",v,x,x),x))
return A.h1(C.bO,u,C.c3,C.aq,8,16)},
$S:109}
B.c_Q.prototype={
$0(){var x=this.a,w=x.c.a,v=x.w.$1(w),u=x.x.$1(w),t=x.y.$1(w)
if(v)return D.GL
if(u!=null)return new B.Ze(u,new B.c_O(x),null)
if(t!=null)return new B.Zd(t,null)
return C.aP},
$S:36}
B.c_O.prototype={
$0(){var x=this.a
return x.z.$1(x.c.a)},
$S:0}
B.bAW.prototype={
$2(d,e){var x,w=e.b
if(w<600)x=0.6
else if(w<800)x=0.4
else{w=w<1000?0.3:0.2
x=w}return new A.aO(new B.bAV(this.a,this.b,this.c,e,x,d),null)},
$S:99}
B.bAV.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.b
if(i)x=0
else x=k.c.a
w=k.a
v=w.f
x=A.kp(j,j,!1,!1,j,j,"Total de registros retornados no relat\xf3rio no per\xedodo selecionado.",!1,v,i,j,"Total Registros",0,x,200)
if(i)u=0
else u=k.c.e
u=A.kp(j,j,!1,!1,j,j,"Quantidade de clientes \xfanicos presentes no relat\xf3rio.",!1,v,i,j,"Clientes \xdanicos",0,u,200)
if(i)t=0
else t=k.c.b
t=A.mR(j,!1,!1,j,j,"Valor total de cashback gerado no per\xedodo.",!1,!1,v,i,!0,!1,"Valor Gerado",0,t,200)
if(i)s=0
else s=k.c.c
s=A.mR(j,!1,!1,j,j,"Valor de cashback ainda ativo (n\xe3o expirado / n\xe3o utilizado).",!1,!1,v,i,!0,!1,"Valor L\xedquido",0,s,200)
if(i)r=0
else r=k.c.d
r=A.mR(j,!1,!1,j,j,"Valor total de cashback utilizado pelos clientes.",!1,!1,v,i,!0,!1,"Valor Resgatado",0,r,200)
if(i)q=0
else q=k.c.gYL()
q=A.Hl(j,!1,!1,j,j,"Percentual do valor gerado que foi efetivamente resgatado.",!1,v,i,"% Resgate em Valor",0,q,200)
if(i)p=0
else p=k.c.f
o=y.p
n=A.a([x,u,t,s,r,q,A.Hl(j,!1,!1,j,j,"M\xe9dia de representatividade do cashback nos resgates.",!1,v,i,"% Representatividade",0,p,200)],o)
p=w.e
i=k.d.d
v=p.Z
q=v.gj()
q=A.OK(!0,0.65,p.R.gj(),C.bh,!0,!0,!1,i*0.8,q,new B.bAS(w),!0,!0,!0,C.f9,k.e)
r=y.E
x=A.F(new A.G(n,new B.bAT(),r),r.h("a2.E"))
x=A.aj(A.Z9(p.v,x,q),1)
m=J.cw(7,y.F)
for(i*=0.05,u=k.f,l=0;l<7;++l){t=A.E(u)
s=$.pB
if(s!=null)s.al(v.cb$)
s=v.bI$
s===$&&A.b()
s=J.u(s,l)?0.9:0.4
m[l]=A.f8(j,A.al(j,j,C.B,j,j,new A.an(t.ax.b.U(s),j,j,j,j,j,C.bl),j,i,j,C.h9,j,j,j,i),C.aG,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new B.bAU(w,l),j,j,j,j,j,j)}i=A.a(m.slice(0),A.R(m))
return A.V(A.a([x,A.a3(i,C.v,C.aL,C.t,0)],o),C.v,j,C.u,C.t,0)},
$S:32}
B.bAS.prototype={
$2(d,e){this.a.e.Z.sj(d)},
$S:91}
B.bAT.prototype={
$1(d){return new A.aD(C.eS,d,null)},
$S:268}
B.bAU.prototype={
$0(){return this.a.e.v.wv(this.b)},
$S:0}
B.bAE.prototype={
$1(d){var x,w,v=this,u=null,t=A.on("Relat\xf3rio Detalhado de Cashback",v.a,u,u),s=d.d.d
s===$&&A.b()
x=d.a
x.toString
w=y.n
return B.ciS(A.a([B.clH(A.a([t,A.on("P\xe1gina "+(C.e.bL(s.cx.cx,x)+1)+"/"+s.cx.cx.length,D.E4,u,u)],w),C.a0E),new A.ld(u,4,u),B.clH(A.a([A.on("Per\xedodo: "+v.b+" a "+v.c,D.E4,u,u),A.on("Gerado em: "+v.d,D.E4,u,u)],w),C.a0E),new A.ld(u,10,u),new B.an8(v.e,2),new A.ld(u,10,u)],w),C.yq)},
$S:z+24}
B.bAD.prototype={
$1(d){var x=null
return A.Pw(D.x0,A.on("BShop Gest\xe3o - Relat\xf3rio de Cashback",D.c2I,x,x),x,x,x,D.aq5,x)},
$S:1467}
B.bAC.prototype={
$1(d){var x,w,v,u,t,s,r,q=this,p=null,o="pt_BR",n=y.n,m=A.a([],n),l=q.a
if(l!=null){x=new B.awb(8,8)
x=A.aiR(p,new B.aYC(x,x,x,x),q.b)
w=A.on("Resumo do Per\xedodo",A.AU(p,q.c,p,p,p,p,p,p,p,C.ez,p,p,12,p,C.ha,p,!0,p,p,p,p),p,p)
v=B.a5b("Total Registros",C.f.k(l.a))
u=B.a5b("Clientes \xdanicos",C.f.k(l.e))
t=l.b
t=B.a5b("Valor Gerado",A.bt(o).ai(t))
s=l.c
s=B.a5b("Valor Ativo",A.bt(o).ai(s))
r=l.d
C.e.E(m,A.a([A.Pw(p,B.ciS(A.a([w,new A.ld(p,8,p),B.clH(A.a([v,u,t,s,B.a5b("Valor Utilizado",A.bt(o).ai(r)),B.a5b("Taxa Utiliza\xe7\xe3o",C.i.a3(l.gYL(),1)+"%")],n),C.byo)],n),C.yq),p,x,p,p,D.aql),new A.ld(p,15,p)],n))}n=A.aiR(p,p,q.b)
l=y.S
m.push(B.cWJ(A.A([0,D.mr,1,D.mr,2,D.mr,3,D.x0,4,D.x0,5,C.ph,6,D.mr,7,D.mr],l,y.D),20,D.c3T,A.A([0,D.nf,1,D.aw6,2,D.nf,3,D.nf,4,D.nf,5,C.Jr,6,D.nf,7,D.aw5],l,y.bA),d,J.cLb(q.e).ghe().eB(0,new B.bAB(),y.h).cV(0),n,25,q.d,["Data","Cliente","C\xf3digo","Valor","Valor L\xedquido","Status","Expira\xe7\xe3o","Campanha"],A.aiR(p,p,q.f)))
return m},
$S:441}
B.bAB.prototype={
$1(d){var x=d.b,w=B.xi(x.b),v=A.bt("pt_BR").ai(x.d),u=A.bt("pt_BR").ai(x.f),t=B.xi(x.Q),s=x.at
if(s==null)s="-"
return A.a([w,x.r,x.w,v,u,x.y.d,t,s],y.s)},
$S:z+25}
B.bAF.prototype={
$1(d){return this.a.ku()},
$S:211}
B.bxP.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)
x.d=!1},
$S(){return this.a.$ti.h("ah(1?)")}};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a._instance_2u
var u
x(u=B.xh.prototype,"gv3","nY",0)
w(u,"gL_","wF",1)
x(u,"gyV","rR",0)
w(u,"gHZ","vO",1)
w(u,"gIl","DE",10)
v(u=B.Sq.prototype,"gb9U","b9V",26)
x(u,"gaIZ","aJ_",27)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.I,[B.tO,B.b8n,B.b8o,B.b8p,B.DF,B.ST,B.nk,B.Ah,B.bAR,B.c6z,B.awb,B.aYD])
w(A.hn,[B.bTx,B.bAI,B.bTI,B.bA_,B.bA0,B.bA3,B.bA4,B.bA1,B.bA2,B.bzY,B.bzZ,B.bA7,B.bA5,B.bA8,B.bA6,B.bAb,B.bAf,B.bAc,B.bAa,B.bA9,B.bAe,B.bAd,B.bAj,B.bAh,B.bAk,B.bAi,B.bAn,B.bAr,B.bAo,B.bAm,B.bAl,B.bAq,B.bAp,B.bAw,B.bZW,B.bc8,B.bc7,B.bAG,B.bAH,B.cc1,B.cc2,B.bAM,B.bAN,B.bAQ,B.bAT,B.bAE,B.bAD,B.bAC,B.bAB,B.bAF,B.bxP])
w(A.li,[B.iS,B.my,B.F2,B.m7,B.a7L,B.aia,B.bnu,B.aBm])
v(B.bzX,A.rj)
v(B.bAt,A.vX)
v(B.xh,A.ls)
v(B.L7,A.mQ)
w(A.ie,[B.bAg,B.bAs,B.bAx,B.bAv,B.cc3,B.bY3,B.bAL,B.bAK,B.bAJ,B.bAP,B.bAO,B.c_S,B.c_R,B.c_Q,B.c_O,B.bAV,B.bAU])
v(B.bAu,A.oN)
w(A.iB,[B.c6A,B.c_P,B.bAW,B.bAS])
w(A.H,[B.Zd,B.ab1,B.VY,B.NA,B.ajj,B.Ze,B.anL,B.aHr,B.aHs,B.awt,B.awu,B.awv,B.aww,B.aPk,B.aaw,B.awx,B.awy,B.awz,B.VH,B.MZ,B.Ge,B.aff,B.a5c,B.azW])
v(B.Sp,A.a8)
v(B.Sq,A.ad)
v(B.an8,A.a7J)
v(B.aYC,B.aYD)
v(B.a0r,A.aBH)
v(B.atS,A.fw)
v(B.aHO,B.atS)
v(B.aoi,B.aHO)
w(B.aoi,[B.axM,B.Po])
x(B.aHO,A.is)})()
A.i9(b.typeUniverse,JSON.parse('{"xh":{"aI":[],"da":[]},"L7":{"ab":["xh"],"H":[],"e":[],"i":[],"ab.T":"xh"},"Zd":{"H":[],"e":[],"i":[]},"ab1":{"H":[],"e":[],"i":[]},"VY":{"H":[],"e":[],"i":[]},"NA":{"H":[],"e":[],"i":[]},"ajj":{"H":[],"e":[],"i":[]},"Ze":{"H":[],"e":[],"i":[]},"anL":{"H":[],"e":[],"i":[]},"aHr":{"H":[],"e":[],"i":[]},"aHs":{"H":[],"e":[],"i":[]},"awt":{"H":[],"e":[],"i":[]},"awu":{"H":[],"e":[],"i":[]},"awv":{"H":[],"e":[],"i":[]},"aww":{"H":[],"e":[],"i":[]},"aPk":{"H":[],"e":[],"i":[]},"aaw":{"H":[],"e":[],"i":[]},"awx":{"H":[],"e":[],"i":[]},"awy":{"H":[],"e":[],"i":[]},"VH":{"H":[],"e":[],"i":[]},"MZ":{"H":[],"e":[],"i":[]},"awz":{"H":[],"e":[],"i":[]},"Ge":{"H":[],"e":[],"i":[]},"aff":{"H":[],"e":[],"i":[]},"a5c":{"H":[],"e":[],"i":[]},"azW":{"H":[],"e":[],"i":[]},"Sp":{"a8":[],"e":[],"i":[]},"Sq":{"ad":["Sp<1>"]},"an8":{"is":[],"fw":[]},"Po":{"is":[],"fw":[]},"aoi":{"is":[],"fw":[]},"axM":{"is":[],"fw":[]},"atS":{"fw":[]}}'))
var y=(function rtii(){var x=A.a1
return{D:x("XL"),A:x("tO"),C:x("iS"),I:x("qc"),f:x("ca<az,tO>"),r:x("ca<az,Ah>"),y:x("fU"),_:x("l1"),L:x("az"),W:x("m7"),Z:x("DF"),F:x("p4"),B:x("de<~>"),V:x("x<cS>"),t:x("x<iS>"),O:x("x<M>"),J:x("x<ej<iS?>>"),u:x("x<ej<c?>>"),o:x("x<ae<c,c>>"),Y:x("x<nk>"),d:x("x<f4<@>>"),s:x("x<c>"),b:x("x<va>"),p:x("x<e>"),n:x("x<fw>"),Q:x("x<~()?>"),v:x("B<nk>"),h:x("B<c>"),j:x("B<@>"),x:x("B<~()>"),P:x("ae<c,@>"),R:x("G<j9,e>"),E:x("G<e,aD>"),e:x("G<iS,ej<iS?>>"),M:x("G<m7,uH<m7>>"),c:x("G<my,ej<my>>"),w:x("j2"),K:x("I"),k:x("Sp<m7>"),l:x("xh"),q:x("F2"),cr:x("ST"),G:x("nk"),m:x("Ah"),cq:x("M_"),N:x("c"),bA:x("M9"),ae:x("FI"),a:x("my"),g:x("b2<ah>"),U:x("au<ah>"),z:x("@"),S:x("k"),i:x("iS?"),X:x("I?"),T:x("c?"),aD:x("FI?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.x0=new A.GT(1,0)
D.mr=new A.GT(-1,0)
D.abW=new A.GT(-1,1)
D.xo=new B.aia(0,"horizontal")
D.pw=new B.aia(1,"vertical")
D.Gx=new B.bAt()
D.GL=new B.ajj(null)
D.mG=new B.iS("USED","Utilizado",M.cS,1,"used")
D.xN=new B.iS("CANCELLED","Cancelado",C.R,3,"cancelled")
D.xO=new B.iS("EXPIRED","Expirado",C.bt,2,"expired")
D.xP=new B.iS("ACTIVE","Ativo",C.bu,0,"active")
D.mH=new B.iS("PENDING","Pendente",W.q1,4,"pending")
D.bwR=new A.i3(50,1/0,null)
D.bkB=x([S.WG,D.bwR],y.p)
D.anY=new A.hZ(C.aa,C.u,C.Y,C.v,null,C.bX,null,0,D.bkB,null)
D.aho=new A.h6(C.X,null,null,D.anY,null)
D.akE=new A.M(1,0.12941176470588237,0.45098039215686275,0.27450980392156865,C.y)
D.al9=new A.M(1,1,0,0,C.y)
D.c5W=new A.cb("Campanha",null,null,null,null,null,null,null,null,null)
D.apk=new A.ej(null,D.c5W,C.fx,null,A.a1("ej<c?>"))
D.c5N=new A.cb("Status",null,null,null,null,null,null,null,null,null)
D.apl=new A.ej(null,D.c5N,C.fx,null,A.a1("ej<iS?>"))
D.aq5=new A.qh(0,10,0,0)
D.aqa=new A.aA(0,2,0,2)
D.aql=new A.qh(10,10,10,10)
D.aqx=new A.qh(20,20,20,20)
D.IW=new A.qh(5,5,5,5)
D.nf=new A.IF(1.2)
D.aw5=new A.IF(1.5)
D.aw6=new A.IF(2.5)
D.axi=new A.aZ(58149,"MaterialIcons",null,!1)
D.axv=new A.aZ(58560,"MaterialIcons",null,!1)
D.axC=new A.aZ(58890,"MaterialIcons",null,!1)
D.axE=new A.aZ(58938,"MaterialIcons",null,!1)
D.axJ=new A.aZ(61223,"MaterialIcons",null,!1)
D.axK=new A.aZ(61224,"MaterialIcons",null,!1)
D.axP=new A.aZ(61531,"MaterialIcons",null,!1)
D.axQ=new A.aZ(61563,"MaterialIcons",null,!1)
D.axW=new A.aZ(62054,"MaterialIcons",null,!1)
D.ay_=new A.aZ(62335,"MaterialIcons",null,!1)
D.ay1=new A.aZ(62537,"MaterialIcons",null,!1)
D.ayl=new A.aZ(984424,"MaterialIcons",null,!1)
D.axy=new A.aZ(58707,"MaterialIcons",null,!1)
D.ayu=new A.dg(D.axy,14,null,null,null,null,C.bu,null,null,null,null,null,null,null)
D.ayN=new A.dg(C.zD,16,null,null,null,null,null,null,null,null,null,null,null,null)
D.avC=new B.m7(0,"excel")
D.avD=new B.m7(1,"pdf")
D.bjW=x([D.avC,D.avD],A.a1("x<m7>"))
D.bZz=new F.j9("Data","data",2)
D.bZx=new F.j9("Cliente","cliente",3)
D.bZF=new F.j9("Valor","valor",2)
D.bZD=new F.j9("Status","status",2)
D.bZH=new F.j9("% Represen. Cashback",null,3)
D.bZG=new F.j9("Expira\xe7\xe3o","expiracao",2)
D.bZw=new F.j9("Campanha","campanha",2)
D.bnL=x([D.bZz,D.bZx,D.bZF,D.bZD,D.bZH,D.bZG,D.bZw],A.a1("x<j9>"))
D.bpV=x([D.xP,D.mG,D.xO,D.xN,D.mH],y.t)
D.cei=x([],y.n)
D.m7=new B.my("geracao","Gera\xe7\xe3o",0,"geracao")
D.c7n=new B.my("resgate","Resgate",1,"resgate")
D.c7m=new B.my("ambos","Ambos",2,"ambos")
D.bso=x([D.m7,D.c7n,D.c7m],A.a1("x<my>"))
D.Bu=new B.bnu(1,"max")
D.bDJ=new A.a_([D.xP,"active",D.mG,"used",D.xO,"expired",D.xN,"cancelled",D.mH,"pending"],A.a1("a_<iS,c>"))
D.bR4=new A.C(0,40)
D.bSh=new A.pq(1,0.25882352941176473,0.25882352941176473,0.25882352941176473)
D.ow=new B.awb(0,0)
D.bVW=new A.ki(C.iu,12,14)
D.aqM=new A.aA(6,2,6,2)
D.bVX=new A.ki(D.aqM,10,12)
D.bW1=new B.F2(0,"init")
D.kl=new B.F2(1,"loading")
D.ox=new B.F2(2,"success")
D.a7w=new B.F2(3,"error")
D.bW2=new B.F2(4,"empty")
D.bW3=new B.awx(null)
D.bZ1=new A.ai(28,null,null,null)
D.ahX=new A.oT(2,null,null,null,null,C.I,null,null,null,null)
D.bZ3=new A.ai(14,14,D.ahX,null)
D.a92=new B.a7L(0,"compact")
D.DB=new B.a7L(1,"small")
D.ceu=new B.a7L(2,"medium")
D.kE=new A.Hd(C.lO,1,C.xy)
D.c0l=new A.aAd(D.kE,D.kE,D.kE,D.kE,D.kE,D.kE)
D.c2c=new A.xJ(!0,C.a3r,null,null,null,null,C.ez,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSj=new A.pq(1,0.6196078431372549,0.6196078431372549,0.6196078431372549)
D.c2I=new A.xJ(!0,D.bSj,null,null,null,null,C.ez,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSl=new A.pq(1,0.3803921568627451,0.3803921568627451,0.3803921568627451)
D.E4=new A.xJ(!0,D.bSl,null,null,null,null,C.ez,10,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3T=new A.xJ(!0,null,null,null,null,null,C.ez,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6n=new A.cb("Limpar filtros",null,null,null,null,null,null,null,null,null)
D.c99=new B.aBm(0,"up")
D.Ez=new B.aBm(1,"down")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dgk","cHn",()=>A.dP("dd/MM/yyyy",null))
x($,"dgl","cHo",()=>A.dP("dd/MM/yyyy HH:mm",null))
x($,"dgj","cpt",()=>A.dP("dd/MM/yyyy",null))
x($,"dim","cIB",()=>A.dP("dd/MM/yyyy",null))})()};
(a=>{a["o1w6dEXni31+MH1kT/ozvbfaAI0="]=a.current})($__dart_deferred_initializers__);