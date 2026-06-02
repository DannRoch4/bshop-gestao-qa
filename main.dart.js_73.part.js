((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,F,H,E,M,I,N,O,K,L,B={
cDc(d){switch(d){case"SEGUNDA":return"S"
case"TERCA":return"T"
case"QUARTA":return"Q"
case"QUINTA":return"Q"
case"SEXTA":return"S"
case"SABADO":return"S"
case"DOMINGO":return"D"
default:return"?"}},
agM(d){var x=C.n.bB(d).toUpperCase()
if(C.n.bm(x,"SEG"))return"SEGUNDA"
if(C.n.bm(x,"TER"))return"TERCA"
if(C.n.bm(x,"QUA")&&!C.n.bm(x,"QUIN"))return"QUARTA"
if(C.n.bm(x,"QUI"))return"QUINTA"
if(C.n.bm(x,"SEX"))return"SEXTA"
if(C.n.bm(x,"S\xc1B")||C.n.bm(x,"SAB"))return"SABADO"
if(C.n.bm(x,"DOM"))return"DOMINGO"
return x},
cYK(d){var x,w,v,u=y.P,t=u.a(d.i(0,"periodo")),s=A.mU(A.b1(t.i(0,"dataInicial")))
t=A.mU(A.b1(t.i(0,"dataFinal")))
u=u.a(d.i(0,"semana"))
x=A.bP(u.i(0,"meta"))
w=A.bP(u.i(0,"realizado"))
u=A.bP(u.i(0,"percentual"))
v=y.M.a(d.i(0,"dias"))
if(v==null)v=null
else{v=J.ch(v,new B.bTy(),y.K)
v=A.F(v,v.$ti.h("a2.E"))}if(v==null)v=D.Up
return new B.wi(new B.anu(s,t),new B.anv(x,w,u),v)},
anu:function anu(d,e){this.a=d
this.b=e},
anv:function anv(d,e,f){this.a=d
this.b=e
this.c=f},
p_:function p_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wi:function wi(d,e,f){this.a=d
this.b=e
this.c=f},
bbb:function bbb(){},
bbc:function bbc(){},
bTy:function bTy(){},
cXd(d){switch(d.a){case 0:return"atendimento_iniciado"
case 1:return"atendimento_cancelado"
case 2:return"atendimento_concluido"
case 3:return"check_in"
case 4:return"check_out"
case 5:return"pausa_iniciada"
case 6:return"pausa_finalizada"
case 7:return"venda"}},
aAM(d){switch(d.toLowerCase()){case"atendimento_iniciado":return D.aa_
case"atendimento_cancelado":return D.aa0
case"atendimento_concluido":return D.Ef
case"check_in":return D.c7i
case"check_out":return D.aa1
case"pausa_iniciada":return D.c7j
case"pausa_finalizada":return D.c7k
case"venda":return D.w2
default:throw A.q(A.aL("Unknown TimelineEventType: "+d,null))}},
cXe(d){var x=y.M.a(d.i(0,"timeline"))
if(x==null)x=[]
x=J.ch(x,new B.bQb(),y.O)
x=A.F(x,x.$ti.h("a2.E"))
return new B.AX(x)},
tb:function tb(d,e){this.a=d
this.b=e},
xL:function xL(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bRv:function bRv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b0P:function b0P(d,e){this.a=d
this.b=e},
b11:function b11(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b1a:function b1a(d,e){this.a=d
this.b=e},
aUB:function aUB(d){this.a=d},
bbg:function bbg(d){this.a=d},
AX:function AX(d){this.a=d},
bQb:function bQb(){},
bQc:function bQc(){},
wB:function wB(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cCZ(d){if(d<30)return C.bt
if(d<=50)return C.dH
return C.bu},
cLp(d){var x
switch(d.a){case 0:x="Sucesso"
break
case 1:x="Aten\xe7\xe3o"
break
case 2:x="Erro"
break
case 3:x="Pendente"
break
default:x=null}return x},
cLo(d){var x
switch(d.a){case 0:x=C.bu
break
case 1:x=N.q1
break
case 2:x=C.bt
break
case 3:x=C.R
break
default:x=null}return x},
aTF(d){var x
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
cie(d){var x
switch(d.a){case 0:x=E.cS
break
case 1:x=C.R
break
case 2:x=C.R
break
case 3:x=C.bu
break
case 4:x=C.bt
break
case 5:x=C.di
break
case 6:x=C.di
break
case 7:x=E.cS
break
default:x=null}return x},
cLq(d){var x
switch(d.a){case 0:x=D.ayh
break
case 1:x=D.JW
break
case 2:x=D.zC
break
case 3:x=C.nk
break
case 4:x=D.JW
break
case 5:x=D.axr
break
case 6:x=D.zC
break
case 7:x=D.K0
break
default:x=null}return x},
cVp(d){var x,w=y.M.a(d.i(0,"summary"))
if(w==null)w=[]
w=J.ch(w,new B.bGo(),y.h)
x=A.F(w,w.$ti.h("a2.E"))
return new B.Av(x)},
d8u(d){var x,w
try{x=B.aTF(B.aSM(B.aAM(d)))
return x}catch(w){return d.toUpperCase()}},
d8t(d){var x,w
try{x=B.cie(B.aSM(B.aAM(d)))
return x}catch(w){return C.R}},
aSM(d){var x
switch(d.a){case 3:x=D.F7
break
case 4:x=D.F8
break
case 0:x=D.wT
break
case 2:x=D.pg
break
case 1:x=D.wU
break
case 5:x=D.wV
break
case 6:x=D.wW
break
case 7:x=D.wX
break
default:x=null}return x},
d8p(d,e){var x,w,v,u=d.toLowerCase()
if(u==="evento"||u==="grupo"||u==="venda")try{x=B.aAM(e)
w=B.aSM(x)
return w}catch(v){return null}return null},
d8r(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=d.a
if(l==="GRUPO"){l=d.y
if(l!=null&&l.a!==0)x=D.w2
else x=d.f!=null?new B.cgK(d).$0():D.Ef
w=B.aSM(x)
A:{if(D.aa0===x){l=D.abN
break A}if(D.aa_===x){l=D.abO
break A}l=D.F6
break A}v=d.z
v=A.bg(v==null?m:v.a.i(0,"duracaoAtendimento"))
v=v==null?m:C.i.af(v)
u=A.cT(0,0,0,0,0,v==null?0:v)
v=d.w
if(v==null)v=d.b.kq()
return new B.oi(v,w,"Atendimento","",d.e,d.b,u,l,d)}x=d.f!=null?new B.cgL(d).$0():D.w2
w=B.aSM(x)
v=d.z
t=A.bg(v==null?m:v.a.i(0,"codigoAtendimento"))
s=t!=null&&t!==0?" (c\xf3d. "+A.z(t)+")":""
v=B.cXd(x)
r=d.b
q=r.kq()
p=d.y
p=p==null?m:p.a
o=l+"_"+v+"_"+q+"_"+A.z(p==null?"":p)
l=d.w
if((l==null?m:l.length!==0)===!0){l.toString
n=l}else n=o
l=B.aTF(w)
v=new B.cgJ(x,d).$0()
return new B.oi(n,w,l,new B.cgG(x,d,s).$0(),v,r,new B.cgI(d).$0(),D.F6,m)},
d8s(d){var x=d.a,w=A.R(x).h("G<1,oi>"),v=A.F(new A.G(x,B.dah(),w),w.h("a2.E"))
C.e.cZ(v,new B.cgM())
return v},
XI:function XI(d,e){this.a=d
this.b=e},
oI:function oI(d,e){this.a=d
this.b=e},
Ty:function Ty(d,e,f){this.a=d
this.b=e
this.c=f},
Av:function Av(d){this.a=d},
bGo:function bGo(){},
oi:function oi(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
cgK:function cgK(d){this.a=d},
cgL:function cgL(d){this.a=d},
cgG:function cgG(d,e,f){this.a=d
this.b=e
this.c=f},
cgH:function cgH(d){this.a=d},
cgJ:function cgJ(d,e){this.a=d
this.b=e},
cgI:function cgI(d){this.a=d},
cgM:function cgM(){},
bFA:function bFA(){},
bGe:function bGe(){},
xo:function xo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
_.aQ=q
_.v=r
_.Z=s
_.R=t
_.a8=u
_.a0=v
_.aJ=w
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
_.iW$=a6
_.iC$=a7
_.jy$=a8
_.jz$=a9
_.je$=b0
_.jA$=b1},
bFB:function bFB(d,e){this.a=d
this.b=e},
bFC:function bFC(){},
bFG:function bFG(){},
bFH:function bFH(){},
bFI:function bFI(){},
bFJ:function bFJ(){},
bFK:function bFK(d){this.a=d},
bFL:function bFL(){},
bG7:function bG7(d,e){this.a=d
this.b=e},
bG8:function bG8(d){this.a=d},
bG9:function bG9(d){this.a=d},
bFD:function bFD(d){this.a=d},
bFE:function bFE(d){this.a=d},
bFF:function bFF(d){this.a=d},
bGb:function bGb(d){this.a=d},
bGa:function bGa(d){this.a=d},
bG1:function bG1(d){this.a=d},
bG2:function bG2(d){this.a=d},
bG3:function bG3(d){this.a=d},
bG4:function bG4(d){this.a=d},
bG_:function bG_(d){this.a=d},
bG0:function bG0(d){this.a=d},
bFW:function bFW(d){this.a=d},
bFX:function bFX(d){this.a=d},
bFY:function bFY(d){this.a=d},
bFZ:function bFZ(d){this.a=d},
bFO:function bFO(d){this.a=d},
bFP:function bFP(d){this.a=d},
bFS:function bFS(d){this.a=d},
bFT:function bFT(d){this.a=d},
bFM:function bFM(d){this.a=d},
bFN:function bFN(d){this.a=d},
bG5:function bG5(d){this.a=d},
bG6:function bG6(d){this.a=d},
bFU:function bFU(){},
bFV:function bFV(d){this.a=d},
bFQ:function bFQ(d){this.a=d},
bFR:function bFR(d){this.a=d},
cVo(){return new B.Lz(null)},
Lz:function Lz(d){this.a=d},
bGc:function bGc(d){this.a=d},
bGd:function bGd(d,e){this.a=d
this.b=e},
bGf:function bGf(d){this.a=d},
bGn:function bGn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGm:function bGm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGj:function bGj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGi:function bGi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGg:function bGg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGh:function bGh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGl:function bGl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bGk:function bGk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9b:function c9b(d,e){this.a=d
this.b=e},
c9i:function c9i(){},
c9h:function c9h(){},
c9f:function c9f(){},
c9e:function c9e(){},
c9d:function c9d(){},
c9g:function c9g(){},
c9c:function c9c(){},
crJ(d,e,f,g,h,i,j,k,l){return new B.ajq(l,j,k,i,g,h,f,e,d,null)},
ajq:function ajq(d,e,f,g,h,i,j,k,l,m){var _=this
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
b1y:function b1y(d){this.a=d},
d5R(d){var x,w,v,u,t,s,r=new B.cfd(),q=new B.cfb(),p=d.a,o=r.$1(p.a),n=r.$1(p.b),m=A.w(y.k,y.K)
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
t=t.d4(864e8)}p=y.v
p=A.F(new A.G(u,new B.cfc(m,new B.cfe(q),q),p),p.h("a2.E"))
return p},
Dp:function Dp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cfd:function cfd(){},
cfb:function cfb(){},
cfe:function cfe(d){this.a=d},
cfc:function cfc(d,e,f){this.a=d
this.b=e
this.c=f},
a05:function a05(d,e,f){this.c=d
this.d=e
this.a=f},
bbf:function bbf(d,e){this.a=d
this.b=e},
bbd:function bbd(d,e){this.a=d
this.b=e},
bbe:function bbe(){},
ant:function ant(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Il:function Il(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
cti(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new B.anG(o,d,k,m,p,r,q,s,n,l,i,g,j,h,e,f,null)},
anG:function anG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
ctu(d,e,f,g,h,i){return new B.Qh(g,e,i,d,h,f,null)},
ao3:function ao3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bcQ:function bcQ(){},
bcR:function bcR(d,e){this.a=d
this.b=e},
bcO:function bcO(){},
bcP:function bcP(d,e){this.a=d
this.b=e},
Qh:function Qh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ap9:function ap9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjw(d,e,f,g,h){return new B.aqa(d,g,h,f,e,null)},
aqa:function aqa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjx:function bjx(d,e){this.a=d
this.b=e},
ru:function ru(d,e,f){this.a=d
this.b=e
this.c=f},
a23:function a23(d,e,f){this.c=d
this.d=e
this.a=f},
bl_:function bl_(d){this.a=d},
bl0:function bl0(){},
bl1:function bl1(){},
bl2:function bl2(d){this.a=d},
Re:function Re(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl3:function bl3(d,e){this.a=d
this.b=e},
ar8:function ar8(d,e){this.c=d
this.a=e},
blW:function blW(d){this.a=d},
anE:function anE(d,e){this.c=d
this.a=e},
XJ:function XJ(d,e){this.c=d
this.a=e},
a1a:function a1a(d,e){this.c=d
this.a=e},
aIi:function aIi(){this.d=!1
this.c=this.a=null},
c1K:function c1K(d){this.a=d},
c1J:function c1J(d){this.a=d},
Xd:function Xd(d){this.a=d},
Wb:function Wb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKw:function aKw(d,e){this.c=d
this.a=e},
aez:function aez(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aQ8:function aQ8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aK9:function aK9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3s:function a3s(d,e){this.c=d
this.a=e},
a7T:function a7T(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bOs:function bOs(){},
AP:function AP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a8B:function a8B(d,e,f){this.c=d
this.d=e
this.a=f},
bQ6:function bQ6(d,e){this.a=d
this.b=e},
bQ5:function bQ5(d){this.a=d},
aBG:function aBG(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bSi:function bSi(d,e){this.a=d
this.b=e},
a3j:function a3j(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3l:function a3l(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amx:function amx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBn:function aBn(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
cj3(d){return C.n.cF(C.f.k(A.jC(d)),2,"0")+":"+C.n.cF(C.f.k(A.xa(d)),2,"0")},
cms(d){var x=d.a,w=C.f.aH(x,36e8),v=C.f.aH(x,6e7)%60,u=C.f.aH(x,1e6)%60
if(w>0)return""+w+":"+C.n.cF(C.f.k(v),2,"0")+":"+C.n.cF(C.f.k(u),2,"0")
return C.n.cF(C.f.k(v),2,"0")+":"+C.n.cF(C.f.k(u),2,"0")},
cvf(d,e){var x,w=d.bI$
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
B.anu.prototype={
X(){return A.A(["dataInicial",this.a.kq(),"dataFinal",this.b.kq()],y.N,y.z)}}
B.anv.prototype={
X(){return A.A(["meta",this.a,"realizado",this.b,"percentual",this.c],y.N,y.z)}}
B.p_.prototype={
X(){var x=this
return A.A(["diaSemana",x.a,"data",x.b.kq(),"meta",x.c,"realizado",x.d,"percentual",x.e,"futuro",x.f],y.N,y.z)},
m(d,e){if(e==null)return!1
if(e instanceof B.p_)return B.agM(this.a)===B.agM(e.a)
return!1},
gu(d){return C.n.gu(B.agM(this.a))}}
B.wi.prototype={
X(){return A.A(["periodo",this.a,"semana",this.b,"dias",this.c],y.N,y.z)},
h3(){var x,w,v=A.F(this.c,y.K)
C.e.cZ(v,new B.bbb())
x=A.R(v).h("G<1,ae<c,c>>")
w=A.F(new A.G(v,new B.bbc(),x),x.h("a2.E"))
v=y.N
return A.A(["titulo","Faturamento por Dia","colunas",A.a([A.A(["key","data","nome","Data"],v,v),A.A(["key","day","nome","Dia da Semana"],v,v),A.A(["key","valor","nome","Faturamento (R$)"],v,v),A.A(["key","percentual","nome","% da Meta"],v,v),A.A(["key","futuro","nome","Dia Futuro?"],v,v)],y.m),"dados",w,"totalRegistros",w.length],v,y.z)}}
B.tb.prototype={
F(){return"TimelineEventType."+this.b}}
B.xL.prototype={
X(){var x,w,v,u=this,t=null,s=u.b.kq(),r=u.y
r=r==null?t:r.X()
x=u.z
x=x==null?t:x.a
w=u.Q
w=w==null?t:w.a
v=u.as
v=v==null?t:v.X()
return A.A(["tipo",u.a,"dataRegistro",s,"empresa",u.c,"vendedorId",u.d,"nomeVendedor",u.e,"tipoEvento",u.f,"audioIdentifier",u.r,"iaEventId",u.w,"motivoPausa",u.x,"venda",r,"atendimento",x,"engajamento",w,"cashback",v],y.N,y.z)}}
B.bRv.prototype={
X(){var x=this
return A.A(["notaNumero",x.a,"notaSerie",x.b,"notaValorTotal",x.c,"totalItensNota",x.d,"dataVenda",x.e.kq()],y.N,y.z)}}
B.b0P.prototype={
X(){var x,w=this.a
w=w==null?null:w.X()
x=this.b
return A.A(["gerado",w,"utilizado",x==null?null:x.X()],y.N,y.z)}}
B.b11.prototype={
X(){var x=this
return A.A(["cashbackId",x.a,"valor",x.b,"status",x.c,"clienteCpf",x.d,"clienteNome",x.e,"campanha",x.f],y.N,y.z)}}
B.b1a.prototype={
X(){return A.A(["valor",this.a,"cashbackOrigem",this.b],y.N,y.z)}}
B.aUB.prototype={
X(){return this.a}}
B.bbg.prototype={
X(){return this.a}}
B.AX.prototype={
X(){var x=this.a,w=A.R(x).h("G<1,ae<c,@>>")
x=A.F(new A.G(x,new B.bQc(),w),w.h("a2.E"))
return A.A(["timeline",x],y.N,y.z)}}
B.wB.prototype={
X(){var x=this
return A.A(["FaturamentoPeriodoAtual",x.a,"ValorDevolucaoPeriodoAtual",x.b,"TaxaConversaoPeriodoAtual",x.c,"PaMedioPeriodoAtual",x.d,"QuantidadeNotasPeriodoAtual",x.e,"TicketMedioPeriodoAtual",x.f,"FaturamentoPeriodoAnterior",x.r,"ValorDevolucaoPeriodoAnterior",x.w,"TaxaConversaoPeriodoAnterior",x.x,"PaMedioPeriodoAnterior",x.y,"QuantidadeNotasPeriodoAnterior",x.z,"TicketMedioPeriodoAnterior",x.Q],y.N,y.z)}}
B.XI.prototype={
F(){return"ActivityStatus."+this.b}}
B.oI.prototype={
F(){return"ActivityTypeEvent."+this.b}}
B.Ty.prototype={}
B.Av.prototype={}
B.oi.prototype={}
B.bFA.prototype={
e6(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=$.aY(),a2=$.d
if(a2==null)a2=$.d=C.q
x=a2.q(a0,y.I)
a2=x.ar$
a2===$&&A.b()
a2=a2.bC$
a2===$&&A.b()
w=A.a([],y.x)
v=y.k
u=A.ea(A.bK(1970,1,1,0,0,0,0),v)
t=A.ea(A.bK(1970,1,1,0,0,0,0),v)
s=A.ea(new A.aE(Date.now(),0,!1),v)
v=A.ea(new A.aE(Date.now(),0,!1),v)
r=A.l8("")
q=A.bH(!1)
p=A.bH(!1)
o=A.bH(!1)
n=A.bH(!1)
m=A.bH(!1)
l=A.bH(!1)
k=A.bH(!1)
j=A.bH(!1)
i=y.L
h=A.ea(new A.mv(0,new A.Et(0,C.nM),0,0),i)
g=y.r
f=y.S
e=y.N
d=y.B
d=new B.xo(new B.bGf(new B.c9b(x,a2)),w,u,t,s,v,r,q,p,o,n,m,l,k,j,h,A.ea(new A.mv(0,new A.Et(0,C.nM),0,0),i),A.ea(new A.p8(C.wt),y.i),A.ea(new B.wB(0,0,0,0,0,0,0,0,0,0,0,0),y.g),A.ea(new A.oL(0,0,0,0,0,0,0),y.w),A.iJ(C.fI,y._),A.iJ(A.a([],y.t),y.b),O.TH(A.b9(g),g),K.JQ(A.w(g,f),g,f),K.JQ(A.w(e,f),e,f),A.ea(new B.wi(new B.anu(new A.aE(Date.now(),0,!1),new A.aE(Date.now(),0,!1)),new B.anv(0,0,0),D.Up),y.Y),D.Gz,A.a([],y.C),A.ep(a0,a0,a0,y.X,y.u),new A.de(d),new A.de(d),!1,!1)
d.jH()
d.kw(D.Gz)
A.fX(a1,d,!1,y.c)}}
B.bGe.prototype={}
B.xo.prototype={
gaBy(){var x,w,v,u=J.cv(7,y.k)
for(x=this.rx,w=0;w<7;++w){v=$.pA
if(v!=null)v.al(x.cb$)
v=x.bI$
v===$&&A.b()
v=A.bK(A.aQ(v),A.aU(v),A.bF(v),0,0,0,0).d4(864e8*w)
u[w]=A.bK(A.aQ(v),A.aU(v),A.bF(v),0,0,0,0)}return u},
gad_(){return C.f.aC(C.f.aH(this.ry.gj().i0(this.rx.gj()).a,864e8),0,6)},
ga3C(){var x=this.ry.gj(),w=A.bK(A.aQ(x),A.aU(x),A.bF(x),0,0,0,0),v=w.d4(864e8),u=J.tC(this.aS.gj(),new B.bFB(w,v)),t=A.F(u,u.$ti.h("D.E"))
C.e.cZ(t,new B.bFC())
return t},
gau9(){var x,w,v,u,t,s,r=y.r,q=y.S,p=A.w(r,q)
for(x=this.ga3C(),w=x.length,v=0;v<x.length;x.length===w||(0,A.N)(x),++v){u=x[v]
p.NE(u.b,new B.bFG(),new B.bFH())
t=u.x
s=t==null?null:t.y
if(s!=null&&s.a!==0)p.NE(D.pg,new B.bFI(),new B.bFJ())}return A.nM(p,r,q)},
gVg(){var x,w=this.ga3C()
if(this.ba.gB(0)===0)return w
x=A.R(w).h("aR<1>")
x=A.F(new A.aR(w,new B.bFK(this),x),x.h("D.E"))
C.e.cZ(x,new B.bFL())
return x},
gYZ(){var x,w,v,u
for(x=this.ga3C(),w=x.length,v=C.an,u=0;u<w;++u)v=new A.bk(v.a+x[u].r.a)
return v},
bW(){var x=0,w=A.p(y.H),v=this,u,t,s,r,q,p,o
var $async$bW=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:o=v.dx
o===$&&A.b()
x=2
return A.f(o.ni(),$async$bW)
case 2:u=e
if(u==null)u=0
x=3
return A.f(v.dx.hG().bc(new B.bG7(v,u),y.J),$async$bW)
case 3:$.aY()
v.p1.push($.cM().e9(new B.bG8(v),y.e))
x=4
return A.f(v.Jp(),$async$bW)
case 4:x=5
return A.f(v.dx.xI(),$async$bW)
case 5:t=e
x=6
return A.f(v.dx.Ah(),$async$bW)
case 6:s=e
r=t==null?null:t
q=A.kK(s)?s:A.eg(J.c1(s),null)
x=r==null||q==null||q<0?7:9
break
case 7:v.ok="-1"
x=10
return A.f(v.dx.vS("-1"),$async$bW)
case 10:x=8
break
case 9:v.ok=r
case 8:o=v.aS
p=A.a([],y.t)
o.O(o)
o.E(0,p)
v.bbi()
v.J2()
v.aj3()
A.ql(C.d4,new B.bG9(v),y.E)
v.ld()
return A.n(null,w)}})
return A.o($async$bW,w)},
bbi(){var x=this
$.aY()
C.e.E(x.p1,A.a([$.cM().e9(new B.bFD(x),y.y),$.cM().e9(new B.bFE(x),y.n),$.cM().e9(new B.bFF(x),y.o)],y.x))},
jh(){var x,w,v=this,u=v.p2
if(u!=null)u.aL()
u=v.p3
if(u!=null)u.aL()
for(u=v.p1,x=u.length,w=0;w<u.length;u.length===x||(0,A.N)(u),++w)u[w].aL()
C.e.O(u)
v.lL()},
PY(d){return this.aGX(d)},
aGX(d){var x=0,w=A.p(y.H),v=this,u
var $async$PY=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:u=v.rx.gj().d4(A.cT(d,0,0,0,0,0).a)
v.ry.sj(A.bK(A.aQ(u),A.aU(u),A.bF(u),0,0,0,0))
x=2
return A.f(v.tu(),$async$PY)
case 2:return A.n(null,w)}})
return A.o($async$PY,w)},
AV(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$AV=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:x=2
return A.f(v.JX(),$async$AV)
case 2:v.b7=!0
u=v.R8.gj()
t=v.RG.gj()
$.aY()
s=$.cM().a
s===$&&A.b()
s.A(0,new A.fU(u,t,!0))
return A.n(null,w)}})
return A.o($async$AV,w)},
N4(){var x=0,w=A.p(y.H),v=this,u,t,s,r,q
var $async$N4=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=v.ry
r=s.gj().d4(-864e8)
q=A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0)
r=v.rx
u=r.gj()
t=q.jB(A.bK(A.aQ(u),A.aU(u),A.bF(u),0,0,0,0))
if(t){u=r.gj().d4(-6048e8)
r.sj(A.bK(A.aQ(u),A.aU(u),A.bF(u),0,0,0,0))}s.sj(q)
x=t?2:3
break
case 2:s=r.gj()
v.R8.sj(A.bK(A.aQ(s),A.aU(s),A.bF(s),0,0,0,0))
r=r.gj().d4(5184e8)
v.RG.sj(A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0))
x=4
return A.f(v.AV(),$async$N4)
case 4:v.iH()
case 3:x=5
return A.f(v.tu(),$async$N4)
case 5:return A.n(null,w)}})
return A.o($async$N4,w)},
MI(){var x=0,w=A.p(y.H),v=this,u,t,s,r,q
var $async$MI=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=v.ry
r=s.gj().d4(864e8)
q=A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0)
r=v.rx
u=r.gj().d4(5184e8)
t=q.j0(A.bK(A.aQ(u),A.aU(u),A.bF(u),0,0,0,0))
if(t){u=r.gj().d4(6048e8)
r.sj(A.bK(A.aQ(u),A.aU(u),A.bF(u),0,0,0,0))}s.sj(q)
x=t?2:3
break
case 2:s=r.gj()
v.R8.sj(A.bK(A.aQ(s),A.aU(s),A.bF(s),0,0,0,0))
r=r.gj().d4(5184e8)
v.RG.sj(A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0))
x=4
return A.f(v.AV(),$async$MI)
case 4:v.iH()
case 3:x=5
return A.f(v.tu(),$async$MI)
case 5:return A.n(null,w)}})
return A.o($async$MI,w)},
N5(){var x=0,w=A.p(y.H),v=this,u,t
var $async$N5=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.rx
t=u.gj().d4(-6048e8)
u.sj(A.bK(A.aQ(t),A.aU(t),A.bF(t),0,0,0,0))
t=u.gj()
v.ry.sj(A.bK(A.aQ(t),A.aU(t),A.bF(t),0,0,0,0))
t=u.gj()
v.R8.sj(A.bK(A.aQ(t),A.aU(t),A.bF(t),0,0,0,0))
u=u.gj().d4(5184e8)
v.RG.sj(A.bK(A.aQ(u),A.aU(u),A.bF(u),0,0,0,0))
x=2
return A.f(v.AV(),$async$N5)
case 2:v.iH()
x=3
return A.f(v.tu(),$async$N5)
case 3:return A.n(null,w)}})
return A.o($async$N5,w)},
MJ(){var x=0,w=A.p(y.H),v,u=this,t,s,r,q
var $async$MJ=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:s=u.rx
r=s.gj().d4(6048e8)
q=A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0)
r=new A.aE(Date.now(),0,!1)
t=A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0)
if(q.d4(5184e8).j0(t)){x=1
break}s.sj(q)
r=s.gj()
u.ry.sj(A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0))
r=s.gj()
u.R8.sj(A.bK(A.aQ(r),A.aU(r),A.bF(r),0,0,0,0))
s=s.gj().d4(5184e8)
u.RG.sj(A.bK(A.aQ(s),A.aU(s),A.bF(s),0,0,0,0))
x=3
return A.f(u.AV(),$async$MJ)
case 3:u.iH()
x=4
return A.f(u.tu(),$async$MJ)
case 4:case 1:return A.n(v,w)}})
return A.o($async$MJ,w)},
rR(){var x=this.ba,w=x.bI$
w===$&&A.b()
J.tB(w)
w=x.cb$
x=x.gj()
w.r=x
w.cq(x)
return null},
bz3(d){var x=this.ba
if(x.gj().p(0,d))x.I(0,d)
else x.A(0,d)},
tu(){var x=0,w=A.p(y.H),v=this,u
var $async$tu=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.p3
if(u!=null)u.aL()
v.p3=A.dn(C.bw,new B.bGb(v))
return A.n(null,w)}})
return A.o($async$tu,w)},
aj3(){var x,w,v,u,t=this
if($.ho!==C.lN)return
x=t.ry.gj()
w=A.bK(A.aQ(x),A.aU(x),A.bF(x),0,0,0,0)
v=A.bK(A.aQ(w),A.aU(w),A.bF(w),23,59,59,999)
u=t.ok
if(u==="-1")u="-1"
t.vI(v,w,u)
t.Pn(v,w,u)
t.Oa(v,w)},
iH(){var x=this.p2
if(x!=null)x.aL()
this.p2=A.dn(C.bw,new B.bGa(this))},
J2(){var x=0,w=A.p(y.H),v,u=this,t,s,r,q,p,o,n
var $async$J2=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if($.ho!==C.lN){x=1
break}t=u.R8
s=t.gj()
r=u.RG.gj()
q=u.dx
q===$&&A.b()
x=3
return A.f(q.Dg(),$async$J2)
case 3:p=e
o=u.ok
if(o==="-1")o="-1"
u.vu(o,r,s)
u.Ox(r,s,o)
u.Pw(r,s,o)
if(p!=null){u.vM(r,s,p,o)
q=t.gj()
t=t.gj()
n=new A.aE(Date.now(),0,!1).d4(0-A.cT(31,0,0,0,0,0).a)
A.bK(A.aQ(n),A.aU(n),A.bF(n),0,0,0,0)
u.vA(q,t,p,o)
u.ON(r,s)}case 1:return A.n(v,w)}})
return A.o($async$J2,w)},
Pw(d,e,f){return this.aFR(d,e,f)},
aFR(d,e,f){var x=0,w=A.p(y.H),v=this,u,t
var $async$Pw=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.y1.sj(!0)
u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.f(v.k3.O4(A.a([u==null?"":u],y.s),d,e,f),$async$Pw)
case 2:t.cZ(h,new B.bG1(v),new B.bG2(v))
return A.n(null,w)}})
return A.o($async$Pw,w)},
vI(d,e,f){return this.aFS(d,e,f)},
aFS(d,e,f){var x=0,w=A.p(y.H),v=this,u
var $async$vI=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.aT.sj(!0)
u=J
x=2
return A.f(v.k3.vI(d,e,f),$async$vI)
case 2:u.cZ(h,new B.bG3(v),new B.bG4(v))
return A.n(null,w)}})
return A.o($async$vI,w)},
Pn(d,e,f){return this.aFL(d,e,f)},
aFL(d,e,f){var x=0,w=A.p(y.H),v=this,u,t
var $async$Pn=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.y2.sj(!0)
u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.f(v.k3.Pp(A.a([u==null?"":u],y.s),d,e,f),$async$Pn)
case 2:t.cZ(h,new B.bG_(v),new B.bG0(v))
return A.n(null,w)}})
return A.o($async$Pn,w)},
Ox(d,e,f){return this.aDZ(d,e,f)},
aDZ(d,e,f){var x=0,w=A.p(y.H),v=this,u
var $async$Ox=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.aQ.sj(!0)
u=J
x=2
return A.f(v.k3.Oz(d,e,f),$async$Ox)
case 2:u.cZ(h,new B.bFO(v),new B.bFP(v))
return A.n(null,w)}})
return A.o($async$Ox,w)},
vu(d,e,f){return this.aEB(d,e,f)},
aEB(d,e,f){var x=0,w=A.p(y.H),v=this,u
var $async$vu=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:v.xr.sj(!0)
u=J
x=2
return A.f(v.k3.vu(d,e,f),$async$vu)
case 2:u.cZ(h,new B.bFS(v),new B.bFT(v))
return A.n(null,w)}})
return A.o($async$vu,w)},
Oa(d,e){return this.aDo(d,e)},
aDo(d,e){var x=0,w=A.p(y.H),v=this,u,t
var $async$Oa=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:v.x1.sj(!0)
u=v.ok
if(u.length===0||u==="-1")u=null
t=J
x=2
return A.f(v.k3.Oc(d,e,u),$async$Oa)
case 2:t.cZ(g,new B.bFM(v),new B.bFN(v))
return A.n(null,w)}})
return A.o($async$Oa,w)},
vM(d,e,f,g){return this.aG2(d,e,f,g)},
aG2(d,e,f,g){var x=0,w=A.p(y.H),v=this,u,t
var $async$vM=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:v.x2.sj(!0)
u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.f(v.k3.q1(A.a([u==null?"":u],y.s),d,e,f,g),$async$vM)
case 2:t.cZ(i,new B.bG5(v),new B.bG6(v))
return A.n(null,w)}})
return A.o($async$vM,w)},
vA(d,e,f,g){return this.aF5(d,e,f,g)},
aF5(d,e,f,g){var x=0,w=A.p(y.H),v=this,u,t
var $async$vA=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=v.k4
u=u==null?null:u.b
t=J
x=2
return A.f(v.k3.q1(A.a([u==null?"":u],y.s),d,e,f,g),$async$vA)
case 2:t.cZ(i,new B.bFU(),new B.bFV(v))
return A.n(null,w)}})
return A.o($async$vA,w)},
ON(d,e){return this.aEu(d,e)},
aEu(d,e){var x=0,w=A.p(y.H),v=this,u,t
var $async$ON=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:v.v.sj(!0)
u=v.k4
u=u==null?null:u.b
if(u==null)u="000"
t=J
x=2
return A.f(v.k3.OP(u,d,e),$async$ON)
case 2:t.cZ(g,new B.bFQ(v),new B.bFR(v))
return A.n(null,w)}})
return A.o($async$ON,w)},
Jp(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$Jp=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=new A.aE(Date.now(),0,!1)
t=A.bK(A.aQ(u),A.aU(u),A.bF(u),0,0,0,0)
s=t.d4(-5184e8)
v.R8.sj(s)
v.RG.sj(t)
v.rx.sj(s)
v.ry.sj(t)
u=v.dx
u===$&&A.b()
x=2
return A.f(u.rj(s),$async$Jp)
case 2:x=3
return A.f(v.dx.ri(t),$async$Jp)
case 3:$.aY()
u=$.cM().a
u===$&&A.b()
u.A(0,new A.fU(s,t,!0))
return A.n(null,w)}})
return A.o($async$Jp,w)},
JX(){var x=0,w=A.p(y.H),v=this,u
var $async$JX=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:u=v.dx
u===$&&A.b()
x=2
return A.f(u.rj(v.R8.gj()),$async$JX)
case 2:x=3
return A.f(v.dx.ri(v.RG.gj()),$async$JX)
case 3:return A.n(null,w)}})
return A.o($async$JX,w)}}
B.Lz.prototype={
gox(){return 1300},
om(d){var x=null
return A.hv(x,x,A.h0(!0,A.es(A.cK(new A.aO(new B.bGc(this),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.aa),!0,C.aM,!0,!0),x,x,x)},
oz(d){var x=null
return A.hv(x,x,A.h0(!0,A.es(A.cK(new A.aO(new B.bGd(this,d),x),x,0,0,0,0,8,x,x,x),x,x,x,x,C.aa),!0,C.aM,!0,!0),x,x,x)}}
B.bGf.prototype={
vI(d,e,f){return this.aFT(d,e,f)},
aFT(d,e,f){var x=0,w=A.p(y.W),v,u=this
var $async$vI=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGn(u,A.hm(e,!1),A.hm(d,!0),f),y.T),$async$vI)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vI,w)},
Pp(d,e,f,g){return this.aFM(d,e,f,g)},
aFM(d,e,f,g){var x=0,w=A.p(y.R),v,u=this
var $async$Pp=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGm(u,A.hm(f,!1),A.hm(e,!0),g),y.d),$async$Pp)
case 3:v=i
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Pp,w)},
OP(d,e,f){return this.aEv(d,e,f)},
aEv(d,e,f){var x=0,w=A.p(y.G),v,u=this
var $async$OP=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGj(u,d,A.hm(f,!1),A.hm(e,!0)),y.g),$async$OP)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OP,w)},
Oz(d,e,f){return this.aE_(d,e,f)},
aE_(d,e,f){var x=0,w=A.p(y.Q),v,u=this
var $async$Oz=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGi(u,f,A.hm(e,!1),A.hm(d,!0)),y.Y),$async$Oz)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Oz,w)},
O4(d,e,f,g){return this.aDe(d,e,f,g)},
aDe(d,e,f,g){var x=0,w=A.p(y.U),v,u=this
var $async$O4=A.l(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGg(u,g,d,f,e),y.w),$async$O4)
case 3:v=i
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$O4,w)},
Oc(d,e,f){return this.aDp(d,e,f)},
aDp(d,e,f){var x=0,w=A.p(y.A),v,u=this
var $async$Oc=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGh(u,f==null||f.length===0||f==="-1"?null:f,e,d),y.j),$async$Oc)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Oc,w)},
q1(d,e,f,g,h){return this.aFE(d,e,f,g,h)},
aFE(d,e,f,g,h){var x=0,w=A.p(y.V),v,u=this
var $async$q1=A.l(function(i,j){if(i===1)return A.m(j,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGl(u,g,h.length===0||h==="-1"?null:h,d,f,e),y.L),$async$q1)
case 3:v=j
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$q1,w)},
vu(d,e,f){return this.aEC(d,e,f)},
aEC(d,e,f){var x=0,w=A.p(y.q),v,u=this
var $async$vu=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.bGk(u,d,f,e),y.i),$async$vu)
case 3:v=h
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vu,w)}}
B.c9b.prototype={
Px(d,e,f){return this.aFU(d,e,f)},
aFU(d,e,f){var x=0,w=A.p(y.T),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Px=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["dataInicial",d,"dataFinal",e,"sellerId",f],m,l)
j.cG(0,new B.c9i())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/sellers/timeline",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.T)
x=3
return A.f(m.co(t,y.P),$async$Px)
case 3:s=h
r=A.aP()
try{m=s.a
m.toString
r.b=B.cXe(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Px,w)},
Po(d,e,f){return this.aFN(d,e,f)},
aFN(d,e,f){var x=0,w=A.p(y.d),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Po=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["dataInicial",d,"dataFinal",e,"sellerId",f],m,l)
j.cG(0,new B.c9h())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/sellers/timeline/summary",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.d)
x=3
return A.f(m.co(t,y.P),$async$Po)
case 3:s=h
r=A.aP()
try{m=s.a
m.toString
r.b=B.cVp(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Po,w)},
OO(d,e,f){return this.aEw(d,e,f)},
aEw(d,e,f){var x=0,w=A.p(y.g),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OO=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["company",d,"dataInicial",e,"dataFinal",f],m,l)
j.cG(0,new B.c9f())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/v2/faturamento/indicadores/venda-liquida",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.g)
x=3
return A.f(m.co(t,y.P),$async$OO)
case 3:s=h
r=A.aP()
try{m=s.a
r.b=new B.wB(A.bP(m.i(0,"FaturamentoPeriodoAtual")),A.bP(m.i(0,"ValorDevolucaoPeriodoAtual")),A.bP(m.i(0,"TaxaConversaoPeriodoAtual")),A.bP(m.i(0,"PaMedioPeriodoAtual")),C.i.D(A.bP(m.i(0,"QuantidadeNotasPeriodoAtual"))),A.bP(m.i(0,"TicketMedioPeriodoAtual")),A.bP(m.i(0,"FaturamentoPeriodoAnterior")),A.bP(m.i(0,"ValorDevolucaoPeriodoAnterior")),A.bP(m.i(0,"TaxaConversaoPeriodoAnterior")),A.bP(m.i(0,"PaMedioPeriodoAnterior")),C.i.D(A.bP(m.i(0,"QuantidadeNotasPeriodoAnterior"))),A.bP(m.i(0,"TicketMedioPeriodoAnterior")))}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OO,w)},
Oy(d,e,f){return this.aE0(d,e,f)},
aE0(d,e,f){var x=0,w=A.p(y.Y),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Oy=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreDefaultDates",!0],m,l)
j=A.A(["dataInicial",e,"dataFinal",f],m,l)
j.cG(0,new B.c9e())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/v2/metas/por-dia-da-semana/vendedor/"+d,null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.Y)
x=3
return A.f(m.co(t,y.P),$async$Oy)
case 3:s=h
r=A.aP()
try{m=s.a
m.toString
r.b=B.cYK(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Oy,w)},
Ob(d,e,f){return this.aDr(d,e,f)},
aDr(d,e,f){var x=0,w=A.p(y.j),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Ob=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["vendedor",d,"dataInicial",e,"dataFinal",f],m,l)
j.cG(0,new B.c9d())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/sellers/breaks",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.j)
x=3
return A.f(m.co(t,y.P),$async$Ob)
case 3:s=h
r=A.aP()
try{m=s.a
m.toString
r.b=A.czz(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Ob,w)},
vG(d,e,f,g,h){return this.aFG(d,e,f,g,h)},
aFG(d,e,f,g,h){var x=0,w=A.p(y.L),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$vG=A.l(function(a0,a1){if(a0===1)return A.m(a1,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["groupId",d,"sellerId",e,"companies[]",f,"initialDate",g,"finalDate",h],m,l)
j.cG(0,new B.c9g())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/serveria/v2/events/services",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.L)
x=3
return A.f(m.co(t,y.P),$async$vG)
case 3:s=a1
r=A.aP()
try{m=s.a
m.toString
r.b=A.cxT(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$vG,w)},
O3(d,e,f,g){return this.aDh(d,e,f,g)},
aDh(d,e,f,g){var x=0,w=A.p(y.w),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$O3=A.l(function(h,a0){if(h===1)return A.m(a0,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["vendedor",d,"companies[]",e,"initialDate",f,"finalDate",g],m,l)
j.cG(0,new B.c9c())
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/serveria/services/avg-time",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.w)
x=3
return A.f(m.co(t,y.P),$async$O3)
case 3:s=a0
r=A.aP()
try{m=s.a
m.toString
r.b=A.czy(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$O3,w)},
OR(d,e,f){return this.aEF(d,e,f)},
aEF(d,e,f){var x=0,w=A.p(y.i),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OR=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.A(["ignoreMultiselect",!0,"ignoreDefaultDates",!0],m,l)
j=A.A(["Vendedor",d,"item","indicadoresvendedor","initialDate",f,"finalDate",e],m,l)
l=A.cq(k,A.w(m,l),"GET",null)
m=u.a
o=m.ar$
o===$&&A.b()
o=l.ct(o,"/bshop/dashboard/Request",null,j)
l=m.ar$.bC$
l===$&&A.b()
t=u.yD(o.cu(u.yC(l,u.b)),y.i)
x=3
return A.f(m.co(t,y.P),$async$OR)
case 3:s=h
r=A.aP()
try{m=s.a
m.toString
r.b=A.ckc(m)}catch(i){q=A.a6(i)
p=A.aq(i)
throw i}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$OR,w)},
yD(d,e){var x
if(A.br(e)!==C.dq){x=d.r
x===$&&A.b()
x=!(x===C.dl||x===C.dB)}else x=!1
if(x)if(A.br(e)===C.de)d.r=C.cU
else d.r=C.d7
return d},
yC(d,e){var x,w=C.n.bB(e)
if(w.length===0)return d
x=A.co(e,0,null)
if(x.gm4())return x.k(0)
return A.co(d,0,null).kn(x).k(0)}}
B.ajq.prototype={
t(d){return A.cX(new B.b1y(this))}}
B.Dp.prototype={}
B.a05.prototype={
t(d){return A.cX(new B.bbf(this,d))}}
B.ant.prototype={
b1(d,e){var x,w,v,u,t,s,r=this,q=e.a,p=r.c,o=(q-p)/2,n=q/2,m=e.b-4,l=A.ni(new A.C(n,m),o),k=r.b,j=3.141592653589793*(k/100)
$.ax()
x=A.b6()
x.f=!0
w=r.d
x.r=w.gj()
x.c=p
x.b=C.b5
x.d=C.e9
d.nK(l,-3.141592653589793,3.141592653589793,!1,x)
v=A.b6()
v.f=!0
u=r.e
v.r=u.gj()
v.c=p
v.b=C.b5
v.d=C.e9
d.nK(l,-3.141592653589793,j,!1,v)
if(k>0){t=-3.141592653589793+j
s=new A.C(n+o*Math.cos(t),m+o*Math.sin(t))
n=p*0.95
m=A.b6()
m.r=r.f.gj()
m.z=D.bQ_
d.ig(s,n,m)
m=A.b6()
m.b=C.b5
m.c=p*0.28
m.r=w.U(0.5).gj()
d.ig(s,n,m)
m=A.b6()
m.r=u.gj()
d.ig(s,p*0.75,m)}},
h9(d){var x=this
return d.b!==x.b||d.c!==x.c||!d.d.m(0,x.d)||!d.e.m(0,x.e)}}
B.Il.prototype={
aZa(d){return C.n.cF(C.f.k(A.bF(d)),2,"0")+"/"+C.n.cF(C.f.k(A.aU(d)),2,"0")+"/"+C.f.k(A.aQ(d))},
aZH(d){switch(d){case"SEGUNDA":return"Segunda-feira"
case"TERCA":return"Ter\xe7a-feira"
case"QUARTA":return"Quarta-feira"
case"QUINTA":return"Quinta-feira"
case"SEXTA":return"Sexta-feira"
case"SABADO":return"S\xe1bado"
case"DOMINGO":return"Domingo"
default:return d}},
t(d){var x,w,v=this,u=null,t=A.E(d).ax.a===C.b3,s=t?D.akO:D.Ho,r=t?D.alg:D.akx,q=v.w,p=q?B.cCZ(C.i.aC(v.d,0,100)):s,o=v.aZa(v.x),n=A.aC(8),m=q?C.I:r,l=A.al(C.X,A.M6(v.c,m,!0,1,C.O),C.B,u,u,new A.an(p,u,u,n,u,u,C.P),u,25,u,u,u,u,u,25)
if(!q)return A.eP(l,0.7)
q=v.aZH(v.r)
n=o.length!==0?" "+o:""
m=C.i.a4(v.e,2)
m=A.bV(m,".",",")
x=C.i.a4(v.f,2)
x=A.bV(x,".",",")
w=C.i.a4(v.d,1)
return A.jb(l,new A.an(C.br,u,u,A.aC(8),u,u,C.P),u,u,q+"  "+n+"\nMeta: "+("R$ "+m)+"\nRealizado: "+("R$ "+x)+"\nPercentual: "+w+"%",C.kW,!1,u,u,D.c3T,u,10,u)}}
B.anG.prototype={
t(d){var x=this,w=null
if(x.CW)return D.anT
return A.V(A.a([new B.ao3(x.c,x.d,x.e,x.f,w),new B.ap9(x.r,x.w,x.x,w),new B.aBG(x.y,x.z,x.Q,x.as,x.at,x.ax,x.ay,w),new B.ar8(x.ch,w)],y.p),C.bG,w,C.u,C.t,8)}}
B.ao3.prototype={
t(d){var x,w,v,u=this,t=null,s=u.d.giq(),r=s.dL(s,0,new B.bcQ())
s=u.c.gB(0)
x=y.p
s=A.a([B.ctu(A.E(d).ax.b,r,!1,"Todos",u.e,s===0)],x)
for(w=0;w<8;++w)s.push(new A.fF(new B.bcR(u,D.bml[w]),t))
v=A.by(d,t,y.l).w
x=A.a([D.anR],x)
if(v.a.a<750)x.push(A.es(A.a3(s,C.v,C.u,C.t,8),t,t,t,t,C.aq))
else x.push(A.h1(C.bO,s,C.c3,C.aq,8,8))
return A.eh(t,8,A.V(x,C.N,t,C.u,C.t,8),t,t,t,C.aR,t,t)}}
B.Qh.prototype={
t(d){var x=this,w=null,v=C.aO.U(0.1),u=x.e,t=u?x.f.U(0.9):C.W,s=u?x.f:v,r=u?C.I:A.E(d).ax.k3,q=u?C.aU.c1(C.I.U(0.9)):C.aU,p=A.aC(8),o=A.ew(s,-1,C.V,u?1.2:0.8),n=A.al(w,A.a3(A.a([new A.c5(1,C.ah,A.fe(x.c,r,!0,w,C.O,w),w),A.P("("+x.d+")",w,w,w,w,q,w,w)],y.p),C.v,C.aL,C.Y,6),C.B,w,D.aee,new A.an(t,w,o,p,w,w,C.P),w,w,w,w,D.aql,w,w,w)
if(x.w)return A.eP(A.n4(n,!0,w),0.45)
return A.cW(!1,A.aC(8),!0,n,w,!0,w,w,w,w,w,w,w,w,w,x.r,w,w,w,w,w)}}
B.ap9.prototype={
t(d){var x=null,w=y.p,v=A.ai(A.V(A.a([A.fe("Timeline de Eventos do(a) "+this.c,x,!0,x,C.O,x),D.c6_],w),C.N,x,C.u,C.t,8),1),u=A.E(d),t=A.a([A.V(A.a([A.fe(""+this.d,x,!0,x,x,x),D.c5F],w),C.v,x,C.u,C.t,5)],w),s=this.e
if(C.f.aH(s.a,1e6)>0)t.push(A.a3(A.a([new A.aj(x,28,new B.aBn(1,1,C.aO.U(0.1),x),x),A.V(A.a([A.fe(B.cms(s),E.cS,!0,x,x,x),D.c6x],w),C.v,x,C.u,C.t,5)],w),C.v,C.u,C.t,16))
return A.eh(x,8,A.a3(A.a([v,A.eh(x,8,A.a3(t,C.v,C.u,C.t,0),u.fx,x,x,M.hS,x,x)],w),C.v,C.u,C.t,0),x,x,x,C.aR,x,x)}}
B.aqa.prototype={
t(d){return A.cX(new B.bjx(this,d))}}
B.ru.prototype={}
B.a23.prototype={
t(d){var x=null,w=new A.G(D.bqH,new B.bl_(this),y.f).oZ(0,new B.bl0()),v=A.F(w,w.$ti.h("D.E")),u=C.e.dL(v,0,new B.bl1())
w=A.a([],y.p)
if(u===0)w.push(D.ahq)
else C.e.E(w,new A.G(v,new B.bl2(u),A.R(v).h("G<1,e>")))
return A.hR(A.V(w,C.N,x,C.u,C.t,16),x,x,x,x,this.c,!1,!0,"Distribui\xe7\xe3o de Eventos",x,1,x)}}
B.Re.prototype={
t(d){var x=this.d
return A.cX(new B.bl3(this,x<=0?0:C.i.aC(this.c.b/x,0,1)))}}
B.ar8.prototype={
t(d){var x=null,w=this.c.length
if(w===0)return D.bS3
return A.eh(x,8,A.ph(x,new B.blW(this),w,C.aM,C.fn,!0),x,x,x,C.jE,x,x)}}
B.anE.prototype={
t(d){var x,w=null,v=this.c,u=v.c,t=y.p
t=A.a([A.a3(A.a([A.ai(A.P(u.length!==0?u:B.aTF(v.b),1,C.O,w,w,I.oW,w,w),1),new B.XJ(v.w,w),C.cy],t),C.v,C.u,C.t,16)],t)
x=v.e
if(x.length!==0)t.push(A.P(x,1,C.O,w,w,C.aU,w,w))
v=v.d
if(v.length!==0)t.push(A.P(v,1,C.O,w,w,C.aU,w,w))
return new A.aD(D.IL,A.V(t,C.N,w,C.u,C.t,0),w)}}
B.XJ.prototype={
t(d){var x=null,w=this.c,v=B.cLo(w),u=v.U(0.15),t=A.aC(999)
return A.al(x,A.P(B.cLp(w).toUpperCase(),x,x,x,x,A.bA(x,x,v,x,x,x,x,x,x,x,x,10,x,x,C.ad,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.B,x,x,new A.an(u,x,x,t,x,x,C.P),x,x,x,x,C.iu,x,x,x)}}
B.a1a.prototype={
ac(){return new B.aIi()}}
B.aIi.prototype={
b9c(d){var x,w
if(d==null||d.length===0)return null
try{x=B.cj3(A.mU(d).vb())
return x}catch(w){return null}},
gamv(){var x=this.a.c.x.z,w=x==null?null:x.a.i(0,"npsScore")
return w==null?null:C.i.D(A.bP(w))},
gai_(){var x,w,v=this.a.c.x.z,u=v==null?null:v.a
if(u!=null){x=u.i(0,"dataFim")
if(x==null)x=u.i(0,"dataFimAtendimento")
if(typeof x=="string"&&x.length!==0)return x}w=this.a.c.x.y
if(w!=null&&w.a!==0)return w.e.kq()
return null},
gbeo(){var x=this.a.c.x.z,w=x==null?null:x.a.i(0,"taxaConversao")
if(w==null)return null
A.bP(w)
return w>0?w:null},
gaTW(){var x,w,v,u=null,t=this.a.c.x.as,s=t==null
if(s)x=u
else{w=t.a
x=w==null?u:w.b}if(x!=null&&x>0)return x
if(s)v=u
else{t=t.b
v=t==null?u:t.a}if(v!=null&&v>0)return v
return u},
t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=y.p,h=A.a([k.aSK()],i)
if(k.d){x=G.a_B(C.R.U(0.4),1,1)
w=k.b9c(k.gai_())
v=k.a.c.x.z
u=v==null?j:v.a.i(0,"codigoAtendimento")
t=u==null?j:C.i.D(A.bP(u))
s=t!=null&&t!==0?" (c\xf3d. "+A.z(t)+")":""
r=k.gamv()
v=k.a.c.x.z
u=v==null?j:v.a.i(0,"npsComentario")
q=typeof u=="string"&&u.length!==0?u:j
v=k.a.c.x
if(v.y==null){p=v.as
o=(p==null?j:p.a)!=null}else o=!0
v=A.a([new B.aez(D.zC,C.R,j,B.cj3(v.b),"Atendimento iniciado"+s,j,j)],i)
if(o){p=k.a.c.x
n=p.y
p=p.as
m=p==null
l=m?j:p.a
v.push(new B.aQ8(n,l,m?j:p.b,j))}if(w!=null)v.push(new B.aez(C.nk,C.bu,C.bu.U(0.1),w,"Atendimento conclu\xeddo"+s,C.bu,j))
if(r!=null&&r>0)v.push(new B.aK9(r,q,w,j))
C.e.E(h,A.a([x,new A.aD(D.aqg,A.V(v,C.N,j,C.u,C.t,6),j)],i))}return A.V(h,C.N,j,C.u,C.t,0)},
aSK(){var x,w,v=this,u=null,t=v.c
t.toString
t=A.by(t,u,y.l).w
x=A.aC(8)
w=y.p
return A.cW(!1,x,!0,new A.aD(D.IL,t.a.a<600?A.V(A.a([A.a3(A.a([A.ai(v.aqb(),1),v.agq()],w),C.N,C.u,C.t,16),C.hu,v.agD()],w),C.N,u,C.u,C.Y,0):A.a3(A.a([A.ai(A.a3(A.a([new A.c5(5,C.ah,v.aqb(),u),C.vH,A.ai(new A.cx(C.fy,u,u,v.agD(),u),5)],w),C.v,C.as,C.t,0),1),C.vH,v.agq()],w),C.v,C.as,C.t,0),u),u,!0,u,u,u,u,u,u,u,u,u,new B.c1K(v),u,u,u,u,u)},
aqb(){var x=null,w=A.a([D.c5H],y.p),v=C.n.bB(this.a.c.x.e)
if(v.length!==0)w.push(A.P(v,1,C.O,x,x,C.aU,x,x))
return A.V(w,C.N,x,C.u,C.Y,0)},
agD(){var x,w,v,u,t=this,s=null,r=t.a.c.x.y,q=r==null?s:r.c,p=t.gaTW(),o=t.gbeo(),n=t.gai_()!=null?2:1
r=t.a.c.x
if(r.y!=null)++n
if(r.as!=null)++n
r=y.p
x=A.a([new B.Wb(""+n,"eventos",s,s)],r)
if(q!=null&&q>0)C.e.E(x,A.a([new B.Xd(s),new B.Wb(A.bt("pt_BR").ai(q),"convertido",C.bu,s)],r))
if(p!=null){w=A.bt("pt_BR").ai(p)
v=t.a.c.x.as
u=v==null
if((u?s:v.a)==null||v.a.b<=0)v=(u?s:v.b)!=null&&v.b.a>0
else v=!1
v=v?"cb utilizado":"cashback"
C.e.E(x,A.a([new B.Xd(s),new B.Wb(w,v,C.di,s)],r))}if(o!=null)C.e.E(x,A.a([new B.Xd(s),new B.aKw(o,s)],r))
return A.h1(C.bO,x,C.p3,C.aq,6,10)},
agq(){var x=this.gamv(),w=y.p,v=A.a([new B.XJ(this.a.c.w,null)],w)
if(x!=null&&x>0)C.e.E(v,A.a([C.fo,new B.a3s(x,null)],w))
v.push(C.fo)
w=this.d?C.zA:C.qT
v.push(A.bW(w,C.R.U(0.4),null,16))
return A.a3(v,C.v,C.u,C.Y,0)}}
B.Xd.prototype={
t(d){var x=null
return A.al(x,x,C.B,C.R.U(0.4),x,x,x,28,x,x,x,x,x,1)}}
B.Wb.prototype={
t(d){var x=null
return A.V(A.a([A.P(this.c,x,C.O,x,x,A.bA(x,x,this.e,x,x,x,x,x,x,x,x,13,x,x,C.b2,x,x,!0,x,x,x,x,x,x,x,x),x,x),A.P(this.d,x,C.O,x,x,C.aU.hc(10),x,x)],y.p),C.v,x,C.u,C.Y,0)}}
B.aKw.prototype={
t(d){var x,w,v=null,u=C.i.aC(this.c,0,100)
if(u<30)x=C.bt
else x=u<60?C.di:C.bu
w=y.p
return A.a3(A.a([new A.aj(52,10,A.tQ(A.aC(4),A.dH(C.bc,A.a([A.al(v,v,C.B,C.R.U(0.4),v,v,v,v,v,v,v,v,v,v),A.aoz(C.X,A.al(v,v,C.B,x,v,v,v,v,v,v,v,v,v,v),v,u/100)],w),C.a6,C.aW,v),C.bZ),v),A.P(C.i.a4(u,0)+"%",v,v,v,v,A.bA(v,v,x,v,v,v,v,v,v,v,v,11,v,v,C.aD,v,v,!0,v,v,v,v,v,v,v,v),v,v)],w),C.v,C.u,C.Y,4)}}
B.aez.prototype={
t(d){var x,w,v,u,t,s=this,r=null,q=A.E(d).ok.Q
if(q==null)x=r
else{q=q.b
x=q==null?r:q.U(0.75)}q=s.e
if(q==null)q=C.R.U(0.1)
w=A.aC(6)
v=A.bW(s.c,s.d,r,13)
u=A.P(s.f,r,C.O,r,r,A.bA(r,r,x,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r)
t=s.w
return A.al(r,A.a3(A.a([v,new A.aj(36,r,u,r),A.ai(A.P(s.r,r,C.O,r,r,A.bA(r,r,t==null?x:t,r,r,r,r,r,r,r,r,12,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r),1)],y.p),C.v,C.u,C.t,10),C.B,r,r,new A.an(q,r,r,w,r,r,C.P),r,r,r,r,C.kW,r,r,r)}}
B.aQ8.prototype={
t(d){var x,w,v,u,t,s,r,q=null,p=this.c
if(p!=null){x=p.a
if(x!==0){w=p.d
v=w===1?"item":"itens"
u=" #"+x+" / "+w+" "+v}else u=""
p=p.c
t=p>0?" \u2013 "+A.bt("pt_BR").ai(p):""
p=E.cS.U(0.12)
x=A.aC(6)
s=A.al(q,A.a3(A.a([D.ayA,A.ai(A.P("Venda"+u+t,q,q,q,!0,D.c1X,q,q),1)],y.p),C.v,C.u,C.t,10),C.B,q,q,new A.an(p,q,q,x,q,q,C.P),q,q,q,q,C.kW,q,q,q)}else s=q
r=this.aSr()
p=s==null
if(p&&r==null)return C.aP
if(!p&&r!=null){if(A.by(d,q,y.l).w.a.a<750)return A.V(A.a([s,r],y.p),C.bG,q,C.u,C.t,6)
return A.a3(A.a([A.ai(s,1),A.ai(r,1)],y.p),C.N,C.u,C.t,6)}if(p){r.toString
p=r}else p=s
return p},
aSr(){var x=this,w=x.d
if(w!=null&&w.b>0)return x.agu(w.b,!1)
w=x.e
if(w!=null&&w.a>0)return x.agu(w.a,!0)
return null},
agu(d,e){var x=null,w=e?"Cashback utilizado "+A.bt("pt_BR").ai(d):"Cashback "+A.bt("pt_BR").ai(d),v=C.di.U(0.2),u=A.aC(6)
return A.al(x,A.a3(A.a([A.bW(e?D.ay8:D.ay9,C.di,x,13),A.ai(A.P(w,x,x,x,!0,D.c3g,x,x),1)],y.p),C.v,C.u,C.t,10),C.B,x,x,new A.an(v,x,x,u,x,x,C.P),x,x,x,x,C.kW,x,x,x)}}
B.aK9.prototype={
t(d){var x,w,v,u,t=null,s=this.d,r=s!=null&&s.length!==0,q=A.E(d).ok.Q
if(q==null)x=t
else{q=q.b
x=q==null?t:q.U(0.75)}q=C.R.U(0.15)
w=A.aC(6)
v=A.a([new B.a3s(this.c,t)],y.p)
u=this.e
if(u!=null)v.push(new A.aj(36,t,A.P(u,t,C.O,t,t,A.bA(t,t,x,t,t,t,t,t,t,t,t,10,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t),t))
if(r)v.push(A.ai(A.P(s,2,C.O,t,t,A.bA(t,t,x,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t),1))
else v.push(C.fS)
return A.al(t,A.a3(v,C.v,C.u,C.t,8),C.B,t,t,new A.an(q,t,t,w,t,t,C.P),t,t,t,t,C.iu,t,t,t)}}
B.a3s.prototype={
gbc0(){var x=this.c
if(x<0)return 0
if(x>10)return 10
return x},
aZC(d){if(d<=0)return C.R
if(d<=3)return C.bt
if(d<=6)return C.di
if(d<=8)return E.cS
return C.bu},
t(d){var x,w=null,v=this.gbc0(),u=this.aZC(v),t=u.U(0.2),s=A.aC(5),r=A.al(C.X,A.fe(""+v,u,!0,w,w,w),C.B,w,w,new A.an(t,w,w,s,w,w,C.P),w,w,w,w,C.iu,w,w,w)
if(this.c===0)x="Cliente n\xe3o respondeu a pesquisa"
else x=w
if(x!=null)return A.jb(r,w,w,w,x,w,w,w,w,w,w,w,w)
return r}}
B.a7T.prototype={
EZ(d){var x=this.d
x=x.gj().i(0,x.$ti.c.a(d))
return x==null?0:x},
t(d){var x,w=this,v=null,u=w.d,t=new A.Nc(u,u.$ti.h("Nc<d3.K,d3.V>")).dL(0,0,new B.bOs()),s=w.EZ(D.wX),r=w.EZ(D.wU)
u=w.EZ(D.wV)
x=w.EZ(D.wW)
x=A.a([new B.AP("Total de Eventos",""+t,v,v),new B.AP("Vendas Convertidas",""+s,C.bu,v),new B.AP("N\xe3o Convers\xe3o",""+r,C.bt,v),new B.AP("Atendimentos",""+(w.EZ(D.wT)+w.EZ(D.pg)),E.cS,v),new B.AP("Pausas",""+(u+x),C.dH,v)],y.p)
u=w.e
if(C.f.aH(u.a,1e6)>0)x.push(new B.AP("Tempo Total",B.cms(u),v,v))
return A.hR(A.V(x,C.N,v,C.u,C.t,10),v,v,v,v,w.c,!1,!0,"Resumo da Timeline",v,1,v)}}
B.AP.prototype={
t(d){var x=null
return A.a3(A.a([A.fe(this.c,x,!1,1,C.O,x),A.fe(this.d,this.e,!0,x,x,x)],y.p),C.v,C.as,C.t,0)}}
B.a8B.prototype={
t(d){return A.cX(new B.bQ6(this,d))}}
B.aBG.prototype={
Em(d){return C.n.cF(C.f.k(A.bF(d)),2,"0")+"/"+C.n.cF(C.f.k(A.aU(d)),2,"0")},
b6k(d,e){var x=new A.aE(Date.now(),0,!1),w=C.AS[A.aU(d)-1],v=C.AS[A.aU(e)-1],u=A.aQ(d)!==A.aQ(x)||A.aQ(e)!==A.aQ(x)?" "+A.aQ(e):""
if(A.aU(d)===A.aU(e)&&A.aQ(d)===A.aQ(e))return w+u
return C.n.ab(w,0,3)+" / "+C.n.ab(v,0,3)+u},
t(a7){var x,w,v,u,t,s,r=this,q=null,p=6048e8,o=-6048e8,n=new A.aE(Date.now(),0,!1),m=A.bK(A.aQ(n),A.aU(n),A.bF(n),0,0,0,0),l=A.by(a7,q,y.l).w.a.a<750,k=r.c,j=C.e.ga7(k).jB(m),i=C.e.gS(k),h=C.e.ga7(k),g=i.d4(o),f=h.d4(o),e=i.d4(p),d=h.d4(p),a0=y.p,a1=A.a3(A.a([A.P(r.b6k(i,h),q,q,q,q,D.c2g,q,q),A.P(r.Em(i)+" at\xe9 "+r.Em(h),q,q,q,q,C.aU,q,q)],a0),C.v,C.as,C.t,0),a2=G.a_B(C.aO.U(0.08),1,1),a3=l?4:8,a4=r.Em(g),a5=r.Em(f),a6=A.a([],a0)
for(x=r.d,w=0;w<7;++w){v=l?2:4
if(l){u=k[w]
t=C.f.k(A.bF(u))
s=t
t=u
u=s}else{u=k[w]
t=C.n.cF(C.f.k(A.bF(u)),2,"0")+"/"+C.n.cF(C.f.k(A.aU(u)),2,"0")
s=t
t=u
u=s}t=D.bzi.i(0,A.xb(t))
t.toString
a6.push(new A.fL(1,C.d6,new A.aD(new A.aA(v,0,v,0),new B.amx(u,t,w===x,new B.bSi(r,w),l,q),q),q))}return A.eh(q,8,A.V(A.a([a1,a2,A.a3(A.a([new B.a3j("Semana Anterior "+(a4+" at\xe9 "+a5),D.ayi,r.w,!0,q),new B.a3l(C.jP,r.f,!0,q),A.ai(A.a3(a6,C.v,C.u,C.t,0),1),new B.a3l(C.hV,r.r,j,q),new B.a3j("Ir para semana seguinte "+(r.Em(e)+" at\xe9 "+r.Em(d)),D.ayj,r.x,j,q)],a0),C.v,C.u,C.t,a3)],a0),C.v,q,C.u,C.t,4),q,q,q,C.aR,q,q)}}
B.a3j.prototype={
t(d){var x,w,v,u=this,t=null
if(!u.f)return C.aP
x=A.aC(8)
w=C.aO.U(0.1)
v=A.aC(10)
return A.jb(A.cW(!1,x,!0,A.al(C.X,A.bW(u.d,t,t,18),C.B,t,t,new A.an(w,t,t,v,t,t,C.P),t,32,t,t,t,t,t,32),t,!0,t,t,t,t,t,t,t,t,t,u.e,t,t,t,t,t),t,t,t,u.c,t,t,t,t,t,t,t,t)}}
B.a3l.prototype={
t(d){var x,w,v,u=null
if(!this.e)return C.aP
x=A.aC(8)
w=C.aO.U(0.1)
v=A.aC(10)
return A.cW(!1,x,!0,A.al(C.X,A.bW(this.c,u,u,22),C.B,u,u,new A.an(w,u,u,v,u,u,C.P),u,32,u,u,u,u,u,32),u,!0,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u)}}
B.amx.prototype={
t(d){var x=this,w=null,v=A.aC(10),u=x.r,t=u?6:8,s=x.e,r=s?A.E(d).ax.b:C.aO.U(0.1),q=A.aC(10),p=u?13:14
p=A.P(x.c,w,C.O,w,w,A.bA(w,w,s?w:C.aO.U(0.5),w,w,w,w,w,w,w,w,p,w,w,C.ad,w,w,!0,w,w,w,w,w,w,w,w),w,w)
s=s?C.I:w
return A.cW(!1,v,!0,A.al(w,A.V(A.a([p,A.P(x.d,w,w,w,w,C.aU.ja(s,u?9:w),w,w)],y.p),C.v,w,C.u,C.Y,0),C.B,w,w,new A.an(r,w,w,q,w,w,C.P),w,w,w,w,new A.aA(0,t,0,t),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w)}}
B.aBn.prototype={
t(d){var x,w,v,u,t,s,r=null
A.E(d)
x=A.cjn(d)
w=A.cn3(d)
v=this.d
u=x.d
if(u==null){t=w.d
t.toString
u=t}s=x.e
if(s==null){t=w.e
t.toString
s=t}t=x.f
if(t==null)t=w.f
return new A.aj(this.c,r,A.ci(A.al(r,r,C.B,r,r,new A.an(r,r,new A.eM(C.a_,C.a_,C.a_,A.csX(d,this.r,v)),t,r,r,C.P),r,r,r,new A.h8(0,u,0,s),r,r,r,v),r,r),r)}}
var z=a.updateTypes(["Q<~>()","k(oi,oi)","tb()","J(oi)","k(p_,p_)","ae<c,c>(p_)","p_(@)","xL(@)","ae<c,@>(xL)","Ty(@)","Q<~>(k)","~()","~(oI)","ah(AX)","ah(Av)","ah(wi)","ah(wB)","Q<AX>()","Q<Av>()","Q<wB>()","Q<wi>()","Dp(aE)","Il(Dp)","Qh(T)","ru(c)","J(ru)","k(k,ru)","Re(ru)","oi(xL)"])
B.bbb.prototype={
$2(d,e){return d.b.vb().aZ(0,e.b.vb())},
$S:z+4}
B.bbc.prototype={
$1(d){var x=B.agM(d.a),w=A.bt("pt_BR").ai(d.d),v=C.i.a4(d.e,2),u=d.f?"Sim":"N\xe3o",t=y.N
return A.A(["day",x,"valor",w,"percentual",v+" %","futuro",u,"data",C.e.gS(d.b.kq().split("T"))],t,t)},
$S:z+5}
B.bTy.prototype={
$1(d){y.P.a(d)
return new B.p_(A.b1(d.i(0,"diaSemana")),A.mU(A.b1(d.i(0,"data"))),A.bP(d.i(0,"meta")),A.bP(d.i(0,"realizado")),A.bP(d.i(0,"percentual")),A.y7(d.i(0,"futuro")))},
$S:z+6}
B.bQb.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="atendimento",a0="engajamento",a1="cashback",a2="utilizado",a3=y.P
a3.a(a4)
x=a4.i(0,"tipo")
x=x==null?e:J.c1(x)
if(x==null)x=""
w=A.mU(A.b1(a4.i(0,"dataRegistro"))).vb()
v=a4.i(0,"empresa")
v=v==null?e:J.c1(v)
if(v==null)v=""
u=a4.i(0,"vendedorId")
u=u==null?e:J.c1(u)
if(u==null)u=""
t=a4.i(0,"nomeVendedor")
t=t==null?e:J.c1(t)
if(t==null)t=""
s=a4.i(0,"tipoEvento")
s=s==null?e:J.c1(s)
r=a4.i(0,"audioIdentifier")
r=r==null?e:J.c1(r)
q=a4.i(0,"iaEventId")
q=q==null?e:J.c1(q)
p=a4.i(0,"motivoPausa")
p=p==null?e:J.c1(p)
if(a4.i(0,"venda")!=null){o=a3.a(a4.i(0,"venda"))
n=A.bg(o.i(0,"notaNumero"))
n=n==null?e:C.i.D(n)
if(n==null)n=0
m=o.i(0,"notaSerie")
m=m==null?e:J.c1(m)
if(m==null)m=""
l=A.bg(o.i(0,"notaValorTotal"))
if(l==null)l=e
if(l==null)l=0
k=A.bg(o.i(0,"totalItensNota"))
k=k==null?e:C.i.D(k)
if(k==null)k=0
o=new B.bRv(n,m,l,k,A.mU(A.b1(o.i(0,"dataVenda"))))}else o=e
n=a4.i(0,d)!=null?new B.aUB(a3.a(a4.i(0,d))):e
m=a4.i(0,a0)!=null?new B.bbg(a3.a(a4.i(0,a0))):e
if(a4.i(0,a1)!=null){l=a3.a(a4.i(0,a1))
if(l.i(0,"gerado")!=null){k=a3.a(l.i(0,"gerado"))
j=A.bg(k.i(0,"cashbackId"))
j=j==null?e:C.i.D(j)
if(j==null)j=0
i=A.bg(k.i(0,"valor"))
if(i==null)i=e
if(i==null)i=0
h=k.i(0,"status")
h=h==null?e:J.c1(h)
if(h==null)h=""
g=k.i(0,"clienteCpf")
g=g==null?e:J.c1(g)
if(g==null)g=""
f=k.i(0,"clienteNome")
f=f==null?e:J.c1(f)
if(f==null)f=""
k=k.i(0,"campanha")
k=k==null?e:J.c1(k)
k=new B.b11(j,i,h,g,f,k==null?"":k)}else k=e
if(l.i(0,a2)!=null){a3=a3.a(l.i(0,a2))
l=A.bg(a3.i(0,"valor"))
if(l==null)l=e
if(l==null)l=0
a3=A.bg(a3.i(0,"cashbackOrigem"))
a3=a3==null?e:C.i.D(a3)
a3=new B.b1a(l,a3==null?0:a3)}else a3=e
a3=new B.b0P(k,a3)}else a3=e
return new B.xL(x,w,v,u,t,s,r,q,p,o,n,m,a3)},
$S:z+7}
B.bQc.prototype={
$1(d){return d.X()},
$S:z+8}
B.bGo.prototype={
$1(d){var x="valorTotal",w=A.b1(d.i(0,"tipoRegistro")),v=A.b1(d.i(0,"tipoEvento")),u=A.bO(d.i(0,"quantidade"))
if(d.i(0,x)!=null)A.bP(d.i(0,x))
return new B.Ty(w,v,u)},
$S:z+9}
B.cgK.prototype={
$0(){var x,w
try{x=this.a.f
x.toString
x=B.aAM(x)
return x}catch(w){return D.Ef}},
$S:z+2}
B.cgL.prototype={
$0(){var x,w
try{x=this.a.f
x.toString
x=B.aAM(x)
return x}catch(w){return D.w2}},
$S:z+2}
B.cgG.prototype={
$0(){var x,w,v=this
switch(v.a.a){case 7:x=new B.cgH(v.b).$0()
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
B.cgH.prototype={
$0(){var x,w,v=this.a.y,u=v==null,t=u?null:v.a,s=u?null:v.d,r=u?null:v.c
if(t==null||t===0)x=""
else x=" #"+A.z(t)+" / "+A.z(s==null?"":s)+" items"
w=r==null?"":" \u2013 R$ "+C.i.a4(r,2)
return"Venda"+x+w},
$S:23}
B.cgJ.prototype={
$0(){A:{if(D.aa1===this.a){var x=""
break A}x=C.n.bB(this.b.e)
break A}return x},
$S:23}
B.cgI.prototype={
$0(){var x=this.a.z,w=A.bg(x==null?null:x.a.i(0,"duracaoAtendimento"))
if(w==null)w=null
if(w==null||w<=0)return C.an
return A.cT(0,0,0,0,0,C.i.af(w))},
$S:261}
B.cgM.prototype={
$2(d,e){return d.f.aZ(0,e.f)},
$S:z+1}
B.bFB.prototype={
$1(d){var x=d.f
return!x.jB(this.a)&&x.jB(this.b)},
$S:z+3}
B.bFC.prototype={
$2(d,e){return d.f.aZ(0,e.f)},
$S:z+1}
B.bFG.prototype={
$1(d){return d+1},
$S:21}
B.bFH.prototype={
$0(){return 1},
$S:54}
B.bFI.prototype={
$1(d){return d+1},
$S:21}
B.bFJ.prototype={
$0(){return 1},
$S:54}
B.bFK.prototype={
$1(d){return this.a.ba.gj().p(0,d.b)},
$S:z+3}
B.bFL.prototype={
$2(d,e){return d.f.aZ(0,e.f)},
$S:z+1}
B.bG7.prototype={
$1(d){return this.a.k4=A.rE(d,this.b)},
$S:1486}
B.bG8.prototype={
$1(d){var x
if(d.a===C.mt){$.ho=C.lN
x=this.a
if(!x.p4)return
x.iH()
x.tu()}},
$S:1487}
B.bG9.prototype={
$0(){return this.a.p4=!0},
$S:58}
B.bFD.prototype={
$1(d){return this.aCA(d)},
aCA(d){var x=0,w=A.p(y.a),v,u=this,t,s,r,q
var $async$$1=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:q=u.a
if(q.b7){q.b7=!1
x=1
break}t=d.b
s=A.bK(A.aQ(t),A.aU(t),A.bF(t),0,0,0,0)
r=s.d4(-5184e8)
q.R8.sj(r)
q.RG.sj(s)
q.rx.sj(r)
q.ry.sj(s)
if(!q.p4){x=1
break}q.iH()
x=3
return A.f(q.tu(),$async$$1)
case 3:q.eQ()
case 1:return A.n(v,w)}})
return A.o($async$$1,w)},
$S:484}
B.bFE.prototype={
$1(d){return this.aCz(d)},
aCz(d){var x=0,w=A.p(y.a),v,u=this,t,s,r
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
break}t.iH()
t.tu()
case 1:return A.n(v,w)}})
return A.o($async$$1,w)},
$S:483}
B.bFF.prototype={
$1(d){var x=this.a
x.k4=d.a
if(!x.p4)return
x.iH()
x.tu()},
$S:94}
B.bGb.prototype={
$0(){this.a.aj3()},
$S:0}
B.bGa.prototype={
$0(){this.a.J2()},
$S:0}
B.bG1.prototype={
$1(d){this.a.y1.sj(!1)},
$S:2}
B.bG2.prototype={
$1(d){var x=this.a
x.aJ.sj(d)
x.y1.sj(!1)},
$S:488}
B.bG3.prototype={
$1(d){this.a.aT.sj(!1)},
$S:2}
B.bG4.prototype={
$1(d){var x,w=B.d8s(d),v=this.a,u=v.aS
u.sB(0,0)
x=u.bI$
x===$&&A.b()
J.id(x,w)
x=u.cb$
u=u.gj()
x.r=u
x.cq(u)
v.aT.sj(!1)},
$S:z+13}
B.bG_.prototype={
$1(d){this.a.y2.sj(!1)},
$S:2}
B.bG0.prototype={
$1(d){var x,w,v,u,t,s,r=y.S,q=A.w(y.r,r),p=A.w(y.N,r)
for(r=d.a,x=r.length,w=0;w<r.length;r.length===x||(0,A.N)(r),++w){v=r[w]
u=v.b
t=B.d8p(v.a,u)
if(t!=null)q.NE(t,new B.bFW(v),new B.bFX(v))
s=u.toLowerCase()
if(s.length!==0)p.NE(s,new B.bFY(v),new B.bFZ(v))}r=this.a
B.cvf(r.bz,q)
B.cvf(r.a2,p)
r.y2.sj(!1)},
$S:z+14}
B.bFW.prototype={
$1(d){return d+this.a.c},
$S:21}
B.bFX.prototype={
$0(){return this.a.c},
$S:54}
B.bFY.prototype={
$1(d){return d+this.a.c},
$S:21}
B.bFZ.prototype={
$0(){return this.a.c},
$S:54}
B.bFO.prototype={
$1(d){this.a.aQ.sj(!1)},
$S:2}
B.bFP.prototype={
$1(d){var x=this.a
x.an.sj(d)
x.aQ.sj(!1)},
$S:z+15}
B.bFS.prototype={
$1(d){this.a.xr.sj(!1)},
$S:2}
B.bFT.prototype={
$1(d){var x=this.a
x.a8.sj(d)
x.xr.sj(!1)},
$S:254}
B.bFM.prototype={
$1(d){this.a.x1.sj(!1)},
$S:2}
B.bFN.prototype={
$1(d){var x,w,v=this.a,u=v.am
u.sB(0,0)
x=u.bI$
x===$&&A.b()
J.id(x,d.a)
x=u.cb$
w=u.gj()
x.r=w
x.cq(w)
u=u.gj()
x.r=u
x.cq(u)
v.x1.sj(!1)},
$S:487}
B.bG5.prototype={
$1(d){this.a.x2.sj(!1)},
$S:2}
B.bG6.prototype={
$1(d){var x=this.a
x.Z.sj(d)
x.x2.sj(!1)},
$S:138}
B.bFU.prototype={
$1(d){},
$S:2}
B.bFV.prototype={
$1(d){this.a.R.sj(d)},
$S:138}
B.bFQ.prototype={
$1(d){this.a.v.sj(!1)},
$S:2}
B.bFR.prototype={
$1(d){var x=this.a
x.a0.sj(d)
x.v.sj(!1)},
$S:z+16}
B.bGc.prototype={
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
e=A.ai(B.bjw(e,""+u.e+" vendas | "+C.i.a4((t==null?$.d=C.q:t).q(f,x).a0.gj().d,2)+" PA",v.r,"Vendas L\xedquidas",w.a),1)
w=$.d
w=(w==null?$.d=C.q:w).q(f,x).xr.gj()
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).a8.gj()
u=$.d
w=A.ai(B.bjw(w,f,(u==null?$.d=C.q:u).q(f,x).a8.gj().a.a.f,"Ticket M\xe9dio",v.a.a.x),1)
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).aQ.gj()
u=$.d
v=A.ai(new B.a05(v,(u==null?$.d=C.q:u).q(f,x).an.gj(),f),2)
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
n=(n==null?$.d=C.q:n).q(f,x).R8.gj().d4(-6048e8)
m=$.d
u=A.ai(B.crJ(u,(m==null?$.d=C.q:m).q(f,x).R8.gj().d4(-864e8),n,p.d,o.e,q.a,s.d,r.e,t.a),2)
t=$.d
t=(t==null?$.d=C.q:t).q(f,x).y1.gj()
s=$.d
r=y.p
s=A.a3(A.a([e,w,v,u,A.ai(new B.a8B(t,(s==null?$.d=C.q:s).q(f,x).aJ.gj(),f),2)],r),C.v,C.u,C.t,8)
t=$.d
e=(t==null?$.d=C.q:t).q(f,x).ba
w=$.d
w=(w==null?$.d=C.q:w).q(f,x).gau9()
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).gyV()
u=$.d
u=(u==null?$.d=C.q:u).q(f,x).gaAL()
t=$.d
t=(t==null?$.d=C.q:t).q(f,x).to.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(f,x).gVg().length
p=$.d
p=(p==null?$.d=C.q:p).q(f,x).gYZ()
o=$.d
o=(o==null?$.d=C.q:o).q(f,x).gaBy()
n=$.d
n=(n==null?$.d=C.q:n).q(f,x).gad_()
m=$.d
m=(m==null?$.d=C.q:m).q(f,x).gacY()
l=$.d
l=(l==null?$.d=C.q:l).q(f,x).gaz7()
k=$.d
k=(k==null?$.d=C.q:k).q(f,x).gay6()
j=$.d
j=(j==null?$.d=C.q:j).q(f,x).gaz8()
i=$.d
i=(i==null?$.d=C.q:i).q(f,x).gay9()
h=$.d
h=(h==null?$.d=C.q:h).q(f,x).gVg()
g=$.d
if(!(g==null?$.d=C.q:g).q(f,x).aT.gj()){g=$.d
g=(g==null?$.d=C.q:g).q(f,x).y2.gj()}else g=!0
o=A.ai(A.V(A.a([B.cti(w,h,g,k,i,l,j,v,m,u,n,e,t,p,q,o)],r),C.v,f,C.u,C.t,8),65)
q=$.d
e=(q==null?$.d=C.q:q).q(f,x).y2.gj()
w=$.d
w=(w==null?$.d=C.q:w).q(f,x).bz
v=$.d
v=(v==null?$.d=C.q:v).q(f,x).gYZ()
u=$.d
u=(u==null?$.d=C.q:u).q(f,x).am
u=u.cV(u)
t=$.d
t=(t==null?$.d=C.q:t).q(f,x).x1.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(f,x).y2.gj()
p=$.d
return A.V(A.a([new A.aj(f,120,s,f),A.a3(A.a([o,A.ai(A.V(A.a([new B.a7T(e,w,v,f),new A.aj(f,400,new F.yy(new A.nI(u),t,f),f),new B.a23(q,(p==null?$.d=C.q:p).q(f,x).a2,f)],r),C.v,f,C.u,C.t,8),35)],r),C.N,C.u,C.t,8)],r),C.v,f,C.u,C.t,8)},
$S:32}
B.bGd.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=A.P("Atividades do Vendedor",a9,a9,a9,a9,A.E(this.b).ok.x,a9,a9),b1=$.d
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
b1=A.ai(B.bjw(b1,""+u.e+" vendas | "+C.i.a4((t==null?$.d=C.q:t).q(a9,x).a0.gj().d,2)+" PA",v.r,"Vendas L\xedquidas",w.a),1)
w=$.d
w=(w==null?$.d=C.q:w).q(a9,x).xr.gj()
v=$.d
v=(v==null?$.d=C.q:v).q(a9,x).a8.gj()
u=$.d
t=y.p
v=A.a3(A.a([b1,A.ai(B.bjw(w,a9,(u==null?$.d=C.q:u).q(a9,x).a8.gj().a.a.f,"Ticket M\xe9dio",v.a.a.x),1)],t),C.v,C.u,C.t,8)
u=$.d
b1=(u==null?$.d=C.q:u).q(a9,x).aQ.gj()
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
m=(m==null?$.d=C.q:m).q(a9,x).R8.gj().d4(-6048e8)
l=$.d
u=B.crJ(u,(l==null?$.d=C.q:l).q(a9,x).R8.gj().d4(-864e8),m,o.d,n.e,p.a,r.d,q.e,s.a)
s=$.d
s=(s==null?$.d=C.q:s).q(a9,x).y1.gj()
r=$.d
r=(r==null?$.d=C.q:r).q(a9,x).aJ.gj()
q=$.d
q=(q==null?$.d=C.q:q).q(a9,x).y2.gj()
p=$.d
p=(p==null?$.d=C.q:p).q(a9,x).bz
o=$.d
o=(o==null?$.d=C.q:o).q(a9,x).gYZ()
n=$.d
n=(n==null?$.d=C.q:n).q(a9,x).am
n=n.cV(n)
m=$.d
m=(m==null?$.d=C.q:m).q(a9,x).x1.gj()
l=$.d
l=(l==null?$.d=C.q:l).q(a9,x).y2.gj()
k=$.d
k=(k==null?$.d=C.q:k).q(a9,x).a2
j=$.d
j=(j==null?$.d=C.q:j).q(a9,x).ba
i=$.d
i=(i==null?$.d=C.q:i).q(a9,x).gau9()
h=$.d
h=(h==null?$.d=C.q:h).q(a9,x).gyV()
g=$.d
g=(g==null?$.d=C.q:g).q(a9,x).gaAL()
f=$.d
f=(f==null?$.d=C.q:f).q(a9,x).to.gj()
e=$.d
e=(e==null?$.d=C.q:e).q(a9,x).gVg().length
d=$.d
d=(d==null?$.d=C.q:d).q(a9,x).gYZ()
a0=$.d
a0=(a0==null?$.d=C.q:a0).q(a9,x).gaBy()
a1=$.d
a1=(a1==null?$.d=C.q:a1).q(a9,x).gad_()
a2=$.d
a2=(a2==null?$.d=C.q:a2).q(a9,x).gacY()
a3=$.d
a3=(a3==null?$.d=C.q:a3).q(a9,x).gaz7()
a4=$.d
a4=(a4==null?$.d=C.q:a4).q(a9,x).gay6()
a5=$.d
a5=(a5==null?$.d=C.q:a5).q(a9,x).gaz8()
a6=$.d
a6=(a6==null?$.d=C.q:a6).q(a9,x).gay9()
a7=$.d
a7=(a7==null?$.d=C.q:a7).q(a9,x).gVg()
a8=$.d
if(!(a8==null?$.d=C.q:a8).q(a9,x).aT.gj()){a8=$.d
x=(a8==null?$.d=C.q:a8).q(a9,x).y2.gj()}else x=!0
return A.V(A.a([b0,new A.aj(a9,100,v,a9),new B.a05(b1,w,a9),new A.aj(a9,120,u,a9),new A.aj(a9,130,new B.a8B(s,r,a9),a9),new B.a7T(q,p,o,a9),new A.aj(a9,400,new F.yy(new A.nI(n),m,a9),a9),new B.a23(l,k,a9),B.cti(i,a7,x,a4,a6,a3,a5,h,a2,g,a1,j,f,d,e,a0),C.d9],t),C.v,a9,C.u,C.Y,8)},
$S:32}
B.bGn.prototype={
$0(){var x=this,w=x.d
if(w.length===0)w=null
return x.a.a.Px(x.b,x.c,w)},
$S:z+17}
B.bGm.prototype={
$0(){var x=this,w=x.d
if(w.length===0)w=null
return x.a.a.Po(x.b,x.c,w)},
$S:z+18}
B.bGj.prototype={
$0(){var x=this,w=x.b
if(w.length===0)w=null
return x.a.a.OO(w,x.c,x.d)},
$S:z+19}
B.bGi.prototype={
$0(){var x=this
return x.a.a.Oy(x.b,x.c,x.d)},
$S:z+20}
B.bGg.prototype={
$0(){var x=this
return x.a.a.O3(x.b,x.c,A.hm(x.d,!1),A.hm(x.e,!0))},
$S:315}
B.bGh.prototype={
$0(){var x=this
return x.a.a.Ob(x.b,A.hm(x.c,!1),A.hm(x.d,!0))},
$S:314}
B.bGl.prototype={
$0(){var x=this
return x.a.a.vG(x.b,x.c,x.d,A.hm(x.e,!1),A.hm(x.f,!0))},
$S:312}
B.bGk.prototype={
$0(){var x=this,w=A.hm(x.c,!1)
return x.a.a.OR(x.b,A.hm(x.d,!0),w)},
$S:255}
B.c9i.prototype={
$2(d,e){return e==null},
$S:20}
B.c9h.prototype={
$2(d,e){return e==null},
$S:20}
B.c9f.prototype={
$2(d,e){return e==null},
$S:20}
B.c9e.prototype={
$2(d,e){return e==null},
$S:20}
B.c9d.prototype={
$2(d,e){return e==null},
$S:20}
B.c9g.prototype={
$2(d,e){return e==null},
$S:20}
B.c9c.prototype={
$2(d,e){return e==null},
$S:20}
B.b1y.prototype={
$2(d,e){var x=null,w=this.a
return w.z?A.a2q(e.d):A.eh(x,8,F.ciI(!1,w.y,w.x,w.r,w.w,w.f,w.d,w.e,w.c),x,x,x,C.aR,x,x)},
$S:100}
B.cfd.prototype={
$1(d){var x=d.vb()
return A.bK(A.aQ(x),A.aU(x),A.bF(x),0,0,0,0)},
$S:1488}
B.cfb.prototype={
$1(d){switch(A.xb(d)){case 1:return"SEGUNDA"
case 2:return"TERCA"
case 3:return"QUARTA"
case 4:return"QUINTA"
case 5:return"SEXTA"
case 6:return"SABADO"
case 7:return"DOMINGO"
default:return""}},
$S:511}
B.cfe.prototype={
$1(d){return B.cDc(this.a.$1(d))},
$S:511}
B.cfc.prototype={
$1(d){var x,w,v=null,u=this.a.i(0,d),t=u==null,s=!t,r=t?v:u.f,q=s&&r!==!0
r=t?v:u.e
x=C.i.aC(r==null?0:r,0,100)
r=s?B.cDc(B.agM(u.a)):this.b.$1(d)
w=t?v:u.c
if(w==null)w=0
t=t?v:u.d
if(t==null)t=0
return new B.Dp(r,x,w,t,s?B.agM(u.a):this.c.$1(d),q,d)},
$S:z+21}
B.bbf.prototype={
$2(d,e){var x,w,v,u=null,t=this.a
if(t.c)return D.bwI
t=t.d
x=C.i.aC(t.b.c,0,100)
w=B.d5R(t)
t=this.b
t=A.a8R(new B.bbd(A.E(t).ax.a===C.b3?D.aim:D.Ho,t),u,C.mY,C.eQ,new A.aG(0,x,y.D),y.F)
v=A.R(w).h("G<1,Il>")
v=A.F(new A.G(w,new B.bbe(),v),v.h("a2.E"))
return new A.aj(1/0,120,A.eh(u,8,A.V(A.a([C.fS,new A.aj(100,25,t,u),new A.aj(u,25,A.h1(C.EF,v,C.c3,C.aq,0,6),u)],y.p),C.v,u,C.u,C.t,8),u,u,u,C.aR,u,u),u)},
$S:72}
B.bbd.prototype={
$3(d,e,f){var x=null,w=B.cCZ(e),v=A.iX(x,x,x,new B.ant(e,C.f.aC(6,8,14),this.a,w,D.anC,x),D.bYL),u=A.a8M(A.mx(C.i.a4(e,0)+"%",w,!0,x,C.O),D.bR6),t=A.E(this.b).ok.x
return A.dH(C.X,A.a([v,u,A.P("Meta semanal",1,C.O,x,x,t==null?x:t.ja(C.aO,8),x,x)],y.p),C.a6,C.aW,x)},
$S:1490}
B.bbe.prototype={
$1(d){return new B.Il(d.a,d.b,d.c,d.d,d.e,d.f,d.r,null)},
$S:z+22}
B.bcQ.prototype={
$2(d,e){return d+e},
$S:48}
B.bcR.prototype={
$1(d){var x,w,v,u,t=this.a,s=this.b,r=t.d.i(0,s)
if(r==null)r=0
x=B.aTF(s)
w=t.c.gj().p(0,s)
v=B.cie(s)
u=r===0
return B.ctu(v,r,u,x,u?new B.bcO():new B.bcP(t,s),w)},
$S:z+23}
B.bcO.prototype={
$0(){},
$S:0}
B.bcP.prototype={
$0(){return this.a.f.$1(this.b)},
$S:0}
B.bjx.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.a
if(l.c)return C.Bg
x=A.a3u(m,"pt_BR","")
w=l.f
v=l.e
u=v-w
t=u>0
s=u<0
r=w!==0?u/w*100:m
if(u===0)q=C.R
else q=t?C.du:C.bt
p=A.E(this.b).ok.ax
p=p==null?m:p.hc(10)
o=y.p
p=A.a([A.ai(A.P(l.d,m,C.O,m,m,p,m,m),1)],o)
if(t)n=D.ayd
else n=s?D.ayc:H.qV
p.push(A.bW(n,q,m,18))
p=A.a3(p,C.v,C.u,C.t,0)
v=A.mx("R$ "+x.ai(v),m,!0,m,C.O)
l=l.r
l=A.a([A.ai(A.P(l==null?"":l,2,C.i8,m,!0,C.aU,m,m),1)],o)
if(r!=null){if(t)n=D.ax0
else n=s?C.iw:H.qV
l.push(A.a3(A.a([A.bW(n,q,m,m),A.P(C.i.a4(Math.abs(r),1)+"%",m,m,m,m,A.bA(m,m,q,m,m,m,m,m,m,m,m,12,m,m,C.ad,m,m,!0,m,m,m,m,m,m,m,m),m,m)],o),C.v,C.u,C.t,0))}return A.eh(m,8,A.V(A.a([p,v,A.a3(l,C.dU,C.as,C.t,0)],o),C.N,m,C.f_,C.t,0),m,m,m,C.aR,m,m)},
$S:100}
B.bl_.prototype={
$1(d){var x=this.a.d,w=x.gj().i(0,x.$ti.c.a(d))
if(w==null)w=0
return new B.ru(B.d8u(d),w,B.d8t(d))},
$S:z+24}
B.bl0.prototype={
$1(d){return d.b>0},
$S:z+25}
B.bl1.prototype={
$2(d,e){return d+e.b},
$S:z+26}
B.bl2.prototype={
$1(d){return new B.Re(d,this.a,6,8,null)},
$S:z+27}
B.bl3.prototype={
$2(d,e){var x=null,w=this.a,v=w.c,u=y.p,t=w.e
w=w.f
return A.V(A.a([A.a3(A.a([A.ai(A.fe(v.a.toUpperCase(),x,!1,1,C.O,x),1),A.mx(C.f.k(v.b),x,!0,1,C.O)],u),C.v,C.u,C.t,0),new A.aj(x,t,A.dH(C.bc,A.a([A.al(x,x,C.B,x,x,new A.an(C.aO.U(0.1),x,x,A.aC(w),x,x,C.P),x,t,x,x,x,x,x,x),A.oJ(x,x,x,C.mY,new A.an(v.c,x,x,A.aC(w),x,x,C.P),C.qm,x,t,x,x,e.b*this.b)],u),C.a6,C.aW,x),x)],u),C.N,x,C.u,C.t,8)},
$S:260}
B.blW.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q=this.a.c,p=q[e],o=e===q.length-1,n=p.x!=null
q=p.b
x=B.cie(q)
w=n?D.axl:B.cLq(q)
q=y.p
v=A.a([A.fe(B.cj3(p.f),r,!0,r,r,r)],q)
u=p.r
if(C.f.aH(u.a,1e6)>0)v.push(A.P(B.cms(u),r,r,r,r,C.aU,r,r))
v=A.V(v,C.dU,r,C.u,C.t,0)
u=x.U(0.15)
t=A.ew(x,-1,C.V,1.2)
t=A.a([C.hu,A.al(r,A.bW(w,x,r,16),C.B,r,r,new A.an(u,r,t,r,r,r,C.bl),r,28,r,r,r,r,r,28)],q)
if(!o)t.push(A.ai(A.al(r,r,C.B,r,r,new A.an(C.R.U(0.25),r,r,A.aC(1),r,r,C.P),r,r,r,C.yH,r,r,r,2),1))
u=A.V(t,C.v,r,C.u,C.t,0)
t=o?4:16
s=n?new B.a1a(p,r):new B.anE(p,r)
return new A.R4(A.a3(A.a([new A.aj(44,r,new A.aD(D.aqc,v,r),r),C.cy,new A.aj(28,r,u,r),L.vI,A.ai(new A.aD(new A.aA(0,0,0,t),s,r),1)],q),C.N,C.u,C.t,0),r)},
$S:1491}
B.c1K.prototype={
$0(){var x=this.a
return x.a6(new B.c1J(x))},
$S:0}
B.c1J.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.bOs.prototype={
$2(d,e){return d+e},
$S:48}
B.bQ6.prototype={
$2(d,e){var x,w,v=null,u=A.E(this.b).ok.x.yZ(8,C.ad),t=this.a
if(t.c)t=A.a2q(e.d)
else{x=t.d
w=y.p
w=A.eh(v,8,A.cK(A.a3(A.a([new A.c5(2,C.ah,A.V(A.a([new A.c5(1,C.ah,new F.AO(C.fD,"Tempo M\xe9dio N\xe3o Convers\xe3o",x.yd(x.f),u,v),v),new A.c5(1,C.ah,new F.AO(C.du,"Tempo M\xe9dio Convers\xe3o",x.yd(x.e),u,v),v),new A.c5(1,C.ah,new F.AO(E.cS,"Tempo M\xe9dio Total",x.yd(x.r),u,v),v)],w),C.N,v,C.aL,C.t,5),v),new A.c5(1,C.ah,A.cX(new B.bQ5(t)),v)],w),C.v,C.aL,C.t,8),v,0,0,0,0,8,v,v,v),v,v,v,C.aM,v,v)
t=w}return t},
$S:100}
B.bQ5.prototype={
$2(d,e){var x=Math.min(e.d,e.b),w=this.a.d
return new A.aj(x,x,new F.Zk(w.r,w.e,w.f,null),null)},
$S:106}
B.bSi.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_0u
x(B,"dah","d8r",28)
var u
w(u=B.xo.prototype,"gacY","PY",10)
v(u,"gaz7","N4",0)
v(u,"gay6","MI",0)
v(u,"gaz8","N5",0)
v(u,"gay9","MJ",0)
v(u,"gyV","rR",11)
w(u,"gaAL","bz3",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.anu,B.anv,B.p_,B.wi,B.xL,B.bRv,B.b0P,B.b11,B.b1a,B.aUB,B.bbg,B.AX,B.wB,B.Ty,B.Av,B.oi,B.c9b,B.Dp,B.ru])
x(A.iB,[B.bbb,B.cgM,B.bFC,B.bFL,B.c9i,B.c9h,B.c9f,B.c9e,B.c9d,B.c9g,B.c9c,B.b1y,B.bbf,B.bcQ,B.bjx,B.bl1,B.bl3,B.blW,B.bOs,B.bQ6,B.bQ5])
x(A.hn,[B.bbc,B.bTy,B.bQb,B.bQc,B.bGo,B.bFB,B.bFG,B.bFI,B.bFK,B.bG7,B.bG8,B.bFD,B.bFE,B.bFF,B.bG1,B.bG2,B.bG3,B.bG4,B.bG_,B.bG0,B.bFW,B.bFY,B.bFO,B.bFP,B.bFS,B.bFT,B.bFM,B.bFN,B.bG5,B.bG6,B.bFU,B.bFV,B.bFQ,B.bFR,B.cfd,B.cfb,B.cfe,B.cfc,B.bbd,B.bbe,B.bcR,B.bl_,B.bl0,B.bl2])
x(A.li,[B.tb,B.XI,B.oI])
x(A.ie,[B.cgK,B.cgL,B.cgG,B.cgH,B.cgJ,B.cgI,B.bFH,B.bFJ,B.bG9,B.bGb,B.bGa,B.bFX,B.bFZ,B.bGc,B.bGd,B.bGn,B.bGm,B.bGj,B.bGi,B.bGg,B.bGh,B.bGl,B.bGk,B.bcO,B.bcP,B.c1K,B.c1J,B.bSi])
w(B.bFA,A.ri)
w(B.bGe,A.vW)
w(B.xo,A.ls)
w(B.Lz,A.mQ)
w(B.bGf,A.oM)
x(A.H,[B.ajq,B.a05,B.Il,B.anG,B.ao3,B.Qh,B.ap9,B.aqa,B.a23,B.Re,B.ar8,B.anE,B.XJ,B.Xd,B.Wb,B.aKw,B.aez,B.aQ8,B.aK9,B.a3s,B.a7T,B.AP,B.a8B,B.aBG,B.a3j,B.a3l,B.amx,B.aBn])
w(B.ant,A.Cz)
w(B.a1a,A.a8)
w(B.aIi,A.ad)})()
A.i9(b.typeUniverse,JSON.parse('{"xo":{"aI":[],"da":[]},"Lz":{"ab":["xo"],"H":[],"e":[],"i":[],"ab.T":"xo"},"ajq":{"H":[],"e":[],"i":[]},"Il":{"H":[],"e":[],"i":[]},"a05":{"H":[],"e":[],"i":[]},"ant":{"aI":[]},"anG":{"H":[],"e":[],"i":[]},"Qh":{"H":[],"e":[],"i":[]},"ao3":{"H":[],"e":[],"i":[]},"ap9":{"H":[],"e":[],"i":[]},"aqa":{"H":[],"e":[],"i":[]},"Re":{"H":[],"e":[],"i":[]},"a23":{"H":[],"e":[],"i":[]},"a1a":{"a8":[],"e":[],"i":[]},"ar8":{"H":[],"e":[],"i":[]},"anE":{"H":[],"e":[],"i":[]},"XJ":{"H":[],"e":[],"i":[]},"aIi":{"ad":["a1a"]},"Xd":{"H":[],"e":[],"i":[]},"Wb":{"H":[],"e":[],"i":[]},"aKw":{"H":[],"e":[],"i":[]},"aez":{"H":[],"e":[],"i":[]},"aQ8":{"H":[],"e":[],"i":[]},"aK9":{"H":[],"e":[],"i":[]},"a3s":{"H":[],"e":[],"i":[]},"a7T":{"H":[],"e":[],"i":[]},"AP":{"H":[],"e":[],"i":[]},"a8B":{"H":[],"e":[],"i":[]},"aBG":{"H":[],"e":[],"i":[]},"a3j":{"H":[],"e":[],"i":[]},"a3l":{"H":[],"e":[],"i":[]},"amx":{"H":[],"e":[],"i":[]},"aBn":{"H":[],"e":[],"i":[]}}'))
var y=(function rtii(){var x=A.a1
return{r:x("oI"),w:x("oL"),_:x("jV"),j:x("nI"),k:x("aE"),I:x("qb"),U:x("ca<az,oL>"),A:x("ca<az,nI>"),Q:x("ca<az,wi>"),G:x("ca<az,wB>"),q:x("ca<az,p8>"),R:x("ca<az,Av>"),V:x("ca<az,mv>"),W:x("ca<az,AX>"),K:x("p_"),Y:x("wi"),e:x("rv"),y:x("fU"),o:x("nX"),n:x("rw"),g:x("wB"),i:x("p8"),B:x("de<~>"),Z:x("x<aE>"),m:x("x<ae<c,c>>"),t:x("x<oi>"),x:x("x<f4<@>>"),s:x("x<c>"),p:x("x<e>"),C:x("x<~()?>"),u:x("B<~()>"),P:x("ae<c,@>"),v:x("G<aE,Dp>"),f:x("G<c,ru>"),l:x("j2"),a:x("ah"),c:x("xo"),h:x("Ty"),d:x("Av"),b:x("oi"),L:x("mv"),N:x("c"),O:x("xL"),T:x("AX"),D:x("aG<K>"),E:x("J"),F:x("K"),z:x("@"),S:x("k"),J:x("e7?"),M:x("B<@>?"),X:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.F6=new B.XI(0,"success")
D.abN=new B.XI(2,"error")
D.abO=new B.XI(3,"pending")
D.F7=new B.oI(0,"checkIn")
D.F8=new B.oI(1,"checkOut")
D.wT=new B.oI(2,"atendimentoIniciado")
D.pg=new B.oI(3,"atendimentoConcluido")
D.wU=new B.oI(4,"atendimentoCancelado")
D.wV=new B.oI(5,"pausaIniciada")
D.wW=new B.oI(6,"pausaFinalizada")
D.wX=new B.oI(7,"venda")
D.aee=new A.av(110,1/0,28,1/0)
D.Gz=new B.bGe()
D.c0_=new A.dr("Sem dados",C.cV,C.bk,!1,C.R,null,null,null,null,null)
D.ahq=new A.h6(C.X,null,null,D.c0_,null)
D.aim=new A.M(1,0.1411764705882353,0.18823529411764706,0.22745098039215686,C.y)
D.akx=new A.M(1,0.5411764705882353,0.5411764705882353,0.5411764705882353,C.y)
D.akO=new A.M(1,0.16470588235294117,0.20392156862745098,0.25098039215686274,C.y)
D.alg=new A.M(1,0.5450980392156862,0.596078431372549,0.6549019607843137,C.y)
D.Ho=new A.M(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,C.y)
D.anC=new A.M(0.13333333333333333,0.06274509803921569,0,0,C.y)
D.c_F=new A.dr("Filtrar por tipo de evento",C.cV,C.bk,!0,null,C.O,null,null,null,null)
D.c5J=new A.cb("Selecione o tipo de eventos",null,C.aU,null,null,null,null,null,null,null)
D.bok=x([D.c_F,D.c5J],y.p)
D.anR=new A.hZ(C.aa,C.u,C.t,C.N,null,C.bX,null,0,D.bok,null)
D.WB=new A.i3(80,1/0,null)
D.bnA=x([C.Bg,D.WB,D.WB,L.WE],y.p)
D.anT=new A.hZ(C.aa,C.u,C.t,C.v,null,C.bX,null,8,D.bnA,null)
D.aqc=new A.aA(0,4,0,0)
D.IL=new A.aA(0,4,8,4)
D.aqg=new A.aA(0,6,8,10)
D.aql=new A.aA(10,4,10,4)
D.ax0=new A.aZ(57498,"MaterialIcons",null,!1)
D.axl=new A.aZ(58221,"MaterialIcons",null,!1)
D.axr=new A.aZ(58494,"MaterialIcons",null,!1)
D.zC=new A.aZ(58573,"MaterialIcons",null,!1)
D.JW=new A.aZ(59916,"MaterialIcons",null,!1)
D.K0=new A.aZ(62863,"MaterialIcons",null,!1)
D.ay8=new A.aZ(983271,"MaterialIcons",null,!0)
D.ay9=new A.aZ(983287,"MaterialIcons",null,!1)
D.ayc=new A.aZ(983634,"MaterialIcons",null,!0)
D.ayd=new A.aZ(983636,"MaterialIcons",null,!0)
D.ayh=new A.aZ(984323,"MaterialIcons",null,!1)
D.ayi=new A.aZ(984368,"MaterialIcons",null,!1)
D.ayj=new A.aZ(984369,"MaterialIcons",null,!1)
D.ayA=new A.di(D.K0,13,E.cS,null,null)
D.bml=x([D.F7,D.F8,D.wT,D.pg,D.wU,D.wV,D.wW,D.wX],A.a1("x<oI>"))
D.bqH=x(["check_in","check_out","atendimento_iniciado","atendimento_concluido","atendimento_cancelado","pausa_iniciada","pausa_finalizada","venda"],y.s)
D.Up=x([],A.a1("x<p_>"))
D.bwI=new A.i3(140,1/0,null)
D.bzi=new A.a_([1,"Seg",2,"Ter",3,"Qua",4,"Qui",5,"Sex",6,"S\xe1b",7,"Dom"],A.a1("a_<k,c>"))
D.bQ_=new A.Em(C.aZ,6)
D.bR6=new A.C(0,-14)
D.aq8=new A.aA(0,24,0,24)
D.c5G=new A.cb("Sem eventos neste dia",null,null,null,null,null,null,null,null,null)
D.aho=new A.h6(C.X,null,null,D.c5G,null)
D.bS3=new A.aD(D.aq8,D.aho,null)
D.bYL=new A.W(100,25)
D.c1X=new A.Y(!0,E.cS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c2g=new A.Y(!0,null,null,null,null,null,13,C.b2,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3g=new A.Y(!0,C.di,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3T=new A.Y(!0,C.I,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5F=new A.cb("Eventos",null,C.aU,null,null,null,null,null,null,null)
D.c5H=new A.cb("Atendimento",null,I.oW,null,null,null,C.O,1,null,null)
D.c6_=new A.cb("Monitoramento de Atividades",null,C.aU,null,null,null,null,null,null,null)
D.c6x=new A.cb("Dura\xe7\xe3o",null,C.aU,null,null,null,null,null,null,null)
D.aa_=new B.tb(0,"atendimentoIniciado")
D.aa0=new B.tb(1,"atendimentoCancelado")
D.Ef=new B.tb(2,"atendimentoConcluido")
D.c7i=new B.tb(3,"checkIn")
D.aa1=new B.tb(4,"checkOut")
D.c7j=new B.tb(5,"pausaIniciada")
D.c7k=new B.tb(6,"pausaFinalizada")
D.w2=new B.tb(7,"venda")})()};
(a=>{a["M2pXbqPjdqkqsm1C8mcuSHlLsnU="]=a.current})($__dart_deferred_initializers__);