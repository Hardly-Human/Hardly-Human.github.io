/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["audio/1.mp3","a69b96ff48942e9712f3f378df64f9d7"],["audio/2.mp3","a1e3b9dd85651b136e5717135a0ecc1e"],["css/colors.css","6bf19bd984e5055eef446f8cc2347923"],["css/font/xcon.eot","535d41caf99a3bd491862729ec3acb44"],["css/font/xcon.svg","34912f8e8da7ded1af9ee598ec56bbdf"],["css/font/xcon.ttf","440e3bfb15ac931a37a58b40bb412e78"],["css/font/xcon.woff","bf40ac74031643c2d8093996641afe26"],["css/font/xcon.woff2","6624449b98dee8611d101d536eb23d13"],["css/plugins.css","9db54d321f6a2ddaf7a843a9af691495"],["css/style.css","0271300f1a721e3d40c669c7d2d6f9d5"],["gallary/gallary.html","df8eccab6e3685bf97b762ce4d2665fa"],["gallary/img/Github-Poster-2.gif","2985dd3c785d157bcb4c4b794af50150"],["gallary/img/Github-Poster.gif","a108391f36440b3748aa127624704118"],["gallary/img/Safar-Logo.png","6627174297cf1d6722d34a1102b2df6d"],["gallary/img/Skate-Board-Wireframe.png","0e57058f6420c0e3d88840bf950a4e7e"],["gallary/img/ideatic-studio.png","89ebc0eb9e6bbd77c03c49be41622996"],["gallary/img/skate-1.png","071749dc954a053b34f5d69aca5b9723"],["gallary/img/skate-2.png","a5f3f5773e2e0f522557fcbdf767a532"],["gallary/img/suchi.png","f2bcebab26d9f4ce373e6b8188eafaca"],["gallary/img/tower-side.png","4afeb430e1ec13bd97d375f846988dea"],["gallary/img/tower-top.png","3975a3b3acfae60e3bbf16299fdc0f6e"],["gallary/img/tower.png","e0b63d4eae756022dd20cf1ec100ee32"],["gallary/img/tree-on-island.png","84ef4eb97948264571fbfef1aa8b94f5"],["gallary/script.js","2a87fea869bb48d6bb119dbd20a0e2a6"],["gallary/style.css","b5c3e04a51d51a0002333a76857a8124"],["img/about/2.m4v","36bc3e2cc137dd91678b858275db1202"],["img/about/4.png","62a703e6c75aa3f3639d91e78c518964"],["img/hero/1.jpg","90e7745896356c68fc434e399999cd42"],["img/logo/apple-touch-icon.png","5b711f19aef8c1a1c5e7a3ccaf431a65"],["img/logo/dark.png","46bbff6b4b1d33e26ea275a1dde5d31c"],["img/logo/favicon-16x16.png","79ff67c3554210ffeb53107df550816f"],["img/logo/favicon-32x32.png","b0f327c6ee444d140379f52b478d4a27"],["img/logo/logo.png","a8a5b46f2d9834ce2dcae9059cfcf43a"],["img/news/1.webp","c280c91b74555137cb9617867af6b234"],["img/news/2.jpg","bea420bb0ae7d15b798d05cd45457388"],["img/news/3.webp","489e0efbbfa4419df9eed7864697be1b"],["img/portfolio/1-1.png","466d8aef6fb4dee87d64405ee8993b77"],["img/portfolio/1-2.png","65916d193b22dfcddba137edcdf40d4c"],["img/portfolio/1-3.png","d4579a67b5940ad70df022593806f99e"],["img/portfolio/1.png","1a09a0c24ee289c7a4aa1e7aeb36aa31"],["img/portfolio/2.jpg","fb5f2117f89b349c06547cb2043c5fb7"],["img/portfolio/3-1.png","048378d48e50f64c3cebf4f0b32cb2a4"],["img/portfolio/3-2.png","975376fb6688fb118139c5b208bd12e8"],["img/portfolio/3-3.png","a5670158790c6e492a391b5542056b3e"],["img/portfolio/3.png","32a0da1be4fa51a718580868c193673e"],["img/portfolio/4-1.png","3f337c744a9cc05eab759f86c7a51a42"],["img/portfolio/4-2.png","5e90f3e86552f567fb28a5eb8c3bd418"],["img/portfolio/4-3.png","906826c2f81e37afd39a0145bc4386ac"],["img/portfolio/4.png","84246046a4aa3eb4317b058e61690db8"],["img/portfolio/5-1.png","3bac5f4b92a90593d7f03d54f181c123"],["img/portfolio/5-2.png","460193668f8d43a2a12f2487a60069e1"],["img/portfolio/5-3.png","4035ca605b5dd9df4b220cffc8b28955"],["img/portfolio/5.png","e38d06674ea40e065fab977d54e92c99"],["img/portfolio/6-1.png","3107633ef045f4de2570afcde6d306fc"],["img/portfolio/6-2.png","82a0d9152f2c12390f0866c6750939dc"],["img/portfolio/6-3.png","86ab5bb257b9011029b35bbc27f2031d"],["img/portfolio/6.png","cf2c6685da1a8f96cbf734be8d95294a"],["img/portfolio/7.jpg","e61e9d1d90a618f31298e76ccefb7855"],["img/portfolio/8.jpg","39ead5ff26879c71b7994e1af69f570b"],["img/portfolio/9.jpg","25e42d1c6e762022d41b58263d925557"],["img/sign.png","57ae66c09859fc7d6ff9d82f04f5a81b"],["img/svg/arrow.svg","88501d187fb4f7a7ab4e6f55eac89c72"],["img/svg/award.svg","8f7241b1a1b312f33157bc332dd7f2f2"],["img/svg/azure.svg","24acfdbbfb55c4b60f8d197615374d07"],["img/svg/cancel.svg","e3741d9b2ef1808d3e4cab1a1ab29ca8"],["img/svg/check.svg","0e529f0153eb822697c94ba54114ec84"],["img/svg/code.svg","e4c25de42623633b3496afca3ce01e06"],["img/svg/design.svg","d403568eb4af6d7e90df9a0aec06133f"],["img/svg/email-2.svg","cfd494d4bc6d15112d90b170c9ac6e61"],["img/svg/email.svg","795ea9774c61434ac710408ba8626894"],["img/svg/error.svg","49cbfff07c67b122f00bebbd001a3f4d"],["img/svg/firebase.svg","10b0719343408095f5a9b369e0787115"],["img/svg/graphql.svg","32bc428f67abce6b369e0d6cf224f28a"],["img/svg/heroku.svg","d23db15dd40ea8057b5a858902c3f8ac"],["img/svg/html.svg","4de36d22ea8c41bbb6a8034659a2a7f8"],["img/svg/js.svg","891a71b9a98f1d58491e1b06c4d356a2"],["img/svg/location-2.svg","4b0ff2f316d7dd9a40e222619ddddcd9"],["img/svg/location.svg","6719431d6075f3639ff5bd84a5a34b79"],["img/svg/mongodb.svg","ce756188f8cec48ed678bf47355ccf48"],["img/svg/node.svg","a1f7b38fecbcef723829df8d9bb14fb6"],["img/svg/opencv.svg","b743cccacd7f19072deb5a41d148b984"],["img/svg/python.svg","f390e9e61d9d01bddab4da5c909a86cf"],["img/svg/quote.svg","99cab4f8dc4fd32bf183ab76b4cb72dd"],["img/svg/react.svg","c3fbd71b12b726e00eec2b59f3c76786"],["img/svg/setting.svg","7c9f5af4ec73ac7bb2ebda5f6eb63f6b"],["img/svg/social/github.svg","76d344f08412543c74ccd1fb2493d607"],["img/svg/social/gmail.svg","d3bc903cc9299df003ce3103bad39c34"],["img/svg/social/instagram.svg","8712a6da822d7a6be90af80e62aa91c4"],["img/svg/social/linkedin.svg","5b238434e2862c877f08572b96c0ef7b"],["img/svg/star.svg","de8c08097b8ef169d02328aa71db28ed"],["img/svg/streamlit.svg","a9e88a93d3e95a60aa71dfbba9818163"],["img/svg/telephone-2.svg","8b2f97f7283bdeb39650b0f5a7a065bd"],["img/svg/telephone.svg","873e1e07aebe849fac8a4f0c9c919ecf"],["img/svg/tools.svg","aac7ac63100ec1a9f85e6eb2785035fd"],["img/svg/vue.svg","60dfaadbbd65a730821eb0e7b5974020"],["img/thumbs/1-1.jpg","55a8bfe07b83ed4d0648ef12190e5a19"],["img/thumbs/3-4.jpg","5d5411cf8d575f357ea11f55a3375f64"],["img/thumbs/4-2.jpg","4c7513a88730a63a3eca007812e01bce"],["img/thumbs/4-3.jpg","1e4f1e646f3476cfe4ede54741180e9a"],["index.html","3c07fa216f7639181050d493a643c3fb"],["js/ie8.js","247ff1a8d21b99db239dd5089fe6a25e"],["js/init.js","e52a23d11adacceed165e85778cc3fc3"],["js/jquery.js","3e4bb227fb55271bfe9c9d4a09147bd8"],["js/modernizr.custom.js","6a35dc92d10c9ff9a47bb49ffb6d8790"],["js/plugins.js","ee03f25b0fe82aae7cd58c0c7ac941a7"],["manifest.json","4f37f768ffc5110b953e53beececd56e"],["report_issue/css/main.css","1a215e93d88579348896f3bfa2be88ed"],["report_issue/css/util.css","68d7a5d3f1f433014505f462004c3fdf"],["report_issue/fonts/font-awesome-4.7.0/css/font-awesome.min.css","2b14376a44dccacfa3d562a865192f14"],["report_issue/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["report_issue/fonts/montserrat/Montserrat-Bold.ttf","88932dadc42e1bba93b21a76de60ef7a"],["report_issue/fonts/montserrat/Montserrat-ExtraBold.ttf","9bc77c3bca968c7490de95d1532d0e87"],["report_issue/images/img-01.png","1b86629637ca8767c40ca957cb01db9b"],["report_issue/js/main.js","f1e0c3b07a045510e2b70705f702f546"],["report_issue/report_issue.html","997db00f66eac8ae18cb3e4247fe948b"],["report_issue/vendor/animate/animate.css","fcf5440e171d57c7583df04804936364"],["report_issue/vendor/bootstrap/css/bootstrap.css","73ebea8b29662ef6f626ac5a7ab420cd"],["report_issue/vendor/bootstrap/css/bootstrap.min.css","f21ba28e2f2a82c4cac1f5a8bec44273"],["report_issue/vendor/bootstrap/css/dist/css/bootstrap.css","3cde6455f47ec3815768b4b380be2ffd"],["report_issue/vendor/bootstrap/js/bootstrap.min.js","2b58e3a5d7ff7e82c553e342cd44fa1c"],["report_issue/vendor/bootstrap/js/popper.js","ec2cd287870e6576cf4f4fd4cb5938e1"],["report_issue/vendor/css-hamburgers/hamburgers.min.css","edd8539896bbee50f5db4c447533f473"],["report_issue/vendor/jquery/jquery-3.2.1.min.js","d157dbff4c8d0679bc8f88226cedb21a"],["report_issue/vendor/scss/_alert.scss","38826458da73d0aed70521beed5bd609"],["report_issue/vendor/scss/_badge.scss","3a25066b878fd9034d65473e93f2b8fd"],["report_issue/vendor/scss/_breadcrumb.scss","fffcaca5b679bac3d2fa06c6e5006205"],["report_issue/vendor/scss/_button-group.scss","05a1044d7112192844729b0b6ea77689"],["report_issue/vendor/scss/_buttons.scss","7802c52ae248255d3e4b8daa75d23a30"],["report_issue/vendor/scss/_card.scss","31e3a1f028b3229c159e40fe1463e8c1"],["report_issue/vendor/scss/_carousel.scss","7ca7e74d36bc62a0b00511ac24aa6514"],["report_issue/vendor/scss/_close.scss","7f6d6785c596922afb912902368f67e3"],["report_issue/vendor/scss/_code.scss","72930a32f8214aa3ae570945bbcc0f95"],["report_issue/vendor/scss/_custom-forms.scss","55615b63e513cb7f22225863b746fd4e"],["report_issue/vendor/scss/_dropdown.scss","bf30b93d0d14833c05f182f092a91867"],["report_issue/vendor/scss/_forms.scss","66f3a28b8a334b5ff8672c64d750676e"],["report_issue/vendor/scss/_functions.scss","a07d1d17bc064b9e920c290834724d2e"],["report_issue/vendor/scss/_grid.scss","ca66160cea8185d7a0414ce7b7f47c72"],["report_issue/vendor/scss/_images.scss","119039a319fba4096d353a8845b425c7"],["report_issue/vendor/scss/_input-group.scss","52e6956c6738f72db81e61211c3260f5"],["report_issue/vendor/scss/_jumbotron.scss","0627d645ad22487d0ccdd96077b3385d"],["report_issue/vendor/scss/_list-group.scss","d7c65e90c67cf94c0949af63035f5a5e"],["report_issue/vendor/scss/_media.scss","fd70be1ba6c723312f81fc138b625d29"],["report_issue/vendor/scss/_modal.scss","831261576da7f36fbf824b7bc289c34b"],["report_issue/vendor/scss/_nav.scss","813ad6220ce02024d5e8b0b4b999bb4a"],["report_issue/vendor/scss/_navbar.scss","d7c1a2569c6b03542a5243783bf39d46"],["report_issue/vendor/scss/_pagination.scss","12664f50d77e19990cdcd1879614fb52"],["report_issue/vendor/scss/_popover.scss","dcc28b4a999492d46e7a2a30e5952c8c"],["report_issue/vendor/scss/_print.scss","4c58b4c3ba1184c021bd582434d4dd99"],["report_issue/vendor/scss/_progress.scss","658b3edad1bdaed6b7ddb9e3d6159ca3"],["report_issue/vendor/scss/_reboot.scss","5daf17c37892d0f48222dfea2710328b"],["report_issue/vendor/scss/_tables.scss","5a79ec1fa9b306577c2c9101f08e5923"],["report_issue/vendor/scss/_tooltip.scss","55fb92facda1a4eaa25d5ea9ec7d0d47"],["report_issue/vendor/scss/_transitions.scss","7db6f51d25bec833f3285ef65f88c5b6"],["report_issue/vendor/scss/_type.scss","2fd2d7bcf868ca17131a174ab74f138a"],["report_issue/vendor/scss/bootstrap.scss","20a8e3e18c881803519a17c72af01a7d"],["report_issue/vendor/scss/mixins/_alert.scss","81e410bd92dbd1a6714863475e04f117"],["report_issue/vendor/scss/mixins/_background-variant.scss","352123a035a7da707d7a0e0756651e3f"],["report_issue/vendor/scss/mixins/_badge.scss","a596a5d8671aa1c0823295e161c562b2"],["report_issue/vendor/scss/mixins/_border-radius.scss","13665b84311398a5190515af476ab011"],["report_issue/vendor/scss/mixins/_breakpoints.scss","3b3e39f445d1c1560e2610b8dc8cf477"],["report_issue/vendor/scss/mixins/_buttons.scss","9329206bdbf842024e3d44f22f772198"],["report_issue/vendor/scss/mixins/_clearfix.scss","541c52c9050ab489febf1d800ae5cd1b"],["report_issue/vendor/scss/mixins/_float.scss","73776b1b7d83e9d85678db136f968104"],["report_issue/vendor/scss/mixins/_forms.scss","ec066c58c2ef5571c0284d2f6f9b9de7"],["report_issue/vendor/scss/mixins/_gradients.scss","9aa9f5d5853df4a647df182399a946a0"],["report_issue/vendor/scss/mixins/_grid-framework.scss","7abde95daec48d99ee3274aba7d2e66a"],["report_issue/vendor/scss/mixins/_grid.scss","81992e3f66e8ac7e51b55b70dd1102fc"],["report_issue/vendor/scss/mixins/_hover.scss","0fe2691e72583fb445928c29382153eb"],["report_issue/vendor/scss/mixins/_image.scss","979b70e9ffe06c87339906b01cee1436"],["report_issue/vendor/scss/mixins/_list-group.scss","07355ea4553582f87346b6de40affe6a"],["report_issue/vendor/scss/mixins/_lists.scss","449f7d444d400fb8dddaa05c9e2af616"],["report_issue/vendor/scss/mixins/_nav-divider.scss","ee3052f2617b3016dd0e27cf7ab1b73d"],["report_issue/vendor/scss/mixins/_pagination.scss","3ac1c1f2261930c40bf53a81720e4885"],["report_issue/vendor/scss/mixins/_reset-text.scss","42965512c08a7246b19c88a9d24909c7"],["report_issue/vendor/scss/mixins/_screen-reader.scss","55488e385c791ed8051aeca308cf8ec1"],["report_issue/vendor/scss/mixins/_table-row.scss","3b78c3ed5e82af380fa4aafc593d1ae2"],["report_issue/vendor/scss/mixins/_text-emphasis.scss","1c1d406510a91a7c04efdd7431f6b147"],["report_issue/vendor/scss/mixins/_text-hide.scss","dd4d220992c5bd2792a0ecd72ac254a4"],["report_issue/vendor/scss/mixins/_text-truncate.scss","4a797376a5aac19a7bd4b1e712807356"],["report_issue/vendor/scss/mixins/_transition.scss","79bcf7e316a7fb1bbcdf5d9297b25606"],["report_issue/vendor/scss/mixins/_visibility.scss","b99a73a39a3ff4f01c4c381ccdcface0"],["report_issue/vendor/scss/utilities/_align.scss","94bfc6e58d347457b5886dd1eda122ac"],["report_issue/vendor/scss/utilities/_background.scss","8ddf930b36744c4672973672b16a16cf"],["report_issue/vendor/scss/utilities/_borders.scss","f80b07fc3f2db1de7372e18945771f54"],["report_issue/vendor/scss/utilities/_display.scss","01dc5e45b4534dd0ac322469b56594d4"],["report_issue/vendor/scss/utilities/_embed.scss","bbd95904811dfd391e7b47e6fcc52c4f"],["report_issue/vendor/scss/utilities/_flex.scss","f6d8e41a4c834985557d236a9450222a"],["report_issue/vendor/scss/utilities/_float.scss","1996d3988babf230fba525579e26349f"],["report_issue/vendor/scss/utilities/_position.scss","336801c7d2d1518398b65ed0b2f475c6"],["report_issue/vendor/scss/utilities/_screenreaders.scss","6427e693b4aaec650ca9f30b0930f47a"],["report_issue/vendor/scss/utilities/_sizing.scss","f82e5566a923d396ff891304234cab52"],["report_issue/vendor/scss/utilities/_spacing.scss","30638e7ba55b3c42eb57be4bf3b51adc"],["report_issue/vendor/scss/utilities/_text.scss","7328582d68b8d3ec2a676a958068576b"],["report_issue/vendor/scss/utilities/_visibility.scss","b80235cede212fa2382788b279af9e8b"],["report_issue/vendor/select2/select2.min.css","38bd5a5f654bf56918bbdb044ea8a23a"],["report_issue/vendor/select2/select2.min.js","0efd91533f5fdb36ce2ff8d87803e6d4"],["report_issue/vendor/tilt/tilt.jquery.min.js","976ae19cf3b24aeb694b0ba069978a4c"],["serviceWorker.js","c4f453f97126e3487657e8b528b8ce12"],["video/1-1.m4v","9755e1db24c69a8f60a5e6bf7dc3429b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







