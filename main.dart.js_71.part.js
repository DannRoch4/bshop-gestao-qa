((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,S,T,H,I,L,M,U,V,N,W,K,O,G,X,F,E,P,Q,R,B={
cAd(d){var x,w,v,u,t,s,r,q,p=y.P,o=p.a(d.i(0,"empresa")),n=A.b1(o.i(0,"codigo"))
o=A.b1(o.i(0,"nome"))
x=A.b1(d.i(0,"serie"))
w=A.b1(d.i(0,"numero"))
v=A.b1(d.i(0,"data"))
p=p.a(d.i(0,"valores"))
u=A.bR(p.i(0,"subtotal"))
t=A.bR(p.i(0,"desconto"))
s=A.bR(p.i(0,"acrescimo"))
r=A.bR(p.i(0,"total"))
p=A.bh(p.i(0,"cashbackUtilizado"))
if(p==null)p=null
q=J.ci(y.j.a(d.i(0,"formasPagamento")),new B.bTT(),y.Z)
q=A.F(q,q.$ti.h("a3.E"))
return new B.b8u(new B.b8v(n,o),x,w,v,new B.b8w(u,t,s,r,p),q)},
tQ:function tQ(d,e,f){this.a=d
this.b=e
this.c=f},
b8u:function b8u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b8v:function b8v(d,e){this.a=d
this.b=e},
b8w:function b8w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DH:function DH(d,e){this.a=d
this.b=e},
bTT:function bTT(){},
cMV(d){switch(d.toUpperCase()){case"ACTIVE":return D.xZ
case"USED":return D.mO
case"EXPIRED":return D.xY
case"CANCELLED":return D.xX
case"PENDING":return D.mP
default:return D.mP}},
iU:function iU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
mB:function mB(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
T_:function T_(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cVe(d){if(typeof d=="string")return B.cMV(d)
return D.mP},
xk(d){var x,w,v
if(d.length===0||d==="-")return"-"
try{x=A.m7(d)
w=$.cI_().ah(x)
return w}catch(v){return d}},
cxF(d){var x,w,v
if(d==null||d.length===0||d==="-")return"-"
try{x=A.m7(d)
w=$.cI0().ah(x)
return w}catch(v){return d}},
nl:function nl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1){var _=this
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
cZu(d){var x,w,v,u,t,s,r,q=null,p=J.ci(y.j.a(d.i(0,"dados")),new B.bU3(),y.G)
p=A.F(p,p.$ti.h("a3.E"))
x=y.P
w=x.a(d.i(0,"resumo"))
v=A.bh(w.i(0,"quantidadeRegistros"))
v=v==null?q:C.i.D(v)
if(v==null)v=0
u=A.bh(w.i(0,"totalCashbackGerado"))
if(u==null)u=q
if(u==null)u=0
t=A.bh(w.i(0,"totalCashbackLiquido"))
if(t==null)t=q
if(t==null)t=0
s=A.bh(w.i(0,"totalCashbackResgatado"))
if(s==null)s=q
if(s==null)s=0
r=A.bh(w.i(0,"quantidadeClientesUnicos"))
r=r==null?q:C.i.D(r)
if(r==null)r=0
w=A.bh(w.i(0,"mediaRepresentatividade"))
if(w==null)w=q
if(w==null)w=0
return new B.Ai(p,new B.bBd(v,u,t,s,r,w),F.cAf(x.a(d.i(0,"paginacao"))))},
Ai:function Ai(d,e,f){this.a=d
this.b=e
this.c=f},
bB4:function bB4(){},
bU3:function bU3(){},
bBd:function bBd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bAh:function bAh(){},
bAS:function bAS(){},
F4:function F4(d,e){this.a=d
this.b=e},
xj:function xj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.aR=v
_.v=w
_.Z=x
_.R=a0
_.dx=_.db=$
_.dy=a1
_.fr=!1
_.iX$=a2
_.iE$=a3
_.jy$=a4
_.jz$=a5
_.je$=a6
_.jA$=a7},
bAk:function bAk(d){this.a=d},
bAl:function bAl(d){this.a=d},
bAo:function bAo(d){this.a=d},
bAp:function bAp(d){this.a=d},
bAm:function bAm(d,e){this.a=d
this.b=e},
bAn:function bAn(d,e){this.a=d
this.b=e},
bAi:function bAi(){},
bAj:function bAj(d,e){this.a=d
this.b=e},
cVd(){return new B.Le(null)},
Le:function Le(d){this.a=d},
bAD:function bAD(d){this.a=d},
bAw:function bAw(d){this.a=d},
bAq:function bAq(d){this.a=d},
bAx:function bAx(d){this.a=d},
bAv:function bAv(d){this.a=d},
bAr:function bAr(d){this.a=d},
bAs:function bAs(d){this.a=d},
bAA:function bAA(d){this.a=d},
bAu:function bAu(d){this.a=d},
bAB:function bAB(d){this.a=d},
bAz:function bAz(d){this.a=d},
bAy:function bAy(d){this.a=d},
bAt:function bAt(d){this.a=d},
bAC:function bAC(){},
bAR:function bAR(d){this.a=d},
bAK:function bAK(d){this.a=d},
bAE:function bAE(d){this.a=d},
bAL:function bAL(d){this.a=d},
bAJ:function bAJ(d){this.a=d},
bAF:function bAF(d){this.a=d},
bAG:function bAG(d){this.a=d},
bAO:function bAO(d){this.a=d},
bAI:function bAI(d){this.a=d},
bAP:function bAP(d){this.a=d},
bAN:function bAN(d){this.a=d},
bAM:function bAM(d){this.a=d},
bAH:function bAH(d){this.a=d},
bAQ:function bAQ(){},
bAT:function bAT(d){this.a=d},
bAW:function bAW(d,e){this.a=d
this.b=e},
bAV:function bAV(){},
bAU:function bAU(d,e){this.a=d
this.b=e},
c7_:function c7_(d,e,f){this.a=d
this.b=e
this.c=f},
c70:function c70(){},
d_f(d){var x,w
try{x=$.cJd().ah(A.m7(d))
return x}catch(w){return d}},
Zj:function Zj(d,e){this.c=d
this.a=e},
ab9:function ab9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
c_m:function c_m(d){this.a=d},
W3:function W3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
NH:function NH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ajw:function ajw(d){this.a=d},
Zk:function Zk(d,e,f){this.c=d
this.d=e
this.a=f},
m9:function m9(d,e){this.a=d
this.b=e},
anY:function anY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bcf:function bcf(){},
bce:function bce(){},
aHB:function aHB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHC:function aHC(d,e){this.c=d
this.a=e},
cxD(d,e,f,g,h,i){return new B.awE(h,d,e,g,f,i,null)},
awE:function awE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
awF:function awF(d,e,f){this.c=d
this.d=e
this.a=f},
awG:function awG(d,e,f){this.c=d
this.d=e
this.a=f},
cxE(d,e,f,g,h,i,j,k,l,m,n,o){return new B.a5j(n,m,d,o,k,g,l,j,h,f,i,e,null)},
cnC(d,e,f,g,h,i,j,k,l,m){return new B.aaE(l,d,e,h,i,f,k,j,null,m.h("aaE<0>"))},
a5j:function a5j(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ade:function ade(){var _=this
_.e=_.d=$
_.c=_.a=_.r=_.f=null},
c72:function c72(d,e){this.a=d
this.b=e},
c71:function c71(d,e){this.a=d
this.b=e},
c75:function c75(d){this.a=d},
c73:function c73(){},
c74:function c74(){},
Gp:function Gp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ae5:function ae5(){this.c=this.a=null},
c8M:function c8M(){},
c8O:function c8O(d){this.a=d},
aPs:function aPs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ccA:function ccA(){},
ccB:function ccB(d){this.a=d},
ccC:function ccC(d){this.a=d},
aaE:function aaE(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.y=j
_.z=k
_.a=l
_.$ti=m},
bYu:function bYu(d){this.a=d},
awH:function awH(d){this.a=d},
cxG(d,e,f,g,h,i,j,k){return new B.awI(f,d,j,k,i,e,g,h,null)},
awI:function awI(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
cxH(d,e,f,g,h,i,j,k,l,m,n,o){return new B.awJ(j,g,o,m,h,n,i,f,e,l,d,k,null)},
awJ:function awJ(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bB8:function bB8(d,e){this.a=d
this.b=e},
bB7:function bB7(d,e){this.a=d
this.b=e},
bB9:function bB9(d){this.a=d},
bB6:function bB6(d,e){this.a=d
this.b=e},
bB5:function bB5(d,e){this.a=d
this.b=e},
bBc:function bBc(d){this.a=d},
bBb:function bBb(d,e){this.a=d
this.b=e},
bBa:function bBa(d,e){this.a=d
this.b=e},
VN:function VN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c0i:function c0i(d){this.a=d},
c0h:function c0h(d){this.a=d},
N5:function N5(d,e,f,g,h,i,j,k,l,m){var _=this
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
c0f:function c0f(d,e){this.a=d
this.b=e},
c0g:function c0g(d){this.a=d},
c0e:function c0e(d){this.a=d},
Gi:function Gi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afs:function afs(d,e,f){this.c=d
this.d=e
this.a=f},
a5k:function a5k(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bBi:function bBi(d,e,f){this.a=d
this.b=e
this.c=f},
bBh:function bBh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bBe:function bBe(d){this.a=d},
bBf:function bBf(){},
bBg:function bBg(d,e){this.a=d
this.b=e},
bAY(d,e,f,g){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$bAY=A.l(function(a0,a1){if(a0===1)return A.m(a1,w)
for(;;)switch(x){case 0:h=A.ctW(new A.Op().bS("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"))
h.AV("Relat\xf3rio Detalhado")
v=h.y.i(0,"Relat\xf3rio Detalhado")
v.toString
h.a7l("Sheet1")
h.a_d("Relat\xf3rio Detalhado")
u=A.rn(new A.a7("#1976D2",null,null),!0,null,null,!1,!1,new A.a7("#FFFFFF",null,null),null,null,null,C.np,!1,null,C.cp,null,0,!1,null,null,C.dh,C.fV)
t=A.rn(C.d7,!0,null,null,!1,!1,C.bN,null,null,14,C.jQ,!1,null,C.cp,null,0,!1,null,null,C.dh,C.fV)
s=A.rn(C.d7,!1,null,null,!1,!1,C.bN,null,null,null,C.JO,!1,null,C.cp,null,0,!1,null,null,C.dh,C.fV)
r=v.fG(new A.cs(0,0))
q=r.c
A.fc(q,new A.cs(r.e,r.f),new A.e_(new A.eK("Relat\xf3rio Detalhado de Cashback",null,null)),null)
q.a.a=!0
r.a=t
r=v.fG(new A.cs(1,0))
A.fc(r.c,new A.cs(r.e,r.f),new A.e_(new A.eK("Per\xedodo: "+f+" a "+e,null,null)),null)
p=A.dQ("dd/MM/yyyy HH:mm",null).ah(new A.aE(Date.now(),0,!1))
r=v.fG(new A.cs(2,0))
A.fc(r.c,new A.cs(r.e,r.f),new A.e_(new A.eK("Gerado em: "+p,null,null)),null)
if(g!=null){r=v.fG(new A.cs(4,0))
q=r.c
A.fc(q,new A.cs(r.e,r.f),new A.e_(new A.eK("RESUMO",null,null)),null)
o=A.rn(C.d7,!0,null,null,!1,!1,C.bN,null,null,null,C.jQ,!1,null,C.cp,null,0,!1,null,null,C.dh,C.fV)
q.a.a=!0
r.a=o
o=v.fG(new A.cs(5,0))
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK("Total de Registros:",null,null)),null)
o=v.fG(new A.cs(5,1))
A.fc(o.c,new A.cs(o.e,o.f),new A.n8(g.a),null)
o=v.fG(new A.cs(6,0))
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK("Clientes \xdanicos:",null,null)),null)
o=v.fG(new A.cs(6,1))
A.fc(o.c,new A.cs(o.e,o.f),new A.n8(g.e),null)
o=v.fG(new A.cs(7,0))
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK("Valor Total Gerado:",null,null)),null)
o=v.fG(new A.cs(7,1))
r=g.b
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK(A.bu("pt_BR").ah(r),null,null)),null)
r=v.fG(new A.cs(8,0))
A.fc(r.c,new A.cs(r.e,r.f),new A.e_(new A.eK("Valor Total Ativo:",null,null)),null)
r=v.fG(new A.cs(8,1))
o=g.c
A.fc(r.c,new A.cs(r.e,r.f),new A.e_(new A.eK(A.bu("pt_BR").ah(o),null,null)),null)
o=v.fG(new A.cs(9,0))
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK("Valor Total Utilizado:",null,null)),null)
o=v.fG(new A.cs(9,1))
r=g.d
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK(A.bu("pt_BR").ah(r),null,null)),null)
r=v.fG(new A.cs(10,0))
A.fc(r.c,new A.cs(r.e,r.f),new A.e_(new A.eK("Taxa de Utiliza\xe7\xe3o:",null,null)),null)
r=v.fG(new A.cs(10,1))
A.fc(r.c,new A.cs(r.e,r.f),new A.e_(new A.eK(C.i.a4(g.gYR(),1)+"%",null,null)),null)
n=12}else n=4
m=["Data Gera\xe7\xe3o","Cliente","C\xf3digo","Telefone","Valor","Valor Resgatado","Valor L\xedquido","Status","Data Expira\xe7\xe3o","Data Resgate","Campanha","Vendedor","Empresa"]
for(l=0;l<13;++l){r=v.fG(new A.cs(n,l))
q=r.c
A.fc(q,new A.cs(r.e,r.f),new A.e_(new A.eK(m[l],null,null)),null)
q.a.a=!0
r.a=u}++n
for(r=J.bA(d);r.C();){q=r.gP()
o=v.fG(new A.cs(n,0))
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK(B.xk(q.b),null,null)),null)
o=v.fG(new A.cs(n,1))
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK(q.r,null,null)),null)
o=v.fG(new A.cs(n,2))
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK(q.w,null,null)),null)
o=v.fG(new A.cs(n,3))
k=q.x
if(k==null)k="-"
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK(k,null,null)),null)
k=v.fG(new A.cs(n,4))
o=q.d
j=k.c
A.fc(j,new A.cs(k.e,k.f),new A.e_(new A.eK(A.bu("pt_BR").ah(o),null,null)),null)
j.a.a=!0
k.a=s
k=v.fG(new A.cs(n,5))
j=q.e
o=k.c
A.fc(o,new A.cs(k.e,k.f),new A.e_(new A.eK(A.bu("pt_BR").ah(j),null,null)),null)
o.a.a=!0
k.a=s
k=v.fG(new A.cs(n,6))
o=q.f
j=k.c
A.fc(j,new A.cs(k.e,k.f),new A.e_(new A.eK(A.bu("pt_BR").ah(o),null,null)),null)
j.a.a=!0
k.a=s
k=v.fG(new A.cs(n,7))
A.fc(k.c,new A.cs(k.e,k.f),new A.e_(new A.eK(q.y.d,null,null)),null)
k=v.fG(new A.cs(n,8))
A.fc(k.c,new A.cs(k.e,k.f),new A.e_(new A.eK(B.xk(q.Q),null,null)),null)
k=v.fG(new A.cs(n,9))
A.fc(k.c,new A.cs(k.e,k.f),new A.e_(new A.eK(B.cxF(q.z),null,null)),null)
k=v.fG(new A.cs(n,10))
j=q.at
o=j==null?"-":j
A.fc(k.c,new A.cs(k.e,k.f),new A.e_(new A.eK(o,null,null)),null)
o=v.fG(new A.cs(n,11))
k=q.ay
if(k==null)k="-"
A.fc(o.c,new A.cs(o.e,o.f),new A.e_(new A.eK(k,null,null)),null)
k=v.fG(new A.cs(n,12))
q=q.db
if(q==null)q="-"
A.fc(k.c,new A.cs(k.e,k.f),new A.e_(new A.eK(q,null,null)),null);++n}for(l=0;l<13;++l)A.bN5(v,l,15)
A.bN5(v,1,30)
A.bN5(v,10,25)
v=h.dy
v===$&&A.b()
i=A.cy6(h,v).aoI()
x=2
return A.e(B.bAX(new Uint8Array(A.bS(i)),"relatorio_detalhado_"+A.dQ("yyyyMMdd_HHmmss",null).ah(new A.aE(Date.now(),0,!1)),C.a31),$async$bAY)
case 2:return A.n(null,w)}})
return A.o($async$bAY,w)},
bAZ(d,e,f,g){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o
var $async$bAZ=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:v=A.cjY()
u=B.clD("#1976D2")
t=B.clD("#E3F2FD")
s=B.clD("#F5F5F5")
r=A.AW(null,u,null,null,null,null,null,null,null,C.eB,null,null,18,null,C.hb,null,!0,null,null,null,null)
q=A.AW(null,D.bSx,null,null,null,null,null,null,null,C.eB,null,null,8,null,C.hb,null,!0,null,null,null,null)
p=A.dQ("dd/MM/yyyy HH:mm",null).ah(new A.aE(Date.now(),0,!1))
o=C.va.aue(595.275590551181,841.8897637795275)
v.a5x(A.cwa(new B.bB0(g,t,u,q,d,s),new B.bB1(),new B.bB2(r,f,e,p,u),D.aqJ,o))
x=2
return A.e(A.clX("relatorio_detalhado_"+A.dQ("yyyyMMdd_HHmmss",null).ah(new A.aE(Date.now(),0,!1)),new B.bB3(v)),$async$bAZ)
case 2:return A.n(null,w)}})
return A.o($async$bAZ,w)},
a5i(d,e){var x=null
return B.cjr(A.a([A.op(d,D.c2s,x,x),new A.ld(x,2,x),A.op(e,A.AW(x,x,x,x,x,x,x,x,x,C.eB,x,x,10,x,C.hb,x,!0,x,x,x,x),x,x)],y.n),C.I5)},
bAX(d,e,f){var x=0,w=A.p(y.H)
var $async$bAX=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=2
return A.e(new A.aoc().An(d,f,e),$async$bAX)
case 2:$.f0.$1("\ud83d\udcc1 Arquivo salvo: "+e)
return A.n(null,w)}})
return A.o($async$bAX,w)},
bB2:function bB2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bB1:function bB1(){},
bB0:function bB0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bB_:function bB_(){},
bB3:function bB3(d){this.a=d},
cyT(d,e){return new B.aA5(e,d,null)},
aA5:function aA5(d,e,f){this.c=d
this.d=e
this.a=f},
a7T:function a7T(d,e){this.a=d
this.b=e},
Sw:function Sw(d,e,f,g,h,i,j,k,l,m){var _=this
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
Sx:function Sx(d){var _=this
_.d=!1
_.e=null
_.f=$
_.c=_.a=_.w=_.r=null
_.$ti=d},
by9:function by9(d){this.a=d},
anl:function anl(d,e){var _=this
_.d=d
_.w=e
_.a=_.b=null},
awm:function awm(d,e){this.a=d
this.b=e},
aYL:function aYL(){},
aYK:function aYK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cmh(d,e){return new B.axW(D.xx,e,D.BE,C.I5,D.EJ,new B.a0y(),d)},
cjr(d,e){return new B.Pu(D.pC,C.byD,D.BE,e,D.EJ,new B.a0y(),d)},
aim:function aim(d,e){this.a=d
this.b=e},
bnI:function bnI(d,e){this.a=d
this.b=e},
aBw:function aBw(d,e){this.a=d
this.b=e},
a0y:function a0y(){this.b=this.a=0},
aov:function aov(){},
axW:function axW(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.b=j
_.a=null},
Pu:function Pu(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.b=j
_.a=null},
aHY:function aHY(){},
au2:function au2(){},
clD(d){var x,w,v,u,t
if(C.m.bm(d,"#"))d=C.m.bU(d,1)
x=d.length
if(x===3)return new A.pn(1,A.cr(C.m.ae(C.m.ac(d,0,1),2),16)/255,A.cr(C.m.ae(C.m.ac(d,1,2),2),16)/255,A.cr(C.m.ae(C.m.ac(d,2,3),2),16)/255)
w=A.cr(C.m.ac(d,0,2),16)
v=A.cr(C.m.ac(d,2,4),16)
u=A.cr(C.m.ac(d,4,6),16)
t=x===8?A.cr(C.m.ac(d,6,8),16)/255:1
return new A.pn(t,w/255,v/255,u/255)},
cXk(d){var x=d.a
if(x===0)return C.vX
else if(x<0)return C.c0E
else return C.c0F},
cXl(d,e,f,g,h,i,j,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
y.aD.a(h.c.i(0,A.bo(y.ae))).toString
x=A.a([],y.b)
w=y.n
v=A.a([],w)
for(u=0;u<8;++u){t=a2[u]
s=d.i(0,v.length)
if(s==null)s=C.pn
r=A.op(t,a1,k,k)
v.push(A.PC(s,r,new A.iT(0,1/0,a0,1/0),k,k,k,D.J3))}x.push(new A.vc(v,!0,j))
A.PY(h)
for(s=i.length,q=1,u=0;u<i.length;i.length===s||(0,A.N)(i),++u){p=i[u]
v=A.a([],w)
r=C.f.Y(q-1,2)
for(o=J.bA(p);o.C();){t=o.gP()
n=d.i(0,v.length)
if(n==null)n=D.ac3
if(t instanceof A.fx)m=t
else{m=J.c0(t)
m=A.op(m,f,B.cXk(n),k)}v.push(A.PC(n,m,new A.iT(0,1/0,e,1/0),k,k,k,D.J3))}l=r!==0?a3:k
x.push(new A.vc(v,!1,l));++q}return A.cz2(D.c0C,x,g,C.Gy,C.a9q,C.E0)}},D
J=c[1]
A=c[0]
C=c[2]
S=c[58]
T=c[57]
H=c[27]
I=c[39]
L=c[50]
M=c[36]
U=c[49]
V=c[56]
N=c[48]
W=c[31]
K=c[42]
O=c[26]
G=c[40]
X=c[41]
F=c[17]
E=c[44]
P=c[30]
Q=c[33]
R=c[47]
B=a.updateHolder(c[8],B)
D=c[55]
B.tQ.prototype={
X(){return A.A(["cashbackId",this.a,"documentoOrigem",this.b,"documentoResgate",this.c],y.N,y.z)}}
B.b8u.prototype={
X(){var x=this
return A.A(["empresa",x.a,"serie",x.b,"numero",x.c,"data",x.d,"valores",x.e,"formasPagamento",x.f],y.N,y.z)}}
B.b8v.prototype={
X(){return A.A(["codigo",this.a,"nome",this.b],y.N,y.z)}}
B.b8w.prototype={
X(){var x=this
return A.A(["subtotal",x.a,"desconto",x.b,"acrescimo",x.c,"total",x.d,"cashbackUtilizado",x.e],y.N,y.z)}}
B.DH.prototype={
X(){return A.A(["descricao",this.a,"valor",this.b],y.N,y.z)}}
B.iU.prototype={
F(){return"CashbackStatusAnalitico."+this.b}}
B.mB.prototype={
F(){return"TipoDataFiltro."+this.b}}
B.T_.prototype={
on(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p=this,o=null,n=k==null?p.a:k,m=j==null?p.b:j
if(h)x=o
else x=a3==null?p.c:a3
if(f)w=o
else w=i==null?p.d:i
if(g)v=o
else v=l==null?p.e:l
if(e)u=o
else u=d==null?p.r:d
t=a4==null?p.y:a4
s=a0==null?p.Q:a0
r=a1==null?p.as:a1
q=a2==null?p.at:a2
return new B.T_(n,m,x,w,v,p.f,u,p.w,p.x,t,p.z,s,r,q)},
V9(d,e){var x=null
return this.on(x,!1,!1,!1,!1,x,x,x,x,x,d,e,x,x)},
blR(d,e){var x=null
return this.on(x,!1,!1,!1,!1,x,x,x,x,d,e,x,x,x)},
a6S(d,e){var x=null
return this.on(x,!1,d,!1,!1,x,x,x,x,x,e,x,x,x)},
a6U(d,e){var x=null
return this.on(x,!1,!1,!1,!1,d,x,x,x,x,e,x,x,x)},
a6T(d,e){var x=null
return this.on(x,!1,!1,d,!1,x,x,x,x,x,e,x,x,x)},
a6W(d,e){var x=null
return this.on(x,!1,!1,!1,!1,x,x,x,d,x,e,x,x,x)},
blD(d,e){var x=null
return this.on(x,d,!1,!1,!1,x,x,x,x,x,e,x,x,x)},
blB(d,e){var x=null
return this.on(d,!1,!1,!1,!1,x,x,x,x,x,e,x,x,x)},
blT(d,e){var x=null
return this.on(x,!1,!1,!1,!1,x,x,x,x,x,d,x,x,e)},
bm4(d,e,f){var x=null
return this.on(x,!1,!1,!1,!1,x,x,x,x,x,d,x,e,f)},
blZ(d,e,f){var x=null
return this.on(x,!1,!1,!1,d,x,x,x,x,x,e,x,x,f)},
BV(d){var x=null
return this.on(x,!1,!1,!1,!1,x,x,x,x,x,d,x,x,x)},
blH(d,e){var x=null
return this.on(x,!1,!1,!1,!1,x,d,e,x,x,x,x,x,x)},
bm1(d,e,f){var x=null
return this.on(x,!1,!1,!1,!1,x,d,e,x,x,f,x,x,x)},
gGi(){var x,w=this,v=!0
if(w.c==null){x=w.d
if(!(x!=null&&x.length!==0)){x=w.e
if(!(x!=null&&x.length!==0))v=w.r!=null}}return v}}
B.nl.prototype={
X(){var x=this,w=D.bDZ.i(0,x.y)
w.toString
return A.A(["cashbackId",x.a,"dataGeracao",x.b,"dataReferencia",x.c,"valorCashback",x.d,"valorResgatado",x.e,"valorLiquido",x.f,"nomeCliente",x.r,"codigoCliente",x.w,"telefone",x.x,"status",w,"dataResgate",x.z,"dataExpiracao",x.Q,"dataAtivacao",x.as,"campanha",x.at,"campanhaId",x.ax,"vendedor",x.ay,"vendedorResgate",x.ch,"documentoFiscal",x.CW,"documentoResgate",x.cx,"codigoEmpresa",x.cy,"nomeEmpresa",x.db,"valorVendaResgate",x.dx,"percentualRepresentatividade",x.dy],y.N,y.z)},
gaAo(){var x=this.dy
if(x==null)return"-"
return C.i.a4(x,2)+"%"},
gbeW(){var x,w=this.x
if(w==null)return""
x=A.bl("[^\\d]",!0,!1,!1)
return A.bX(w,x,"")},
gNY(){var x,w,v,u,t=this,s=t.x
if(!(s!=null&&s.length!==0))return""
x=t.gbeW()
w=x.length<=11?"55"+x:x
v=C.e.gS(t.r.split(" "))
u=A.a3B(null,"pt_BR","R$").ah(t.f)
s=t.db
if(s==null)s="Nossa Loja"
return"https://wa.me/"+w+"?text="+A.vC(2,"Ol\xe1, "+v+"!\n\nAqui \xe9 a *"+s+"*!\n\n*Voc\xea tem cashback dispon\xedvel!*\n\n*Saldo: "+u+"*\n*V\xe1lido at\xe9: "+B.xk(t.Q)+"*\n\nN\xe3o deixe seu dinheiro expirar!\n\nVenha at\xe9 nossa loja e aproveite seu cashback em suas pr\xf3ximas compras.\n\nEsperamos voc\xea!",C.aV,!1)}}
B.Ai.prototype={
X(){return A.A(["dados",this.a,"resumo",this.b,"paginacao",this.c],y.N,y.z)},
h3(){var x="pt_BR",w=y.N,v=A.a([A.A(["key","codigo","nome","ID"],w,w),A.A(["key","dataGeracao","nome","Data Gera\xe7\xe3o"],w,w),A.A(["key","cliente","nome","Cliente"],w,w),A.A(["key","cpf","nome","CPF/C\xf3digo"],w,w),A.A(["key","valorGerado","nome","Valor Gerado (R$)"],w,w),A.A(["key","valorResgatado","nome","Valor Resgatado (R$)"],w,w),A.A(["key","valorLiquido","nome","Valor L\xedquido (R$)"],w,w),A.A(["key","status","nome","Status"],w,w),A.A(["key","dataResgate","nome","Data Resgate"],w,w),A.A(["key","dataExpiracao","nome","Data Expira\xe7\xe3o"],w,w),A.A(["key","campanha","nome","Campanha"],w,w),A.A(["key","vendedor","nome","Vendedor"],w,w),A.A(["key","documento","nome","Documento"],w,w)],y.o),u=this.a,t=A.R(u).h("G<1,ae<c,I>>")
u=A.F(new A.G(u,new B.bB4(),t),t.h("a3.E"))
t=this.b
return A.A(["titulo","Relat\xf3rio Detalhado de Cashback","colunas",v,"dados",u,"totalRegistros",this.c.c,"resumo",A.A(["valorTotalGerado",A.bu(x).ah(t.b),"valorTotalResgatado",A.bu(x).ah(t.d),"valorTotalLiquido",A.bu(x).ah(t.c),"taxaResgate",C.i.a4(t.gYR(),1)+"%","clientesUnicos",t.e],w,y.K)],w,y.z)}}
B.bBd.prototype={
X(){var x=this
return A.A(["quantidadeRegistros",x.a,"totalCashbackGerado",x.b,"totalCashbackLiquido",x.c,"totalCashbackResgatado",x.d,"quantidadeClientesUnicos",x.e,"mediaRepresentatividade",x.f],y.N,y.z)},
gYR(){var x=this.b
if(x===0)return 0
return this.d/x*100}}
B.bAh.prototype={
e6(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=$.aT(),j=$.d
if(j==null)j=$.d=C.q
x=j.q(l,y.I)
j=x.ao$
j===$&&A.b()
j=j.bB$
j===$&&A.b()
w=W.b6b()
v=A.a([],y.d)
u=A.ea(D.bWh,y.dd)
t=A.no(l,y.m)
s=A.no(l,y.L)
r=A.bI(!1)
q=new A.aE(Date.now(),0,!1)
p=y.N
o=y.S
n=y.A
m=y.B
m=new B.xj(new B.bAT(new B.c7_(x,j,w)),v,u,t,s,r,A.ea(new B.T_(A.bD(A.aL(q),A.aO(q),1,0,0,0,0),q,l,l,l,l,l,l,l,D.md,l,l,1,20),y.cr),A.ea(E.vS,y.cq),A.no(l,y.C),F.cmj(),A.ea(D.md,y.a),A.iJ(A.a([],y.s),p),P.TO(A.b9(o),o),P.TO(A.b9(o),o),Q.JW(A.w(o,n),o,n),Q.JW(A.w(o,p),o,p),A.bI(!1),A.bI(!1),A.bI(!1),new A.yG(new A.b2(new A.av($.aC,y.U),y.g)),A.ja(2),A.bI(!1),D.GG,A.a([],y.R),A.es(l,l,l,y.X,y.x),new A.de(m),new A.de(m),!1,!1)
m.jH()
m.kw(D.GG)
A.fY(k,m,!1,y.q)}}
B.bAS.prototype={}
B.F4.prototype={
F(){return"RelatorioDetalhadoCashbackState."+this.b}}
B.xj.prototype={
gGt(){var x=this.p1.gj()
x=x==null?null:x.a
return x==null?A.a([],y.Y):x},
gZ5(){var x=this.p1.gj()
return x==null?null:x.b},
gC_(){var x=this.p1.gj()
x=x==null?null:x.c.a
return x==null?this.p4.gj().as:x},
gxv(){var x=this.p1.gj()
x=x==null?null:x.c.b
return x==null?0:x},
gNE(){var x=this.p1.gj()
x=x==null?null:x.c.c
return x==null?0:x},
bW(){this.le()
this.b4W()
this.B9()},
B9(){var x=0,w=A.p(y.H),v=this,u,t,s,r
var $async$B9=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=v.dx
s===$&&A.b()
x=2
return A.e(s.k9(),$async$B9)
case 2:u=e
x=3
return A.e(v.dx.k8(),$async$B9)
case 3:t=e
s=v.p4
s.sj(s.gj().blH(t,u))
r=v.aR
x=4
return A.e(v.dx.Ht(),$async$B9)
case 4:r.sj(e)
x=5
return A.e(v.fz(),$async$B9)
case 5:return A.n(null,w)}})
return A.o($async$B9,w)},
b4W(){var x=this.k4
$.aT()
x.push($.cM().e9(new B.bAk(this),y.y))
x.push($.cM().e9(new B.bAl(this),y._))},
fz(){var x=0,w=A.p(y.H),v=this
var $async$fz=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:v.ok.sj(D.kn)
v.p2.sj(null)
x=2
return A.e(v.k3.HQ(v.p4.gj()),$async$fz)
case 2:e.dL(0,new B.bAo(v),new B.bAp(v))
return A.n(null,w)}})
return A.o($async$fz,w)},
aYV(d){var x,w,v,u,t,s=this.to,r=s.k5(s)
for(x=d.length,w=!1,v=0;v<d.length;d.length===x||(0,A.N)(d),++v){u=d[v].at
if(u!=null&&u.length!==0&&r.A(0,u))w=!0}if(w){s.sB(0,0)
x=A.F(r,A.r(r).c)
C.e.kZ(x)
t=s.bI$
t===$&&A.b()
J.ie(t,x)
x=s.cb$
s=s.gj()
x.r=s
x.cq(s)}},
l5(){var x=0,w=A.p(y.H),v=this,u,t
var $async$l5=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.xr
t=u.bI$
t===$&&A.b()
J.tE(t)
t=u.cb$
u=u.gj()
t.r=u
t.cq(u)
u=v.x1
t=u.bI$
t===$&&A.b()
J.tE(t)
t=u.cb$
u=u.gj()
t.r=u
t.cq(u)
v.to.sB(0,0)
u=v.p4
u.sj(u.gj().BV(1))
x=2
return A.e(v.fz(),$async$l5)
case 2:return A.n(null,w)}})
return A.o($async$l5,w)},
nZ(){var x=0,w=A.p(y.H),v,u=this
var $async$nZ=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:v=u.fz()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$nZ,w)},
uc(d){return this.bix(d)},
bix(d){var x=0,w=A.p(y.H),v,u=this
var $async$uc=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:if(C.f.aH(d.b.hx(d.a).a,864e8)>365){u.p2.sj(new A.mJ("O per\xedodo m\xe1ximo permitido \xe9 de 1 ano"))
u.ok.sj(D.a7E)
x=1
break}u.p4.sj(d.BV(1))
x=3
return A.e(u.fz(),$async$uc)
case 3:case 1:return A.n(v,w)}})
return A.o($async$uc,w)},
wF(d){return this.bjU(d)},
bjU(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$wF=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.p4
if(d===t.gj().at){x=1
break}t.sj(t.gj().V9(1,d))
x=3
return A.e(u.fz(),$async$wF)
case 3:case 1:return A.n(v,w)}})
return A.o($async$wF,w)},
rV(){var x=0,w=A.p(y.H),v=this,u
var $async$rV=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.p4.gj()
x=2
return A.e(v.uc(new B.T_(u.a,u.b,null,null,null,null,null,null,null,D.md,null,null,1,20)),$async$rV)
case 2:return A.n(null,w)}})
return A.o($async$rV,w)},
vO(d){return this.aGN(d)},
aGN(d){var x=0,w=A.p(y.H),v,u=this,t,s
var $async$vO=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:if(d>=1)t=u.gxv()>0&&d>u.gxv()
else t=!0
if(t){x=1
break}if(d===u.gC_()){x=1
break}t=u.x1
s=t.bI$
s===$&&A.b()
J.tE(s)
s=t.cb$
t=t.gj()
s.r=t
s.cq(t)
t=u.p4
t.sj(t.gj().BV(d))
x=3
return A.e(u.fz(),$async$vO)
case 3:case 1:return A.n(v,w)}})
return A.o($async$vO,w)},
LU(d){return this.bpN(d)},
bpN(d){var x=0,w=A.p(y.H),v,u=this,t,s
var $async$LU=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=u.RG
if(s.gj()==d){x=1
break}s.sj(d)
u.R8.sj(E.vS)
s=u.p4
t=u.ry
if(d!=null)s.sj(s.gj().bm4(1,A.a([d],y.t),t.gj()))
else s.sj(s.gj().blZ(!0,1,t.gj()))
x=3
return A.e(u.fz(),$async$LU)
case 3:case 1:return A.n(v,w)}})
return A.o($async$LU,w)},
LV(d){return this.bpO(d)},
bpO(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$LV=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.ry
if(t.gj()===d){x=1
break}t.sj(d)
t=u.p4
t.sj(t.gj().blT(1,d))
x=3
return A.e(u.fz(),$async$LV)
case 3:case 1:return A.n(v,w)}})
return A.o($async$LV,w)},
Gd(d){return this.bpK(d)},
bpK(d){var x=0,w=A.p(y.H),v,u=this,t,s,r,q,p
var $async$Gd=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:p=u.rx
if(p.gj()==d){x=1
break}p.sj(d)
u.R8.sj(E.vS)
x=d==null||d.length===0?3:4
break
case 3:p=u.p4
p.sj(p.gj().blD(!0,1))
x=5
return A.e(u.fz(),$async$Gd)
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
p.sj(p.gj().blB(s,1))
x=6
return A.e(u.fz(),$async$Gd)
case 6:case 1:return A.n(v,w)}})
return A.o($async$Gd,w)},
Ch(d){return this.bpM(d)},
bpM(d){var x=0,w=A.p(y.H),v,u=this,t,s
var $async$Ch=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=d==null||d.length===0?null:d
s=u.p4
if(s.gj().e==t){x=1
break}s.sj(t==null?s.gj().a6T(!0,1):s.gj().a6W(t,1))
x=3
return A.e(u.fz(),$async$Ch)
case 3:case 1:return A.n(v,w)}})
return A.o($async$Ch,w)},
Cg(d){return this.bpL(d)},
bpL(d){var x=0,w=A.p(y.H),v,u=this,t,s
var $async$Cg=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=d==null||d.length===0?null:d
s=u.p4
if(s.gj().d==t){x=1
break}s.sj(t==null?s.gj().a6S(!0,1):s.gj().a6U(t,1))
x=3
return A.e(u.fz(),$async$Cg)
case 3:case 1:return A.n(v,w)}})
return A.o($async$Cg,w)},
NB(d){return this.bzl(d)},
bzl(d){var x=0,w=A.p(y.H),v,u=this,t
var $async$NB=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.x1
if(t.gj().p(0,d)){t.I(0,d)
x=1
break}t.A(0,d)
t=u.xr.gdv()
x=!t.p(t,d)?3:4
break
case 3:x=5
return A.e(u.JG(d),$async$NB)
case 5:case 4:case 1:return A.n(v,w)}})
return A.o($async$NB,w)},
JG(d){return this.b5W(d)},
b5W(d){var x=0,w=A.p(y.H),v=this,u
var $async$JG=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=v.x2
u.A(0,d)
v.y1.I(0,d)
x=2
return A.e(v.k3.vl(d),$async$JG)
case 2:f.dL(0,new B.bAm(v,d),new B.bAn(v,d))
u.I(0,d)
return A.n(null,w)}})
return A.o($async$JG,w)},
Nn(d){return this.byN(d)},
byN(d){var x=0,w=A.p(y.H),v=this
var $async$Nn=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=2
return A.e(v.JG(d),$async$Nn)
case 2:return A.n(null,w)}})
return A.o($async$Nn,w)},
DK(d){return this.aJK(d)},
aJK(d){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$DK=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:s=v.R8
s.sj(s.gj().ayG(d))
u=s.gj().b===E.j1?"asc":"desc"
s=s.gj()
t=v.p4
t.sj(t.gj().blR(A.z(s.a)+"_"+u,1))
x=2
return A.e(v.fz(),$async$DK)
case 2:return A.n(null,w)}})
return A.o($async$DK,w)},
J6(){return this.aZ0()},
aZ0(){var x=0,w=A.p(y.v),v,u=this,t,s,r,q,p
var $async$J6=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:q={}
p=A.a([],y.Y)
q.a=1
t=u.p4
s=u.k3
r=1
case 3:x=6
return A.e(s.HQ(t.gj().V9(r,500)),$async$J6)
case 6:e.dL(0,new B.bAi(),new B.bAj(q,p));++r
case 4:if(r<=q.a){x=3
break}case 5:v=p
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$J6,w)},
G0(){var x=0,w=A.p(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$G0=A.l(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=r.y2
if(!j.gj())o=!(r.ok.gj()===D.oD&&r.gGt().length!==0)
else o=!0
if(o){x=1
break}j.sj(!0)
u=4
x=7
return A.e(r.J6(),$async$G0)
case 7:q=e
o=r.gZ5()
n=$.cq4()
m=r.p4
l=n.ah(m.gj().a)
x=8
return A.e(B.bAY(q,n.ah(m.gj().b),l,o),$async$G0)
case 8:$.f0.$1("\u2705 Exporta\xe7\xe3o Excel conclu\xedda - "+J.bw(q)+" registros")
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
return A.o($async$G0,w)},
G1(){var x=0,w=A.p(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$G1=A.l(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=r.y2
if(!j.gj())o=!(r.ok.gj()===D.oD&&r.gGt().length!==0)
else o=!0
if(o){x=1
break}j.sj(!0)
u=4
x=7
return A.e(r.J6(),$async$G1)
case 7:q=e
o=r.gZ5()
n=$.cq4()
m=r.p4
l=n.ah(m.gj().a)
x=8
return A.e(B.bAZ(q,n.ah(m.gj().b),l,o),$async$G1)
case 8:$.f0.$1("\u2705 Exporta\xe7\xe3o PDF conclu\xedda - "+J.bw(q)+" registros")
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
return A.o($async$G1,w)},
jh(){var x,w,v,u=this
for(x=u.k4,w=x.length,v=0;v<x.length;x.length===w||(0,A.N)(x),++v)x[v].aG()
C.e.O(x)
x=u.x1
w=x.bI$
w===$&&A.b()
J.tE(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
x=u.x2
w=x.bI$
w===$&&A.b()
J.tE(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
u.lL()}}
B.Le.prototype={
op(d){var x=null
return A.hk(x,x,A.h1(!0,A.eb(A.cK(new A.aQ(new B.bAD(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.a9),!0,C.aM,!0,!0),x,x,x)},
oC(d){var x=null
return A.hk(x,x,A.h1(!0,A.eb(A.cK(new A.aQ(new B.bAR(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.a9),!0,C.aM,!0,!0),x,x,x)}}
B.bAT.prototype={
HQ(d){return this.aFI(d)},
aFI(d){var x=0,w=A.p(y.r),v,u=this
var $async$HQ=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bAW(u,d),y.m),$async$HQ)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$HQ,w)},
vl(d){return this.aDS(d)},
aDS(d){var x=0,w=A.p(y.f),v,u=this
var $async$vl=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bAU(u,d),y.A),$async$vl)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vl,w)}}
B.c7_.prototype={
Pi(d,e,f,g,h,i,j,k,l,m,n,o){return this.aFJ(d,e,f,g,h,i,j,k,l,m,n,o)},
aFJ(d,e,f,g,h,i,a0,a1,a2,a3,a4,a5){var x=0,w=A.p(y.m),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Pi=A.l(function(a7,a8){if(a7===1)return A.m(a8,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreSelectedCompanies",!1,"ignoreDefaultDates",!1],m,l)
j=A.A(["page",a0,"pageSize",a1,"status",a2,"codigoCliente",f,"nomeCliente",h,"codigoVendedor",g,"campanhaId",e,"valorMinimo",a5,"valorMaximo",a4,"tipoData",a3,"agrupamento",d,"ordenacao",i],m,l)
j.cG(0,new B.c70())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/cashback/relatorio-detalhado",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.aob(o.cu(u.aoa(l,u.b)),y.m)
x=3
return A.e(m.co(t,y.P),$async$Pi)
case 3:s=a8
r=A.aR()
try{m=s.a
m.toString
r.b=B.cZu(m)}catch(a6){q=A.a6(a6)
p=A.aq(a6)
u.c.nU(q,p,t)
throw a6}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Pi,w)},
vl(d){return this.aDT(d)},
aDT(d){var x=0,w=A.p(y.A),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$vl=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:n=y.N
m=y.z
l=A.cq(A.A(["ignoreSelectedCompanies",!0,"ignoreDefaultDates",!0],n,m),A.w(n,m),"GET",null)
k=u.a
j=k.ao$
j===$&&A.b()
m=l.ct(j,"/cashback/"+d+"/documentos",null,A.w(n,m))
n=k.ao$.bB$
n===$&&A.b()
t=u.aob(m.cu(u.aoa(n,u.b)),y.A)
n=y.P
x=3
return A.e(k.co(t,n),$async$vl)
case 3:s=f
r=A.aR()
try{m=s.a
l=C.i.D(A.bR(m.i(0,"cashbackId")))
k=B.cAd(n.a(m.i(0,"documentoOrigem")))
n=m.i(0,"documentoResgate")==null?null:B.cAd(n.a(m.i(0,"documentoResgate")))
r.b=new B.tQ(l,k,n)}catch(i){q=A.a6(i)
p=A.aq(i)
u.c.nU(q,p,t)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vl,w)},
aob(d,e){var x
if(A.bo(e)!==C.dq){x=d.r
x===$&&A.b()
x=!(x===C.dn||x===C.dB)}else x=!1
if(x)if(A.bo(e)===C.dg)d.r=C.cV
else d.r=C.d9
return d},
aoa(d,e){var x,w=C.m.bC(e)
if(w.length===0)return d
x=A.co(e,0,null)
if(x.gm4())return x.k(0)
return A.co(d,0,null).kn(x).k(0)}}
B.Zj.prototype={
t(d){var x=null,w=C.Q.U(0.1),v=this.c,u=y.p,t=A.a([new B.ab9("Documento de Origem","Venda que gerou o cashback",C.r_,M.cT,v.b,!1,x)],u)
v=v.c
if(v!=null)C.e.E(t,A.a([C.f4,new B.ab9("Documento de Resgate","Venda onde o cashback foi utilizado",D.ayy,C.bu,v,!0,x)],u))
return A.al(x,A.V(t,C.O,x,C.u,C.t,0),C.B,x,x,new A.am(w,x,x,x,x,x,C.P),x,x,x,x,C.aS,x,x,x)}}
B.ab9.prototype={
t(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.f,m=n.U(0.1)
m=A.al(o,A.bM(p.e,n,o,20),C.B,o,o,new A.am(m,o,o,o,o,o,C.bi),o,o,o,o,C.aS,o,o,o)
n=A.fd(p.c,o,!1,2,C.N,o)
x=A.D(d).ok.ax
x=x==null?o:x.iB(C.Q,10)
w=y.p
x=A.a2(A.a([m,R.kq,A.ai(A.V(A.a([n,A.P(p.d,o,o,o,o,x,o,o)],w),C.O,o,C.u,C.t,0),1)],w),C.v,C.u,C.t,0)
n=H.a_H(C.Q.U(0.2),1,o)
m=p.r
v=m.a
v=A.hl(C.bS,A.a([new B.W3("Empresa",v.a+" - "+v.b,D.axP,o),new B.W3("Documento",m.b+"/"+m.c,C.zH,o),new B.W3("Data",B.d_f(m.d),C.JT,o)],w),C.c8,C.aq,16,16)
u=m.e
m=A.D(d).ok.ax
m=A.P("Valores",o,o,o,o,m==null?o:m.iB(C.Q,10),o,o)
t=C.Q.U(0.1)
s=A.aB(10)
r=A.a([new B.NH("Subtotal",u.a,!1,!1,o)],w)
q=u.b
if(q>0)r.push(new B.NH("Desconto",q,!0,!1,o))
q=u.c
if(q>0)r.push(new B.NH("Acr\xe9scimo",q,!1,!1,o))
r.push(H.a_H(C.Q.U(0.2),1,o))
r.push(new B.NH("Total",u.d,!1,!0,o))
return A.ei(o,8,new A.aD(C.aS,A.V(A.a([x,n,v,A.V(A.a([m,A.al(o,A.V(r,C.v,o,C.u,C.t,8),C.B,o,o,new A.am(t,o,o,s,o,o,C.P),o,o,o,o,C.aR,o,o,o)],w),C.O,o,C.u,C.t,8),p.aT7(d)],w),C.O,o,C.u,C.t,8),o),o,o,o,C.aM,o,o)},
aT7(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.D(d),m=this.r,l=m.f,k=m.e.e,j=this.w&&k!=null&&k>0
if(l.length===0&&!j)return C.aP
m=A.D(d).ok.ax
m=A.P("Formas de Pagamento",o,o,o,o,m==null?o:m.iB(C.Q,10),o,o)
x=y.p
w=A.a([],x)
if(j){v=C.bu.U(0.15)
u=A.aB(10)
t=A.eq(C.bu.U(0.4),-1,C.T,1)
s=n.ok.Q
r=s==null
q=A.P("CASHBACK: ",o,o,o,o,r?o:s.jx(C.y4,C.aD),o,o)
p=A.bu("pt_BR").ah(k)
w.push(A.al(o,A.a2(A.a([D.ayR,C.e9,q,A.P(p,o,o,o,o,r?o:s.jx(C.y4,C.ac),o,o)],x),C.v,C.u,C.Y,0),C.B,o,o,new A.am(v,o,t,u,o,o,C.P),o,o,o,o,C.yT,o,o,o))}C.e.E(w,new A.G(l,new B.c_m(n),A.R(l).h("G<1,f>")))
return A.V(A.a([m,C.dc,A.hl(C.bS,w,C.c8,C.aq,16,16)],x),C.O,o,C.u,C.t,0)}}
B.W3.prototype={
t(d){var x=null,w=A.bM(this.e,C.Q,x,14),v=A.D(d).ok.ax
v=v==null?x:v.iB(C.Q,10)
return A.a2(A.a([w,C.e9,A.P(this.c+": ",x,x,x,x,v,x,x),new A.c3(1,C.af,A.fd(this.d,x,!1,2,C.N,x),x)],y.p),C.v,C.u,C.Y,0)}}
B.NH.prototype={
t(d){var x,w=this,v=null,u=A.D(d),t=A.bu("pt_BR").ah(w.d),s=w.e,r=s?"- "+t:t,q=u.ok.Q,p=q==null
if(p)x=v
else x=q.i1(w.f?C.ac:C.aa)
x=A.P(w.c,v,v,v,v,x,v,v)
if(p)s=v
else{p=w.f?C.ac:C.aD
q=q.jx(s?C.bt:v,p)
s=q}return new A.aD(D.aql,A.a2(A.a([x,A.P(r,v,v,v,v,s,v,v)],y.p),C.v,C.as,C.t,0),v)}}
B.ajw.prototype={
t(d){var x=null
return A.al(x,D.ahy,C.B,x,x,new A.am(C.Q.U(0.1),x,x,x,x,x,C.P),x,x,x,x,C.aR,x,x,x)}}
B.Zk.prototype={
t(d){var x,w,v,u=null,t=A.D(d),s=t.ax,r=s.id
r=(r==null?s.fy:r).U(0.1)
s=s.fy
x=s.U(0.3)
w=A.bM(C.jS,s,u,20)
v=t.ok.Q
s=v==null?u:v.bX(s)
s=A.a([w,R.kq,A.ai(A.P(this.c,u,u,u,u,s,u,u),1)],y.p)
s.push(A.AU(D.az5,I.p3,this.d,u))
return A.al(u,A.a2(s,C.v,C.u,C.t,0),C.B,u,u,new A.am(r,u,new A.eM(new A.bi(x,1,C.T,-1),C.a_,C.a_,C.a_),u,u,u,C.P),u,u,u,u,C.aS,u,u,u)}}
B.m9.prototype={
F(){return"ExportType."+this.b},
gXc(){switch(this.a){case 0:var x="Excel"
break
case 1:x="PDF"
break
default:x=null}return x},
gbn7(){switch(this.a){case 0:var x="Planilha com todos os dados"
break
case 1:x="Relat\xf3rio formatado"
break
default:x=null}return x},
gbrX(){switch(this.a){case 0:var x=D.axR
break
case 1:x=D.axI
break
default:x=null}return x},
gen(){switch(this.a){case 0:var x=D.akO
break
case 1:x=D.alj
break
default:x=null}return x}}
B.anY.prototype={
t(d){var x=this,w=x.e,v=!w&&!x.d,u=A.D(d)
return new B.Sw(new B.bcf(),x.c,"Exportar relat\xf3rio",new B.aHB(x.d,w,x.f,null),D.bRk,v,new A.eo(A.aB(10),C.a_),u.at,null,y.l)}}
B.aHB.prototype={
t(d){var x,w,v,u,t,s,r=this,q=null,p=A.D(d),o=!r.d&&!r.c,n=A.bt(d,q,y.w).w.a.a<640,m=o?C.K:C.ff
if(o){x=p.ax.b
x=new A.nc(C.ee,C.kE,C.ec,A.a([x,x.abQ(C.f.aC(C.i.af(x.gaN()*255*0.8),0,255))],y.O),q,q)}else x=q
w=o?q:C.jy
v=A.aB(8)
u=new A.am(w,q,q,v,o?A.a([new A.cV(0,C.aZ,p.ax.b.U(0.3),C.iQ,4)],y.J):q,x,C.P)
if(r.e)return A.al(q,A.c9(r.c?new A.aj(14,14,A.Zz(q,m,q,q,q,q,q,2,q,q),q):A.bM(D.K6,m,q,16),q,q),C.B,q,q,u,q,32,q,q,q,q,q,32)
x=n?8:12
w=y.p
v=A.a([],w)
t=r.c
if(t)v.push(new A.aj(14,14,A.Zz(q,m,q,q,q,q,q,2,q,q),q))
else v.push(A.bM(D.K6,m,q,16))
if(!n){t=t?"Exportando...":"Exportar"
s=p.ok.ax
C.e.E(v,A.a([C.eL,A.P(t,q,q,q,q,s==null?q:s.jx(m,C.b_),q,q),V.a8T],w))}v.push(A.bM(C.ix,m,q,18))
return A.al(q,A.a2(v,C.v,C.u,C.Y,0),C.B,q,q,u,q,32,q,q,new A.az(x,0,x,0),q,q,q)}}
B.aHC.prototype={
t(d){var x,w,v=null,u=A.D(d),t=this.c,s=t.gen().U(0.1),r=A.aB(10)
r=A.al(v,A.bM(t.gbrX(),t.gen(),v,18),C.B,v,v,new A.am(s,v,v,r,v,v,C.P),v,32,v,v,v,v,v,32)
s=t.gXc()
x=u.ok
w=x.z
s=A.P(s,v,v,v,v,w==null?v:w.i1(C.b_),v,v)
t=t.gbn7()
x=x.Q
w=y.p
return A.a2(A.a([r,C.vP,A.ai(A.V(A.a([s,A.P(t,v,v,v,v,x==null?v:x.bX(C.cl),v,v)],w),C.O,v,C.u,C.Y,0),1)],w),C.v,C.u,C.t,0)}}
B.awE.prototype={
t(d){var x=this
switch(x.c.a){case 0:case 1:return D.bWj
case 3:return new B.awG(x.d,x.f,null)
case 4:return new B.awF(x.e,x.r,null)
case 2:return x.w}}}
B.awF.prototype={
t(d){return O.ajy("N\xe3o foram encontrados cashbacks para o per\xedodo e filtros selecionados.",this.c?A.AU(E.Kg,D.c6C,this.d,null):null,K.ay5,"Nenhum registro encontrado",G.KD)}}
B.awG.prototype={
t(d){var x=this.c
if(x==null)x="Erro desconhecido"
return O.ajy(x,A.any(I.r3,I.p3,this.d,null),C.jS,"Erro ao carregar dados",G.zW)}}
B.a5j.prototype={
ab(){return new B.ade()},
MS(d){return this.y.$1(d)},
MQ(d){return this.z.$1(d)}}
B.ade.prototype={
au(){var x,w=this
w.aQ()
x=$.aV()
w.d!==$&&A.bd()
w.d=new A.iM(C.eo,x)
w.e!==$&&A.bd()
w.e=new A.iM(C.eo,x)},
n(){var x,w=this,v=w.f
if(v!=null)v.aG()
v=w.r
if(v!=null)v.aG()
v=w.d
v===$&&A.b()
x=$.aV()
v.an$=x
v.a2$=0
v=w.e
v===$&&A.b()
v.an$=x
v.a2$=0
w.aJ()},
b84(d){var x=this.f
if(x!=null)x.aG()
this.f=A.dj(C.fh,new B.c72(this,d))},
b7y(d){var x=this.r
if(x!=null)x.aG()
this.r=A.dj(C.fh,new B.c71(this,d))},
aV2(){var x=this.f
if(x!=null)x.aG()
x=this.d
x===$&&A.b()
x.o9(C.kv)
this.a.MS(null)},
aV1(){var x=this.r
if(x!=null)x.aG()
x=this.e
x===$&&A.b()
x.o9(C.kv)
this.a.MQ(null)},
t(d){return A.cP(new B.c75(this))}}
B.Gp.prototype={
ab(){return new B.ae5()},
CM(d){return this.r.$1(d)}}
B.ae5.prototype={
au(){this.aQ()
this.a.c.ak(this.ga3p())},
bg(d){var x,w,v=this
v.bL(d)
x=d.c
if(x!==v.a.c){w=v.ga3p()
x.V(w)
v.a.c.ak(w)}},
n(){this.a.c.V(this.ga3p())
this.aJ()},
b8r(){return this.a6(new B.c8M())},
t(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.D(d),m=p.a,l=m.c,k=l.a.a.length!==0,j=m.e
m=m.f
x=n.ok.ax
w=x==null
v=w?o:x.bX(n.ax.k3)
u=p.a.d
x=w?o:x.bX(C.Q)
w=A.bM(C.r1,k?n.ax.b:C.Q,o,16)
if(k){t=p.a.w
t=A.cO(!1,A.aB(16),!0,E.zU,o,!0,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o)}else t=o
s=A.aB(8)
r=(!$.cd?C.bv:C.bI).U(0.12)
q=A.aB(8)
return new A.aj(200,32,A.Ml(o,C.dM,!1,o,!0,C.a6,o,A.XB(),l,o,o,o,o,o,2,A.wE(o,new A.fR(4,s,new A.bi(r,1,C.T,-1)),o,U.yR,o,o,o,o,!0,new A.fR(4,q,new A.bi((!$.cd?C.bv:C.bI).U(0.12),1,C.T,-1)),o,o,o,o,o,n.at,!0,o,o,o,o,new A.fR(4,A.aB(8),new A.bi(n.ax.b.U(0.6),1.5,C.T,-1)),o,o,o,o,o,o,o,o,x,u,o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,w,o,o,o,o,o,o,t,o,o,o,o,o),C.aG,!0,o,!0,o,!1,o,C.f8,o,o,m,o,j,o,o,o,1,o,o,!1,"\u2022",o,new B.c8O(p),o,o,o,!1,o,o,!1,o,!0,o,C.ey,o,o,o,o,o,o,o,o,o,o,o,v,!0,C.bB,o,C.i8,o,o,o,o),o)}}
B.aPs.prototype={
t(d){var x=this,w=x.c,v=y.c
v=A.F(new A.G(D.bsC,new B.ccA(),v),v.h("a3.E"))
return B.cnC("Gera\xe7\xe3o",C.ns,x.e,x.d,v,new B.ccB(x),new B.ccC(x),w!==D.md,w,y.a)}}
B.aaE.prototype={
t(d){var x,w=this,v=null,u=A.D(d),t=w.c,s=t!=null,r=w.y||s,q=A.D(d),p=A.aB(4),o=A.eq((!$.cd?C.bv:C.bI).U(0.1),-1,C.T,1),n=A.D(d),m=A.aB(4),l=A.bM(w.e,C.Q,v,14),k=u.ok.ax,j=k==null,i=j?v:k.bX(C.Q),h=y.p
i=A.a2(A.a([l,C.e9,A.P(w.d,v,v,v,v,i,v,v)],h),C.v,C.u,C.Y,0)
l=r?24:2
x=A.bM(C.ix,r?u.ax.b:C.Q,v,18)
k=j?v:k.bX(u.ax.k3)
j=w.r
h=A.a([new A.CI(A.ck_(m,n.at,0,i,new A.aD(new A.az(0,0,l,0),x,v),!0,w.x,w.f,j,v,k,t,w.$ti.c),v)],h)
if(r){t=w.z
if(t==null)t=j!=null?new B.bYu(w):v
h.push(A.mp(v,A.cO(!1,A.aB(16),!0,A.al(v,E.zU,C.B,v,v,new A.am(C.Q.U(0.1),v,v,v,v,v,C.bi),v,v,v,v,C.J2,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v),v,v,v,0,v,v))}return A.al(v,A.dz(C.fB,h,C.a6,C.aW,v),C.B,v,v,new A.am(q.at,v,o,p,v,v,C.P),v,32,v,v,C.fi,v,v,v)}}
B.awH.prototype={
t(d){return E.HZ}}
B.awI.prototype={
t(d){var x=this
return F.cwH(x.c,x.d,x.w,x.x,x.y,x.r,E.UJ,x.e,x.f)}}
B.awJ.prototype={
t(d){return A.bt(d,null,y.w).w.a.a>=1100?this.aT0(d):this.aTl(d)},
aT0(d){var x=this,w=null,v=A.D(d),u=x.d?N.h9:E.nf,t=C.Q.U(0.1),s=y.p,r=A.a([D.bZj],s)
C.e.E(r,new A.G(D.bo0,new B.bB8(x,v),y.e))
s=A.a([A.al(w,A.a2(r,C.v,C.u,C.t,0),C.B,w,w,new A.am(v.at,w,new A.eM(C.a_,C.a_,new A.bi(t,1,C.T,-1),C.a_),E.xF,w,w,C.P),w,w,w,w,u,w,w,w)],s)
t=x.c
C.e.E(s,new A.G(t,new B.bB9(x),A.R(t).h("G<1,f>")))
return A.V(s,C.v,w,C.u,C.t,0)},
aTl(d){var x=this.c,w=A.R(x).h("G<1,N5>")
x=A.F(new A.G(x,new B.bBc(this),w),w.h("a3.E"))
return A.V(x,C.v,null,C.u,C.t,0)}}
B.VN.prototype={
t(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.D(d),m=p.f,l=m?N.h9:E.nf,k=p.r,j=k?C.Q.U(0.1):o,i=C.Q.U(0.1),h=k?0.25:0
h=A.ciT(A.bM(C.hV,k?n.ax.b:C.cl,o,20),C.aj,h)
x=p.c
w=A.ai(A.fd(B.xk(x.c),o,!1,o,C.N,o),2)
v=y.p
u=A.a([],v)
t=p.d
if(t)u.push(new B.afs(p.e,m,o))
if(t)u.push(C.eL)
t=x.r
if(m)t=A.fd(t,o,!1,o,C.N,o)
else{t=A.fd(t,o,!1,o,C.N,o)
s=A.D(d).ok.ax
s=s==null?o:s.iB(C.Q,10)
s=A.V(A.a([t,A.P(x.w,o,o,o,o,s,o,o)],v),C.O,o,C.u,C.Y,0)
t=s}u.push(A.ai(t,1))
u=A.ai(A.a2(u,C.v,C.u,C.t,0),3)
t=A.ai(A.fd(A.bu("pt_BR").ah(x.d),n.ax.b,!0,o,C.N,o),2)
s=x.y
r=A.ai(new A.cx(C.cC,o,o,B.cyT(m?D.a9b:D.DL,s),o),2)
q=x.gaAo()
m=s===D.mO
s=m?K.pW:C.Q
m=A.ai(A.fd(q,s,m,o,C.N,o),3)
s=A.ai(A.fd(B.xk(x.Q),o,!1,o,C.N,o),2)
x=x.at
m=A.a([A.cO(!1,o,!0,A.al(o,A.a2(A.a([h,w,u,t,r,m,s,A.ai(A.fd(x==null?"-":x,o,!1,1,C.N,o),2)],v),C.v,C.u,C.t,5),C.B,o,o,new A.am(j,o,new A.eM(C.a_,C.a_,new A.bi(i,1,C.T,-1),C.a_),o,o,o,C.P),o,o,o,o,l,o,o,o),o,!0,o,o,o,o,o,o,o,o,o,p.w,o,o,o,o,o)],v)
if(k)m.push(new A.aQ(new B.c0i(p),o))
return A.V(m,C.v,o,C.u,C.t,0)}}
B.N5.prototype={
t(d){var x,w,v=this,u=null,t=A.D(d),s=A.aB(8),r=C.Q.U(0.1),q=v.f,p=q?C.Q.U(0.1):C.W,o=C.Q.U(0.1),n=y.p,m=A.a([],n),l=v.d
if(l)m.push(new B.afs(v.e,!1,u))
if(l)m.push(C.eL)
l=v.c
x=t.ok
w=x.x
w=w==null?u:w.i1(C.ac)
w=A.P(l.r,1,C.N,u,u,w,u,u)
x=x.Q
x=x==null?u:x.bX(C.cl)
m.push(A.ai(A.V(A.a([w,A.P(l.w,u,u,u,u,x,u,u)],n),C.O,u,C.u,C.t,0),1))
m.push(B.cyT(D.DL,l.y))
m.push(C.e9)
l=q?0.5:0
m.push(A.ciT(A.bM(T.zI,q?t.ax.b:C.cl,u,20),C.aj,l))
p=A.a([A.cO(!1,u,!0,A.al(u,A.V(A.a([A.a2(m,C.v,C.u,C.t,0),C.dc,H.a_H(C.Q.U(0.2),1,u),C.dc,A.cP(new B.c0f(v,t))],n),C.O,u,C.u,C.t,0),C.B,u,u,new A.am(p,u,new A.eM(C.a_,C.a_,new A.bi(o,1,C.T,-1),C.a_),E.xF,u,u,C.P),u,u,u,u,C.aS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u)],n)
if(q)p.push(new A.aQ(new B.c0g(v),u))
return A.Hq(A.V(p,C.v,u,C.u,C.t,0),C.bZ,t.at,u,G.qx,new A.eo(s,new A.bi(r,1,C.T,-1)))}}
B.Gi.prototype={
t(d){var x=null,w=A.D(d).ok,v=w.ax
v=v==null?x:v.bX(C.cl)
v=A.P(this.c,x,x,x,x,v,x,x)
w=w.Q
w=w==null?x:w.jx(this.e,C.aD)
return A.V(A.a([v,A.P(this.d,x,x,x,x,w,x,x)],y.p),C.O,x,C.u,C.Y,0)}}
B.afs.prototype={
t(d){var x,w,v,u,t=null,s=this.c,r=s!=null,q=r?E.Hx:C.cl,p=this.d,o=p?4:6,n=p?12:14
p=r?"Enviar mensagem no WhatsApp":"Telefone n\xe3o cadastrado"
x=A.aB(10)
w=q.U(0.1)
v=A.aB(10)
u=A.eq(q.U(0.3),-1,C.T,1)
return A.iN(A.fP(!1,C.aj,!0,t,A.cO(!1,x,!0,A.al(t,F.cu2(E.JS,q,n),C.B,t,t,new A.am(w,t,u,v,t,t,C.P),t,t,t,t,new A.az(o,o,o,o),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t),C.B,C.W,0,t,t,t,t,t,C.cm),t,t,t,p,t,t,t,t,t,t,t,t)}}
B.a5k.prototype={
t(d){var x=this.d
return A.cP(new B.bBi(this,this.c||x==null,x))}}
B.aA5.prototype={
t(d){var x=this,w=null,v=x.b02(),u=x.c,t=u.e,s=t.U(0.15),r=A.aB(10),q=A.eq(t,-1,C.T,1),p=y.p,o=A.a([A.bM(x.b03(),t,w,v.c)],p),n=x.d
n=n===D.a9b||n===D.DL?4:6
C.e.E(o,A.a([new A.aj(n,w,w,w),new A.c3(1,C.af,A.P(u.d,1,C.N,w,!1,A.bC(w,w,t,w,w,w,w,w,w,w,w,v.b,w,w,C.b_,w,w,!0,w,w,w,w,w,w,w,w),w,w),w)],p))
return A.al(w,A.a2(o,C.v,C.u,C.Y,0),C.B,w,w,new A.am(s,w,q,r,w,w,C.P),w,w,w,w,v.a,w,w,w)},
b03(){switch(this.c.a){case 0:return G.zG
case 1:return D.ayc
case 2:return D.aye
case 3:return D.axX
case 4:return D.axv}},
b02(){switch(this.d.a){case 0:return E.a7D
case 1:return D.bWc
case 2:return D.bWb
case 3:return E.a7C}}}
B.a7T.prototype={
F(){return"StatusBadgeSize."+this.b}}
B.Sw.prototype={
ab(){return new B.Sx(this.$ti.h("Sx<1>"))},
bsX(d){return this.c.$1(d)}}
B.Sx.prototype={
d0(){this.f0()
this.aqW()},
aqW(){var x,w,v,u,t=this,s=t.c
if(s!=null){t.f=A.avU(s)
v=t.c.gaI()
if(v instanceof A.X)t.r=v
try{s=t.c
s.toString
t.a.toString
x=A.j6(s,!1)
s=x.d
s===$&&A.b()
s=s.gal()
w=s==null?null:s.c.gaI()
if(w instanceof A.X)t.w=w}catch(u){t.w=t.r=null}}},
ajV(d){var x=this.e
return x==null?A.cxC(C.bG,new A.W(A.a4(1/0,d.a,d.b),A.a4(1/0,d.c,d.d))):x},
bap(d,e){var x,w,v,u,t,s=this
if(s.c==null)return s.ajV(e)
s.f===$&&A.b()
x=s.r
w=s.w
if(x==null||w==null||x.y==null||w.y==null)return s.ajV(e)
s.a.toString
v=A.aR()
switch(0){case 0:v.b=s.a.CW
break}u=v.ai()
u=A.d9(x.ci(w),u)
t=x.gH().KV(C.M).ag(0,v.ai())
t=A.ms(u,A.d9(x.ci(w),t))
u=w.gH()
return s.e=A.cVc(t,new A.Z(0,0,0+u.a,0+u.b))},
aJq(){var x,w,v,u=this,t=null
u.aqW()
x=u.a
x.toString
w=u.c
w.toString
v=x.bsX(w)
if(J.lr(v)){x=u.a
x.toString
u.d=!0
w=u.c
w.toString
A.cEB(C.B,x.db,t,w,t,t,v,t,t,t,u.gbao(),t,t,t,x.cy,t,!1,u.$ti.h("1?")).bc(new B.by9(u),y.H)}},
gban(){var x,w=this.c
w.toString
w=A.d0(w,C.mr)
x=w==null?null:w.CW
switch((x==null?C.kd:x).a){case 0:w=this.a.cx
break
case 1:w=!0
break
default:w=null}return w},
t(d){var x,w,v,u=this,t=null
A.QM(d)
A.avU(d)
u.a.toString
A.avU(d)
x=u.a
w=x.w
x=x.cx?u.gaJp():t
v=A.iN(A.cO(!1,t,u.gban(),u.a.ax,t,!0,t,t,t,t,t,t,t,t,t,x,t,t,t,t,t),t,t,t,w,t,t,t,t,t,t,t,t)
return A.cw(t,t,t,v,!1,t,t,!1,u.d,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.ak,t)}}
B.anl.prototype={
t(d){var x=null,w=this.w
return new A.ld(x,16,A.csj(A.PC(x,x,x,A.aj3(new A.YQ(C.xG,new A.Hi(this.d,w,C.xI),C.xG,C.xG),x,x),w,new A.qg(0,0,0,0),x)))}}
B.awm.prototype={}
B.aYL.prototype={
k(d){var x,w,v,u=this,t="BorderRadius.only(",s=u.a,r=u.b
if(s===r){x=u.c
x=r===x&&x===u.d}else x=!1
if(x)if(s!==D.oC){r=s.a
w=r===s.b?"BorderRadius.circular("+C.f.a4(r,1)+")":"BorderRadius.all("+s.k(0)+")"}else w=null
else{v=s!==D.oC
s=v?t+("topLeft: "+s.k(0)):t
if(r!==D.oC){if(v)s+=", "
r=s+("topRight: "+r.k(0))
s=r
v=!0}r=u.c
if(r!==D.oC){if(v)s+=", "
r=s+("bottomLeft: "+r.k(0))
s=r
v=!0}r=u.d
if(r!==D.oC){if(v)s+=", "
r=s+("bottomRight: "+r.k(0))
s=r}s+=")"
w=s.charCodeAt(0)==0?s:s}if(w!=null)return w
return"BorderRadius.zero"}}
B.aYK.prototype={
b1(d,e){var x,w,v,u,t=this,s=d.b,r=e.a,q=e.b,p=t.c,o=p.b,n=q+o
s.oD(r,n)
p=p.a
s.z2(r,q-0.551784*o+o,r-0.551784*p+p,q,r+p,q)
p=e.c
o=r+p
x=t.d
w=x.a
s.n5(o-w,q)
x=x.b
s.z2(r+0.551784*w+p-w,q,o,q-0.551784*x+x,o,q+x)
x=e.d
w=q+x
v=t.b
u=v.b
s.n5(o,w-u)
v=v.a
s.z2(o,q+0.551784*u+x-u,r+0.551784*v+p-v,w,o-v,w)
v=t.a
o=v.a
s.n5(r+o,w)
v=v.b
s.z2(r-0.551784*o+o,w,r,q+0.551784*v+x-v,r,w-v)
s.n5(r,n)},
az(d){return this}}
B.aim.prototype={
F(){return"Axis."+this.b}}
B.bnI.prototype={
F(){return"MainAxisSize."+this.b}}
B.aBw.prototype={
F(){return"VerticalDirection."+this.b}}
B.a0y.prototype={
fp(d){this.a=d.a
this.b=d.b},
cr(){var x=new B.a0y()
x.a=this.a
x.b=this.b
return x},
k(d){return A.U(this).k(0)+" first:"+this.a+" last:"+this.b}}
B.aov.prototype={
a1G(d){switch(this.d.a){case 0:return d.a.d
case 1:return d.a.c}},
a1H(d){switch(this.d.a){case 0:return d.a.c
case 1:return d.a.d}},
fv(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.d,a9=a8===D.xx?b4.b:b4.d,b0=a9<1/0,b1=a6.x,b2=b1.a
for(x=a6.b,w=C.e.h4(x,b2),v=w.length,u=a8===D.pC,t=a8.a,s=a6.r,r=s===C.aoc,q=b4.b,p=b4.d,o=0,n=0,m=0,l=0;l<w.length;w.length===v||(0,A.N)(w),++l){k=w[l]
j=a7
if(r)switch(t){case 0:j=new A.iT(0,1/0,p,p)
break
case 1:j=new A.iT(q,q,0,1/0)
break}else switch(t){case 0:j=new A.iT(0,1/0,0,p)
break
case 1:j=new A.iT(0,q,0,1/0)
break}k.fv(b3,j,!0)
m+=a6.a1H(k)
n=Math.max(n,a6.a1G(k))
if(u&&m>p)break;++b2}b1.b=b2
i=b2-b1.a
Math.max(0,(b0?a9:0)-m)
h=b0&&a6.f===D.BE?a9:m
g=A.aR()
switch(t){case 0:g.b=b4.c5(new A.fw(h,n))
f=g.ai().a
n=g.ai().b
break
case 1:g.b=b4.c5(new A.fw(n,h))
f=g.ai().b
n=g.ai().a
break
default:f=a7}w=g.ai()
a6.a=new A.hw(0,0,w.a,w.b)
e=Math.max(0,f-m)
d=A.aR()
a0=A.PY(b3)
w=a6.w
v=a6.apU(a8,a0,w)
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
a2=d.ai()/2
break
case 5:d.b=i>0?e/(i+1):0
a2=d.ai()
break
default:a2=a7}a3=a1?f-a2:a2
for(b1=C.e.cv(x,b1.a,b1.b),x=b1.length,v=s.a,u=n/2,s=s===C.yz,r=d.a,l=0;l<x;++l){k=b1[l]
switch(v){case 0:case 1:a4=a6.apU(a6.bqg(a8),a0,w)===s?0:n-a6.a1G(k)
break
case 2:a4=u-a6.a1G(k)/2
break
case 3:a4=0
break
default:a4=a7}if(a1)a3-=a6.a1H(k)
switch(t){case 0:q=a6.a
p=q.a
q=q.b
a5=k.a
k.a=new A.hw(p+a3,q+a4,a5.c,a5.d)
break
case 1:q=k.a
k.a=new A.hw(a4,a3,q.c,q.d)
break}if(a1){q=d.b
if(q===d)A.a5(A.pb(r))
a3-=q}else{q=a6.a1H(k)
p=d.b
if(p===d)A.a5(A.pb(r))
a3+=q+p}}},
hA(d,e){return this.fv(d,e,!1)},
bqg(d){switch(d.a){case 0:return D.pC
case 1:return D.xx}},
apU(d,e,f){switch(d.a){case 0:switch(e){case C.a9D:return!0
case C.E4:return!1
case null:case void 0:return null}break
case 1:switch(f){case D.EJ:return!1
case D.c9o:return!0
case null:case void 0:return null}break}},
jj(d){var x,w,v,u,t,s=this
s.rw(d)
x=new A.bY(new Float64Array(16))
x.e0()
w=s.a
x.ec(w.a,w.b,0,1)
w=d.b
w.jI()
w.Av(x)
for(v=s.x,v=C.e.cv(s.b,v.a,v.b),u=v.length,t=0;t<v.length;v.length===u||(0,A.N)(v),++t)v[t].jj(d)
w.xo()},
guh(){return this.d===D.pC},
gCp(){return!0},
D3(d){this.x.a=d.b},
jI(){return this.x}}
B.axW.prototype={}
B.Pu.prototype={}
B.aHY.prototype={}
B.au2.prototype={}
var z=a.updateTypes(["~()","Q<~>()","Q<~>(k)","ah(Ai)","~(iU?)","~(mB)","~(m9)","tQ?(@)","~(c?)","DH(@)","ae<c,I>(nl)","nl(@)","Q<~>(c)","ah(tQ)","Q<Ai>()","c(iU)","Q<tQ>()","kU(DH)","B<uJ<m9>>(T)","uJ<m9>(m9)","el<iU?>(iU)","el<mB>(mB)","~(mB?)","fM(jc)","VN(nl)","N5(nl)","Pu(nP)","B<c>(ar<k,nl>)","F3(T,au)"])
B.bTT.prototype={
$1(d){y.P.a(d)
return new B.DH(A.b1(d.i(0,"descricao")),A.bR(d.i(0,"valor")))},
$S:z+9}
B.bB4.prototype={
$1(d){var x,w,v="pt_BR",u=B.xk(d.b),t=A.bu(v).ah(d.d),s=A.bu(v).ah(d.e),r=A.bu(v).ah(d.f),q=B.cxF(d.z),p=B.xk(d.Q),o=d.at
if(o==null)o="-"
x=d.ay
if(x==null)x="-"
w=d.CW
if(w==null)w="-"
return A.A(["codigo",d.a,"dataGeracao",u,"cliente",d.r,"cpf",d.w,"valorGerado",t,"valorResgatado",s,"valorLiquido",r,"status",d.y.d,"dataResgate",q,"dataExpiracao",p,"campanha",o,"vendedor",x,"documento",w],y.N,y.K)},
$S:z+10}
B.bU3.prototype={
$1(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
y.P.a(a3)
x=A.bh(a3.i(0,"cashbackId"))
x=x==null?a2:C.i.D(x)
if(x==null)x=0
w=A.aX(a3.i(0,"dataGeracao"))
if(w==null)w="-"
v=A.aX(a3.i(0,"dataReferencia"))
if(v==null)v="-"
u=A.bh(a3.i(0,"valorCashback"))
if(u==null)u=a2
if(u==null)u=0
t=A.bh(a3.i(0,"valorResgatado"))
if(t==null)t=a2
if(t==null)t=0
s=A.bh(a3.i(0,"valorLiquido"))
if(s==null)s=a2
if(s==null)s=0
r=A.aX(a3.i(0,"nomeCliente"))
if(r==null)r="Cliente n\xe3o informado"
q=A.aX(a3.i(0,"codigoCliente"))
if(q==null)q="-"
p=A.aX(a3.i(0,"telefone"))
o=B.cVe(a3.i(0,"status"))
n=A.aX(a3.i(0,"dataResgate"))
m=A.aX(a3.i(0,"dataExpiracao"))
if(m==null)m="-"
l=A.aX(a3.i(0,"dataAtivacao"))
k=A.aX(a3.i(0,"campanha"))
j=A.bh(a3.i(0,"campanhaId"))
j=j==null?a2:C.i.D(j)
i=A.aX(a3.i(0,"vendedor"))
h=A.aX(a3.i(0,"vendedorResgate"))
g=A.aX(a3.i(0,"documentoFiscal"))
f=A.aX(a3.i(0,"documentoResgate"))
e=A.aX(a3.i(0,"codigoEmpresa"))
d=A.aX(a3.i(0,"nomeEmpresa"))
a0=A.bh(a3.i(0,"valorVendaResgate"))
if(a0==null)a0=a2
a1=A.bh(a3.i(0,"percentualRepresentatividade"))
return new B.nl(x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1==null?a2:a1)},
$S:z+11}
B.bAk.prototype={
$1(d){var x=this.a,w=x.p4
w.sj(w.gj().bm1(d.b,d.a,1))
x.l5()},
$S:93}
B.bAl.prototype={
$1(d){return this.a.l5()},
$S:268}
B.bAo.prototype={
$1(d){var x=this.a
x.ok.sj(D.a7E)
x.p2.sj(d)},
$S:2}
B.bAp.prototype={
$1(d){var x,w,v=this.a
v.p1.sj(d)
v.p3.sj(!0)
x=d.a
w=x.length===0?D.bWi:D.oD
v.ok.sj(w)
v.aYV(x)},
$S:z+3}
B.bAm.prototype={
$1(d){var x,w=this.a.y1,v=d.k(0)
v=A.bX(v,"Exception: ","")
x=w.bI$
x===$&&A.b()
J.cD(x,this.b,v)
v=w.cb$
w=w.gj()
v.r=w
v.cq(w)},
$S:2}
B.bAn.prototype={
$1(d){var x=this.a.xr,w=x.bI$
w===$&&A.b()
J.cD(w,this.b,d)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)},
$S:z+13}
B.bAi.prototype={
$1(d){return A.a5(d)},
$S:1468}
B.bAj.prototype={
$1(d){C.e.E(this.b,d.a)
this.a.a=d.c.b},
$S:z+3}
B.bAD.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=$.d
if(e==null)e=$.d=C.q
x=A.r(f).h("ab.T")
w=e.q(g,x).ok.gj()
e=$.d
v=(e==null?$.d=C.q:e).q(g,x).gZ5()
e=$.d
e=(e==null?$.d=C.q:e).q(g,x)
u=e.ok.gj()===D.oD&&e.gGt().length!==0
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
e=B.cxE(s,(p==null?$.d=C.q:p).q(g,x).y2.gj(),q===D.kn,new B.bAq(f),new B.bAr(f),new B.bAs(f),new B.bAv(f),new B.bAw(f),new B.bAx(f),t,e,r)
t=$.d
t=(t==null?$.d=C.q:t).q(g,x).ok.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(g,x)
s.toString
r=A.eq(C.Q.U(0.1),-1,C.T,1)
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).p2.gj()
q=q==null?g:q.k(0)
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).p4.gj().gGi()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).gv3()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).gyX()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gGt()
l=$.d
l=(l==null?$.d=C.q:l).q(g,x).aT.gj()
k=$.d
k=(k==null?$.d=C.q:k).q(g,x).R8.gj()
j=$.d
j=(j==null?$.d=C.q:j).q(g,x).gIm()
i=$.d
h=y.p
k=A.a([B.cxD(q,p,n,o,w,B.cxH((i==null?$.d=C.q:i).q(g,x).aR.gj(),new B.bAy(f),new B.bAz(f),l,new B.bAA(f),new B.bAB(f),m,new B.bAC(),new B.bAt(f),j,new B.bAu(f),k))],h)
if(u){f=$.d
f=(f==null?$.d=C.q:f).q(g,x).gC_()
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).gxv()
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).gNE()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).p4.gj()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).ok.gj()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gI_()
l=$.d
k.push(B.cxG(f,n===D.kn,!1,m,(l==null?$.d=C.q:l).q(g,x).gL2(),o.at,q,p))}return A.V(A.a([new A.cx(C.Fl,g,g,e,g),new A.aj(g,150,new B.a5k(t===D.kn,v,s,!0,g),g),A.al(g,A.V(k,C.bF,g,C.u,C.t,20),C.B,g,g,new A.am(g,g,r,C.ie,g,g,C.P),g,g,g,g,g,g,g,g),C.cP],h),C.bF,g,C.u,C.t,20)},
$S:30}
B.bAw.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LU(d)},
$S:z+4}
B.bAq.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Gd(d)},
$S:66}
B.bAx.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LV(d)},
$S:z+5}
B.bAv.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Ch(d)},
$S:66}
B.bAr.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Cg(d)},
$S:66}
B.bAs.prototype={
$1(d){var x
switch(d.a){case 0:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).G0()
break
case 1:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).G1()
break}},
$S:z+6}
B.bAA.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x1.gj().p(0,d)},
$S:95}
B.bAu.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).NB(d)},
$S:34}
B.bAB.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x2.gj().p(0,d)},
$S:95}
B.bAz.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).y1
return x.gj().i(0,x.$ti.c.a(d))},
$S:509}
B.bAy.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).xr
return x.gj().i(0,x.$ti.c.a(d))},
$S:z+7}
B.bAt.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).Nn(d)},
$S:34}
B.bAC.prototype={
$1(d){return this.aCR(d)},
aCR(d){var x=0,w=A.p(y.H),v
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=A.co(d,0,null)
x=4
return A.e(F.aSB(v),$async$$1)
case 4:x=f?2:3
break
case 2:x=5
return A.e(F.aST(v,E.A_),$async$$1)
case 5:case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:510}
B.bAR.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=$.d
if(e==null)e=$.d=C.q
x=A.r(f).h("ab.T")
w=e.q(g,x).ok.gj()
e=$.d
v=(e==null?$.d=C.q:e).q(g,x).gZ5()
e=$.d
e=(e==null?$.d=C.q:e).q(g,x)
u=e.ok.gj()===D.oD&&e.gGt().length!==0
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
e=B.cxE(s,(p==null?$.d=C.q:p).q(g,x).y2.gj(),q===D.kn,new B.bAE(f),new B.bAF(f),new B.bAG(f),new B.bAJ(f),new B.bAK(f),new B.bAL(f),t,e,r)
t=$.d
t=(t==null?$.d=C.q:t).q(g,x).ok.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(g,x)
s.toString
r=A.eq(C.Q.U(0.1),-1,C.T,1)
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).p2.gj()
q=q==null?g:q.k(0)
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).p4.gj().gGi()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).gv3()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).gyX()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gGt()
l=$.d
l=(l==null?$.d=C.q:l).q(g,x).aT.gj()
k=$.d
k=(k==null?$.d=C.q:k).q(g,x).R8.gj()
j=$.d
j=(j==null?$.d=C.q:j).q(g,x).gIm()
i=$.d
h=y.p
k=A.a([B.cxD(q,p,n,o,w,B.cxH((i==null?$.d=C.q:i).q(g,x).aR.gj(),new B.bAM(f),new B.bAN(f),l,new B.bAO(f),new B.bAP(f),m,new B.bAQ(),new B.bAH(f),j,new B.bAI(f),k))],h)
if(u){f=$.d
f=(f==null?$.d=C.q:f).q(g,x).gC_()
q=$.d
q=(q==null?$.d=C.q:q).q(g,x).gxv()
p=$.d
p=(p==null?$.d=C.q:p).q(g,x).gNE()
o=$.d
o=(o==null?$.d=C.q:o).q(g,x).p4.gj()
n=$.d
n=(n==null?$.d=C.q:n).q(g,x).ok.gj()
m=$.d
m=(m==null?$.d=C.q:m).q(g,x).gI_()
l=$.d
k.push(B.cxG(f,n===D.kn,!0,m,(l==null?$.d=C.q:l).q(g,x).gL2(),o.at,q,p))}k.push(C.cP)
return A.V(A.a([e,new A.aj(1/0,150,new B.a5k(t===D.kn,v,s,!1,g),g),A.al(g,A.V(k,C.bF,g,C.u,C.t,20),C.B,g,g,new A.am(g,g,r,C.ie,g,g,C.P),g,g,g,g,g,g,g,g)],h),C.bF,g,C.u,C.t,20)},
$S:30}
B.bAK.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LU(d)},
$S:z+4}
B.bAE.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Gd(d)},
$S:66}
B.bAL.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).LV(d)},
$S:z+5}
B.bAJ.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Ch(d)},
$S:66}
B.bAF.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).Cg(d)},
$S:66}
B.bAG.prototype={
$1(d){var x
switch(d.a){case 0:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).G0()
break
case 1:x=$.d
if(x==null)x=$.d=C.q
x.q(null,A.r(this.a).h("ab.T")).G1()
break}},
$S:z+6}
B.bAO.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x1.gj().p(0,d)},
$S:95}
B.bAI.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).NB(d)},
$S:34}
B.bAP.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).x2.gj().p(0,d)},
$S:95}
B.bAN.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).y1
return x.gj().i(0,x.$ti.c.a(d))},
$S:509}
B.bAM.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,A.r(this.a).h("ab.T")).xr
return x.gj().i(0,x.$ti.c.a(d))},
$S:z+7}
B.bAH.prototype={
$1(d){var x=$.d
if(x==null)x=$.d=C.q
return x.q(null,A.r(this.a).h("ab.T")).Nn(d)},
$S:34}
B.bAQ.prototype={
$1(d){return this.aCS(d)},
aCS(d){var x=0,w=A.p(y.H),v
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:v=A.co(d,0,null)
x=4
return A.e(F.aSB(v),$async$$1)
case 4:x=f?2:3
break
case 2:x=5
return A.e(F.aST(v,E.A_),$async$$1)
case 5:case 3:return A.n(null,w)}})
return A.o($async$$1,w)},
$S:510}
B.bAW.prototype={
$0(){var x=this.b,w=x.c
w=w==null?null:new A.G(w,new B.bAV(),A.R(w).h("G<1,c>")).c8(0,",")
return this.a.a.Pi(x.z,x.r,x.d,x.f,x.e,x.Q,x.as,x.at,w,x.y.c,x.x,x.w)},
$S:z+14}
B.bAV.prototype={
$1(d){return d.c},
$S:z+15}
B.bAU.prototype={
$0(){return this.a.a.vl(this.b)},
$S:z+16}
B.c70.prototype={
$2(d,e){return e==null},
$S:20}
B.c_m.prototype={
$1(d){var x,w,v=null,u=this.a.ax,t=u.d
t=(t==null?u.b:t).U(0.3)
x=A.aB(10)
u=u.b
w=A.eq(u.U(0.2),-1,C.T,1)
return A.al(v,A.a2(A.a([A.bM(D.ay8,u,v,14),A.fd(d.a+": ",v,!1,2,C.N,v),A.fd(A.bu("pt_BR").ah(d.b),v,!0,v,C.N,v)],y.p),C.v,C.u,C.Y,8),C.B,v,v,new A.am(t,v,w,x,v,v,C.P),v,v,v,v,C.yT,v,v,v)},
$S:z+17}
B.bcf.prototype={
$1(d){var x=y.M
x=A.F(new A.G(D.bk9,new B.bce(),x),x.h("a3.E"))
return x},
$S:z+18}
B.bce.prototype={
$1(d){return A.clU(new B.aHC(d,null),null,d,y.W)},
$S:z+19}
B.c72.prototype={
$0(){this.a.a.MS(this.b)},
$S:0}
B.c71.prototype={
$0(){this.a.a.MQ(this.b)},
$S:0}
B.c75.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q="Buscar por nome",p="CPF do cliente",o=e.b<600,n=this.a,m=n.a,l=m.f,k=m.Q,j=new B.aPs(l,k,o,m.x,r)
m=m.c
l=A.a([D.apu],y.Q)
C.e.E(l,new A.G(D.bq9,new B.c73(),y.k))
x=n.a
w=x.Q
v=w?r:x.r
u=B.cnC("Status",D.ay1,o,k,l,v,r,!1,m,y.i)
x=x.d
m=A.a([D.apw],y.u)
v=n.a.e
C.e.E(m,new A.G(v,new B.c74(),v.$ti.h("G<an.E,el<c?>>")))
l=n.a
k=l.Q
v=k?r:l.w
t=B.cnC("Campanha",D.axW,o,w,m,v,r,!1,x,y.T)
s=new B.anY(l.as,l.at,k,o,r)
if(o){m=n.d
m===$&&A.b()
l=y.V
m=A.ai(new B.Gp(m,q,C.j4,A.a([new A.zk(A.bl("[0-9]",!0,!1,!1),!1,"")],l),n.gamY(),n.gaht(),r),1)
k=n.e
k===$&&A.b()
x=y.p
n=A.a2(A.a([m,A.ai(new B.Gp(k,p,C.w_,A.a([$.ci4(),new A.Rk(11,r)],l),n.gamP(),n.gahr(),r),1)],x),C.v,C.u,C.t,4)
l=A.a([A.ai(j,1),A.ai(u,1)],x)
l.push(s)
return A.V(A.a([n,A.a2(l,C.v,C.u,C.t,4),t],x),C.bF,r,C.u,C.t,4)}m=n.d
m===$&&A.b()
l=y.V
k=A.a([new A.zk(A.bl("[0-9]",!0,!1,!1),!1,"")],l)
x=n.e
x===$&&A.b()
n=A.a([new B.Gp(m,q,C.j4,k,n.gamY(),n.gaht(),r),new B.Gp(x,p,C.w_,A.a([$.ci4(),new A.Rk(11,r)],l),n.gamP(),n.gahr(),r),j,u,t],y.p)
n.push(s)
return A.hl(C.bS,n,C.c8,C.aq,4,8)},
$S:508}
B.c73.prototype={
$1(d){var x=null
return A.za(A.a2(A.a([A.al(x,x,C.B,x,x,new A.am(d.e,x,x,x,x,x,C.bi),x,8,x,x,x,x,x,8),C.eL,A.P(d.d,1,C.N,x,x,x,x,x)],y.p),C.v,C.u,C.Y,0),d,y.i)},
$S:z+20}
B.c74.prototype={
$1(d){var x=null
return A.za(A.P(d,1,C.N,x,x,x,x,x),d,y.T)},
$S:1471}
B.c8M.prototype={
$0(){},
$S:0}
B.c8O.prototype={
$1(d){var x=this.a.a
x.toString
return x.CM(d.length===0?null:d)},
$S:15}
B.ccA.prototype={
$1(d){var x=null
return A.za(A.P(d.d,1,C.N,x,x,x,x,x),d,y.a)},
$S:z+21}
B.ccB.prototype={
$1(d){if(d!=null)this.a.f.$1(d)},
$S:z+22}
B.ccC.prototype={
$0(){return this.a.f.$1(D.md)},
$S:0}
B.bYu.prototype={
$0(){return this.a.r.$1(null)},
$S:0}
B.bB8.prototype={
$1(d){var x,w=null,v=this.a,u=v.e,t=d.b,s=u.a==t,r=this.b,q=d.a,p=r.ok
if(t!=null){t=A.aB(4)
p=p.at
if(p==null)p=w
else p=p.jx(s?r.ax.b:w,C.ac)
x=y.p
p=A.a([new A.c3(1,C.af,A.P(q,w,C.N,w,w,p,w,w),w)],x)
if(s){u=u.b===E.j1?L.qY:L.qX
C.e.E(p,A.a([C.e9,A.bM(u,r.ax.b,w,14)],x))}v=A.fP(!1,C.aj,!0,w,A.cO(!1,t,!0,new A.aD(C.ha,A.a2(p,C.v,C.u,C.Y,0),w),w,!0,w,w,w,w,w,w,w,w,w,new B.bB7(v,d),w,w,w,w,w),C.B,C.W,0,w,w,w,w,w,C.cm)}else{v=p.at
v=new A.aD(C.ha,A.P(q,w,w,w,w,v==null?w:v.i1(C.ac),w,w),w)}return A.ai(v,d.c)},
$S:z+23}
B.bB7.prototype={
$0(){var x=this.b.b
x.toString
return this.a.f.$1(x)},
$S:0}
B.bB9.prototype={
$1(d){var x,w=this.a,v=w.r.$1(d.a),u=w.as
if(u){x=d.x
x=x!=null&&x.length!==0}else x=!1
x=x?new B.bB5(w,d):null
return new B.VN(d,u,x,w.d,v,new B.bB6(w,d),w.x,w.y,w.z,w.Q,null)},
$S:z+24}
B.bB6.prototype={
$0(){return this.a.w.$1(this.b.a)},
$S:0}
B.bB5.prototype={
$0(){return this.a.at.$1(this.b.gNY())},
$S:0}
B.bBc.prototype={
$1(d){var x,w=this.a,v=w.r.$1(d.a),u=w.as
if(u){x=d.x
x=x!=null&&x.length!==0}else x=!1
x=x?new B.bBa(w,d):null
return new B.N5(d,u,x,v,new B.bBb(w,d),w.x,w.y,w.z,w.Q,null)},
$S:z+25}
B.bBb.prototype={
$0(){return this.a.w.$1(this.b.a)},
$S:0}
B.bBa.prototype={
$0(){return this.a.at.$1(this.b.gNY())},
$S:0}
B.c0i.prototype={
$0(){var x=this.a,w=x.c.a,v=x.x.$1(w),u=x.y.$1(w),t=x.z.$1(w)
if(v)return D.GU
if(u!=null)return new B.Zk(u,new B.c0h(x),null)
if(t!=null)return new B.Zj(t,null)
return C.aP},
$S:36}
B.c0h.prototype={
$0(){var x=this.a
return x.Q.$1(x.c.a)},
$S:0}
B.c0f.prototype={
$2(d,e){var x=null,w=(e.b-16)/2,v=this.a.c,u=A.a([new A.aj(w,x,new B.Gi("Valor",A.bu("pt_BR").ah(v.d),this.b.ax.b,x),x),new A.aj(w,x,new B.Gi("Gera\xe7\xe3o",B.xk(v.c),x,x),x),new A.aj(w,x,new B.Gi("Expira\xe7\xe3o",B.xk(v.Q),x,x),x)],y.p)
if(v.y===D.mO)u.push(new A.aj(w,x,new B.Gi("% Representatividade",v.gaAo(),K.pW,x),x))
v=v.at
if(v!=null)u.push(new A.aj(w,x,new B.Gi("Campanha",v,x,x),x))
return A.hl(C.bS,u,C.c8,C.aq,8,16)},
$S:112}
B.c0g.prototype={
$0(){var x=this.a,w=x.c.a,v=x.w.$1(w),u=x.x.$1(w),t=x.y.$1(w)
if(v)return D.GU
if(u!=null)return new B.Zk(u,new B.c0e(x),null)
if(t!=null)return new B.Zj(t,null)
return C.aP},
$S:36}
B.c0e.prototype={
$0(){var x=this.a
return x.z.$1(x.c.a)},
$S:0}
B.bBi.prototype={
$2(d,e){var x,w=e.b
if(w<600)x=0.6
else if(w<800)x=0.4
else{w=w<1000?0.3:0.2
x=w}return new A.aQ(new B.bBh(this.a,this.b,this.c,e,x,d),null)},
$S:103}
B.bBh.prototype={
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
t=A.m3(j,!1,!1,j,j,"Valor total de cashback gerado no per\xedodo.",!1,!1,v,i,!0,!1,"Valor Gerado",0,t,200)
if(i)s=0
else s=k.c.c
s=A.m3(j,!1,!1,j,j,"Valor de cashback ainda ativo (n\xe3o expirado / n\xe3o utilizado).",!1,!1,v,i,!0,!1,"Valor L\xedquido",0,s,200)
if(i)r=0
else r=k.c.d
r=A.m3(j,!1,!1,j,j,"Valor total de cashback utilizado pelos clientes.",!1,!1,v,i,!0,!1,"Valor Resgatado",0,r,200)
if(i)q=0
else q=k.c.gYR()
q=A.Hr(j,!1,!1,j,j,"Percentual do valor gerado que foi efetivamente resgatado.",!1,v,i,"% Resgate em Valor",0,q,200)
if(i)p=0
else p=k.c.f
o=y.p
n=A.a([x,u,t,s,r,q,A.Hr(j,!1,!1,j,j,"M\xe9dia de representatividade do cashback nos resgates.",!1,v,i,"% Representatividade",0,p,200)],o)
p=w.e
i=k.d.d
v=p.Z
q=v.gj()
q=A.OQ(!0,0.65,p.R.gj(),C.bh,!0,!0,!1,i*0.8,q,new B.bBe(w),!0,!0,!0,C.fa,k.e)
r=y.E
x=A.F(new A.G(n,new B.bBf(),r),r.h("a3.E"))
x=A.ai(A.Zf(p.v,x,q),1)
m=J.cv(7,y.F)
for(i*=0.05,u=k.f,l=0;l<7;++l){t=A.D(u)
s=$.py
if(s!=null)s.ak(v.cb$)
s=v.bI$
s===$&&A.b()
s=J.u(s,l)?0.9:0.4
m[l]=A.fj(j,A.al(j,j,C.B,j,j,new A.am(t.ax.b.U(s),j,j,j,j,j,C.bi),j,i,j,C.ha,j,j,j,i),C.aG,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new B.bBg(w,l),j,j,j,j,j,j)}i=A.a(m.slice(0),A.R(m))
return A.V(A.a([x,A.a2(i,C.v,C.aL,C.t,0)],o),C.v,j,C.u,C.t,0)},
$S:30}
B.bBe.prototype={
$2(d,e){this.a.e.Z.sj(d)},
$S:85}
B.bBf.prototype={
$1(d){return new A.aD(C.eT,d,null)},
$S:269}
B.bBg.prototype={
$0(){return this.a.e.v.wv(this.b)},
$S:0}
B.bB2.prototype={
$1(d){var x,w,v=this,u=null,t=A.op("Relat\xf3rio Detalhado de Cashback",v.a,u,u),s=d.d.d
s===$&&A.b()
x=d.a
x.toString
w=y.n
return B.cjr(A.a([B.cmh(A.a([t,A.op("P\xe1gina "+(C.e.bP(s.cx.cx,x)+1)+"/"+s.cx.cx.length,D.Ee,u,u)],w),C.a0M),new A.ld(u,4,u),B.cmh(A.a([A.op("Per\xedodo: "+v.b+" a "+v.c,D.Ee,u,u),A.op("Gerado em: "+v.d,D.Ee,u,u)],w),C.a0M),new A.ld(u,10,u),new B.anl(v.e,2),new A.ld(u,10,u)],w),C.yz)},
$S:z+26}
B.bB1.prototype={
$1(d){var x=null
return A.PC(D.x8,A.op("BShop Gest\xe3o - Relat\xf3rio de Cashback",D.c2Y,x,x),x,x,x,D.aqg,x)},
$S:1472}
B.bB0.prototype={
$1(d){var x,w,v,u,t,s,r,q=this,p=null,o="pt_BR",n=y.n,m=A.a([],n),l=q.a
if(l!=null){x=new B.awm(8,8)
x=A.aj3(p,new B.aYK(x,x,x,x),q.b)
w=A.op("Resumo do Per\xedodo",A.AW(p,q.c,p,p,p,p,p,p,p,C.eB,p,p,12,p,C.hb,p,!0,p,p,p,p),p,p)
v=B.a5i("Total Registros",C.f.k(l.a))
u=B.a5i("Clientes \xdanicos",C.f.k(l.e))
t=l.b
t=B.a5i("Valor Gerado",A.bu(o).ah(t))
s=l.c
s=B.a5i("Valor Ativo",A.bu(o).ah(s))
r=l.d
C.e.E(m,A.a([A.PC(p,B.cjr(A.a([w,new A.ld(p,8,p),B.cmh(A.a([v,u,t,s,B.a5i("Valor Utilizado",A.bu(o).ah(r)),B.a5i("Taxa Utiliza\xe7\xe3o",C.i.a4(l.gYR(),1)+"%")],n),C.byE)],n),C.yz),p,x,p,p,D.aqw),new A.ld(p,15,p)],n))}n=A.aj3(p,p,q.b)
l=y.S
m.push(B.cXl(A.A([0,D.mw,1,D.mw,2,D.mw,3,D.x8,4,D.x8,5,C.pn,6,D.mw,7,D.mw],l,y.D),20,D.c48,A.A([0,D.nl,1,D.awi,2,D.nl,3,D.nl,4,D.nl,5,C.Jz,6,D.nl,7,D.awh],l,y.bA),d,J.cLO(q.e).ghe().eC(0,new B.bB_(),y.h).cW(0),n,25,q.d,["Data","Cliente","C\xf3digo","Valor","Valor L\xedquido","Status","Expira\xe7\xe3o","Campanha"],A.aj3(p,p,q.f)))
return m},
$S:442}
B.bB_.prototype={
$1(d){var x=d.b,w=B.xk(x.b),v=A.bu("pt_BR").ah(x.d),u=A.bu("pt_BR").ah(x.f),t=B.xk(x.Q),s=x.at
if(s==null)s="-"
return A.a([w,x.r,x.w,v,u,x.y.d,t,s],y.s)},
$S:z+27}
B.bB3.prototype={
$1(d){return this.a.kt()},
$S:279}
B.by9.prototype={
$1(d){var x=this.a
if(x.c==null)return null
if(d==null){x.a.toString
return null}x.a.f.$1(d)
x.d=!1},
$S(){return this.a.$ti.h("ah(1?)")}};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a._instance_2u
var u
x(u=B.xj.prototype,"gv3","nZ",1)
w(u,"gL2","wF",2)
x(u,"gyX","rV",1)
w(u,"gI_","vO",2)
w(u,"gIm","DK",12)
w(u=B.ade.prototype,"gamY","b84",8)
w(u,"gamP","b7y",8)
x(u,"gaht","aV2",0)
x(u,"gahr","aV1",0)
x(B.ae5.prototype,"ga3p","b8r",0)
v(u=B.Sx.prototype,"gbao","bap",28)
x(u,"gaJp","aJq",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.I,[B.tQ,B.b8u,B.b8v,B.b8w,B.DH,B.T_,B.nl,B.Ai,B.bBd,B.c7_,B.awm,B.aYL])
w(A.hq,[B.bTT,B.bB4,B.bU3,B.bAk,B.bAl,B.bAo,B.bAp,B.bAm,B.bAn,B.bAi,B.bAj,B.bAw,B.bAq,B.bAx,B.bAv,B.bAr,B.bAs,B.bAA,B.bAu,B.bAB,B.bAz,B.bAy,B.bAt,B.bAC,B.bAK,B.bAE,B.bAL,B.bAJ,B.bAF,B.bAG,B.bAO,B.bAI,B.bAP,B.bAN,B.bAM,B.bAH,B.bAQ,B.bAV,B.c_m,B.bcf,B.bce,B.c73,B.c74,B.c8O,B.ccA,B.ccB,B.bB8,B.bB9,B.bBc,B.bBf,B.bB2,B.bB1,B.bB0,B.bB_,B.bB3,B.by9])
w(A.li,[B.iU,B.mB,B.F4,B.m9,B.a7T,B.aim,B.bnI,B.aBw])
v(B.bAh,A.ri)
v(B.bAS,A.vX)
v(B.xj,A.ls)
v(B.Le,A.mT)
w(A.ig,[B.bAD,B.bAR,B.bAW,B.bAU,B.c72,B.c71,B.c8M,B.ccC,B.bYu,B.bB7,B.bB6,B.bB5,B.bBb,B.bBa,B.c0i,B.c0h,B.c0g,B.c0e,B.bBh,B.bBg])
v(B.bAT,A.oN)
w(A.iB,[B.c70,B.c75,B.c0f,B.bBi,B.bBe])
w(A.H,[B.Zj,B.ab9,B.W3,B.NH,B.ajw,B.Zk,B.anY,B.aHB,B.aHC,B.awE,B.awF,B.awG,B.aPs,B.aaE,B.awH,B.awI,B.awJ,B.VN,B.N5,B.Gi,B.afs,B.a5k,B.aA5])
w(A.a8,[B.a5j,B.Gp,B.Sw])
w(A.ac,[B.ade,B.ae5,B.Sx])
v(B.anl,A.a7R)
v(B.aYK,B.aYL)
v(B.a0y,A.aBR)
v(B.au2,A.fx)
v(B.aHY,B.au2)
v(B.aov,B.aHY)
w(B.aov,[B.axW,B.Pu])
x(B.aHY,A.is)})()
A.ia(b.typeUniverse,JSON.parse('{"xj":{"aI":[],"da":[]},"Le":{"ab":["xj"],"H":[],"f":[],"i":[],"ab.T":"xj"},"Zj":{"H":[],"f":[],"i":[]},"ab9":{"H":[],"f":[],"i":[]},"W3":{"H":[],"f":[],"i":[]},"NH":{"H":[],"f":[],"i":[]},"ajw":{"H":[],"f":[],"i":[]},"Zk":{"H":[],"f":[],"i":[]},"anY":{"H":[],"f":[],"i":[]},"aHB":{"H":[],"f":[],"i":[]},"aHC":{"H":[],"f":[],"i":[]},"awE":{"H":[],"f":[],"i":[]},"awF":{"H":[],"f":[],"i":[]},"awG":{"H":[],"f":[],"i":[]},"a5j":{"a8":[],"f":[],"i":[]},"Gp":{"a8":[],"f":[],"i":[]},"ade":{"ac":["a5j"]},"ae5":{"ac":["Gp"]},"aPs":{"H":[],"f":[],"i":[]},"aaE":{"H":[],"f":[],"i":[]},"awH":{"H":[],"f":[],"i":[]},"awI":{"H":[],"f":[],"i":[]},"VN":{"H":[],"f":[],"i":[]},"N5":{"H":[],"f":[],"i":[]},"awJ":{"H":[],"f":[],"i":[]},"Gi":{"H":[],"f":[],"i":[]},"afs":{"H":[],"f":[],"i":[]},"a5k":{"H":[],"f":[],"i":[]},"aA5":{"H":[],"f":[],"i":[]},"Sw":{"a8":[],"f":[],"i":[]},"Sx":{"ac":["Sw<1>"]},"anl":{"is":[],"fx":[]},"Pu":{"is":[],"fx":[]},"aov":{"is":[],"fx":[]},"axW":{"is":[],"fx":[]},"au2":{"fx":[]}}'))
var y=(function rtii(){var x=A.a1
return{D:x("XR"),A:x("tQ"),C:x("iU"),I:x("qb"),f:x("cc<aA,tQ>"),r:x("cc<aA,Ai>"),y:x("fV"),_:x("l1"),L:x("aA"),W:x("m9"),Z:x("DH"),F:x("p3"),B:x("de<~>"),J:x("x<cV>"),t:x("x<iU>"),O:x("x<M>"),Q:x("x<el<iU?>>"),u:x("x<el<c?>>"),o:x("x<ae<c,c>>"),Y:x("x<nl>"),d:x("x<f4<@>>"),s:x("x<c>"),b:x("x<vc>"),V:x("x<t8>"),p:x("x<f>"),n:x("x<fx>"),R:x("x<~()?>"),v:x("B<nl>"),h:x("B<c>"),j:x("B<@>"),x:x("B<~()>"),P:x("ae<c,@>"),e:x("G<jc,f>"),E:x("G<f,aD>"),k:x("G<iU,el<iU?>>"),M:x("G<m9,uJ<m9>>"),c:x("G<mB,el<mB>>"),w:x("j4"),K:x("I"),l:x("Sw<m9>"),q:x("xj"),dd:x("F4"),cr:x("T_"),G:x("nl"),m:x("Ai"),cq:x("M6"),N:x("c"),bA:x("Mh"),ae:x("FK"),a:x("mB"),g:x("b2<ah>"),U:x("av<ah>"),z:x("@"),S:x("k"),i:x("iU?"),X:x("I?"),T:x("c?"),aD:x("FK?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.x8=new A.GY(1,0)
D.mw=new A.GY(-1,0)
D.ac3=new A.GY(-1,1)
D.xx=new B.aim(0,"horizontal")
D.pC=new B.aim(1,"vertical")
D.GG=new B.bAS()
D.GU=new B.ajw(null)
D.mO=new B.iU("USED","Utilizado",M.cT,1,"used")
D.xX=new B.iU("CANCELLED","Cancelado",C.Q,3,"cancelled")
D.xY=new B.iU("EXPIRED","Expirado",C.bt,2,"expired")
D.xZ=new B.iU("ACTIVE","Ativo",C.bu,0,"active")
D.mP=new B.iU("PENDING","Pendente",X.q7,4,"pending")
D.bx6=new A.i4(50,1/0,null)
D.bkQ=x([S.WO,D.bx6],y.p)
D.ao7=new A.i0(C.a9,C.u,C.Y,C.v,null,C.bX,null,0,D.bkQ,null)
D.ahy=new A.h6(C.X,null,null,D.ao7,null)
D.akO=new A.M(1,0.12941176470588237,0.45098039215686275,0.27450980392156865,C.y)
D.alj=new A.M(1,1,0,0,C.y)
D.c6p=new A.c7("Status",null,null,null,null,null,C.N,1,null,null)
D.apu=new A.el(null,D.c6p,C.fA,null,A.a1("el<iU?>"))
D.c6i=new A.c7("Campanha",null,null,null,null,null,C.N,1,null,null)
D.apw=new A.el(null,D.c6i,C.fA,null,A.a1("el<c?>"))
D.aqg=new A.qg(0,10,0,0)
D.aql=new A.az(0,2,0,2)
D.aqw=new A.qg(10,10,10,10)
D.aqJ=new A.qg(20,20,20,20)
D.J3=new A.qg(5,5,5,5)
D.nl=new A.IK(1.2)
D.awh=new A.IK(1.5)
D.awi=new A.IK(2.5)
D.axv=new A.aY(58149,"MaterialIcons",null,!1)
D.axI=new A.aY(58560,"MaterialIcons",null,!1)
D.axP=new A.aY(58890,"MaterialIcons",null,!1)
D.axR=new A.aY(58938,"MaterialIcons",null,!1)
D.axW=new A.aY(61223,"MaterialIcons",null,!1)
D.axX=new A.aY(61224,"MaterialIcons",null,!1)
D.K6=new A.aY(61531,"MaterialIcons",null,!1)
D.ay1=new A.aY(61563,"MaterialIcons",null,!1)
D.ay8=new A.aY(62054,"MaterialIcons",null,!1)
D.ayc=new A.aY(62335,"MaterialIcons",null,!1)
D.aye=new A.aY(62537,"MaterialIcons",null,!1)
D.ayy=new A.aY(984424,"MaterialIcons",null,!1)
D.axL=new A.aY(58707,"MaterialIcons",null,!1)
D.ayR=new A.di(D.axL,14,C.bu,null,null)
D.az5=new A.di(C.zM,16,null,null,null)
D.avO=new B.m9(0,"excel")
D.avP=new B.m9(1,"pdf")
D.bk9=x([D.avO,D.avP],A.a1("x<m9>"))
D.bZQ=new F.jc("Data","data",2)
D.bZO=new F.jc("Cliente","cliente",3)
D.bZW=new F.jc("Valor","valor",2)
D.bZU=new F.jc("Status","status",2)
D.bZY=new F.jc("% Represen. Cashback",null,3)
D.bZX=new F.jc("Expira\xe7\xe3o","expiracao",2)
D.bZN=new F.jc("Campanha","campanha",2)
D.bo0=x([D.bZQ,D.bZO,D.bZW,D.bZU,D.bZY,D.bZX,D.bZN],A.a1("x<jc>"))
D.bq9=x([D.xZ,D.mO,D.xY,D.xX,D.mP],y.t)
D.cex=x([],y.n)
D.md=new B.mB("geracao","Gera\xe7\xe3o",0,"geracao")
D.c7C=new B.mB("resgate","Resgate",1,"resgate")
D.c7B=new B.mB("ambos","Ambos",2,"ambos")
D.bsC=x([D.md,D.c7C,D.c7B],A.a1("x<mB>"))
D.BE=new B.bnI(1,"max")
D.bDZ=new A.a_([D.xZ,"active",D.mO,"used",D.xY,"expired",D.xX,"cancelled",D.mP,"pending"],A.a1("a_<iU,c>"))
D.bRk=new A.C(0,40)
D.bSx=new A.pn(1,0.25882352941176473,0.25882352941176473,0.25882352941176473)
D.oC=new B.awm(0,0)
D.bWb=new A.ki(C.iv,12,14)
D.aqY=new A.az(6,2,6,2)
D.bWc=new A.ki(D.aqY,10,12)
D.bWh=new B.F4(0,"init")
D.kn=new B.F4(1,"loading")
D.oD=new B.F4(2,"success")
D.a7E=new B.F4(3,"error")
D.bWi=new B.F4(4,"empty")
D.bWj=new B.awH(null)
D.bZj=new A.aj(28,null,null,null)
D.a9b=new B.a7T(0,"compact")
D.DL=new B.a7T(1,"small")
D.ceJ=new B.a7T(2,"medium")
D.kJ=new A.Hi(C.lU,1,C.xI)
D.c0C=new A.aAn(D.kJ,D.kJ,D.kJ,D.kJ,D.kJ,D.kJ)
D.c2s=new A.xK(!0,C.a3z,null,null,null,null,C.eB,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSz=new A.pn(1,0.6196078431372549,0.6196078431372549,0.6196078431372549)
D.c2Y=new A.xK(!0,D.bSz,null,null,null,null,C.eB,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSB=new A.pn(1,0.3803921568627451,0.3803921568627451,0.3803921568627451)
D.Ee=new A.xK(!0,D.bSB,null,null,null,null,C.eB,10,null,null,null,null,null,null,null,null,null,null,null,null)
D.c48=new A.xK(!0,null,null,null,null,null,C.eB,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6C=new A.c7("Limpar filtros",null,null,null,null,null,null,null,null,null)
D.c9o=new B.aBw(0,"up")
D.EJ=new B.aBw(1,"down")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dgY","cI_",()=>A.dQ("dd/MM/yyyy",null))
x($,"dgZ","cI0",()=>A.dQ("dd/MM/yyyy HH:mm",null))
x($,"dgX","cq4",()=>A.dQ("dd/MM/yyyy",null))
x($,"dj_","cJd",()=>A.dQ("dd/MM/yyyy",null))})()};
(a=>{a["7aPtpoC0s7XhiwOXqV+CiNLRyCw="]=a.current})($__dart_deferred_initializers__);