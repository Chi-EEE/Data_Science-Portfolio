import{s as Z,n as V,f as se}from"../chunks/scheduler.63274e7e.js";import{S as ee,i as te,g as w,m as W,s as E,e as Y,h as y,j as G,n as J,f as u,c as T,a as I,x as d,y as Ce,o as X,H as ie,z as oe,A as M,k as $,d as B,p as _e,b as ve,t as U,B as Q,l as R,r as be,u as we,v as ye,w as ke,C as Ie}from"../chunks/index.9778a81b.js";function K(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function re(n){let e,i;return{c(){e=new ie(!1),i=Y(),this.h()},l(t){e=oe(t,!1),i=Y(),this.h()},h(){e.a=i},m(t,o){e.m(n[0],t,o),I(t,i,o)},p(t,o){o&1&&e.p(t[0])},d(t){t&&(u(i),e.d())}}}function Se(n){let e,i=n[1]?"Hide:":"Show:",t,o,a,c,C,m=n[1]&&re(n);return{c(){e=w("button"),t=W(i),o=E(),m&&m.c(),a=Y()},l(g){e=y(g,"BUTTON",{});var k=G(e);t=J(k,i),k.forEach(u),o=T(g),m&&m.l(g),a=Y()},m(g,k){I(g,e,k),d(e,t),I(g,o,k),m&&m.m(g,k),I(g,a,k),c||(C=Ce(e,"click",n[2]),c=!0)},p(g,[k]){k&2&&i!==(i=g[1]?"Hide:":"Show:")&&X(t,i),g[1]?m?m.p(g,k):(m=re(g),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},i:V,o:V,d(g){g&&(u(e),u(o),u(a)),m&&m.d(g),c=!1,C()}}}function Ee(n,e,i){let{preview_section:t}=e,o=!1;const a=()=>{i(1,o=!o)};return n.$$set=c=>{"preview_section"in c&&i(0,t=c.preview_section)},[t,o,a]}class Te extends ee{constructor(e){super(),te(this,e,Ee,Se,Z,{preview_section:0})}}function he(n,e,i){const t=n.slice();return t[1]=e[i],t}function ce(n){let e,i,t;return{c(){e=w("img"),this.h()},l(o){e=y(o,"IMG",{style:!0,src:!0,alt:!0}),this.h()},h(){R(e,"width","50px"),R(e,"margin-right","10px"),se(e.src,i=n[1].icon_image.src)||$(e,"src",i),$(e,"alt",t=n[1].icon_image.alt)},m(o,a){I(o,e,a)},p(o,a){a&1&&!se(e.src,i=o[1].icon_image.src)&&$(e,"src",i),a&1&&t!==(t=o[1].icon_image.alt)&&$(e,"alt",t)},d(o){o&&u(e)}}}function me(n){let e,i=n[1].link.name+"",t,o;return{c(){e=w("a"),t=W(i),this.h()},l(a){e=y(a,"A",{href:!0});var c=G(e);t=J(c,i),c.forEach(u),this.h()},h(){$(e,"href",o=n[1].link.href)},m(a,c){I(a,e,c),d(e,t)},p(a,c){c&1&&i!==(i=a[1].link.name+"")&&X(t,i),c&1&&o!==(o=a[1].link.href)&&$(e,"href",o)},d(a){a&&u(e)}}}function ue(n){let e,i=n[1].small_text+"",t;return{c(){e=w("small"),t=W(i)},l(o){e=y(o,"SMALL",{});var a=G(e);t=J(a,i),a.forEach(u)},m(o,a){I(o,e,a),d(e,t)},p(o,a){a&1&&i!==(i=o[1].small_text+"")&&X(t,i)},d(o){o&&u(e)}}}function fe(n){let e,i,t=n[1].short_description+"";return{c(){e=w("p"),i=new ie(!1),this.h()},l(o){e=y(o,"P",{});var a=G(e);i=oe(a,!1),a.forEach(u),this.h()},h(){i.a=null},m(o,a){I(o,e,a),i.m(t,e)},p(o,a){a&1&&t!==(t=o[1].short_description+"")&&i.p(t)},d(o){o&&u(e)}}}function ge(n){let e,i;return e=new Te({props:{preview_section:n[1].preview_section}}),{c(){be(e.$$.fragment)},l(t){we(e.$$.fragment,t)},m(t,o){ye(e,t,o),i=!0},p(t,o){const a={};o&1&&(a.preview_section=t[1].preview_section),e.$set(a)},i(t){i||(B(e.$$.fragment,t),i=!0)},o(t){U(e.$$.fragment,t),i=!1},d(t){ke(e,t)}}}function de(n){let e,i,t,o,a=n[1].name+"",c,C,m,g,k,L,p=n[1].icon_image&&ce(n),v=n[1].link&&me(n),_=n[1].small_text&&ue(n),s=n[1].short_description&&fe(n),b=n[1].preview_section&&ge(n);return{c(){e=w("li"),i=w("h4"),p&&p.c(),t=E(),o=new ie(!1),c=E(),v&&v.c(),C=E(),_&&_.c(),m=E(),s&&s.c(),g=E(),b&&b.c(),k=E(),this.h()},l(l){e=y(l,"LI",{style:!0});var r=G(e);i=y(r,"H4",{style:!0});var f=G(i);p&&p.l(f),t=T(f),o=oe(f,!1),f.forEach(u),c=T(r),v&&v.l(r),C=T(r),_&&_.l(r),m=T(r),s&&s.l(r),g=T(r),b&&b.l(r),k=T(r),r.forEach(u),this.h()},h(){o.a=null,R(i,"margin","auto"),R(i,"display","flex"),R(i,"align-items","center"),R(e,"margin-top","5px"),R(e,"margin-bottom","5px")},m(l,r){I(l,e,r),d(e,i),p&&p.m(i,null),d(i,t),o.m(a,i),d(e,c),v&&v.m(e,null),d(e,C),_&&_.m(e,null),d(e,m),s&&s.m(e,null),d(e,g),b&&b.m(e,null),d(e,k),L=!0},p(l,r){l[1].icon_image?p?p.p(l,r):(p=ce(l),p.c(),p.m(i,t)):p&&(p.d(1),p=null),(!L||r&1)&&a!==(a=l[1].name+"")&&o.p(a),l[1].link?v?v.p(l,r):(v=me(l),v.c(),v.m(e,C)):v&&(v.d(1),v=null),l[1].small_text?_?_.p(l,r):(_=ue(l),_.c(),_.m(e,m)):_&&(_.d(1),_=null),l[1].short_description?s?s.p(l,r):(s=fe(l),s.c(),s.m(e,g)):s&&(s.d(1),s=null),l[1].preview_section?b?(b.p(l,r),r&1&&B(b,1)):(b=ge(l),b.c(),B(b,1),b.m(e,k)):b&&(_e(),U(b,1,1,()=>{b=null}),ve())},i(l){L||(B(b),L=!0)},o(l){U(b),L=!1},d(l){l&&u(e),p&&p.d(),v&&v.d(),_&&_.d(),s&&s.d(),b&&b.d()}}}function Le(n){let e,i,t,o,a=n[0].name+"",c,C,m,g="[back to table of contents]",k,L,p,v,_=K(n[0].items),s=[];for(let l=0;l<_.length;l+=1)s[l]=de(he(n,_,l));const b=l=>U(s[l],1,1,()=>{s[l]=null});return{c(){e=w("hr"),i=E(),t=w("section"),o=w("h3"),c=W(a),C=W(": "),m=w("a"),m.textContent=g,k=E(),L=w("ul");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=y(l,"HR",{}),i=T(l),t=y(l,"SECTION",{id:!0});var r=G(t);o=y(r,"H3",{});var f=G(o);c=J(f,a),C=J(f,": "),m=y(f,"A",{href:!0,"data-svelte-h":!0}),M(m)!=="svelte-1iyqeyr"&&(m.textContent=g),f.forEach(u),k=T(r),L=y(r,"UL",{});var x=G(L);for(let D=0;D<s.length;D+=1)s[D].l(x);x.forEach(u),r.forEach(u),this.h()},h(){$(m,"href","#table_of_contents"),$(t,"id",p=n[0].id)},m(l,r){I(l,e,r),I(l,i,r),I(l,t,r),d(t,o),d(o,c),d(o,C),d(o,m),d(t,k),d(t,L);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(L,null);v=!0},p(l,[r]){if((!v||r&1)&&a!==(a=l[0].name+"")&&X(c,a),r&1){_=K(l[0].items);let f;for(f=0;f<_.length;f+=1){const x=he(l,_,f);s[f]?(s[f].p(x,r),B(s[f],1)):(s[f]=de(x),s[f].c(),B(s[f],1),s[f].m(L,null))}for(_e(),f=_.length;f<s.length;f+=1)b(f);ve()}(!v||r&1&&p!==(p=l[0].id))&&$(t,"id",p)},i(l){if(!v){for(let r=0;r<_.length;r+=1)B(s[r]);v=!0}},o(l){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)U(s[r]);v=!1},d(l){l&&(u(e),u(i),u(t)),Q(s,l)}}}function Re(n,e,i){let{category:t}=e;return n.$$set=o=>{"category"in o&&i(0,t=o.category)},[t]}class Ae extends ee{constructor(e){super(),te(this,e,Re,Le,Z,{category:0})}}let pe=[{name:"Education",id:"education",items:[{icon_image:{src:"icons/other/SETU.png",alt:"SETU Logo"},name:"South East Technological University (IT Carlow)",link:{name:"Bachelor of Software Development (Honours)",href:"https://www.itcarlow.ie/courses/type/undergraduate-cao-courses/computing-networking-courses/cw238.htm"},small_text:"November 2020- November 2024",short_description:`
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
                `}]},{name:"Work Experience",id:"work",items:[{icon_image:{src:"icons/other/Workday.png",alt:"Workday Logo"},name:"Workday Internship",small_text:"April 2023- August 2023",short_description:`
                I have worked alongside other software engineers to work on the Toggle Automation project where
                <br>
                I had to use various technologies to develop the Toggle Automation project.
                `}]},{name:"Technologies",id:"technologies",items:[{icon_image:{src:"icons/other/Ultraytics.png",alt:"Ultraytics Logo"},name:"YoloV8",link:{name:"YoloV8 Github Page",href:"https://github.com/ultralytics/ultralytics"},short_description:`
                Vision AI used to recognise objects in an image.
                <br>
                I have used this for my Clash Royale Image Recognition project.
                `},{icon_image:{src:"icons/other/OpenRewrite.png",alt:"OpenRewrite Logo"},name:"OpenRewrite",link:{name:"OpenRewrite Website",href:"https://docs.openrewrite.org/"},short_description:`
                Tool used to refactor source code.
                <br>
                I have used OpenRewrite for the Toggle Automation project to handle toggle code.
                `},{icon_image:{src:"icons/other/RobloxStudio.png",alt:"Roblox Studio Logo"},name:"Roblox-Neural-Network-Library",link:{name:"Roblox-Neural-Network-Library Github Page",href:"https://github.com/Kironte/Roblox-Neural-Network-Library"},short_description:`
                Roblox Neural Network Library built in Lua.
                <br>
                I have used the library to develop a simulation with rock, paper, and scissors entities to view its behaviour when changing its destroy scores.
                `},{icon_image:{src:"icons/other/Xmake.png",alt:"Xmake Logo"},name:"XMake",link:{name:"XMake Github Page",href:"https://xmake.io"},short_description:`
                C++ Build System with a Package Manager.
                <br>
                A build system I'm currently using for all my C++ projects.
                `},{icon_image:{src:"icons/other/Svelte.png",alt:"Svelte Logo"},name:"Svelte",link:{name:"Svelte Website",href:"https://svelte.dev"},short_description:`
                A web framework I'm currently using to develop this website.
                `}]},{name:"Projects",id:"projects",items:[{name:"Toggle Automation",short_description:`
                For my internship at Workday, I worked alongside other software engineers to develop a tool which can automatically handle toggles. 
                <br>
                The project uses OpenRewrite, Jenkins, and Gradle to allow other software engineers to easily access the tool. 
                <br>
                It was built using Java and Groovy as it's primary programming language.
                `},{icon_image:{src:"icons/other/ClashRoyale.png",alt:"Clash Royale Logo"},name:'<span id="cr">Clash Royale Image Dataset Generator</span>',short_description:`
                I have made a C++ program which can generate a large image dataset of clash royale battles containing entities.
                <br>
                The dataset is used to train a YoloV8 model to recognise the entities on the screen.
                <br>
                The program uses multithreading to speed up the creation of images.
                `},{icon_image:{src:"icons/other/RandomCard.png",alt:"Random Deck Icon"},name:"Clash Royale Deck Suggester",short_description:`
				Github Link: <a href='https://github.com/Chi-EEE/Data_Science-Project'>Clash Royale Deck Suggester</a>
				<br>
				Dataset Link: <a href='https://www.kaggle.com/datasets/bwandowando/clash-royale-season-18-dec-0320-dataset/'>Clash Royale Season 18 Battles</a>
				<br>
				For this project, I am going to use the Season 18 Clash Royale battle dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				<br>
				`,preview_section:`
				<h5>Preprocessing</h5>
				<p>
					Before using the dataset, I had to preprocess the data to make it easier for the model to train on.
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
				`}]},{name:"Datasets working / worked on",id:"dataset",items:[{name:"100,000 Clash Royale Battle Images",short_description:`
                Using the <a href='#cr'>Clash Royale Image Dataset Generator</a>, I have generated 100,000 images of Clash Royale battles containing entities.
                <br>
                These images are used to train a YoloV8 model to recognise the entities on the screen.
                `},{name:"Season 18 Clash Royale Battle Dataset",short_description:`
				I am going to use the Season 18 Clash Royale Battle Dataset from Kaggle to train a model to suggest a deck based on the cards they have chosen.
				`}]},{name:"Languages",id:"languages",items:[{icon_image:{src:"icons/lang/CPP.png",alt:"C Plus Plus Logo"},name:"C++"},{icon_image:{src:"icons/lang/Python.png",alt:"Python Logo"},name:"Python"},{icon_image:{src:"icons/lang/Java.png",alt:"Java Logo"},name:"Java"},{icon_image:{src:"icons/lang/Typescript.png",alt:"Typescript Logo"},name:"Typescript"},{icon_image:{src:"icons/lang/Rust.png",alt:"Rust Logo"},name:"Rust"},{icon_image:{src:"icons/lang/Lua.png",alt:"Lua Logo"},name:"Lua"}]},{name:"Achievements",id:"achievements",items:[{name:"Google's STEP Internship",short_description:`
                Interviewed for Google's STEP internship where I did two difficult algorithm problems
                `},{name:"Google Algorithm Workshop",short_description:`
                Attended an algorithm workshop by Google where we practiced algorithm problems
                `},{name:"Google Summer Insights 2022",short_description:`
                Invited to attend in Google Summer Insights 2022 where I learned about Google's culture and career opportunities
                `}]}];function Pe(n,e,i){const t=n.slice();return t[0]=e[i],t}function Ge(n,e,i){const t=n.slice();return t[0]=e[i],t}function $e(n){let e,i,t=n[0].name+"",o,a;return{c(){e=w("li"),i=w("a"),o=W(t),a=E(),this.h()},l(c){e=y(c,"LI",{style:!0});var C=G(e);i=y(C,"A",{href:!0});var m=G(i);o=J(m,t),m.forEach(u),a=T(C),C.forEach(u),this.h()},h(){$(i,"href","#"+n[0].id),R(e,"margin-top","5px"),R(e,"margin-bottom","5px")},m(c,C){I(c,e,C),d(e,i),d(i,o),d(e,a)},p:V,d(c){c&&u(e)}}}function xe(n){let e,i;return e=new Ae({props:{category:n[0]}}),{c(){be(e.$$.fragment)},l(t){we(e.$$.fragment,t)},m(t,o){ye(e,t,o),i=!0},p:V,i(t){i||(B(e.$$.fragment,t),i=!0)},o(t){U(e.$$.fragment,t),i=!1},d(t){ke(e,t)}}}function He(n){let e,i=`body {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		}
		h3 a {
			font-size: 0.5em;
			text-align: center;
		}`,t,o,a,c,C="Chi Huu Huynh",m,g,k="Software Developer",L,p,v="Table of Contents:",_,s,b,l,r='<h2>Contact</h2> <ul style="text-align: right; list-style-position: inside;"><li style="margin-top: 5px;">Email: <a href="mailto:chi.h.linkedin@gmail.com">chi.h.linkedin@gmail.com</a></li> <li style="margin-top: 5px;">LinkedIn: <a href="https://www.linkedin.com/in/chi-huu-huynh-a5b315206/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BS4r6%2BEmtQKyoMSJF%2BryGhg%3D%3D">chi-huu-huynh</a></li> <li style="margin-top: 5px;">Github: <a href="https://github.com/Chi-EEE">Chi-EEE</a></li></ul>',f,x,D,q,O,ae='This website was made using <a href="https://svelte.dev/">Svelte</a>',F,le=K(pe),H=[];for(let h=0;h<le.length;h+=1)H[h]=$e(Ge(n,le,h));let z=K(pe),A=[];for(let h=0;h<z.length;h+=1)A[h]=xe(Pe(n,z,h));return{c(){e=w("style"),e.textContent=i,t=E(),o=w("div"),a=w("section"),c=w("h1"),c.textContent=C,m=E(),g=w("h2"),g.textContent=k,L=E(),p=w("h3"),p.textContent=v,_=E(),s=w("ul");for(let h=0;h<H.length;h+=1)H[h].c();b=E(),l=w("section"),l.innerHTML=r,f=E();for(let h=0;h<A.length;h+=1)A[h].c();x=E(),D=w("hr"),q=E(),O=w("footer"),O.innerHTML=ae,this.h()},l(h){const S=Ie("svelte-n99ecd",document.head);e=y(S,"STYLE",{"data-svelte-h":!0}),M(e)!=="svelte-1pr0d57"&&(e.textContent=i),S.forEach(u),t=T(h),o=y(h,"DIV",{style:!0});var P=G(o);a=y(P,"SECTION",{style:!0,id:!0});var N=G(a);c=y(N,"H1",{"data-svelte-h":!0}),M(c)!=="svelte-oi50rq"&&(c.textContent=C),m=T(N),g=y(N,"H2",{"data-svelte-h":!0}),M(g)!=="svelte-z7mdgt"&&(g.textContent=k),L=T(N),p=y(N,"H3",{id:!0,"data-svelte-h":!0}),M(p)!=="svelte-12gil9s"&&(p.textContent=v),_=T(N),s=y(N,"UL",{});var ne=G(s);for(let j=0;j<H.length;j+=1)H[j].l(ne);ne.forEach(u),N.forEach(u),b=T(P),l=y(P,"SECTION",{style:!0,id:!0,"data-svelte-h":!0}),M(l)!=="svelte-1bqxvur"&&(l.innerHTML=r),P.forEach(u),f=T(h);for(let j=0;j<A.length;j+=1)A[j].l(h);x=T(h),D=y(h,"HR",{}),q=T(h),O=y(h,"FOOTER",{"data-svelte-h":!0}),M(O)!=="svelte-1yhg36h"&&(O.innerHTML=ae),this.h()},h(){$(p,"id","table_of_contents"),R(a,"width","50%"),$(a,"id","main"),R(l,"width","50%"),R(l,"text-align","right"),R(l,"align-items","right"),$(l,"id","contact"),R(o,"display","flex"),R(o,"flex-direction","row")},m(h,S){d(document.head,e),I(h,t,S),I(h,o,S),d(o,a),d(a,c),d(a,m),d(a,g),d(a,L),d(a,p),d(a,_),d(a,s);for(let P=0;P<H.length;P+=1)H[P]&&H[P].m(s,null);d(o,b),d(o,l),I(h,f,S);for(let P=0;P<A.length;P+=1)A[P]&&A[P].m(h,S);I(h,x,S),I(h,D,S),I(h,q,S),I(h,O,S),F=!0},p:V,i(h){if(!F){for(let S=0;S<z.length;S+=1)B(A[S]);F=!0}},o(h){A=A.filter(Boolean);for(let S=0;S<A.length;S+=1)U(A[S]);F=!1},d(h){h&&(u(t),u(o),u(f),u(x),u(D),u(q),u(O)),u(e),Q(H,h),Q(A,h)}}}class Ne extends ee{constructor(e){super(),te(this,e,null,He,Z,{})}}export{Ne as component};
