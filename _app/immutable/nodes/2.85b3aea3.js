import{s as ie,n as O,f as Q}from"../chunks/scheduler.63274e7e.js";import{S as se,i as re,g as p,m as j,s as I,e as Y,h as _,j as x,n as U,f as c,c as S,a as w,x as g,y as me,o as ue,z as F,k as A,A as ge,B as M,l as T,d as K,t as X,H as ce,C as he,r as fe,u as de,v as pe,w as _e}from"../chunks/index.9c8d8737.js";function $(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function le(o,e,a){const t=o.slice();return t[3]=e[a],t}function ae(o){let e,a=$(o[0]),t=[];for(let l=0;l<a.length;l+=1)t[l]=oe(le(o,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Y()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=Y()},m(l,n){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,n);w(l,e,n)},p(l,n){if(n&1){a=$(l[0]);let i;for(i=0;i<a.length;i+=1){const b=le(l,a,i);t[i]?t[i].p(b,n):(t[i]=oe(b),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}},d(l){l&&c(e),F(t,l)}}}function oe(o){let e,a,t;return{c(){e=p("img"),this.h()},l(l){e=_(l,"IMG",{src:!0,alt:!0}),this.h()},h(){Q(e.src,a=o[3].src)||A(e,"src",a),A(e,"alt",t=o[3].alt)},m(l,n){w(l,e,n)},p(l,n){n&1&&!Q(e.src,a=l[3].src)&&A(e,"src",a),n&1&&t!==(t=l[3].alt)&&A(e,"alt",t)},d(l){l&&c(e)}}}function be(o){let e,a=o[1]?"Show:":"Hide:",t,l,n,i,b,h=o[1]&&ae(o);return{c(){e=p("button"),t=j(a),l=I(),h&&h.c(),n=Y()},l(u){e=_(u,"BUTTON",{});var v=x(e);t=U(v,a),v.forEach(c),l=S(u),h&&h.l(u),n=Y()},m(u,v){w(u,e,v),g(e,t),w(u,l,v),h&&h.m(u,v),w(u,n,v),i||(b=me(e,"click",o[2]),i=!0)},p(u,[v]){v&2&&a!==(a=u[1]?"Show:":"Hide:")&&ue(t,a),u[1]?h?h.p(u,v):(h=ae(u),h.c(),h.m(n.parentNode,n)):h&&(h.d(1),h=null)},i:O,o:O,d(u){u&&(c(e),c(l),c(n)),h&&h.d(u),i=!1,b()}}}function ve(o,e,a){let{images:t}=e,l=!1;const n=()=>{a(1,l=!l)};return o.$$set=i=>{"images"in i&&a(0,t=i.images)},[t,l,n]}class ye extends se{constructor(e){super(),re(this,e,ve,be,ie,{images:0})}}let ne=[{name:"Education",id:"education",items:[{icon_image:{src:"icons/other/SETU.png",alt:"SETU Logo"},name:"South East Technological University (IT Carlow)",link:{name:"Bachelor of Software Development (Honours)",href:"https://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm"},small_text:"November 2020- November 2024",content:`
                I am currently studying at SETU Carlow Campus (Institute Of Technology Carlow).
                <br>
                <br>
                <ul>
                    <li>
                        GPA of 1.1 (83.16%) in the 1st year
                    </li>
                    <li>
                        GPA of 1.1 (78.33%) in the 2nd year
                    </li>
                    <li>
                        GPA of 1.1 (82.4%) in the 3rd year
                    </li>
                <ul>
                `}]},{name:"Work Experience",id:"work",items:[{icon_image:{src:"icons/other/Workday.png",alt:"Workday Logo"},name:"Workday Internship",small_text:"April 2023- August 2023",content:`
                I have worked alongside other software engineers to work on the Toggle Automation project where
                <br>
                I had to use various technologies to develop the Toggle Automation project.
                `}]},{name:"Technologies",id:"technologies",items:[{icon_image:{src:"icons/other/Ultraytics.png",alt:"Ultraytics Logo"},name:"YoloV8",link:{name:"YoloV8 Github Page",href:"https://github.com/ultralytics/ultralytics"},content:`
                Vision AI used to recognise objects in an image.
                <br>
                I have used this for my Clash Royale Image Recognition project.
                `},{icon_image:{src:"icons/other/OpenRewrite.png",alt:"OpenRewrite Logo"},name:"OpenRewrite",link:{name:"OpenRewrite Website",href:"https://docs.openrewrite.org/"},content:`
                Tool used to refactor source code.
                <br>
                I have used OpenRewrite for the Toggle Automation project to handle toggle code.
                `},{icon_image:{src:"icons/other/RobloxStudio.png",alt:"Roblox Studio Logo"},name:"Roblox-Neural-Network-Library",link:{name:"Roblox-Neural-Network-Library Github Page",href:"https://github.com/Kironte/Roblox-Neural-Network-Library"},content:`
                Roblox Neural Network Library built in Lua.
                <br>
                I have used the library to develop a simulation with rock, paper, and scissors entities to view its behaviour when changing its destroy scores.
                `},{icon_image:{src:"icons/other/Xmake.png",alt:"Xmake Logo"},name:"XMake",link:{name:"XMake Github Page",href:"https://xmake.io"},content:`
                C++ Build System with a Package Manager.
                <br>
                A build system I'm currently using for all my C++ projects.
                `},{icon_image:{src:"icons/other/Svelte.png",alt:"Svelte Logo"},name:"Svelte",link:{name:"Svelte Website",href:"https://svelte.dev"},content:`
                A web framework I'm currently using to develop this website.
                `}]},{name:"Projects",id:"projects",items:[{name:"Toggle Automation",content:`
                For my internship at Workday, I worked alongside other software engineers to develop a tool which can automatically handle toggles. 
                <br>
                The project uses OpenRewrite, Jenkins, and Gradle to allow other software engineers to easily access the tool. 
                <br>
                It was built using Java and Groovy as it's primary programming language.
                `},{icon_image:{src:"icons/other/ClashRoyale.png",alt:"Clash Royale Logo"},name:'<span id="cr">Clash Royale Image Dataset Generator</span>',content:`
                I have made a C++ program which can generate a large image dataset of clash royale battles containing entities.
                <br>
                The dataset is used to train a YoloV8 model to recognise the entities on the screen.
                <br>
                The program uses multithreading to speed up the creation of images.
                `},{icon_image:{src:"icons/other/RandomCard.png",alt:"Random Deck Icon"},name:"Clash Royale Deck Suggester",content:`
				Github Link: <a href='https://github.com/Chi-EEE/Data_Science-Project'>Clash Royale Deck Suggester</a>
				Dataset Link: <a href='https://www.kaggle.com/datasets/bwandowando/clash-royale-season-18-dec-0320-dataset/'>Clash Royale Season 18 Battles</a>
				<br>
				For this project, I am going to use the Season 18 Clash Royale Battle Dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				<br>
				<h5>Preprocessing</h5>
				<p>
					Before using the dataset, I would have to preprocess the data to make it easier for the model to train on.
					<br>
					I removed the columns that I didn't need: Player tag, their ranking and the date of the battle.
					<br>
					And there is a column called 'gameMode.id' which I would have to use to filter the rows so that the battles which remain are ranked battles.
				</p>
				<h5>Tools And Technologies</h5>
				<ul>
					<li>Python</li>
					<li>Pandas</li>
				</ul>
				`}]},{name:"Datasets working / worked on",id:"dataset",items:[{name:"100,000 Clash Royale Battle Images",content:`
                Using the <a href='#cr'>Clash Royale Image Dataset Generator</a>, I have generated 100,000 images of Clash Royale battles containing entities.
                <br>
                These images are used to train a YoloV8 model to recognise the entities on the screen.
                `},{name:"Season 18 Clash Royale Battle Dataset",content:`
				I am going to use the Season 18 Clash Royale Battle Dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				`}]},{name:"Languages",id:"languages",items:[{icon_image:{src:"icons/lang/CPP.png",alt:"C Plus Plus Logo"},name:"C++"},{icon_image:{src:"icons/lang/Python.png",alt:"Python Logo"},name:"Python"},{icon_image:{src:"icons/lang/Java.png",alt:"Java Logo"},name:"Java"},{icon_image:{src:"icons/lang/Typescript.png",alt:"Typescript Logo"},name:"Typescript"},{icon_image:{src:"icons/lang/Rust.png",alt:"Rust Logo"},name:"Rust"},{icon_image:{src:"icons/lang/Lua.png",alt:"Lua Logo"},name:"Lua"}]},{name:"Achievements",id:"achievements",items:[{name:"Google's STEP Internship",content:`
                Interviewed for Google's STEP internship where I did two difficult algorithm problems
                `},{name:"Google Algorithm Workshop",content:`
                Attended an algorithm workshop by Google where we practiced algorithm problems
                `},{name:"Google Summer Insights 2022",content:`
                Invited to attend in Google Summer Insights 2022 where I learned about Google's culture and career opportunities
                `}]}];function we(o,e,a){const t=o.slice();return t[0]=e[a],t}function ke(o,e,a){const t=o.slice();return t[3]=e[a],t}function Ce(o,e,a){const t=o.slice();return t[0]=e[a],t}function Ie(o){let e,a,t=o[0].name+"",l,n;return{c(){e=p("li"),a=p("a"),l=j(t),n=I(),this.h()},l(i){e=_(i,"LI",{style:!0});var b=x(e);a=_(b,"A",{href:!0});var h=x(a);l=U(h,t),h.forEach(c),n=S(b),b.forEach(c),this.h()},h(){A(a,"href","#"+o[0].id),T(e,"margin-top","5px"),T(e,"margin-bottom","5px")},m(i,b){w(i,e,b),g(e,a),g(a,l),g(e,n)},p:O,d(i){i&&c(e)}}}function Se(o){let e,a;return{c(){e=p("img"),this.h()},l(t){e=_(t,"IMG",{style:!0,src:!0,alt:!0}),this.h()},h(){T(e,"width","50px"),T(e,"margin-right","10px"),Q(e.src,a=o[3].icon_image.src)||A(e,"src",a),A(e,"alt",o[3].icon_image.alt)},m(t,l){w(t,e,l)},d(t){t&&c(e)}}}function Ee(o){let e,a=o[3].link.name+"",t;return{c(){e=p("a"),t=j(a),this.h()},l(l){e=_(l,"A",{href:!0});var n=x(e);t=U(n,a),n.forEach(c),this.h()},h(){A(e,"href",o[3].link.href)},m(l,n){w(l,e,n),g(e,t)},d(l){l&&c(e)}}}function Te(o){let e,a=o[3].small_text+"",t;return{c(){e=p("small"),t=j(a)},l(l){e=_(l,"SMALL",{});var n=x(e);t=U(n,a),n.forEach(c)},m(l,n){w(l,e,n),g(e,t)},d(l){l&&c(e)}}}function Le(o){let e,a,t=o[3].content+"";return{c(){e=p("p"),a=new ce(!1),this.h()},l(l){e=_(l,"P",{});var n=x(e);a=he(n,!1),n.forEach(c),this.h()},h(){a.a=null},m(l,n){w(l,e,n),a.m(t,e)},d(l){l&&c(e)}}}function Re(o){let e,a;return e=new ye({props:{images:o[3].preview_images}}),{c(){fe(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){pe(e,t,l),a=!0},i(t){a||(K(e.$$.fragment,t),a=!0)},o(t){X(e.$$.fragment,t),a=!1},d(t){_e(e,t)}}}function xe(o){let e,a,t,l,n=o[3].name+"",i,b,h,u,v,C=o[3].icon_image&&Se(o),y=o[3].link&&Ee(o),E=o[3].small_text&&Te(o),d=o[3].content&&Le(o),r=o[3].preview_images&&Re(o);return{c(){e=p("li"),a=p("h4"),C&&C.c(),t=I(),l=new ce(!1),i=I(),y&&y.c(),b=I(),E&&E.c(),h=I(),d&&d.c(),u=I(),r&&r.c(),this.h()},l(f){e=_(f,"LI",{style:!0});var m=x(e);a=_(m,"H4",{style:!0});var P=x(a);C&&C.l(P),t=S(P),l=he(P,!1),P.forEach(c),i=S(m),y&&y.l(m),b=S(m),E&&E.l(m),h=S(m),d&&d.l(m),u=S(m),r&&r.l(m),m.forEach(c),this.h()},h(){l.a=null,T(a,"margin","auto"),T(a,"display","flex"),T(a,"align-items","center"),T(e,"margin-top","5px"),T(e,"margin-bottom","5px")},m(f,m){w(f,e,m),g(e,a),C&&C.m(a,null),g(a,t),l.m(n,a),g(e,i),y&&y.m(e,null),g(e,b),E&&E.m(e,null),g(e,h),d&&d.m(e,null),g(e,u),r&&r.m(e,null),v=!0},p:O,i(f){v||(K(r),v=!0)},o(f){X(r),v=!1},d(f){f&&c(e),C&&C.d(),y&&y.d(),E&&E.d(),d&&d.d(),r&&r.d()}}}function Ae(o){let e,a,t,l,n=o[0].name+"",i,b,h,u="[back to table of contents]",v,C,y,E=$(o[0].items),d=[];for(let r=0;r<E.length;r+=1)d[r]=xe(ke(o,E,r));return{c(){e=p("hr"),a=I(),t=p("section"),l=p("h3"),i=j(n),b=j(": "),h=p("a"),h.textContent=u,v=I(),C=p("ul");for(let r=0;r<d.length;r+=1)d[r].c();this.h()},l(r){e=_(r,"HR",{}),a=S(r),t=_(r,"SECTION",{id:!0});var f=x(t);l=_(f,"H3",{});var m=x(l);i=U(m,n),b=U(m,": "),h=_(m,"A",{href:!0,"data-svelte-h":!0}),M(h)!=="svelte-1iyqeyr"&&(h.textContent=u),m.forEach(c),v=S(f),C=_(f,"UL",{});var P=x(C);for(let H=0;H<d.length;H+=1)d[H].l(P);P.forEach(c),f.forEach(c),this.h()},h(){A(h,"href","#table_of_contents"),A(t,"id",o[0].id)},m(r,f){w(r,e,f),w(r,a,f),w(r,t,f),g(t,l),g(l,i),g(l,b),g(l,h),g(t,v),g(t,C);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(C,null);y=!0},p:O,i(r){if(!y){for(let f=0;f<E.length;f+=1)K(d[f]);y=!0}},o(r){d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)X(d[f]);y=!1},d(r){r&&(c(e),c(a),c(t)),F(d,r)}}}function Pe(o){let e,a=`body {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		}
		h3 a {
			font-size: 0.5em;
			text-align: center;
		}`,t,l,n,i,b="Chi Huu Huynh",h,u,v="Software Developer",C,y,E="Table of Contents:",d,r,f,m,P='<h2>Contact</h2> <ul style="text-align: right; list-style-position: inside;"><li style="margin-top: 5px;">Email: <a href="mailto:chi.h.linkedin@gmail.com">chi.h.linkedin@gmail.com</a></li> <li style="margin-top: 5px;">LinkedIn: <a href="https://www.linkedin.com/in/chi-huu-huynh-a5b315206/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BS4r6%2BEmtQKyoMSJF%2BryGhg%3D%3D">chi-huu-huynh</a></li> <li style="margin-top: 5px;">Github: <a href="https://github.com/Chi-EEE">Chi-EEE</a></li></ul>',H,W,J,V,N,Z='This website was made using <a href="https://svelte.dev/">Svelte</a>',q,ee=$(ne),G=[];for(let s=0;s<ee.length;s+=1)G[s]=Ie(Ce(o,ee,s));let z=$(ne),L=[];for(let s=0;s<z.length;s+=1)L[s]=Ae(we(o,z,s));return{c(){e=p("style"),e.textContent=a,t=I(),l=p("div"),n=p("section"),i=p("h1"),i.textContent=b,h=I(),u=p("h2"),u.textContent=v,C=I(),y=p("h3"),y.textContent=E,d=I(),r=p("ul");for(let s=0;s<G.length;s+=1)G[s].c();f=I(),m=p("section"),m.innerHTML=P,H=I();for(let s=0;s<L.length;s+=1)L[s].c();W=I(),J=p("hr"),V=I(),N=p("footer"),N.innerHTML=Z,this.h()},l(s){const k=ge("svelte-n99ecd",document.head);e=_(k,"STYLE",{"data-svelte-h":!0}),M(e)!=="svelte-1pr0d57"&&(e.textContent=a),k.forEach(c),t=S(s),l=_(s,"DIV",{style:!0});var R=x(l);n=_(R,"SECTION",{style:!0,id:!0});var D=x(n);i=_(D,"H1",{"data-svelte-h":!0}),M(i)!=="svelte-oi50rq"&&(i.textContent=b),h=S(D),u=_(D,"H2",{"data-svelte-h":!0}),M(u)!=="svelte-z7mdgt"&&(u.textContent=v),C=S(D),y=_(D,"H3",{id:!0,"data-svelte-h":!0}),M(y)!=="svelte-12gil9s"&&(y.textContent=E),d=S(D),r=_(D,"UL",{});var te=x(r);for(let B=0;B<G.length;B+=1)G[B].l(te);te.forEach(c),D.forEach(c),f=S(R),m=_(R,"SECTION",{style:!0,id:!0,"data-svelte-h":!0}),M(m)!=="svelte-1bqxvur"&&(m.innerHTML=P),R.forEach(c),H=S(s);for(let B=0;B<L.length;B+=1)L[B].l(s);W=S(s),J=_(s,"HR",{}),V=S(s),N=_(s,"FOOTER",{"data-svelte-h":!0}),M(N)!=="svelte-1yhg36h"&&(N.innerHTML=Z),this.h()},h(){A(y,"id","table_of_contents"),T(n,"width","50%"),A(n,"id","main"),T(m,"width","50%"),T(m,"text-align","right"),T(m,"align-items","right"),A(m,"id","contact"),T(l,"display","flex"),T(l,"flex-direction","row")},m(s,k){g(document.head,e),w(s,t,k),w(s,l,k),g(l,n),g(n,i),g(n,h),g(n,u),g(n,C),g(n,y),g(n,d),g(n,r);for(let R=0;R<G.length;R+=1)G[R]&&G[R].m(r,null);g(l,f),g(l,m),w(s,H,k);for(let R=0;R<L.length;R+=1)L[R]&&L[R].m(s,k);w(s,W,k),w(s,J,k),w(s,V,k),w(s,N,k),q=!0},p:O,i(s){if(!q){for(let k=0;k<z.length;k+=1)K(L[k]);q=!0}},o(s){L=L.filter(Boolean);for(let k=0;k<L.length;k+=1)X(L[k]);q=!1},d(s){s&&(c(t),c(l),c(H),c(W),c(J),c(V),c(N)),c(e),F(G,s),F(L,s)}}}class De extends se{constructor(e){super(),re(this,e,null,Pe,ie,{})}}export{De as component};
