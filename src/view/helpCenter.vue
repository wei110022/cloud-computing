<script lang="ts" setup>
import "@/main-page/css/helpCenter.css"
</script>

<template>
  <div id="__next">
    <div class="h-full w-full" dir="ltr">
      <main class="">
        <header id="header" class="jsx-73269029ea53bf4f flex flex-col text-header-color" data-testid="header">
          <div
              class="jsx-73269029ea53bf4f relative flex grow flex-col mb-9 bg-header-bg bg-header-image bg-cover bg-center pb-9 sm:min-h-header">
            <div class="jsx-73269029ea53bf4f flex h-full flex-col items-center marker:shrink-0">
              <section class="relative flex w-full flex-col mb-6 pb-6">
                <div class="header__meta_wrapper flex justify-center px-5 pt-6 leading-none sm:px-10">
                  <div class="flex items-center w-240" data-testid="subheader-container">
                    <div class="mo__body header__site_name">
                      <div class="header__logo"><a href="/en/"><img
                          alt="BitLaunch Help Center"
                          height="98" src="https://downloads.intercomcdn.com/i/o/252174/72c99e3826134a570b92d23f/31e9ad93ea0eab2d635a8c61ebba75ed.png"></a></div>
                    </div>
                    <div>
                      <div class="flex items-center font-semibold">
                        <div class="flex items-center md:hidden" data-testid="small-screen-children">
                          <button aria-label="Open menu"
                                  class="flex items-center border-none bg-transparent px-1.5" data-testid="hamburger-menu-button">
                            <svg class="fill-current" height="24" viewBox="0 0 16 16" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M1.86861 2C1.38889 2 1 2.3806 1 2.85008C1 3.31957 1.38889 3.70017 1.86861 3.70017H14.1314C14.6111 3.70017 15 3.31957 15 2.85008C15 2.3806 14.6111 2 14.1314 2H1.86861Z"></path>
                              <path
                                  d="M1 8C1 7.53051 1.38889 7.14992 1.86861 7.14992H14.1314C14.6111 7.14992 15 7.53051 15 8C15 8.46949 14.6111 8.85008 14.1314 8.85008H1.86861C1.38889 8.85008 1 8.46949 1 8Z"></path>
                              <path
                                  d="M1 13.1499C1 12.6804 1.38889 12.2998 1.86861 12.2998H14.1314C14.6111 12.2998 15 12.6804 15 13.1499C15 13.6194 14.6111 14 14.1314 14H1.86861C1.38889 14 1 13.6194 1 13.1499Z"></path>
                            </svg>
                          </button>
                          <div class="fixed right-0 top-0 z-50 h-full w-full hidden" data-testid="hamburger-menu">
                            <div class="flex h-full w-full justify-end bg-black bg-opacity-30">
                              <div class="flex h-fit w-full flex-col bg-white opacity-100 sm:h-full sm:w-1/2">
                                <button
                                    aria-label="Close menu"
                                    class="text-body-font flex items-center self-end border-none bg-transparent pr-6 pt-6" data-testid="hamburger-menu-close-button">
                                  <svg height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.5097 3.5097C3.84165 3.17776 4.37984 3.17776 4.71178 3.5097L7.99983 6.79775L11.2879 3.5097C11.6198 3.17776 12.158 3.17776 12.49 3.5097C12.8219 3.84165 12.8219 4.37984 12.49 4.71178L9.20191 7.99983L12.49 11.2879C12.8219 11.6198 12.8219 12.158 12.49 12.49C12.158 12.8219 11.6198 12.8219 11.2879 12.49L7.99983 9.20191L4.71178 12.49C4.37984 12.8219 3.84165 12.8219 3.5097 12.49C3.17776 12.158 3.17776 11.6198 3.5097 11.2879L6.79775 7.99983L3.5097 4.71178C3.17776 4.37984 3.17776 3.84165 3.5097 3.5097Z"></path>
                                  </svg>
                                </button>
                                <nav class="flex flex-col pl-4 text-black"><a class="mx-5 mb-5 text-md no-underline hover:opacity-80 md:mx-3 md:my-0 md:text-base" data-testid="header-link-default"
                                                                              href="#/mainIndex"
                                                                              rel="noopener noreferrer"
                                                                              target="_blank"><span>Go to BitLaunch</span></a>
                                  <div class="relative cursor-pointer"><select
                                      class="peer absolute z-10 block h-6 w-full cursor-pointer opacity-0 md:text-base">
                                    <option class="text-black" selected="" value="/en/">English</option>
                                    ;</select>
                                    <div
                                        class="mb-10 ml-5 flex items-center gap-1 text-md hover:opacity-80 peer-hover:opacity-80 md:m-0 md:ml-3 md:text-base">
                                      <svg id="locale-picker-globe" class="shrink-0" fill="none" height="16"
                                           viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M8 15C9.39949 15 10.534 11.866 10.534 8C10.534 4.13401 9.39949 1 8 1C6.60051 1 5.466 4.13401 5.466 8C5.466 11.866 6.60051 15 8 15Z"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M1.448 5.75989H14.524" stroke="currentColor" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path d="M1.448 10.2402H14.524" stroke="currentColor" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                      </svg>
                                      English
                                      <svg id="locale-picker-arrow" class="shrink-0" fill="none" height="16"
                                           viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 6.5L8.00093 9.5L11 6.50187" stroke="currentColor" stroke-linecap="round"
                                              stroke-linejoin="round" stroke-width="1.5"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                        <nav class="hidden items-center md:flex" data-testid="large-screen-children"><a class="mx-5 mb-5 text-md no-underline hover:opacity-80 md:mx-3 md:my-0 md:text-base"
                                                                                                        data-testid="header-link-default"
                                                                                                        href="#/mainIndex"
                                                                                                        rel="noopener noreferrer"
                                                                                                        target="_blank"><span>Go to BitLaunch</span></a>
                          <div class="relative cursor-pointer"><select
                              class="peer absolute z-10 block h-6 w-full cursor-pointer opacity-0 md:text-base">
                            <option class="text-black" selected="" value="/en/">English</option>
                            ;</select>
                            <div
                                class="mb-10 ml-5 flex items-center gap-1 text-md hover:opacity-80 peer-hover:opacity-80 md:m-0 md:ml-3 md:text-base">
                              <svg id="locale-picker-globe" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16"
                                   width="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M8 15C9.39949 15 10.534 11.866 10.534 8C10.534 4.13401 9.39949 1 8 1C6.60051 1 5.466 4.13401 5.466 8C5.466 11.866 6.60051 15 8 15Z"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M1.448 5.75989H14.524" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                <path d="M1.448 10.2402H14.524" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                              </svg>
                              English
                              <svg id="locale-picker-arrow" class="shrink-0" fill="none" height="16" viewBox="0 0 16 16"
                                   width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 6.5L8.00093 9.5L11 6.50187" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="relative mx-5 flex h-full w-full flex-col items-center px-5 sm:px-10">
                <div class="flex h-full max-w-full flex-col w-240" data-testid="main-header-container"><h1
                    class="text-7 mb-6  text-welcome-message font-bold text-header-color">Advice and answers from the
                  BitLaunch Team</h1>
                  <div id="search-bar" class="relative w-full">
                    <form action="/en/" autocomplete="off">
                      <div class="flex w-full flex-col">
                        <div class="relative flex w-full sm:w-search-bar"><input autocomplete="off" class="peer w-full rounded-search-bar border border-black-alpha-8 bg-white-alpha-20 p-4 ps-12 font-secondary text-lg text-header-color shadow-search-bar outline-none transition ease-linear placeholder:text-header-color hover:bg-white-alpha-27 hover:shadow-search-bar-hover focus:border-transparent focus:bg-white focus:text-black-10 focus:shadow-search-bar-focused placeholder:focus:text-black-45"
                                                                                 name="q"
                                                                                 placeholder="Search for articles..."
                                                                                 type="text" value="">
                          <div
                              class="pointer-events-none absolute inset-y-0 start-0 flex items-center fill-header-color ps-5 peer-focus-visible:fill-black-45">
                            <svg class="fill-inherit" height="21" viewBox="0 0 22 21" width="22"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path clip-rule="evenodd" d="M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"
                                    fill-rule="evenodd"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </header>
        <div class="z-1 flex shrink-0 grow basis-auto justify-center px-5 sm:px-10">
          <section class="max-w-full w-240" data-testid="main-content">
            <section data-testid="landing-section">
              <div class="flex flex-col gap-12">
                <div class="grid auto-rows-auto gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 md:grid-cols-1"><a
                    class="collection-link group/collection-summary flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded-card hover:border-primary-alpha-60 flex-col"
                    data-testid="collection-card-classic"
                    href="https://help.bitlaunch.io/en/collections/2746952-getting-started">
                  <div id="getting-started" class="flex grow flex-row flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-5">
                    <div id="collection-icon-2746952"
                         class="flex items-center rounded-card-inner bg-cover bg-center h-10 w-10 sm:h-[86px] sm:w-[86px] sm:justify-center justify-start"
                         data-test-collection-photo="true">
                      <div class="h-7 w-7 sm:h-10 sm:w-10"><img
                          alt="" height="100%" loading="lazy"
                          src="https://intercom.help/bitlaunch/assets/svg/icon:book-bookmark/000000" width="100%"></div>
                    </div>
                    <div
                        class="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center">
                      <div><h3
                          class="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
                          data-testid="collection-name">Getting Started</h3>
                        <p class="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">How it works</p></div>
                      <div class="mt-3">
                        <div class="flex gap-2">
                          <div class="flex flex-row">
                            <div
                                class="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row"
                                data-testid="avatars"><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4"><span
                                class="">B</span></span><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 ltr:-ml-1.5 rtl:-mr-1.5 z-3"><span
                                class="">S</span></span></div>
                          </div>
                          <span
                              class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color"><span
                              class="hidden sm:inline">By BL and 1 other</span><span
                              class="inline sm:hidden">2 authors</span><svg class="m-2" fill="currentColor" height="4"
                                                                            viewBox="0 0 16 16"
                                                                            width="4" xmlns="http://www.w3.org/2000/svg"><path
                              d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path></svg>8 articles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a><a class="collection-link group/collection-summary flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded-card hover:border-primary-alpha-60 flex-col"
                       data-testid="collection-card-classic"
                       href="https://help.bitlaunch.io/en/collections/2746903-connecting-to-your-vps">
                  <div id="connecting-to-your-vps"
                       class="flex grow flex-row flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-5">
                    <div id="collection-icon-2746903"
                         class="flex items-center rounded-card-inner bg-cover bg-center h-10 w-10 sm:h-[86px] sm:w-[86px] sm:justify-center justify-start"
                         data-test-collection-photo="true">
                      <div class="h-7 w-7 sm:h-10 sm:w-10"><img
                          alt="" height="100%" loading="lazy"
                          src="https://intercom.help/bitlaunch/assets/svg/icon:book-bookmark/000000" width="100%"></div>
                    </div>
                    <div
                        class="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center">
                      <div><h3
                          class="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
                          data-testid="collection-name">Connecting to your VPS</h3>
                        <p class="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">How to connect to your BitLaunch
                          server</p></div>
                      <div class="mt-3">
                        <div class="flex gap-2">
                          <div class="flex flex-row">
                            <div
                                class="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row"
                                data-testid="avatars"><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4"><span
                                class="">B</span></span><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 ltr:-ml-1.5 rtl:-mr-1.5 z-3"><span
                                class="">S</span></span></div>
                          </div>
                          <span
                              class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color"><span
                              class="hidden sm:inline">By BL and 1 other</span><span
                              class="inline sm:hidden">2 authors</span><svg class="m-2" fill="currentColor" height="4"
                                                                            viewBox="0 0 16 16"
                                                                            width="4" xmlns="http://www.w3.org/2000/svg"><path
                              d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path></svg>4 articles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a><a class="collection-link group/collection-summary flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded-card hover:border-primary-alpha-60 flex-col"
                       data-testid="collection-card-classic"
                       href="https://help.bitlaunch.io/en/collections/2746892-using-ssh">
                  <div id="using-ssh" class="flex grow flex-row flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-5">
                    <div id="collection-icon-2746892"
                         class="flex items-center rounded-card-inner bg-cover bg-center h-10 w-10 sm:h-[86px] sm:w-[86px] sm:justify-center justify-start"
                         data-test-collection-photo="true">
                      <div class="h-7 w-7 sm:h-10 sm:w-10"><img
                          alt="" height="100%" loading="lazy"
                          src="https://intercom.help/bitlaunch/assets/svg/icon:book-bookmark/000000" width="100%"></div>
                    </div>
                    <div
                        class="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center">
                      <div><h3
                          class="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
                          data-testid="collection-name">Using SSH</h3>
                        <p class="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">Connecting and managing your VPS with
                          SSH </p></div>
                      <div class="mt-3">
                        <div class="flex gap-2">
                          <div class="flex flex-row">
                            <div
                                class="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row"
                                data-testid="avatars"><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4"><span
                                class="">B</span></span></div>
                          </div>
                          <span
                              class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color"><span
                              class="hidden sm:inline">By BL</span><span class="inline sm:hidden">1 author</span><svg
                              class="m-2" fill="currentColor" height="4" viewBox="0 0 16 16"
                              width="4" xmlns="http://www.w3.org/2000/svg"><path
                              d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path></svg>4 articles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a><a class="collection-link group/collection-summary flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded-card hover:border-primary-alpha-60 flex-col"
                       data-testid="collection-card-classic"
                       href="https://help.bitlaunch.io/en/collections/3337106-one-click-apps">
                  <div id="one-click-apps" class="flex grow flex-row flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-5">
                    <div id="collection-icon-3337106"
                         class="flex items-center rounded-card-inner bg-cover bg-center h-10 w-10 sm:h-[86px] sm:w-[86px] sm:justify-center justify-start"
                         data-test-collection-photo="true">
                      <div class="h-7 w-7 sm:h-10 sm:w-10"><img
                          alt="" height="100%" loading="lazy"
                          src="https://intercom.help/bitlaunch/assets/svg/icon:book-bookmark/000000" width="100%"></div>
                    </div>
                    <div
                        class="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center">
                      <div><h3
                          class="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
                          data-testid="collection-name">One Click Apps</h3>
                        <p class="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">Instructions on how to use BitLaunch
                          apps such as WireGuard VPN</p></div>
                      <div class="mt-3">
                        <div class="flex gap-2">
                          <div class="flex flex-row">
                            <div
                                class="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row"
                                data-testid="avatars"><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4"><span
                                class="">S</span></span></div>
                          </div>
                          <span
                              class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color"><span
                              class="hidden sm:inline">By Staro</span><span class="inline sm:hidden">1 author</span><svg
                              class="m-2" fill="currentColor" height="4" viewBox="0 0 16 16"
                              width="4" xmlns="http://www.w3.org/2000/svg"><path
                              d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path></svg>3 articles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a><a class="collection-link group/collection-summary flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded-card hover:border-primary-alpha-60 flex-col"
                       data-testid="collection-card-classic"
                       href="https://help.bitlaunch.io/en/collections/3047187-windows-troubleshooting">
                  <div id="windows-troubleshooting"
                       class="flex grow flex-row flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-5">
                    <div id="collection-icon-3047187"
                         class="flex items-center rounded-card-inner bg-cover bg-center h-10 w-10 sm:h-[86px] sm:w-[86px] sm:justify-center justify-start"
                         data-test-collection-photo="true">
                      <div class="h-7 w-7 sm:h-10 sm:w-10"><img
                          alt="" height="100%" loading="lazy"
                          src="https://intercom.help/bitlaunch/assets/svg/icon:book-bookmark/000000" width="100%"></div>
                    </div>
                    <div
                        class="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center">
                      <div><h3
                          class="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
                          data-testid="collection-name">Windows Troubleshooting</h3>
                        <p class="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">How to solve common issues encountered
                          when using Windows servers</p></div>
                      <div class="mt-3">
                        <div class="flex gap-2">
                          <div class="flex flex-row">
                            <div
                                class="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row"
                                data-testid="avatars"><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4"><span
                                class="">S</span></span><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 ltr:-ml-1.5 rtl:-mr-1.5 z-3"><span
                                class="">B</span></span></div>
                          </div>
                          <span
                              class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color"><span
                              class="hidden sm:inline">By Staro and 1 other</span><span class="inline sm:hidden">2 authors</span><svg
                              class="m-2" fill="currentColor" height="4" viewBox="0 0 16 16"
                              width="4" xmlns="http://www.w3.org/2000/svg"><path
                              d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path></svg>3 articles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a><a class="collection-link group/collection-summary flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded-card hover:border-primary-alpha-60 flex-col"
                       data-testid="collection-card-classic"
                       href="https://help.bitlaunch.io/en/collections/2746913-vps-management-logs-and-montitoring">
                  <div id="vps-management-logs-and-montitoring"
                       class="flex grow flex-row flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-5">
                    <div id="collection-icon-2746913"
                         class="flex items-center rounded-card-inner bg-cover bg-center h-10 w-10 sm:h-[86px] sm:w-[86px] sm:justify-center justify-start"
                         data-test-collection-photo="true">
                      <div class="h-7 w-7 sm:h-10 sm:w-10"><img
                          alt="" height="100%" loading="lazy"
                          src="https://intercom.help/bitlaunch/assets/svg/icon:book-bookmark/000000" width="100%"></div>
                    </div>
                    <div
                        class="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center">
                      <div><h3
                          class="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
                          data-testid="collection-name">VPS Management, Logs and Montitoring</h3>
                        <p class="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-1">How to manage log files and monitor
                          your VPS</p></div>
                      <div class="mt-3">
                        <div class="flex gap-2">
                          <div class="flex flex-row">
                            <div
                                class="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row"
                                data-testid="avatars"><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4"><span
                                class="">B</span></span><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 ltr:-ml-1.5 rtl:-mr-1.5 z-3"><span
                                class="">S</span></span></div>
                          </div>
                          <span
                              class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color"><span
                              class="hidden sm:inline">By BL and 1 other</span><span
                              class="inline sm:hidden">2 authors</span><svg class="m-2" fill="currentColor" height="4"
                                                                            viewBox="0 0 16 16"
                                                                            width="4" xmlns="http://www.w3.org/2000/svg"><path
                              d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path></svg>6 articles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a><a class="collection-link group/collection-summary flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded-card hover:border-primary-alpha-60 flex-col"
                       data-testid="collection-card-classic"
                       href="https://help.bitlaunch.io/en/collections/2746942-terms-acceptable-use-privacy">
                  <div id="terms-acceptable-use-privacy"
                       class="flex grow flex-row flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-5">
                    <div id="collection-icon-2746942"
                         class="flex items-center rounded-card-inner bg-cover bg-center h-10 w-10 sm:h-[86px] sm:w-[86px] sm:justify-center justify-start"
                         data-test-collection-photo="true">
                      <div class="h-7 w-7 sm:h-10 sm:w-10"><img
                          alt="" height="100%" loading="lazy"
                          src="https://intercom.help/bitlaunch/assets/svg/icon:book-bookmark/000000" width="100%"></div>
                    </div>
                    <div
                        class="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color max-w-oneColWidth justify-center">
                      <div><h3
                          class="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
                          data-testid="collection-name">Terms, Acceptable Use &amp; Privacy</h3></div>
                      <div class="mt-3">
                        <div class="flex gap-2">
                          <div class="flex flex-row">
                            <div
                                class="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row"
                                data-testid="avatars"><span
                                class="inline-flex items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&amp;:nth-child(n+2)]:hidden lg:[&amp;:nth-child(n+2)]:inline-flex h-6 w-6 z-4"><span
                                class="">B</span></span></div>
                          </div>
                          <span
                              class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color"><span
                              class="hidden sm:inline">By BL</span><span class="inline sm:hidden">1 author</span><svg
                              class="m-2" fill="currentColor" height="4" viewBox="0 0 16 16"
                              width="4" xmlns="http://www.w3.org/2000/svg"><path
                              d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path></svg>3 articles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a></div>
              </div>
            </section>
          </section>
        </div>
        <footer id="footer" class="mt-24 shrink-0 bg-footer-bg px-0 py-12 text-left text-base text-footer-color">
          <div class="shrink-0 grow basis-auto px-5 sm:px-10">
            <div class="mx-auto max-w-240 sm:w-auto">
              <div>
                <div class="text-center" data-testid="simple-footer-layout">
                  <div class="align-middle text-lg text-footer-color"><a class="no-underline" href="/en/"><img
                      alt="BitLaunch Help Center"
                      class="max-h-8 contrast-80 inline"
                      data-testid="logo-img" src="https://downloads.intercomcdn.com/i/o/252174/72c99e3826134a570b92d23f/31e9ad93ea0eab2d635a8c61ebba75ed.png"></a></div>
                  <div class="mt-10" data-testid="simple-footer-links">
                    <div class="flex flex-row justify-center"><span><ul id="custom-links" class="mb-4 p-0"
                                                                        data-testid="custom-links"><li
                        class="mx-3 inline-block list-none"><a class="no-underline" data-testid="footer-custom-link-0"
                                                               href="https://bitlaunch.io/blog"
                                                               rel="nofollow noreferrer noopener" target="_blank">Blog</a></li><li
                        class="mx-3 inline-block list-none"><a class="no-underline" data-testid="footer-custom-link-1"
                                                               href="https://developers.bitlaunch.io"
                                                               rel="nofollow noreferrer noopener" target="_blank">Developers</a></li><li
                        class="mx-3 inline-block list-none"><a class="no-underline" data-testid="footer-custom-link-2"
                                                               href="https://bitlaunch.io/affiliates/"
                                                               rel="nofollow noreferrer noopener" target="_blank">Affiliates</a></li><li
                        class="mx-3 inline-block list-none"><a class="no-underline" data-testid="footer-custom-link-3"
                                                               href="https://app.bitlaunch.io/login"
                                                               rel="nofollow noreferrer noopener" target="_blank">Login</a></li><li
                        class="mx-3 inline-block list-none"><a class="no-underline" data-testid="footer-custom-link-4"
                                                               href="https://app.bitlaunch.io/signup"
                                                               rel="nofollow noreferrer noopener" target="_blank">Signup</a></li></ul></span>
                    </div>
                    <ul id="social-links" class="flex flex-wrap items-center gap-4 p-0 justify-center"
                        data-testid="social-links">
                      <li class="list-none align-middle"><a class="no-underline" data-testid="footer-social-link-0"
                                                            href="https://www.twitter.com/bitlaunchio"
                                                            rel="nofollow noreferrer noopener" target="_blank"><img
                          alt="" data-testid="social-icon-twitter" height="16"
                          loading="lazy" src="https://intercom.help/bitlaunch/assets/svg/icon:social-twitter/909aa5" width="16"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>