function t(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}const e=864e5;function n(e){const n=t(e);return n.setHours(0,0,0,0),n}function o(e){const n=t(e),o=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return o.setUTCFullYear(n.getFullYear()),+e-+o}function c(e,n){const o=t(e),c=t(n),r=o.getTime()-c.getTime();return r<0?-1:r>0?1:r}function r(c,r){const s=t(c),i=t(r),u=a(s,i),l=Math.abs(function(t,c){const r=n(t),a=n(c),s=+r-o(r),i=+a-o(a);return Math.round((s-i)/e)}(s,i));s.setDate(s.getDate()-u*l);const g=u*(l-Number(a(s,i)===-u));return 0===g?0:g}function a(t,e){const n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function s(e){const n=t(e);return+function(e){const n=t(e);return n.setHours(23,59,59,999),n}(n)==+function(e){const n=t(e),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}(n)}function i(e,n){const o=t(e),r=t(n),a=c(o,r),i=Math.abs(function(e,n){const o=t(e),c=t(n);return 12*(o.getFullYear()-c.getFullYear())+(o.getMonth()-c.getMonth())}(o,r));let u;if(i<1)u=0;else{1===o.getMonth()&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-a*i);let n=c(o,r)===-a;s(t(e))&&1===i&&1===c(e,r)&&(n=!1),u=a*(i-Number(n))}return 0===u?0:u}function u(e,n){const o=t(e),r=t(n),a=c(o,r),s=Math.abs(function(e,n){const o=t(e),c=t(n);return o.getFullYear()-c.getFullYear()}(o,r));o.setFullYear(1584),r.setFullYear(1584);const i=a*(s-+(c(o,r)===-a));return 0===i?0:i}window.onload=()=>{const t="e.chernobrovkin@innopolis.university",e="https://fwd.innopolis.university/api/";document.getElementById("home-btn").onclick=()=>{location.href="index.html"},async function(){const n=await async function(){const n=new URLSearchParams({email:t}),o=`${e}hw2?${n.toString()}`,c=await fetch(o);return await c.json()}(),o=await async function(t){const n=new URLSearchParams({id:t}),o=`${e}comic?${n.toString()}`,c=await fetch(o);return await c.json()}(n),c=document.getElementById("comic-title"),a=document.getElementById("comic-image"),s=document.getElementById("comic-alt"),l=document.getElementById("comic-date");c.textContent=o.safe_title,a.src=o.img,a.alt=o.transcript,s.textContent=o.alt;const g=new Date(o.year,o.month,o.day),m=new Date,d=u(m,g),f=i(m,g)%12,h=r(m,g)%30;l.textContent=`The comic was released ${d} years, ${f} months, and ${h} days ago.`}()};
