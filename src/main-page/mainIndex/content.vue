<style src="@/main-page/css/prod.css" scoped></style>
<script setup lang="ts">
// import "@/main-page/css/prod.css"
</script>

<template>
  <header class="bg-bl-grad-1">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex mr-14">
        <a  class="-m-1.5 p-1.5">
          <span class="sr-only">BitLaunch</span>
          <img class="h-10 w-auto" src="@/main-page/images/logo_full_white.svg" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button id="mmenubtn" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
          <span class="sr-only">Open main menu</span>
          <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:gap-x-2 lg:flex">

        <a  class="text-sm font-semibold leading-6 text-white py-1 px-4 text-center hover:bg-purple-500 hover:rounded">
          <RouterLink to="/newsGuides">News & Guides</RouterLink>
        </a>
        <a class="text-sm font-semibold leading-6 text-white py-1 px-4 text-center hover:bg-purple-500 hover:rounded">

          <RouterLink to="/helpCenter"> Help Center</RouterLink>

        </a>
        <a class="text-sm font-semibold leading-6 text-white py-1 px-4 text-center hover:bg-purple-500 hover:rounded">

          <RouterLink to="/developers"> Developers
          </RouterLink>
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-2 lg:flex-1 items-center lg:justify-end">
        <a  class="text-base font-bold leading-6 text-white py-2 px-4 text-center hover:bg-purple-500 hover:rounded">
          <router-link to="/login">Login</router-link>
        </a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div id="mmenu" class="hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="https://bitlaunch.io" class="-m-1.5 p-1.5">
            <span class="sr-only">BitLaunch</span>
            <img class="h-8 w-auto" src="@/main-page/images/logo_full_black.svg" alt="">
          </a>
          <button id="mmenuclose" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="https://bitlaunch.io/blog/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">News &amp; Guides</a>
              <a href="https://help.bitlaunch.io/en/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Help Center</a>
              <a href="https://developers.bitlaunch.io/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Developers</a>
            </div>
            <div class="py-6">
              <a href="https://app.bitlaunch.io/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Login</a>
              <a href="https://app.bitlaunch.io/signup" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Start Free</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="w-screen bg-gradient-to-b from-bl-grad-1 via-bl-grad-2 to-bl-grad-3 pb-60 md:pb-96">
    <div class="container mx-auto pt-28 lg:pt-36 text-center max-w-screen-xl">
      <p class="m-auto text-white lg:text-3xl text-2xl">Simple, Fast, Secure</p>
      <h1 class="m-auto text-white font-black lg:text-6xl/tight text-3xl py-5 max-w-3xl">
        Cloud VPS, Billed Hourly. Pay With Cryptocurrency.
      </h1>
      <p class="m-auto text-white lg:text-xl text-base pb-16 max-w-3xl px-3 lg:px-0">
        Instantly launch servers from <strong>BitLaunch</strong>, <strong>DigitalOcean</strong>, <strong>Vultr</strong>, and <strong>Linode</strong>.
        Choose a <strong>Windows RDP</strong> or <strong>Linux VPS</strong> and use one of our many one-click apps.
        All backed by our expert support.
      </p>
      <a href="https://app.bitlaunch.io/signup" class="bg-white hover:bg-slate-200 text-base font-semibold py-3 px-7 rounded">
        Start Free Trial
      </a>
    </div>
  </div>
  <div class="container mx-auto max-w-screen-lg px-10 lg:px-0 -mt-40 md:-mt-80 pb-20">
    <video class="m-auto shadow-2xl shadow-black rounded-lg" preload="auto" loop="" muted="" poster="@/main-page/images/demo_dark.jpg" autoplay="" playsinline="">
      <source type="video/mp4" src="@/main-page/images/demo_dark.mp4">
    </video>
  </div>
  <div class="container mx-auto max-w-screen-xl">
    <p class="text-center text-2xl pb-16">Trusted by <strong>100,000+</strong> customers since 2017.</p>
    <div class="flex flex-wrap flex-row text-center">
      <div class="basis-full md:basis-1/3 pb-24">
        <p class="text-6xl font-black pb-5">27</p>
        <p class="text-xl">Global Datacenter Locations</p>
      </div>
      <div class="basis-full md:basis-1/3 pb-24">
        <p class="text-6xl font-black pb-5">99.9%</p>
        <p class="text-xl">Average Network Uptime</p>
      </div>
      <div class="basis-full md:basis-1/3 pb-24">
        <p class="text-6xl font-black pb-5">700+</p>
        <p class="text-xl">Server Launches per Day</p>
      </div>
    </div>
  </div>
  <div class="w-screen py-24 bg-gray-50">
    <div class="container mx-auto max-w-screen-xl">
      <h1 class="m-auto text-center font-black text-4xl/tight lg:text-5xl/tight max-w-3xl pb-4">All the Features,<br>None of the Hassle.</h1>
      <p class="m-auto text-center text-md lg:text-lg max-w-3xl pb-12 px-3 lg:px-0">
        Save time and energy with our simple-to-use in-house cloud hosting platform. We don’t use off-the-shelf solutions, even for our payment system, allowing us to deliver our customers unparalleled simplicity and security.
      </p>
      <div class="flex flex-wrap flex-row text-center">
        <div class="basis-full lg:basis-1/3 p-5">
          <div class="h-[515px] bg-white text-center shadow-lg shadow-gray-100 rounded-lg px-10 py-10">
            <h5 class="font-bold text-3xl pb-4">
              One-Click Privacy Applications
            </h5>
            <p class="m-auto text-sm pb-10 max-w-lg">
              Instant automatic setup - use one-click apps for OpenVPN, WireGuard, Outline, and Shadowsocks R for privacy, or host with LAMP/LEMP, WordPress, and more.
            </p>
            <svg class="m-auto" width="186px" height="200px" viewBox="0 0 186 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-411.000000, -2391.000000)">
                  <g transform="translate(411.000000, 2393.000000)">
                    <circle id="Oval" fill="#E4E7EA" fill-rule="nonzero" cx="51.5" cy="120.5" r="51.5"></circle>
                    <rect id="Rectangle" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" x="22" y="109" width="149" height="87"></rect>
                    <path d="M22,91 C22,67.25 55.3599083,34 96.5,34 C137.640092,34 171,67.402 171,91 L22,91 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <rect id="Rectangle" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" x="22" y="92" width="149" height="17"></rect>
                    <polygon id="Rectangle" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(154.767597, 22.232111) rotate(45.000000) translate(-154.767597, -22.232111) " points="136.157746 9.40100861 173.377447 9.40100861 173.377447 35.063213 136.157746 35.063213"></polygon>
                    <polyline id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="149.05988 49 156 42.1497326 134.610778 21 118 37.4331551"></polyline>
                    <rect id="Rectangle" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" x="66" y="135" width="31" height="61"></rect>
                    <rect id="Rectangle" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" x="97" y="135" width="31" height="61"></rect>
                    <line x1="9" y1="196" x2="184" y2="196" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <path d="M76,91 C76.4706719,79.8184008 85.5095328,71 96.5,71 C107.490467,71 116.529328,79.8184008 117,91" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <line x1="15" y1="39" x2="15" y2="39" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="51" y1="14" x2="51" y2="14" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="184" y1="65" x2="184" y2="65" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="112" y1="157" x2="112" y2="162" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="81" y1="157" x2="81" y2="162" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="basis-full lg:basis-1/3 p-5">
          <div class="h-[515px] bg-white text-center shadow-lg shadow-gray-100 rounded-lg p-10">
            <h5 class="font-bold text-3xl pb-4">
              Advanced DDoS Protection
            </h5>
            <p class="m-auto text-sm pb-10 max-w-lg">
              BitLaunch provides industry-leading, stateful, high capacity DDoS Attack protection. Included for free with all BitLaunch servers and some of our partner providers.
            </p>
            <svg class="m-auto" width="196px" height="202px" viewBox="0 0 196 202" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-868.000000, -2398.000000)">
                  <g transform="translate(869.000000, 2399.000000)">
                    <circle id="Oval" fill="#E4E7EA" fill-rule="nonzero" cx="71.3541667" cy="95.3125" r="48.4375"></circle>
                    <line x1="7.29166667" y1="76.0416667" x2="7.29166667" y2="76.0416667" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="46.875" y1="11.4583333" x2="46.875" y2="11.4583333" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="148.958333" y1="13.5416667" x2="148.958333" y2="13.5416667" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="135.416667" y1="142.708333" x2="135.416667" y2="142.708333" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <path d="M65.3439651,157.982776 L56.2841786,179.610803 C55.9980262,180.17778 55.5444484,180.643336 54.984767,180.944531 C54.2919089,181.291184 53.4886064,181.345167 52.75549,181.094341 C52.0223735,180.843515 51.4209776,180.308934 51.0865321,179.610803 L42.0267456,157.982776 L42.0267456,157.982776 L20.3698854,148.971098 C19.3773483,148.477249 18.75,147.465138 18.75,146.357711 C18.75,145.250284 19.3773483,144.238173 20.3698854,143.744325 L42.0267456,134.6966 L42.0267456,134.6966 L51.0865321,113.068573 C51.3412203,112.488466 51.805064,112.02524 52.3859437,111.770891 C53.0743505,111.421758 53.8740909,111.362489 54.6065599,111.60632 C55.3390289,111.850151 55.9432123,112.376772 56.2841786,113.068573 L65.3078703,134.6966 L65.3078703,134.6966 L86.9647305,143.744325 C87.9347653,144.256238 88.5416667,145.262029 88.5416667,146.357711 C88.5416667,147.453393 87.9347653,148.459184 86.9647305,148.971098 L65.3078703,157.982776 L65.3439651,157.982776 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M148.720085,185.106486 L144.106838,196.032188 C143.954373,196.329351 143.71306,196.571289 143.416667,196.724149 C143.065779,196.898056 142.659751,196.92267 142.29052,196.792419 C141.921289,196.662167 141.620091,196.388068 141.455128,196.032188 L136.84188,185.106486 L136.84188,185.106486 L125.83547,180.481272 C125.339165,180.211554 125.021589,179.699346 125,179.133769 C125.026951,178.579142 125.344832,178.080299 125.83547,177.822685 L136.732906,173.197471 L136.732906,173.197471 L141.455128,162.271768 C141.607575,161.983526 141.849988,161.753276 142.145299,161.616226 C142.491696,161.439857 142.894114,161.409916 143.262683,161.533091 C143.631251,161.656266 143.935268,161.922296 144.106838,162.271768 L148.720085,173.197471 L148.720085,173.197471 L159.617521,177.822685 C160.089144,178.094826 160.390263,178.588844 160.416667,179.133769 C160.389271,179.687898 160.090022,180.192487 159.617521,180.481272 L148.720085,185.070067 L148.720085,185.106486 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M181.944444,135.152257 L177.316958,146.060444 C177.177847,146.34567 176.946919,146.576115 176.661094,146.714935 C175.926454,147.084727 175.030471,146.79211 174.657064,146.060444 L170.066015,135.152257 L170.066015,135.152257 L159.171382,130.498098 C158.692437,130.209267 158.380913,129.70917 158.333333,129.152755 C158.374962,128.594385 158.688047,128.091781 159.171382,127.807412 L170.102452,123.225973 L170.102452,123.225973 L174.729938,112.317787 C174.964862,111.794855 175.485607,111.458333 176.059885,111.458333 C176.634163,111.458333 177.154908,111.794855 177.389832,112.317787 L181.980881,123.225973 L181.980881,123.225973 L192.911951,127.843772 C193.395287,128.128142 193.708372,128.630746 193.75,129.189115 C193.709228,129.738387 193.394269,130.230334 192.911951,130.498098 L181.980881,135.115897 L181.944444,135.152257 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M34.0895809,45.5862075 L29.4595313,56.4783112 C29.3203434,56.7631171 29.0892868,56.9932225 28.8033038,57.1318375 C28.0682569,57.5010848 27.1717773,57.2088992 26.7981642,56.4783112 L22.2045717,45.5862075 L22.2045717,45.5862075 L11.2674466,41.0115239 C10.7476372,40.7643923 10.4166667,40.2417984 10.4166667,39.6681644 C10.4166667,39.0945305 10.7476372,38.5719366 11.2674466,38.324805 L22.2045717,33.7501214 L22.2045717,33.7501214 L26.8346213,22.8580176 C26.9364994,22.5055236 27.1717557,22.2061558 27.4908488,22.0229564 C28.2273377,21.6743085 29.1089832,21.9616593 29.4959884,22.6764826 L34.0895809,33.5685863 L34.0895809,33.5685863 L45.026706,38.1432699 C45.5234388,38.4089924 45.8333333,38.9250916 45.8333333,39.4866294 C45.8333333,40.0481672 45.5234388,40.5642664 45.026706,40.8299888 L34.0895809,45.4046724 L34.0895809,45.5862075 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <line x1="122.916667" y1="113.541667" x2="186.458333" y2="72.9166667" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5"></line>
                    <line x1="86.4583333" y1="78.125" x2="130.208333" y2="7.29166667" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5"></line>
                    <line x1="106.25" y1="91.6666667" x2="190.625" y2="11.4583333" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5"></line>
                    <path d="M53.6458333,200 C83.273609,200 107.291667,175.981942 107.291667,146.354167 C107.291667,116.726391 83.273609,92.7083333 53.6458333,92.7083333 C24.0180577,92.7083333 0,116.726391 0,146.354167 C0,175.981942 24.0180577,200 53.6458333,200 Z" id="Oval" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5"></path>
                    <line x1="79.1666667" y1="0" x2="65.625" y2="71.875" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5"></line>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="basis-full lg:basis-1/3 p-5">
          <div class="h-[515px] bg-white text-center shadow-lg shadow-gray-100 rounded-lg p-10">
            <h5 class="font-bold text-3xl pb-4">
              Choose Linux or Windows
            </h5>
            <p class="m-auto text-sm pb-10 max-w-lg">
              BitLaunch offers a huge range of operating systems, from Linux to Windows Desktop and Server. If you want a graphical experience, launch Ubuntu Desktop or a Windows RDP.
            </p>
            <svg class="m-auto" width="207px" height="202px" viewBox="0 0 207 202" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1305.000000, -2398.000000)">
                  <g transform="translate(1306.000000, 2399.000000)">
                    <circle id="Oval" fill="#E4E7EA" fill-rule="nonzero" cx="154.6875" cy="105.729167" r="50.5208333"></circle>
                    <path d="M44.4562943,24.4433509 L49.1777014,35.5978706 C49.3349792,35.9012564 49.5839095,36.1482619 49.8896596,36.3043235 C50.2516235,36.4818721 50.67047,36.5070019 51.0513564,36.3740226 C51.4322428,36.2410433 51.7429491,35.9612039 51.9131197,35.5978706 L56.6719982,24.4433509 L56.6719982,24.4433509 L67.9134435,19.7584527 C68.42693,19.4977641 68.75,18.9736525 68.75,18.4013195 C68.75,17.8289865 68.42693,17.3048748 67.9134435,17.0441862 L56.6719982,12.3221063 L56.6719982,12.3221063 L51.9131197,0.832951025 C51.7476438,0.557857389 51.5158704,0.327876172 51.238633,0.163679846 C50.4831337,-0.214463513 49.56171,0.0847615182 49.1777014,0.832951025 L44.4188229,11.9874707 L44.4188229,11.9874707 L33.1773776,16.7095507 C32.6384698,16.9492766 32.2916667,17.4806667 32.2916667,18.0666839 C32.2916667,18.652701 32.6384698,19.1840911 33.1773776,19.4238171 L44.4188229,24.1458971 L44.4188229,24.1458971 L44.4562943,24.4433509 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M176.67249,187.891429 L181.438718,199.158634 C181.581999,199.453248 181.819852,199.691278 182.114246,199.834667 C182.870912,200.21663 183.793759,199.914382 184.17836,199.158634 L188.907059,187.891429 L188.907059,187.891429 L200.165864,183.159203 C200.700962,182.90356 201.041667,182.36297 201.041667,181.769581 C201.041667,181.176192 200.700962,180.635601 200.165864,180.379959 L188.907059,175.647733 L188.907059,175.647733 L184.17836,164.380527 C184.020859,164.083275 183.770407,163.845828 183.465303,163.704495 C183.107419,163.522613 182.691656,163.491736 182.310865,163.618761 C181.930075,163.745786 181.615977,164.020131 181.438718,164.380527 L176.67249,175.647733 L176.67249,175.647733 L165.413685,180.379959 C164.902342,180.654832 164.583333,181.188705 164.583333,181.769581 C164.583333,182.350457 164.902342,182.884329 165.413685,183.159203 L176.67249,187.891429 L176.67249,187.891429 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <line x1="17.7083333" y1="32.2916667" x2="17.7083333" y2="32.2916667" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="129.166667" y1="188.541667" x2="129.166667" y2="188.541667" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="179.166667" y1="14.5833333" x2="179.166667" y2="14.5833333" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="13.5416667" y1="192.708333" x2="13.5416667" y2="192.708333" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <path d="M25.4937538,113.295783 C21.7815658,123.143637 22.0901618,134.063487 26.3525384,143.684382 C38.4875384,168.527344 79.4478308,171.674868 117.794431,150.691371 C141.691046,137.651627 158.866738,118.279363 165.625,99.5815686 M153.751369,54.6169326 C135.642215,42.7387746 103.904523,44.3125369 73.7723846,60.8370406 C67.8367462,64.1124524 62.179573,67.8721762 56.8580615,72.0781996 M61.9734308,147.76867 C59.6656629,148.992691 56.9560719,149.203888 54.4876484,148.352144 C52.0192249,147.500401 50.0120058,145.661641 48.9423077,143.272206 C47.0420006,139.370152 47.7241107,134.69754 50.6598769,131.50646 C51.3715189,130.728154 52.2036637,130.070206 53.1242154,129.557992 C55.4063934,128.310758 58.1009564,128.066229 60.5690668,128.88238 C63.0371773,129.698531 65.0590525,131.502684 66.1553384,133.867103 C67.5187459,136.734889 67.5187459,140.067186 66.1553384,142.934972 C65.3125586,144.953682 63.8467964,146.647897 61.9734308,147.76867 L61.9734308,147.76867 Z" id="Shape" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M47.9166667,119.606503 C48.1406287,104.680076 61.1304279,86.768363 81.5109748,75.7601227 C106.706706,62.0278093 133.768787,64.0801931 141.570132,80.3499991 C149.371477,96.6198051 135.597811,120.912566 110.40208,134.644879 C100.262556,140.405296 88.8414786,143.53555 77.1810417,143.75" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <ellipse id="Oval" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(95.879445, 105.297564) rotate(-30.210000) translate(-95.879445, -105.297564) " cx="95.8794452" cy="105.297564" rx="19.6239209" ry="12.386201"></ellipse>
                    <path d="M48.9583333,56.3478928 C55.5572743,51.3963969 62.5090291,46.9348029 69.7579694,42.9988127 C122.410549,14.2440716 178.610643,18.5441954 195.302631,52.6086547 C207.588233,77.6615501 195.003893,111.838186 166.549094,139.583333" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M130.208333,166.466626 C77.5717896,195.084787 21.388812,190.805088 4.70190767,156.90243 C-3.84686433,139.560345 -0.375092295,117.789703 12.1680841,96.875" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M40.6257966,67.2882615 C40.8128283,67.5830442 40.9624537,67.9146748 41.1494854,68.2463053 C44.6844716,75.3642676 42.0199514,83.9630991 35.0522515,87.9230513 C31.5537251,89.8410769 27.3661492,90.1115721 23.643317,88.6600081 C20.3544755,87.3589678 17.6835235,84.8857594 16.1620485,81.7326144 C12.6009989,74.6255895 15.2524957,66.0159666 22.221876,62.0558684 C28.7754096,58.5358085 36.9842207,60.8696442 40.6257966,67.2882615 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M174.911887,69.8984638 C177.454507,74.7280301 175.568347,80.6127458 170.630304,83.2567621 C169.457622,83.8896445 168.151382,84.2637793 166.807462,84.3517046 C162.816422,84.6221397 159.062973,82.5184327 157.365042,79.0594826 C155.136474,74.7598992 156.327423,69.5598215 160.232174,66.5406402 C160.690915,66.2486555 161.149656,65.9201728 161.646625,65.6646862 C163.980885,64.476574 166.724158,64.2571371 169.232948,65.0578494 C171.741738,65.8585616 173.795286,67.6089654 174.911887,69.8984638 L174.911887,69.8984638 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M157.203331,151.148464 C159.746452,155.97803 157.85992,161.862746 152.920904,164.506762 C151.747992,165.139645 150.441494,165.513779 149.097309,165.601705 C145.105483,165.87214 141.351295,163.768433 139.65303,160.309483 C137.429677,156.020952 138.621331,150.833989 142.520726,147.827138 L143.935456,146.914686 C146.270176,145.726574 149.01399,145.507137 151.523273,146.307849 C154.032557,147.108562 156.08651,148.858965 157.203331,151.148464 L157.203331,151.148464 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-screen py-24">
    <div class="container mx-auto max-w-screen-xl">
      <h1 class="m-auto text-center font-black text-4xl/tight lg:text-5xl/tight max-w-2xl pb-4">
        Enhance Your Global Presence. Easily.
      </h1>
      <p class="m-auto text-center text-md lg:text-lg max-w-3xl pb-16 px-3 lg:px-0">
        Deploy your application to one (or many) of our datacenter locations via BitLaunch or our partner hosting providers. Mix providers and locations to improve redundancy and resiliency, all managed under our simple-to-use platform.
      </p>
      <svg class="m-auto mb-10" width="267px" height="61px" viewBox="0 0 267 61" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-840.000000, -3130.000000)" fill-rule="nonzero">
            <g transform="translate(840.000000, 3130.000000)">
              <g id="linode-logo" transform="translate(219.000000, 1.000000)">
                <path d="M40.8571428,31.6475538 L40.2024784,39.4675273 L38.0420856,37.9035326 L38.3039514,33.959546 L38.3039514,33.8915462 L38.3039514,33.8235465 L38.2384849,33.7555467 L38.1730185,33.6875469 L33.5249006,30.4915578 L33.5903671,27.0235695 L40.8571428,31.6475538 L40.8571428,31.6475538 Z M29.4659808,40.147525 L26.127192,37.495534 L26.127192,38.107532 C26.127192,38.2435315 26.0617255,38.379531 25.9962591,38.4475308 L23.508534,40.2155248 L26.2581249,42.527517 L26.3235913,42.5955168 L26.3235913,42.7315163 L26.4545242,45.4515072 L29.5314473,48.1034983 L29.4659808,40.147525 L29.4659808,40.147525 Z M8.45125089,43.5475135 L10.0224456,51.3674869 L16.503624,58.5074629 L15.3906944,50.6194895 L8.45125089,43.5475135 Z M14.5396306,44.7035098 L12.9684358,33.7555467 L5.112462,26.9555697 L7.20738836,37.5635338 L14.5396306,44.7035098 Z M12.0519055,27.0235695 L9.89151274,11.519622 L0.857142857,5.67164181 L3.80313304,20.2915923 L12.0519055,27.0235695 L12.0519055,27.0235695 Z" id="Shape" fill="#004712"></path>
                <path d="M47.1428571,27.3220769 L46.1650114,34.7340518 L40.819455,39.2220367 L41.4713522,31.6060625 L47.1428571,27.3220769 Z M30.1283422,40.0380339 L30.193532,48.0620066 L37.0384518,42.350026 L37.4947797,34.5300526 L30.1283422,40.0380339 L30.1283422,40.0380339 Z M25.6954418,43.3020228 L16.0473644,50.5099983 L17.2207792,58.8059701 L25.9562007,51.5299951 L25.6954418,43.3020228 Z M25.434683,37.8620413 L24.978355,26.9820781 L13.7005347,33.7140553 L15.2650878,45.002017 L25.434683,37.8620413 L25.434683,37.8620413 Z M24.7175961,20.6580995 L24.1308887,5.97014928 L10.5714286,11.4101308 L12.7878788,27.1860774 L24.7175961,20.6580995 L24.7175961,20.6580995 Z" id="Shape" fill="#00B259"></path>
                <path d="M48,26.6211605 C48,26.5529011 48,26.5529011 48,26.6211605 L48,26.4846417 C48,26.4846417 48,26.4163823 47.9344264,26.4163823 C47.9344264,26.4163823 47.8688524,26.4163823 47.8688524,26.348123 L40,21.7747441 C39.8688525,21.7064847 39.7377049,21.7064847 39.6721311,21.7747441 L32.9836065,26.006826 L32.9180328,26.006826 L32.9180328,26.4163823 L32.852459,30.1023892 L30.1639344,28.2593857 C30.0327869,28.1911264 29.9016393,28.1911264 29.7704918,28.2593857 L25.7704918,30.5802049 L25.5737705,26.4846417 L25.5737705,26.4163823 L25.5737705,26.348123 L25.5737705,26.2798635 L25.5737705,26.2116042 L25.5737705,26.1433448 L25.5081967,26.1433448 L21.442623,23.34471 L25.2459016,21.2969284 C25.3770492,21.228669 25.4426229,21.0921502 25.4426229,20.9556315 L24.7213115,5.46075086 L24.7213115,5.39249149 C24.7213115,5.39249149 24.7213115,5.32423208 24.6557377,5.32423208 C24.6557377,5.32423208 24.6557377,5.25597271 24.5901639,5.25597271 L14.295082,0.068259386 C14.2295082,0 14.1639344,0 14.0983607,0 L0.131147541,4.50511947 C0.131147541,4.50511947 0.0655737703,4.50511947 0.0655737703,4.57337884 C0.0655737703,4.57337884 0,4.57337884 0,4.64163825 L0,5.05119456 L3.08196721,20.6825939 C3.08196721,20.7508533 3.14754099,20.8191127 3.21311475,20.8873721 L7.40983607,24.3003414 L4.32786887,25.8020479 C4.32786887,25.8020479 4.26229508,25.8020479 4.26229508,25.8703072 C4.26229508,25.8703072 4.26229508,25.9385666 4.19672131,25.9385666 L4.19672131,26.0750854 L6.55737703,37.8156998 C6.55737703,37.8839592 6.62295081,37.9522185 6.6885246,38.0204779 L9.63934427,40.8873721 L7.67213113,42.1160411 L7.60655739,42.1843005 C7.60655739,42.1843005 7.60655739,42.2525599 7.5409836,42.2525599 L7.5409836,42.457338 L9.37704917,51.5358365 C9.37704917,51.6040956 9.44262296,51.672355 9.44262296,51.7406145 L16.5901639,59.931741 L16.6557377,59.931741 C16.6557377,59.931741 16.7213115,59.931741 16.7213115,60 L17.0491803,60 L26.4918033,52.1501708 C26.557377,52.0819113 26.6229508,51.9453928 26.6229508,51.8771334 L26.4262295,46.484642 L29.5737705,49.2150172 C29.5737705,49.2150172 29.6393442,49.2150172 29.6393442,49.2832767 L29.9672131,49.2832767 L37.5737705,43.0034131 C37.6393443,42.9351537 37.704918,42.8668943 37.704918,42.7303756 L37.9672131,38.7713312 L40.2622951,40.4095564 L40.5245901,40.4095564 C40.5245901,40.4095564 40.5901639,40.4095564 40.5901639,40.341297 L46.7540983,35.2218431 C46.8196723,35.1535837 46.8852459,35.0853243 46.8852459,35.017065 L48,26.6211605 C48,26.6894199 48,26.6894199 48,26.6211605 Z M40.852459,39.3856656 L41.5081967,31.7406144 L47.2786886,27.4402731 L46.295082,34.8805462 L40.852459,39.3856656 Z M37.9672131,37.9522185 L38.2295082,33.9931742 L38.2295082,33.9249148 L38.2295082,33.8566554 L38.1639344,33.788396 L38.0983607,33.7201366 L33.442623,30.5119455 L33.5081967,27.0307168 L40.7868852,31.7406144 L40.1311476,39.5904438 L37.9672131,37.9522185 L37.9672131,37.9522185 Z M36.9836066,42.5255974 L30.0983607,48.2593857 L30.0327869,40.2047783 L37.4426229,34.675768 L36.9836066,42.5255974 L36.9836066,42.5255974 Z M25.9672131,51.7406145 L17.1147541,59.0443689 L15.9344262,50.7167235 L25.5737705,43.5494882 L25.9672131,51.7406145 L25.9672131,51.7406145 Z M9.83606559,51.4675771 L8.26229507,43.6177476 L15.2786885,50.7167235 L16.3934426,58.6348126 L9.83606559,51.4675771 L9.83606559,51.4675771 Z M9.70491801,11.4675768 L11.8688525,27.0307168 L3.67213115,20.2730376 L0.721311476,5.59726964 L9.70491801,11.4675768 L9.70491801,11.4675768 Z M24.0655738,6.00682595 L24.6557377,20.7508533 L12.6557377,27.3037543 L10.4262295,11.4675768 L24.0655738,6.00682595 L24.0655738,6.00682595 Z M25.3770492,38.0204779 L15.147541,45.1194542 L13.5737705,33.788396 L24.9180328,27.0307168 L25.3770492,38.0204779 L25.3770492,38.0204779 Z M12.852459,33.8566554 L14.4262295,44.8464163 L7.08196723,37.6109216 L4.98360656,26.9624574 L12.852459,33.8566554 Z M26.295082,42.7986349 L26.295082,42.7303756 L26.295082,42.6621162 L26.2295082,42.5938568 L23.4754098,40.2730377 L25.9672131,38.4982936 C26.0983607,38.4300343 26.0983607,38.2935155 26.0983607,38.1569967 L26.0983607,37.5426622 L29.442623,40.2047783 L29.5081967,48.2593857 L26.4262295,45.5972699 L26.295082,42.7986349 L26.295082,42.7986349 Z" id="Shape" fill="#000000"></path>
              </g>
              <g id="vultr-logo" transform="translate(138.000000, 6.000000)">
                <path d="M20.9982175,1.43097643 C20.4568114,0.547840326 19.4958913,0.00657728304 18.4577633,0 L3.0140982,0 C1.34945773,0 0,1.34540694 0,3.00505051 C0,3.57155783 0.159103167,4.12674733 0.459291157,4.6077441 L4.43503021,10.4318182 L24.3137255,6.13888888 L20.9982175,1.43097643 Z" id="Path" fill="#C9F4FF"></path>
                <path d="M24.2997887,6.44945545 C23.759775,5.57067823 22.8089247,5.03298516 21.7823905,5.02590073 L6.62142994,5.02590073 C5.51020469,4.9743083 4.46430184,5.55507046 3.91496764,6.52872762 C3.36563344,7.50238482 3.4059042,8.70403644 4.0191755,9.63821809 L8.38926582,16.6136364 L28.627451,13.4248737 L24.2997887,6.44945545 Z" id="Path" fill="#51B9FF"></path>
                <path d="M7.91696628,15.7786227 C7.4122714,14.9785764 7.31150221,13.99207 7.64419858,13.1082916 C8.10567873,11.9428994 9.25055243,11.1839719 10.5154378,11.2049704 L25.90528,11.2049704 C26.9480372,11.2093261 27.9144812,11.7465119 28.4606829,12.6253593 L42.2856998,34.3146982 C42.5859578,34.7921362 42.745098,35.343218 42.745098,35.9055338 C42.7428347,36.4675338 42.5838674,37.0180166 42.2856998,37.4963694 L34.5620663,49.6122868 C34.0060076,50.4766115 33.0422139,51 32.0066634,51 C30.9711128,51 30.0073191,50.4766115 29.4512605,49.6122868 L7.91696628,15.7786227 Z" id="Path" fill="#007BFC"></path>
                <path d="M46.9140416,22.9556376 C47.4614051,23.8184412 48.4101278,24.3409091 49.4294852,24.3409091 C50.4488427,24.3409091 51.3975649,23.8184412 51.9449284,22.9556376 L54.559294,18.8012201 L59.5477854,10.8610367 C59.8433481,10.3844387 60,9.83432649 60,9.27299998 C59.9977719,8.71198881 59.8412906,8.16247444 59.5477854,7.68496328 L55.5909081,1.41788991 C55.0513137,0.542609664 54.1012021,0.00705628088 53.0754649,0 L37.8697511,0 C37.0826793,0 36.3278439,0.313707241 35.7713001,0.872109709 C35.2147563,1.43051218 34.9018346,2.18786845 34.9018346,2.9775688 C34.8966512,3.54167153 35.0590207,4.09458407 35.3684395,4.56560551 L46.9140416,22.9556376 Z" id="Path" fill="#007BFC"></path>
              </g>
              <g id="do-logo" transform="translate(64.000000, 4.000000)" fill="#0080FF">
                <g id="XMLID_48_">
                  <path d="M26.0027628,52 L26.0027628,41.9226491 C36.6750986,41.9226491 44.9594257,31.3443774 40.8614844,20.1178551 C39.3579233,15.9631579 36.0265036,12.6335069 31.8695993,11.1307441 C20.6371134,7.06444466 10.0532224,15.3149072 10.0532224,25.9815767 L10.0532224,25.9815767 L0,25.9815767 C0,8.97973062 16.4507275,-4.27994141 34.2870898,1.28912084 C42.0702296,3.73479367 48.2908454,9.92264063 50.7083356,17.7016482 C56.2803564,35.5580065 43.0431221,52 26.0027628,52 Z" id="XMLID_49_"></path>
                </g>
                <polygon id="XMLID_47_" points="25.8979394 42.0437868 15.8479927 42.0437868 15.8479927 31.999176 15.8479927 31.999176 25.8979394 31.999176 25.8979394 31.999176"></polygon>
                <polygon id="XMLID_46_" points="15.8479927 49.7704104 8.11726458 49.7704104 8.11726458 49.7704104 8.11726458 42.0437868 15.8479927 42.0437868"></polygon>
                <polygon id="XMLID_45_" points="8.503801 42.0437868 1.93268205 42.0437868 1.93268205 42.0437868 1.93268205 35.4761567 1.93268205 35.4761567 8.503801 35.4761567 8.503801 35.4761567"></polygon>
              </g>
              <g id="bl-logo">
                <path d="M28.8514049,46.4822275 C36.6829502,46.0500913 43.219992,44.902071 43.8738022,43.1016043 C45.5403533,38.5122451 30.2961441,0 22.0343789,0 C13.7726138,0 -1.92557784,38.1620354 0.194955737,43.1016043 C1.01375177,45.0089069 7.46402462,46.1275336 15.170704,46.5179686 L22.0019996,60 L28.8514049,46.4822275 Z" id="Combined-Shape-path" fill="#007BFF"></path>
                <ellipse id="Oval-2" fill="#FFFFFF" cx="22.1964286" cy="16.0645161" rx="4.51785716" ry="4.4516129"></ellipse>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div class="px-5 lg:px-0 pb-10">
        <svg class="m-auto max-w-5xl" viewBox="0 0 1050 538" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-450.000000, -3217.000000)">
              <g transform="translate(451.000000, 3218.000000)">
                <g id="land" stroke="#979797">
                  <polygon id="Path" points="176 329.423301 190.193954 305.895294 190.193954 289.376342 208.696963 275 218.342359 275 286.806265 305.895294 295.539179 323.239304 348 345.336288 338.097288 368.935354 328.48554 413.468819 304.533367 422.329325 289.478394 461.867037 283.736285 470.899266 258.418357 490.578312 262 536 253.281931 536 235.050094 511.832472 239.745124 504.622085 228.532078 486.407618 224.704006 402.812132 218.342359 396.041908 190.193954 374.000192 176 340.453042"></polygon>
                  <polygon id="Path-2" points="178.391515 290 160.209844 280.186331 152.334044 266.1342 121.48433 257.457403 92.6120524 243.352823 92.6120524 233.765961 71.9087322 192.872157 73.9641161 227.79951 64.4375519 189.169264 56.2826594 181.163675 52.4466014 156.223375 76.6878853 123.106672 73.9641161 87.2581984 43.4620932 77.7933727 11.7449428 87.2581984 3.44388648e-16 81.5436232 0 74.1963123 23.3621812 68.0900358 29.8847845 51.0704138 98.9342128 40 108.343712 51.0704138 173.087951 48.0880532 224.107828 55.2860522 236.183641 40 242.119965 40 246.881794 51.0704138 261.77795 48.0880532 228.459455 68.0900358 204.708355 74.1963123 199.532454 81.5436232 208.551099 93.5137869 224.550869 97.2470479 222.739907 110.774271 232.969591 112.460517 236.183641 99.9613479 251.330167 96.4263393 251.330167 81.5436232 268.655409 74.1963123 295.856464 81.5436232 308 103.775589 295.856464 116.459348 261.77795 116.459348 257.04591 123.106672 283.086016 129.389374 242.119965 150.124342 204.708355 181.163675 189.329639 192.872157 189.329639 210.506478 185.275989 218.891216 178.391515 200.388171 154 197.904163 128.166931 207.576474 121.48433 233.765961 132.789446 245.860443 152.334044 233.765961 160.209844 237.972119 152.334044 253.455961 169.63606 257.457403 166.977485 274.623751"></polygon>
                  <path d="M166,36.4553975 L174.110843,29 L185.677825,29 L196.676719,40.2329005 L215,34.6164502 L215,44.4879553 C206.267435,47.4959851 201.901153,49 201.901153,49 C198.188335,47.1068267 196.331926,46.1602401 196.331926,46.1602401 C191.162221,47.5239387 188.577369,48.205788 188.577369,48.205788 C181.412244,46.5702266 177.829681,45.7524459 177.829681,45.7524459 L177.652359,39.397106 L166,36.4553975 Z" id="Path-3"></path>
                  <path d="M258,37.2801175 L264.020314,32 L267.587052,34.6400588 L283.142228,32 L300.789617,38.7868911 L298.746291,43.4828327 L306,54.7075498 L304.890143,57.2072996 L298.746291,56.2291078 L302.449778,64.8554618 L296.243827,62.8997401 L293.856974,64.8554618 L297.132374,71.7881806 C292.75108,72.5960602 290.560434,73 290.560434,73 L276.165322,63.9024197 L287.13375,57.2072996 L283.142228,43.4828327 L265.908393,38.7868911 L263.109307,43.4828327 L258,37.2801175 Z" id="Path-4"></path>
                  <path d="M272,15.886047 L275.378081,11.8091859 L323.578476,0 L451.313101,5.45552187 L456,9.8078635 L443.88559,17.5804412 L443.88559,22.3743065 L426.894796,28.5211048 L424.428998,42.408915 L369.564046,60.7818346 L356.646525,78 L341.640919,63.0699587 L339.188925,48.605093 L350.49897,48.605093 L353.085235,42.408915 L348.622956,28.5211048 L323.578476,15.886047 C337.382764,13.1681396 344.284908,11.8091859 344.284908,11.8091859 L343.250904,8.15749581 L290.442665,22.3743065 L272,15.886047 Z" id="Path-5"></path>
                  <path d="M464.781844,180.21029 L424.999289,222.258838 L419,271.351657 L447.895646,302.564773 L497.740673,297.147057 L515.08955,308.207677 L515.08955,328.208216 L527.639306,347.015165 L532.612319,374.97517 L525.260706,391.214363 L539.841277,437.131601 L550.816685,461.450851 L565.291678,464 L596.620266,442.79896 L631.349072,381.380604 L625.748803,343.560479 L667.931695,290.191515 L671.783723,277.322929 L641.708093,277.322929 L601.531175,204.608619 L610.247534,204.608619 L646.567766,267.726408 L680.95655,254.250343 L700.171665,233.022943 L686.930997,216.29997 L671.783723,226.259298 L656.733251,197.958838 L750.664261,235.379157 L770.84831,290.191515 L781.299442,281.59252 L781.299442,254.250343 L807.477219,230.712583 L845.155957,262.570569 L850.232999,291.344297 L854.660615,290.191515 L855.471228,268.969298 L873.49606,286.532587 L890.125185,271.351657 L870.804024,242.919852 L885.632703,235.958326 L888.659094,247.275405 L899.398923,229.495587 L914.813854,222.258838 L922.729761,204.608619 L908.954337,184.416083 L908.954337,171.420055 L890.125185,169.413279 L903.567291,155.509604 L932.628379,180.21029 L942.452318,173.037893 L928.862722,155.509604 L947.74328,134.722145 L947.74328,119.477884 L914.813854,103.935301 L914.813854,89.0247883 L922.729761,81.7289478 L947.74328,85.0403234 L956.109125,72.7364001 L973.539056,72.7364001 L969.133032,89.0247883 L992.85835,115.437484 L996.172203,92.696015 L984.012697,85.0403234 L1017,59.4871686 L908.954337,45.8278236 L791.399464,35 L661.298664,45.8278236 L625.748803,52.1303823 L596.620266,68.4302019 L583.848879,59.4871686 L599.336274,57.1679224 L601.531175,52.1303823 L571.672191,45.8278236 L548.325579,43.6846394 L506.13311,78.6602505 L529.85145,96.4911566 L545.138782,85.0403234 C543.990038,73.966909 543.415666,68.4302019 543.415666,68.4302019 C553.954856,63.7338257 559.224451,61.3856377 559.224451,61.3856377 L554.459099,73.5682866 L557.1722,78.6602505 L571.672191,78.6602505 L548.325579,100.422707 L511.021081,103.935301 L490.285603,119.477884 L474.151556,129.371805 L481.765535,138.603858 L481.765535,144.421263 L472.027025,149.185528 L459.677379,144.421263 L454.101453,149.185528 L454.101453,169.413279 L464.781844,173.037893 L472.027025,173.037893 L511.021081,141.761988 L537.39444,159.660208 C532.36578,166.162256 529.85145,169.413279 529.85145,169.413279 L533.927556,170.890262 L545.138782,159.660208 L525.260706,138.603858 L529.85145,138.603858 L550.816685,151.755859 C556.421862,164.512128 559.224451,170.890262 559.224451,170.890262 L564.627421,171.195763 C564.627421,161.892384 564.627421,157.240694 564.627421,157.240694 L576.354937,155.63327 L578.334907,169.413279 L586.892406,173.037893 C602.462491,173.037893 610.247534,173.037893 610.247534,173.037893 L603.150363,194.250114 L569.182385,194.250114 L557.1722,187.114029 L550.816685,197.958838 C529.764974,188.930335 519.239119,184.416083 519.239119,184.416083 L520.977724,171.420055 L464.781844,180.21029 Z" id="Path-6"></path>
                  <polygon id="Path-7" points="645.068963 388.926952 665 375 665 396.311752 655.034482 414.203799 655.034482 423.337407 645.068963 426 640 421.854519 640 409.929593 645.068963 406.614055"></polygon>
                  <path d="M472.384364,96.1732794 C472.381981,89.3910931 472.38079,86 472.38079,86 C476.448865,86.1095936 478.482903,86.1643904 478.482903,86.1643904 C483.531258,98.4388702 486.055435,104.57611 486.055435,104.57611 C490.191034,105.531703 492.258833,106.009499 492.258833,106.009499 C492.752944,108.038952 493,109.053678 493,109.053678 C491.356405,109.603222 490.534608,109.877995 490.534608,109.877995 C490.534608,111.689048 490.534608,112.594575 490.534608,112.594575 C476.844869,115.531525 470,117 470,117 C475.1127,111.706394 477.66905,109.059591 477.66905,109.059591 C475.616344,106.511343 474.589991,105.23722 474.589991,105.23722 C477.169378,102.859276 478.459072,101.670304 478.459072,101.670304 L478.459072,96.3494964 C474.409267,96.2320184 472.384364,96.1732794 472.384364,96.1732794 Z" id="Path-8"></path>
                  <path d="M471.430582,97.0447898 C467.10978,96.3482633 464.949378,96 464.949378,96 C459.662104,99.7609181 457.018468,101.641377 457.018468,101.641377 C457.006156,108.547126 457,112 457,112 C459.908647,112 461.36297,112 461.36297,112 C461.461259,109.328458 461.510403,107.992687 461.510403,107.992687 C466.167727,108.939468 468.496389,109.412858 468.496389,109.412858 C468.66547,104.392342 468.75001,101.882084 468.75001,101.882084 L472,100.730347 C471.620388,98.273309 471.430582,97.0447898 471.430582,97.0447898 Z" id="Path-9"></path>
                  <polygon id="Path-10" points="841 301 848.598921 301.690807 879 339.726892 879 344.496775 873.592702 348 867.969587 344.496775"></polygon>
                  <polygon id="Path-11" points="891 318.165514 897.997088 319.582864 903.631626 305.395445 911.677882 305.395445 917.850172 297 925 301.564103 921.162004 311.77031 924.12306 320.433381 916.140007 329.518232 916.140007 334.453801 909.930322 337 896.827834 335.812273 891 325.08928"></polygon>
                  <polygon id="Path-12" points="895 464.123275 899.574964 415.21329 952.900048 379.756821 960.910715 387.707883 974.571604 372 989.200224 375.35457 985.715878 387.707883 996.519654 393.041816 1007.82266 387.707883 1012.55891 372 1039 426.137977 1035.49005 447.022647 1007.82266 476.358 980.728732 480 974.571604 464.123275 977.087456 456.177561 963.376009 462.424061 963.376009 456.177561 956.473391 450.828028"></polygon>
                  <polygon id="Path-13" points="974 327.025872 981.818828 325 986.96596 336.768683 996.712588 330.884342 1029.09689 342.52575 1047 366 1038.96653 366 1025.14738 354.73361 1019.48005 354.73361 1016.40558 359.898153 996.712588 354.73361 999.139485 345.5 977.628738 336.768683 980.001821 334.040028"></polygon>
                  <polygon id="Path-14" points="954.76774 178.19463 972.540698 172.655891 977.682987 155.615695 976.326378 139 986.474921 139 986.474921 147.105695 995 153.332894 986.474921 158.255394 983.060497 164.5 980.319589 180.425164 969.664034 178.19463 964.07038 182.675985 964.07038 190 953 187.009507"></polygon>
                </g>
                <g id="locations" transform="translate(49.000000, 79.000000)" fill="#A845FF">
                  <circle id="San-Francisco,-CA" cx="14" cy="102" r="7"></circle>
                  <circle id="Los-Angeles,-CA" cx="7" cy="81" r="7"></circle>
                  <circle id="Seattle,-WA" cx="40" cy="44" r="7"></circle>
                  <circle id="Dallas,-TX" cx="94" cy="106" r="7"></circle>
                  <circle id="Atlanta,-GA" cx="128" cy="101" r="7"></circle>
                  <circle id="Miami,-FL" cx="138" cy="135" r="7"></circle>
                  <circle id="Chicago,-IL" cx="126" cy="63" r="7"></circle>
                  <circle id="Toronto,-CA" cx="165" cy="54" r="7"></circle>
                  <circle id="New-York,-NY" cx="183" cy="74" r="7"></circle>
                  <circle id="Newark,-NJ" cx="172" cy="87" r="7"></circle>
                  <circle id="Washington,-DC" cx="155" cy="88" r="7"></circle>
                  <circle id="London,-UK" cx="437" cy="31" r="7"></circle>
                  <circle id="Amsterdam,-NL" cx="457" cy="31" r="7"></circle>
                  <circle id="Paris,-FR" cx="449" cy="47" r="7"></circle>
                  <circle id="Milan,-IT" cx="469" cy="61" r="7"></circle>
                  <circle id="Madrid,-ES" cx="417" cy="81" r="7"></circle>
                  <circle id="Frankfurt,-DE" cx="471" cy="46" r="7"></circle>
                  <circle id="Bucharest,-RO" cx="523" cy="63" r="7"></circle>
                  <circle id="Stockhold,-SE" cx="493" cy="7" r="7"></circle>
                  <circle id="Singapore,-SG" cx="804" cy="211" r="7"></circle>
                  <circle id="Singapore,-SG" cx="824" cy="261" r="7"></circle>
                  <circle id="Tokyo,-JP" cx="934" cy="99" r="7"></circle>
                  <circle id="Osaka,-JP" cx="918" cy="102" r="7"></circle>
                  <circle id="Seoul,-KR" cx="876" cy="85" r="7"></circle>
                  <circle id="Bangalore,-IN" cx="724" cy="194" r="7"></circle>
                  <circle id="Mumbai,-IN" cx="710" cy="176" r="7"></circle>
                  <circle id="Sydney,-AU" cx="975" cy="377" r="7"></circle>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="m-auto text-center">
        <a href="https://app.bitlaunch.io/signup" class="mx-auto bg-bl-grad-1 text-white hover:bg-purple-500 text-base font-semibold py-3 px-7 rounded">
          Start Now
        </a>
      </div>
    </div>
  </div>
  <div class="w-screen py-24 bg-[#5353FF]">
    <div class="container mx-auto max-w-5xl">
      <p class="text-4xl px-7 lg:px-0 lg:text-5xl/tight max-w-4xl font-black text-white pb-20">
        Pay Per Hour with Cryptocurrency,<br>
        Using Our Simple In-House Platform<br>
        and Payment System.
      </p>
      <p class="text-4xl px-7 lg:px-0 lg:text-5xl/tight max-w-5xl font-black text-white">
        No Hidden Fees.<br>
        No Unwanted Surprises.
      </p>
    </div>
  </div>
  <div class="w-screen py-24 bg-gray-50">
    <div class="container mx-auto max-w-screen-xl px-5">
      <div class="bg-white rounded-lg px-3 lg:px-20 pt-20">
        <div class="flex flex-wrap flex-row">
          <div class="basis-full lg:basis-1/2 m-auto pb-20">
            <svg class="m-auto max-w-sm" viewBox="0 0 380 355" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-499.000000, -4869.000000)">
                  <g transform="translate(500.000000, 4870.000000)">
                    <circle id="Oval" fill="#E4E7EA" fill-rule="nonzero" cx="284" cy="176" r="95"></circle>
                    <line x1="130.5" y1="344.5" x2="130.5" y2="344.5" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="345.5" y1="43.5" x2="345.5" y2="43.5" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <circle id="Oval" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" cx="224.5" cy="340.5" r="12.5"></circle>
                    <path d="M36.3963552,46.6839982 L45.4620615,68.3571177 C45.7593363,68.935035 46.2298461,69.4055537 46.8077522,69.7028343 C47.502317,70.0438084 48.3042373,70.0934828 49.0355721,69.840835 C49.766907,69.5881872 50.3671722,69.0541122 50.7031729,68.3571177 L59.6272275,46.613171 L59.6272275,46.613171 L81.3707573,37.6181181 C82.3825356,37.1049991 83.01438,36.0610623 83,34.926685 C82.9589371,33.8452619 82.3721834,32.8584299 81.4415831,32.306079 L59.6272275,23.3110261 L59.6272275,23.3110261 L50.6323471,1.56707938 C50.1139896,0.602049201 49.10721,0 48.0117913,0 C46.9163727,0 45.9095931,0.602049201 45.3912356,1.56707938 L36.3255294,23.3110261 L36.3255294,23.3110261 L14.6528254,32.3769062 C13.6429824,32.8590069 13,33.8784754 13,34.9975121 C13,36.1165489 13.6429824,37.1360174 14.6528254,37.6181181 L36.3255294,46.6839982 L36.3255294,46.6839982 L36.3963552,46.6839982 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M96,248.510394 L42.7060008,301.620071 C38.0529446,306.340132 31.6841846,309 25.0355767,309 C18.3869689,309 12.0182088,306.340132 7.36515258,301.620071 L7.36515258,301.620071 C2.65157687,296.976483 0,290.653612 0,284.057347 C0,277.461083 2.65157687,271.138212 7.36515258,266.494623 L76.0677616,198" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M146,267.884214 L77.5581991,336.562314 C72.9277006,341.317789 66.5729676,344 59.9367262,344 C53.3004848,344 46.9457519,341.317789 42.3152533,336.562314 L42.3152533,336.562314 C37.6321672,331.892211 35,325.549376 35,318.934465 C35,312.319555 37.6321672,305.97672 42.3152533,301.306616 L95.4616156,248" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <line x1="199.535" y1="98.5" x2="199.465" y2="98.5" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <path d="M168,90 C165.741835,90 163.48367,90 161.296073,90 C136.638806,89.9477997 112.983863,99.6977978 95.5975865,117.079545 L71.5340163,141.072116 L45.2828489,167.099145 C39.1258044,173.303825 37.3054494,182.570974 40.6621174,190.622583 C44.0187853,198.674191 51.8996276,203.944276 60.6665976,204 C66.4050172,203.966608 71.9020233,201.700117 75.9797786,197.686165 L107.805791,165.906532" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M180.290297,233.347452 L145.682802,267.801498 C140.007983,273.218395 137.720284,281.258051 139.700486,288.825139 C141.680688,296.392227 147.619995,302.306723 155.23173,304.2915 C162.843465,306.276277 170.94064,304.021827 176.405783,298.39613 L202.749856,272.152111 L226.76322,248.15357 C245.648922,229.397516 255.502972,203.477302 253.813569,177" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M297.598035,154.042384 C265.062082,186.598129 225.397862,183.574593 192.861909,151.018848 C160.325956,118.463103 157.573457,78.8758787 189.827102,46.3904481 C222.080747,13.9050175 265.062082,13.8347027 297.598035,46.3904481 C330.133988,78.9461935 330.133988,121.556953 297.598035,154.042384 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M276.39894,131.424536 C257.184756,150.669997 234.014712,148.907592 214.517967,129.591635 C195.021223,110.275677 193.325854,86.9414366 212.681318,67.6254791 C232.036781,48.3095215 248.001507,57.6855155 267.14505,76.9309769 C286.288593,96.1764383 295.683763,112.179075 276.39894,131.424536 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <line x1="154" y1="163" x2="181" y2="190" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="159" y1="213" x2="132" y2="186" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                    <path d="M243,260.560321 L283.885246,301.548571 C287.868861,305.672154 293.350169,308 299.07623,308 C304.80229,308 310.283598,305.672154 314.267213,301.548571 L316.804918,298.933804 C320.89601,294.942575 323.203828,289.462765 323.203828,283.739883 C323.203828,278.017001 320.89601,272.537192 316.804918,268.545963 L316.240984,267.909939 C312.127764,263.916287 309.805768,258.42117 309.805768,252.680684 C309.805768,246.940197 312.127764,241.44508 316.240984,237.451429 L316.240984,237.451429 C320.224599,233.327846 325.705907,231 331.431967,231 C337.158028,231 342.639336,233.327846 346.622951,237.451429 L372,262.892411" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M63.0153776,146 L58.2861226,141.285043 C56.1826171,139.198288 55,136.361798 55,133.403324 C55,130.44485 56.1826171,127.60836 58.2861226,125.521605 L137.765841,46.2821792 C139.870992,44.1807761 142.727765,43 145.706754,43 C148.685743,43 151.542516,44.1807761 153.647667,46.2821792 L172,64.6493995" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M279.893132,173 L297.703637,190.721144 C299.814121,192.818424 301,195.664516 301,198.632368 C301,201.60022 299.814121,204.446313 297.703637,206.543593 L218.121778,285.726163 C216.026005,287.821804 213.177257,289 210.205998,289 C207.234739,289 204.385991,287.821804 202.290218,285.726163 L196,279.467505" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="basis-full lg:basis-1/2 pb-20">
            <h1 class="m-auto font-black text-4xl/tight lg:text-5xl/tight max-w-lg pb-5 px-5 lg:px-0">
              Expert Customer Support. From Humans.
            </h1>
            <p class="m-auto text-md lg:text-lg max-w-lg pb-10 px-5 lg:px-0">
              Use our live chat and connect with real humans with technical expertise. Whether you need help configuring your server or choosing a suitable size, we're here for you.
            </p>
            <div class="m-auto max-w-lg px-5 lg:px-0">
              <button id="chatbtn" class="mx-auto bg-bl-grad-1 text-white hover:bg-purple-500 text-base font-semibold py-3 px-7 rounded">
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-screen pt-0 pb-24 bg-gray-50">
    <div class="container mx-auto max-w-screen-xl px-5">
      <div class="bg-white rounded-lg px-3 lg:px-20 pt-20">
        <div class="flex flex-wrap flex-row">
          <div class="basis-full lg:basis-1/2 pb-20">
            <h1 class="m-auto font-black text-4xl/tight lg:text-5xl/tight max-w-md pb-5 px-5 lg:px-0">
              Developer Ready. Solid Docs, API &amp; Tools.
            </h1>
            <p class="m-auto text-md lg:text-lg max-w-md pb-10 px-5 lg:px-0">
              Use our <a class="underline" target="_blank" href="https://developers.bitlaunch.io/reference">Developer API</a> to create and manage servers for your project. Create and even pay for crypto transactions programmatically. We also provide a simple Command-line Tool to get you started. Check out our <a class="underline" target="_blank" href="https://github.com/bitlaunchio">GitHub</a>.
            </p>
            <div class="m-auto max-w-md px-5 lg:px-0">
              <a target="_blank" href="https://developers.bitlaunch.io" class="mx-auto bg-bl-grad-1 text-white hover:bg-purple-500 text-base font-semibold py-3 px-7 rounded">
                Developer Hub
              </a>
            </div>
          </div>
          <div class="basis-full lg:basis-1/2 m-auto pb-20">
            <svg class="m-auto max-w-sm" viewBox="0 0 381 359" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1019.000000, -5543.000000)">
                  <g transform="translate(1020.000000, 5544.000000)">
                    <circle id="Oval" fill="#E4E7EA" fill-rule="nonzero" cx="151" cy="111" r="96"></circle>
                    <line x1="291.5" y1="14.5" x2="291.5" y2="14.5" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="339.5" y1="307.5" x2="339.5" y2="307.5" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="48.5" y1="176.5" x2="48.5" y2="176.5" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="344.5" y1="62.5" x2="344.5" y2="62.5" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="48.5" y1="310.5" x2="48.5" y2="310.5" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <line x1="8.5" y1="242.5" x2="8.5" y2="242.5" id="Path" stroke="#3E4449" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></line>
                    <path d="M22.9290123,71.0266972 L31.9444444,92.3221371 C32.4021311,93.3430271 33.4166653,94 34.5354938,94 C35.6543223,94 36.6688565,93.3430271 37.1265432,92.3221371 L46.0709877,71.0266972 L46.0709877,71.0266972 L67.367284,62.0826125 C68.3089352,61.5274534 68.918898,60.5462485 69,59.4561749 C68.9205663,58.3838628 68.3069523,57.423462 67.367284,56.9007221 L46.0709877,47.8856526 L46.0709877,47.8856526 L37.0555556,26.5902127 C36.7845348,26.0333813 36.3346315,25.5834962 35.7777778,25.3124863 C34.3465262,24.590561 32.6009399,25.1618208 31.8734568,26.5902127 L22.9290123,47.8856526 L22.9290123,47.8856526 L1.63271605,56.9007221 C0.673888284,57.402841 0.0526693055,58.3751447 0,59.4561749 C0.081102023,60.5462485 0.691064755,61.5274534 1.63271605,62.0826125 L22.9290123,71.0266972 L22.9290123,71.0266972 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M332.873639,181.086831 L341.89523,202.412287 C342.193352,202.974896 342.667411,203.424313 343.244916,203.691815 C343.922324,204.036064 344.709287,204.094504 345.430053,203.854084 C346.15082,203.613663 346.74535,203.09441 347.080868,202.412287 L356.031423,181.086831 L356.031423,181.086831 L377.342267,172.13014 C378.355108,171.646285 379,170.623108 379,169.5 C379,168.376892 378.355108,167.353715 377.342267,166.86986 L356.031423,157.913169 L356.031423,157.913169 L347.080868,136.587713 C346.782746,136.025104 346.308687,135.575687 345.731181,135.308185 C345.053774,134.963936 344.266811,134.905496 343.546045,135.145916 C342.825278,135.386337 342.230748,135.90559 341.89523,136.587713 L332.873639,157.913169 L332.873639,157.913169 L311.562795,166.86986 C310.629432,167.424221 310.040935,168.414643 310,169.5 C310.065528,170.577937 310.647692,171.557701 311.562795,172.13014 L332.873639,181.086831 L332.873639,181.086831 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M276,196 L276,90.863388 C276,82.8360656 264.622018,66 256.53578,66 L256.53578,66 C248.449541,66 237,82.8360656 237,90.863388 L237,141.016393" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M278.203346,285.438956 L237,291 L237,138 L303.575561,238.597856 C313.399344,259.701305 307.674694,282.016775 278.203346,285.438956 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M237,291 L237,70.1136141 C237,47.4549461 208.971626,0 189.644172,0 L191.355828,0 C172.028374,0 144,47.4549461 144,70.1136141 L144,291" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M144,139.962974 L144,318.636912 C144,324.360287 148.622849,329 154.325421,329 L226.674579,329 C232.377151,329 237,324.360287 237,318.636912 L237,139.962974 C237,120.594719 208.943338,80 189.645482,80 L191.354518,80 C172.056662,80.1429392 144,120.737658 144,139.962974 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M203,142 L193.04298,135.720943 C191.576016,134.759686 189.638883,134.759686 188.17192,135.720943 L178,142" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <polyline id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="237 295.437859 237 326 289 326 268.070539 289"></polyline>
                    <path d="M144,136.89758 L144,90.0140687 C144,81.9380979 132.550459,65 124.46422,65 L124.46422,65 C116.377982,65 105,81.9380979 105,90.0140687 L105,192" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <polyline id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="144 295.437859 144 326 92 326 112.929461 289"></polyline>
                    <polyline id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="242.028953 331 255 357 127 357 139.899777 331"></polyline>
                    <path d="M77.4244385,238.597856 L144,138 L144,291 L102.796654,285.438956 C73.3253063,282.016775 67.6006561,259.701305 77.4244385,238.597856 Z" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <line x1="190.5" y1="287" x2="190.5" y2="265" id="Path" stroke="#3E4449" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-screen pt-0 bg-bl-grad-1">
    <div class="container mx-auto max-w-screen-xl px-5 pt-20 pb-5">
      <div class="flex flex-wrap flex-row text-white">
        <div class="basis-full sm:basis-1/2 lg:basis-1/4 pb-20">
          <p class="font-bold text-lg pb-3">Solutions</p>
          <a class="block hover:underline" href="https://bitlaunch.io/bitcoin-vps/">Bitcoin VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/ddos-protection/">DDoS Protected VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/ubuntu-vps/">Ubuntu VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/windows-rdp/">Windows RDP</a>
          <a class="block hover:underline" href="https://bitlaunch.io/anonymous-vps/">Anonymous VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/algo-vpn/">Algo VPN</a>
          <a class="block hover:underline" href="https://bitlaunch.io/shadowsocks-r/">Shadowsocks R</a>
          <a class="block hover:underline" href="https://bitlaunch.io/blog/why-buy-vps-hosting-with-bitcoin/">Bitcoin VPS Hosting</a>
          <a class="block hover:underline" href="https://bitlaunch.io/chicago-vps/">Chicago VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/gaming-vps/">Gaming VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/amsterdam-vps/">Amsterdam VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/usa-vps/">USA VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/uk-vps/">UK VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/europe-vps/">Europe VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/wordpress-vps/">WordPress VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/gpu-vps/">GPU VPS</a>
          <a class="block hover:underline" href="https://bitlaunch.io/dallas-vps/">Dallas VPS</a>
        </div>
        <div class="basis-full sm:basis-1/2 lg:basis-1/4 pb-20">
          <p class="font-bold text-lg pb-3">Developers</p>
          <a class="block hover:underline" href="https://developers.bitlaunch.io/">Developer Hub</a>
          <a class="block hover:underline" href="https://developers.bitlaunch.io/reference">API Reference</a>
          <a class="block hover:underline" href="https://developers.bitlaunch.io/docs/cli-tool-blcli">Command-line Tool: blcli</a>
          <a class="block hover:underline" href="https://pkg.go.dev/github.com/bitlaunchio/gobitlaunch">Go SDK</a>
          <a class="block hover:underline" href="https://github.com/BitLaunchIO/pybitlaunch">Python SDK</a>
          <a class="block hover:underline" href="https://github.com/BitLaunchIO/phpbitlaunch">PHP SDK</a>
          <a class="block hover:underline" href="https://github.com/bitlaunchio">GitHub</a>
          <p class="font-bold text-lg pt-5 pb-3">Affiliates</p>
          <a class="block hover:underline" href="https://bitlaunch.io/affiliates/">Affiliate Program</a>
          <a class="block hover:underline" href="https://bitlaunch.hasoffers.com/">Affilaite Portal</a>
        </div>
        <div class="basis-full sm:basis-1/2 lg:basis-1/4 pb-20">
          <p class="font-bold text-lg pb-3">Support</p>
          <a class="block hover:underline" href="https://bitlaunch.io/blog/">Blog, News &amp; Guides</a>
          <a class="block hover:underline" href="https://help.bitlaunch.io/en/">Help Center</a>
          <a class="block hover:underline" href="https://status.bitlaunch.io">Service Status</a>
          <a class="block hover:underline" href="https://help.bitlaunch.io/en/articles/4847094-terms-and-conditions">Terms</a>
          <a class="block hover:underline" href="https://help.bitlaunch.io/en/articles/4847098-acceptable-use">Acceptable Use</a>
          <a class="block hover:underline" href="https://help.bitlaunch.io/en/articles/4847100-privacy">Privacy</a>
        </div>
        <div class="basis-full sm:basis-1/2 lg:basis-1/4 pb-20">
          WE ONLY COMMUNICATE THROUGH X, EMAIL OR LIVE CHAT ON OUR WEBSITE. ANYONE CLAIMING TO BE BITLAUNCH OUTSIDE OF THESE CHANNELS IS AN IMPERSONATOR
          <div class="flex flex-row flex-wrap pt-5">
            <div class="basis-1/4 pb-1">
              <strong>X</strong>
            </div>
            <div class="basis-3/4 pb-1">
              <a class="hover:underline" href="https://x.com/bitlaunchio">@bitlaunchio</a>
            </div>
            <div class="basis-1/4">
              <strong>email</strong>
            </div>
            <div class="basis-3/4">
              <a class="hover:underline block" href="mailto:support@bitlaunch.io">support@bitlaunch.io</a>
              <a class="hover:underline block" href="mailto:legal@bitlaunch.io">legal@bitlaunch.io</a>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-white">© BitLaunch, all rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>

