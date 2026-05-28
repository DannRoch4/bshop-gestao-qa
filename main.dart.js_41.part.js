((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={b8E:function b8E(d){this.a=d},
cXq(d){var x,w,v,u,t,s,r,q,p,o=null,n="audioDuration",m="completionTokens",l="promptTokens",k="totalTokens",j=d.i(0,"transcriptionId")
if(j==null)j=""
x=d.i(0,"transcriptionText")
if(x==null)x=""
w=d.i(0,"s3Key")
if(typeof d.i(0,n)=="number")v=A.bP(d.i(0,n))
else{v=d.i(0,n)
v=v==null?o:J.c1(v)
v=A.lI(v==null?"":v)
if(v==null)v=0}u=d.i(0,"createdAt")
u=A.mV(u==null?"":u)
if(u==null)u=new A.aE(Date.now(),0,!1)
t=d.i(0,"updatedAt")
t=A.mV(t==null?"":t)
if(t==null)t=new A.aE(Date.now(),0,!1)
s=y.j
if(s.b(d.i(0,"prompts"))){s=J.ch(s.a(d.i(0,"prompts")),new B.bQz(),y.J)
s=A.F(s,s.$ti.h("a2.E"))}else s=A.a([],y.A)
if(typeof d.i(0,m)=="number")r=C.i.D(A.bP(d.i(0,m)))
else{r=d.i(0,m)
r=r==null?o:J.c1(r)
r=A.eg(r==null?"":r,o)
if(r==null)r=0}if(typeof d.i(0,l)=="number")q=C.i.D(A.bP(d.i(0,l)))
else{q=d.i(0,l)
q=q==null?o:J.c1(q)
q=A.eg(q==null?"":q,o)
if(q==null)q=0}if(typeof d.i(0,k)=="number")p=C.i.D(A.bP(d.i(0,k)))
else{p=d.i(0,k)
p=p==null?o:J.c1(p)
p=A.eg(p==null?"":p,o)
if(p==null)p=0}return new B.vi(j,x,w,v,u,t,s,r,q,p)},
td:function td(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
vi:function vi(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
bQz:function bQz(){},
bQA:function bQA(){},
b7D:function b7D(d){this.a=d},
b7F:function b7F(d,e){this.a=d
this.b=e},
b7E:function b7E(d,e){this.a=d
this.b=e},
bZP:function bZP(d,e){this.a=d
this.b=e},
cfF(d,e,f,g,h,i){return B.d6M(d,e,f,g,h,i)},
d6M(d,e,f,g,h,i){var x=0,w=A.p(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cfF=A.l(function(j,k){if(j===1){t.push(k)
x=u}for(;;)switch(x){case 0:u=4
p=A.cq(null,g,null,C.dl)
p.a="GET"
x=7
return A.f(d.aaC(i,null,null,null,p,null,y.z),$async$cfF)
case 7:s=k
o=s.a
r=C.mx.gmW().bS(o)
o=b.G
n=o.document.createElement("a")
n.href="data:application/octet-stream;base64,"+A.z(r)
n.target="blank"
n.download=f+"."+e
q=n
o.document.body.appendChild(q)
q.click()
q.remove()
v=f
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$cfF,w)},
cW7(d){var x,w,v=A.a([],y.S)
for(x=new A.cN(d,d.r,d.e,A.r(d).h("cN<1>"));x.C();){w=x.d
d.i(0,w)
d.i(0,w)
v.push(A.z(w)+"="+A.z(d.i(0,w)))}return A.vC(4,C.e.c8(v,"&"),C.aV,!1)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[24],B)
B.b8E.prototype={
VC(d,e,f,g){return this.bnA(d,e,f,g)},
bnA(d,e,f,g){var x=0,w=A.p(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$VC=A.l(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
$.aY()
o=$.d
if(o==null)o=$.d=C.q
r=o.q(null,y.q)
x=7
return A.f(r.tD(),$async$VC)
case 7:q=i
p=A.co(g+"?"+B.cW7(f),0,null).k(0)
o=B.cfF(s.a,".mp3",d,A.A(["Authorization","Bearer "+A.z(q),"Accept","audio/mpeg"],y.N,y.z),e,p)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$VC,w)}}
B.td.prototype={
X(){var x=this
return A.A(["id",x.a,"ia_event_id",x.b,"question",x.c,"answer",x.d,"justification",x.e],y.N,y.z)}}
B.vi.prototype={
X(){var x=this,w=x.e.kr(),v=x.f.kr(),u=x.r,t=A.R(u).h("G<1,ae<c,@>>")
u=A.F(new A.G(u,new B.bQA(),t),t.h("a2.E"))
return A.A(["transcriptionId",x.a,"transcriptionText",x.b,"s3Key",x.c,"audioDuration",x.d,"createdAt",w,"updatedAt",v,"prompts",u,"completionTokens",x.w,"promptTokens",x.x,"totalTokens",x.y],y.N,y.z)}}
B.b7D.prototype={
PI(d){return this.aG5(d)},
aG5(d){var x=0,w=A.p(y.s),v,u=this
var $async$PI=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.b7F(u,d),y.f),$async$PI)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$PI,w)},
VB(d){return this.bnz(d)},
bnz(d){var x=0,w=A.p(y.o),v,u=this
var $async$VB=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.f(u.d2(new B.b7E(u,d),y.T),$async$VB)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$VB,w)}}
B.bZP.prototype={
PH(d){return this.aG6(d)},
aG6(d){var x=0,w=A.p(y.f),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i
var $async$PH=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.cq(A.w(m,l),A.w(m,l),"GET",null)
j=u.a
i=j.ar$
i===$&&A.b()
l=k.ct(i,"/serveria/events/"+d+"/details",null,A.w(m,l))
m=j.ar$.bC$
m===$&&A.b()
o=l.cu(u.aWI(m,u.b))
m=y.f
if(A.br(m)!==C.dq){l=o.r
l===$&&A.b()
l=!(l===C.dl||l===C.dB)}else l=!1
if(l)if(A.br(m)===C.df)o.r=C.cU
else o.r=C.d8
t=o
x=3
return A.f(j.co(t,y.P),$async$PH)
case 3:s=f
r=A.aP()
try{m=s.a
m.toString
r.b=B.cXq(m)}catch(h){q=A.a6(h)
p=A.aq(h)
throw h}v=r.ah()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$PH,w)},
aWI(d,e){var x,w=C.n.bB(e)
if(w.length===0)return d
x=A.co(e,0,null)
if(x.gm4())return x.k(0)
return A.co(d,0,null).ko(x).k(0)}}
var z=a.updateTypes(["td(@)","ae<c,@>(td)","Q<vi>()"])
B.bQz.prototype={
$1(d){var x=d.i(0,"id"),w=d.i(0,"ia_event_id"),v=d.i(0,"question"),u=d.i(0,"answer"),t=d.i(0,"justification")
return new B.td(x,w,v,u,t==null?"":t)},
$S:z+0}
B.bQA.prototype={
$1(d){return d.X()},
$S:z+1}
B.b7F.prototype={
$0(){return this.a.a.PH(this.b)},
$S:z+2}
B.b7E.prototype={
$0(){var x,w=this.b,v=w.a.X(),u=A.cjf(null)
$.aY()
x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,y.I).ar$
x===$&&A.b()
x=x.bC$
x===$&&A.b()
return new B.b8E(u).VC(w.b,w.c,v,x+"/serveria/download")},
$S:1450};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.b8E,B.td,B.vi,B.bZP])
x(A.hn,[B.bQz,B.bQA])
w(B.b7D,A.oN)
x(A.ie,[B.b7F,B.b7E])})()
var y=(function rtii(){var x=A.a1
return{q:x("BY"),I:x("qc"),s:x("ca<az,vi>"),o:x("ca<az,c?>"),S:x("x<c>"),A:x("x<td>"),j:x("B<@>"),P:x("ae<c,@>"),N:x("c"),f:x("vi"),J:x("td"),z:x("@"),T:x("c?")}})()};
(a=>{a["NxIzIcUR7tKNJFViWQU2qLFJN+k="]=a.current})($__dart_deferred_initializers__);