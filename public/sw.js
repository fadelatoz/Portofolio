if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>c(e,n),r={module:{uri:n},exports:t,require:o};s[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"871db8596a6267c1bc741d481216ba27"},{url:"/_next/static/PmBCRfZ9bobtC-oEcFS9Z/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/PmBCRfZ9bobtC-oEcFS9Z/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/350-b8585b8965cd9734.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/370b0802-b25b52dae6172343.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/385cb88d-555696929c36b303.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/400-2e695667ab37b9ec.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/406-b7699a894565bbef.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/570-47f15bc17e73504d.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/59650de3-b5819cdc8bb9f9f0.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/659-195c88f8bc8cc64a.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/69-c3d0bc701567265d.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/718-30fee9ab5b682961.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/795d4814-b4c8b890a7fd069e.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/_not-found-86e002a9d6c93e61.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/components/buttonComponent/page-6381f0bf3cdb98c7.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/experience/page-94c4055db716b2dd.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/homePage/page-94fb26f6d409788f.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/layout-2a38f66b47a3f83d.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/my-projects/page-e8f962ef987eb069.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/my-skills/page-46d2ad55a294cf9a.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/page-b0eabd6482741e5f.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/app/resume/page-8c806e4b245f4de1.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/fd9d1056-19277bd63182a046.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/main-app-2b8d6bcf8002f03e.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/main-f365099f474be860.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0e1ddcc45aa1a87b.js",revision:"PmBCRfZ9bobtC-oEcFS9Z"},{url:"/_next/static/css/46d2f1b70d0e73f2.css",revision:"46d2f1b70d0e73f2"},{url:"/_next/static/css/7bd75ab11f23cf68.css",revision:"7bd75ab11f23cf68"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/image/Matrix.png",revision:"afaace28f443bf5195c8407fc5b46bbf"},{url:"/image/Mountains.jpg",revision:"2d16a412fd7450e450c2e1d079c17e57"},{url:"/image/Natacara.png",revision:"26162232bcc4213b4e9e044663fc184a"},{url:"/image/NextWebsite.png",revision:"4b0195fc0610ff6231bc77704c099f9f"},{url:"/image/SpaceWebsite.png",revision:"c787a62b22a622b6469931457b843df3"},{url:"/image/WebPortfolio.png",revision:"28937cbd6c5e5104f1a0a55e70e11cf5"},{url:"/image/atombg-comp.webp",revision:"932105e4b71f0e02a21f285772326371"},{url:"/image/background/background_projects.jpg",revision:"2d6367fdc5d6f2d659335e5b47e827af"},{url:"/image/bg-2.jpg",revision:"2e66978659a88c4b07108a0b3cf7e866"},{url:"/image/bg-3.jpg",revision:"7270aff253cceacc41f06092daa6e267"},{url:"/image/cliff.webp",revision:"915f186c6cf59389fb14cdab0d5c2c1b"},{url:"/image/css.png",revision:"c9421be52fe48fdf04839b53f8e9f1d4"},{url:"/image/docker.webp",revision:"3032383b854124e981bae60d04456a71"},{url:"/image/framer.png",revision:"f1a38f097c043343999112c60384c2c4"},{url:"/image/horse.png",revision:"fac57347c5922036f4c2e95c87a2e631"},{url:"/image/horseLogo.jpg",revision:"7233df2492690de99457fb8262ddc51c"},{url:"/image/html.png",revision:"aece1946a20e25d47323c148926100a6"},{url:"/image/js.png",revision:"0cded3a3276425911d55a2552bf361bf"},{url:"/image/main-bg.webp",revision:"7415bd8cb84c5e152f825701973adc29"},{url:"/image/mongodb.png",revision:"530ffd83fe97f04a896eb38519aac852"},{url:"/image/mui.png",revision:"ae988748ef23e4d83d773a1b91cbc091"},{url:"/image/mysql.png",revision:"07c28adf28e0592b46094aef81fcc655"},{url:"/image/next.png",revision:"6338e3b1fefffb51443e613edd2a6b19"},{url:"/image/node-js.png",revision:"eebad245108ae82e08d6e9017f4ccd4a"},{url:"/image/postges.png",revision:"ea92d6580dda0fbcf61a8ccb16e0d02a"},{url:"/image/prisma.webp",revision:"3daa432e36df5013cdb2857460d700c8"},{url:"/image/react.png",revision:"1bf9e36a76d7c9c41691fb26026caf55"},{url:"/image/redux.png",revision:"8251fe76d7487a28b07603515b300964"},{url:"/image/rounded-text.png",revision:"422870f21573a521e1aeb823824a0367"},{url:"/image/seva_id.png",revision:"4468ca65b71f5ad68581dfecdfd8d81c"},{url:"/image/stars.png",revision:"aa17cace375c4d3ae450ba4595ed3b31"},{url:"/image/stripe.webp",revision:"7a8398615794c0a7803aa80c1e36af24"},{url:"/image/tailwind.png",revision:"f8e7d300727c87f895ba7fc4768353f6"},{url:"/image/trees.webp",revision:"d61189d222d82a87542623eaea491ce3"},{url:"/image/ts.png",revision:"0d27acfc9e0690a5b594a5bfb744a941"},{url:"/manifest.json",revision:"ddae0145cc6c8721137bdaae81deea07"},{url:"/pdf/Fadel_Resume.pdf",revision:"ae5c9c0e66b13b59c7405d5996c175dd"},{url:"/providers.tsx",revision:"cf7d13d9d5844720f696984ca68c7933"},{url:"/rocket-lunch.png",revision:"1a59c4db456b637a4a14bff2e8903b4d"},{url:"/svg/discord.svg",revision:"147f41c95f6ad7574168c3d3a462c455"},{url:"/svg/facebook.svg",revision:"1dba582eed7d4c3a1c7589fcc1cc53f9"},{url:"/svg/instagram.svg",revision:"4b0479d558cc9d0dffd7c0b276f82fb8"},{url:"/svg/linkedin.svg",revision:"2c20928ddc18c3e2ac70e6f8f38ca825"},{url:"/svg/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/svg/peaks.svg",revision:"41ccf4e1d008bd3b4e1f57c7d03dd2a0"},{url:"/svg/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
