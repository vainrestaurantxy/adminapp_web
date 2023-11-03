'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "bd4ed44d46035e533b68dc0081f29573",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5549133c1aef46868c8c3b34243dffdf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59aa586c5e1d7d4eb689d10390458639",
".git/logs/refs/heads/main": "d7551372bad29f2efbfef6f30a36a258",
".git/logs/refs/remotes/origin/main": "aa29f2829ec77cbb651fec79a748e5d0",
".git/objects/00/ff23a61d06457479bbd6d5aca5d904aaf776ef": "6f721b6c84fa70c850d06145aa592dd9",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/04/b8bd1e3ab3e4fab47a2daf09a923dd328dc1e9": "8dbeea1e4ed1ce9fe13d428772bd26d1",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1d/93ee18d806ac6b2ffa14ea7279e46aa948a9e1": "e0ba74fd776b7be1773b1e7fc5d9dc51",
".git/objects/21/b52c74feb4c01569e7c87672fe3573142cedac": "83606b2fb9ce30b64f05aa9e3a7f4874",
".git/objects/24/963a0c393601c7753be738dd8aafde37b3bb84": "5be1fa7eede09bbdb2d6197ea0b9eb5c",
".git/objects/25/58200142c56b256fa295a6b24ab639fb9b1ae7": "cd43beabfc79bd6ec74490f23af1e31f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/a8c183672224a2a974203d635821695a41c11a": "6edb36c3c39b3aab76a56e4e22cf6a2f",
".git/objects/3b/819e8c701dad4115380ae20efa54b41117ada4": "fa989d94652cb7718f60d93aa1d2bbd2",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/e37b6c4cd6121d214459fa1801d009513d4872": "c667dd9018eb43726c7f649680e606c1",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/40/112ce6a78ae59d48a064a602b2470efce97499": "dbbeb54e6401dfd12d5264065a9c5b0e",
".git/objects/43/13a7cae50249082e750daec413381a29ac1e3b": "f1f48f34f7854ef7d1465f346c4937af",
".git/objects/45/76e6837a45d86baf6514267ddbe4cd90488445": "2ab52daee69afaa412d3e1fed6e70318",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/607183010e57893c33ba5de00fa350549557f2": "c0517553dcb561d81e205ff1fbeda7a1",
".git/objects/47/914a32fb83630dac884aeeb2ad90e9ab92c6e2": "5c3fc6038c22b2d133e6e63a8cc666b8",
".git/objects/47/df998bea8dbb80b2410db25eaf3e2985de307e": "d4d463cb483e6f612390746c0a6eba60",
".git/objects/4c/33195d94ff827e9b52c31467bed23a2751c59e": "694a328086be387b88bcff0a33691710",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/ed1209e4dba8d6f376beedb2edaa0d7dcf0d64": "5675c390c879b45d4f3efc0e3707f910",
".git/objects/5b/ad8661ef072e2756f03a5d5e476cd89ae33c5c": "64c42a267fa50dcd9492de6e40470437",
".git/objects/5d/48e701336da9fd039169a3d45994bfb45186a5": "408cf50d679e3498fc4eefc20fead608",
".git/objects/5f/63e1e7ae5cdc33c34bcdab0caa910b15efe371": "d8a57eda036bb2063a1e49ec76931087",
".git/objects/67/721b5efbf3d00ae855a339775ace157025c0c3": "80c079dc02134f2c92bf0f05d5bb6746",
".git/objects/70/de950a5211e30ba2d22dc04211f7172c52cb49": "248588bbd4e05eebdf6e8babb3a26d77",
".git/objects/73/7f77a1e113d61bb5e3b03b37fbdd792bebad00": "c9f32414819b0d4e0f13c9c186f02d65",
".git/objects/78/9f4b2426acb2a7f7de8a1e23857c1c14c42d60": "fdd984456166f0bd31f283143edcb5a6",
".git/objects/79/7a28f625015713c80e4c202121d49cbeaf6697": "ac52f8b37b1824ffbf637170dcaf22ba",
".git/objects/7b/83e61a43ca59a5c2c551cf95d77bc173f40ae1": "24dd83c49a6986f5fa9aa36ac0f91f4e",
".git/objects/80/eab613554bbc0e5d9abbdb0cca537f5cde1a09": "2c23b48c6e2cf0ea7eaa32af415e58f6",
".git/objects/81/0bc6924fdc24f8201bb4f17dacd9d0d3f9304b": "addaf10e4dfa87e175c0e91c55e24514",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/5a4dd4aa5bc09dd8f3709b9c6f0e9cb90d6376": "6c6875224ddedc8c488f0cd95ca94059",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/348c4fd0fc2a6ec7febe881ca018840eb51d8c": "ff77d9ebdbfddb4a04b23ede5c12c7eb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/3634f0771fd55dd49d8184e18260fcd71afef2": "21a515596c2b595e6f1583fbddb5eb64",
".git/objects/8d/fb50e381244546952c214f4a7b1850eb934c9f": "99d732a1ae604b8ebd689ae030117f74",
".git/objects/8e/0db8a6a32e08e46c13254f531ab717b66ccf7c": "9c628fe1618c7b72534a1c0dcfcfb067",
".git/objects/90/22836ccb87dbfc31e1425166ad927bff3e83b1": "177ca4c2e732eb1c34fe829fcc4e370b",
".git/objects/90/eb298661b0f14bffd88991df3c2532694a4640": "5404eafe4dfd47fb348eb4605685303e",
".git/objects/94/0a553cde98aad965c0362ec0a9621c8f67e5b9": "2fa4929ae0e25f6a9b413182077c22fc",
".git/objects/94/7f03454b5ef134ffd757e27a740ff4fcc6434d": "7f58dda73ae55e96b1e869df69e58f47",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/4ff81ab0672d52e6a4a5ad7f1762270aceaa1b": "5e98001a3a41ab651325c570c10148b4",
".git/objects/9a/baec27709d1af746f0ee41571f54024df34373": "d0ad2a5f109a6a25a89ed94c8a5b7df7",
".git/objects/9d/6fdbdd96b355408ee776167b084f63cc870e7b": "dcedbfee98c1635fee8e89cc5575455d",
".git/objects/a1/20a508240df7cfb5a754ed1f9cca8e8cacf7ae": "97c3b0e8ff848743ddf0fae5cbcf6f5f",
".git/objects/a5/161a99419d55ee04892ec727565b3d55ef0aa2": "c2461a8044fbe046943535dfeb1c4b28",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b2/6b4dbe189d07c0dbefd344c4aca2d89afe1661": "ccebfa2beb3f35de16115d46de5094e2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b2042ccb407b8b0dbddaaa76929faf13516648": "2f337e054054fa7b13405ff2343a3366",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/1f01567b144ddbc603cf4ff6b24c0fe0359cf4": "33c5a77f31fb308675849a229c5dfa8d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/5139663542ac3399448d804ae074796ba79e35": "e18b6cfc5f5c400ba448d9ea960eca93",
".git/objects/cb/80e3c170c08ffd97334836a9388b93a8776607": "e2d66e598507aedb210a9b4bdf80f526",
".git/objects/ce/20c69c09e74795b033a6448e1b235cc4b5b00b": "dd567a4e9e59d970a49adb0824bd72e0",
".git/objects/d1/ad5d2c0844a78c2d540a71496cb3d2268ffe8d": "d6386f1cc853e743f28d9bff11c73c42",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/7f9699e48cabb32e5d7fc083332d37e46244ae": "f041eec607ac0092056eb67be37d6c75",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/35295a2058314bfb86ef7b1c6150a2915c593a": "2134d8ee94736ad751e31e49a9318d6c",
".git/objects/ed/553da67e6c0245727be92eafd61a30576a266b": "631b45a7186b4c2f60d524d10d322b36",
".git/objects/ee/1005c28f8b114690e0efd28b711206639fe0ae": "f90ef96e6003bf778b5d7f5cce761ce0",
".git/objects/ee/9e421b60096cd7821a3240b7c752052b9beb4d": "4ac105ff3013b9903e68a49957560adc",
".git/objects/ef/da7fdac27b2695a7a48805bc05ff6a1dcf5c44": "cdca8141bd05475ae4255543a4794cc9",
".git/objects/f1/ee682a9a7970f5cbcafe3e37e64c00d5faa3f6": "129f9e50b3bdfbb3e4d65929ce2cb3a2",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/1200ee8f9672a0bc6173c3db44369e1cf193ce": "a4c90b2a5222efa7544e423b0f06487a",
".git/refs/heads/main": "44a4a46c0b782ba6e6ba7c887b2828ae",
".git/refs/remotes/origin/main": "44a4a46c0b782ba6e6ba7c887b2828ae",
"assets/AssetManifest.bin": "5c683be00117057ec1c5babb59459169",
"assets/AssetManifest.json": "6df928449f067cf4997985379b961265",
"assets/assets/add.png": "9ecd6b9d2b238da3123ea1424eea1277",
"assets/assets/add.svg": "854fe52ffd1213ebdfa339d93626beab",
"assets/assets/authImage.png": "74dcd0faa4137796fa9d4aac9ebb7123",
"assets/assets/bestseller.svg": "692c2d518a4c54264b2ac260425bcb66",
"assets/assets/burger.jpg": "2fe8c42988eee64fe9a722f48002de2b",
"assets/assets/cart.svg": "c53ab12076fad3257691a083301f11b6",
"assets/assets/club%2520icon.png": "653137be26030425b603d34e19a1ae27",
"assets/assets/data_usage.svg": "3d2acae2ff82df7f49e3da91cc708bc6",
"assets/assets/download.svg": "cc70bd7e50819c5a7628323738e4b04f",
"assets/assets/drinks.svg": "512499acfc1993eb1146c0c29e2f28e3",
"assets/assets/fastfood.png": "0c659629ac9e31caa034dffd48eb6588",
"assets/assets/fastfood.svg": "52505b440ad829bebdfbdd7e9e8f037d",
"assets/assets/fastfoodwhite.png": "c101330c7514c124c7135f6c99e1f2b1",
"assets/assets/geass.png": "cc4e67ff5feb30c4caf6bb0c5e217646",
"assets/assets/Icon.png": "2709266ed28c5daaac503aca08436c1e",
"assets/assets/Logo%2520Feast.jpg": "3ea14a012ed1451aca8a10973e27e06d",
"assets/assets/Logo%2520Feast.png": "73d3e088fffa940d01816e419a4dfe07",
"assets/assets/logo.svg": "7748a7d5f2603f3d5da7eb757d695a83",
"assets/assets/new.svg": "da9006cea9ff2ad75e910e33dee8f150",
"assets/assets/non-veg.svg": "d0f1e3e2e56bc42f01bccd0d5e51d892",
"assets/assets/qr_code.png": "9ccdcf369f1773ac459e2785f3a0a3bf",
"assets/assets/qr_code.svg": "fe2ee0a478a8ac3ed25f4391e3621256",
"assets/assets/recommend.svg": "99f4490239a194df12f76ad2cceaa4ec",
"assets/assets/Restaurant%2520icon.png": "9844406f85da94e4e5dddb5370aea2a3",
"assets/assets/restaurant.png": "3f29fbb8b1d65e984cd7a7103350e8cc",
"assets/assets/restaurant.svg": "162631d1e4eaf17c464ddeb62f964297",
"assets/assets/restaurantIcon.png": "6318936342097020e25ab9ac6db6a5f3",
"assets/assets/Small%2520with%2520Black%2520BG.png": "e76afe768effcf0c1ab13e03cd32bc30",
"assets/assets/Smallwith%2520White%2520BG.png": "85cadb1052a077a5f1c00b034ecd647e",
"assets/assets/Splash.png": "3f66a2c4f9183faf0820d8d12cff8302",
"assets/assets/taj.png": "64a96f7a022c95d37481826507ebad33",
"assets/assets/timelapse.svg": "641c73535a148fbccd5ee4c8dc36d309",
"assets/assets/vain_icon_png.png": "0de6c0ec3034224351818f6b870f05cf",
"assets/assets/Vector.png": "347d69ee7693f9b7fe990a75b35d3a5a",
"assets/assets/veg.svg": "d4ad344ff0dc0fc75f075b642f51b9e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1a4ba1c0c8cfa6ca87c8c56de1f68fc9",
"assets/NOTICES": "a76a2991ebf9fcc9d7a15736dd46efb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49f9bcf3cb0995673dc4253e9311f65e",
"/": "49f9bcf3cb0995673dc4253e9311f65e",
"main.dart.js": "f70faaba860e6ac33a60c1f86128246c",
"manifest.json": "85762cede2556a524566057c61206351",
"splash/img/dark-1x.png": "7c5400f9083af98f2befe292cc950ca6",
"splash/img/dark-2x.png": "ac5a3ff084978143fe0ce7b41d9290b4",
"splash/img/dark-3x.png": "dca1960a598de65c6ced1f63602fc058",
"splash/img/dark-4x.png": "5a6f265ab5508344be2147709675578b",
"splash/img/light-1x.png": "7c5400f9083af98f2befe292cc950ca6",
"splash/img/light-2x.png": "ac5a3ff084978143fe0ce7b41d9290b4",
"splash/img/light-3x.png": "dca1960a598de65c6ced1f63602fc058",
"splash/img/light-4x.png": "5a6f265ab5508344be2147709675578b",
"version.json": "41182acee4ff5ebb2565195623bfdc7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
