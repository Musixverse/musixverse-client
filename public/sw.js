if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Artist_Profile.png",revision:"77bda0afce48a8a258f3dafcd059f2c4"},{url:"/Artist_banner.png",revision:"05c69c78a77d9e584aaea5de5d3317e4"},{url:"/_next/static/chunks/061e6b60.7663215c22dc49e1.js",revision:"7663215c22dc49e1"},{url:"/_next/static/chunks/108.63a648679905a4fd.js",revision:"63a648679905a4fd"},{url:"/_next/static/chunks/1402.679156145d7c7f32.js",revision:"679156145d7c7f32"},{url:"/_next/static/chunks/1470-919a68ed1c3006fa.js",revision:"919a68ed1c3006fa"},{url:"/_next/static/chunks/1644.394fcb115359e9db.js",revision:"394fcb115359e9db"},{url:"/_next/static/chunks/1663.37858af5a15b3e39.js",revision:"37858af5a15b3e39"},{url:"/_next/static/chunks/167-5ade546a3780b6c8.js",revision:"5ade546a3780b6c8"},{url:"/_next/static/chunks/1892-92f91dbdd6e203af.js",revision:"92f91dbdd6e203af"},{url:"/_next/static/chunks/1933.389415db9a521a9f.js",revision:"389415db9a521a9f"},{url:"/_next/static/chunks/2062.35f3ca6a3fd195b8.js",revision:"35f3ca6a3fd195b8"},{url:"/_next/static/chunks/2079.c8e5f68874d41281.js",revision:"c8e5f68874d41281"},{url:"/_next/static/chunks/2206-7439077378df6f6c.js",revision:"7439077378df6f6c"},{url:"/_next/static/chunks/2343-1ef087ecd1cb293a.js",revision:"1ef087ecd1cb293a"},{url:"/_next/static/chunks/2430-8fae0253acc19daf.js",revision:"8fae0253acc19daf"},{url:"/_next/static/chunks/2483.d82a24ca39629e1a.js",revision:"d82a24ca39629e1a"},{url:"/_next/static/chunks/2566.e5cadd9bce9c378c.js",revision:"e5cadd9bce9c378c"},{url:"/_next/static/chunks/2816.73bf35c4a49e98a0.js",revision:"73bf35c4a49e98a0"},{url:"/_next/static/chunks/29107295.46d7d1929d94c0a9.js",revision:"46d7d1929d94c0a9"},{url:"/_next/static/chunks/2940.d4bebc078805aefe.js",revision:"d4bebc078805aefe"},{url:"/_next/static/chunks/2962-1d24eb58c036aed6.js",revision:"1d24eb58c036aed6"},{url:"/_next/static/chunks/3685.078c73d8f8e1a8ca.js",revision:"078c73d8f8e1a8ca"},{url:"/_next/static/chunks/3702.36bb8235aa3ae823.js",revision:"36bb8235aa3ae823"},{url:"/_next/static/chunks/3978.2172d0f7456c19e9.js",revision:"2172d0f7456c19e9"},{url:"/_next/static/chunks/4008-d0b8c1e4c13f10df.js",revision:"d0b8c1e4c13f10df"},{url:"/_next/static/chunks/4423.6aeaefc4b7fb7662.js",revision:"6aeaefc4b7fb7662"},{url:"/_next/static/chunks/4429.a03d96f570635caf.js",revision:"a03d96f570635caf"},{url:"/_next/static/chunks/4724.b171538c466572bb.js",revision:"b171538c466572bb"},{url:"/_next/static/chunks/4797.1f0b3cffbeed2fdb.js",revision:"1f0b3cffbeed2fdb"},{url:"/_next/static/chunks/5244-15b93a2d8f78596a.js",revision:"15b93a2d8f78596a"},{url:"/_next/static/chunks/5302.2f76d91bd19683a2.js",revision:"2f76d91bd19683a2"},{url:"/_next/static/chunks/5418.aec1456e80967d9a.js",revision:"aec1456e80967d9a"},{url:"/_next/static/chunks/560.e43f6bd212465dce.js",revision:"e43f6bd212465dce"},{url:"/_next/static/chunks/5685.7298fcc3ad7174ec.js",revision:"7298fcc3ad7174ec"},{url:"/_next/static/chunks/5723.426d1ad4597ba41c.js",revision:"426d1ad4597ba41c"},{url:"/_next/static/chunks/5979.ce607c686ba4ed16.js",revision:"ce607c686ba4ed16"},{url:"/_next/static/chunks/6282.515d19849fdb5ed8.js",revision:"515d19849fdb5ed8"},{url:"/_next/static/chunks/6386.faf50f58519cfc68.js",revision:"faf50f58519cfc68"},{url:"/_next/static/chunks/6513-e35b6e032f217ff5.js",revision:"e35b6e032f217ff5"},{url:"/_next/static/chunks/6527.aa364d125df5b040.js",revision:"aa364d125df5b040"},{url:"/_next/static/chunks/6853-69fd77e19f78f8a0.js",revision:"69fd77e19f78f8a0"},{url:"/_next/static/chunks/7215.41d541374e937105.js",revision:"41d541374e937105"},{url:"/_next/static/chunks/7391.a4df1f734a30b682.js",revision:"a4df1f734a30b682"},{url:"/_next/static/chunks/7508-3b1bed2969801a98.js",revision:"3b1bed2969801a98"},{url:"/_next/static/chunks/7845.a6b785ee5a4c739d.js",revision:"a6b785ee5a4c739d"},{url:"/_next/static/chunks/7997.f8fe604d7c28c10a.js",revision:"f8fe604d7c28c10a"},{url:"/_next/static/chunks/8015bd09.2ab540754df934ee.js",revision:"2ab540754df934ee"},{url:"/_next/static/chunks/8021.4ca2912c46fac8cc.js",revision:"4ca2912c46fac8cc"},{url:"/_next/static/chunks/8060.4a9d8ce0b2204bfc.js",revision:"4a9d8ce0b2204bfc"},{url:"/_next/static/chunks/8315.1f3a9d6d284c8e6b.js",revision:"1f3a9d6d284c8e6b"},{url:"/_next/static/chunks/8614.64633d5e61e29bcd.js",revision:"64633d5e61e29bcd"},{url:"/_next/static/chunks/8683.129c2ed4b8884772.js",revision:"129c2ed4b8884772"},{url:"/_next/static/chunks/88013344-0ca2219b7aab20f6.js",revision:"0ca2219b7aab20f6"},{url:"/_next/static/chunks/9198-da9254b5b4fb92ad.js",revision:"da9254b5b4fb92ad"},{url:"/_next/static/chunks/9370.9eb487a032c3dd12.js",revision:"9eb487a032c3dd12"},{url:"/_next/static/chunks/framework-f44ba79936f400b5.js",revision:"f44ba79936f400b5"},{url:"/_next/static/chunks/main-030061fee4cec806.js",revision:"030061fee4cec806"},{url:"/_next/static/chunks/pages/404-a779ec7448b1e2b0.js",revision:"a779ec7448b1e2b0"},{url:"/_next/static/chunks/pages/_error-e18771d792fd8fe7.js",revision:"e18771d792fd8fe7"},{url:"/_next/static/chunks/pages/cfh/cfb-7c6be0146c1c19dc.js",revision:"7c6be0146c1c19dc"},{url:"/_next/static/chunks/pages/contact-us-41e34ade43fe6a74.js",revision:"41e34ade43fe6a74"},{url:"/_next/static/chunks/pages/contract-metadata-uri-cf8862dec2f2525a.js",revision:"cf8862dec2f2525a"},{url:"/_next/static/chunks/pages/create-band-fba9d880df9f826b.js",revision:"fba9d880df9f826b"},{url:"/_next/static/chunks/pages/create-band/confirm-b39bb512556fa1b0.js",revision:"b39bb512556fa1b0"},{url:"/_next/static/chunks/pages/create-nft-af1104b0759756d4.js",revision:"af1104b0759756d4"},{url:"/_next/static/chunks/pages/create-nft/confirm-df7a1ad0de346265.js",revision:"df7a1ad0de346265"},{url:"/_next/static/chunks/pages/create-nft/not-an-artist-66eb2ca6099b43f9.js",revision:"66eb2ca6099b43f9"},{url:"/_next/static/chunks/pages/faq-e013ff9900d9a17e.js",revision:"e013ff9900d9a17e"},{url:"/_next/static/chunks/pages/help-center-bb6858de1dc67da3.js",revision:"bb6858de1dc67da3"},{url:"/_next/static/chunks/pages/help-center/blog/crypto-wallets-mxv-0297249bbe3fcccf.js",revision:"0297249bbe3fcccf"},{url:"/_next/static/chunks/pages/help-center/blog/how-to-create-nft-bffbde1bdbdc8bbc.js",revision:"bffbde1bdbdc8bbc"},{url:"/_next/static/chunks/pages/help-center/blog/how-to-open-account-f23ccdbc7b833f1e.js",revision:"f23ccdbc7b833f1e"},{url:"/_next/static/chunks/pages/help-center/blog/how-to-sell-bde2b792539a8d22.js",revision:"bde2b792539a8d22"},{url:"/_next/static/chunks/pages/help-center/blog/how-to-transact-68582c65d1481f02.js",revision:"68582c65d1481f02"},{url:"/_next/static/chunks/pages/help-center/blog/how-to-verify-cdd1f6fd57a5effa.js",revision:"cdd1f6fd57a5effa"},{url:"/_next/static/chunks/pages/help-center/buying-e0705da06e65ea5d.js",revision:"e0705da06e65ea5d"},{url:"/_next/static/chunks/pages/help-center/creating-676199da96e53127.js",revision:"676199da96e53127"},{url:"/_next/static/chunks/pages/help-center/faq-11cdc1a87d082c12.js",revision:"11cdc1a87d082c12"},{url:"/_next/static/chunks/pages/help-center/getting-started-c0bfbea1e4211bfe.js",revision:"c0bfbea1e4211bfe"},{url:"/_next/static/chunks/pages/help-center/selling-ae99911070be7e12.js",revision:"ae99911070be7e12"},{url:"/_next/static/chunks/pages/index-922fa059ee51bdf4.js",revision:"922fa059ee51bdf4"},{url:"/_next/static/chunks/pages/mxcatalog/explore-78eab0c44d985815.js",revision:"78eab0c44d985815"},{url:"/_next/static/chunks/pages/mxcatalog/new-releases-19910d232bd7a78e.js",revision:"19910d232bd7a78e"},{url:"/_next/static/chunks/pages/mxcatalog/trending-a6e816b8556d8281.js",revision:"a6e816b8556d8281"},{url:"/_next/static/chunks/pages/privacy-policy-f9ed4d1eff602782.js",revision:"f9ed4d1eff602782"},{url:"/_next/static/chunks/pages/profile/%5Busername%5D-4bd745bacd5d00a1.js",revision:"4bd745bacd5d00a1"},{url:"/_next/static/chunks/pages/profile/band/%5Busername%5D-198bae93a1571570.js",revision:"198bae93a1571570"},{url:"/_next/static/chunks/pages/profile/does-not-exist-8cbb4f1dbaabd9d6.js",revision:"8cbb4f1dbaabd9d6"},{url:"/_next/static/chunks/pages/profile/verify-62c2046ee8f0f9c7.js",revision:"62c2046ee8f0f9c7"},{url:"/_next/static/chunks/pages/profile/verify/verification-requested-8a4a6a2b506d5646.js",revision:"8a4a6a2b506d5646"},{url:"/_next/static/chunks/pages/register-c4f6d3c7e35f795e.js",revision:"c4f6d3c7e35f795e"},{url:"/_next/static/chunks/pages/register/artist/basic-details-d8fabbc1e8a9931d.js",revision:"d8fabbc1e8a9931d"},{url:"/_next/static/chunks/pages/register/collector-7ba4834d9354b926.js",revision:"7ba4834d9354b926"},{url:"/_next/static/chunks/pages/register/confirm-email-7335594d956f5eb2.js",revision:"7335594d956f5eb2"},{url:"/_next/static/chunks/pages/report-a-bug-890870a68cf420fc.js",revision:"890870a68cf420fc"},{url:"/_next/static/chunks/pages/settings/account-help-f0b02677d67944d4.js",revision:"f0b02677d67944d4"},{url:"/_next/static/chunks/pages/settings/band-dashboard-101550d89b3108b3.js",revision:"101550d89b3108b3"},{url:"/_next/static/chunks/pages/settings/notifications-settings-93add9a1e65889ac.js",revision:"93add9a1e65889ac"},{url:"/_next/static/chunks/pages/settings/profile-settings-aeec3f2fc8a4e160.js",revision:"aeec3f2fc8a4e160"},{url:"/_next/static/chunks/pages/team-0096d17ce80e01cc.js",revision:"0096d17ce80e01cc"},{url:"/_next/static/chunks/pages/terms-and-conditions-7e2473e3f8340556.js",revision:"7e2473e3f8340556"},{url:"/_next/static/chunks/pages/thank-you-ba3b6afa342554b5.js",revision:"ba3b6afa342554b5"},{url:"/_next/static/chunks/pages/track/polygon/%5BtokenId%5D-c8e63238a946e2d1.js",revision:"c8e63238a946e2d1"},{url:"/_next/static/chunks/pages/trending-4383ecf2df33c364.js",revision:"4383ecf2df33c364"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5fa41cb2aebbfd6c.js",revision:"5fa41cb2aebbfd6c"},{url:"/_next/static/css/01c88d1805148620.css",revision:"01c88d1805148620"},{url:"/_next/static/css/0a13ad160533e4a0.css",revision:"0a13ad160533e4a0"},{url:"/_next/static/css/0bcd0a6c4d594e7a.css",revision:"0bcd0a6c4d594e7a"},{url:"/_next/static/css/117844abeeaacf70.css",revision:"117844abeeaacf70"},{url:"/_next/static/css/22899610eda45df5.css",revision:"22899610eda45df5"},{url:"/_next/static/css/297b3506b40be2df.css",revision:"297b3506b40be2df"},{url:"/_next/static/css/46f05ea696d7ae04.css",revision:"46f05ea696d7ae04"},{url:"/_next/static/css/53b680a44c9418c7.css",revision:"53b680a44c9418c7"},{url:"/_next/static/css/621ef1410f2014ae.css",revision:"621ef1410f2014ae"},{url:"/_next/static/css/6771f4ce4cc7858b.css",revision:"6771f4ce4cc7858b"},{url:"/_next/static/css/6f994b8423032dac.css",revision:"6f994b8423032dac"},{url:"/_next/static/css/8853758d18bc7d13.css",revision:"8853758d18bc7d13"},{url:"/_next/static/css/bbbebecf31550e5f.css",revision:"bbbebecf31550e5f"},{url:"/_next/static/css/be712d5ae2f9b587.css",revision:"be712d5ae2f9b587"},{url:"/_next/static/css/c0869b98168c39aa.css",revision:"c0869b98168c39aa"},{url:"/_next/static/css/d635ba22d8c1c8c4.css",revision:"d635ba22d8c1c8c4"},{url:"/_next/static/css/de022b2f139670c9.css",revision:"de022b2f139670c9"},{url:"/_next/static/css/e88ef0b3c11f7e70.css",revision:"e88ef0b3c11f7e70"},{url:"/_next/static/css/e8e52b2278e39b5c.css",revision:"e8e52b2278e39b5c"},{url:"/_next/static/css/eca644a6590ca63d.css",revision:"eca644a6590ca63d"},{url:"/_next/static/css/f44389be3b01bb61.css",revision:"f44389be3b01bb61"},{url:"/_next/static/media/Artist_grid.1a35b5f4.png",revision:"88e15ac625393dee151619c73c9c613a"},{url:"/_next/static/media/B_Artist.cacb85f2.svg",revision:"00e9b24894e3180bd81e8559b9b066bb"},{url:"/_next/static/media/B_collector.5e2b5d8b.svg",revision:"82fd1516aea50a78385d8a4363fb1846"},{url:"/_next/static/media/Filter.58fea14d.svg",revision:"c1aacb91e8e9098033af67babbd325b3"},{url:"/_next/static/media/MXV_emblem_black.262ba449.png",revision:"898bb6699cfe3879e51feb52b30d89ab"},{url:"/_next/static/media/MXV_emblem_white.953574cb.png",revision:"5d1cb6796cae734beaf995697b849881"},{url:"/_next/static/media/MXVlogo.d779603c.svg",revision:"cf7d824e4c39572b29a8fed975d92894"},{url:"/_next/static/media/W_Artist.b6ea61e5.svg",revision:"56f06a9c9a401e9ce915c2083922d4ad"},{url:"/_next/static/media/W_collector.3bdac40a.svg",revision:"73c1e38db03ae03202ddc3742edb47d6"},{url:"/_next/static/media/amazon_logo_b.df779d96.svg",revision:"be8290a535cbbb756214bbd7d81c0ac5"},{url:"/_next/static/media/amazon_logo_w.9c1e1517.svg",revision:"63ecf03ea587743ae446f0c5763c6766"},{url:"/_next/static/media/apple_logo_b.e1f2560b.svg",revision:"a275f2c48d0e9ded87838634e70c7ea9"},{url:"/_next/static/media/apple_logo_w.54ee1030.svg",revision:"1e7613368de46c2e68170bbd179a1ad7"},{url:"/_next/static/media/bars_1.29b774e8.jpg",revision:"89238d18efb714b45c8084c43892848c"},{url:"/_next/static/media/bars_2.f260f3dc.jpg",revision:"b2a74f712d59b7b3bd973e7961a9f37b"},{url:"/_next/static/media/bars_3.14de15d9.jpg",revision:"d6da7df385593d3521a4ae19318cfca2"},{url:"/_next/static/media/buying_b.1ef34a2c.png",revision:"efc7c19bbc73fe96ba781da020f66eb7"},{url:"/_next/static/media/buying_w.be1b4d8b.png",revision:"b2809f932fb018cfe7bab2fbed1fd098"},{url:"/_next/static/media/cover_d.62a22c53.png",revision:"fdf6a8cf37b14a3a6e331a83747300ae"},{url:"/_next/static/media/cover_m.c38c5496.png",revision:"e735e5aedea184927e14216d9ce4ff82"},{url:"/_next/static/media/create_page.9f21a974.png",revision:"117cf171cf8b6a786120b0076885ec37"},{url:"/_next/static/media/create_page_1.0d93fc1e.png",revision:"d0c0c3b677b40321b8d3ba95a0e9ccc5"},{url:"/_next/static/media/create_page_2.0b2511c2.png",revision:"20b71fc642de43fed9b7636e2feb53a4"},{url:"/_next/static/media/create_page_3.992bf12e.png",revision:"ee54036e57f8a8ba2e16a8d9371a5b3b"},{url:"/_next/static/media/create_tab.909cab34.png",revision:"f55a6db9e5b837c6854a7d2b691d8e96"},{url:"/_next/static/media/creating_b.ac38a219.png",revision:"01c248b95fc254962f8fbc8967c4be13"},{url:"/_next/static/media/creating_w.775ba255.png",revision:"38fe74cf6675b2127fed3626bae04172"},{url:"/_next/static/media/dark_MXV.166c3b02.svg",revision:"4ea1936ebf20f3fce56fb9a951fcbb1b"},{url:"/_next/static/media/dark_black_hole.9c0d423b.svg",revision:"9817529f72f8e57b9ceddc00b6f6d7fd"},{url:"/_next/static/media/discord.27ebf944.svg",revision:"5a47cd0ca957a4ab689bef1bb2965557"},{url:"/_next/static/media/facebook.b96f5885.svg",revision:"141bf41025e0bd1ae9e626aa05d3ae93"},{url:"/_next/static/media/faq_b.6b7bbfbe.png",revision:"294f59abee2d192f6329820eb335795a"},{url:"/_next/static/media/faq_w.f640367b.png",revision:"e5ad909b740cff0b9bc45499550a2ce6"},{url:"/_next/static/media/filter_white.9dffb591.svg",revision:"0963dddcd4b120b3f729d971bbc2821e"},{url:"/_next/static/media/getting-started_b.0e11f964.png",revision:"e37ec3ce78e0c8ddcf60ff52824dc690"},{url:"/_next/static/media/getting-started_w.23cfaada.png",revision:"e2c6bf7797d3c772feb34a52c2c2270a"},{url:"/_next/static/media/harry.adede1be.png",revision:"3b020b988be907b7786f2286e5fbdb83"},{url:"/_next/static/media/instagram.f90dc446.svg",revision:"753fd48b0e7bad1b3cb83355a2806b19"},{url:"/_next/static/media/jatayu.9209ddf0.png",revision:"1e75390a4213c41ce48ccaa7a49f1b5a"},{url:"/_next/static/media/linkedin.9fd9cc2c.svg",revision:"fc9a2279b246debde6836945dcb4de11"},{url:"/_next/static/media/logo-black.ab1ae84f.svg",revision:"e2837ee1d7af49a224bf6a1a6e425924"},{url:"/_next/static/media/logo-white.510d7439.svg",revision:"1d1726efd1ee6088a2a0c1c264fcad5f"},{url:"/_next/static/media/mxv_logo_b.4d4e6836.svg",revision:"a42f8dfcb04338ff728054b443b0bae9"},{url:"/_next/static/media/mxv_logo_w.96997df1.svg",revision:"3cc933b25400937cd541858cd5627ef7"},{url:"/_next/static/media/mxv_tick.5e5807b7.svg",revision:"e07456398c7c5fb9ecc5b67f4388ad2f"},{url:"/_next/static/media/mxv_verified.d2eb2b30.svg",revision:"6d67c764bb28e3a6954747fa2ad403e0"},{url:"/_next/static/media/nftcards.204361e8.svg",revision:"fd28bd5702f7bcdd881049afce7a20e4"},{url:"/_next/static/media/record_b.f9d2a344.svg",revision:"f1685441d62eeff5d23ef4077643c5c8"},{url:"/_next/static/media/record_w.68d9b7cf.svg",revision:"93fb395c03bda2fbe0a9e6f51d786e6a"},{url:"/_next/static/media/sarthak_kalyani.52334350.png",revision:"e412c1ad01e90dce69c8b54bede85885"},{url:"/_next/static/media/sec5_backD.1cc16672.png",revision:"1cc16672"},{url:"/_next/static/media/sec5_backM.ce6ac945.png",revision:"ce6ac945"},{url:"/_next/static/media/sec5_backT.09b31591.png",revision:"09b31591"},{url:"/_next/static/media/section2M.c513fc20.png",revision:"c513fc20"},{url:"/_next/static/media/section2T.802c466f.png",revision:"802c466f"},{url:"/_next/static/media/sectionM.5d543895.png",revision:"5d543895"},{url:"/_next/static/media/sectionT.4ad98766.png",revision:"4ad98766"},{url:"/_next/static/media/selling_b.a853059a.png",revision:"878451d464af2918871ccd02ec1e87f1"},{url:"/_next/static/media/selling_w.cc95723b.png",revision:"6a05a066530bedb69d08644eb0480d3b"},{url:"/_next/static/media/sommaiya.25f3534b.png",revision:"b8021445d1998d972c440fb39671064f"},{url:"/_next/static/media/spotify_logo_b.7c718080.svg",revision:"f53ffb5d69d724d08cc1ea95a109183c"},{url:"/_next/static/media/spotify_logo_w.64742a4f.svg",revision:"e9031f9decb86040b6e13903c10a259b"},{url:"/_next/static/media/submarine_in_space.66b06a13.png",revision:"087601f6e66b9172c74ebbe89dee80db"},{url:"/_next/static/media/success.d83de6f1.svg",revision:"400c0909b74da76f23cdf2d3b14275fd"},{url:"/_next/static/media/telegram.e71b621a.svg",revision:"7d98a857a47ff1f651d820497a74f9df"},{url:"/_next/static/media/trade-success.4bd5c2f7.svg",revision:"30264cfd961c52bf991809417b256609"},{url:"/_next/static/media/traditional_art.73ed6f2c.svg",revision:"6faf0bcccb1be26c65d2e8aca394449f"},{url:"/_next/static/media/traditonal_light.344599a9.svg",revision:"adfea5f548ee310f884b51ef66f1c3cf"},{url:"/_next/static/media/twitter.765dbfab.svg",revision:"1f0f35bb74620d93c67a037ec2f91bcb"},{url:"/_next/static/media/upload-image.6b7f54dd.svg",revision:"b8f62daf75a9fc663690cf762f865cfb"},{url:"/_next/static/media/upload-music.7c8d4faa.svg",revision:"ab829779b6e3135b894b5b76a627922b"},{url:"/_next/static/media/white_MXV.e480e6f9.svg",revision:"9fd3d9c1ce0a8bf587713a4b500a2ef7"},{url:"/_next/static/media/white_black_hole.c8c76059.svg",revision:"c8914ea6b934d7647d811f05088daa48"},{url:"/_next/static/media/youtube.9c3a0a15.svg",revision:"44543ab8d484b6da9ef28e6157b262d8"},{url:"/_next/static/media/youtube_logo_b.85cb20ad.svg",revision:"d6360ee5f46e3fc354834b5588213063"},{url:"/_next/static/media/youtube_logo_w.2f6e4d27.svg",revision:"a5a2c95d825d517e29e5a12f7a37339b"},{url:"/_next/static/rHesYMN37FTOojWeg7wrg/_buildManifest.js",revision:"3d25a75840873c20ba35d7ea8b1df75c"},{url:"/_next/static/rHesYMN37FTOojWeg7wrg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/CFB/Boy_Banner.png",revision:"4b698d857bb45b680b92a4de28ba5ef5"},{url:"/assets/CFB/Girl_Banner.png",revision:"8492860d394123d17cb3c628941c7fef"},{url:"/assets/CFB/circle_dropdown.png",revision:"bd26d9f554d74d074c1273580cdf4b21"},{url:"/assets/CFB/section2D.png",revision:"9ab259f3a89f70d2300d8565aa5bc010"},{url:"/assets/CFB/section2M.png",revision:"defedc2304d8c9f1db25fed150ae980a"},{url:"/assets/CFB/section2T.png",revision:"d25f28bba624069ae7863bb58b394bb7"},{url:"/assets/CFB/section3.png",revision:"a132eb9030f3dc6f48246ca7f1a9a4eb"},{url:"/assets/CFB/section4.png",revision:"fd2f242656106065e57d59d8f76fb77c"},{url:"/assets/CFB/section5_left.png",revision:"17887d6bd2467ce264f5c73465fdb2e8"},{url:"/assets/CFB/section5_right.png",revision:"4d9aaa12fbe96aca35f4aa38cc476db2"},{url:"/assets/CFB/section6.png",revision:"d00d78b6180606861f4b4a46ce8cb918"},{url:"/assets/CFB/sectionD.png",revision:"4b6fa80287e9f6ccf3fb4fd1ed8a4275"},{url:"/assets/CFB/sectionM.png",revision:"c5e6b8a9055f56d24eed279836fd145b"},{url:"/assets/CFB/sectionT.png",revision:"4bdbde7fcff0e805e5a8c2afc690b88b"},{url:"/assets/Catalog/Filter.svg",revision:"c1aacb91e8e9098033af67babbd325b3"},{url:"/assets/Catalog/MXVlogo.svg",revision:"cf7d824e4c39572b29a8fed975d92894"},{url:"/assets/Catalog/filter_white.svg",revision:"0963dddcd4b120b3f729d971bbc2821e"},{url:"/assets/DM_PLACEHOLDER.svg",revision:"755234e398440bce290a418a04f6fffa"},{url:"/assets/Favourite.svg",revision:"8793c3a33d098b234dd003014859c6c6"},{url:"/assets/LM_PLACEHOLDER.svg",revision:"f31774598d2fe38d486a8c0879262080"},{url:"/assets/MINTED.svg",revision:"47674c6c17b00590cb40d4ce07cbce11"},{url:"/assets/MXV_emblem_black.png",revision:"898bb6699cfe3879e51feb52b30d89ab"},{url:"/assets/MXV_emblem_white.png",revision:"5d1cb6796cae734beaf995697b849881"},{url:"/assets/Pause_btn.svg",revision:"6a3eb2a3a1f61a27ec477416944af310"},{url:"/assets/SHARE.svg",revision:"847793cb849f3d54421fcfdd9b69a886"},{url:"/assets/auction.svg",revision:"9f96c4835ade4fcdc840e125e275e55a"},{url:"/assets/blog/create-nft/create_page.png",revision:"117cf171cf8b6a786120b0076885ec37"},{url:"/assets/blog/create-nft/create_page_1.png",revision:"d0c0c3b677b40321b8d3ba95a0e9ccc5"},{url:"/assets/blog/create-nft/create_page_2.png",revision:"20b71fc642de43fed9b7636e2feb53a4"},{url:"/assets/blog/create-nft/create_page_3.png",revision:"ee54036e57f8a8ba2e16a8d9371a5b3b"},{url:"/assets/blog/create-nft/create_tab.png",revision:"f55a6db9e5b837c6854a7d2b691d8e96"},{url:"/assets/create-nft/astronaut.png",revision:"60a36e118ab92fd2f7d74e6a3b120f7b"},{url:"/assets/create-nft/pexels-D.png",revision:"6cb9481ab50aacea6c0b6720a3b2cd62"},{url:"/assets/create-nft/pexels-M.png",revision:"85d392b6e57d87c39c115a60e4bc9493"},{url:"/assets/create-nft/pexels-T.png",revision:"d9174fe079b87671e7098c5ad4097fda"},{url:"/assets/create-nft/upload-image.svg",revision:"b8f62daf75a9fc663690cf762f865cfb"},{url:"/assets/create-nft/upload-music.svg",revision:"ab829779b6e3135b894b5b76a627922b"},{url:"/assets/dashboard/plus.png",revision:"255ca93784e6f406104078d6b962b4cb"},{url:"/assets/dashboard/plus.svg",revision:"9205b8452e0927a8a9727c696d3593f1"},{url:"/assets/help-center/buying_b.png",revision:"efc7c19bbc73fe96ba781da020f66eb7"},{url:"/assets/help-center/buying_w.png",revision:"b2809f932fb018cfe7bab2fbed1fd098"},{url:"/assets/help-center/creating_b.png",revision:"01c248b95fc254962f8fbc8967c4be13"},{url:"/assets/help-center/creating_w.png",revision:"38fe74cf6675b2127fed3626bae04172"},{url:"/assets/help-center/faq_b.png",revision:"294f59abee2d192f6329820eb335795a"},{url:"/assets/help-center/faq_w.png",revision:"e5ad909b740cff0b9bc45499550a2ce6"},{url:"/assets/help-center/getting-started_b.png",revision:"e37ec3ce78e0c8ddcf60ff52824dc690"},{url:"/assets/help-center/getting-started_w.png",revision:"e2c6bf7797d3c772feb34a52c2c2270a"},{url:"/assets/help-center/selling_b.png",revision:"878451d464af2918871ccd02ec1e87f1"},{url:"/assets/help-center/selling_w.png",revision:"6a05a066530bedb69d08644eb0480d3b"},{url:"/assets/homepage/Artist_grid.png",revision:"88e15ac625393dee151619c73c9c613a"},{url:"/assets/homepage/artist.svg",revision:"1b7728ea1320de4ad8c0defd0185d2c4"},{url:"/assets/homepage/bars_1.jpg",revision:"89238d18efb714b45c8084c43892848c"},{url:"/assets/homepage/bars_2.jpg",revision:"b2a74f712d59b7b3bd973e7961a9f37b"},{url:"/assets/homepage/bars_3.jpg",revision:"d6da7df385593d3521a4ae19318cfca2"},{url:"/assets/homepage/circle_dropdown1.png",revision:"ecaceb263b0f67be8640ff533cee4c29"},{url:"/assets/homepage/circle_dropdown2.png",revision:"242d00ce927cad5f39ea5519f14c0e7f"},{url:"/assets/homepage/cnt_bg.svg",revision:"863e78bcd1d5c4b98eb821463e438529"},{url:"/assets/homepage/countdown_bg.svg",revision:"9964180879069430b9d8287f5684daf4"},{url:"/assets/homepage/dark_video.mp4",revision:"4ff2ced776aa758ce54b495b05840b26"},{url:"/assets/homepage/dark_video_mobile.mp4",revision:"bedb85b926ba4111be4f029f7b6e56d1"},{url:"/assets/homepage/desk.png",revision:"6821b0ef7141a7bc1ded3063c16f3f6f"},{url:"/assets/homepage/dropdown_arrow_red.svg",revision:"d1dee8cf02da19247d7003d9ef8d9045"},{url:"/assets/homepage/footer.jpg",revision:"35758be69e27d1eb2f754d4944e1fb91"},{url:"/assets/homepage/heroBG.svg",revision:"471e4dadfa74714059186b468459b77a"},{url:"/assets/homepage/homepage_desktop.png",revision:"45d0d0cee683a64abd6e781bec907555"},{url:"/assets/homepage/light_video.mp4",revision:"6df59e7fcb8b3fa7bbf0457675e518fb"},{url:"/assets/homepage/light_video_layered.mp4",revision:"559d63abbb95e058f8bb4d470052d57a"},{url:"/assets/homepage/light_video_mobile.mp4",revision:"ffbe06428cbad3849598d160278c375e"},{url:"/assets/homepage/light_video_slowed.mp4",revision:"f7b28c09455467eabf3e4562485f46c3"},{url:"/assets/homepage/mxv_logo_b.svg",revision:"a42f8dfcb04338ff728054b443b0bae9"},{url:"/assets/homepage/mxv_logo_w.svg",revision:"3cc933b25400937cd541858cd5627ef7"},{url:"/assets/homepage/newOne.svg",revision:"de2f9f073beffdca4a0883ccd6fe86a3"},{url:"/assets/homepage/new_tradition.svg",revision:"de2f9f073beffdca4a0883ccd6fe86a3"},{url:"/assets/homepage/sec5_backD.png",revision:"a24e00b3e163ab20072b931739c17ba8"},{url:"/assets/homepage/sec5_backM.png",revision:"393e0df6ffbc41c69a9fdd636feb9de1"},{url:"/assets/homepage/sec5_backT.png",revision:"e4e232859dab882dc494540a8eccc7f3"},{url:"/assets/homepage/traditional.svg",revision:"de2f9f073beffdca4a0883ccd6fe86a3"},{url:"/assets/homepage/traditionalLayer.svg",revision:"e2f27fb3ddc0ee4a3b50742cfd686082"},{url:"/assets/homepage/traditional_art.png",revision:"e53cbd6660f6d69ee8248c7876de3a1b"},{url:"/assets/homepage/traditional_art.svg",revision:"6faf0bcccb1be26c65d2e8aca394449f"},{url:"/assets/homepage/traditonal_light.svg",revision:"adfea5f548ee310f884b51ef66f1c3cf"},{url:"/assets/logos/amazon_logo_b.svg",revision:"be8290a535cbbb756214bbd7d81c0ac5"},{url:"/assets/logos/amazon_logo_w.svg",revision:"63ecf03ea587743ae446f0c5763c6766"},{url:"/assets/logos/apple_logo_b.svg",revision:"a275f2c48d0e9ded87838634e70c7ea9"},{url:"/assets/logos/apple_logo_w.svg",revision:"1e7613368de46c2e68170bbd179a1ad7"},{url:"/assets/logos/spotify_logo_b.svg",revision:"f53ffb5d69d724d08cc1ea95a109183c"},{url:"/assets/logos/spotify_logo_w.svg",revision:"e9031f9decb86040b6e13903c10a259b"},{url:"/assets/logos/youtube_logo_b.svg",revision:"d6360ee5f46e3fc354834b5588213063"},{url:"/assets/logos/youtube_logo_w.svg",revision:"a5a2c95d825d517e29e5a12f7a37339b"},{url:"/assets/magic.svg",revision:"9d0295a649cec62e7564c5d8df36e5cf"},{url:"/assets/matic-logo.svg",revision:"1087d3d671ac2ca5eeea49c18e1175bf"},{url:"/assets/metamask.png",revision:"7c917aa5d769ed3dc8da3a78c99b99b3"},{url:"/assets/music.svg",revision:"796f71144841b52f22c4b7e52e809267"},{url:"/assets/music_record.png",revision:"72e33f541d1c8b523f43052170dbd809"},{url:"/assets/mxv_tick.svg",revision:"e07456398c7c5fb9ecc5b67f4388ad2f"},{url:"/assets/mxv_verified.svg",revision:"6d67c764bb28e3a6954747fa2ad403e0"},{url:"/assets/new-homepage/cover_d.png",revision:"fdf6a8cf37b14a3a6e331a83747300ae"},{url:"/assets/new-homepage/cover_m.png",revision:"e735e5aedea184927e14216d9ce4ff82"},{url:"/assets/new-homepage/harry.png",revision:"3b020b988be907b7786f2286e5fbdb83"},{url:"/assets/new-homepage/jatayu.png",revision:"1e75390a4213c41ce48ccaa7a49f1b5a"},{url:"/assets/new-homepage/sarthak_kalyani.png",revision:"e412c1ad01e90dce69c8b54bede85885"},{url:"/assets/new-homepage/sommaiya.png",revision:"b8021445d1998d972c440fb39671064f"},{url:"/assets/new-homepage/submarine_in_space.png",revision:"087601f6e66b9172c74ebbe89dee80db"},{url:"/assets/nft_bg.jpg",revision:"21910eb3332e5fd0c1d8ca7c606d3851"},{url:"/assets/nftcard/nftcards.svg",revision:"fd28bd5702f7bcdd881049afce7a20e4"},{url:"/assets/no-nfts.svg",revision:"ab829779b6e3135b894b5b76a627922b"},{url:"/assets/profile/no-nfts.svg",revision:"f6d83be32ef1850a6f4b1b85e9630fb7"},{url:"/assets/record_b.svg",revision:"f1685441d62eeff5d23ef4077643c5c8"},{url:"/assets/record_w.svg",revision:"93fb395c03bda2fbe0a9e6f51d786e6a"},{url:"/assets/registration/B_Artist.svg",revision:"00e9b24894e3180bd81e8559b9b066bb"},{url:"/assets/registration/B_collector.svg",revision:"82fd1516aea50a78385d8a4363fb1846"},{url:"/assets/registration/W_Artist.svg",revision:"56f06a9c9a401e9ce915c2083922d4ad"},{url:"/assets/registration/W_collector.svg",revision:"73c1e38db03ae03202ddc3742edb47d6"},{url:"/assets/registration/dark_MXV.svg",revision:"4ea1936ebf20f3fce56fb9a951fcbb1b"},{url:"/assets/registration/dark_black_hole.svg",revision:"9817529f72f8e57b9ceddc00b6f6d7fd"},{url:"/assets/registration/white_MXV.svg",revision:"9fd3d9c1ce0a8bf587713a4b500a2ef7"},{url:"/assets/registration/white_black_hole.svg",revision:"c8914ea6b934d7647d811f05088daa48"},{url:"/assets/social/discord.svg",revision:"5a47cd0ca957a4ab689bef1bb2965557"},{url:"/assets/social/facebook.svg",revision:"141bf41025e0bd1ae9e626aa05d3ae93"},{url:"/assets/social/instagram.svg",revision:"753fd48b0e7bad1b3cb83355a2806b19"},{url:"/assets/social/linkedin.svg",revision:"fc9a2279b246debde6836945dcb4de11"},{url:"/assets/social/reddit.svg",revision:"e589b9ec39b0d3e3562036fdec18fa71"},{url:"/assets/social/telegram.svg",revision:"7d98a857a47ff1f651d820497a74f9df"},{url:"/assets/social/twitter.svg",revision:"1f0f35bb74620d93c67a037ec2f91bcb"},{url:"/assets/social/youtube.svg",revision:"44543ab8d484b6da9ef28e6157b262d8"},{url:"/assets/success-failure-modals/error.svg",revision:"057914b02898162791efd7737abcff5f"},{url:"/assets/success-failure-modals/success.svg",revision:"400c0909b74da76f23cdf2d3b14275fd"},{url:"/assets/success-failure-modals/trade-success.svg",revision:"30264cfd961c52bf991809417b256609"},{url:"/assets/teampage/Ayush.jpg",revision:"577d63b8bbe58176315fc052416e9c05"},{url:"/assets/teampage/Pushpit.JPG",revision:"64521a0f885a15eecd478d68b26d0fe0"},{url:"/assets/teampage/ShivamT.jpg",revision:"f82d57e0e688386785afed65ecadaa3d"},{url:"/assets/teampage/Sparsh.JPG",revision:"d4a85345348b177db8865b0eeef9185b"},{url:"/assets/video.png",revision:"6b79acb419500b2c643ae2d83c87efba"},{url:"/assets/walletconnect.png",revision:"a0d0b29c181d120219ebe9aa0b807279"},{url:"/favicon.ico",revision:"76f4e80d3d2a9d48476c35cb0395e369"},{url:"/icon-192x192.png",revision:"115b7d4a8fe08feeb0b32a9c8071ee5b"},{url:"/icon-256x256.png",revision:"59b4b3d0a1304ee4546e2f0b98f7e64d"},{url:"/icon-384x384.png",revision:"9b7e1a94e41cb4117d4647cd22bb8fc7"},{url:"/icon-512x512.png",revision:"6cfb580602cecc2b7e0050c59cfdef19"},{url:"/logo-black.svg",revision:"e2837ee1d7af49a224bf6a1a6e425924"},{url:"/logo-white.svg",revision:"1d1726efd1ee6088a2a0c1c264fcad5f"},{url:"/manifest.json",revision:"3a0963d71b7410324216c6d3d45d3c16"},{url:"/nav-icon-1.png",revision:"ac36e193b50ea285ad460e10eb726f6e"},{url:"/nav-icon-2.png",revision:"2db5ea74c26490883a60ea7d43d1b172"},{url:"/robots.txt",revision:"7e9969453970dfc891fb931c65826fc1"},{url:"/sitemap-0.xml",revision:"e3c871e8b6c4eec6f7623015a73402e1"},{url:"/sitemap.xml",revision:"914f06b1eaa590a5417d89eda0b490c4"},{url:"/sounds/TeamPage/Ayush.mp3",revision:"433fc0effc6211ab9c7da3982103fdab"},{url:"/sounds/TeamPage/Pushpit.mp3",revision:"3b83744d4432d0dbfa96648957dc6797"},{url:"/sounds/TeamPage/Shivam.mp3",revision:"726a8ea1bb45f880ad38752a7ed4dab0"},{url:"/sounds/TeamPage/Sparsh.mp3",revision:"4737a962269b8d7b314527dce259bbce"},{url:"/sounds/TeamPage/Yuvraj.mp3",revision:"868115cc20fb586a88b5656cb256507a"},{url:"/sounds/rengoku.mp3",revision:"859e504aff2e6cfdefea4460cc135b2d"},{url:"/theme.js",revision:"ced4ca1a1c37c6fb6c1e366515485b6a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
