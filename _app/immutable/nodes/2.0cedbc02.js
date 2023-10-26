import{s as ie,n as O,f as Q}from"../chunks/scheduler.63274e7e.js";import{S as re,i as se,g as p,m as j,s as I,e as F,h as _,j as R,n as U,f as c,c as S,a as w,x as g,y as me,o as ue,z as Y,k as A,A as ge,B as M,l as T,d as K,t as X,H as ce,C as he,r as fe,u as de,v as pe,w as _e}from"../chunks/index.9c8d8737.js";function $(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ae(n,e,l){const t=n.slice();return t[3]=e[l],t}function le(n){let e,l=$(n[0]),t=[];for(let a=0;a<l.length;a+=1)t[a]=ne(ae(n,l,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=F()},l(a){for(let o=0;o<t.length;o+=1)t[o].l(a);e=F()},m(a,o){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(a,o);w(a,e,o)},p(a,o){if(o&1){l=$(a[0]);let i;for(i=0;i<l.length;i+=1){const b=ae(a,l,i);t[i]?t[i].p(b,o):(t[i]=ne(b),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},d(a){a&&c(e),Y(t,a)}}}function ne(n){let e,l,t;return{c(){e=p("img"),this.h()},l(a){e=_(a,"IMG",{src:!0,alt:!0}),this.h()},h(){Q(e.src,l=n[3].src)||A(e,"src",l),A(e,"alt",t=n[3].alt)},m(a,o){w(a,e,o)},p(a,o){o&1&&!Q(e.src,l=a[3].src)&&A(e,"src",l),o&1&&t!==(t=a[3].alt)&&A(e,"alt",t)},d(a){a&&c(e)}}}function be(n){let e,l=n[1]?"Show:":"Hide:",t,a,o,i,b,h=n[1]&&le(n);return{c(){e=p("button"),t=j(l),a=I(),h&&h.c(),o=F()},l(u){e=_(u,"BUTTON",{});var v=R(e);t=U(v,l),v.forEach(c),a=S(u),h&&h.l(u),o=F()},m(u,v){w(u,e,v),g(e,t),w(u,a,v),h&&h.m(u,v),w(u,o,v),i||(b=me(e,"click",n[2]),i=!0)},p(u,[v]){v&2&&l!==(l=u[1]?"Show:":"Hide:")&&ue(t,l),u[1]?h?h.p(u,v):(h=le(u),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i:O,o:O,d(u){u&&(c(e),c(a),c(o)),h&&h.d(u),i=!1,b()}}}function ve(n,e,l){let{images:t}=e,a=!1;const o=()=>{l(1,a=!a)};return n.$$set=i=>{"images"in i&&l(0,t=i.images)},[t,a,o]}class ye extends re{constructor(e){super(),se(this,e,ve,be,ie,{images:0})}}let oe=[{name:"Education",id:"education",items:[{icon_image:{src:"icons/other/SETU.png",alt:"SETU Logo"},name:"South East Technological University (IT Carlow)",link:{name:"Bachelor of Software Development (Honours)",href:"https://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm"},small_text:"November 2020- November 2024",content:`
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
				<br>
				Dataset Link: <a href='https://www.kaggle.com/datasets/bwandowando/clash-royale-season-18-dec-0320-dataset/'>Clash Royale Season 18 Battles</a>
				<br>
				For this project, I am going to use the Season 18 Clash Royale battle dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				<br>
				<h5>Preprocessing</h5>
				<p>
					Before using the dataset, I would have to preprocess the data to make it easier for the model to train on.
					<br>
					I removed the columns that I didn't need: Player tag, their ranking and the date of the battle.
					<br>
					After the first step of preprocessing, I reduced the headings from 75 to 36 headings. Here is a bar chart showing the number of cards used in the dataset:
					<img
						style="border: 2px solid black;"
						src="graphs/bar_chart_1.png"
						alt="First Bar Chart with unfiltered data"
					/>
					<br>
					Since these are ladder matches, I removed the rows with cards that are under level 13 since that is not the max level and will introduce bias since some cards are alot weaker when underleveled.
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
                `}]}];function we(n,e,l){const t=n.slice();return t[0]=e[l],t}function ke(n,e,l){const t=n.slice();return t[3]=e[l],t}function Ce(n,e,l){const t=n.slice();return t[0]=e[l],t}function Ie(n){let e,l,t=n[0].name+"",a,o;return{c(){e=p("li"),l=p("a"),a=j(t),o=I(),this.h()},l(i){e=_(i,"LI",{style:!0});var b=R(e);l=_(b,"A",{href:!0});var h=R(l);a=U(h,t),h.forEach(c),o=S(b),b.forEach(c),this.h()},h(){A(l,"href","#"+n[0].id),T(e,"margin-top","5px"),T(e,"margin-bottom","5px")},m(i,b){w(i,e,b),g(e,l),g(l,a),g(e,o)},p:O,d(i){i&&c(e)}}}function Se(n){let e,l;return{c(){e=p("img"),this.h()},l(t){e=_(t,"IMG",{style:!0,src:!0,alt:!0}),this.h()},h(){T(e,"width","50px"),T(e,"margin-right","10px"),Q(e.src,l=n[3].icon_image.src)||A(e,"src",l),A(e,"alt",n[3].icon_image.alt)},m(t,a){w(t,e,a)},d(t){t&&c(e)}}}function Ee(n){let e,l=n[3].link.name+"",t;return{c(){e=p("a"),t=j(l),this.h()},l(a){e=_(a,"A",{href:!0});var o=R(e);t=U(o,l),o.forEach(c),this.h()},h(){A(e,"href",n[3].link.href)},m(a,o){w(a,e,o),g(e,t)},d(a){a&&c(e)}}}function Te(n){let e,l=n[3].small_text+"",t;return{c(){e=p("small"),t=j(l)},l(a){e=_(a,"SMALL",{});var o=R(e);t=U(o,l),o.forEach(c)},m(a,o){w(a,e,o),g(e,t)},d(a){a&&c(e)}}}function Le(n){let e,l,t=n[3].content+"";return{c(){e=p("p"),l=new ce(!1),this.h()},l(a){e=_(a,"P",{});var o=R(e);l=he(o,!1),o.forEach(c),this.h()},h(){l.a=null},m(a,o){w(a,e,o),l.m(t,e)},d(a){a&&c(e)}}}function xe(n){let e,l;return e=new ye({props:{images:n[3].preview_images}}),{c(){fe(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,a){pe(e,t,a),l=!0},i(t){l||(K(e.$$.fragment,t),l=!0)},o(t){X(e.$$.fragment,t),l=!1},d(t){_e(e,t)}}}function Re(n){let e,l,t,a,o=n[3].name+"",i,b,h,u,v,C=n[3].icon_image&&Se(n),y=n[3].link&&Ee(n),E=n[3].small_text&&Te(n),d=n[3].content&&Le(n),s=n[3].preview_images&&xe(n);return{c(){e=p("li"),l=p("h4"),C&&C.c(),t=I(),a=new ce(!1),i=I(),y&&y.c(),b=I(),E&&E.c(),h=I(),d&&d.c(),u=I(),s&&s.c(),this.h()},l(f){e=_(f,"LI",{style:!0});var m=R(e);l=_(m,"H4",{style:!0});var P=R(l);C&&C.l(P),t=S(P),a=he(P,!1),P.forEach(c),i=S(m),y&&y.l(m),b=S(m),E&&E.l(m),h=S(m),d&&d.l(m),u=S(m),s&&s.l(m),m.forEach(c),this.h()},h(){a.a=null,T(l,"margin","auto"),T(l,"display","flex"),T(l,"align-items","center"),T(e,"margin-top","5px"),T(e,"margin-bottom","5px")},m(f,m){w(f,e,m),g(e,l),C&&C.m(l,null),g(l,t),a.m(o,l),g(e,i),y&&y.m(e,null),g(e,b),E&&E.m(e,null),g(e,h),d&&d.m(e,null),g(e,u),s&&s.m(e,null),v=!0},p:O,i(f){v||(K(s),v=!0)},o(f){X(s),v=!1},d(f){f&&c(e),C&&C.d(),y&&y.d(),E&&E.d(),d&&d.d(),s&&s.d()}}}function Ae(n){let e,l,t,a,o=n[0].name+"",i,b,h,u="[back to table of contents]",v,C,y,E=$(n[0].items),d=[];for(let s=0;s<E.length;s+=1)d[s]=Re(ke(n,E,s));return{c(){e=p("hr"),l=I(),t=p("section"),a=p("h3"),i=j(o),b=j(": "),h=p("a"),h.textContent=u,v=I(),C=p("ul");for(let s=0;s<d.length;s+=1)d[s].c();this.h()},l(s){e=_(s,"HR",{}),l=S(s),t=_(s,"SECTION",{id:!0});var f=R(t);a=_(f,"H3",{});var m=R(a);i=U(m,o),b=U(m,": "),h=_(m,"A",{href:!0,"data-svelte-h":!0}),M(h)!=="svelte-1iyqeyr"&&(h.textContent=u),m.forEach(c),v=S(f),C=_(f,"UL",{});var P=R(C);for(let H=0;H<d.length;H+=1)d[H].l(P);P.forEach(c),f.forEach(c),this.h()},h(){A(h,"href","#table_of_contents"),A(t,"id",n[0].id)},m(s,f){w(s,e,f),w(s,l,f),w(s,t,f),g(t,a),g(a,i),g(a,b),g(a,h),g(t,v),g(t,C);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(C,null);y=!0},p:O,i(s){if(!y){for(let f=0;f<E.length;f+=1)K(d[f]);y=!0}},o(s){d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)X(d[f]);y=!1},d(s){s&&(c(e),c(l),c(t)),Y(d,s)}}}function Pe(n){let e,l=`body {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		}
		h3 a {
			font-size: 0.5em;
			text-align: center;
		}`,t,a,o,i,b="Chi Huu Huynh",h,u,v="Software Developer",C,y,E="Table of Contents:",d,s,f,m,P='<h2>Contact</h2> <ul style="text-align: right; list-style-position: inside;"><li style="margin-top: 5px;">Email: <a href="mailto:chi.h.linkedin@gmail.com">chi.h.linkedin@gmail.com</a></li> <li style="margin-top: 5px;">LinkedIn: <a href="https://www.linkedin.com/in/chi-huu-huynh-a5b315206/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BS4r6%2BEmtQKyoMSJF%2BryGhg%3D%3D">chi-huu-huynh</a></li> <li style="margin-top: 5px;">Github: <a href="https://github.com/Chi-EEE">Chi-EEE</a></li></ul>',H,W,J,V,B,Z='This website was made using <a href="https://svelte.dev/">Svelte</a>',q,ee=$(oe),G=[];for(let r=0;r<ee.length;r+=1)G[r]=Ie(Ce(n,ee,r));let z=$(oe),L=[];for(let r=0;r<z.length;r+=1)L[r]=Ae(we(n,z,r));return{c(){e=p("style"),e.textContent=l,t=I(),a=p("div"),o=p("section"),i=p("h1"),i.textContent=b,h=I(),u=p("h2"),u.textContent=v,C=I(),y=p("h3"),y.textContent=E,d=I(),s=p("ul");for(let r=0;r<G.length;r+=1)G[r].c();f=I(),m=p("section"),m.innerHTML=P,H=I();for(let r=0;r<L.length;r+=1)L[r].c();W=I(),J=p("hr"),V=I(),B=p("footer"),B.innerHTML=Z,this.h()},l(r){const k=ge("svelte-n99ecd",document.head);e=_(k,"STYLE",{"data-svelte-h":!0}),M(e)!=="svelte-1pr0d57"&&(e.textContent=l),k.forEach(c),t=S(r),a=_(r,"DIV",{style:!0});var x=R(a);o=_(x,"SECTION",{style:!0,id:!0});var N=R(o);i=_(N,"H1",{"data-svelte-h":!0}),M(i)!=="svelte-oi50rq"&&(i.textContent=b),h=S(N),u=_(N,"H2",{"data-svelte-h":!0}),M(u)!=="svelte-z7mdgt"&&(u.textContent=v),C=S(N),y=_(N,"H3",{id:!0,"data-svelte-h":!0}),M(y)!=="svelte-12gil9s"&&(y.textContent=E),d=S(N),s=_(N,"UL",{});var te=R(s);for(let D=0;D<G.length;D+=1)G[D].l(te);te.forEach(c),N.forEach(c),f=S(x),m=_(x,"SECTION",{style:!0,id:!0,"data-svelte-h":!0}),M(m)!=="svelte-1bqxvur"&&(m.innerHTML=P),x.forEach(c),H=S(r);for(let D=0;D<L.length;D+=1)L[D].l(r);W=S(r),J=_(r,"HR",{}),V=S(r),B=_(r,"FOOTER",{"data-svelte-h":!0}),M(B)!=="svelte-1yhg36h"&&(B.innerHTML=Z),this.h()},h(){A(y,"id","table_of_contents"),T(o,"width","50%"),A(o,"id","main"),T(m,"width","50%"),T(m,"text-align","right"),T(m,"align-items","right"),A(m,"id","contact"),T(a,"display","flex"),T(a,"flex-direction","row")},m(r,k){g(document.head,e),w(r,t,k),w(r,a,k),g(a,o),g(o,i),g(o,h),g(o,u),g(o,C),g(o,y),g(o,d),g(o,s);for(let x=0;x<G.length;x+=1)G[x]&&G[x].m(s,null);g(a,f),g(a,m),w(r,H,k);for(let x=0;x<L.length;x+=1)L[x]&&L[x].m(r,k);w(r,W,k),w(r,J,k),w(r,V,k),w(r,B,k),q=!0},p:O,i(r){if(!q){for(let k=0;k<z.length;k+=1)K(L[k]);q=!0}},o(r){L=L.filter(Boolean);for(let k=0;k<L.length;k+=1)X(L[k]);q=!1},d(r){r&&(c(t),c(a),c(H),c(W),c(J),c(V),c(B)),c(e),Y(G,r),Y(L,r)}}}class Ne extends re{constructor(e){super(),se(this,e,null,Pe,ie,{})}}export{Ne as component};
