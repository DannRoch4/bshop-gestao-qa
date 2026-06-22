((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={b8L:function b8L(d){this.a=d},
cY2(d){var x,w,v,u,t,s,r,q,p,o=null,n="audioDuration",m="completionTokens",l="promptTokens",k="totalTokens",j=d.i(0,"transcriptionId")
if(j==null)j=""
x=d.i(0,"transcriptionText")
if(x==null)x=""
w=d.i(0,"s3Key")
if(typeof d.i(0,n)=="number")v=A.bR(d.i(0,n))
else{v=d.i(0,n)
v=v==null?o:J.c0(v)
v=A.lI(v==null?"":v)
if(v==null)v=0}u=d.i(0,"createdAt")
u=A.mW(u==null?"":u)
if(u==null)u=new A.aE(Date.now(),0,!1)
t=d.i(0,"updatedAt")
t=A.mW(t==null?"":t)
if(t==null)t=new A.aE(Date.now(),0,!1)
s=y.j
if(s.b(d.i(0,"prompts"))){s=J.ci(s.a(d.i(0,"prompts")),new B.bQW(),y.J)
s=A.F(s,s.$ti.h("a3.E"))}else s=A.a([],y.A)
if(typeof d.i(0,m)=="number")r=C.i.D(A.bR(d.i(0,m)))
else{r=d.i(0,m)
r=r==null?o:J.c0(r)
r=A.eh(r==null?"":r,o)
if(r==null)r=0}if(typeof d.i(0,l)=="number")q=C.i.D(A.bR(d.i(0,l)))
else{q=d.i(0,l)
q=q==null?o:J.c0(q)
q=A.eh(q==null?"":q,o)
if(q==null)q=0}if(typeof d.i(0,k)=="number")p=C.i.D(A.bR(d.i(0,k)))
else{p=d.i(0,k)
p=p==null?o:J.c0(p)
p=A.eh(p==null?"":p,o)
if(p==null)p=0}return new B.vi(j,x,w,v,u,t,s,r,q,p)},
tf:function tf(d,e,f,g,h){var _=this
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
bQW:function bQW(){},
bQX:function bQX(){},
b7K:function b7K(d){this.a=d},
b7M:function b7M(d,e){this.a=d
this.b=e},
b7L:function b7L(d,e){this.a=d
this.b=e},
c_f:function c_f(d,e){this.a=d
this.b=e},
cgd(d,e,f,g,h,i){return B.d7o(d,e,f,g,h,i)},
d7o(d,e,f,g,h,i){var x=0,w=A.p(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cgd=A.l(function(j,k){if(j===1){t.push(k)
x=u}for(;;)switch(x){case 0:u=4
p=A.cq(null,g,null,C.dn)
p.a="GET"
x=7
return A.e(d.aaO(i,null,null,null,p,null,y.z),$async$cgd)
case 7:s=k
o=s.a
r=C.mC.gmW().bS(o)
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
return A.o($async$cgd,w)},
cWK(d){var x,w,v=A.a([],y.S)
for(x=new A.cN(d,d.r,d.e,A.r(d).h("cN<1>"));x.C();){w=x.d
d.i(0,w)
d.i(0,w)
v.push(A.z(w)+"="+A.z(d.i(0,w)))}return A.vC(4,C.e.c8(v,"&"),C.aV,!1)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[24],B)
B.b8L.prototype={
VI(d,e,f,g){return this.bo2(d,e,f,g)},
bo2(d,e,f,g){var x=0,w=A.p(y.T),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$VI=A.l(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
$.aT()
o=$.d
if(o==null)o=$.d=C.q
r=o.q(null,y.q)
x=7
return A.e(r.tG(),$async$VI)
case 7:q=i
p=A.co(g+"?"+B.cWK(f),0,null).k(0)
o=B.cgd(s.a,".mp3",d,A.A(["Authorization","Bearer "+A.z(q),"Accept","audio/mpeg"],y.N,y.z),e,p)
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
return A.o($async$VI,w)}}
B.tf.prototype={
X(){var x=this
return A.A(["id",x.a,"ia_event_id",x.b,"question",x.c,"answer",x.d,"justification",x.e],y.N,y.z)}}
B.vi.prototype={
X(){var x=this,w=x.e.kq(),v=x.f.kq(),u=x.r,t=A.R(u).h("G<1,ae<c,@>>")
u=A.F(new A.G(u,new B.bQX(),t),t.h("a3.E"))
return A.A(["transcriptionId",x.a,"transcriptionText",x.b,"s3Key",x.c,"audioDuration",x.d,"createdAt",w,"updatedAt",v,"prompts",u,"completionTokens",x.w,"promptTokens",x.x,"totalTokens",x.y],y.N,y.z)}}
B.b7K.prototype={
PO(d){return this.aGu(d)},
aGu(d){var x=0,w=A.p(y.s),v,u=this
var $async$PO=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.b7M(u,d),y.f),$async$PO)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$PO,w)},
VH(d){return this.bo1(d)},
bo1(d){var x=0,w=A.p(y.o),v,u=this
var $async$VH=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.d2(new B.b7L(u,d),y.T),$async$VH)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$VH,w)}}
B.c_f.prototype={
PN(d){return this.aGv(d)},
aGv(d){var x=0,w=A.p(y.f),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i
var $async$PN=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:m=y.N
l=y.z
k=A.cq(A.w(m,l),A.w(m,l),"GET",null)
j=u.a
i=j.ao$
i===$&&A.b()
l=k.ct(i,"/serveria/events/"+d+"/details",null,A.w(m,l))
m=j.ao$.bB$
m===$&&A.b()
o=l.cu(u.aXa(m,u.b))
m=y.f
if(A.bo(m)!==C.dq){l=o.r
l===$&&A.b()
l=!(l===C.dn||l===C.dB)}else l=!1
if(l)if(A.bo(m)===C.dg)o.r=C.cV
else o.r=C.d9
t=o
x=3
return A.e(j.co(t,y.P),$async$PN)
case 3:s=f
r=A.aR()
try{m=s.a
m.toString
r.b=B.cY2(m)}catch(h){q=A.a6(h)
p=A.aq(h)
throw h}v=r.ai()
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$PN,w)},
aXa(d,e){var x,w=C.m.bC(e)
if(w.length===0)return d
x=A.co(e,0,null)
if(x.gm4())return x.k(0)
return A.co(d,0,null).kn(x).k(0)}}
var z=a.updateTypes(["tf(@)","ae<c,@>(tf)","Q<vi>()"])
B.bQW.prototype={
$1(d){var x=d.i(0,"id"),w=d.i(0,"ia_event_id"),v=d.i(0,"question"),u=d.i(0,"answer"),t=d.i(0,"justification")
return new B.tf(x,w,v,u,t==null?"":t)},
$S:z+0}
B.bQX.prototype={
$1(d){return d.X()},
$S:z+1}
B.b7M.prototype={
$0(){return this.a.a.PN(this.b)},
$S:z+2}
B.b7L.prototype={
$0(){var x,w=this.b,v=w.a.X(),u=A.cjP(null)
$.aT()
x=$.d
if(x==null)x=$.d=C.q
x=x.q(null,y.I).ao$
x===$&&A.b()
x=x.bB$
x===$&&A.b()
return new B.b8L(u).VI(w.b,w.c,v,x+"/serveria/download")},
$S:1453};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.b8L,B.tf,B.vi,B.c_f])
x(A.hq,[B.bQW,B.bQX])
w(B.b7K,A.oN)
x(A.ig,[B.b7M,B.b7L])})()
var y=(function rtii(){var x=A.a1
return{q:x("C_"),I:x("qb"),s:x("cc<aA,vi>"),o:x("cc<aA,c?>"),S:x("x<c>"),A:x("x<tf>"),j:x("B<@>"),P:x("ae<c,@>"),N:x("c"),f:x("vi"),J:x("tf"),z:x("@"),T:x("c?")}})()};
(a=>{a["u4ciyx9GDzF8PzgbV92hDg2WOYs="]=a.current})($__dart_deferred_initializers__);