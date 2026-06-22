((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,F,H,E,M,I,N,O,K,L,B={
cDQ(d){switch(d){case"SEGUNDA":return"S"
case"TERCA":return"T"
case"QUARTA":return"Q"
case"QUINTA":return"Q"
case"SEXTA":return"S"
case"SABADO":return"S"
case"DOMINGO":return"D"
default:return"?"}},
agZ(d){var x=C.m.bC(d).toUpperCase()
if(C.m.bm(x,"SEG"))return"SEGUNDA"
if(C.m.bm(x,"TER"))return"TERCA"
if(C.m.bm(x,"QUA")&&!C.m.bm(x,"QUIN"))return"QUARTA"
if(C.m.bm(x,"QUI"))return"QUINTA"
if(C.m.bm(x,"SEX"))return"SEXTA"
if(C.m.bm(x,"S\xc1B")||C.m.bm(x,"SAB"))return"SABADO"
if(C.m.bm(x,"DOM"))return"DOMINGO"
return x},
cZm(d){var x,w,v,u=y.P,t=u.a(d.i(0,"periodo")),s=A.m7(A.b1(t.i(0,"dataInicial")))
t=A.m7(A.b1(t.i(0,"dataFinal")))
u=u.a(d.i(0,"semana"))
x=A.bR(u.i(0,"meta"))
w=A.bR(u.i(0,"realizado"))
u=A.bR(u.i(0,"percentual"))
v=y.M.a(d.i(0,"dias"))
if(v==null)v=null
else{v=J.ci(v,new B.bTU(),y.K)
v=A.F(v,v.$ti.h("a3.E"))}if(v==null)v=D.Uy
return new B.wj(new B.anH(s,t),new B.anI(x,w,u),v)},
anH:function anH(d,e){this.a=d
this.b=e},
anI:function anI(d,e,f){this.a=d
this.b=e
this.c=f},
p_:function p_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wj:function wj(d,e,f){this.a=d
this.b=e
this.c=f},
bbi:function bbi(){},
bbj:function bbj(){},
bTU:function bTU(){},
cXQ(d){switch(d.a){case 0:return"atendimento_iniciado"
case 1:return"atendimento_cancelado"
case 2:return"atendimento_concluido"
case 3:return"check_in"
case 4:return"check_out"
case 5:return"pausa_iniciada"
case 6:return"pausa_finalizada"
case 7:return"venda"}},
aAW(d){switch(d.toLowerCase()){case"atendimento_iniciado":return D.aaa
case"atendimento_cancelado":return D.aab
case"atendimento_concluido":return D.Ep
case"check_in":return D.c7y
case"check_out":return D.aac
case"pausa_iniciada":return D.c7z
case"pausa_finalizada":return D.c7A
case"venda":return D.wa
default:throw A.q(A.aM("Unknown TimelineEventType: "+d,null))}},
cXR(d){var x=y.M.a(d.i(0,"timeline"))
if(x==null)x=[]
x=J.ci(x,new B.bQy(),y.O)
x=A.F(x,x.$ti.h("a3.E"))
return new B.AZ(x)},
te:function te(d,e){this.a=d
this.b=e},
xM:function xM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.as=p},
bRR:function bRR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b0Y:function b0Y(d,e){this.a=d
this.b=e},
b1a:function b1a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b1j:function b1j(d,e){this.a=d
this.b=e},
aUK:function aUK(d){this.a=d},
bbn:function bbn(d){this.a=d},
AZ:function AZ(d){this.a=d},
bQy:function bQy(){},
bQz:function bQz(){},
wC:function wC(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.Q=o},
cDC(d){if(d<30)return C.bt
if(d<=50)return C.dH
return C.bu},
cM1(d){var x
switch(d.a){case 0:x="Sucesso"
break
case 1:x="Aten\xe7\xe3o"
break
case 2:x="Erro"
break
case 3:x="Pendente"
break
default:x=null}return x},
cM0(d){var x
switch(d.a){case 0:x=C.bu
break
case 1:x=N.q7
break
case 2:x=C.bt
break
case 3:x=C.Q
break
default:x=null}return x},
aTN(d){var x
switch(d.a){case 0:x="In\xedcio do expediente"
break
case 1:x="Fim do expediente"
break
case 2:x="Atendimento iniciado"
break
case 3:x="Atendimento conclu\xeddo"
break
case 4:x="Atendimento cancelado"
break
case 5:x="Pausa iniciada"
break
case 6:x="Retorno da pausa"
break
case 7:x="Vendas convertidas"
break
default:x=null}return x},
ciO(d){var x
switch(d.a){case 0:x=E.cT
break
case 1:x=C.Q
break
case 2:x=C.Q
break
case 3:x=C.bu
break
case 4:x=C.bt
break
case 5:x=C.dk
break
case 6:x=C.dk
break
case 7:x=E.cT
break
default:x=null}return x},
cM2(d){var x
switch(d.a){case 0:x=D.ayv
break
case 1:x=D.K4
break
case 2:x=D.zL
break
case 3:x=C.nq
break
case 4:x=D.K4
break
case 5:x=D.axF
break
case 6:x=D.zL
break
case 7:x=D.Ka
break
default:x=null}return x},
cW1(d){var x,w=y.M.a(d.i(0,"summary"))
if(w==null)w=[]
w=J.ci(w,new B.bGL(),y.h)
x=A.F(w,w.$ti.h("a3.E"))
return new B.Aw(x)},
d96(d){var x,w
try{x=B.aTN(B.aSU(B.aAW(d)))
return x}catch(w){return d.toUpperCase()}},
d95(d){var x,w
try{x=B.ciO(B.aSU(B.aAW(d)))
return x}catch(w){return C.Q}},
aSU(d){var x
switch(d.a){case 3:x=D.Fh
break
case 4:x=D.Fi
break
case 0:x=D.x0
break
case 2:x=D.pm
break
case 1:x=D.x1
break
case 5:x=D.x2
break
case 6:x=D.x3
break
case 7:x=D.x4
break
default:x=null}return x},
d91(d,e){var x,w,v,u=d.toLowerCase()
if(u==="evento"||u==="grupo"||u==="venda")try{x=B.aAW(e)
w=B.aSU(x)
return w}catch(v){return null}return null},
d93(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=d.a
if(l==="GRUPO"){l=d.y
if(l!=null&&l.a!==0)x=D.wa
else x=d.f!=null?new B.chi(d).$0():D.Ep
w=B.aSU(x)
A:{if(D.aab===x){l=D.abY
break A}if(D.aaa===x){l=D.abZ
break A}l=D.Fg
break A}v=d.z
v=A.bh(v==null?m:v.a.i(0,"duracaoAtendimento"))
v=v==null?m:C.i.af(v)
u=A.cT(0,0,0,0,0,v==null?0:v)
v=d.w
if(v==null)v=d.b.kq()
return new B.ol(v,w,"Atendimento","",d.e,d.b,u,l,d)}x=d.f!=null?new B.chj(d).$0():D.wa
w=B.aSU(x)
v=d.z
t=A.bh(v==null?m:v.a.i(0,"codigoAtendimento"))
s=t!=null&&t!==0?" (c\xf3d. "+A.z(t)+")":""
v=B.cXQ(x)
r=d.b
q=r.kq()
p=d.y
p=p==null?m:p.a
o=l+"_"+v+"_"+q+"_"+A.z(p==null?"":p)
l=d.w
if((l==null?m:l.length!==0)===!0){l.toString
n=l}else n=o
l=B.aTN(w)
v=new B.chh(x,d).$0()
return new B.ol(n,w,l,new B.che(x,d,s).$0(),v,r,new B.chg(d).$0(),D.Fg,m)},
d94(d){var x=d.a,w=A.R(x).h("G<1,ol>"),v=A.F(new A.G(x,B.daU(),w),w.h("a3.E"))
C.e.d_(v,new B.chk())
return v},
XN:function XN(d,e){this.a=d
this.b=e},
oK:function oK(d,e){this.a=d
this.b=e},
TE:function TE(d,e,f){this.a=d
this.b=e
this.c=f},
Aw:function Aw(d){this.a=d},
bGL:function bGL(){},
ol:function ol(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
chi:function chi(d){this.a=d},
chj:function chj(d){this.a=d},
che:function che(d,e,f){this.a=d
this.b=e
this.c=f},
chf:function chf(d){this.a=d},
chh:function chh(d,e){this.a=d
this.b=e},
chg:function chg(d){this.a=d},
chk:function chk(){},
bFX:function bFX(){},
bGB:function bGB(){},
xq:function xq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.k3=d
_.k4=null
_.ok=""
_.p1=e
_.p3=_.p2=null
_.p4=!1
_.R8=f
_.RG=g
_.rx=h
_.ry=i
_.to=j
_.x1=k
_.x2=l
_.xr=m
_.y1=n
_.y2=o
_.aT=p
_.aR=q
_.v=r
_.Z=s
_.R=t
_.a8=u
_.a0=v
_.aK=w
_.am=x
_.aS=a0
_.ba=a1
_.bz=a2
_.a2=a3
_.an=a4
_.b7=!1
_.dx=_.db=$
_.dy=a5
_.fr=!1
_.iX$=a6
_.iE$=a7
_.jy$=a8
_.jz$=a9
_.je$=b0
_.jA$=b1},
bFY:function bFY(d,e){this.a=d
this.b=e},
bFZ:function bFZ(){},
bG2:function bG2(){},
bG3:function bG3(){},
bG4:function bG4(){},
bG5:function bG5(){},
bG6:function bG6(d){this.a=d},
bG7:function bG7(){},
bGu:function bGu(d,e){this.a=d
this.b=e},
bGv:function bGv(d){this.a=d},
bGw:function bGw(d){this.a=d},
bG_:function bG_(d){this.a=d},
bG0:function bG0(d){this.a=d},
bG1:function bG1(d){this.a=d},
bGy:function bGy(d){this.a=d},
bGx:function bGx(d){this.a=d},
bGo:function bGo(d){this.a=d},
bGp:function bGp(d){this.a=d},
bGq:function bGq(d){this.a=d},
bGr:function bGr(d){this.a=d},
bGm:function bGm(d){this.a=d},
bGn:function bGn(d){this.a=d},
bGi:function bGi(d){this.a=d},
bGj:function bGj(d){this.a=d},
bGk:function bGk(d){this.a=d},
bGl:function bGl(d){this.a=d},
bGa:function bGa(d){this.a=d},
bGb:function bGb(d){this.a=d},
bGe:function bGe(d){this.a=d},
bGf:function bGf(d){this.a=d},
bG8:function bG8(d){this.a=d},
bG9:function bG9(d){this.a=d},
bGs:function bGs(d){this.a=d},
bGt:function bGt(d){this.a=d},
bGg:function bGg(){},
bGh:function bGh(d){this.a=d},
bGc:function bGc(d){this.a=d},
bGd:function bGd(d){this.a=d},
cW0(){return new B.LG(null)},
LG:function LG(d){this.a=d},
bGz:function bGz(d){this.a=d},
bGA:function bGA(d,e){this.a=d
this.b=e},
bGC:function bGC(d){this.a=d},
bGK:function bGK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGJ:function bGJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGG:function bGG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGF:function bGF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGD:function bGD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGE:function bGE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGI:function bGI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bGH:function bGH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9K:function c9K(d,e){this.a=d
this.b=e},
c9R:function c9R(){},
c9Q:function c9Q(){},
c9O:function c9O(){},
c9N:function c9N(){},
c9M:function c9M(){},
c9P:function c9P(){},
c9L:function c9L(){},
csl(d,e,f,g,h,i,j,k,l){return new B.ajD(l,j,k,i,g,h,f,e,d,null)},
ajD:function ajD(d,e,f,g,h,i,j,k,l,m){var _=this
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
b1H:function b1H(d){this.a=d},
d6t(d){var x,w,v,u,t,s,r=new B.cfM(),q=new B.cfK(),p=d.a,o=r.$1(p.a),n=r.$1(p.b),m=A.w(y.k,y.K)
for(p=d.c,x=p.length,w=0;w<p.length;p.length===x||(0,A.N)(p),++w){v=p[w]
m.l(0,r.$1(v.b),v)}u=A.a([],y.Z)
p=n.a
x=n.b
t=o
for(;;){s=t.a
if(s<=p)s=s===p&&t.b>x
else s=!0
if(!!s)break
u.push(t)
t=t.dd(864e8)}p=y.v
p=A.F(new A.G(u,new B.cfL(m,new B.cfN(q),q),p),p.h("a3.E"))
return p},
Dr:function Dr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cfM:function cfM(){},
cfK:function cfK(){},
cfN:function cfN(d){this.a=d},
cfL:function cfL(d,e,f){this.a=d
this.b=e
this.c=f},
a0b:function a0b(d,e,f){this.c=d
this.d=e
this.a=f},
bbm:function bbm(d,e){this.a=d
this.b=e},
bbk:function bbk(d,e){this.a=d
this.b=e},
bbl:function bbl(){},
anG:function anG(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Ir:function Ir(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ctV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new B.anT(o,d,k,m,p,r,q,s,n,l,i,g,j,h,e,f,null)},
anT:function anT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.ay=q
_.ch=r
_.CW=s
_.a=t},
cu7(d,e,f,g,h,i){return new B.Qn(g,e,i,d,h,f,null)},
aog:function aog(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bcX:function bcX(){},
bcY:function bcY(d,e){this.a=d
this.b=e},
bcV:function bcV(){},
bcW:function bcW(d,e){this.a=d
this.b=e},
Qn:function Qn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apl:function apl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjG(d,e,f,g,h){return new B.aqm(d,g,h,f,e,null)},
aqm:function aqm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjH:function bjH(d,e){this.a=d
this.b=e},
ru:function ru(d,e,f){this.a=d
this.b=e
this.c=f},
a2a:function a2a(d,e,f){this.c=d
this.d=e
this.a=f},
bl9:function bl9(d){this.a=d},
bla:function bla(){},
blb:function blb(){},
blc:function blc(d){this.a=d},
Rj:function Rj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bld:function bld(d,e){this.a=d
this.b=e},
arj:function arj(d,e){this.c=d
this.a=e},
bm5:function bm5(d){this.a=d},
anR:function anR(d,e){this.c=d
this.a=e},
XO:function XO(d,e){this.c=d
this.a=e},
a1h:function a1h(d,e){this.c=d
this.a=e},
aIs:function aIs(){this.d=!1
this.c=this.a=null},
c2a:function c2a(d){this.a=d},
c29:function c29(d){this.a=d},
Xh:function Xh(d){this.a=d},
Wg:function Wg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKE:function aKE(d,e){this.c=d
this.a=e},
aeM:function aeM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aQg:function aQg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKh:function aKh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3z:function a3z(d,e){this.c=d
this.a=e},
a8_:function a8_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bOP:function bOP(){},
AQ:function AQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a8I:function a8I(d,e,f){this.c=d
this.d=e
this.a=f},
bQt:function bQt(d,e){this.a=d
this.b=e},
bQs:function bQs(d){this.a=d},
aBQ:function aBQ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bSE:function bSE(d,e){this.a=d
this.b=e},
a3q:function a3q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3s:function a3s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amL:function amL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBx:function aBx(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
cjD(d){return C.m.cD(C.f.k(A.jD(d)),2,"0")+":"+C.m.cD(C.f.k(A.xc(d)),2,"0")},
cn2(d){var x=d.a,w=C.f.aH(x,36e8),v=C.f.aH(x,6e7)%60,u=C.f.aH(x,1e6)%60
if(w>0)return""+w+":"+C.m.cD(C.f.k(v),2,"0")+":"+C.m.cD(C.f.k(u),2,"0")
return C.m.cD(C.f.k(v),2,"0")+":"+C.m.cD(C.f.k(u),2,"0")},
cvT(d,e){var x,w=d.bI$
w===$&&A.b()
if(J.u(w,e))return
d.bI$=e
w=d.cb$
x=d.gj()
w.r=x
w.cq(x)}},D
J=c[1]
A=c[0]
C=c[2]
G=c[27]
F=c[23]
H=c[73]
E=c[36]
M=c[48]
I=c[53]
N=c[41]
O=c[30]
K=c[33]
L=c[47]
B=a.updateHolder(c[9],B)
D=c[72]
B.anH.prototype={
X(){return A.A(["dataInicial",this.a.kq(),"dataFinal",this.b.kq()],y.N,y.z)}}
B.anI.prototype={
X(){return A.A(["meta",this.a,"realizado",this.b,"percentual",this.c],y.N,y.z)}}
B.p_.prototype={
X(){var x=this
return A.A(["diaSemana",x.a,"data",x.b.kq(),"meta",x.c,"realizado",x.d,"percentual",x.e,"futuro",x.f],y.N,y.z)},
m(d,e){if(e==null)return!1
if(e instanceof B.p_)return B.agZ(this.a)===B.agZ(e.a)
return!1},
gu(d){return C.m.gu(B.agZ(this.a))}}
B.wj.prototype={
X(){return A.A(["periodo",this.a,"semana",this.b,"dias",this.c],y.N,y.z)},
h3(){var x,w,v=A.F(this.c,y.K)
C.e.d_(v,new B.bbi())
x=A.R(v).h("G<1,ae<c,c>>")
w=A.F(new A.G(v,new B.bbj(),x),x.h("a3.E"))
v=y.N
return A.A(["titulo","Faturamento por Dia","colunas",A.a([A.A(["key","data","nome","Data"],v,v),A.A(["key","day","nome","Dia da Semana"],v,v),A.A(["key","valor","nome","Faturamento (R$)"],v,v),A.A(["key","percentual","nome","% da Meta"],v,v),A.A(["key","futuro","nome","Dia Futuro?"],v,v)],y.m),"dados",w,"totalRegistros",w.length],v,y.z)}}
B.te.prototype={
F(){return"TimelineEventType."+this.b}}
B.xM.prototype={
X(){var x,w,v,u=this,t=null,s=u.b.kq(),r=u.y
r=r==null?t:r.X()
x=u.z
x=x==null?t:x.a
w=u.Q
w=w==null?t:w.a
v=u.as
v=v==null?t:v.X()
return A.A(["tipo",u.a,"dataRegistro",s,"empresa",u.c,"vendedorId",u.d,"nomeVendedor",u.e,"tipoEvento",u.f,"audioIdentifier",u.r,"iaEventId",u.w,"motivoPausa",u.x,"venda",r,"atendimento",x,"engajamento",w,"cashback",v],y.N,y.z)}}
B.bRR.prototype={
X(){var x=this
return A.A(["notaNumero",x.a,"notaSerie",x.b,"notaValorTotal",x.c,"totalItensNota",x.d,"dataVenda",x.e.kq()],y.N,y.z)}}
B.b0Y.prototype={
X(){var x,w=this.a
w=w==null?null:w.X()
x=this.b
return A.A(["gerado",w,"utilizado",x==null?null:x.X()],y.N,y.z)}}
B.b1a.prototype={
X(){var x=this
return A.A(["cashbackId",x.a,"valor",x.b,"status",x.c,"clienteCpf",x.d,"clienteNome",x.e,"campanha",x.f],y.N,y.z)}}
B.b1j.prototype={
X(){return A.A(["valor",this.a,"cashbackOrigem",this.b],y.N,y.z)}}
B.aUK.prototype={
X(){return this.a}}
B.bbn.prototype={
X(){return this.a}}
B.AZ.prototype={
X(){var x=this.a,w=A.R(x).h("G<1,ae<c,@>>")
x=A.F(new A.G(x,new B.bQz(),w),w.h("a3.E"))
return A.A(["timeline",x],y.N,y.z)}}
B.wC.prototype={
X(){var x=this
return A.A(["FaturamentoPeriodoAtual",x.a,"ValorDevolucaoPeriodoAtual",x.b,"TaxaConversaoPeriodoAtual",x.c,"PaMedioPeriodoAtual",x.d,"QuantidadeNotasPeriodoAtual",x.e,"TicketMedioPeriodoAtual",x.f,"FaturamentoPeriodoAnterior",x.r,"ValorDevolucaoPeriodoAnterior",x.w,"TaxaConversaoPeriodoAnterior",x.x,"PaMedioPeriodoAnterior",x.y,"QuantidadeNotasPeriodoAnterior",x.z,"TicketMedioPeriodoAnterior",x.Q],y.N,y.z)}}
B.XN.prototype={
F(){return"ActivityStatus."+this.b}}
B.oK.prototype={
F(){return"ActivityTypeEvent."+this.b}}
B.TE.prototype={}
B.Aw.prototype={}
B.ol.prototype={}
B.bFX.prototype={
e6(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=$.aT(),a2=$.d
if(a2==null)a2=$.d=C.q
x=a2.q(a0,y.I)
a2=x.ao$
a2===$&&A.b()
a2=a2.bB$
a2===$&&A.b()
w=A.a([],y.x)
v=y.k
u=A.ea(A.bD(1970,1,1,0,0,0,0),v)
t=A.ea(A.bD(1970,1,1,0,0,0,0),v)
s=A.ea(new A.aE(Date.now(),0,!1),v)
v=A.ea(new A.aE(Date.now(),0,!1),v)
r=A.l8("")
q=A.bI(!1)
p=A.bI(!1)
o=A.bI(!1)
n=A.bI(!1)
m=A.bI(!1)
l=A.bI(!1)
k=A.bI(!1)
j=A.bI(!1)
i=y.L
h=A.ea(new A.my(0,new A.Ev(0,C.nS),0,0),i)
g=y.r
f=y.S
e=y.N
d=y.B
d=new B.xq(new B.bGC(new B.c9K(x,a2)),w,u,t,s,v,r,q,p,o,n,m,l,k,j,h,A.ea(new A.my(0,new A.Ev(0,C.nS),0,0),i),A.ea(new A.p7(C.wB),y.i),A.ea(new B.wC(0,0,0,0,0,0,0,0,0,0,0,0),y.g),A.ea(new A.oM(0,0,0,0,0,0,0),y.w),A.iJ(C.fK,y._),A.iJ(A.a([],y.t),y.b),O.TO(A.b9(g),g),K.JW(A.w(g,f),g,f),K.JW(A.w(e,f),e,f),A.ea(new B.wj(new B.anH(new A.aE(Date.now(),0,!1),new A.aE(Date.now(),0,!1)),new B.anI(0,0,0),D.Uy),y.Y),D.GI,A.a([],y.C),A.es(a0,a0,a0,y.X,y.u),new A.de(d),new A.de(d),!1,!1)
d.jH()
d.kw(D.GI)
A.fY(a1,d,!1,y.c)}}
B.bGB.prototype={}
B.xq.prototype={
gCT(){var x,w,v=this.RG.gj()
v=A.bD(A.aL(v),A.aO(v),A.bx(v),0,0,0,0)
x=this.R8
w=x.gj()
w=C.f.aH(v.hx(A.bD(A.aL(w),A.aO(w),A.bx(w),0,0,0,0)).a,864e8)
return x.gj().dd(0-A.cT(w+1,0,0,0,0,0).a)},
gaBW(){var x,w,v,u=J.cv(7,y.k)
for(x=this.rx,w=0;w<7;++w){v=$.py
if(v!=null)v.ak(x.cb$)
v=x.bI$
v===$&&A.b()
v=A.bD(A.aL(v),A.aO(v),A.bx(v),0,0,0,0).dd(864e8*w)
u[w]=A.bD(A.aL(v),A.aO(v),A.bx(v),0,0,0,0)}return u},
gadb(){return C.f.aC(C.f.aH(this.ry.gj().hx(this.rx.gj()).a,864e8),0,6)},
ga3K(){var x=this.ry.gj(),w=A.bD(A.aL(x),A.aO(x),A.bx(x),0,0,0,0),v=w.dd(864e8),u=J.tF(this.aS.gj(),new B.bFY(w,v)),t=A.F(u,u.$ti.h("E.E"))
C.e.d_(t,new B.bFZ())
return t},
gauu(){var x,w,v,u,t,s,r=y.r,q=y.S,p=A.w(r,q)
for(x=this.ga3K(),w=x.length,v=0;v<x.length;x.length===w||(0,A.N)(x),++v){u=x[v]
p.NJ(u.b,new B.bG2(),new B.bG3())
t=u.x
s=t==null?null:t.y
if(s!=null&&s.a!==0)p.NJ(D.pm,new B.bG4(),new B.bG5())}return A.nO(p,r,q)},
gVm(){var x,w=this.ga3K()
if(this.ba.gB(0)===0)return w
x=A.R(w).h("aS<1>")
x=A.F(new A.aS(w,new B.bG6(this),x),x.h("E.E"))
C.e.d_(x,new B.bG7())
return x},
gZ4(){var x,w,v,u
for(x=this.ga3K(),w=x.length,v=C.an,u=0;u<w;++u)v=new A.bk(v.a+x[u].r.a)
return v},
bW(){var x=0,w=A.p(y.H),v=this,u,t,s,r,q,p,o
var $async$bW=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:o=v.dx
o===$&&A.b()
x=2
return A.e(o.nj(),$async$bW)
case 2:u=e
if(u==null)u=0
x=3
return A.e(v.dx.hH().bc(new B.bGu(v,u),y.J),$async$bW)
case 3:$.aT()
v.p1.push($.cM().e9(new B.bGv(v),y.e))
x=4
return A.e(v.Js(),$async$bW)
case 4:x=5
return A.e(v.dx.xJ(),$async$bW)
case 5:t=e
x=6
return A.e(v.dx.Ai(),$async$bW)
case 6:s=e
r=t==null?null:t
q=A.kK(s)?s:A.eh(J.c0(s),null)
x=r==null||q==null||q<0?7:9
break
case 7:v.ok="-1"
x=10
return A.e(v.dx.vS("-1"),$async$bW)
case 10:x=8
break
case 9:v.ok=r
case 8:o=v.aS
p=A.a([],y.t)
o.O(o)
o.E(0,p)
v.bbN()
v.J5()
v.ajj()
A.ql(C.d6,new B.bGw(v),y.E)
v.le()
return A.n(null,w)}})
return A.o($async$bW,w)},
bbN(){var x=this
$.aT()
C.e.E(x.p1,A.a([$.cM().e9(new B.bG_(x),y.y),$.cM().e9(new B.bG0(x),y.n),$.cM().e9(new B.bG1(x),y.o)],y.x))},
jh(){var x,w,v=this,u=v.p2
if(u!=null)u.aG()
u=v.p3
if(u!=null)u.aG()
for(u=v.p1,x=u.length,w=0;w<u.length;u.length===x||(0,A.N)(u),++w)u[w].aG()
C.e.O(u)
v.lL()},
Q3(d){return this.aHn(d)},
aHn(d){var x=0,w=A.p(y.H),v=this,u
var $async$Q3=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=v.rx.gj().dd(A.cT(d,0,0,0,0,0).a)
v.ry.sj(A.bD(A.aL(u),A.aO(u),A.bx(u),0,0,0,0))
x=2
return A.e(v.tx(),$async$Q3)
case 2:return A.n(null,w)}})
return A.o($async$Q3,w)},
AW(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$AW=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.e(v.K_(),$async$AW)
case 2:v.b7=!0
u=v.R8.gj()
t=v.RG.gj()
$.aT()
s=$.cM().a
s===$&&A.b()
s.A(0,new A.fV(u,t,!0))
return A.n(null,w)}})
return A.o($async$AW,w)},
N8(){var x=0,w=A.p(y.H),v=this,u,t,s,r,q
var $async$N8=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=v.ry
r=s.gj().dd(-864e8)
q=A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0)
r=v.rx
u=r.gj()
t=q.jB(A.bD(A.aL(u),A.aO(u),A.bx(u),0,0,0,0))
if(t){u=r.gj().dd(-6048e8)
r.sj(A.bD(A.aL(u),A.aO(u),A.bx(u),0,0,0,0))}s.sj(q)
x=t?2:3
break
case 2:s=r.gj()
v.R8.sj(A.bD(A.aL(s),A.aO(s),A.bx(s),0,0,0,0))
r=r.gj().dd(5184e8)
v.RG.sj(A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0))
x=4
return A.e(v.AW(),$async$N8)
case 4:v.iI()
case 3:x=5
return A.e(v.tx(),$async$N8)
case 5:return A.n(null,w)}})
return A.o($async$N8,w)},
ML(){var x=0,w=A.p(y.H),v=this,u,t,s,r,q
var $async$ML=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=v.ry
r=s.gj().dd(864e8)
q=A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0)
r=v.rx
u=r.gj().dd(5184e8)
t=q.j1(A.bD(A.aL(u),A.aO(u),A.bx(u),0,0,0,0))
if(t){u=r.gj().dd(6048e8)
r.sj(A.bD(A.aL(u),A.aO(u),A.bx(u),0,0,0,0))}s.sj(q)
x=t?2:3
break
case 2:s=r.gj()
v.R8.sj(A.bD(A.aL(s),A.aO(s),A.bx(s),0,0,0,0))
r=r.gj().dd(5184e8)
v.RG.sj(A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0))
x=4
return A.e(v.AW(),$async$ML)
case 4:v.iI()
case 3:x=5
return A.e(v.tx(),$async$ML)
case 5:return A.n(null,w)}})
return A.o($async$ML,w)},
N9(){var x=0,w=A.p(y.H),v=this,u,t
var $async$N9=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.rx
t=u.gj().dd(-6048e8)
u.sj(A.bD(A.aL(t),A.aO(t),A.bx(t),0,0,0,0))
t=u.gj()
v.ry.sj(A.bD(A.aL(t),A.aO(t),A.bx(t),0,0,0,0))
t=u.gj()
v.R8.sj(A.bD(A.aL(t),A.aO(t),A.bx(t),0,0,0,0))
u=u.gj().dd(5184e8)
v.RG.sj(A.bD(A.aL(u),A.aO(u),A.bx(u),0,0,0,0))
x=2
return A.e(v.AW(),$async$N9)
case 2:v.iI()
x=3
return A.e(v.tx(),$async$N9)
case 3:return A.n(null,w)}})
return A.o($async$N9,w)},
MM(){var x=0,w=A.p(y.H),v,u=this,t,s,r,q
var $async$MM=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=u.rx
r=s.gj().dd(6048e8)
q=A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0)
r=new A.aE(Date.now(),0,!1)
t=A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0)
if(q.dd(5184e8).j1(t)){x=1
break}s.sj(q)
r=s.gj()
u.ry.sj(A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0))
r=s.gj()
u.R8.sj(A.bD(A.aL(r),A.aO(r),A.bx(r),0,0,0,0))
s=s.gj().dd(5184e8)
u.RG.sj(A.bD(A.aL(s),A.aO(s),A.bx(s),0,0,0,0))
x=3
return A.e(u.AW(),$async$MM)
case 3:u.iI()
x=4
return A.e(u.tx(),$async$MM)
case 4:case 1:return A.n(v,w)}})
return A.o($async$MM,w)},
rV(){var x=this.ba,w=x.bI$
w===$&&A.b()
J.tE(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
return null},
bzu(d){var x=this.ba
if(x.gj().p(0,d))x.I(0,d)
else x.A(0,d)},
tx(){var x=0,w=A.p(y.H),v=this,u
var $async$tx=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.p3
if(u!=null)u.aG()
v.p3=A.dj(C.bx,new B.bGy(v))
return A.n(null,w)}})
return A.o($async$tx,w)},
ajj(){var x,w,v,u,t=this
if($.hr!==C.lT)return
x=t.ry.gj()
w=A.bD(A.aL(x),A.aO(x),A.bx(x),0,0,0,0)
v=A.bD(A.aL(w),A.aO(w),A.bx(w),23,59,59,999)
u=t.ok
if(u==="-1")u="-1"
t.vI(v,w,u)
t.Pt(v,w,u)
t.Og(v,w)},
iI(){var x=this.p2
if(x!=null)x.aG()
this.p2=A.dj(C.bx,new B.bGx(this))},
J5(){var x=0,w=A.p(y.H),v,u=this,t,s,r,q,p,o
var $async$J5=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if($.hr!==C.lT){x=1
break}t=u.R8
s=t.gj()
r=u.RG.gj()
q=u.dx
q===$&&A.b()
x=3
return A.e(q.Dm(),$async$J5)
case 3:p=e
o=u.ok
if(o==="-1")o="-1"
u.vu(o,r,s)
u.OD(r,s,o)
u.PC(r,s,o)
if(p!=null){u.vM(r,s,p,o)
u.vA(t.gj().dd(-864e8),u.gCT(),p,o)
u.OT(r,s)}case 1:return A.n(v,w)}})
return A.o($async$J5,w)},
PC(d,e,f){return this.aGd(d,e,f)},
aGd(d,e,f){var x=0,w=A.p(y.H),v=this,u,t
var $async$PC=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.y1.sj(!0)
u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.e(v.k3.Oa(A.a([u==null?"":u],y.s),d,e,f),$async$PC)
case 2:t.cZ(h,new B.bGo(v),new B.bGp(v))
return A.n(null,w)}})
return A.o($async$PC,w)},
vI(d,e,f){return this.aGe(d,e,f)},
aGe(d,e,f){var x=0,w=A.p(y.H),v=this,u
var $async$vI=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.aT.sj(!0)
u=J
x=2
return A.e(v.k3.vI(d,e,f),$async$vI)
case 2:u.cZ(h,new B.bGq(v),new B.bGr(v))
return A.n(null,w)}})
return A.o($async$vI,w)},
Pt(d,e,f){return this.aG7(d,e,f)},
aG7(d,e,f){var x=0,w=A.p(y.H),v=this,u,t
var $async$Pt=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.y2.sj(!0)
u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.e(v.k3.Pv(A.a([u==null?"":u],y.s),d,e,f),$async$Pt)
case 2:t.cZ(h,new B.bGm(v),new B.bGn(v))
return A.n(null,w)}})
return A.o($async$Pt,w)},
OD(d,e,f){return this.aEl(d,e,f)},
aEl(d,e,f){var x=0,w=A.p(y.H),v=this,u
var $async$OD=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.aR.sj(!0)
u=J
x=2
return A.e(v.k3.OF(d,e,f),$async$OD)
case 2:u.cZ(h,new B.bGa(v),new B.bGb(v))
return A.n(null,w)}})
return A.o($async$OD,w)},
vu(d,e,f){return this.aEY(d,e,f)},
aEY(d,e,f){var x=0,w=A.p(y.H),v=this,u
var $async$vu=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.xr.sj(!0)
u=J
x=2
return A.e(v.k3.vu(d,e,f),$async$vu)
case 2:u.cZ(h,new B.bGe(v),new B.bGf(v))
return A.n(null,w)}})
return A.o($async$vu,w)},
Og(d,e){return this.aDL(d,e)},
aDL(d,e){var x=0,w=A.p(y.H),v=this,u,t
var $async$Og=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:v.x1.sj(!0)
u=v.ok
if(u.length===0||u==="-1")u=null
t=J
x=2
return A.e(v.k3.Oi(d,e,u),$async$Og)
case 2:t.cZ(g,new B.bG8(v),new B.bG9(v))
return A.n(null,w)}})
return A.o($async$Og,w)},
vM(d,e,f,g){return this.aGr(d,e,f,g)},
aGr(d,e,f,g){var x=0,w=A.p(y.H),v=this,u,t
var $async$vM=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:v.x2.sj(!0)
u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.e(v.k3.q5(A.a([u==null?"":u],y.s),d,e,f,g),$async$vM)
case 2:t.cZ(i,new B.bGs(v),new B.bGt(v))
return A.n(null,w)}})
return A.o($async$vM,w)},
vA(d,e,f,g){return this.aFs(d,e,f,g)},
aFs(d,e,f,g){var x=0,w=A.p(y.H),v=this,u,t
var $async$vA=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.e(v.k3.q5(A.a([u==null?"":u],y.s),d,e,f,g),$async$vA)
case 2:t.cZ(i,new B.bGg(),new B.bGh(v))
return A.n(null,w)}})
return A.o($async$vA,w)},
OT(d,e){return this.aER(d,e)},
aER(d,e){var x=0,w=A.p(y.H),v=this,u,t
var $async$OT=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:v.v.sj(!0)
u=v.k4
u=u==null?null:u.b
if(u==null)u="000"
t=J
x=2
return A.e(v.k3.OV(u,d,e),$async$OT)
case 2:t.cZ(g,new B.bGc(v),new B.bGd(v))
return A.n(null,w)}})
return A.o($async$OT,w)},
Js(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$Js=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=new A.aE(Date.now(),0,!1)
t=A.bD(A.aL(u),A.aO(u),A.bx(u),0,0,0,0)
s=t.dd(-5184e8)
v.R8.sj(s)
v.RG.sj(t)
v.rx.sj(s)
v.ry.sj(t)
u=v.dx
u===$&&A.b()
x=2
return A.e(u.rn(s),$async$Js)
case 2:x=3
return A.e(v.dx.rm(t),$async$Js)
case 3:$.aT()
u=$.cM().a
u===$&&A.b()
u.A(0,new A.fV(s,t,!0))
return A.n(null,w)}})
return A.o($async$Js,w)},
K_(){var x=0,w=A.p(y.H),v=this,u
var $async$K_=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.dx
u===$&&A.b()
x=2
return A.e(u.rn(v.R8.gj()),$async$K_)
case 2:x=3
return A.e(v.dx.rm(v.RG.gj()),$async$K_)
case 3:return A.n(null,w)}})
return A.o($async$K_,w)}}
B.LG.prototype={
goA(){return 1300},
op(d){var x=null
return A.hk(x,x,A.h1(!0,A.eb(A.cK(new A.aQ(new B.bGz(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.a9),!0,C.aM,!0,!0),x,x,x)},
oC(d){var x=null
return A.hk(x,x,A.h1(!0,A.eb(A.cK(new A.aQ(new B.bGA(this,d),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.a9),!0,C.aM,!0,!0),x,x,x)}}
B.bGC.prototype={
vI(d,e,f){return this.aGf(d,e,f)},
aGf(d,e,f){var x=0,w=A.p(y.W),v,u=this
var $async$vI=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGK(u,A.hp(e,!1),A.hp(d,!0),f),y.T),$async$vI)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vI,w)},
Pv(d,e,f,g){return this.aG8(d,e,f,g)},
aG8(d,e,f,g){var x=0,w=A.p(y.R),v,u=this
var $async$Pv=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGJ(u,A.hp(f,!1),A.hp(e,!0),g),y.d),$async$Pv)
case 3:v=i
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Pv,w)},
OV(d,e,f){return this.aES(d,e,f)},
aES(d,e,f){var x=0,w=A.p(y.G),v,u=this
var $async$OV=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGG(u,d,A.hp(f,!1),A.hp(e,!0)),y.g),$async$OV)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OV,w)},
OF(d,e,f){return this.aEm(d,e,f)},
aEm(d,e,f){var x=0,w=A.p(y.Q),v,u=this
var $async$OF=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGF(u,f,A.hp(e,!1),A.hp(d,!0)),y.Y),$async$OF)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OF,w)},
Oa(d,e,f,g){return this.aDC(d,e,f,g)},
aDC(d,e,f,g){var x=0,w=A.p(y.U),v,u=this
var $async$Oa=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGD(u,g,d,f,e),y.w),$async$Oa)
case 3:v=i
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Oa,w)},
Oi(d,e,f){return this.aDM(d,e,f)},
aDM(d,e,f){var x=0,w=A.p(y.A),v,u=this
var $async$Oi=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGE(u,f==null||f.length===0||f==="-1"?null:f,e,d),y.j),$async$Oi)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Oi,w)},
q5(d,e,f,g,h){return this.aG0(d,e,f,g,h)},
aG0(d,e,f,g,h){var x=0,w=A.p(y.V),v,u=this
var $async$q5=A.l(function(i,j){if(i===1)return A.m(j,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGI(u,g,h.length===0||h==="-1"?null:h,d,f,e),y.L),$async$q5)
case 3:v=j
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$q5,w)},
vu(d,e,f){return this.aEZ(d,e,f)},
aEZ(d,e,f){var x=0,w=A.p(y.q),v,u=this
var $async$vu=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.bGH(u,d,f,e),y.i),$async$vu)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vu,w)}}
B.c9K.prototype={
PD(d,e,f){return this.aGg(d,e,f)},
aGg(d,e,f){var x=0,w=A.p(y.T),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$PD=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["dataInicial",d,"dataFinal",e,"sellerId",f],m,l)
j.cG(0,new B.c9R())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/sellers/timeline",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.T)
x=3
return A.e(m.co(t,y.P),$async$PD)
case 3:s=h
r=A.aR()
try{m=s.a
m.toString
r.b=B.cXR(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$PD,w)},
Pu(d,e,f){return this.aG9(d,e,f)},
aG9(d,e,f){var x=0,w=A.p(y.d),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Pu=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["dataInicial",d,"dataFinal",e,"sellerId",f],m,l)
j.cG(0,new B.c9Q())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/sellers/timeline/summary",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.d)
x=3
return A.e(m.co(t,y.P),$async$Pu)
case 3:s=h
r=A.aR()
try{m=s.a
m.toString
r.b=B.cW1(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Pu,w)},
OU(d,e,f){return this.aET(d,e,f)},
aET(d,e,f){var x=0,w=A.p(y.g),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OU=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["company",d,"dataInicial",e,"dataFinal",f],m,l)
j.cG(0,new B.c9O())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/v2/faturamento/indicadores/venda-liquida",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.g)
x=3
return A.e(m.co(t,y.P),$async$OU)
case 3:s=h
r=A.aR()
try{m=s.a
r.b=new B.wC(A.bR(m.i(0,"FaturamentoPeriodoAtual")),A.bR(m.i(0,"ValorDevolucaoPeriodoAtual")),A.bR(m.i(0,"TaxaConversaoPeriodoAtual")),A.bR(m.i(0,"PaMedioPeriodoAtual")),C.i.D(A.bR(m.i(0,"QuantidadeNotasPeriodoAtual"))),A.bR(m.i(0,"TicketMedioPeriodoAtual")),A.bR(m.i(0,"FaturamentoPeriodoAnterior")),A.bR(m.i(0,"ValorDevolucaoPeriodoAnterior")),A.bR(m.i(0,"TaxaConversaoPeriodoAnterior")),A.bR(m.i(0,"PaMedioPeriodoAnterior")),C.i.D(A.bR(m.i(0,"QuantidadeNotasPeriodoAnterior"))),A.bR(m.i(0,"TicketMedioPeriodoAnterior")))}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OU,w)},
OE(d,e,f){return this.aEn(d,e,f)},
aEn(d,e,f){var x=0,w=A.p(y.Y),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OE=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["dataInicial",e,"dataFinal",f],m,l)
j.cG(0,new B.c9N())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/v2/metas/por-dia-da-semana/vendedor/"+d,null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.Y)
x=3
return A.e(m.co(t,y.P),$async$OE)
case 3:s=h
r=A.aR()
try{m=s.a
m.toString
r.b=B.cZm(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OE,w)},
Oh(d,e,f){return this.aDO(d,e,f)},
aDO(d,e,f){var x=0,w=A.p(y.j),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Oh=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["vendedor",d,"dataInicial",e,"dataFinal",f],m,l)
j.cG(0,new B.c9M())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/sellers/breaks",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.j)
x=3
return A.e(m.co(t,y.P),$async$Oh)
case 3:s=h
r=A.aR()
try{m=s.a
m.toString
r.b=A.cAb(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Oh,w)},
vG(d,e,f,g,h){return this.aG2(d,e,f,g,h)},
aG2(d,e,f,g,h){var x=0,w=A.p(y.L),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$vG=A.l(function(a0,a1){if(a0===1)return A.m(a1,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["groupId",d,"sellerId",e,"companies[]",f,"initialDate",g,"finalDate",h],m,l)
j.cG(0,new B.c9P())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/serveria/v2/events/services",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.L)
x=3
return A.e(m.co(t,y.P),$async$vG)
case 3:s=a1
r=A.aR()
try{m=s.a
m.toString
r.b=A.cyv(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vG,w)},
O9(d,e,f,g){return this.aDF(d,e,f,g)},
aDF(d,e,f,g){var x=0,w=A.p(y.w),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$O9=A.l(function(h,a0){if(h===1)return A.m(a0,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["vendedor",d,"companies[]",e,"initialDate",f,"finalDate",g],m,l)
j.cG(0,new B.c9L())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/serveria/services/avg-time",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.w)
x=3
return A.e(m.co(t,y.P),$async$O9)
case 3:s=a0
r=A.aR()
try{m=s.a
m.toString
r.b=A.cAa(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$O9,w)},
OX(d,e,f){return this.aF1(d,e,f)},
aF1(d,e,f){var x=0,w=A.p(y.i),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OX=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["Vendedor",d,"item","indicadoresvendedor","initialDate",f,"finalDate",e],m,l)
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ao$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/Request",null,j)
l=m.ao$.bB$
l===$&&A.b()
t=u.yF(o.cu(u.yE(l,u.b)),y.i)
x=3
return A.e(m.co(t,y.P),$async$OX)
case 3:s=h
r=A.aR()
try{m=s.a
m.toString
r.b=A.ckM(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OX,w)},
yF(d,e){var x
if(A.bo(e)!==C.dq){x=d.r
x===$&&A.b()
x=!(x===C.dn||x===C.dB)}else x=!1
if(x)if(A.bo(e)===C.dg)d.r=C.cV
else d.r=C.d9
return d},
yE(d,e){var x,w=C.m.bC(e)
if(w.length===0)return d
x=A.co(e,0,null)
if(x.gm4())return x.k(0)
return A.co(d,0,null).kn(x).k(0)}}
B.ajD.prototype={
t(d){return A.cP(new B.b1H(this))}}
B.Dr.prototype={}
B.a0b.prototype={
t(d){return A.cP(new B.bbm(this,d))}}
B.anG.prototype={
b1(d,e){var x,w,v,u,t,s,r=this,q=e.a,p=r.c,o=(q-p)/2,n=q/2,m=e.b-4,l=A.nj(new A.C(n,m),o),k=r.b,j=3.141592653589793*(k/100)
$.ax()
x=A.b6()
x.f=!0
w=r.d
x.r=w.gj()
x.c=p
x.b=C.b5
x.d=C.ea
d.nL(l,-3.141592653589793,3.141592653589793,!1,x)
v=A.b6()
v.f=!0
u=r.e
v.r=u.gj()
v.c=p
v.b=C.b5
v.d=C.ea
d.nL(l,-3.141592653589793,j,!1,v)
if(k>0){t=-3.141592653589793+j
s=new A.C(n+o*Math.cos(t),m+o*Math.sin(t))
n=p*0.95
m=A.b6()
m.r=r.f.gj()
m.z=D.bQg
d.ig(s,n,m)
m=A.b6()
m.b=C.b5
m.c=p*0.28
m.r=w.U(0.5).gj()
d.ig(s,n,m)
m=A.b6()
m.r=u.gj()
d.ig(s,p*0.75,m)}},
ha(d){var x=this
return d.b!==x.b||d.c!==x.c||!d.d.m(0,x.d)||!d.e.m(0,x.e)}}
B.Ir.prototype={
aZD(d){return C.m.cD(C.f.k(A.bx(d)),2,"0")+"/"+C.m.cD(C.f.k(A.aO(d)),2,"0")+"/"+C.f.k(A.aL(d))},
b_9(d){switch(d){case"SEGUNDA":return"Segunda-feira"
case"TERCA":return"Ter\xe7a-feira"
case"QUARTA":return"Quarta-feira"
case"QUINTA":return"Quinta-feira"
case"SEXTA":return"Sexta-feira"
case"SABADO":return"S\xe1bado"
case"DOMINGO":return"Domingo"
default:return d}},
t(d){var x,w,v=this,u=null,t=A.D(d).ax.a===C.b2,s=t?D.akZ:D.Hy,r=t?D.alr:D.akI,q=v.w,p=q?B.cDC(C.i.aC(v.d,0,100)):s,o=v.aZD(v.x),n=A.aB(8),m=q?C.K:r,l=A.al(C.X,A.Md(v.c,m,!0,1,C.N),C.B,u,u,new A.am(p,u,u,n,u,u,C.P),u,25,u,u,u,u,u,25)
if(!q)return A.eP(l,0.7)
q=v.b_9(v.r)
n=o.length!==0?" "+o:""
m=C.i.a4(v.e,2)
m=A.bX(m,".",",")
x=C.i.a4(v.f,2)
x=A.bX(x,".",",")
w=C.i.a4(v.d,1)
return A.iN(l,new A.am(C.br,u,u,A.aB(8),u,u,C.P),u,u,q+"  "+n+"\nMeta: "+("R$ "+m)+"\nRealizado: "+("R$ "+x)+"\nPercentual: "+w+"%",C.l1,!1,u,u,D.c49,u,10,u)}}
B.anT.prototype={
t(d){var x=this,w=null
if(x.CW)return D.ao3
return A.V(A.a([new B.aog(x.c,x.d,x.e,x.f,w),new B.apl(x.r,x.w,x.x,w),new B.aBQ(x.y,x.z,x.Q,x.as,x.at,x.ax,x.ay,w),new B.arj(x.ch,w)],y.p),C.bF,w,C.u,C.t,8)}}
B.aog.prototype={
t(d){var x,w,v,u=this,t=null,s=u.d.gir(),r=s.dL(s,0,new B.bcX())
s=u.c.gB(0)
x=y.p
s=A.a([B.cu7(A.D(d).ax.b,r,!1,"Todos",u.e,s===0)],x)
for(w=0;w<8;++w)s.push(new A.fr(new B.bcY(u,D.bmC[w]),t))
v=A.bt(d,t,y.l).w
x=A.a([D.ao1],x)
if(v.a.a<750)x.push(A.eb(A.a2(s,C.v,C.u,C.t,8),t,t,t,t,C.aq))
else x.push(A.hl(C.bS,s,C.c8,C.aq,8,8))
return A.ei(t,8,A.V(x,C.O,t,C.u,C.t,8),t,t,t,C.aR,t,t)}}
B.Qn.prototype={
t(d){var x=this,w=null,v=C.aO.U(0.1),u=x.e,t=u?x.f.U(0.9):C.W,s=u?x.f:v,r=u?C.K:A.D(d).ax.k3,q=u?C.aU.bX(C.K.U(0.9)):C.aU,p=A.aB(8),o=A.eq(s,-1,C.T,u?1.2:0.8),n=A.al(w,A.a2(A.a([new A.c3(1,C.af,A.fd(x.c,r,!0,w,C.N,w),w),A.P("("+x.d+")",w,w,w,w,q,w,w)],y.p),C.v,C.aL,C.Y,6),C.B,w,D.aem,new A.am(t,w,o,p,w,w,C.P),w,w,w,w,D.aqx,w,w,w)
if(x.w)return A.eP(A.n5(n,!0,w),0.45)
return A.cO(!1,A.aB(8),!0,n,w,!0,w,w,w,w,w,w,w,w,w,x.r,w,w,w,w,w)}}
B.apl.prototype={
t(d){var x=null,w=y.p,v=A.ai(A.V(A.a([A.fd("Timeline de Eventos do(a) "+this.c,x,!0,x,C.N,x),D.c6e],w),C.O,x,C.u,C.t,8),1),u=A.D(d),t=A.a([A.V(A.a([A.fd(""+this.d,x,!0,x,x,x),D.c5W],w),C.v,x,C.u,C.t,5)],w),s=this.e
if(C.f.aH(s.a,1e6)>0)t.push(A.a2(A.a([new A.aj(x,28,new B.aBx(1,1,C.aO.U(0.1),x),x),A.V(A.a([A.fd(B.cn2(s),E.cT,!0,x,x,x),D.c6O],w),C.v,x,C.u,C.t,5)],w),C.v,C.u,C.t,16))
return A.ei(x,8,A.a2(A.a([v,A.ei(x,8,A.a2(t,C.v,C.u,C.t,0),u.fx,x,x,M.h9,x,x)],w),C.v,C.u,C.t,0),x,x,x,C.aR,x,x)}}
B.aqm.prototype={
t(d){return A.cP(new B.bjH(this,d))}}
B.ru.prototype={}
B.a2a.prototype={
t(d){var x=null,w=new A.G(D.bqX,new B.bl9(this),y.f).p6(0,new B.bla()),v=A.F(w,w.$ti.h("E.E")),u=C.e.dL(v,0,new B.blb())
w=A.a([],y.p)
if(u===0)w.push(D.ahB)
else C.e.E(w,new A.G(v,new B.blc(u),A.R(v).h("G<1,f>")))
return A.hR(A.V(w,C.O,x,C.u,C.t,16),x,x,x,x,this.c,!1,!0,"Distribui\xe7\xe3o de Eventos",x,1,x)}}
B.Rj.prototype={
t(d){var x=this.d
return A.cP(new B.bld(this,x<=0?0:C.i.aC(this.c.b/x,0,1)))}}
B.arj.prototype={
t(d){var x=null,w=this.c.length
if(w===0)return D.bSk
return A.ei(x,8,A.pf(x,new B.bm5(this),w,C.aM,C.fr,!0),x,x,x,C.jG,x,x)}}
B.anR.prototype={
t(d){var x,w=null,v=this.c,u=v.c,t=y.p
t=A.a([A.a2(A.a([A.ai(A.P(u.length!==0?u:B.aTN(v.b),1,C.N,w,w,I.p1,w,w),1),new B.XO(v.w,w),C.cI],t),C.v,C.u,C.t,16)],t)
x=v.e
if(x.length!==0)t.push(A.P(x,1,C.N,w,w,C.aU,w,w))
v=v.d
if(v.length!==0)t.push(A.P(v,1,C.N,w,w,C.aU,w,w))
return new A.aD(D.IV,A.V(t,C.O,w,C.u,C.t,0),w)}}
B.XO.prototype={
t(d){var x=null,w=this.c,v=B.cM0(w),u=v.U(0.15),t=A.aB(999)
return A.al(x,A.P(B.cM1(w).toUpperCase(),x,x,x,x,A.bC(x,x,v,x,x,x,x,x,x,x,x,10,x,x,C.ac,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.B,x,x,new A.am(u,x,x,t,x,x,C.P),x,x,x,x,C.iv,x,x,x)}}
B.a1h.prototype={
ab(){return new B.aIs()}}
B.aIs.prototype={
b9H(d){var x,w
if(d==null||d.length===0)return null
try{x=B.cjD(A.m7(d).vb())
return x}catch(w){return null}},
gamL(){var x=this.a.c.x.z,w=x==null?null:x.a.i(0,"npsScore")
return w==null?null:C.i.D(A.bR(w))},
gaif(){var x,w,v=this.a.c.x.z,u=v==null?null:v.a
if(u!=null){x=u.i(0,"dataFim")
if(x==null)x=u.i(0,"dataFimAtendimento")
if(typeof x=="string"&&x.length!==0)return x}w=this.a.c.x.y
if(w!=null&&w.a!==0)return w.e.kq()
return null},
gbeU(){var x=this.a.c.x.z,w=x==null?null:x.a.i(0,"taxaConversao")
if(w==null)return null
A.bR(w)
return w>0?w:null},
gaUm(){var x,w,v,u=null,t=this.a.c.x.as,s=t==null
if(s)x=u
else{w=t.a
x=w==null?u:w.b}if(x!=null&&x>0)return x
if(s)v=u
else{t=t.b
v=t==null?u:t.a}if(v!=null&&v>0)return v
return u},
t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=y.p,h=A.a([k.aTa()],i)
if(k.d){x=G.a_H(C.Q.U(0.4),1,1)
w=k.b9H(k.gaif())
v=k.a.c.x.z
u=v==null?j:v.a.i(0,"codigoAtendimento")
t=u==null?j:C.i.D(A.bR(u))
s=t!=null&&t!==0?" (c\xf3d. "+A.z(t)+")":""
r=k.gamL()
v=k.a.c.x.z
u=v==null?j:v.a.i(0,"npsComentario")
q=typeof u=="string"&&u.length!==0?u:j
v=k.a.c.x
if(v.y==null){p=v.as
o=(p==null?j:p.a)!=null}else o=!0
v=A.a([new B.aeM(D.zL,C.Q,j,B.cjD(v.b),"Atendimento iniciado"+s,j,j)],i)
if(o){p=k.a.c.x
n=p.y
p=p.as
m=p==null
l=m?j:p.a
v.push(new B.aQg(n,l,m?j:p.b,j))}if(w!=null)v.push(new B.aeM(C.nq,C.bu,C.bu.U(0.1),w,"Atendimento conclu\xeddo"+s,C.bu,j))
if(r!=null&&r>0)v.push(new B.aKh(r,q,w,j))
C.e.E(h,A.a([x,new A.aD(D.aqs,A.V(v,C.O,j,C.u,C.t,6),j)],i))}return A.V(h,C.O,j,C.u,C.t,0)},
aTa(){var x,w,v=this,u=null,t=v.c
t.toString
t=A.bt(t,u,y.l).w
x=A.aB(8)
w=y.p
return A.cO(!1,x,!0,new A.aD(D.IV,t.a.a<600?A.V(A.a([A.a2(A.a([A.ai(v.aqw(),1),v.agD()],w),C.O,C.u,C.t,16),C.hv,v.agQ()],w),C.O,u,C.u,C.Y,0):A.a2(A.a([A.ai(A.a2(A.a([new A.c3(5,C.af,v.aqw(),u),C.vP,A.ai(new A.cx(C.fB,u,u,v.agQ(),u),5)],w),C.v,C.as,C.t,0),1),C.vP,v.agD()],w),C.v,C.as,C.t,0),u),u,!0,u,u,u,u,u,u,u,u,u,new B.c2a(v),u,u,u,u,u)},
aqw(){var x=null,w=A.a([D.c5Y],y.p),v=C.m.bC(this.a.c.x.e)
if(v.length!==0)w.push(A.P(v,1,C.N,x,x,C.aU,x,x))
return A.V(w,C.O,x,C.u,C.Y,0)},
agQ(){var x,w,v,u,t=this,s=null,r=t.a.c.x.y,q=r==null?s:r.c,p=t.gaUm(),o=t.gbeU(),n=t.gaif()!=null?2:1
r=t.a.c.x
if(r.y!=null)++n
if(r.as!=null)++n
r=y.p
x=A.a([new B.Wg(""+n,"eventos",s,s)],r)
if(q!=null&&q>0)C.e.E(x,A.a([new B.Xh(s),new B.Wg(A.bu("pt_BR").ah(q),"convertido",C.bu,s)],r))
if(p!=null){w=A.bu("pt_BR").ah(p)
v=t.a.c.x.as
u=v==null
if((u?s:v.a)==null||v.a.b<=0)v=(u?s:v.b)!=null&&v.b.a>0
else v=!1
v=v?"cb utilizado":"cashback"
C.e.E(x,A.a([new B.Xh(s),new B.Wg(w,v,C.dk,s)],r))}if(o!=null)C.e.E(x,A.a([new B.Xh(s),new B.aKE(o,s)],r))
return A.hl(C.bS,x,C.p9,C.aq,6,10)},
agD(){var x=this.gamL(),w=y.p,v=A.a([new B.XO(this.a.c.w,null)],w)
if(x!=null&&x>0)C.e.E(v,A.a([C.eL,new B.a3z(x,null)],w))
v.push(C.eL)
w=this.d?C.zJ:C.qZ
v.push(A.bM(w,C.Q.U(0.4),null,16))
return A.a2(v,C.v,C.u,C.Y,0)}}
B.Xh.prototype={
t(d){var x=null
return A.al(x,x,C.B,C.Q.U(0.4),x,x,x,28,x,x,x,x,x,1)}}
B.Wg.prototype={
t(d){var x=null
return A.V(A.a([A.P(this.c,x,C.N,x,x,A.bC(x,x,this.e,x,x,x,x,x,x,x,x,13,x,x,C.b_,x,x,!0,x,x,x,x,x,x,x,x),x,x),A.P(this.d,x,C.N,x,x,C.aU.h7(10),x,x)],y.p),C.v,x,C.u,C.Y,0)}}
B.aKE.prototype={
t(d){var x,w,v=null,u=C.i.aC(this.c,0,100)
if(u<30)x=C.bt
else x=u<60?C.dk:C.bu
w=y.p
return A.a2(A.a([new A.aj(52,10,A.tT(A.aB(4),A.dz(C.bd,A.a([A.al(v,v,C.B,C.Q.U(0.4),v,v,v,v,v,v,v,v,v,v),A.aoM(C.X,A.al(v,v,C.B,x,v,v,v,v,v,v,v,v,v,v),v,u/100)],w),C.a6,C.aW,v),C.bZ),v),A.P(C.i.a4(u,0)+"%",v,v,v,v,A.bC(v,v,x,v,v,v,v,v,v,v,v,11,v,v,C.aD,v,v,!0,v,v,v,v,v,v,v,v),v,v)],w),C.v,C.u,C.Y,4)}}
B.aeM.prototype={
t(d){var x,w,v,u,t,s=this,r=null,q=A.D(d).ok.Q
if(q==null)x=r
else{q=q.b
x=q==null?r:q.U(0.75)}q=s.e
if(q==null)q=C.Q.U(0.1)
w=A.aB(6)
v=A.bM(s.c,s.d,r,13)
u=A.P(s.f,r,C.N,r,r,A.bC(r,r,x,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r)
t=s.w
return A.al(r,A.a2(A.a([v,new A.aj(36,r,u,r),A.ai(A.P(s.r,r,C.N,r,r,A.bC(r,r,t==null?x:t,r,r,r,r,r,r,r,r,12,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r),1)],y.p),C.v,C.u,C.t,10),C.B,r,r,new A.am(q,r,r,w,r,r,C.P),r,r,r,r,C.l1,r,r,r)}}
B.aQg.prototype={
t(d){var x,w,v,u,t,s,r,q=null,p=this.c
if(p!=null){x=p.a
if(x!==0){w=p.d
v=w===1?"item":"itens"
u=" #"+x+" / "+w+" "+v}else u=""
p=p.c
t=p>0?" \u2013 "+A.bu("pt_BR").ah(p):""
p=E.cT.U(0.12)
x=A.aB(6)
s=A.al(q,A.a2(A.a([D.ayO,A.ai(A.P("Venda"+u+t,q,q,q,!0,D.c2d,q,q),1)],y.p),C.v,C.u,C.t,10),C.B,q,q,new A.am(p,q,q,x,q,q,C.P),q,q,q,q,C.l1,q,q,q)}else s=q
r=this.aSR()
p=s==null
if(p&&r==null)return C.aP
if(!p&&r!=null){if(A.bt(d,q,y.l).w.a.a<750)return A.V(A.a([s,r],y.p),C.bF,q,C.u,C.t,6)
return A.a2(A.a([A.ai(s,1),A.ai(r,1)],y.p),C.O,C.u,C.t,6)}if(p){r.toString
p=r}else p=s
return p},
aSR(){var x=this,w=x.d
if(w!=null&&w.b>0)return x.agH(w.b,!1)
w=x.e
if(w!=null&&w.a>0)return x.agH(w.a,!0)
return null},
agH(d,e){var x=null,w=e?"Cashback utilizado "+A.bu("pt_BR").ah(d):"Cashback "+A.bu("pt_BR").ah(d),v=C.dk.U(0.2),u=A.aB(6)
return A.al(x,A.a2(A.a([A.bM(e?D.aym:D.ayn,C.dk,x,13),A.ai(A.P(w,x,x,x,!0,D.c3x,x,x),1)],y.p),C.v,C.u,C.t,10),C.B,x,x,new A.am(v,x,x,u,x,x,C.P),x,x,x,x,C.l1,x,x,x)}}
B.aKh.prototype={
t(d){var x,w,v,u,t=null,s=this.d,r=s!=null&&s.length!==0,q=A.D(d).ok.Q
if(q==null)x=t
else{q=q.b
x=q==null?t:q.U(0.75)}q=C.Q.U(0.15)
w=A.aB(6)
v=A.a([new B.a3z(this.c,t)],y.p)
u=this.e
if(u!=null)v.push(new A.aj(36,t,A.P(u,t,C.N,t,t,A.bC(t,t,x,t,t,t,t,t,t,t,t,10,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t),t))
if(r)v.push(A.ai(A.P(s,2,C.N,t,t,A.bC(t,t,x,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t),1))
else v.push(C.fs)
return A.al(t,A.a2(v,C.v,C.u,C.t,8),C.B,t,t,new A.am(q,t,t,w,t,t,C.P),t,t,t,t,C.iv,t,t,t)}}
B.a3z.prototype={
gbcv(){var x=this.c
if(x<0)return 0
if(x>10)return 10
return x},
b_4(d){if(d<=0)return C.Q
if(d<=3)return C.bt
if(d<=6)return C.dk
if(d<=8)return E.cT
return C.bu},
t(d){var x,w=null,v=this.gbcv(),u=this.b_4(v),t=u.U(0.2),s=A.aB(5),r=A.al(C.X,A.fd(""+v,u,!0,w,w,w),C.B,w,w,new A.am(t,w,w,s,w,w,C.P),w,w,w,w,C.iv,w,w,w)
if(this.c===0)x="Cliente n\xe3o respondeu a pesquisa"
else x=w
if(x!=null)return A.iN(r,w,w,w,x,w,w,w,w,w,w,w,w)
return r}}
B.a8_.prototype={
F1(d){var x=this.d
x=x.gj().i(0,x.$ti.c.a(d))
return x==null?0:x},
t(d){var x,w=this,v=null,u=w.d,t=new A.Ni(u,u.$ti.h("Ni<d3.K,d3.V>")).dL(0,0,new B.bOP()),s=w.F1(D.x4),r=w.F1(D.x1)
u=w.F1(D.x2)
x=w.F1(D.x3)
x=A.a([new B.AQ("Total de Eventos",""+t,v,v),new B.AQ("Vendas Convertidas",""+s,C.bu,v),new B.AQ("N\xe3o Convers\xe3o",""+r,C.bt,v),new B.AQ("Atendimentos",""+(w.F1(D.x0)+w.F1(D.pm)),E.cT,v),new B.AQ("Pausas",""+(u+x),C.dH,v)],y.p)
u=w.e
if(C.f.aH(u.a,1e6)>0)x.push(new B.AQ("Tempo Total",B.cn2(u),v,v))
return A.hR(A.V(x,C.O,v,C.u,C.t,10),v,v,v,v,w.c,!1,!0,"Resumo da Timeline",v,1,v)}}
B.AQ.prototype={
t(d){var x=null
return A.a2(A.a([A.fd(this.c,x,!1,1,C.N,x),A.fd(this.d,this.e,!0,x,x,x)],y.p),C.v,C.as,C.t,0)}}
B.a8I.prototype={
t(d){return A.cP(new B.bQt(this,d))}}
B.aBQ.prototype={
Eq(d){return C.m.cD(C.f.k(A.bx(d)),2,"0")+"/"+C.m.cD(C.f.k(A.aO(d)),2,"0")},
b6N(d,e){var x=new A.aE(Date.now(),0,!1),w=C.B1[A.aO(d)-1],v=C.B1[A.aO(e)-1],u=A.aL(d)!==A.aL(x)||A.aL(e)!==A.aL(x)?" "+A.aL(e):""
if(A.aO(d)===A.aO(e)&&A.aL(d)===A.aL(e))return w+u
return C.m.ac(w,0,3)+" / "+C.m.ac(v,0,3)+u},
t(a7){var x,w,v,u,t,s,r=this,q=null,p=6048e8,o=-6048e8,n=new A.aE(Date.now(),0,!1),m=A.bD(A.aL(n),A.aO(n),A.bx(n),0,0,0,0),l=A.bt(a7,q,y.l).w.a.a<750,k=r.c,j=C.e.ga7(k).jB(m),i=C.e.gS(k),h=C.e.ga7(k),g=i.dd(o),f=h.dd(o),e=i.dd(p),d=h.dd(p),a0=y.p,a1=A.a2(A.a([A.P(r.b6N(i,h),q,q,q,q,D.c2x,q,q),A.P(r.Eq(i)+" at\xe9 "+r.Eq(h),q,q,q,q,C.aU,q,q)],a0),C.v,C.as,C.t,0),a2=G.a_H(C.aO.U(0.08),1,1),a3=l?4:8,a4=r.Eq(g),a5=r.Eq(f),a6=A.a([],a0)
for(x=r.d,w=0;w<7;++w){v=l?2:4
if(l){u=k[w]
t=C.f.k(A.bx(u))
s=t
t=u
u=s}else{u=k[w]
t=C.m.cD(C.f.k(A.bx(u)),2,"0")+"/"+C.m.cD(C.f.k(A.aO(u)),2,"0")
s=t
t=u
u=s}t=D.bzz.i(0,A.xd(t))
t.toString
a6.push(new A.fM(1,C.d8,new A.aD(new A.az(v,0,v,0),new B.amL(u,t,w===x,new B.bSE(r,w),l,q),q),q))}return A.ei(q,8,A.V(A.a([a1,a2,A.a2(A.a([new B.a3q("Semana Anterior "+(a4+" at\xe9 "+a5),D.ayw,r.w,!0,q),new B.a3s(C.jR,r.f,!0,q),A.ai(A.a2(a6,C.v,C.u,C.t,0),1),new B.a3s(C.hV,r.r,j,q),new B.a3q("Ir para semana seguinte "+(r.Eq(e)+" at\xe9 "+r.Eq(d)),D.ayx,r.x,j,q)],a0),C.v,C.u,C.t,a3)],a0),C.v,q,C.u,C.t,4),q,q,q,C.aR,q,q)}}
B.a3q.prototype={
t(d){var x,w,v,u=this,t=null
if(!u.f)return C.aP
x=A.aB(8)
w=C.aO.U(0.1)
v=A.aB(10)
return A.iN(A.cO(!1,x,!0,A.al(C.X,A.bM(u.d,t,t,18),C.B,t,t,new A.am(w,t,t,v,t,t,C.P),t,32,t,t,t,t,t,32),t,!0,t,t,t,t,t,t,t,t,t,u.e,t,t,t,t,t),t,t,t,u.c,t,t,t,t,t,t,t,t)}}
B.a3s.prototype={
t(d){var x,w,v,u=null
if(!this.e)return C.aP
x=A.aB(8)
w=C.aO.U(0.1)
v=A.aB(10)
return A.cO(!1,x,!0,A.al(C.X,A.bM(this.c,u,u,22),C.B,u,u,new A.am(w,u,u,v,u,u,C.P),u,32,u,u,u,u,u,32),u,!0,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u)}}
B.amL.prototype={
t(d){var x=this,w=null,v=A.aB(10),u=x.r,t=u?6:8,s=x.e,r=s?A.D(d).ax.b:C.aO.U(0.1),q=A.aB(10),p=u?13:14
p=A.P(x.c,w,C.N,w,w,A.bC(w,w,s?w:C.aO.U(0.5),w,w,w,w,w,w,w,w,p,w,w,C.ac,w,w,!0,w,w,w,w,w,w,w,w),w,w)
s=s?C.K:w
return A.cO(!1,v,!0,A.al(w,A.V(A.a([p,A.P(x.d,w,w,w,w,C.aU.iB(s,u?9:w),w,w)],y.p),C.v,w,C.u,C.Y,0),C.B,w,w,new A.am(r,w,w,q,w,w,C.P),w,w,w,w,new A.az(0,t,0,t),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w)}}
B.aBx.prototype={
t(d){var x,w,v,u,t,s,r=null
A.D(d)
x=A.cjX(d)
w=A.cnE(d)
v=this.d
u=x.d
if(u==null){t=w.d
t.toString
u=t}s=x.e
if(s==null){t=w.e
t.toString
s=t}t=x.f
if(t==null)t=w.f
return new A.aj(this.c,r,A.c9(A.al(r,r,C.B,r,r,new A.am(r,r,new A.eM(C.a_,C.a_,C.a_,A.ctz(d,this.r,v)),t,r,r,C.P),r,r,r,new A.h8(0,u,0,s),r,r,r,v),r,r),r)}}
var z=a.updateTypes(["Q<~>()","k(ol,ol)","te()","J(ol)","k(p_,p_)","ae<c,c>(p_)","p_(@)","xM(@)","ae<c,@>(xM)","TE(@)","Q<~>(k)","~()","~(oK)","ah(AZ)","ah(Aw)","ah(wj)","ah(wC)","Q<AZ>()","Q<Aw>()","Q<wC>()","Q<wj>()","Dr(aE)","Ir(Dr)","Qn(T)","ru(c)","J(ru)","k(k,ru)","Rj(ru)","ol(xM)"])
B.bbi.prototype={
$2(d,e){return d.b.vb().aZ(0,e.b.vb())},
$S:z+4}
B.bbj.prototype={
$1(d){var x=B.agZ(d.a),w=A.bu("pt_BR").ah(d.d),v=C.i.a4(d.e,2),u=d.f?"Sim":"N\xe3o",t=y.N
return A.A(["day",x,"valor",w,"percentual",v+" %","futuro",u,"data",C.e.gS(d.b.kq().split("T"))],t,t)},
$S:z+5}
B.bTU.prototype={
$1(d){y.P.a(d)
return new B.p_(A.b1(d.i(0,"diaSemana")),A.m7(A.b1(d.i(0,"data"))),A.bR(d.i(0,"meta")),A.bR(d.i(0,"realizado")),A.bR(d.i(0,"percentual")),A.y8(d.i(0,"futuro")))},
$S:z+6}
B.bQy.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="atendimento",a0="engajamento",a1="cashback",a2="utilizado",a3=y.P
a3.a(a4)
x=a4.i(0,"tipo")
x=x==null?e:J.c0(x)
if(x==null)x=""
w=A.m7(A.b1(a4.i(0,"dataRegistro"))).vb()
v=a4.i(0,"empresa")
v=v==null?e:J.c0(v)
if(v==null)v=""
u=a4.i(0,"vendedorId")
u=u==null?e:J.c0(u)
if(u==null)u=""
t=a4.i(0,"nomeVendedor")
t=t==null?e:J.c0(t)
if(t==null)t=""
s=a4.i(0,"tipoEvento")
s=s==null?e:J.c0(s)
r=a4.i(0,"audioIdentifier")
r=r==null?e:J.c0(r)
q=a4.i(0,"iaEventId")
q=q==null?e:J.c0(q)
p=a4.i(0,"motivoPausa")
p=p==null?e:J.c0(p)
if(a4.i(0,"venda")!=null){o=a3.a(a4.i(0,"venda"))
n=A.bh(o.i(0,"notaNumero"))
n=n==null?e:C.i.D(n)
if(n==null)n=0
m=o.i(0,"notaSerie")
m=m==null?e:J.c0(m)
if(m==null)m=""
l=A.bh(o.i(0,"notaValorTotal"))
if(l==null)l=e
if(l==null)l=0
k=A.bh(o.i(0,"totalItensNota"))
k=k==null?e:C.i.D(k)
if(k==null)k=0
o=new B.bRR(n,m,l,k,A.m7(A.b1(o.i(0,"dataVenda"))))}else o=e
n=a4.i(0,d)!=null?new B.aUK(a3.a(a4.i(0,d))):e
m=a4.i(0,a0)!=null?new B.bbn(a3.a(a4.i(0,a0))):e
if(a4.i(0,a1)!=null){l=a3.a(a4.i(0,a1))
if(l.i(0,"gerado")!=null){k=a3.a(l.i(0,"gerado"))
j=A.bh(k.i(0,"cashbackId"))
j=j==null?e:C.i.D(j)
if(j==null)j=0
i=A.bh(k.i(0,"valor"))
if(i==null)i=e
if(i==null)i=0
h=k.i(0,"status")
h=h==null?e:J.c0(h)
if(h==null)h=""
g=k.i(0,"clienteCpf")
g=g==null?e:J.c0(g)
if(g==null)g=""
f=k.i(0,"clienteNome")
f=f==null?e:J.c0(f)
if(f==null)f=""
k=k.i(0,"campanha")
k=k==null?e:J.c0(k)
k=new B.b1a(j,i,h,g,f,k==null?"":k)}else k=e
if(l.i(0,a2)!=null){a3=a3.a(l.i(0,a2))
l=A.bh(a3.i(0,"valor"))
if(l==null)l=e
if(l==null)l=0
a3=A.bh(a3.i(0,"cashbackOrigem"))
a3=a3==null?e:C.i.D(a3)
a3=new B.b1j(l,a3==null?0:a3)}else a3=e
a3=new B.b0Y(k,a3)}else a3=e
return new B.xM(x,w,v,u,t,s,r,q,p,o,n,m,a3)},
$S:z+7}
B.bQz.prototype={
$1(d){return d.X()},
$S:z+8}
B.bGL.prototype={
$1(d){var x="valorTotal",w=A.b1(d.i(0,"tipoRegistro")),v=A.b1(d.i(0,"tipoEvento")),u=A.bQ(d.i(0,"quantidade"))
if(d.i(0,x)!=null)A.bR(d.i(0,x))
return new B.TE(w,v,u)},
$S:z+9}
B.chi.prototype={
$0(){var x,w
try{x=this.a.f
x.toString
x=B.aAW(x)
return x}catch(w){return D.Ep}},
$S:z+2}
B.chj.prototype={
$0(){var x,w
try{x=this.a.f
x.toString
x=B.aAW(x)
return x}catch(w){return D.wa}},
$S:z+2}
B.che.prototype={
$0(){var x,w,v=this
switch(v.a.a){case 7:x=new B.chf(v.b).$0()
break
case 3:x="Vendedor iniciou o expediente"
break
case 4:x="Vendedor finalizou o expediente"
break
case 0:x="Atendimento iniciado"+v.c
break
case 2:x="Atendimento conclu\xeddo"+v.c
break
case 1:x="Atendimento cancelado"+v.c
break
case 5:x=A.a(["Pausa iniciada"],y.s)
w=v.b.x
if(w!=null&&w.length!==0)x.push(w)
x=C.e.c8(x," \u2013 ")
break
case 6:x=A.a(["Retorno da pausa"],y.s)
w=v.b.x
if(w!=null&&w.length!==0)x.push(w)
x=C.e.c8(x," \u2013 ")
break
default:x=null}return x},
$S:23}
B.chf.prototype={
$0(){var x,w,v=this.a.y,u=v==null,t=u?null:v.a,s=u?null:v.d,r=u?null:v.c
if(t==null||t===0)x=""
else x=" #"+A.z(t)+" / "+A.z(s==null?"":s)+" items"
w=r==null?"":" \u2013 R$ "+C.i.a4(r,2)
return"Venda"+x+w},
$S:23}
B.chh.prototype={
$0(){A:{if(D.aac===this.a){var x=""
break A}x=C.m.bC(this.b.e)
break A}return x},
$S:23}
B.chg.prototype={
$0(){var x=this.a.z,w=A.bh(x==null?null:x.a.i(0,"duracaoAtendimento"))
if(w==null)w=null
if(w==null||w<=0)return C.an
return A.cT(0,0,0,0,0,C.i.af(w))},
$S:262}
B.chk.prototype={
$2(d,e){return d.f.aZ(0,e.f)},
$S:z+1}
B.bFY.prototype={
$1(d){var x=d.f
return!x.jB(this.a)&&x.jB(this.b)},
$S:z+3}
B.bFZ.prototype={
$2(d,e){return d.f.aZ(0,e.f)},
$S:z+1}
B.bG2.prototype={
$1(d){return d+1},
$S:21}
B.bG3.prototype={
$0(){return 1},
$S:53}
B.bG4.prototype={
$1(d){return d+1},
$S:21}
B.bG5.prototype={
$0(){return 1},
$S:53}
B.bG6.prototype={
$1(d){return this.a.ba.gj().p(0,d.b)},
$S:z+3}
B.bG7.prototype={
$2(d,e){return d.f.aZ(0,e.f)},
$S:z+1}
B.bGu.prototype={
$1(d){return this.a.k4=A.rE(d,this.b)},
$S:1491}
B.bGv.prototype={
$1(d){var x
if(d.a===C.my){$.hr=C.lT
x=this.a
if(!x.p4)return
x.iI()
x.tx()}},
$S:1492}
B.bGw.prototype={
$0(){return this.a.p4=!0},
$S:57}
B.bG_.prototype={
$1(d){return this.aCY(d)},
aCY(d){var x=0,w=A.p(y.a),v,u=this,t,s,r,q
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:q=u.a
if(q.b7){q.b7=!1
x=1
break}t=d.b
s=A.bD(A.aL(t),A.aO(t),A.bx(t),0,0,0,0)
r=s.dd(-5184e8)
q.R8.sj(r)
q.RG.sj(s)
q.rx.sj(r)
q.ry.sj(s)
if(!q.p4){x=1
break}q.iI()
x=3
return A.e(q.tx(),$async$$1)
case 3:q.eQ()
case 1:return A.n(v,w)}})
return A.o($async$$1,w)},
$S:484}
B.bG0.prototype={
$1(d){return this.aCX(d)},
aCX(d){var x=0,w=A.p(y.a),v,u=this,t,s,r
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.a
s=d.a
r=s.d
r=r==null?null:C.f.k(r)
t.ok=r==null?"-1":r
s=s.e
if(s==null)s="-"
t.to.sj(s)
if(!t.p4){x=1
break}t.iI()
t.tx()
case 1:return A.n(v,w)}})
return A.o($async$$1,w)},
$S:483}
B.bG1.prototype={
$1(d){var x=this.a
x.k4=d.a
if(!x.p4)return
x.iI()
x.tx()},
$S:82}
B.bGy.prototype={
$0(){this.a.ajj()},
$S:0}
B.bGx.prototype={
$0(){this.a.J5()},
$S:0}
B.bGo.prototype={
$1(d){this.a.y1.sj(!1)},
$S:2}
B.bGp.prototype={
$1(d){var x=this.a
x.aK.sj(d)
x.y1.sj(!1)},
$S:488}
B.bGq.prototype={
$1(d){this.a.aT.sj(!1)},
$S:2}
B.bGr.prototype={
$1(d){var x,w=B.d94(d),v=this.a,u=v.aS
u.sB(0,0)
x=u.bI$
x===$&&A.b()
J.ie(x,w)
x=u.cb$
u=u.gj()
x.r=u
x.cq(u)
v.aT.sj(!1)},
$S:z+13}
B.bGm.prototype={
$1(d){this.a.y2.sj(!1)},
$S:2}
B.bGn.prototype={
$1(d){var x,w,v,u,t,s,r=y.S,q=A.w(y.r,r),p=A.w(y.N,r)
for(r=d.a,x=r.length,w=0;w<r.length;r.length===x||(0,A.N)(r),++w){v=r[w]
u=v.b
t=B.d91(v.a,u)
if(t!=null)q.NJ(t,new B.bGi(v),new B.bGj(v))
s=u.toLowerCase()
if(s.length!==0)p.NJ(s,new B.bGk(v),new B.bGl(v))}r=this.a
B.cvT(r.bz,q)
B.cvT(r.a2,p)
r.y2.sj(!1)},
$S:z+14}
B.bGi.prototype={
$1(d){return d+this.a.c},
$S:21}
B.bGj.prototype={
$0(){return this.a.c},
$S:53}
B.bGk.prototype={
$1(d){return d+this.a.c},
$S:21}
B.bGl.prototype={
$0(){return this.a.c},
$S:53}
B.bGa.prototype={
$1(d){this.a.aR.sj(!1)},
$S:2}
B.bGb.prototype={
$1(d){var x=this.a
x.an.sj(d)
x.aR.sj(!1)},
$S:z+15}
B.bGe.prototype={
$1(d){this.a.xr.sj(!1)},
$S:2}
B.bGf.prototype={
$1(d){var x=this.a
x.a8.sj(d)
x.xr.sj(!1)},
$S:213}
B.bG8.prototype={
$1(d){this.a.x1.sj(!1)},
$S:2}
B.bG9.prototype={
$1(d){var x,w,v=this.a,u=v.am
u.sB(0,0)
x=u.bI$
x===$&&A.b()
J.ie(x,d.a)
x=u.cb$
w=u.gj()
x.r=w
x.cq(w)
u=u.gj()
x.r=u
x.cq(u)
v.x1.sj(!1)},
$S:487}
B.bGs.prototype={
$1(d){this.a.x2.sj(!1)},
$S:2}
B.bGt.prototype={
$1(d){var x=this.a
x.Z.sj(d)
x.x2.sj(!1)},
$S:117}
B.bGg.prototype={
$1(d){},
$S:2}
B.bGh.prototype={
$1(d){this.a.R.sj(d)},
$S:117}
B.bGc.prototype={
$1(d){this.a.v.sj(!1)},
$S:2}
B.bGd.prototype={
$1(d){var x=this.a
x.a0.sj(d)
x.v.sj(!1)},
$S:z+16}
B.bGz.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=$.d
if(e==null)e=$.d=C.q
x=A.r(this.a).h("ab.T")
e=e.q(f,x).v.gj()
w=$.d
w=(w==null?$.d=C.q:w).q(f,x).a0.gj()
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).a0.gj()
u=$.d
u=(u==null?$.d=C.q:u).q(f,x).a0.gj()
t=$.d
e=A.ai(B.bjG(e,""+u.e+" vendas | "+C.i.a4((t==null?$.d=C.q:t).q(f,x).a0.gj().d,2)+" PA",v.r,"Vendas L\xedquidas",w.a),1)
w=$.d
w=(w==null?$.d=C.q:w).q(f,x).xr.gj()
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).a8.gj()
u=$.d
w=A.ai(B.bjG(w,f,(u==null?$.d=C.q:u).q(f,x).a8.gj().a.a.f,"Ticket M\xe9dio",v.a.a.x),1)
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).aR.gj()
u=$.d
v=A.ai(new B.a0b(v,(u==null?$.d=C.q:u).q(f,x).an.gj(),f),2)
u=$.d
u=(u==null?$.d=C.q:u).q(f,x).x2.gj()
t=$.d
t=(t==null?$.d=C.q:t).q(f,x).Z.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(f,x).Z.gj()
r=$.d
r=(r==null?$.d=C.q:r).q(f,x).Z.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(f,x).R.gj()
p=$.d
p=(p==null?$.d=C.q:p).q(f,x).R.gj()
o=$.d
o=(o==null?$.d=C.q:o).q(f,x).R.gj()
n=$.d
n=(n==null?$.d=C.q:n).q(f,x).gCT()
m=$.d
u=A.ai(B.csl(u,(m==null?$.d=C.q:m).q(f,x).R8.gj().dd(-864e8),n,p.d,o.e,q.a,s.d,r.e,t.a),2)
t=$.d
t=(t==null?$.d=C.q:t).q(f,x).y1.gj()
s=$.d
r=y.p
s=A.a2(A.a([e,w,v,u,A.ai(new B.a8I(t,(s==null?$.d=C.q:s).q(f,x).aK.gj(),f),2)],r),C.v,C.u,C.t,8)
t=$.d
e=(t==null?$.d=C.q:t).q(f,x).ba
w=$.d
w=(w==null?$.d=C.q:w).q(f,x).gauu()
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).gyX()
u=$.d
u=(u==null?$.d=C.q:u).q(f,x).gaB7()
t=$.d
t=(t==null?$.d=C.q:t).q(f,x).to.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(f,x).gVm().length
p=$.d
p=(p==null?$.d=C.q:p).q(f,x).gZ4()
o=$.d
o=(o==null?$.d=C.q:o).q(f,x).gaBW()
n=$.d
n=(n==null?$.d=C.q:n).q(f,x).gadb()
m=$.d
m=(m==null?$.d=C.q:m).q(f,x).gad9()
l=$.d
l=(l==null?$.d=C.q:l).q(f,x).gazu()
k=$.d
k=(k==null?$.d=C.q:k).q(f,x).gayt()
j=$.d
j=(j==null?$.d=C.q:j).q(f,x).gazv()
i=$.d
i=(i==null?$.d=C.q:i).q(f,x).gayw()
h=$.d
h=(h==null?$.d=C.q:h).q(f,x).gVm()
g=$.d
if(!(g==null?$.d=C.q:g).q(f,x).aT.gj()){g=$.d
g=(g==null?$.d=C.q:g).q(f,x).y2.gj()}else g=!0
o=A.ai(A.V(A.a([B.ctV(w,h,g,k,i,l,j,v,m,u,n,e,t,p,q,o)],r),C.v,f,C.u,C.t,8),65)
q=$.d
e=(q==null?$.d=C.q:q).q(f,x).y2.gj()
w=$.d
w=(w==null?$.d=C.q:w).q(f,x).bz
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).gZ4()
u=$.d
u=(u==null?$.d=C.q:u).q(f,x).am
u=u.cW(u)
t=$.d
t=(t==null?$.d=C.q:t).q(f,x).x1.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(f,x).y2.gj()
p=$.d
return A.V(A.a([new A.aj(f,120,s,f),A.a2(A.a([o,A.ai(A.V(A.a([new B.a8_(e,w,v,f),new A.aj(f,400,new F.yz(new A.nK(u),t,f),f),new B.a2a(q,(p==null?$.d=C.q:p).q(f,x).a2,f)],r),C.v,f,C.u,C.t,8),35)],r),C.O,C.u,C.t,8)],r),C.v,f,C.u,C.t,8)},
$S:30}
B.bGA.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=A.P("Atividades do Vendedor",a9,a9,a9,a9,A.D(this.b).ok.x,a9,a9),b1=$.d
if(b1==null)b1=$.d=C.q
x=A.r(this.a).h("ab.T")
b1=b1.q(a9,x).v.gj()
w=$.d
w=(w==null?$.d=C.q:w).q(a9,x).a0.gj()
v=$.d
v=(v==null?$.d=C.q:v).q(a9,x).a0.gj()
u=$.d
u=(u==null?$.d=C.q:u).q(a9,x).a0.gj()
t=$.d
b1=A.ai(B.bjG(b1,""+u.e+" vendas | "+C.i.a4((t==null?$.d=C.q:t).q(a9,x).a0.gj().d,2)+" PA",v.r,"Vendas L\xedquidas",w.a),1)
w=$.d
w=(w==null?$.d=C.q:w).q(a9,x).xr.gj()
v=$.d
v=(v==null?$.d=C.q:v).q(a9,x).a8.gj()
u=$.d
t=y.p
v=A.a2(A.a([b1,A.ai(B.bjG(w,a9,(u==null?$.d=C.q:u).q(a9,x).a8.gj().a.a.f,"Ticket M\xe9dio",v.a.a.x),1)],t),C.v,C.u,C.t,8)
u=$.d
b1=(u==null?$.d=C.q:u).q(a9,x).aR.gj()
w=$.d
w=(w==null?$.d=C.q:w).q(a9,x).an.gj()
u=$.d
u=(u==null?$.d=C.q:u).q(a9,x).x2.gj()
s=$.d
s=(s==null?$.d=C.q:s).q(a9,x).Z.gj()
r=$.d
r=(r==null?$.d=C.q:r).q(a9,x).Z.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(a9,x).Z.gj()
p=$.d
p=(p==null?$.d=C.q:p).q(a9,x).R.gj()
o=$.d
o=(o==null?$.d=C.q:o).q(a9,x).R.gj()
n=$.d
n=(n==null?$.d=C.q:n).q(a9,x).R.gj()
m=$.d
m=(m==null?$.d=C.q:m).q(a9,x).gCT()
l=$.d
u=B.csl(u,(l==null?$.d=C.q:l).q(a9,x).R8.gj().dd(-864e8),m,o.d,n.e,p.a,r.d,q.e,s.a)
s=$.d
s=(s==null?$.d=C.q:s).q(a9,x).y1.gj()
r=$.d
r=(r==null?$.d=C.q:r).q(a9,x).aK.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(a9,x).y2.gj()
p=$.d
p=(p==null?$.d=C.q:p).q(a9,x).bz
o=$.d
o=(o==null?$.d=C.q:o).q(a9,x).gZ4()
n=$.d
n=(n==null?$.d=C.q:n).q(a9,x).am
n=n.cW(n)
m=$.d
m=(m==null?$.d=C.q:m).q(a9,x).x1.gj()
l=$.d
l=(l==null?$.d=C.q:l).q(a9,x).y2.gj()
k=$.d
k=(k==null?$.d=C.q:k).q(a9,x).a2
j=$.d
j=(j==null?$.d=C.q:j).q(a9,x).ba
i=$.d
i=(i==null?$.d=C.q:i).q(a9,x).gauu()
h=$.d
h=(h==null?$.d=C.q:h).q(a9,x).gyX()
g=$.d
g=(g==null?$.d=C.q:g).q(a9,x).gaB7()
f=$.d
f=(f==null?$.d=C.q:f).q(a9,x).to.gj()
e=$.d
e=(e==null?$.d=C.q:e).q(a9,x).gVm().length
d=$.d
d=(d==null?$.d=C.q:d).q(a9,x).gZ4()
a0=$.d
a0=(a0==null?$.d=C.q:a0).q(a9,x).gaBW()
a1=$.d
a1=(a1==null?$.d=C.q:a1).q(a9,x).gadb()
a2=$.d
a2=(a2==null?$.d=C.q:a2).q(a9,x).gad9()
a3=$.d
a3=(a3==null?$.d=C.q:a3).q(a9,x).gazu()
a4=$.d
a4=(a4==null?$.d=C.q:a4).q(a9,x).gayt()
a5=$.d
a5=(a5==null?$.d=C.q:a5).q(a9,x).gazv()
a6=$.d
a6=(a6==null?$.d=C.q:a6).q(a9,x).gayw()
a7=$.d
a7=(a7==null?$.d=C.q:a7).q(a9,x).gVm()
a8=$.d
if(!(a8==null?$.d=C.q:a8).q(a9,x).aT.gj()){a8=$.d
x=(a8==null?$.d=C.q:a8).q(a9,x).y2.gj()}else x=!0
return A.V(A.a([b0,new A.aj(a9,100,v,a9),new B.a0b(b1,w,a9),new A.aj(a9,120,u,a9),new A.aj(a9,130,new B.a8I(s,r,a9),a9),new B.a8_(q,p,o,a9),new A.aj(a9,400,new F.yz(new A.nK(n),m,a9),a9),new B.a2a(l,k,a9),B.ctV(i,a7,x,a4,a6,a3,a5,h,a2,g,a1,j,f,d,e,a0),C.cP],t),C.v,a9,C.u,C.Y,8)},
$S:30}
B.bGK.prototype={
$0(){var x=this,w=x.d
if(w.length===0)w=null
return x.a.a.PD(x.b,x.c,w)},
$S:z+17}
B.bGJ.prototype={
$0(){var x=this,w=x.d
if(w.length===0)w=null
return x.a.a.Pu(x.b,x.c,w)},
$S:z+18}
B.bGG.prototype={
$0(){var x=this,w=x.b
if(w.length===0)w=null
return x.a.a.OU(w,x.c,x.d)},
$S:z+19}
B.bGF.prototype={
$0(){var x=this
return x.a.a.OE(x.b,x.c,x.d)},
$S:z+20}
B.bGD.prototype={
$0(){var x=this
return x.a.a.O9(x.b,x.c,A.hp(x.d,!1),A.hp(x.e,!0))},
$S:316}
B.bGE.prototype={
$0(){var x=this
return x.a.a.Oh(x.b,A.hp(x.c,!1),A.hp(x.d,!0))},
$S:315}
B.bGI.prototype={
$0(){var x=this
return x.a.a.vG(x.b,x.c,x.d,A.hp(x.e,!1),A.hp(x.f,!0))},
$S:313}
B.bGH.prototype={
$0(){var x=this,w=A.hp(x.c,!1)
return x.a.a.OX(x.b,A.hp(x.d,!0),w)},
$S:212}
B.c9R.prototype={
$2(d,e){return e==null},
$S:20}
B.c9Q.prototype={
$2(d,e){return e==null},
$S:20}
B.c9O.prototype={
$2(d,e){return e==null},
$S:20}
B.c9N.prototype={
$2(d,e){return e==null},
$S:20}
B.c9M.prototype={
$2(d,e){return e==null},
$S:20}
B.c9P.prototype={
$2(d,e){return e==null},
$S:20}
B.c9L.prototype={
$2(d,e){return e==null},
$S:20}
B.b1H.prototype={
$2(d,e){var x=null,w=this.a
return w.z?A.a2x(e.d):A.ei(x,8,F.cjh(!1,w.y,w.x,w.r,w.w,w.f,w.d,w.e,w.c),x,x,x,C.aR,x,x)},
$S:114}
B.cfM.prototype={
$1(d){var x=d.vb()
return A.bD(A.aL(x),A.aO(x),A.bx(x),0,0,0,0)},
$S:1493}
B.cfK.prototype={
$1(d){switch(A.xd(d)){case 1:return"SEGUNDA"
case 2:return"TERCA"
case 3:return"QUARTA"
case 4:return"QUINTA"
case 5:return"SEXTA"
case 6:return"SABADO"
case 7:return"DOMINGO"
default:return""}},
$S:512}
B.cfN.prototype={
$1(d){return B.cDQ(this.a.$1(d))},
$S:512}
B.cfL.prototype={
$1(d){var x,w,v=null,u=this.a.i(0,d),t=u==null,s=!t,r=t?v:u.f,q=s&&r!==!0
r=t?v:u.e
x=C.i.aC(r==null?0:r,0,100)
r=s?B.cDQ(B.agZ(u.a)):this.b.$1(d)
w=t?v:u.c
if(w==null)w=0
t=t?v:u.d
if(t==null)t=0
return new B.Dr(r,x,w,t,s?B.agZ(u.a):this.c.$1(d),q,d)},
$S:z+21}
B.bbm.prototype={
$2(d,e){var x,w,v,u=null,t=this.a
if(t.c)return D.bwZ
t=t.d
x=C.i.aC(t.b.c,0,100)
w=B.d6t(t)
t=this.b
t=A.a8Y(new B.bbk(A.D(t).ax.a===C.b2?D.aix:D.Hy,t),u,C.n5,C.eS,new A.aG(0,x,y.D),y.F)
v=A.R(w).h("G<1,Ir>")
v=A.F(new A.G(w,new B.bbl(),v),v.h("a3.E"))
return new A.aj(1/0,120,A.ei(u,8,A.V(A.a([C.fs,new A.aj(100,25,t,u),new A.aj(u,25,A.hl(C.EP,v,C.c8,C.aq,0,6),u)],y.p),C.v,u,C.u,C.t,8),u,u,u,C.aR,u,u),u)},
$S:74}
B.bbk.prototype={
$3(d,e,f){var x=null,w=B.cDC(e),v=A.iZ(x,x,x,new B.anG(e,C.f.aC(6,8,14),this.a,w,D.anM,x),D.bZ3),u=A.a8T(A.mA(C.i.a4(e,0)+"%",w,!0,x,C.N),D.bRn),t=A.D(this.b).ok.x
return A.dz(C.X,A.a([v,u,A.P("Meta semanal",1,C.N,x,x,t==null?x:t.iB(C.aO,8),x,x)],y.p),C.a6,C.aW,x)},
$S:1495}
B.bbl.prototype={
$1(d){return new B.Ir(d.a,d.b,d.c,d.d,d.e,d.f,d.r,null)},
$S:z+22}
B.bcX.prototype={
$2(d,e){return d+e},
$S:41}
B.bcY.prototype={
$1(d){var x,w,v,u,t=this.a,s=this.b,r=t.d.i(0,s)
if(r==null)r=0
x=B.aTN(s)
w=t.c.gj().p(0,s)
v=B.ciO(s)
u=r===0
return B.cu7(v,r,u,x,u?new B.bcV():new B.bcW(t,s),w)},
$S:z+23}
B.bcV.prototype={
$0(){},
$S:0}
B.bcW.prototype={
$0(){return this.a.f.$1(this.b)},
$S:0}
B.bjH.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.a
if(l.c)return C.Bq
x=A.a3B(m,"pt_BR","")
w=l.f
v=l.e
u=v-w
t=u>0
s=u<0
r=w!==0?u/w*100:m
if(u===0)q=C.Q
else q=t?C.du:C.bt
p=A.D(this.b).ok.ax
p=p==null?m:p.h7(10)
o=y.p
p=A.a([A.ai(A.P(l.d,m,C.N,m,m,p,m,m),1)],o)
if(t)n=D.ayr
else n=s?D.ayq:H.r0
p.push(A.bM(n,q,m,18))
p=A.a2(p,C.v,C.u,C.t,0)
v=A.mA("R$ "+x.ah(v),m,!0,m,C.N)
l=l.r
l=A.a([A.ai(A.P(l==null?"":l,2,C.i9,m,!0,C.aU,m,m),1)],o)
if(r!=null){if(t)n=D.axd
else n=s?C.ix:H.r0
l.push(A.a2(A.a([A.bM(n,q,m,m),A.P(C.i.a4(Math.abs(r),1)+"%",m,m,m,m,A.bC(m,m,q,m,m,m,m,m,m,m,m,12,m,m,C.ac,m,m,!0,m,m,m,m,m,m,m,m),m,m)],o),C.v,C.u,C.t,0))}return A.ei(m,8,A.V(A.a([p,v,A.a2(l,C.dW,C.as,C.t,0)],o),C.O,m,C.f0,C.t,0),m,m,m,C.aR,m,m)},
$S:114}
B.bl9.prototype={
$1(d){var x=this.a.d,w=x.gj().i(0,x.$ti.c.a(d))
if(w==null)w=0
return new B.ru(B.d96(d),w,B.d95(d))},
$S:z+24}
B.bla.prototype={
$1(d){return d.b>0},
$S:z+25}
B.blb.prototype={
$2(d,e){return d+e.b},
$S:z+26}
B.blc.prototype={
$1(d){return new B.Rj(d,this.a,6,8,null)},
$S:z+27}
B.bld.prototype={
$2(d,e){var x=null,w=this.a,v=w.c,u=y.p,t=w.e
w=w.f
return A.V(A.a([A.a2(A.a([A.ai(A.fd(v.a.toUpperCase(),x,!1,1,C.N,x),1),A.mA(C.f.k(v.b),x,!0,1,C.N)],u),C.v,C.u,C.t,0),new A.aj(x,t,A.dz(C.bd,A.a([A.al(x,x,C.B,x,x,new A.am(C.aO.U(0.1),x,x,A.aB(w),x,x,C.P),x,t,x,x,x,x,x,x),A.nF(x,x,x,C.n5,new A.am(v.c,x,x,A.aB(w),x,x,C.P),C.qs,x,t,x,x,e.b*this.b)],u),C.a6,C.aW,x),x)],u),C.O,x,C.u,C.t,8)},
$S:202}
B.bm5.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q=this.a.c,p=q[e],o=e===q.length-1,n=p.x!=null
q=p.b
x=B.ciO(q)
w=n?D.axz:B.cM2(q)
q=y.p
v=A.a([A.fd(B.cjD(p.f),r,!0,r,r,r)],q)
u=p.r
if(C.f.aH(u.a,1e6)>0)v.push(A.P(B.cn2(u),r,r,r,r,C.aU,r,r))
v=A.V(v,C.dW,r,C.u,C.t,0)
u=x.U(0.15)
t=A.eq(x,-1,C.T,1.2)
t=A.a([C.hv,A.al(r,A.bM(w,x,r,16),C.B,r,r,new A.am(u,r,t,r,r,r,C.bi),r,28,r,r,r,r,r,28)],q)
if(!o)t.push(A.ai(A.al(r,r,C.B,r,r,new A.am(C.Q.U(0.25),r,r,A.aB(1),r,r,C.P),r,r,r,C.yQ,r,r,r,2),1))
u=A.V(t,C.v,r,C.u,C.t,0)
t=o?4:16
s=n?new B.a1h(p,r):new B.anR(p,r)
return new A.R9(A.a2(A.a([new A.aj(44,r,new A.aD(D.aqo,v,r),r),C.cI,new A.aj(28,r,u,r),L.kq,A.ai(new A.aD(new A.az(0,0,0,t),s,r),1)],q),C.O,C.u,C.t,0),r)},
$S:1496}
B.c2a.prototype={
$0(){var x=this.a
return x.a6(new B.c29(x))},
$S:0}
B.c29.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bOP.prototype={
$2(d,e){return d+e},
$S:41}
B.bQt.prototype={
$2(d,e){var x,w,v=null,u=A.D(this.b).ok.x.wK(8,C.ac),t=this.a
if(t.c)t=A.a2x(e.d)
else{x=t.d
w=y.p
w=A.ei(v,8,A.cK(A.a2(A.a([new A.c3(2,C.af,A.V(A.a([new A.c3(1,C.af,new F.AP(C.fF,"Tempo M\xe9dio N\xe3o Convers\xe3o",x.ye(x.f),u,v),v),new A.c3(1,C.af,new F.AP(C.du,"Tempo M\xe9dio Convers\xe3o",x.ye(x.e),u,v),v),new A.c3(1,C.af,new F.AP(E.cT,"Tempo M\xe9dio Total",x.ye(x.r),u,v),v)],w),C.O,v,C.aL,C.t,5),v),new A.c3(1,C.af,A.cP(new B.bQs(t)),v)],w),C.v,C.aL,C.t,8),v,0,0,0,0,8,v,v,v),v,v,v,C.aM,v,v)
t=w}return t},
$S:114}
B.bQs.prototype={
$2(d,e){var x=Math.min(e.d,e.b),w=this.a.d
return new A.aj(x,x,new F.Zp(w.r,w.e,w.f,null),null)},
$S:106}
B.bSE.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_0u
x(B,"daU","d93",28)
var u
w(u=B.xq.prototype,"gad9","Q3",10)
v(u,"gazu","N8",0)
v(u,"gayt","ML",0)
v(u,"gazv","N9",0)
v(u,"gayw","MM",0)
v(u,"gyX","rV",11)
w(u,"gaB7","bzu",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.anH,B.anI,B.p_,B.wj,B.xM,B.bRR,B.b0Y,B.b1a,B.b1j,B.aUK,B.bbn,B.AZ,B.wC,B.TE,B.Aw,B.ol,B.c9K,B.Dr,B.ru])
x(A.iB,[B.bbi,B.chk,B.bFZ,B.bG7,B.c9R,B.c9Q,B.c9O,B.c9N,B.c9M,B.c9P,B.c9L,B.b1H,B.bbm,B.bcX,B.bjH,B.blb,B.bld,B.bm5,B.bOP,B.bQt,B.bQs])
x(A.hq,[B.bbj,B.bTU,B.bQy,B.bQz,B.bGL,B.bFY,B.bG2,B.bG4,B.bG6,B.bGu,B.bGv,B.bG_,B.bG0,B.bG1,B.bGo,B.bGp,B.bGq,B.bGr,B.bGm,B.bGn,B.bGi,B.bGk,B.bGa,B.bGb,B.bGe,B.bGf,B.bG8,B.bG9,B.bGs,B.bGt,B.bGg,B.bGh,B.bGc,B.bGd,B.cfM,B.cfK,B.cfN,B.cfL,B.bbk,B.bbl,B.bcY,B.bl9,B.bla,B.blc])
x(A.li,[B.te,B.XN,B.oK])
x(A.ig,[B.chi,B.chj,B.che,B.chf,B.chh,B.chg,B.bG3,B.bG5,B.bGw,B.bGy,B.bGx,B.bGj,B.bGl,B.bGz,B.bGA,B.bGK,B.bGJ,B.bGG,B.bGF,B.bGD,B.bGE,B.bGI,B.bGH,B.bcV,B.bcW,B.c2a,B.c29,B.bSE])
w(B.bFX,A.ri)
w(B.bGB,A.vX)
w(B.xq,A.ls)
w(B.LG,A.mT)
w(B.bGC,A.oN)
x(A.H,[B.ajD,B.a0b,B.Ir,B.anT,B.aog,B.Qn,B.apl,B.aqm,B.a2a,B.Rj,B.arj,B.anR,B.XO,B.Xh,B.Wg,B.aKE,B.aeM,B.aQg,B.aKh,B.a3z,B.a8_,B.AQ,B.a8I,B.aBQ,B.a3q,B.a3s,B.amL,B.aBx])
w(B.anG,A.CB)
w(B.a1h,A.a8)
w(B.aIs,A.ac)})()
A.ia(b.typeUniverse,JSON.parse('{"xq":{"aI":[],"da":[]},"LG":{"ab":["xq"],"H":[],"f":[],"i":[],"ab.T":"xq"},"ajD":{"H":[],"f":[],"i":[]},"Ir":{"H":[],"f":[],"i":[]},"a0b":{"H":[],"f":[],"i":[]},"anG":{"aI":[]},"anT":{"H":[],"f":[],"i":[]},"Qn":{"H":[],"f":[],"i":[]},"aog":{"H":[],"f":[],"i":[]},"apl":{"H":[],"f":[],"i":[]},"aqm":{"H":[],"f":[],"i":[]},"Rj":{"H":[],"f":[],"i":[]},"a2a":{"H":[],"f":[],"i":[]},"a1h":{"a8":[],"f":[],"i":[]},"arj":{"H":[],"f":[],"i":[]},"anR":{"H":[],"f":[],"i":[]},"XO":{"H":[],"f":[],"i":[]},"aIs":{"ac":["a1h"]},"Xh":{"H":[],"f":[],"i":[]},"Wg":{"H":[],"f":[],"i":[]},"aKE":{"H":[],"f":[],"i":[]},"aeM":{"H":[],"f":[],"i":[]},"aQg":{"H":[],"f":[],"i":[]},"aKh":{"H":[],"f":[],"i":[]},"a3z":{"H":[],"f":[],"i":[]},"a8_":{"H":[],"f":[],"i":[]},"AQ":{"H":[],"f":[],"i":[]},"a8I":{"H":[],"f":[],"i":[]},"aBQ":{"H":[],"f":[],"i":[]},"a3q":{"H":[],"f":[],"i":[]},"a3s":{"H":[],"f":[],"i":[]},"amL":{"H":[],"f":[],"i":[]},"aBx":{"H":[],"f":[],"i":[]}}'))
var y=(function rtii(){var x=A.a1
return{r:x("oK"),w:x("oM"),_:x("jV"),j:x("nK"),k:x("aE"),I:x("qb"),U:x("cc<aA,oM>"),A:x("cc<aA,nK>"),Q:x("cc<aA,wj>"),G:x("cc<aA,wC>"),q:x("cc<aA,p7>"),R:x("cc<aA,Aw>"),V:x("cc<aA,my>"),W:x("cc<aA,AZ>"),K:x("p_"),Y:x("wj"),e:x("rv"),y:x("fV"),o:x("nZ"),n:x("rw"),g:x("wC"),i:x("p7"),B:x("de<~>"),Z:x("x<aE>"),m:x("x<ae<c,c>>"),t:x("x<ol>"),x:x("x<f4<@>>"),s:x("x<c>"),p:x("x<f>"),C:x("x<~()?>"),u:x("B<~()>"),P:x("ae<c,@>"),v:x("G<aE,Dr>"),f:x("G<c,ru>"),l:x("j4"),a:x("ah"),c:x("xq"),h:x("TE"),d:x("Aw"),b:x("ol"),L:x("my"),N:x("c"),O:x("xM"),T:x("AZ"),D:x("aG<K>"),E:x("J"),F:x("K"),z:x("@"),S:x("k"),J:x("e4?"),M:x("B<@>?"),X:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Fg=new B.XN(0,"success")
D.abY=new B.XN(2,"error")
D.abZ=new B.XN(3,"pending")
D.Fh=new B.oK(0,"checkIn")
D.Fi=new B.oK(1,"checkOut")
D.x0=new B.oK(2,"atendimentoIniciado")
D.pm=new B.oK(3,"atendimentoConcluido")
D.x1=new B.oK(4,"atendimentoCancelado")
D.x2=new B.oK(5,"pausaIniciada")
D.x3=new B.oK(6,"pausaFinalizada")
D.x4=new B.oK(7,"venda")
D.aem=new A.au(110,1/0,28,1/0)
D.GI=new B.bGB()
D.c0h=new A.dr("Sem dados",C.cX,C.bl,!1,C.Q,null,null,null,null,null)
D.ahB=new A.h6(C.X,null,null,D.c0h,null)
D.aix=new A.M(1,0.1411764705882353,0.18823529411764706,0.22745098039215686,C.y)
D.akI=new A.M(1,0.5411764705882353,0.5411764705882353,0.5411764705882353,C.y)
D.akZ=new A.M(1,0.16470588235294117,0.20392156862745098,0.25098039215686274,C.y)
D.alr=new A.M(1,0.5450980392156862,0.596078431372549,0.6549019607843137,C.y)
D.Hy=new A.M(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,C.y)
D.anM=new A.M(0.13333333333333333,0.06274509803921569,0,0,C.y)
D.c_X=new A.dr("Filtrar por tipo de evento",C.cX,C.bl,!0,null,C.N,null,null,null,null)
D.c6_=new A.c7("Selecione o tipo de eventos",null,C.aU,null,null,null,null,null,null,null)
D.boB=x([D.c_X,D.c6_],y.p)
D.ao1=new A.i0(C.a9,C.u,C.t,C.O,null,C.bX,null,0,D.boB,null)
D.WK=new A.i4(80,1/0,null)
D.bnR=x([C.Bq,D.WK,D.WK,L.WN],y.p)
D.ao3=new A.i0(C.a9,C.u,C.t,C.v,null,C.bX,null,8,D.bnR,null)
D.aqo=new A.az(0,4,0,0)
D.IV=new A.az(0,4,8,4)
D.aqs=new A.az(0,6,8,10)
D.aqx=new A.az(10,4,10,4)
D.axd=new A.aY(57498,"MaterialIcons",null,!1)
D.axz=new A.aY(58221,"MaterialIcons",null,!1)
D.axF=new A.aY(58494,"MaterialIcons",null,!1)
D.zL=new A.aY(58573,"MaterialIcons",null,!1)
D.K4=new A.aY(59916,"MaterialIcons",null,!1)
D.Ka=new A.aY(62863,"MaterialIcons",null,!1)
D.aym=new A.aY(983271,"MaterialIcons",null,!0)
D.ayn=new A.aY(983287,"MaterialIcons",null,!1)
D.ayq=new A.aY(983634,"MaterialIcons",null,!0)
D.ayr=new A.aY(983636,"MaterialIcons",null,!0)
D.ayv=new A.aY(984323,"MaterialIcons",null,!1)
D.ayw=new A.aY(984368,"MaterialIcons",null,!1)
D.ayx=new A.aY(984369,"MaterialIcons",null,!1)
D.ayO=new A.di(D.Ka,13,E.cT,null,null)
D.bmC=x([D.Fh,D.Fi,D.x0,D.pm,D.x1,D.x2,D.x3,D.x4],A.a1("x<oK>"))
D.bqX=x(["check_in","check_out","atendimento_iniciado","atendimento_concluido","atendimento_cancelado","pausa_iniciada","pausa_finalizada","venda"],y.s)
D.Uy=x([],A.a1("x<p_>"))
D.bwZ=new A.i4(140,1/0,null)
D.bzz=new A.a_([1,"Seg",2,"Ter",3,"Qua",4,"Qui",5,"Sex",6,"S\xe1b",7,"Dom"],A.a1("a_<k,c>"))
D.bQg=new A.Eo(C.aZ,6)
D.bRn=new A.C(0,-14)
D.aqk=new A.az(0,24,0,24)
D.c5X=new A.c7("Sem eventos neste dia",null,null,null,null,null,null,null,null,null)
D.ahz=new A.h6(C.X,null,null,D.c5X,null)
D.bSk=new A.aD(D.aqk,D.ahz,null)
D.bZ3=new A.W(100,25)
D.c2d=new A.Y(!0,E.cT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c2x=new A.Y(!0,null,null,null,null,null,13,C.b_,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3x=new A.Y(!0,C.dk,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c49=new A.Y(!0,C.K,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5W=new A.c7("Eventos",null,C.aU,null,null,null,null,null,null,null)
D.c5Y=new A.c7("Atendimento",null,I.p1,null,null,null,C.N,1,null,null)
D.c6e=new A.c7("Monitoramento de Atividades",null,C.aU,null,null,null,null,null,null,null)
D.c6O=new A.c7("Dura\xe7\xe3o",null,C.aU,null,null,null,null,null,null,null)
D.aaa=new B.te(0,"atendimentoIniciado")
D.aab=new B.te(1,"atendimentoCancelado")
D.Ep=new B.te(2,"atendimentoConcluido")
D.c7y=new B.te(3,"checkIn")
D.aac=new B.te(4,"checkOut")
D.c7z=new B.te(5,"pausaIniciada")
D.c7A=new B.te(6,"pausaFinalizada")
D.wa=new B.te(7,"venda")})()};
(a=>{a["kpgeVtbcaOHF10Z58x+GgObsZlY="]=a.current})($__dart_deferred_initializers__);