@keyframes intercom-lightweight-app-launcher {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes intercom-lightweight-app-gradient {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes intercom-lightweight-app-messenger {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.intercom-lightweight-app {
  position: fixed;
  z-index: 2147483001;
  width: 0;
  height: 0;
  font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;
}

.intercom-lightweight-app-gradient {
  position: fixed;
  z-index: 2147483002;
  width: 500px;
  height: 500px;
  bottom: 0;
  right: 0;
  pointer-events: none;
  background: radial-gradient(
      ellipse at bottom right,
      rgba(29, 39, 54, 0.16) 0%,
      rgba(29, 39, 54, 0) 72%);
  animation: intercom-lightweight-app-gradient 200ms ease-out;
}

.intercom-lightweight-app-launcher {
  position: fixed;
  z-index: 2147483003;
  padding: 0 !important;
  margin: 0 !important;
  border: none;
  bottom: 20px;
  right: 20px;
  max-width: 48px;
  width: 48px;
  max-height: 48px;
  height: 48px;
  border-radius: 50%;
  background: #a845ff;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);
  transition: transform 167ms cubic-bezier(0.33, 0.00, 0.00, 1.00);
  box-sizing: content-box;
}


.intercom-lightweight-app-launcher:hover {
  transition: transform 250ms cubic-bezier(0.33, 0.00, 0.00, 1.00);
  transform: scale(1.1)
}

.intercom-lightweight-app-launcher:active {
  transform: scale(0.85);
  transition: transform 134ms cubic-bezier(0.45, 0, 0.2, 1);
}


.intercom-lightweight-app-launcher:focus {
  outline: none;


}

.intercom-lightweight-app-launcher-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  transition: transform 100ms linear, opacity 80ms linear;
}

.intercom-lightweight-app-launcher-icon-open {

  opacity: 1;
  transform: rotate(0deg) scale(1);

}

.intercom-lightweight-app-launcher-icon-open svg {
  width: 24px;
  height: 24px;
}

.intercom-lightweight-app-launcher-icon-open svg path {
  fill: rgb(255, 255, 255);
}

.intercom-lightweight-app-launcher-icon-self-serve {

  opacity: 1;
  transform: rotate(0deg) scale(1);

}

.intercom-lightweight-app-launcher-icon-self-serve svg {
  height: 44px;
}

.intercom-lightweight-app-launcher-icon-self-serve svg path {
  fill: rgb(255, 255, 255);
}

.intercom-lightweight-app-launcher-custom-icon-open {
  max-height: 24px;
  max-width: 24px;


  opacity: 1;
  transform: rotate(0deg) scale(1);

}

.intercom-lightweight-app-launcher-icon-minimize {

  opacity: 0;
  transform: rotate(-60deg) scale(0);

}

.intercom-lightweight-app-launcher-icon-minimize svg path {
  fill: rgb(255, 255, 255);
}

.intercom-lightweight-app-messenger {
  position: fixed;
  z-index: 2147483003;
  overflow: hidden;
  background-color: white;
  animation: intercom-lightweight-app-messenger 250ms cubic-bezier(0, 1, 1, 1);
  transform-origin: bottom right;


  width: 400px;
  height: calc(100% - 104px);
  max-height: 704px;
  min-height: 250px;
  right: 20px;
  bottom: 84px;
  box-shadow: 0 5px 40px rgba(0,0,0,0.16);


  border-radius: 16px;
}

.intercom-lightweight-app-messenger-header {
  height: 64px;
  border-bottom: none;
  background: #8b05ff


}

.intercom-lightweight-app-messenger-footer{
  position:absolute;
  bottom:0;
  width: 100%;
  height: 80px;
  background: #fff;
  font-size: 14px;
  line-height: 21px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);

}

@media print {
  .intercom-lightweight-app {
    display: none;
  }
}
</style>