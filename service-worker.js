if(!self.define){let l,e={};const i=(i,v)=>(i=new URL(i+".js",v).href,e[i]||new Promise((e=>{if("document"in self){const l=document.createElement("script");l.src=i,l.onload=e,document.head.appendChild(l)}else l=i,importScripts(i),e()})).then((()=>{let l=e[i];if(!l)throw new Error(`Module ${i} didn’t register its module`);return l})));self.define=(v,n)=>{const o=l||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let m={};const r=l=>i(l,o),u={module:{uri:o},exports:m,require:r};e[o]=Promise.all(v.map((l=>u[l]||r(l)))).then((l=>(n(...l),m)))}}define(["./workbox-2d118ab0"],(function(l){"use strict";l.setCacheNameDetails({prefix:"lovemathe"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/lovemathe/404.html",revision:"87fff59c760c77ba20dc0be6083cd238"},{url:"/lovemathe/css/app.ded4e23a.css",revision:null},{url:"/lovemathe/img/0.01d45f5f.svg",revision:null},{url:"/lovemathe/img/0.04eb95fc.svg",revision:null},{url:"/lovemathe/img/0.052b98d6.svg",revision:null},{url:"/lovemathe/img/0.0735e39e.svg",revision:null},{url:"/lovemathe/img/0.090f51ea.svg",revision:null},{url:"/lovemathe/img/0.0b17f37f.svg",revision:null},{url:"/lovemathe/img/0.0b18c5cb.svg",revision:null},{url:"/lovemathe/img/0.0d716e9f.svg",revision:null},{url:"/lovemathe/img/0.0e5d310d.svg",revision:null},{url:"/lovemathe/img/0.10521cb0.svg",revision:null},{url:"/lovemathe/img/0.16178214.svg",revision:null},{url:"/lovemathe/img/0.17f98ef9.svg",revision:null},{url:"/lovemathe/img/0.180b028c.svg",revision:null},{url:"/lovemathe/img/0.1aea5ea4.svg",revision:null},{url:"/lovemathe/img/0.2770446d.svg",revision:null},{url:"/lovemathe/img/0.2a547167.svg",revision:null},{url:"/lovemathe/img/0.2ee08fc5.svg",revision:null},{url:"/lovemathe/img/0.2f4d7883.svg",revision:null},{url:"/lovemathe/img/0.2f83b7af.svg",revision:null},{url:"/lovemathe/img/0.31f79a99.svg",revision:null},{url:"/lovemathe/img/0.35a95b8e.svg",revision:null},{url:"/lovemathe/img/0.3ddcf203.svg",revision:null},{url:"/lovemathe/img/0.3f2edfc4.svg",revision:null},{url:"/lovemathe/img/0.4063f54a.svg",revision:null},{url:"/lovemathe/img/0.408a4f24.svg",revision:null},{url:"/lovemathe/img/0.433ce130.svg",revision:null},{url:"/lovemathe/img/0.4acdfdc4.svg",revision:null},{url:"/lovemathe/img/0.4d050c83.svg",revision:null},{url:"/lovemathe/img/0.4fab6897.svg",revision:null},{url:"/lovemathe/img/0.5ca73e7b.svg",revision:null},{url:"/lovemathe/img/0.65ac65c1.svg",revision:null},{url:"/lovemathe/img/0.67f2a600.svg",revision:null},{url:"/lovemathe/img/0.78ebb74e.svg",revision:null},{url:"/lovemathe/img/0.7af7c710.svg",revision:null},{url:"/lovemathe/img/0.88597d19.svg",revision:null},{url:"/lovemathe/img/0.8f4f7ebc.svg",revision:null},{url:"/lovemathe/img/0.91f6c6f3.svg",revision:null},{url:"/lovemathe/img/0.93e682ee.svg",revision:null},{url:"/lovemathe/img/0.9819ecb0.svg",revision:null},{url:"/lovemathe/img/0.9b0183a1.svg",revision:null},{url:"/lovemathe/img/0.9cf445fd.svg",revision:null},{url:"/lovemathe/img/0.a51d99b7.svg",revision:null},{url:"/lovemathe/img/0.a61524b2.svg",revision:null},{url:"/lovemathe/img/0.a682839f.svg",revision:null},{url:"/lovemathe/img/0.a9c6c898.svg",revision:null},{url:"/lovemathe/img/0.aa778a6e.svg",revision:null},{url:"/lovemathe/img/0.ac4f95a9.svg",revision:null},{url:"/lovemathe/img/0.b3e6d390.svg",revision:null},{url:"/lovemathe/img/0.b83497ed.svg",revision:null},{url:"/lovemathe/img/0.c34c1640.svg",revision:null},{url:"/lovemathe/img/0.d4154c07.svg",revision:null},{url:"/lovemathe/img/0.d4532251.svg",revision:null},{url:"/lovemathe/img/0.dcd8683e.svg",revision:null},{url:"/lovemathe/img/0.df6c0186.svg",revision:null},{url:"/lovemathe/img/0.e4ef991c.svg",revision:null},{url:"/lovemathe/img/0.e540697f.svg",revision:null},{url:"/lovemathe/img/0.e66c743a.svg",revision:null},{url:"/lovemathe/img/0.e836e79e.svg",revision:null},{url:"/lovemathe/img/0.f4089cd0.svg",revision:null},{url:"/lovemathe/img/0.f47fb275.svg",revision:null},{url:"/lovemathe/img/0.fefe6a07.svg",revision:null},{url:"/lovemathe/img/1.0656b9bb.svg",revision:null},{url:"/lovemathe/img/1.07a03395.svg",revision:null},{url:"/lovemathe/img/1.0bd9e89f.svg",revision:null},{url:"/lovemathe/img/1.0e2bbe45.svg",revision:null},{url:"/lovemathe/img/1.13b44d58.svg",revision:null},{url:"/lovemathe/img/1.147e7308.svg",revision:null},{url:"/lovemathe/img/1.1a33e642.svg",revision:null},{url:"/lovemathe/img/1.1a35689e.svg",revision:null},{url:"/lovemathe/img/1.21acc0f6.svg",revision:null},{url:"/lovemathe/img/1.27c8524f.svg",revision:null},{url:"/lovemathe/img/1.2afa70ee.svg",revision:null},{url:"/lovemathe/img/1.326a2925.svg",revision:null},{url:"/lovemathe/img/1.34af9ec9.svg",revision:null},{url:"/lovemathe/img/1.3b4d551f.png",revision:null},{url:"/lovemathe/img/1.3e949a75.svg",revision:null},{url:"/lovemathe/img/1.479505a2.svg",revision:null},{url:"/lovemathe/img/1.47c276cf.svg",revision:null},{url:"/lovemathe/img/1.4bf0b6c9.svg",revision:null},{url:"/lovemathe/img/1.572da0e6.svg",revision:null},{url:"/lovemathe/img/1.5911b8c1.svg",revision:null},{url:"/lovemathe/img/1.5e579597.svg",revision:null},{url:"/lovemathe/img/1.603d9fbc.svg",revision:null},{url:"/lovemathe/img/1.6e9605fa.svg",revision:null},{url:"/lovemathe/img/1.702b8500.svg",revision:null},{url:"/lovemathe/img/1.72218f4e.svg",revision:null},{url:"/lovemathe/img/1.7c49269c.svg",revision:null},{url:"/lovemathe/img/1.7d87a5b7.svg",revision:null},{url:"/lovemathe/img/1.7dbdc31f.svg",revision:null},{url:"/lovemathe/img/1.816530fa.svg",revision:null},{url:"/lovemathe/img/1.849161ed.svg",revision:null},{url:"/lovemathe/img/1.84e80a52.svg",revision:null},{url:"/lovemathe/img/1.888397bb.svg",revision:null},{url:"/lovemathe/img/1.8be962d9.svg",revision:null},{url:"/lovemathe/img/1.8cf8ac58.svg",revision:null},{url:"/lovemathe/img/1.a23075ea.svg",revision:null},{url:"/lovemathe/img/1.b04bda43.svg",revision:null},{url:"/lovemathe/img/1.b6a8b699.svg",revision:null},{url:"/lovemathe/img/1.b9795c59.svg",revision:null},{url:"/lovemathe/img/1.ba30ab28.svg",revision:null},{url:"/lovemathe/img/1.bfc8204d.svg",revision:null},{url:"/lovemathe/img/1.c4b23200.svg",revision:null},{url:"/lovemathe/img/1.cb508fd2.svg",revision:null},{url:"/lovemathe/img/1.d80330a7.svg",revision:null},{url:"/lovemathe/img/1.d8bdd8d8.svg",revision:null},{url:"/lovemathe/img/1.d9bbbdb3.svg",revision:null},{url:"/lovemathe/img/1.d9e64415.svg",revision:null},{url:"/lovemathe/img/1.de18a8b6.svg",revision:null},{url:"/lovemathe/img/1.de688186.svg",revision:null},{url:"/lovemathe/img/1.e02f4c26.svg",revision:null},{url:"/lovemathe/img/1.e1b070c9.svg",revision:null},{url:"/lovemathe/img/1.e37b02e4.svg",revision:null},{url:"/lovemathe/img/1.e5e3f475.svg",revision:null},{url:"/lovemathe/img/1.f286524c.svg",revision:null},{url:"/lovemathe/img/1.f28ffb81.svg",revision:null},{url:"/lovemathe/img/1.f5c5b6a8.svg",revision:null},{url:"/lovemathe/img/1.fb6fe72b.svg",revision:null},{url:"/lovemathe/img/1.fdc8e82b.svg",revision:null},{url:"/lovemathe/img/10.3a6a0b4d.svg",revision:null},{url:"/lovemathe/img/10.644027d3.svg",revision:null},{url:"/lovemathe/img/10.755fe3cd.svg",revision:null},{url:"/lovemathe/img/11.1dd950fb.svg",revision:null},{url:"/lovemathe/img/11.e462250a.svg",revision:null},{url:"/lovemathe/img/11.ec113730.svg",revision:null},{url:"/lovemathe/img/2.050781b2.svg",revision:null},{url:"/lovemathe/img/2.146ea510.svg",revision:null},{url:"/lovemathe/img/2.154f8831.svg",revision:null},{url:"/lovemathe/img/2.16fab00f.svg",revision:null},{url:"/lovemathe/img/2.1fc95955.svg",revision:null},{url:"/lovemathe/img/2.274468ac.svg",revision:null},{url:"/lovemathe/img/2.2e2e36fd.svg",revision:null},{url:"/lovemathe/img/2.353540f2.svg",revision:null},{url:"/lovemathe/img/2.400f44f4.svg",revision:null},{url:"/lovemathe/img/2.40f5286f.svg",revision:null},{url:"/lovemathe/img/2.414b0b21.svg",revision:null},{url:"/lovemathe/img/2.420f7b72.svg",revision:null},{url:"/lovemathe/img/2.42637073.svg",revision:null},{url:"/lovemathe/img/2.462e4384.png",revision:null},{url:"/lovemathe/img/2.4f046adc.svg",revision:null},{url:"/lovemathe/img/2.5a164b7e.svg",revision:null},{url:"/lovemathe/img/2.5c3f05c9.svg",revision:null},{url:"/lovemathe/img/2.6ae94672.svg",revision:null},{url:"/lovemathe/img/2.6b3eed61.svg",revision:null},{url:"/lovemathe/img/2.6f7f80d2.svg",revision:null},{url:"/lovemathe/img/2.7679a372.svg",revision:null},{url:"/lovemathe/img/2.7705b3b8.svg",revision:null},{url:"/lovemathe/img/2.77ff57d6.svg",revision:null},{url:"/lovemathe/img/2.7c374b66.svg",revision:null},{url:"/lovemathe/img/2.85b44feb.svg",revision:null},{url:"/lovemathe/img/2.94dddcb3.svg",revision:null},{url:"/lovemathe/img/2.9b0183a1.svg",revision:null},{url:"/lovemathe/img/2.9b778669.svg",revision:null},{url:"/lovemathe/img/2.9b9a2cfe.svg",revision:null},{url:"/lovemathe/img/2.9ec7e866.svg",revision:null},{url:"/lovemathe/img/2.a92425ed.png",revision:null},{url:"/lovemathe/img/2.ae14e28f.svg",revision:null},{url:"/lovemathe/img/2.b38c7c9c.svg",revision:null},{url:"/lovemathe/img/2.b89c1df0.svg",revision:null},{url:"/lovemathe/img/2.b9d2dd81.svg",revision:null},{url:"/lovemathe/img/2.ba667cf4.svg",revision:null},{url:"/lovemathe/img/2.c9824e54.svg",revision:null},{url:"/lovemathe/img/2.c9e68957.svg",revision:null},{url:"/lovemathe/img/2.ca56acaf.svg",revision:null},{url:"/lovemathe/img/2.d4091b02.png",revision:null},{url:"/lovemathe/img/2.d4590722.svg",revision:null},{url:"/lovemathe/img/2.d9bf8898.svg",revision:null},{url:"/lovemathe/img/2.daf057f3.svg",revision:null},{url:"/lovemathe/img/2.e2918b80.svg",revision:null},{url:"/lovemathe/img/2.e5cd174d.svg",revision:null},{url:"/lovemathe/img/2.f98a8665.svg",revision:null},{url:"/lovemathe/img/2.fd6a208f.png",revision:null},{url:"/lovemathe/img/3.00250fe7.svg",revision:null},{url:"/lovemathe/img/3.0bbd3afa.svg",revision:null},{url:"/lovemathe/img/3.0f5c6e10.svg",revision:null},{url:"/lovemathe/img/3.118c8f7e.png",revision:null},{url:"/lovemathe/img/3.179e4d1b.svg",revision:null},{url:"/lovemathe/img/3.17fb95eb.svg",revision:null},{url:"/lovemathe/img/3.22b87dcf.png",revision:null},{url:"/lovemathe/img/3.36f6f057.svg",revision:null},{url:"/lovemathe/img/3.412d4396.svg",revision:null},{url:"/lovemathe/img/3.475e45da.svg",revision:null},{url:"/lovemathe/img/3.4acdfdc4.svg",revision:null},{url:"/lovemathe/img/3.4d760e02.svg",revision:null},{url:"/lovemathe/img/3.50ab8e62.svg",revision:null},{url:"/lovemathe/img/3.5364b3d4.svg",revision:null},{url:"/lovemathe/img/3.540db836.svg",revision:null},{url:"/lovemathe/img/3.56395a83.svg",revision:null},{url:"/lovemathe/img/3.5ea64d70.svg",revision:null},{url:"/lovemathe/img/3.654828a1.svg",revision:null},{url:"/lovemathe/img/3.6a32fe8b.svg",revision:null},{url:"/lovemathe/img/3.6d47c12c.svg",revision:null},{url:"/lovemathe/img/3.7a16f41e.svg",revision:null},{url:"/lovemathe/img/3.7e72e289.svg",revision:null},{url:"/lovemathe/img/3.830461c1.png",revision:null},{url:"/lovemathe/img/3.8a013926.svg",revision:null},{url:"/lovemathe/img/3.8a9a7f6c.svg",revision:null},{url:"/lovemathe/img/3.9255b785.svg",revision:null},{url:"/lovemathe/img/3.a3677943.svg",revision:null},{url:"/lovemathe/img/3.a4d4927a.svg",revision:null},{url:"/lovemathe/img/3.a6cd1257.svg",revision:null},{url:"/lovemathe/img/3.a71a684a.svg",revision:null},{url:"/lovemathe/img/3.aa07f09d.svg",revision:null},{url:"/lovemathe/img/3.aad5662e.svg",revision:null},{url:"/lovemathe/img/3.af8ac7f8.svg",revision:null},{url:"/lovemathe/img/3.b07ee5d4.svg",revision:null},{url:"/lovemathe/img/3.b2c739e8.svg",revision:null},{url:"/lovemathe/img/3.c9033d94.svg",revision:null},{url:"/lovemathe/img/3.dceea150.svg",revision:null},{url:"/lovemathe/img/3.e50b1bb8.svg",revision:null},{url:"/lovemathe/img/3.e886ae1c.svg",revision:null},{url:"/lovemathe/img/3.eb017eca.svg",revision:null},{url:"/lovemathe/img/3.ef808f3e.svg",revision:null},{url:"/lovemathe/img/3.ffbc686f.svg",revision:null},{url:"/lovemathe/img/4.09bd66e9.svg",revision:null},{url:"/lovemathe/img/4.117cc716.svg",revision:null},{url:"/lovemathe/img/4.144f6ec5.svg",revision:null},{url:"/lovemathe/img/4.15052061.png",revision:null},{url:"/lovemathe/img/4.180b028c.svg",revision:null},{url:"/lovemathe/img/4.26bc3a61.svg",revision:null},{url:"/lovemathe/img/4.26d9e771.svg",revision:null},{url:"/lovemathe/img/4.2befb405.png",revision:null},{url:"/lovemathe/img/4.2db5c3ee.svg",revision:null},{url:"/lovemathe/img/4.300b5bfc.svg",revision:null},{url:"/lovemathe/img/4.31e6e261.svg",revision:null},{url:"/lovemathe/img/4.34e5a404.svg",revision:null},{url:"/lovemathe/img/4.445f024b.svg",revision:null},{url:"/lovemathe/img/4.467f30b1.svg",revision:null},{url:"/lovemathe/img/4.58664818.svg",revision:null},{url:"/lovemathe/img/4.64cdac8b.svg",revision:null},{url:"/lovemathe/img/4.6f9cf1e2.png",revision:null},{url:"/lovemathe/img/4.7fb68cbb.svg",revision:null},{url:"/lovemathe/img/4.8bc0b5e3.svg",revision:null},{url:"/lovemathe/img/4.9387f78b.png",revision:null},{url:"/lovemathe/img/4.95443e75.svg",revision:null},{url:"/lovemathe/img/4.9692602a.svg",revision:null},{url:"/lovemathe/img/4.9a5803fc.svg",revision:null},{url:"/lovemathe/img/4.9e27ef37.svg",revision:null},{url:"/lovemathe/img/4.a19dc2ca.svg",revision:null},{url:"/lovemathe/img/4.a9067cf2.svg",revision:null},{url:"/lovemathe/img/4.add76323.svg",revision:null},{url:"/lovemathe/img/4.c5dd74c6.svg",revision:null},{url:"/lovemathe/img/4.c8ca68a2.svg",revision:null},{url:"/lovemathe/img/4.d3d7fd7f.svg",revision:null},{url:"/lovemathe/img/4.d6d0811b.svg",revision:null},{url:"/lovemathe/img/4.d7c8b38d.svg",revision:null},{url:"/lovemathe/img/4.dc262aa9.svg",revision:null},{url:"/lovemathe/img/4.dcd8683e.svg",revision:null},{url:"/lovemathe/img/4.dd72bfa7.svg",revision:null},{url:"/lovemathe/img/4.e1612499.svg",revision:null},{url:"/lovemathe/img/4.e2010a72.svg",revision:null},{url:"/lovemathe/img/4.e55a5b2a.svg",revision:null},{url:"/lovemathe/img/4.ed9af6be.svg",revision:null},{url:"/lovemathe/img/4.f8977c29.svg",revision:null},{url:"/lovemathe/img/4.f8a7e219.svg",revision:null},{url:"/lovemathe/img/4.fbe44b1e.svg",revision:null},{url:"/lovemathe/img/5.08751ce6.svg",revision:null},{url:"/lovemathe/img/5.09d24529.svg",revision:null},{url:"/lovemathe/img/5.28506f79.svg",revision:null},{url:"/lovemathe/img/5.2b27d91f.svg",revision:null},{url:"/lovemathe/img/5.2e82b657.svg",revision:null},{url:"/lovemathe/img/5.3150db5f.svg",revision:null},{url:"/lovemathe/img/5.35b4833e.svg",revision:null},{url:"/lovemathe/img/5.379016c6.svg",revision:null},{url:"/lovemathe/img/5.3c76698f.svg",revision:null},{url:"/lovemathe/img/5.40c15148.png",revision:null},{url:"/lovemathe/img/5.45a47a90.svg",revision:null},{url:"/lovemathe/img/5.49475902.svg",revision:null},{url:"/lovemathe/img/5.4e34e85d.svg",revision:null},{url:"/lovemathe/img/5.5052590c.svg",revision:null},{url:"/lovemathe/img/5.525c68f4.svg",revision:null},{url:"/lovemathe/img/5.59dd6df2.svg",revision:null},{url:"/lovemathe/img/5.64c1e635.svg",revision:null},{url:"/lovemathe/img/5.80306b48.svg",revision:null},{url:"/lovemathe/img/5.833f51b0.svg",revision:null},{url:"/lovemathe/img/5.88171b24.svg",revision:null},{url:"/lovemathe/img/5.905f4492.svg",revision:null},{url:"/lovemathe/img/5.92e6276e.svg",revision:null},{url:"/lovemathe/img/5.96058aa3.svg",revision:null},{url:"/lovemathe/img/5.9f4cf6c5.svg",revision:null},{url:"/lovemathe/img/5.a45425db.svg",revision:null},{url:"/lovemathe/img/5.ad00fd7a.svg",revision:null},{url:"/lovemathe/img/5.b2ae5665.png",revision:null},{url:"/lovemathe/img/5.b6b08aa4.svg",revision:null},{url:"/lovemathe/img/5.bbe60e31.svg",revision:null},{url:"/lovemathe/img/5.c133401e.svg",revision:null},{url:"/lovemathe/img/5.c1367acf.svg",revision:null},{url:"/lovemathe/img/5.c6a54405.svg",revision:null},{url:"/lovemathe/img/5.c7a96ed0.svg",revision:null},{url:"/lovemathe/img/5.cf36006a.svg",revision:null},{url:"/lovemathe/img/5.d3e18e04.svg",revision:null},{url:"/lovemathe/img/5.e3274f97.svg",revision:null},{url:"/lovemathe/img/5.ee87926b.svg",revision:null},{url:"/lovemathe/img/5.f4c87622.png",revision:null},{url:"/lovemathe/img/5.fcd8fe76.png",revision:null},{url:"/lovemathe/img/6.05f077a4.png",revision:null},{url:"/lovemathe/img/6.11d9a652.svg",revision:null},{url:"/lovemathe/img/6.1546c5f2.svg",revision:null},{url:"/lovemathe/img/6.26de8b00.svg",revision:null},{url:"/lovemathe/img/6.2e059da4.svg",revision:null},{url:"/lovemathe/img/6.2e8f4e15.png",revision:null},{url:"/lovemathe/img/6.37c60874.svg",revision:null},{url:"/lovemathe/img/6.3fa9615b.svg",revision:null},{url:"/lovemathe/img/6.4078e87f.svg",revision:null},{url:"/lovemathe/img/6.441fcf89.svg",revision:null},{url:"/lovemathe/img/6.4f93a87b.svg",revision:null},{url:"/lovemathe/img/6.4fa11ae1.png",revision:null},{url:"/lovemathe/img/6.6c430229.png",revision:null},{url:"/lovemathe/img/6.72ed33e3.svg",revision:null},{url:"/lovemathe/img/6.79e890b1.svg",revision:null},{url:"/lovemathe/img/6.a32d0ecd.svg",revision:null},{url:"/lovemathe/img/6.a677faf6.svg",revision:null},{url:"/lovemathe/img/6.b0392d01.png",revision:null},{url:"/lovemathe/img/6.c820433a.svg",revision:null},{url:"/lovemathe/img/6.e8c1b597.svg",revision:null},{url:"/lovemathe/img/6.f9d46de0.png",revision:null},{url:"/lovemathe/img/7.7ff14e54.svg",revision:null},{url:"/lovemathe/img/7.938477d7.svg",revision:null},{url:"/lovemathe/img/7.d2b2acfb.svg",revision:null},{url:"/lovemathe/img/7.f2ee0322.svg",revision:null},{url:"/lovemathe/img/8.25573b44.svg",revision:null},{url:"/lovemathe/img/8.846a23ba.svg",revision:null},{url:"/lovemathe/img/8.bc534dc3.svg",revision:null},{url:"/lovemathe/img/8.fd9241f0.svg",revision:null},{url:"/lovemathe/img/9.27f35410.svg",revision:null},{url:"/lovemathe/img/9.65258c78.svg",revision:null},{url:"/lovemathe/img/9.7346ffbf.svg",revision:null},{url:"/lovemathe/img/9.eac17b5c.svg",revision:null},{url:"/lovemathe/img/background.01b3f161.svg",revision:null},{url:"/lovemathe/img/background.124dde19.svg",revision:null},{url:"/lovemathe/img/background.19f6156e.svg",revision:null},{url:"/lovemathe/img/background.33b378ab.svg",revision:null},{url:"/lovemathe/img/background.386279ea.svg",revision:null},{url:"/lovemathe/img/background.43705bd3.svg",revision:null},{url:"/lovemathe/img/background.46430557.svg",revision:null},{url:"/lovemathe/img/background.4b29ecd1.svg",revision:null},{url:"/lovemathe/img/background.6013113a.svg",revision:null},{url:"/lovemathe/img/background.60761682.svg",revision:null},{url:"/lovemathe/img/background.6262210d.svg",revision:null},{url:"/lovemathe/img/background.64116ebc.svg",revision:null},{url:"/lovemathe/img/background.789265d0.svg",revision:null},{url:"/lovemathe/img/background.9eaf2ff5.svg",revision:null},{url:"/lovemathe/img/background.b459607c.svg",revision:null},{url:"/lovemathe/img/background.b786bd8b.svg",revision:null},{url:"/lovemathe/img/background.d26f7ee5.svg",revision:null},{url:"/lovemathe/img/background.d30653b0.svg",revision:null},{url:"/lovemathe/img/background.db5b4369.svg",revision:null},{url:"/lovemathe/img/background.dc8a1e43.svg",revision:null},{url:"/lovemathe/img/background.defcf1ac.svg",revision:null},{url:"/lovemathe/img/background.df8b11c9.svg",revision:null},{url:"/lovemathe/img/background.f04b1c83.svg",revision:null},{url:"/lovemathe/img/badge_background.40c4a8e7.svg",revision:null},{url:"/lovemathe/img/firstImage.24b7df99.svg",revision:null},{url:"/lovemathe/img/greenHelp.19ad540c.svg",revision:null},{url:"/lovemathe/img/help.bcf450fa.svg",revision:null},{url:"/lovemathe/img/kid_has_no_problems.ebd754fc.svg",revision:null},{url:"/lovemathe/img/overall_badge_background.bda8ad66.svg",revision:null},{url:"/lovemathe/img/overall_badge_background_color.a36ef82f.svg",revision:null},{url:"/lovemathe/img/start.504da9f8.svg",revision:null},{url:"/lovemathe/img/start.cdfa5251.svg",revision:null},{url:"/lovemathe/index.html",revision:"3f7028988e5ba89dd3ecf2ac0046955c"},{url:"/lovemathe/js/app.fd512b89.js",revision:null},{url:"/lovemathe/js/chunk-vendors.4c83fdc9.js",revision:null},{url:"/lovemathe/manifest.json",revision:"cfa184234af632040f5959b9c74af26e"},{url:"/lovemathe/media/0.4b044a79.mp3",revision:null},{url:"/lovemathe/media/0.648aa78a.mp3",revision:null},{url:"/lovemathe/media/0.682fd472.mp3",revision:null},{url:"/lovemathe/media/0.6f65e81e.mp3",revision:null},{url:"/lovemathe/media/0.a18fb86b.mp3",revision:null},{url:"/lovemathe/media/0.a773ace0.mp3",revision:null},{url:"/lovemathe/media/0.c3c5fc1a.mp3",revision:null},{url:"/lovemathe/media/1.107e1324.mp3",revision:null},{url:"/lovemathe/media/1.5224adda.mp3",revision:null},{url:"/lovemathe/media/1.857b738f.mp3",revision:null},{url:"/lovemathe/media/1.a18fb86b.mp3",revision:null},{url:"/lovemathe/media/1.b2a18569.mp3",revision:null},{url:"/lovemathe/media/1.c9c54643.mp3",revision:null},{url:"/lovemathe/media/1.f1cc82b2.mp3",revision:null},{url:"/lovemathe/media/2.0a1392b3.mp3",revision:null},{url:"/lovemathe/media/2.5636af0c.mp3",revision:null},{url:"/lovemathe/media/2.857b738f.mp3",revision:null},{url:"/lovemathe/media/2.c9c54643.mp3",revision:null},{url:"/lovemathe/media/2.f1cc82b2.mp3",revision:null},{url:"/lovemathe/media/3.68fbec2b.mp3",revision:null},{url:"/lovemathe/media/3.6df685a1.mp3",revision:null},{url:"/lovemathe/media/3.8266cd82.mp3",revision:null},{url:"/lovemathe/media/3.c3c5fc1a.mp3",revision:null},{url:"/lovemathe/media/4.6192ccb3.mp3",revision:null},{url:"/lovemathe/media/4.8336fce8.mp3",revision:null},{url:"/lovemathe/media/4.eaba87d9.mp3",revision:null},{url:"/lovemathe/media/5.2f41ad4a.mp3",revision:null},{url:"/lovemathe/media/5.68fbec2b.mp3",revision:null},{url:"/lovemathe/media/5.6a65c0ee.mp3",revision:null},{url:"/lovemathe/media/correct.0d02a896.mp3",revision:null},{url:"/lovemathe/media/false.6e0118f1.mp3",revision:null},{url:"/lovemathe/media/firstAudio.8a2fdf07.mp3",revision:null},{url:"/lovemathe/media/fourthAudio.e16f7311.mp3",revision:null},{url:"/lovemathe/media/great.fe48628f.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.194b192a.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.1be33a09.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.2d08f538.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.2d93ee58.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.324010ad.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.421343b0.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.5a45c444.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.69f39195.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.6ad7d5b5.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.75e933f8.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.82e1f684.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.9747c2ca.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.9aafdaf9.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.b63be5c5.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.bb4137cc.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.bf700b42.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.d5d526cd.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.d6343588.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.f24f6dbf.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.f2af509f.mp3",revision:null},{url:"/lovemathe/media/inBetweenAudio.fb943a0d.mp3",revision:null},{url:"/lovemathe/media/instruction.0fb61329.mp3",revision:null},{url:"/lovemathe/media/instruction.268bb0cb.mp3",revision:null},{url:"/lovemathe/media/instruction.2947260b.mp3",revision:null},{url:"/lovemathe/media/instruction.2e0e76e1.mp3",revision:null},{url:"/lovemathe/media/instruction.546bef9b.mp3",revision:null},{url:"/lovemathe/media/instruction.73bd7b91.mp3",revision:null},{url:"/lovemathe/media/instruction.771172fa.mp3",revision:null},{url:"/lovemathe/media/instruction.7f23ed79.mp3",revision:null},{url:"/lovemathe/media/instruction.8eae810b.mp3",revision:null},{url:"/lovemathe/media/instruction.902eed24.mp3",revision:null},{url:"/lovemathe/media/instruction.a36cfad8.mp3",revision:null},{url:"/lovemathe/media/instruction.ad1ab242.mp3",revision:null},{url:"/lovemathe/media/instruction.b5918757.mp3",revision:null},{url:"/lovemathe/media/instruction.b8d3c9cc.mp3",revision:null},{url:"/lovemathe/media/instruction.b9b8e855.mp3",revision:null},{url:"/lovemathe/media/instruction.c1cc673c.mp3",revision:null},{url:"/lovemathe/media/instruction.cc3c2e9a.mp3",revision:null},{url:"/lovemathe/media/instruction.ce1c6d44.mp3",revision:null},{url:"/lovemathe/media/instruction.d9220efb.mp3",revision:null},{url:"/lovemathe/media/instruction.dd6d187b.mp3",revision:null},{url:"/lovemathe/media/instruction.ee2ab202.mp3",revision:null},{url:"/lovemathe/media/instruction.f2718a28.mp3",revision:null},{url:"/lovemathe/media/instruction.f50fbd6c.mp3",revision:null},{url:"/lovemathe/media/instruction.fa28ce40.mp3",revision:null},{url:"/lovemathe/media/secondAudio.406eed2c.mp3",revision:null},{url:"/lovemathe/media/second_instruction.831f5c7e.mp3",revision:null},{url:"/lovemathe/media/thirdAudio.2e0bb6af.mp3",revision:null},{url:"/lovemathe/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
