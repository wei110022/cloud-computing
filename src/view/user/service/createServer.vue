<script lang="ts" setup>

</script>

<template>
  <!--  <div class="pl">
    <div class="row ">
      <h1 class="d-inline">创建服务器</h1>
    </div>
    <div class="row mt-4 mb-3">
      <h4 class="d-inline">选择主机</h4>
    </div>
    <div class="row mb-5 ">
      <div class="col-12 col-sm mb-3">
        <div class="card">
          <div class="card-body">123123</div>
        </div>

      </div>
      <div class="col-12 col-sm mb-3">
        <div class="card">
          <div class="card-body">123123</div>
        </div>

      </div>
      <div class="col-12 col-sm mb-3">
        <div class="card">
          <div class="card-body">123123</div>
        </div>

      </div>
      <div class="col-12 col-sm mb-3">
        <div class="card">
          <div class="card-body">123123</div>
        </div>

      </div>
    </div>
  </div>-->
  <app-servers-new _nghost-ppc-c3="1">
    <div _ngcontent-ppc-c3="1" class="row">
      <div _ngcontent-ppc-c3="1" class="col"><h1 _ngcontent-ppc-c3="1" class="d-inline" _msttexthash="13441012"
                                                _msthash="13">创建服务器</h1></div>
    </div>
    <div _ngcontent-ppc-c3="1" class="row mt-4 mb-3">
      <div _ngcontent-ppc-c3="1" class="col"><h4 _ngcontent-ppc-c3="1" _msttexthash="11767366" _msthash="14">选择主机</h4>
      </div>
    </div>
    <div _ngcontent-ppc-c3="1" class="row mb-5">
      <div _ngcontent-ppc-c3="1" class="col-12 col-sm mb-3">
        <div _ngcontent-ppc-c3="1" class="bitlaunch host card">
          <div _ngcontent-ppc-c3="1" class="card-body"></div>
        </div>
        <div _ngcontent-ppc-c3="1" class="row mt-3">
          <div _ngcontent-ppc-c3="1" class="col"><span _ngcontent-ppc-c3="1" class="text-muted"><i _ngcontent-ppc-c3="1"
                                                                                                 class="material-icons small mr-1"
                                                                                                 _msttexthash="2772042"
                                                                                                 _msthash="15">盾</i><font
              _mstmutation="1" _msttexthash="12664405" _msthash="16">包括 DDoS 保护</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="236106"
              _msthash="17">all_inclusive</i><font _mstmutation="1" _msttexthash="15368392"
                                                   _msthash="18">无限转账</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="5491538" _msthash="19">警告</i><font
              _mstmutation="1" _msttexthash="13596908" _msthash="20">备份不可用</font><br _ngcontent-ppc-c3="1"></span>
          </div>
        </div>
      </div>
      <div _ngcontent-ppc-c3="1" class="col-12 col-sm mb-3">
        <div _ngcontent-ppc-c3="1" class="digitalocean host card">
          <div _ngcontent-ppc-c3="1" class="card-body"></div>
        </div>
        <div _ngcontent-ppc-c3="1" class="row mt-3">
          <div _ngcontent-ppc-c3="1" class="col"><span _ngcontent-ppc-c3="1" class="hostcomp"><i _ngcontent-ppc-c3="1"
                                                                                               class="material-icons small mr-1"
                                                                                               _msttexthash="2772042"
                                                                                               _msthash="21">盾</i><font
              _mstmutation="1" _msttexthash="12664405" _msthash="22">包括 DDoS 保护</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="236106"
              _msthash="23">all_inclusive</i><font _mstmutation="1" _msttexthash="15368392"
                                                   _msthash="24">无限转账</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="206700"
              _msthash="25">cloud_upload</i><font _mstmutation="1" _msttexthash="9739925"
                                                  _msthash="26">提供备份</font><br _ngcontent-ppc-c3="1"></span></div>
        </div>
      </div>
      <div _ngcontent-ppc-c3="1" class="col-12 col-sm mb-3">
        <div _ngcontent-ppc-c3="1" class="vultr host card">
          <div _ngcontent-ppc-c3="1" class="card-body"></div>
        </div>
        <div _ngcontent-ppc-c3="1" class="row mt-3">
          <div _ngcontent-ppc-c3="1" class="col"><span _ngcontent-ppc-c3="1" class="hostcomp"><i _ngcontent-ppc-c3="1"
                                                                                               class="material-icons small mr-1"
                                                                                               _msttexthash="5491538"
                                                                                               _msthash="27">警告</i><font
              _mstmutation="1" _msttexthash="13370513" _msthash="28">没有 DDoS 保护</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="5491538" _msthash="29">警告</i><font
              _mstmutation="1" _msttexthash="26367445" _msthash="30">转账超额适用</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="206700"
              _msthash="31">cloud_upload</i><font _mstmutation="1" _msttexthash="9739925"
                                                  _msthash="32">提供备份</font><br _ngcontent-ppc-c3="1"></span></div>
        </div>
      </div>
      <div _ngcontent-ppc-c3="1" class="col-12 col-sm mb-3">
        <div _ngcontent-ppc-c3="1" class="linode host card">
          <div _ngcontent-ppc-c3="1" class="card-body"></div>
        </div>
        <div _ngcontent-ppc-c3="1" class="row mt-3">
          <div _ngcontent-ppc-c3="1" class="col"><span _ngcontent-ppc-c3="1" class="hostcomp"><i _ngcontent-ppc-c3="1"
                                                                                               class="material-icons small mr-1"
                                                                                               _msttexthash="2772042"
                                                                                               _msthash="33">盾</i><font
              _mstmutation="1" _msttexthash="12664405" _msthash="34">包括 DDoS 保护</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="236106"
              _msthash="35">all_inclusive</i><font _mstmutation="1" _msttexthash="15368392"
                                                   _msthash="36">无限转账</font><br _ngcontent-ppc-c3="1"><i
              _ngcontent-ppc-c3="1" class="material-icons small mr-1" _msttexthash="206700"
              _msthash="37">cloud_upload</i><font _mstmutation="1" _msttexthash="9739925"
                                                  _msthash="38">提供备份</font><br _ngcontent-ppc-c3="1"></span></div>
        </div>
      </div>
    </div><!----><!---->
    <div _ngcontent-ppc-c3="1">
      <div _ngcontent-ppc-c3="1" class="row mb-3">
        <div _ngcontent-ppc-c3="1" class="col-12"><h4 _ngcontent-ppc-c3="1" _msttexthash="12223523" _msthash="39">
          选择硬件</h4></div>
      </div>
      <div _ngcontent-ppc-c3="1" class="row"><!---->
        <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-3">
          <div _ngcontent-ppc-c3="1" class="region card active" container="body">
            <div _ngcontent-ppc-c3="1" class="card-body">
              <div _ngcontent-ppc-c3="1" class="row">
                <div _ngcontent-ppc-c3="1" class="col-2 col-xs-3 col-md-3">
                  <div _ngcontent-ppc-c3="1" class="hardware-logo-wrapper"><!---->
                    <div _ngcontent-ppc-c3="1">
                      <svg _ngcontent-ppc-c3="1" fill="currentColor" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg">
                        <path _ngcontent-ppc-c3="1"
                              d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                      </svg>
                    </div><!----></div>
                </div>
                <div _ngcontent-ppc-c3="1" class="col-10 col-xs-9 col-md-9">
                  <div _ngcontent-ppc-c3="1" class="card-text d-inline-block align-middle text-left"
                       _msttexthash="32897293" _msthash="573"><b _ngcontent-ppc-c3="1" _istranslated="1"> 云 CPU</b><br
                      _ngcontent-ppc-c3="1" _istranslated="1"><small _ngcontent-ppc-c3="1" style="color:#6c757d;"
                                                                    _istranslated="1">英特尔驱动的 VPS</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ppc-c3="1" class="mt-5">
        <div _ngcontent-ppc-c3="1" class="row mb-3">
          <div _ngcontent-ppc-c3="1" class="col"><h4 _ngcontent-ppc-c3="1" _msttexthash="11283727" _msthash="41">
            选择图像</h4></div>
        </div>
        <app-server-image _ngcontent-ppc-c3="1" _nghost-ppc-c4="1">
          <div _ngcontent-ppc-c4="1">
            <div _ngcontent-ppc-c4="1" class="row mb-3">
              <div _ngcontent-ppc-c4="1" class="col">
                <ul _ngcontent-ppc-c4="1" class="nav-images nav nav-pills">
                  <li _ngcontent-ppc-c4="1" class="nav-item"><a _ngcontent-ppc-c4="1" class="nav-link active" 
                                                               _msttexthash="4178018" _msthash="42">图像</a></li>
                  <li _ngcontent-ppc-c4="1" class="nav-item"><a _ngcontent-ppc-c4="1" class="nav-link" 
                                                               _msttexthash="12124801" _msthash="43">应用程序</a></li>
                </ul>
              </div>
            </div><!---->
            <div _ngcontent-ppc-c4="1" class="row"><!----><!---->
              <div _ngcontent-ppc-c4="1" class="col-12 col-sm-3 mb-3">
                <div _ngcontent-ppc-c4="1" class="image card active">
                  <div _ngcontent-ppc-c4="1" class="card-body">
                    <div _ngcontent-ppc-c4="1" class="card-text text-center"><b _ngcontent-ppc-c4="1"
                                                                               _msttexthash="5208216" _msthash="480">Ubuntu的</b>
                    </div>
                  </div><!----><!---->
                  <div _ngcontent-ppc-c4="1" class="card-footer has-versions dropdown" container="body" dropdown="1">
                    <div _ngcontent-ppc-c4="1" class="dropdown-caret"><i _ngcontent-ppc-c4="1"
                                                                        class="material-icons md-18 align-middle"
                                                                        _msttexthash="425139" _msthash="474"></i>
                    </div>
                    <div _ngcontent-ppc-c4="1" class="text-center" dropdowntoggle="1" aria-haspopup="true"
                         _msttexthash="188864" _msthash="475">Ubuntu 22.04 LTS
                    </div><!----></div><!----></div>
              </div>
              <div _ngcontent-ppc-c4="1" class="col-12 col-sm-3 mb-3">
                <div _ngcontent-ppc-c4="1" class="image card">
                  <div _ngcontent-ppc-c4="1" class="card-body">
                    <div _ngcontent-ppc-c4="1" class="card-text text-center"><b _ngcontent-ppc-c4="1"
                                                                               _msttexthash="5200299" _msthash="479">Debian
                      的</b></div>
                  </div><!----><!---->
                  <div _ngcontent-ppc-c4="1" class="card-footer has-versions dropdown" container="body" dropdown="1">
                    <div _ngcontent-ppc-c4="1" class="dropdown-caret"><i _ngcontent-ppc-c4="1"
                                                                        class="material-icons md-18 align-middle"
                                                                        _msttexthash="425139" _msthash="472"></i>
                    </div>
                    <div _ngcontent-ppc-c4="1" class="text-center" dropdowntoggle="1" aria-haspopup="true"
                         _msttexthash="12845339" _msthash="473">选择版本
                    </div><!----></div><!----></div>
              </div>
              <div _ngcontent-ppc-c4="1" class="col-12 col-sm-3 mb-3">
                <div _ngcontent-ppc-c4="1" class="image card">
                  <div _ngcontent-ppc-c4="1" class="card-body">
                    <div _ngcontent-ppc-c4="1" class="card-text text-center"><b _ngcontent-ppc-c4="1"
                                                                               _msttexthash="21122010" _msthash="478">CentOS
                      操作系统</b></div>
                  </div><!----><!---->
                  <div _ngcontent-ppc-c4="1" class="card-footer has-versions dropdown" container="body" dropdown="1">
                    <div _ngcontent-ppc-c4="1" class="dropdown-caret"><i _ngcontent-ppc-c4="1"
                                                                        class="material-icons md-18 align-middle"
                                                                        _msttexthash="425139" _msthash="470"></i>
                    </div>
                    <div _ngcontent-ppc-c4="1" class="text-center" dropdowntoggle="1" aria-haspopup="true"
                         _msttexthash="12845339" _msthash="471">选择版本
                    </div><!----></div><!----></div>
              </div>
              <div _ngcontent-ppc-c4="1" class="col-12 col-sm-3 mb-3">
                <div _ngcontent-ppc-c4="1" class="image card">
                  <div _ngcontent-ppc-c4="1" class="card-body">
                    <div _ngcontent-ppc-c4="1" class="card-text text-center"><b _ngcontent-ppc-c4="1"
                                                                               _msttexthash="5470725"
                                                                               _msthash="477">窗户</b></div>
                  </div><!---->
                  <div _ngcontent-ppc-c4="1" class="card-footer text-center" _msttexthash="15538731" _msthash="469">
                    Windows 10 专业版
                  </div><!----></div>
              </div>
              <div _ngcontent-ppc-c4="1" class="col-12 col-sm-3 mb-3">
                <div _ngcontent-ppc-c4="1" class="image card">
                  <div _ngcontent-ppc-c4="1" class="card-body">
                    <div _ngcontent-ppc-c4="1" class="card-text text-center"><b _ngcontent-ppc-c4="1"
                                                                               _msttexthash="11646284" _msthash="476">Ubuntu
                      桌面</b></div>
                  </div><!----><!---->
                  <div _ngcontent-ppc-c4="1" class="card-footer has-versions dropdown" container="body" dropdown="1">
                    <div _ngcontent-ppc-c4="1" class="dropdown-caret"><i _ngcontent-ppc-c4="1"
                                                                        class="material-icons md-18 align-middle"
                                                                        _msttexthash="425139" _msthash="467"></i>
                    </div>
                    <div _ngcontent-ppc-c4="1" class="text-center" dropdowntoggle="1" aria-haspopup="true"
                         _msttexthash="12845339" _msthash="468">选择版本
                    </div><!----></div><!----></div>
              </div>
            </div><!----></div>
        </app-server-image>
      </div><!---->
      <div _ngcontent-ppc-c3="1" class="mt-5">
        <div _ngcontent-ppc-c3="1" class="mb-5">
          <div _ngcontent-ppc-c3="1" class="row mb-3">
            <div _ngcontent-ppc-c3="1" class="col"><h4 _ngcontent-ppc-c3="1" _msttexthash="26717106" _msthash="552">
              选择数据中心区域</h4></div>
          </div>
          <div _ngcontent-ppc-c3="1" class="row"><!---->
            <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-3">
              <div _ngcontent-ppc-c3="1" class="region card active" container="body">
                <div _ngcontent-ppc-c3="1" class="card-body"><!---->
                  <div _ngcontent-ppc-c3="1" class="text-center">
                    <div _ngcontent-ppc-c3="1" class="flag-wrapper"><!----><!----><!---->
                      <svg _ngcontent-ppc-c3="1" viewBox="0 0 640 480" width="52">
                        <path _ngcontent-ppc-c3="1" d="M0 0h640v480H0z" fill="#21468b"></path>
                        <path _ngcontent-ppc-c3="1" d="M0 0h640v320H0z" fill="#fff"></path>
                        <path _ngcontent-ppc-c3="1" d="M0 0h640v160H0z" fill="#ae1c28"></path>
                      </svg><!----></div>
                    <div _ngcontent-ppc-c3="1" class="card-text d-inline-block align-middle text-left"><b
                        _ngcontent-ppc-c3="1" _msttexthash="15609113" _msthash="543">阿姆斯特丹</b><br
                        _ngcontent-ppc-c3="1"><small _ngcontent-ppc-c3="1" style="color:#6c757d;"><font _mstmutation="1"
                                                                                                      _msttexthash="5230797"
                                                                                                      _msthash="544">荷兰</font>
                      <!----></small></div>
                  </div><!----></div><!---->
                <div _ngcontent-ppc-c3="1"><!---->
                  <div _ngcontent-ppc-c3="1">
                    <div _ngcontent-ppc-c3="1" class="card-footer">
                      <div _ngcontent-ppc-c3="1" class="row"><!---->
                        <div _ngcontent-ppc-c3="1" class="col subregion footer-selection-disabled" container="body"
                             _msttexthash="4459" _msthash="542">1
                        </div><!---->
                        <div _ngcontent-ppc-c3="1" class="col subregion active" container="body" _msttexthash="4550"
                             _msthash="541">2
                        </div><!----></div>
                    </div>
                  </div><!----></div>
              </div>
            </div>
            <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-3">
              <div _ngcontent-ppc-c3="1" class="region card" container="body">
                <div _ngcontent-ppc-c3="1" class="card-body"><!---->
                  <div _ngcontent-ppc-c3="1" class="text-center">
                    <div _ngcontent-ppc-c3="1" class="flag-wrapper"><!----><!----><!----><!---->
                      <svg _ngcontent-ppc-c3="1" viewBox="0 0 640 480" width="52">
                        <g _ngcontent-ppc-c3="1" transform="scale(.64064 .72072)">
                          <g _ngcontent-ppc-c3="1" fill-rule="evenodd" stroke-width="1pt" transform="scale(8.325)">
                            <rect _ngcontent-ppc-c3="1" fill="#00319c" height="80" width="40" x="0" y="0"></rect>
                            <rect _ngcontent-ppc-c3="1" fill="#ffde00" height="80" width="40" x="40" y="0"></rect>
                            <rect _ngcontent-ppc-c3="1" fill="#de2110" height="80" width="40" x="80" y="0"></rect>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div _ngcontent-ppc-c3="1" class="card-text d-inline-block align-middle text-left"><b
                        _ngcontent-ppc-c3="1" _msttexthash="14445184" _msthash="539">布加勒斯特</b><br
                        _ngcontent-ppc-c3="1"><small _ngcontent-ppc-c3="1" style="color:#6c757d;"><font _mstmutation="1"
                                                                                                      _msttexthash="12456301"
                                                                                                      _msthash="540">罗马尼亚</font>
                      <!----></small></div>
                  </div><!----></div><!---->
                <div _ngcontent-ppc-c3="1"><!---->
                  <div _ngcontent-ppc-c3="1">
                    <div _ngcontent-ppc-c3="1" class="card-footer">
                      <div _ngcontent-ppc-c3="1" class="row"><!---->
                        <div _ngcontent-ppc-c3="1" class="col subregion" container="body" _msttexthash="4459"
                             _msthash="538">1
                        </div><!----></div>
                    </div>
                  </div><!----></div>
              </div>
            </div>
            <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-3">
              <div _ngcontent-ppc-c3="1" class="region card" container="body">
                <div _ngcontent-ppc-c3="1" class="card-body"><!---->
                  <div _ngcontent-ppc-c3="1" class="text-center">
                    <div _ngcontent-ppc-c3="1" class="flag-wrapper"><!----><!---->
                      <svg _ngcontent-ppc-c3="1" viewBox="0 0 640 480" width="52">
                        <defs _ngcontent-ppc-c3="1">
                          <clipPath _ngcontent-ppc-c3="1" id="a">
                            <path _ngcontent-ppc-c3="1" d="M-85.3 0h682.6v512H-85.3z" fill-opacity="0.7"></path>
                          </clipPath>
                        </defs>
                        <g _ngcontent-ppc-c3="1" clip-path="url(#a)" transform="translate(80) scale(.94)">
                          <g _ngcontent-ppc-c3="1" stroke-width="1pt">
                            <path _ngcontent-ppc-c3="1" d="M-256 0H768v512H-256z" fill="#012169"></path>
                            <path _ngcontent-ppc-c3="1"
                                  d="M-256 0v57.2L653.5 512H768v-57.2L-141.5 0H-256zM768 0v57.2L-141.5 512H-256v-57.2L653.5 0H768z"
                                  fill="#fff"></path>
                            <path _ngcontent-ppc-c3="1" d="M170.7 0v512h170.6V0H170.7zM-256 170.7v170.6H768V170.7H-256z"
                                  fill="#fff"></path>
                            <path _ngcontent-ppc-c3="1"
                                  d="M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.3 341.3h76.4L-179.7 512H-256zm0-512L85.3 170.7H9L-256 38.2V0zm606.4 170.7L691.7 0H768L426.7 170.7h-76.3zM768 512L426.7 341.3H503l265 132.5V512z"
                                  fill="#c8102e"></path>
                          </g>
                        </g>
                      </svg><!----><!----></div>
                    <div _ngcontent-ppc-c3="1" class="card-text d-inline-block align-middle text-left"><b
                        _ngcontent-ppc-c3="1" _msttexthash="4543474" _msthash="536">伦敦</b><br
                        _ngcontent-ppc-c3="1"><small _ngcontent-ppc-c3="1" style="color:#6c757d;"><font _mstmutation="1"
                                                                                                      _msttexthash="5366387"
                                                                                                      _msthash="537">英国</font>
                      <!----></small></div>
                  </div><!----></div><!---->
                <div _ngcontent-ppc-c3="1"><!---->
                  <div _ngcontent-ppc-c3="1">
                    <div _ngcontent-ppc-c3="1" class="card-footer">
                      <div _ngcontent-ppc-c3="1" class="row"><!---->
                        <div _ngcontent-ppc-c3="1" class="col subregion" container="body" _msttexthash="4459"
                             _msthash="535">1
                        </div><!----></div>
                    </div>
                  </div><!----></div>
              </div>
            </div>
            <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-3">
              <div _ngcontent-ppc-c3="1" class="region card" container="body">
                <div _ngcontent-ppc-c3="1" class="card-body"><!---->
                  <div _ngcontent-ppc-c3="1" class="text-center">
                    <div _ngcontent-ppc-c3="1" class="flag-wrapper"><!---->
                      <svg _ngcontent-ppc-c3="1" viewBox="0 0 640 480" width="52">
                        <g _ngcontent-ppc-c3="1" fill-rule="evenodd">
                          <g _ngcontent-ppc-c3="1" stroke-width="1pt">
                            <path _ngcontent-ppc-c3="1"
                                  d="M0 0h912v36.938H0zm0 73.875h912v36.938H0zm0 73.781h912v37.031H0zm0 73.875h912v36.938H0zm0 73.875h912v36.938H0zm0 73.781h912v36.938H0zm0 73.875h912V480H0z"
                                  fill="#bd3d44"></path>
                            <path _ngcontent-ppc-c3="1"
                                  d="M0 36.938h912v36.937H0zm0 73.874h912v36.844H0zm0 73.782h912v36.937H0zm0 73.875h912v36.937H0zm0 73.875h912v36.937H0zm0 73.781h912v36.938H0z"
                                  fill="#fff"></path>
                          </g>
                          <path _ngcontent-ppc-c3="1" d="M0 0h364.781v258.469H0z" fill="#192f5d"></path>
                          <path _ngcontent-ppc-c3="1"
                                d="M30.375 11.063L33.75 21.28h10.688l-8.626 6.282 3.282 10.312-8.719-6.375-8.625 6.281 3.281-10.218-8.718-6.282h10.874zm60.844 0L94.5 21.28h10.781l-8.719 6.282 3.282 10.312-8.625-6.375-8.719 6.281 3.281-10.218-8.625-6.282h10.688zm60.75 0l3.375 10.218h10.593l-8.625 6.282 3.282 10.312-8.719-6.375-8.625 6.281 3.281-10.218-8.719-6.282h10.782zm60.844 0l3.28 10.218h10.782l-8.719 6.282 3.375 10.312-8.719-6.375-8.718 6.281 3.375-10.218-8.719-6.282h10.687zm60.75 0l3.375 10.218h10.687L279 27.563l3.281 10.312-8.719-6.375-8.625 6.281 3.282-10.218-8.625-6.282h10.687zm60.843 0l3.281 10.218h10.782l-8.719 6.282 3.375 10.312-8.719-6.375-8.719 6.281 3.375-10.218-8.718-6.282h10.781zM60.844 36.936l3.281 10.22h10.781l-8.719 6.28 3.188 10.22-8.438-6.282-8.718 6.281 3.093-10.218-8.437-6.282h10.687zm60.75 0l3.375 10.22h10.687l-8.719 6.28 3.375 10.22-8.718-6.282-8.719 6.281 3.375-10.219-8.719-6.28h10.781zm60.843 0l3.282 10.22H196.5l-8.719 6.28 3.281 10.22-8.625-6.282-8.718 6.281L177 53.438l-8.625-6.282h10.687zm60.75 0l3.375 10.22h10.688l-8.719 6.28 3.375 10.22-8.719-6.282-8.625 6.281 3.282-10.218-8.719-6.282H240zm60.844 0l3.281 10.22h10.782l-8.719 6.28 3.281 10.22-8.625-6.282-8.719 6.281 3.282-10.218-8.625-6.282h10.687zM30.375 62.72l3.375 10.406h10.687l-8.625 6.281 3.282 10.219-8.719-6.375-8.625 6.375 3.281-10.313-8.719-6.28h10.875zm60.844 0L94.5 73.03h10.781l-8.719 6.281 3.282 10.22-8.625-6.376-8.719 6.375 3.281-10.312-8.625-6.281h10.688zm60.75 0l3.375 10.312h10.593l-8.625 6.281 3.282 10.22-8.719-6.376-8.625 6.375 3.281-10.312-8.719-6.281h10.782zm60.843 0l3.282 10.312h10.781l-8.719 6.281 3.375 10.22-8.719-6.376-8.718 6.375 3.375-10.312-8.719-6.281h10.687zm60.75 0l3.375 10.312h10.688L279 79.312l3.281 10.22-8.719-6.376-8.625 6.375 3.282-10.312-8.625-6.281h10.687zm60.844 0l3.281 10.312h10.782l-8.719 6.281 3.375 10.22-8.719-6.376-8.719 6.375 3.375-10.312-8.718-6.281h10.781zM60.844 88.594l3.281 10.219h10.781l-8.719 6.28 3.282 10.313-8.625-6.375-8.719 6.281 3.281-10.218-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.719 6.28 3.376 10.313-8.72-6.375-8.718 6.281 3.375-10.218-8.719-6.281h10.781zm60.844 0l3.28 10.219H196.5l-8.719 6.28 3.281 10.313-8.625-6.375-8.718 6.281L177 105.094l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.313-8.719-6.375-8.625 6.281 3.282-10.218-8.719-6.281H240zm60.843 0l3.281 10.219h10.782l-8.719 6.28 3.281 10.313-8.625-6.375-8.719 6.281 3.282-10.218-8.625-6.281h10.687zM30.375 114.469l3.375 10.219h10.688l-8.625 6.28 3.28 10.313-8.718-6.375-8.625 6.281 3.281-10.218-8.718-6.281h10.875zm60.844 0l3.281 10.219h10.781l-8.719 6.28 3.282 10.22-8.625-6.282-8.719 6.281 3.281-10.218-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.594l-8.625 6.28 3.28 10.313-8.718-6.375-8.625 6.281 3.281-10.218-8.718-6.281h10.78zm60.844 0l3.28 10.219h10.782l-8.719 6.28 3.375 10.313-8.718-6.375-8.72 6.281 3.376-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.313-8.719-6.375-8.625 6.281 3.282-10.218-8.625-6.281h10.687zm60.843 0l3.281 10.219h10.782l-8.719 6.28 3.375 10.313-8.719-6.375-8.719 6.281 3.375-10.218-8.718-6.281h10.781zM60.844 140.344l3.281 10.219h10.781l-8.718 6.28 3.28 10.22-8.624-6.375-8.719 6.375 3.281-10.313-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.718 6.28 3.375 10.22-8.72-6.375-8.718 6.375 3.375-10.313-8.719-6.281h10.782zm60.844 0l3.28 10.219H196.5l-8.719 6.28 3.282 10.22-8.625-6.375-8.72 6.375L177 156.75l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.22-8.718-6.375-8.625 6.375 3.28-10.313-8.718-6.281H240zm60.843 0l3.282 10.219h10.78l-8.718 6.28 3.281 10.22-8.625-6.375-8.718 6.375 3.28-10.313-8.624-6.281h10.687zM30.375 166.125l3.375 10.313h10.688l-8.625 6.28 3.28 10.126-8.718-6.281-8.625 6.28 3.281-10.218-8.718-6.281h10.875zm60.844 0l3.281 10.313h10.781l-8.718 6.28 3.375 10.126-8.72-6.281-8.718 6.28 3.375-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.313h10.594l-8.625 6.28 3.28 10.126-8.718-6.281-8.625 6.28 3.281-10.218-8.718-6.281h10.78zm60.844 0l3.28 10.313h10.782l-8.719 6.28 3.375 10.126-8.718-6.281-8.72 6.28 3.376-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.313h10.687l-8.625 6.28 3.281 10.126-8.718-6.281-8.625 6.28 3.28-10.218-8.624-6.281h10.687zm60.843 0l3.282 10.313h10.78l-8.718 6.28 3.375 10.126-8.719-6.281-8.718 6.28 3.375-10.218-8.72-6.281h10.782zM60.844 192l3.281 10.219h10.781l-8.718 6.281 3.28 10.313-8.624-6.375-8.719 6.28 3.281-10.218-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.718 6.281 3.375 10.313-8.72-6.375-8.718 6.28 3.375-10.218-8.719-6.281h10.782zm60.844 0l3.28 10.219H196.5l-8.719 6.281 3.282 10.313-8.625-6.375-8.72 6.28L177 208.5l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.281 3.281 10.313-8.718-6.375-8.625 6.28 3.28-10.218-8.718-6.281H240zm60.843 0l3.282 10.219h10.78l-8.718 6.281 3.281 10.313-8.625-6.375-8.718 6.28 3.28-10.218-8.624-6.281h10.687zM30.375 217.875l3.375 10.219h10.688l-8.625 6.281 3.28 10.219-8.718-6.281-8.625 6.28 3.281-10.312L16.313 228h10.875zm60.844 0l3.281 10.219h10.781l-8.718 6.281 3.375 10.219-8.72-6.281-8.718 6.28 3.375-10.312L77.156 228h10.688zm60.75 0l3.375 10.219h10.594l-8.438 6.281 3.281 10.219-8.718-6.281-8.625 6.28 3.28-10.312L138 228h10.781zm60.844 0l3.28 10.219h10.782l-8.719 6.281 3.375 10.219-8.718-6.281-8.72 6.28 3.376-10.312L198.75 228h10.688zm60.75 0l3.375 10.219h10.687L279 234.375l3.281 10.219-8.718-6.281-8.625 6.28 3.28-10.312-8.624-6.281h10.687zm60.843 0l3.282 10.219h10.78l-8.718 6.281 3.375 10.219-8.719-6.281-8.718 6.28 3.375-10.312-8.72-6.281h10.782z"
                                fill="#fff"></path>
                        </g>
                      </svg><!----><!----><!----></div>
                    <div _ngcontent-ppc-c3="1" class="card-text d-inline-block align-middle text-left"><b
                        _ngcontent-ppc-c3="1" _msttexthash="8884655" _msthash="533">洛杉矶</b><br
                        _ngcontent-ppc-c3="1"><small _ngcontent-ppc-c3="1" style="color:#6c757d;"><font _mstmutation="1"
                                                                                                      _msttexthash="14228253"
                                                                                                      _msthash="534">美国西部</font>
                      <!----><i _ngcontent-ppc-c3="1" class="material-icons info-icon" container="body"
                                tooltip="Asia Optimized Routes" _msttexthash="209989" _msthash="532">info_outline</i>
                      <!----></small></div>
                  </div><!----></div><!---->
                <div _ngcontent-ppc-c3="1"><!---->
                  <div _ngcontent-ppc-c3="1">
                    <div _ngcontent-ppc-c3="1" class="card-footer">
                      <div _ngcontent-ppc-c3="1" class="row"><!---->
                        <div _ngcontent-ppc-c3="1" class="col subregion" container="body" _msttexthash="4459"
                             _msthash="531">1
                        </div><!----></div>
                    </div>
                  </div><!----></div>
              </div>
            </div>
            <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-3">
              <div _ngcontent-ppc-c3="1" class="region card" container="body">
                <div _ngcontent-ppc-c3="1" class="card-body"><!---->
                  <div _ngcontent-ppc-c3="1" class="text-center">
                    <div _ngcontent-ppc-c3="1" class="flag-wrapper"><!---->
                      <svg _ngcontent-ppc-c3="1" viewBox="0 0 640 480" width="52">
                        <g _ngcontent-ppc-c3="1" fill-rule="evenodd">
                          <g _ngcontent-ppc-c3="1" stroke-width="1pt">
                            <path _ngcontent-ppc-c3="1"
                                  d="M0 0h912v36.938H0zm0 73.875h912v36.938H0zm0 73.781h912v37.031H0zm0 73.875h912v36.938H0zm0 73.875h912v36.938H0zm0 73.781h912v36.938H0zm0 73.875h912V480H0z"
                                  fill="#bd3d44"></path>
                            <path _ngcontent-ppc-c3="1"
                                  d="M0 36.938h912v36.937H0zm0 73.874h912v36.844H0zm0 73.782h912v36.937H0zm0 73.875h912v36.937H0zm0 73.875h912v36.937H0zm0 73.781h912v36.938H0z"
                                  fill="#fff"></path>
                          </g>
                          <path _ngcontent-ppc-c3="1" d="M0 0h364.781v258.469H0z" fill="#192f5d"></path>
                          <path _ngcontent-ppc-c3="1"
                                d="M30.375 11.063L33.75 21.28h10.688l-8.626 6.282 3.282 10.312-8.719-6.375-8.625 6.281 3.281-10.218-8.718-6.282h10.874zm60.844 0L94.5 21.28h10.781l-8.719 6.282 3.282 10.312-8.625-6.375-8.719 6.281 3.281-10.218-8.625-6.282h10.688zm60.75 0l3.375 10.218h10.593l-8.625 6.282 3.282 10.312-8.719-6.375-8.625 6.281 3.281-10.218-8.719-6.282h10.782zm60.844 0l3.28 10.218h10.782l-8.719 6.282 3.375 10.312-8.719-6.375-8.718 6.281 3.375-10.218-8.719-6.282h10.687zm60.75 0l3.375 10.218h10.687L279 27.563l3.281 10.312-8.719-6.375-8.625 6.281 3.282-10.218-8.625-6.282h10.687zm60.843 0l3.281 10.218h10.782l-8.719 6.282 3.375 10.312-8.719-6.375-8.719 6.281 3.375-10.218-8.718-6.282h10.781zM60.844 36.936l3.281 10.22h10.781l-8.719 6.28 3.188 10.22-8.438-6.282-8.718 6.281 3.093-10.218-8.437-6.282h10.687zm60.75 0l3.375 10.22h10.687l-8.719 6.28 3.375 10.22-8.718-6.282-8.719 6.281 3.375-10.219-8.719-6.28h10.781zm60.843 0l3.282 10.22H196.5l-8.719 6.28 3.281 10.22-8.625-6.282-8.718 6.281L177 53.438l-8.625-6.282h10.687zm60.75 0l3.375 10.22h10.688l-8.719 6.28 3.375 10.22-8.719-6.282-8.625 6.281 3.282-10.218-8.719-6.282H240zm60.844 0l3.281 10.22h10.782l-8.719 6.28 3.281 10.22-8.625-6.282-8.719 6.281 3.282-10.218-8.625-6.282h10.687zM30.375 62.72l3.375 10.406h10.687l-8.625 6.281 3.282 10.219-8.719-6.375-8.625 6.375 3.281-10.313-8.719-6.28h10.875zm60.844 0L94.5 73.03h10.781l-8.719 6.281 3.282 10.22-8.625-6.376-8.719 6.375 3.281-10.312-8.625-6.281h10.688zm60.75 0l3.375 10.312h10.593l-8.625 6.281 3.282 10.22-8.719-6.376-8.625 6.375 3.281-10.312-8.719-6.281h10.782zm60.843 0l3.282 10.312h10.781l-8.719 6.281 3.375 10.22-8.719-6.376-8.718 6.375 3.375-10.312-8.719-6.281h10.687zm60.75 0l3.375 10.312h10.688L279 79.312l3.281 10.22-8.719-6.376-8.625 6.375 3.282-10.312-8.625-6.281h10.687zm60.844 0l3.281 10.312h10.782l-8.719 6.281 3.375 10.22-8.719-6.376-8.719 6.375 3.375-10.312-8.718-6.281h10.781zM60.844 88.594l3.281 10.219h10.781l-8.719 6.28 3.282 10.313-8.625-6.375-8.719 6.281 3.281-10.218-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.719 6.28 3.376 10.313-8.72-6.375-8.718 6.281 3.375-10.218-8.719-6.281h10.781zm60.844 0l3.28 10.219H196.5l-8.719 6.28 3.281 10.313-8.625-6.375-8.718 6.281L177 105.094l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.313-8.719-6.375-8.625 6.281 3.282-10.218-8.719-6.281H240zm60.843 0l3.281 10.219h10.782l-8.719 6.28 3.281 10.313-8.625-6.375-8.719 6.281 3.282-10.218-8.625-6.281h10.687zM30.375 114.469l3.375 10.219h10.688l-8.625 6.28 3.28 10.313-8.718-6.375-8.625 6.281 3.281-10.218-8.718-6.281h10.875zm60.844 0l3.281 10.219h10.781l-8.719 6.28 3.282 10.22-8.625-6.282-8.719 6.281 3.281-10.218-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.594l-8.625 6.28 3.28 10.313-8.718-6.375-8.625 6.281 3.281-10.218-8.718-6.281h10.78zm60.844 0l3.28 10.219h10.782l-8.719 6.28 3.375 10.313-8.718-6.375-8.72 6.281 3.376-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.313-8.719-6.375-8.625 6.281 3.282-10.218-8.625-6.281h10.687zm60.843 0l3.281 10.219h10.782l-8.719 6.28 3.375 10.313-8.719-6.375-8.719 6.281 3.375-10.218-8.718-6.281h10.781zM60.844 140.344l3.281 10.219h10.781l-8.718 6.28 3.28 10.22-8.624-6.375-8.719 6.375 3.281-10.313-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.718 6.28 3.375 10.22-8.72-6.375-8.718 6.375 3.375-10.313-8.719-6.281h10.782zm60.844 0l3.28 10.219H196.5l-8.719 6.28 3.282 10.22-8.625-6.375-8.72 6.375L177 156.75l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.22-8.718-6.375-8.625 6.375 3.28-10.313-8.718-6.281H240zm60.843 0l3.282 10.219h10.78l-8.718 6.28 3.281 10.22-8.625-6.375-8.718 6.375 3.28-10.313-8.624-6.281h10.687zM30.375 166.125l3.375 10.313h10.688l-8.625 6.28 3.28 10.126-8.718-6.281-8.625 6.28 3.281-10.218-8.718-6.281h10.875zm60.844 0l3.281 10.313h10.781l-8.718 6.28 3.375 10.126-8.72-6.281-8.718 6.28 3.375-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.313h10.594l-8.625 6.28 3.28 10.126-8.718-6.281-8.625 6.28 3.281-10.218-8.718-6.281h10.78zm60.844 0l3.28 10.313h10.782l-8.719 6.28 3.375 10.126-8.718-6.281-8.72 6.28 3.376-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.313h10.687l-8.625 6.28 3.281 10.126-8.718-6.281-8.625 6.28 3.28-10.218-8.624-6.281h10.687zm60.843 0l3.282 10.313h10.78l-8.718 6.28 3.375 10.126-8.719-6.281-8.718 6.28 3.375-10.218-8.72-6.281h10.782zM60.844 192l3.281 10.219h10.781l-8.718 6.281 3.28 10.313-8.624-6.375-8.719 6.28 3.281-10.218-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.718 6.281 3.375 10.313-8.72-6.375-8.718 6.28 3.375-10.218-8.719-6.281h10.782zm60.844 0l3.28 10.219H196.5l-8.719 6.281 3.282 10.313-8.625-6.375-8.72 6.28L177 208.5l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.281 3.281 10.313-8.718-6.375-8.625 6.28 3.28-10.218-8.718-6.281H240zm60.843 0l3.282 10.219h10.78l-8.718 6.281 3.281 10.313-8.625-6.375-8.718 6.28 3.28-10.218-8.624-6.281h10.687zM30.375 217.875l3.375 10.219h10.688l-8.625 6.281 3.28 10.219-8.718-6.281-8.625 6.28 3.281-10.312L16.313 228h10.875zm60.844 0l3.281 10.219h10.781l-8.718 6.281 3.375 10.219-8.72-6.281-8.718 6.28 3.375-10.312L77.156 228h10.688zm60.75 0l3.375 10.219h10.594l-8.438 6.281 3.281 10.219-8.718-6.281-8.625 6.28 3.28-10.312L138 228h10.781zm60.844 0l3.28 10.219h10.782l-8.719 6.281 3.375 10.219-8.718-6.281-8.72 6.28 3.376-10.312L198.75 228h10.688zm60.75 0l3.375 10.219h10.687L279 234.375l3.281 10.219-8.718-6.281-8.625 6.28 3.28-10.312-8.624-6.281h10.687zm60.843 0l3.282 10.219h10.78l-8.718 6.281 3.375 10.219-8.719-6.281-8.718 6.28 3.375-10.312-8.72-6.281h10.782z"
                                fill="#fff"></path>
                        </g>
                      </svg><!----><!----><!----></div>
                    <div _ngcontent-ppc-c3="1" class="card-text d-inline-block align-middle text-left"><b
                        _ngcontent-ppc-c3="1" _msttexthash="7785336" _msthash="529">芝加哥</b><br
                        _ngcontent-ppc-c3="1"><small _ngcontent-ppc-c3="1" style="color:#6c757d;"><font _mstmutation="1"
                                                                                                      _msttexthash="12449502"
                                                                                                      _msthash="530">美国东部</font>
                      <!----></small></div>
                  </div><!----></div><!---->
                <div _ngcontent-ppc-c3="1"><!---->
                  <div _ngcontent-ppc-c3="1">
                    <div _ngcontent-ppc-c3="1" class="card-footer">
                      <div _ngcontent-ppc-c3="1" class="row"><!---->
                        <div _ngcontent-ppc-c3="1" class="col subregion" container="body" _msttexthash="4459"
                             _msthash="528">1
                        </div><!----></div>
                    </div>
                  </div><!----></div>
              </div>
            </div>
            <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-3">
              <div _ngcontent-ppc-c3="1" class="region card" container="body">
                <div _ngcontent-ppc-c3="1" class="card-body"><!---->
                  <div _ngcontent-ppc-c3="1" class="text-center">
                    <div _ngcontent-ppc-c3="1" class="flag-wrapper"><!---->
                      <svg _ngcontent-ppc-c3="1" viewBox="0 0 640 480" width="52">
                        <g _ngcontent-ppc-c3="1" fill-rule="evenodd">
                          <g _ngcontent-ppc-c3="1" stroke-width="1pt">
                            <path _ngcontent-ppc-c3="1"
                                  d="M0 0h912v36.938H0zm0 73.875h912v36.938H0zm0 73.781h912v37.031H0zm0 73.875h912v36.938H0zm0 73.875h912v36.938H0zm0 73.781h912v36.938H0zm0 73.875h912V480H0z"
                                  fill="#bd3d44"></path>
                            <path _ngcontent-ppc-c3="1"
                                  d="M0 36.938h912v36.937H0zm0 73.874h912v36.844H0zm0 73.782h912v36.937H0zm0 73.875h912v36.937H0zm0 73.875h912v36.937H0zm0 73.781h912v36.938H0z"
                                  fill="#fff"></path>
                          </g>
                          <path _ngcontent-ppc-c3="1" d="M0 0h364.781v258.469H0z" fill="#192f5d"></path>
                          <path _ngcontent-ppc-c3="1"
                                d="M30.375 11.063L33.75 21.28h10.688l-8.626 6.282 3.282 10.312-8.719-6.375-8.625 6.281 3.281-10.218-8.718-6.282h10.874zm60.844 0L94.5 21.28h10.781l-8.719 6.282 3.282 10.312-8.625-6.375-8.719 6.281 3.281-10.218-8.625-6.282h10.688zm60.75 0l3.375 10.218h10.593l-8.625 6.282 3.282 10.312-8.719-6.375-8.625 6.281 3.281-10.218-8.719-6.282h10.782zm60.844 0l3.28 10.218h10.782l-8.719 6.282 3.375 10.312-8.719-6.375-8.718 6.281 3.375-10.218-8.719-6.282h10.687zm60.75 0l3.375 10.218h10.687L279 27.563l3.281 10.312-8.719-6.375-8.625 6.281 3.282-10.218-8.625-6.282h10.687zm60.843 0l3.281 10.218h10.782l-8.719 6.282 3.375 10.312-8.719-6.375-8.719 6.281 3.375-10.218-8.718-6.282h10.781zM60.844 36.936l3.281 10.22h10.781l-8.719 6.28 3.188 10.22-8.438-6.282-8.718 6.281 3.093-10.218-8.437-6.282h10.687zm60.75 0l3.375 10.22h10.687l-8.719 6.28 3.375 10.22-8.718-6.282-8.719 6.281 3.375-10.219-8.719-6.28h10.781zm60.843 0l3.282 10.22H196.5l-8.719 6.28 3.281 10.22-8.625-6.282-8.718 6.281L177 53.438l-8.625-6.282h10.687zm60.75 0l3.375 10.22h10.688l-8.719 6.28 3.375 10.22-8.719-6.282-8.625 6.281 3.282-10.218-8.719-6.282H240zm60.844 0l3.281 10.22h10.782l-8.719 6.28 3.281 10.22-8.625-6.282-8.719 6.281 3.282-10.218-8.625-6.282h10.687zM30.375 62.72l3.375 10.406h10.687l-8.625 6.281 3.282 10.219-8.719-6.375-8.625 6.375 3.281-10.313-8.719-6.28h10.875zm60.844 0L94.5 73.03h10.781l-8.719 6.281 3.282 10.22-8.625-6.376-8.719 6.375 3.281-10.312-8.625-6.281h10.688zm60.75 0l3.375 10.312h10.593l-8.625 6.281 3.282 10.22-8.719-6.376-8.625 6.375 3.281-10.312-8.719-6.281h10.782zm60.843 0l3.282 10.312h10.781l-8.719 6.281 3.375 10.22-8.719-6.376-8.718 6.375 3.375-10.312-8.719-6.281h10.687zm60.75 0l3.375 10.312h10.688L279 79.312l3.281 10.22-8.719-6.376-8.625 6.375 3.282-10.312-8.625-6.281h10.687zm60.844 0l3.281 10.312h10.782l-8.719 6.281 3.375 10.22-8.719-6.376-8.719 6.375 3.375-10.312-8.718-6.281h10.781zM60.844 88.594l3.281 10.219h10.781l-8.719 6.28 3.282 10.313-8.625-6.375-8.719 6.281 3.281-10.218-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.719 6.28 3.376 10.313-8.72-6.375-8.718 6.281 3.375-10.218-8.719-6.281h10.781zm60.844 0l3.28 10.219H196.5l-8.719 6.28 3.281 10.313-8.625-6.375-8.718 6.281L177 105.094l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.313-8.719-6.375-8.625 6.281 3.282-10.218-8.719-6.281H240zm60.843 0l3.281 10.219h10.782l-8.719 6.28 3.281 10.313-8.625-6.375-8.719 6.281 3.282-10.218-8.625-6.281h10.687zM30.375 114.469l3.375 10.219h10.688l-8.625 6.28 3.28 10.313-8.718-6.375-8.625 6.281 3.281-10.218-8.718-6.281h10.875zm60.844 0l3.281 10.219h10.781l-8.719 6.28 3.282 10.22-8.625-6.282-8.719 6.281 3.281-10.218-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.594l-8.625 6.28 3.28 10.313-8.718-6.375-8.625 6.281 3.281-10.218-8.718-6.281h10.78zm60.844 0l3.28 10.219h10.782l-8.719 6.28 3.375 10.313-8.718-6.375-8.72 6.281 3.376-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.313-8.719-6.375-8.625 6.281 3.282-10.218-8.625-6.281h10.687zm60.843 0l3.281 10.219h10.782l-8.719 6.28 3.375 10.313-8.719-6.375-8.719 6.281 3.375-10.218-8.718-6.281h10.781zM60.844 140.344l3.281 10.219h10.781l-8.718 6.28 3.28 10.22-8.624-6.375-8.719 6.375 3.281-10.313-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.718 6.28 3.375 10.22-8.72-6.375-8.718 6.375 3.375-10.313-8.719-6.281h10.782zm60.844 0l3.28 10.219H196.5l-8.719 6.28 3.282 10.22-8.625-6.375-8.72 6.375L177 156.75l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.28 3.281 10.22-8.718-6.375-8.625 6.375 3.28-10.313-8.718-6.281H240zm60.843 0l3.282 10.219h10.78l-8.718 6.28 3.281 10.22-8.625-6.375-8.718 6.375 3.28-10.313-8.624-6.281h10.687zM30.375 166.125l3.375 10.313h10.688l-8.625 6.28 3.28 10.126-8.718-6.281-8.625 6.28 3.281-10.218-8.718-6.281h10.875zm60.844 0l3.281 10.313h10.781l-8.718 6.28 3.375 10.126-8.72-6.281-8.718 6.28 3.375-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.313h10.594l-8.625 6.28 3.28 10.126-8.718-6.281-8.625 6.28 3.281-10.218-8.718-6.281h10.78zm60.844 0l3.28 10.313h10.782l-8.719 6.28 3.375 10.126-8.718-6.281-8.72 6.28 3.376-10.218-8.719-6.281h10.688zm60.75 0l3.375 10.313h10.687l-8.625 6.28 3.281 10.126-8.718-6.281-8.625 6.28 3.28-10.218-8.624-6.281h10.687zm60.843 0l3.282 10.313h10.78l-8.718 6.28 3.375 10.126-8.719-6.281-8.718 6.28 3.375-10.218-8.72-6.281h10.782zM60.844 192l3.281 10.219h10.781l-8.718 6.281 3.28 10.313-8.624-6.375-8.719 6.28 3.281-10.218-8.625-6.281H57.47zm60.75 0l3.375 10.219h10.687l-8.718 6.281 3.375 10.313-8.72-6.375-8.718 6.28 3.375-10.218-8.719-6.281h10.782zm60.844 0l3.28 10.219H196.5l-8.719 6.281 3.282 10.313-8.625-6.375-8.72 6.28L177 208.5l-8.625-6.281h10.688zm60.75 0l3.375 10.219h10.687l-8.625 6.281 3.281 10.313-8.718-6.375-8.625 6.28 3.28-10.218-8.718-6.281H240zm60.843 0l3.282 10.219h10.78l-8.718 6.281 3.281 10.313-8.625-6.375-8.718 6.28 3.28-10.218-8.624-6.281h10.687zM30.375 217.875l3.375 10.219h10.688l-8.625 6.281 3.28 10.219-8.718-6.281-8.625 6.28 3.281-10.312L16.313 228h10.875zm60.844 0l3.281 10.219h10.781l-8.718 6.281 3.375 10.219-8.72-6.281-8.718 6.28 3.375-10.312L77.156 228h10.688zm60.75 0l3.375 10.219h10.594l-8.438 6.281 3.281 10.219-8.718-6.281-8.625 6.28 3.28-10.312L138 228h10.781zm60.844 0l3.28 10.219h10.782l-8.719 6.281 3.375 10.219-8.718-6.281-8.72 6.28 3.376-10.312L198.75 228h10.688zm60.75 0l3.375 10.219h10.687L279 234.375l3.281 10.219-8.718-6.281-8.625 6.28 3.28-10.312-8.624-6.281h10.687zm60.843 0l3.282 10.219h10.78l-8.718 6.281 3.375 10.219-8.719-6.281-8.718 6.28 3.375-10.312-8.72-6.281h10.782z"
                                fill="#fff"></path>
                        </g>
                      </svg><!----><!----><!----></div>
                    <div _ngcontent-ppc-c3="1" class="card-text d-inline-block align-middle text-left"><b
                        _ngcontent-ppc-c3="1" _msttexthash="9024301" _msthash="526">达拉斯</b><br
                        _ngcontent-ppc-c3="1"><small _ngcontent-ppc-c3="1" style="color:#6c757d;"><font _mstmutation="1"
                                                                                                      _msttexthash="12606165"
                                                                                                      _msthash="527">美国南部</font>
                      <!----></small></div>
                  </div><!----></div><!---->
                <div _ngcontent-ppc-c3="1"><!---->
                  <div _ngcontent-ppc-c3="1">
                    <div _ngcontent-ppc-c3="1" class="card-footer">
                      <div _ngcontent-ppc-c3="1" class="row"><!---->
                        <div _ngcontent-ppc-c3="1" class="col subregion" container="body" _msttexthash="4459"
                             _msthash="525">1
                        </div><!----></div>
                    </div>
                  </div><!----></div>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-ppc-c3="1" class="mb-5">
          <div _ngcontent-ppc-c3="1" class="row mb-3">
            <div _ngcontent-ppc-c3="1" class="col"><h4 _ngcontent-ppc-c3="1" _msttexthash="12744927" _msthash="553">
              选择尺码</h4>
              <ul _ngcontent-ppc-c3="1"><!----><!----><!----></ul>
            </div>
          </div>
          <app-server-size _ngcontent-ppc-c3="1" _nghost-ppc-c5="1"><!---->
            <div _ngcontent-ppc-c5="1">
              <div _ngcontent-ppc-c5="1" class="row mb-3">
                <div _ngcontent-ppc-c5="1" class="col">
                  <ul _ngcontent-ppc-c5="1" class="nav-images nav nav-pills"><!---->
                    <li _ngcontent-ppc-c5="1" class="nav-item"><a _ngcontent-ppc-c5="1" class="nav-link active" 
                                                                 _msttexthash="4600557" _msthash="523">标准</a></li>
                  </ul>
                </div>
              </div>
              <div _ngcontent-ppc-c5="1" class="row mb-3 text-muted">
                <div _ngcontent-ppc-c5="1" class="col" _msttexthash="7058181" _msthash="524"> Fast SSD KVM virtual
                  machines with a mix of compute resources and dedicated memory for a variety of applications.
                </div>
              </div>
              <div _ngcontent-ppc-c5="1" class="row mb-3"><!---->
                <div _ngcontent-ppc-c5="1" class="col-12 col-sm-3 mb-3">
                  <div _ngcontent-ppc-c5="1" class="size card active">
                    <div _ngcontent-ppc-c5="1" class="card-body">
                      <div _ngcontent-ppc-c5="1" class="card-text">
                        <div _ngcontent-ppc-c5="1" class="cost-mo"><span _ngcontent-ppc-c5="1"
                                                                        class="dollar">$</span><span
                            _ngcontent-ppc-c5="1" class="price" _msttexthash="9555" _msthash="518">11</span><span
                            _ngcontent-ppc-c5="1" class="period" _msttexthash="28600" _msthash="519">/mo</span></div>
                        <div _ngcontent-ppc-c5="1" class="cost-hr" _msttexthash="133679" _msthash="520"> $0.018/hour
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ppc-c5="1" class="card-footer">
                      <div _ngcontent-ppc-c5="1" class="spec"><!---->
                        <div _ngcontent-ppc-c5="1"><font _mstmutation="1" _msttexthash="72124" _msthash="521">1 GB / 1
                          <span _ngcontent-ppc-c5="1" _mstmutation="1">CPU</span></font><!----></div>
                        <div _ngcontent-ppc-c5="1" _msttexthash="92521" _msthash="522">1x25GB SSD</div><!---->
                        <div _ngcontent-ppc-c5="1" _msttexthash="354822" _msthash="487">Unlimited transfer</div><!---->
                        <!----></div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-ppc-c5="1" class="col-12 col-sm-3 mb-3">
                  <div _ngcontent-ppc-c5="1" class="size card">
                    <div _ngcontent-ppc-c5="1" class="card-body">
                      <div _ngcontent-ppc-c5="1" class="card-text">
                        <div _ngcontent-ppc-c5="1" class="cost-mo"><span _ngcontent-ppc-c5="1"
                                                                        class="dollar">$</span><span
                            _ngcontent-ppc-c5="1" class="price" _msttexthash="9750" _msthash="513">22</span><span
                            _ngcontent-ppc-c5="1" class="period" _msttexthash="28600" _msthash="514">/mo</span></div>
                        <div _ngcontent-ppc-c5="1" class="cost-hr" _msttexthash="133653" _msthash="515"> $0.036/hour
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ppc-c5="1" class="card-footer">
                      <div _ngcontent-ppc-c5="1" class="spec"><!---->
                        <div _ngcontent-ppc-c5="1"><font _mstmutation="1" _msttexthash="94783" _msthash="516">2 GB / 2
                          <span _ngcontent-ppc-c5="1" _mstmutation="1">CPU</span><span _ngcontent-ppc-c5="1"
                                                                                      _mstmutation="1">s</span></font>
                          <!----></div>
                        <div _ngcontent-ppc-c5="1" _msttexthash="92222" _msthash="517">1x50GB SSD</div><!---->
                        <div _ngcontent-ppc-c5="1" _msttexthash="354822" _msthash="486">Unlimited transfer</div><!---->
                        <!----></div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-ppc-c5="1" class="col-12 col-sm-3 mb-3">
                  <div _ngcontent-ppc-c5="1" class="size card">
                    <div _ngcontent-ppc-c5="1" class="card-body">
                      <div _ngcontent-ppc-c5="1" class="card-text">
                        <div _ngcontent-ppc-c5="1" class="cost-mo"><span _ngcontent-ppc-c5="1"
                                                                        class="dollar">$</span><span
                            _ngcontent-ppc-c5="1" class="price" _msttexthash="10140" _msthash="508">44</span><span
                            _ngcontent-ppc-c5="1" class="period" _msttexthash="28600" _msthash="509">/mo</span></div>
                        <div _ngcontent-ppc-c5="1" class="cost-hr" _msttexthash="133601" _msthash="510"> $0.072/hour
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ppc-c5="1" class="card-footer">
                      <div _ngcontent-ppc-c5="1" class="spec"><!---->
                        <div _ngcontent-ppc-c5="1"><font _mstmutation="1" _msttexthash="94965" _msthash="511">4 GB / 2
                          <span _ngcontent-ppc-c5="1" _mstmutation="1">CPU</span><span _ngcontent-ppc-c5="1"
                                                                                      _mstmutation="1">s</span></font>
                          <!----></div>
                        <div _ngcontent-ppc-c5="1" _msttexthash="103441" _msthash="512">1x100GB SSD</div><!---->
                        <div _ngcontent-ppc-c5="1" _msttexthash="354822" _msthash="485">Unlimited transfer</div><!---->
                        <!----></div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-ppc-c5="1" class="col-12 col-sm-3 mb-3">
                  <div _ngcontent-ppc-c5="1" class="size card">
                    <div _ngcontent-ppc-c5="1" class="card-body">
                      <div _ngcontent-ppc-c5="1" class="card-text">
                        <div _ngcontent-ppc-c5="1" class="cost-mo"><span _ngcontent-ppc-c5="1"
                                                                        class="dollar">$</span><span
                            _ngcontent-ppc-c5="1" class="price" _msttexthash="10920" _msthash="503">88</span><span
                            _ngcontent-ppc-c5="1" class="period" _msttexthash="28600" _msthash="504">/mo</span></div>
                        <div _ngcontent-ppc-c5="1" class="cost-hr" _msttexthash="133614" _msthash="505"> $0.144/hour
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ppc-c5="1" class="card-footer">
                      <div _ngcontent-ppc-c5="1" class="spec"><!---->
                        <div _ngcontent-ppc-c5="1"><font _mstmutation="1" _msttexthash="95615" _msthash="506">8 GB / 4
                          <span _ngcontent-ppc-c5="1" _mstmutation="1">CPU</span><span _ngcontent-ppc-c5="1"
                                                                                      _mstmutation="1">s</span></font>
                          <!----></div>
                        <div _ngcontent-ppc-c5="1" _msttexthash="104091" _msthash="507">1x150GB SSD</div><!---->
                        <div _ngcontent-ppc-c5="1" _msttexthash="354822" _msthash="484">Unlimited transfer</div><!---->
                        <!----></div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-ppc-c5="1" class="col-12 col-sm-3 mb-3">
                  <div _ngcontent-ppc-c5="1" class="size card disabled">
                    <div _ngcontent-ppc-c5="1" class="card-body">
                      <div _ngcontent-ppc-c5="1" class="card-text">
                        <div _ngcontent-ppc-c5="1" class="cost-mo"><span _ngcontent-ppc-c5="1"
                                                                        class="dollar">$</span><span
                            _ngcontent-ppc-c5="1" class="price" _msttexthash="16497" _msthash="498">176</span><span
                            _ngcontent-ppc-c5="1" class="period" _msttexthash="28600" _msthash="499">/mo</span></div>
                        <div _ngcontent-ppc-c5="1" class="cost-hr" _msttexthash="134784" _msthash="500"> $0.287/hour
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ppc-c5="1" class="card-footer">
                      <div _ngcontent-ppc-c5="1" class="spec"><!---->
                        <div _ngcontent-ppc-c5="1"><font _mstmutation="1" _msttexthash="108485" _msthash="501">16 GB / 6
                          <span _ngcontent-ppc-c5="1" _mstmutation="1">CPU</span><span _ngcontent-ppc-c5="1"
                                                                                      _mstmutation="1">s</span></font>
                          <!----></div>
                        <div _ngcontent-ppc-c5="1" _msttexthash="103675" _msthash="502">1x300GB SSD</div><!---->
                        <div _ngcontent-ppc-c5="1" _msttexthash="354822" _msthash="483">Unlimited transfer</div><!---->
                        <!----></div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-ppc-c5="1" class="col-12 col-sm-3 mb-3">
                  <div _ngcontent-ppc-c5="1" class="size card disabled">
                    <div _ngcontent-ppc-c5="1" class="card-body">
                      <div _ngcontent-ppc-c5="1" class="card-text">
                        <div _ngcontent-ppc-c5="1" class="cost-mo"><span _ngcontent-ppc-c5="1"
                                                                        class="dollar">$</span><span
                            _ngcontent-ppc-c5="1" class="price" _msttexthash="16003" _msthash="493">352</span><span
                            _ngcontent-ppc-c5="1" class="period" _msttexthash="28600" _msthash="494">/mo</span></div>
                        <div _ngcontent-ppc-c5="1" class="cost-hr" _msttexthash="134719" _msthash="495"> $0.575/hour
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ppc-c5="1" class="card-footer">
                      <div _ngcontent-ppc-c5="1" class="spec"><!---->
                        <div _ngcontent-ppc-c5="1"><font _mstmutation="1" _msttexthash="108563" _msthash="496">32 GB / 8
                          <span _ngcontent-ppc-c5="1" _mstmutation="1">CPU</span><span _ngcontent-ppc-c5="1"
                                                                                      _mstmutation="1">s</span></font>
                          <!----></div>
                        <div _ngcontent-ppc-c5="1" _msttexthash="104026" _msthash="497">1x600GB SSD</div><!---->
                        <div _ngcontent-ppc-c5="1" _msttexthash="354822" _msthash="482">Unlimited transfer</div><!---->
                        <!----></div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-ppc-c5="1" class="col-12 col-sm-3 mb-3">
                  <div _ngcontent-ppc-c5="1" class="size card disabled">
                    <div _ngcontent-ppc-c5="1" class="card-body">
                      <div _ngcontent-ppc-c5="1" class="card-text">
                        <div _ngcontent-ppc-c5="1" class="cost-mo"><span _ngcontent-ppc-c5="1"
                                                                        class="dollar">$</span><span
                            _ngcontent-ppc-c5="1" class="price" _msttexthash="16081" _msthash="488">704</span><span
                            _ngcontent-ppc-c5="1" class="period" _msttexthash="28600" _msthash="489">/mo</span></div>
                        <div _ngcontent-ppc-c5="1" class="cost-hr" _msttexthash="119340" _msthash="490"> $1.15/hour</div>
                      </div>
                    </div>
                    <div _ngcontent-ppc-c5="1" class="card-footer">
                      <div _ngcontent-ppc-c5="1" class="spec"><!---->
                        <div _ngcontent-ppc-c5="1"><font _mstmutation="1" _msttexthash="120575" _msthash="491">64 GB / 10
                          <span _ngcontent-ppc-c5="1" _mstmutation="1">CPU</span><span _ngcontent-ppc-c5="1"
                                                                                      _mstmutation="1">s</span></font>
                          <!----></div>
                        <div _ngcontent-ppc-c5="1" _msttexthash="116012" _msthash="492">1x1200GB SSD</div><!---->
                        <div _ngcontent-ppc-c5="1" _msttexthash="354822" _msthash="481">Unlimited transfer</div><!---->
                        <!----></div>
                    </div>
                  </div>
                </div>
              </div><!----></div>
          </app-server-size>
        </div>
        <div _ngcontent-ppc-c3="1" class="mb-5">
          <div _ngcontent-ppc-c3="1" class="row mb-3">
            <div _ngcontent-ppc-c3="1" class="col"><h4 _ngcontent-ppc-c3="1" _msttexthash="288249" _msthash="554">Set
              access method</h4></div>
          </div>
          <div _ngcontent-ppc-c3="1" class="row">
            <div _ngcontent-ppc-c3="1" class="col-12 col-sm-12"><!----><p _ngcontent-ppc-c3="1" _msttexthash="3833037"
                                                                         _msthash="551">Choose to access your server
              with a password or with SSH keys. You can also use both.</p><!----></div>
          </div>
          <div _ngcontent-ppc-c3="1" class="row mb-3">
            <div _ngcontent-ppc-c3="1" class="col">
              <ul _ngcontent-ppc-c3="1" class="nav-images nav nav-pills">
                <li _ngcontent-ppc-c3="1" class="nav-item"><a _ngcontent-ppc-c3="1" class="nav-link active" 
                                                             _msttexthash="117572" _msthash="555">Password</a></li>
                <!---->
                <li _ngcontent-ppc-c3="1" class="nav-item"><a _ngcontent-ppc-c3="1" class="nav-link" 
                                                             _msttexthash="407550" _msthash="550">SSH Keys <small
                    _ngcontent-ppc-c3="1">(recommended)</small></a></li>
              </ul>
            </div>
          </div>
          <div _ngcontent-ppc-c3="1">
            <div _ngcontent-ppc-c3="1" class="row mb-3">
              <div _ngcontent-ppc-c3="1" class="col-12 col-sm-12 mb-2">
                <div _ngcontent-ppc-c3="1" class="row">
                  <div _ngcontent-ppc-c3="1" class="col"><label _ngcontent-ppc-c3="1" _msttexthash="265213"
                                                               _msthash="556">Enter a password</label>
                    <password-validator _ngcontent-ppc-c3="1" _nghost-ppc-c6="1">
                      <div _ngcontent-ppc-c6="1" class="input-group input-group-lg"><input _ngcontent-ppc-c6="1"
                                                                                          class="form-control is-invalid ng-untouched ng-pristine ng-valid"
                                                                                          id="password" name="password"
                                                                                          placeholder="••••••••••••"
                                                                                          type="password"
                                                                                          _mstplaceholder="16040700"
                                                                                          _msthash="557"></div>
                      <div _ngcontent-ppc-c6="1" class="row">
                        <div _ngcontent-ppc-c6="1" class="col-12 mt-2"><strong _ngcontent-ppc-c6="1" _msttexthash="462332"
                                                                              _msthash="558">Password
                          Requirements</strong></div>
                      </div>
                      <div _ngcontent-ppc-c6="1" class="row">
                        <div _ngcontent-ppc-c6="1" class="col-12 pb-1"><i _ngcontent-ppc-c6="1"
                                                                         class="material-icons validity-icon text-danger"
                                                                         _msttexthash="62621"
                                                                         _msthash="559">close</i><span
                            _ngcontent-ppc-c6="1" _msttexthash="813839" _msthash="560">Must be at least 12 characters long</span>
                        </div>
                        <div _ngcontent-ppc-c6="1" class="col-12 pb-1"><i _ngcontent-ppc-c6="1"
                                                                         class="material-icons validity-icon text-danger"
                                                                         _msttexthash="62621"
                                                                         _msthash="561">close</i><span
                            _ngcontent-ppc-c6="1" _msttexthash="744016"
                            _msthash="562">Must contain 1 uppercase letter</span></div>
                        <div _ngcontent-ppc-c6="1" class="col-12 pb-1"><i _ngcontent-ppc-c6="1"
                                                                         class="material-icons validity-icon text-danger"
                                                                         _msttexthash="62621"
                                                                         _msthash="563">close</i><span
                            _ngcontent-ppc-c6="1" _msttexthash="704548"
                            _msthash="564">Must contain 1 number or symbol</span></div>
                        <div _ngcontent-ppc-c6="1" class="col-12 pb-1"><i _ngcontent-ppc-c6="1"
                                                                         class="material-icons validity-icon text-danger"
                                                                         _msttexthash="62621"
                                                                         _msthash="565">close</i><span
                            _ngcontent-ppc-c6="1" _msttexthash="1211145" _msthash="566">Cannot end in a number or special character</span>
                        </div>
                      </div>
                    </password-validator>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div _ngcontent-ppc-c3="1" >
            <app-spinner _ngcontent-ppc-c3="1" options="la-dark" _nghost-ppc-c7="1"><!----></app-spinner><!---->
            <div _ngcontent-ppc-c3="1" class="row mb-3" _msthidden="2">
              <div _ngcontent-ppc-c3="1" class="col-12" _msthidden="1"><p _ngcontent-ppc-c3="1" _msthidden="1">
                <!----><font _mstmutation="1" _msttexthash="911677" _msthidden="1" _msthash="548"><span
                  _ngcontent-ppc-c3="1" _mstmutation="1">Add</span> an <a _ngcontent-ppc-c3="1"
                                                                         href="https://bitlaunch.io/blog/creating-an-ssh-key/"
                                                                         target="_blank" _mstmutation="1">SSH key</a> to
                use with your server </font><!----></p></div>
              <div _ngcontent-ppc-c3="1" class="col-12 col-sm-3 mb-2" _msthidden="1">
                <button _ngcontent-ppc-c3="1" class="btn btn-secondary btn-lg" _msttexthash="120068" _msthidden="1"
                        _msthash="549">New SSH Key
                </button>
              </div>
              <div _ngcontent-ppc-c3="1" class="col-12 col-sm-9 mb-2">
                <div _ngcontent-ppc-c3="1" class="row"><!----></div>
              </div>
            </div>
          </div>
        </div><!---->
        <div _ngcontent-ppc-c3="1" class="mb-5">
          <div _ngcontent-ppc-c3="1" class="row mb-3">
            <div _ngcontent-ppc-c3="1" class="col"><h4 _ngcontent-ppc-c3="1" _msttexthash="995813" _msthash="546">Add an
              initial setup script (Optional)</h4></div>
          </div>
          <div _ngcontent-ppc-c3="1" class="row">
            <div _ngcontent-ppc-c3="1" class="col">
              <div _ngcontent-ppc-c3="1" class="input-group input-group-lg"><textarea _ngcontent-ppc-c3="1"
                                                                                     class="form-control init-script-input ng-untouched ng-pristine ng-valid"
                                                                                     placeholder="#!/bin/sh"
                                                                                     _mstplaceholder="106184"
                                                                                     _msthash="466"></textarea></div>
              <small _ngcontent-ppc-c3="1" class="form-text text-muted"><!----><!----><span _ngcontent-ppc-c3="1"
                                                                                           _msttexthash="2676245"
                                                                                           _msthash="547"> You can use bash to automatically configure your server on launch. </span></small>
            </div>
          </div>
        </div>
        <div _ngcontent-ppc-c3="1" class="row mb-3">
          <div _ngcontent-ppc-c3="1" class="col"><h4 _ngcontent-ppc-c3="1" _msttexthash="346580" _msthash="567">Finalize
            and launch</h4></div>
        </div>
        <form _ngcontent-ppc-c3="1" class="mb-5 ng-untouched ng-pristine ng-valid" >
          <div _ngcontent-ppc-c3="1" class="row">
            <div _ngcontent-ppc-c3="1" class="col"><label _ngcontent-ppc-c3="1"><font _mstmutation="1"
                                                                                    _msttexthash="114296"
                                                                                    _msthash="568">Hostname </font><span
                _ngcontent-ppc-c3="1" class="badge badge-secondary" _msttexthash="86385"
                _msthash="569">rDNS off</span></label>
              <div _ngcontent-ppc-c3="1" class="input-group input-group-lg"><input _ngcontent-ppc-c3="1"
                                                                                  class="form-control ng-untouched ng-pristine ng-valid"
                                                                                  formcontrolname="name"
                                                                                  ngchange="updateRDNSStatus()"
                                                                                  placeholder="my-awesome-server"
                                                                                  type="text" _mstplaceholder="341679"
                                                                                  _msthash="570"></div>
              <small _ngcontent-ppc-c3="1" class="form-text text-muted" _msttexthash="1191450" _msthash="571"> Choose a
                descriptive name for your server </small></div>
          </div>
        </form>
        <div _ngcontent-ppc-c3="1" class="row mb-5">
          <div _ngcontent-ppc-c3="1" class="col text-center"><!---->
            <div _ngcontent-ppc-c3="1" class="text-danger" _msttexthash="4001127" _msthash="545">Your balance is too low
              to launch this server. Add funds in your <a _ngcontent-ppc-c3="1" routerlink="/account/billing"
                                                          href="/account/billing">account billing area</a></div>
            <div _ngcontent-ppc-c3="1">
              <button _ngcontent-ppc-c3="1" class="btn-launch btn btn-success btn-lg btn-block" ><!----><span
                  _ngcontent-ppc-c3="1" _msttexthash="203554" _msthash="572">Launch Server</span>
                <app-spinner _ngcontent-ppc-c3="1" _nghost-ppc-c7="1"><!----></app-spinner>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div><!---->
    <app-sshkey-dialog _ngcontent-ppc-c3="1" _nghost-ppc-c8="1" _msthidden="4">
      <div aria-hidden="true" aria-labelledby="mySmallModalLabel" bsmodal="1" class="modal fade"
           role="dialog" tabindex="-1" _msthidden="4">
        <div class="modal-dialog" _msthidden="4">
          <div class="modal-content" _msthidden="4">
            <div class="modal-header" _msthidden="2"><h4 _ngcontent-ppc-c8="1"
                                                                              class="modal-title pull-left"></h4>
              <button aria-label="Close" class="close pull-right" type="button" _msthidden="1"
                      _mstaria-label="59709" _msthash="151"><span aria-hidden="true"
                                                                  _msttexthash="19565" _msthidden="1"
                                                                  _msthash="152">×</span></button>
            </div>
            <div class="modal-body" _msthidden="2">
              <form  class="ng-untouched ng-pristine ng-invalid" _msthidden="2">
                <div class="row mb-3" _msthidden="1">
                  <div class="col" _msthidden="1"><textarea _ngcontent-ppc-c8="1"
                                                                                 class="form-control ng-untouched ng-pristine ng-invalid"
                                                                                 formcontrolname="key" name="key"
                                                                                 placeholder="SSH key content"
                                                                                 _msthidden="A" _mstplaceholder="231062"
                                                                                 _msthash="153"></textarea></div>
                </div>
                <div class="row mb-3" _msthidden="1">
                  <div class="col" _msthidden="1">
                    <div class="input-group input-group-lg" _msthidden="1"><input
                        class="form-control ng-untouched ng-pristine ng-invalid"
                        formcontrolname="name" name="name" placeholder="Name" type="text" _msthidden="A"
                        _mstplaceholder="43069" _msthash="154"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <button class="btn btn-lg btn-success btn-block" >
                      <app-spinner _nghost-ppc-c7="1"><!----></app-spinner><!----><span
                        _ngcontent-ppc-c8="1"></span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </app-sshkey-dialog>
  </app-servers-new>

</template>

<style scoped>
/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
}

*, ::after, ::before {
  box-sizing: border-box
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent
}

@-ms-viewport {
  width: device-width
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff
}

[tabindex="-1"]:focus {
  outline: 0 !important
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0
}

dl, ol, p, ul {
  margin-top: 0;
  margin-bottom: 1rem
}

abbr[data-original-title], abbr[title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit
}

ol ol, ol ul, ul ol, ul ul {
  margin-bottom: 0
}

dt {
  font-weight: 700
}

dd {
  margin-bottom: .5rem;
  margin-left: 0
}

blockquote, figure {
  margin: 0 0 1rem
}

dfn {
  font-style: italic
}

b, strong {
  font-weight: bolder
}

sub, sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects
}

a:hover {
  color: #0056b3;
  text-decoration: underline
}

a:not([href]):not([tabindex]), a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {
  color: inherit;
  text-decoration: none
}

a:not([href]):not([tabindex]):focus {
  outline: 0
}

code, kbd, pre, samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar
}

img {
  vertical-align: middle;
  border-style: none
}

svg {
  overflow: hidden;
  vertical-align: middle
}

table {
  border-collapse: collapse
}

caption {
  padding-top: .75rem;
  padding-bottom: .75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom
}

label {
  display: inline-block;
  margin-bottom: .5rem
}

button {
  border-radius: 0
}

button:focus {
  outline: dotted 1px;
  outline: -webkit-focus-ring-color auto 5px
}

button, input, optgroup, select, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit
}

button, input {
  overflow: visible
}

button, select {
  text-transform: none
}

[type=reset], [type=submit], button, html [type=button] {
  -webkit-appearance: button
}

[type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {
  padding: 0;
  border-style: none
}

input[type=checkbox], input[type=radio] {
  box-sizing: border-box;
  padding: 0
}

input[type=date], input[type=datetime-local], input[type=month], input[type=time] {
  -webkit-appearance: listbox
}

textarea {
  overflow: auto;
  resize: vertical
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal
}

progress {
  vertical-align: baseline
}

[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: none
}

[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button
}

output {
  display: inline-block
}

summary {
  display: list-item;
  cursor: pointer
}

template {
  display: none
}

[hidden] {
  display: none !important
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit
}

.h1, h1 {
  font-size: 2.5rem
}

.h2, h2 {
  font-size: 2rem
}

.h3, h3 {
  font-size: 1.75rem
}

.h4, h4 {
  font-size: 1.5rem
}

.h5, h5 {
  font-size: 1.25rem
}

.h6, h6 {
  font-size: 1rem
}

.lead {
  font-size: 1.25rem;
  font-weight: 300
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, .1)
}

.small, small {
  font-size: 80%;
  font-weight: 400
}

.mark, mark {
  padding: .2em;
  background-color: #fcf8e3
}

.list-inline, .list-unstyled {
  padding-left: 0;
  list-style: none
}

.list-inline-item {
  display: inline-block
}

.list-inline-item:not(:last-child) {
  margin-right: .5rem
}

.initialism {
  font-size: 90%;
  text-transform: uppercase
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d
}

.blockquote-footer::before {
  content: "\2014 \00A0"
}

.img-fluid {
  max-width: 100%;
  height: auto
}

.img-thumbnail {
  padding: .25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: .25rem;
  max-width: 100%;
  height: auto
}

.figure {
  display: inline-block
}

.figure-img {
  margin-bottom: .5rem;
  line-height: 1
}

.figure-caption {
  font-size: 90%;
  color: #6c757d
}

code {
  font-size: 87.5%;
  word-break: break-word;
  color: #6c757c !important
}

a > code {
  color: inherit
}

kbd {
  padding: .2rem .4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: .2rem
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

@media (min-width: 576px) {
  .container {
    max-width: 540px
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px
}

.no-gutters {
  margin-right: 0;
  margin-left: 0
}

.no-gutters > .col, .no-gutters > [class*=col-] {
  padding-right: 0;
  padding-left: 0
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none
}

.col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%
}

.col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%
}

.col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%
}

.col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%
}

.col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%
}

.col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%
}

.order-first {
  order: -1
}

.order-last {
  order: 13
}

.order-0 {
  order: 0
}

.order-1 {
  order: 1
}

.order-2 {
  order: 2
}

.order-3 {
  order: 3
}

.order-4 {
  order: 4
}

.order-5 {
  order: 5
}

.order-6 {
  order: 6
}

.order-7 {
  order: 7
}

.order-8 {
  order: 8
}

.order-9 {
  order: 9
}

.order-10 {
  order: 10
}

.order-11 {
  order: 11
}

.order-12 {
  order: 12
}

.offset-1 {
  margin-left: 8.333333%
}

.offset-2 {
  margin-left: 16.666667%
}

.offset-3 {
  margin-left: 25%
}

.offset-4 {
  margin-left: 33.333333%
}

.offset-5 {
  margin-left: 41.666667%
}

.offset-6 {
  margin-left: 50%
}

.offset-7 {
  margin-left: 58.333333%
}

.offset-8 {
  margin-left: 66.666667%
}

.offset-9 {
  margin-left: 75%
}

.offset-10 {
  margin-left: 83.333333%
}

.offset-11 {
  margin-left: 91.666667%
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none
  }

  .col-sm-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .col-sm-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-sm-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-sm-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .col-sm-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-sm-first {
    order: -1
  }

  .order-sm-last {
    order: 13
  }

  .order-sm-0 {
    order: 0
  }

  .order-sm-1 {
    order: 1
  }

  .order-sm-2 {
    order: 2
  }

  .order-sm-3 {
    order: 3
  }

  .order-sm-4 {
    order: 4
  }

  .order-sm-5 {
    order: 5
  }

  .order-sm-6 {
    order: 6
  }

  .order-sm-7 {
    order: 7
  }

  .order-sm-8 {
    order: 8
  }

  .order-sm-9 {
    order: 9
  }

  .order-sm-10 {
    order: 10
  }

  .order-sm-11 {
    order: 11
  }

  .order-sm-12 {
    order: 12
  }

  .offset-sm-0 {
    margin-left: 0
  }

  .offset-sm-1 {
    margin-left: 8.333333%
  }

  .offset-sm-2 {
    margin-left: 16.666667%
  }

  .offset-sm-3 {
    margin-left: 25%
  }

  .offset-sm-4 {
    margin-left: 33.333333%
  }

  .offset-sm-5 {
    margin-left: 41.666667%
  }

  .offset-sm-6 {
    margin-left: 50%
  }

  .offset-sm-7 {
    margin-left: 58.333333%
  }

  .offset-sm-8 {
    margin-left: 66.666667%
  }

  .offset-sm-9 {
    margin-left: 75%
  }

  .offset-sm-10 {
    margin-left: 83.333333%
  }

  .offset-sm-11 {
    margin-left: 91.666667%
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none
  }

  .col-md-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-md-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .col-md-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-md-first {
    order: -1
  }

  .order-md-last {
    order: 13
  }

  .order-md-0 {
    order: 0
  }

  .order-md-1 {
    order: 1
  }

  .order-md-2 {
    order: 2
  }

  .order-md-3 {
    order: 3
  }

  .order-md-4 {
    order: 4
  }

  .order-md-5 {
    order: 5
  }

  .order-md-6 {
    order: 6
  }

  .order-md-7 {
    order: 7
  }

  .order-md-8 {
    order: 8
  }

  .order-md-9 {
    order: 9
  }

  .order-md-10 {
    order: 10
  }

  .order-md-11 {
    order: 11
  }

  .order-md-12 {
    order: 12
  }

  .offset-md-0 {
    margin-left: 0
  }

  .offset-md-1 {
    margin-left: 8.333333%
  }

  .offset-md-2 {
    margin-left: 16.666667%
  }

  .offset-md-3 {
    margin-left: 25%
  }

  .offset-md-4 {
    margin-left: 33.333333%
  }

  .offset-md-5 {
    margin-left: 41.666667%
  }

  .offset-md-6 {
    margin-left: 50%
  }

  .offset-md-7 {
    margin-left: 58.333333%
  }

  .offset-md-8 {
    margin-left: 66.666667%
  }

  .offset-md-9 {
    margin-left: 75%
  }

  .offset-md-10 {
    margin-left: 83.333333%
  }

  .offset-md-11 {
    margin-left: 91.666667%
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none
  }

  .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-lg-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .col-lg-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-lg-first {
    order: -1
  }

  .order-lg-last {
    order: 13
  }

  .order-lg-0 {
    order: 0
  }

  .order-lg-1 {
    order: 1
  }

  .order-lg-2 {
    order: 2
  }

  .order-lg-3 {
    order: 3
  }

  .order-lg-4 {
    order: 4
  }

  .order-lg-5 {
    order: 5
  }

  .order-lg-6 {
    order: 6
  }

  .order-lg-7 {
    order: 7
  }

  .order-lg-8 {
    order: 8
  }

  .order-lg-9 {
    order: 9
  }

  .order-lg-10 {
    order: 10
  }

  .order-lg-11 {
    order: 11
  }

  .order-lg-12 {
    order: 12
  }

  .offset-lg-0 {
    margin-left: 0
  }

  .offset-lg-1 {
    margin-left: 8.333333%
  }

  .offset-lg-2 {
    margin-left: 16.666667%
  }

  .offset-lg-3 {
    margin-left: 25%
  }

  .offset-lg-4 {
    margin-left: 33.333333%
  }

  .offset-lg-5 {
    margin-left: 41.666667%
  }

  .offset-lg-6 {
    margin-left: 50%
  }

  .offset-lg-7 {
    margin-left: 58.333333%
  }

  .offset-lg-8 {
    margin-left: 66.666667%
  }

  .offset-lg-9 {
    margin-left: 75%
  }

  .offset-lg-10 {
    margin-left: 83.333333%
  }

  .offset-lg-11 {
    margin-left: 91.666667%
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none
  }

  .col-xl-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .col-xl-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-xl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .col-xl-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-xl-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .col-xl-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-xl-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .col-xl-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-xl-first {
    order: -1
  }

  .order-xl-last {
    order: 13
  }

  .order-xl-0 {
    order: 0
  }

  .order-xl-1 {
    order: 1
  }

  .order-xl-2 {
    order: 2
  }

  .order-xl-3 {
    order: 3
  }

  .order-xl-4 {
    order: 4
  }

  .order-xl-5 {
    order: 5
  }

  .order-xl-6 {
    order: 6
  }

  .order-xl-7 {
    order: 7
  }

  .order-xl-8 {
    order: 8
  }

  .order-xl-9 {
    order: 9
  }

  .order-xl-10 {
    order: 10
  }

  .order-xl-11 {
    order: 11
  }

  .order-xl-12 {
    order: 12
  }

  .offset-xl-0 {
    margin-left: 0
  }

  .offset-xl-1 {
    margin-left: 8.333333%
  }

  .offset-xl-2 {
    margin-left: 16.666667%
  }

  .offset-xl-3 {
    margin-left: 25%
  }

  .offset-xl-4 {
    margin-left: 33.333333%
  }

  .offset-xl-5 {
    margin-left: 41.666667%
  }

  .offset-xl-6 {
    margin-left: 50%
  }

  .offset-xl-7 {
    margin-left: 58.333333%
  }

  .offset-xl-8 {
    margin-left: 66.666667%
  }

  .offset-xl-9 {
    margin-left: 75%
  }

  .offset-xl-10 {
    margin-left: 83.333333%
  }

  .offset-xl-11 {
    margin-left: 91.666667%
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent
}

.table td, .table th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6
}

.table .table {
  background-color: #fff
}

.table-sm td, .table-sm th {
  padding: .3rem
}

.table-bordered, .table-bordered td, .table-bordered th {
  border: 1px solid #dee2e6
}

.table-bordered thead td, .table-bordered thead th {
  border-bottom-width: 2px
}

.table-borderless tbody + tbody, .table-borderless td, .table-borderless th, .table-borderless thead th {
  border: 0
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05)
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, .075)
}

.table-primary, .table-primary > td, .table-primary > th {
  background-color: #b8daff
}

.table-hover .table-primary:hover, .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th {
  background-color: #9fcdff
}

.table-secondary, .table-secondary > td, .table-secondary > th {
  background-color: #d6d8db
}

.table-hover .table-secondary:hover, .table-hover .table-secondary:hover > td, .table-hover .table-secondary:hover > th {
  background-color: #c8cbcf
}

.table-success, .table-success > td, .table-success > th {
  background-color: #c3e6cb
}

.table-hover .table-success:hover, .table-hover .table-success:hover > td, .table-hover .table-success:hover > th {
  background-color: #b1dfbb
}

.table-info, .table-info > td, .table-info > th {
  background-color: #bee5eb
}

.table-hover .table-info:hover, .table-hover .table-info:hover > td, .table-hover .table-info:hover > th {
  background-color: #abdde5
}

.table-warning, .table-warning > td, .table-warning > th {
  background-color: #ffeeba
}

.table-hover .table-warning:hover, .table-hover .table-warning:hover > td, .table-hover .table-warning:hover > th {
  background-color: #ffe8a1
}

.table-danger, .table-danger > td, .table-danger > th {
  background-color: #f5c6cb
}

.table-hover .table-danger:hover, .table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th {
  background-color: #f1b0b7
}

.table-light, .table-light > td, .table-light > th {
  background-color: #fdfdfe
}

.table-hover .table-light:hover, .table-hover .table-light:hover > td, .table-hover .table-light:hover > th {
  background-color: #ececf6
}

.table-dark, .table-dark > td, .table-dark > th {
  background-color: #c6c8ca
}

.table-hover .table-dark:hover, .table-hover .table-dark:hover > td, .table-hover .table-dark:hover > th {
  background-color: #b9bbbe
}

.table-active, .table-active > td, .table-active > th, .table-hover .table-active:hover, .table-hover .table-active:hover > td, .table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, .075)
}

.table .thead-dark th {
  color: #fff;
  background-color: #212529;
  border-color: #32383e
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6
}

.table-dark {
  color: #fff;
  background-color: #212529
}

.table-dark td, .table-dark th, .table-dark thead th {
  border-color: #32383e
}

.table-dark.table-bordered {
  border: 0
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, .05)
}

.table-dark.table-hover tbody tr:hover {
  background-color: rgba(255, 255, 255, .075)
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }

  .table-responsive-sm > .table-bordered {
    border: 0
  }
}

@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }

  .table-responsive-md > .table-bordered {
    border: 0
  }
}

@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }

  .table-responsive-lg > .table-bordered {
    border: 0
  }
}

@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }

  .table-responsive-xl > .table-bordered {
    border: 0
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive > .table-bordered {
  border: 0
}

.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media screen and (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1
}

.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff
}

.form-control-file, .form-control-range {
  display: block;
  width: 100%
}

.col-form-label {
  padding-top: calc(.375rem + 1px);
  padding-bottom: calc(.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5
}

.col-form-label-lg {
  padding-top: calc(.5rem + 1px);
  padding-bottom: calc(.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5
}

.col-form-label-sm {
  padding-top: calc(.25rem + 1px);
  padding-bottom: calc(.25rem + 1px);
  font-size: .875rem;
  line-height: 1.5
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: .375rem;
  padding-bottom: .375rem;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0
}

.form-control-plaintext.form-control-lg, .form-control-plaintext.form-control-sm {
  padding-right: 0;
  padding-left: 0
}

.form-control-sm {
  height: calc(1.8125rem + 2px);
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem
}

.form-control-lg {
  height: calc(2.875rem + 2px);
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem
}

select.form-control[multiple], select.form-control[size], textarea.form-control {
  height: auto
}

.form-group {
  margin-bottom: 1rem
}

.form-text {
  display: block;
  margin-top: .25rem
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px
}

.form-row > .col, .form-row > [class*=col-] {
  padding-right: 5px;
  padding-left: 5px
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem
}

.form-check-input {
  position: absolute;
  margin-top: .3rem;
  margin-left: -1.25rem
}

.form-check-input:disabled ~ .form-check-label {
  color: #6c757d
}

.form-check-label {
  margin-bottom: 0
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: .75rem
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: .3125rem;
  margin-left: 0
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #28a745
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .25rem .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(40, 167, 69, .9);
  border-radius: .25rem
}

.custom-select.is-valid, .form-control.is-valid, .was-validated .custom-select:valid, .was-validated .form-control:valid {
  border-color: #28a745
}

.custom-select.is-valid:focus, .form-control.is-valid:focus, .was-validated .custom-select:valid:focus, .was-validated .form-control:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25)
}

.custom-select.is-valid ~ .valid-feedback, .custom-select.is-valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback, .form-control.is-valid ~ .valid-tooltip, .was-validated .custom-select:valid ~ .valid-feedback, .was-validated .custom-select:valid ~ .valid-tooltip, .was-validated .form-control:valid ~ .valid-feedback, .was-validated .form-control:valid ~ .valid-tooltip {
  display: block
}

.form-control-file.is-valid ~ .valid-feedback, .form-control-file.is-valid ~ .valid-tooltip, .was-validated .form-control-file:valid ~ .valid-feedback, .was-validated .form-control-file:valid ~ .valid-tooltip {
  display: block
}

.form-check-input.is-valid ~ .form-check-label, .was-validated .form-check-input:valid ~ .form-check-label {
  color: #28a745
}

.form-check-input.is-valid ~ .valid-feedback, .form-check-input.is-valid ~ .valid-tooltip, .was-validated .form-check-input:valid ~ .valid-feedback, .was-validated .form-check-input:valid ~ .valid-tooltip {
  display: block
}

.custom-control-input.is-valid ~ .custom-control-label, .was-validated .custom-control-input:valid ~ .custom-control-label {
  color: #28a745
}

.custom-control-input.is-valid ~ .custom-control-label::before, .was-validated .custom-control-input:valid ~ .custom-control-label::before {
  background-color: #71dd8a
}

.custom-control-input.is-valid ~ .valid-feedback, .custom-control-input.is-valid ~ .valid-tooltip, .was-validated .custom-control-input:valid ~ .valid-feedback, .was-validated .custom-control-input:valid ~ .valid-tooltip {
  display: block
}

.custom-control-input.is-valid:checked ~ .custom-control-label::before, .was-validated .custom-control-input:valid:checked ~ .custom-control-label::before {
  background-color: #34ce57
}

.custom-control-input.is-valid:focus ~ .custom-control-label::before, .was-validated .custom-control-input:valid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(40, 167, 69, .25)
}

.custom-file-input.is-valid ~ .custom-file-label, .was-validated .custom-file-input:valid ~ .custom-file-label {
  border-color: #28a745
}

.custom-file-input.is-valid ~ .custom-file-label::after, .was-validated .custom-file-input:valid ~ .custom-file-label::after {
  border-color: inherit
}

.custom-file-input.is-valid ~ .valid-feedback, .custom-file-input.is-valid ~ .valid-tooltip, .was-validated .custom-file-input:valid ~ .valid-feedback, .was-validated .custom-file-input:valid ~ .valid-tooltip {
  display: block
}

.custom-file-input.is-valid:focus ~ .custom-file-label, .was-validated .custom-file-input:valid:focus ~ .custom-file-label {
  box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25)
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .25rem .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(220, 53, 69, .9);
  border-radius: .25rem
}

.custom-select.is-invalid, .form-control.is-invalid, .was-validated .custom-select:invalid, .was-validated .form-control:invalid {
  border-color: #dc3545
}

.custom-select.is-invalid:focus, .form-control.is-invalid:focus, .was-validated .custom-select:invalid:focus, .was-validated .form-control:invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25)
}

.custom-select.is-invalid ~ .invalid-feedback, .custom-select.is-invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback, .form-control.is-invalid ~ .invalid-tooltip, .was-validated .custom-select:invalid ~ .invalid-feedback, .was-validated .custom-select:invalid ~ .invalid-tooltip, .was-validated .form-control:invalid ~ .invalid-feedback, .was-validated .form-control:invalid ~ .invalid-tooltip {
  display: block
}

.form-control-file.is-invalid ~ .invalid-feedback, .form-control-file.is-invalid ~ .invalid-tooltip, .was-validated .form-control-file:invalid ~ .invalid-feedback, .was-validated .form-control-file:invalid ~ .invalid-tooltip {
  display: block
}

.form-check-input.is-invalid ~ .form-check-label, .was-validated .form-check-input:invalid ~ .form-check-label {
  color: #dc3545
}

.form-check-input.is-invalid ~ .invalid-feedback, .form-check-input.is-invalid ~ .invalid-tooltip, .was-validated .form-check-input:invalid ~ .invalid-feedback, .was-validated .form-check-input:invalid ~ .invalid-tooltip {
  display: block
}

.custom-control-input.is-invalid ~ .custom-control-label, .was-validated .custom-control-input:invalid ~ .custom-control-label {
  color: #dc3545
}

.custom-control-input.is-invalid ~ .custom-control-label::before, .was-validated .custom-control-input:invalid ~ .custom-control-label::before {
  background-color: #efa2a9
}

.custom-control-input.is-invalid ~ .invalid-feedback, .custom-control-input.is-invalid ~ .invalid-tooltip, .was-validated .custom-control-input:invalid ~ .invalid-feedback, .was-validated .custom-control-input:invalid ~ .invalid-tooltip {
  display: block
}

.custom-control-input.is-invalid:checked ~ .custom-control-label::before, .was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before {
  background-color: #e4606d
}

.custom-control-input.is-invalid:focus ~ .custom-control-label::before, .was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(220, 53, 69, .25)
}

.custom-file-input.is-invalid ~ .custom-file-label, .was-validated .custom-file-input:invalid ~ .custom-file-label {
  border-color: #dc3545
}

.custom-file-input.is-invalid ~ .custom-file-label::after, .was-validated .custom-file-input:invalid ~ .custom-file-label::after {
  border-color: inherit
}

.custom-file-input.is-invalid ~ .invalid-feedback, .custom-file-input.is-invalid ~ .invalid-tooltip, .was-validated .custom-file-input:invalid ~ .invalid-feedback, .was-validated .custom-file-input:invalid ~ .invalid-tooltip {
  display: block
}

.custom-file-input.is-invalid:focus ~ .custom-file-label, .was-validated .custom-file-input:invalid:focus ~ .custom-file-label {
  box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25)
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center
}

.form-inline .form-check {
  width: 100%
}

@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0
  }

  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle
  }

  .form-inline .form-control-plaintext {
    display: inline-block
  }

  .form-inline .custom-select, .form-inline .input-group {
    width: auto
  }

  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0
  }

  .form-inline .form-check-input {
    position: relative;
    margin-top: 0;
    margin-right: .25rem;
    margin-left: 0
  }

  .form-inline .custom-control {
    align-items: center;
    justify-content: center
  }

  .form-inline .custom-control-label {
    margin-bottom: 0
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none
  }
}

.btn:focus, .btn:hover {
  text-decoration: none
}

.btn.focus, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.btn.disabled, .btn:disabled {
  opacity: .65
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer
}

a.btn.disabled, fieldset:disabled a.btn {
  pointer-events: none
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc
}

.btn-primary.focus, .btn-primary:focus {
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff
}

.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf
}

.btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62
}

.btn-secondary.focus, .btn-secondary:focus {
  box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d
}

.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b
}

.btn-secondary:not(:disabled):not(.disabled).active:focus, .btn-secondary:not(:disabled):not(.disabled):active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34
}

.btn-success.focus, .btn-success:focus {
  box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.btn-success.disabled, .btn-success:disabled {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745
}

.btn-success:not(:disabled):not(.disabled).active, .btn-success:not(:disabled):not(.disabled):active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430
}

.btn-success:not(:disabled):not(.disabled).active:focus, .btn-success:not(:disabled):not(.disabled):active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8
}

.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b
}

.btn-info.focus, .btn-info:focus {
  box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.btn-info.disabled, .btn-info:disabled {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8
}

.btn-info:not(:disabled):not(.disabled).active, .btn-info:not(:disabled):not(.disabled):active, .show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f
}

.btn-info:not(:disabled):not(.disabled).active:focus, .btn-info:not(:disabled):not(.disabled):active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107
}

.btn-warning:hover {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00
}

.btn-warning.focus, .btn-warning:focus {
  box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.btn-warning.disabled, .btn-warning:disabled {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107
}

.btn-warning:not(:disabled):not(.disabled).active, .btn-warning:not(:disabled):not(.disabled):active, .show > .btn-warning.dropdown-toggle {
  color: #212529;
  background-color: #d39e00;
  border-color: #c69500
}

.btn-warning:not(:disabled):not(.disabled).active:focus, .btn-warning:not(:disabled):not(.disabled):active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130
}

.btn-danger.focus, .btn-danger:focus {
  box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.btn-danger.disabled, .btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545
}

.btn-danger:not(:disabled):not(.disabled).active, .btn-danger:not(:disabled):not(.disabled):active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d
}

.btn-danger:not(:disabled):not(.disabled).active:focus, .btn-danger:not(:disabled):not(.disabled):active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa
}

.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5
}

.btn-light.focus, .btn-light:focus {
  box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.btn-light.disabled, .btn-light:disabled {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa
}

.btn-light:not(:disabled):not(.disabled).active, .btn-light:not(:disabled):not(.disabled):active, .show > .btn-light.dropdown-toggle {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df
}

.btn-light:not(:disabled):not(.disabled).active:focus, .btn-light:not(:disabled):not(.disabled):active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40
}

.btn-dark:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124
}

.btn-dark.focus, .btn-dark:focus {
  box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}

.btn-dark.disabled, .btn-dark:disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40
}

.btn-dark:not(:disabled):not(.disabled).active, .btn-dark:not(:disabled):not(.disabled):active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d
}

.btn-dark:not(:disabled):not(.disabled).active:focus, .btn-dark:not(:disabled):not(.disabled):active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}

.btn-outline-primary {
  color: #007bff;
  background-color: transparent;
  background-image: none;
  border-color: #007bff
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff
}

.btn-outline-primary.focus, .btn-outline-primary:focus {
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #007bff;
  background-color: transparent
}

.btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):active, .show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus, .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.btn-outline-secondary {
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  border-color: #6c757d
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d
}

.btn-outline-secondary.focus, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent
}

.btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):active, .show > .btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d
}

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.btn-outline-success {
  color: #28a745;
  background-color: transparent;
  background-image: none;
  border-color: #28a745
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745
}

.btn-outline-success.focus, .btn-outline-success:focus {
  box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #28a745;
  background-color: transparent
}

.btn-outline-success:not(:disabled):not(.disabled).active, .btn-outline-success:not(:disabled):not(.disabled):active, .show > .btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745
}

.btn-outline-success:not(:disabled):not(.disabled).active:focus, .btn-outline-success:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.btn-outline-info {
  color: #17a2b8;
  background-color: transparent;
  background-image: none;
  border-color: #17a2b8
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8
}

.btn-outline-info.focus, .btn-outline-info:focus {
  box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #17a2b8;
  background-color: transparent
}

.btn-outline-info:not(:disabled):not(.disabled).active, .btn-outline-info:not(:disabled):not(.disabled):active, .show > .btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8
}

.btn-outline-info:not(:disabled):not(.disabled).active:focus, .btn-outline-info:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.btn-outline-warning {
  color: #ffc107;
  background-color: transparent;
  background-image: none;
  border-color: #ffc107
}

.btn-outline-warning:hover {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107
}

.btn-outline-warning.focus, .btn-outline-warning:focus {
  box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #ffc107;
  background-color: transparent
}

.btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):active, .show > .btn-outline-warning.dropdown-toggle {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107
}

.btn-outline-warning:not(:disabled):not(.disabled).active:focus, .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.btn-outline-danger {
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  border-color: #dc3545
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545
}

.btn-outline-danger.focus, .btn-outline-danger:focus {
  box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent
}

.btn-outline-danger:not(:disabled):not(.disabled).active, .btn-outline-danger:not(:disabled):not(.disabled):active, .show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545
}

.btn-outline-danger:not(:disabled):not(.disabled).active:focus, .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.btn-outline-light {
  color: #f8f9fa;
  background-color: transparent;
  background-image: none;
  border-color: #f8f9fa
}

.btn-outline-light:hover {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa
}

.btn-outline-light.focus, .btn-outline-light:focus {
  box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.btn-outline-light.disabled, .btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent
}

.btn-outline-light:not(:disabled):not(.disabled).active, .btn-outline-light:not(:disabled):not(.disabled):active, .show > .btn-outline-light.dropdown-toggle {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa
}

.btn-outline-light:not(:disabled):not(.disabled).active:focus, .btn-outline-light:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.btn-outline-dark {
  color: #343a40;
  background-color: transparent;
  background-image: none;
  border-color: #343a40
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40
}

.btn-outline-dark.focus, .btn-outline-dark:focus {
  box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}

.btn-outline-dark.disabled, .btn-outline-dark:disabled {
  color: #343a40;
  background-color: transparent
}

.btn-outline-dark:not(:disabled):not(.disabled).active, .btn-outline-dark:not(:disabled):not(.disabled):active, .show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40
}

.btn-outline-dark:not(:disabled):not(.disabled).active:focus, .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  background-color: transparent
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: underline;
  background-color: transparent;
  border-color: transparent
}

.btn-link.focus, .btn-link:focus {
  text-decoration: underline;
  border-color: transparent;
  box-shadow: none
}

.btn-link.disabled, .btn-link:disabled {
  color: #6c757d;
  pointer-events: none
}

.btn-group-lg > .btn, .btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem
}

.btn-group-sm > .btn, .btn-sm {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem
}

.btn-block {
  display: block;
  width: 100%
}

.btn-block + .btn-block {
  margin-top: .5rem
}

input[type=button].btn-block, input[type=reset].btn-block, input[type=submit].btn-block {
  width: 100%
}

.fade {
  transition: opacity .15s linear
}

@media screen and (prefers-reduced-motion: reduce) {
  .fade {
    transition: none
  }
}

.fade:not(.show) {
  opacity: 0
}

.collapse:not(.show) {
  display: none
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height .35s ease
}

.dropdown, .dropleft, .dropright, .dropup {
  position: relative
}

.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: .255em;
  vertical-align: .255em;
  content: "1";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent
}

.dropdown-toggle:empty::after {
  margin-left: 0
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: .25rem
}

.dropdown-menu-right {
  right: 0;
  left: auto
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: .125rem
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: .255em;
  vertical-align: .255em;
  content: "1";
  border-top: 0;
  border-right: .3em solid transparent;
  border-bottom: .3em solid;
  border-left: .3em solid transparent
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: .125rem
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: .255em;
  content: "1";
  border-top: .3em solid transparent;
  border-right: 0;
  border-bottom: .3em solid transparent;
  border-left: .3em solid;
  vertical-align: 0
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: .125rem
}

.dropleft .dropdown-toggle::after {
  width: 0;
  height: 0;
  margin-left: .255em;
  vertical-align: .255em;
  content: "1";
  display: none
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: .255em;
  content: "1";
  border-top: .3em solid transparent;
  border-right: .3em solid;
  border-bottom: .3em solid transparent;
  vertical-align: 0
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0
}

.dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=top] {
  right: auto;
  bottom: auto
}

.dropdown-divider {
  height: 0;
  margin: .5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: .25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0
}

.dropdown-item:focus, .dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa
}

.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #007bff
}

.dropdown-item.disabled, .dropdown-item:disabled {
  color: #6c757d;
  background-color: transparent
}

.dropdown-menu.show {
  display: block
}

.dropdown-header {
  display: block;
  padding: .5rem 1.5rem;
  margin-bottom: 0;
  font-size: .875rem;
  color: #6c757d;
  white-space: nowrap
}

.dropdown-item-text {
  display: block;
  padding: .25rem 1.5rem;
  color: #212529
}

.btn-group, .btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle
}

.btn-group-vertical > .btn, .btn-group > .btn {
  position: relative;
  flex: 0 1 auto
}

.btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:hover, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {
  z-index: 1
}

.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group, .btn-group-vertical .btn + .btn, .btn-group-vertical .btn + .btn-group, .btn-group-vertical .btn-group + .btn, .btn-group-vertical .btn-group + .btn-group {
  margin-left: -1px
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start
}

.btn-toolbar .input-group {
  width: auto
}

.btn-group > .btn:first-child {
  margin-left: 0
}

.btn-group > .btn-group:not(:last-child) > .btn, .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.btn-group > .btn-group:not(:first-child) > .btn, .btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.dropdown-toggle-split {
  padding-right: .5625rem;
  padding-left: .5625rem
}

.dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after {
  margin-left: 0
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0
}

.btn-group-sm > .btn + .dropdown-toggle-split, .btn-sm + .dropdown-toggle-split {
  padding-right: .375rem;
  padding-left: .375rem
}

.btn-group-lg > .btn + .dropdown-toggle-split, .btn-lg + .dropdown-toggle-split {
  padding-right: .75rem;
  padding-left: .75rem
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center
}

.btn-group-vertical .btn, .btn-group-vertical .btn-group {
  width: 100%
}

.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0
}

.btn-group-vertical > .btn-group:not(:last-child) > .btn, .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0
}

.btn-group-vertical > .btn-group:not(:first-child) > .btn, .btn-group-vertical > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0
}

.btn-group-toggle > .btn, .btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0
}

.btn-group-toggle > .btn input[type=checkbox], .btn-group-toggle > .btn input[type=radio], .btn-group-toggle > .btn-group > .btn input[type=checkbox], .btn-group-toggle > .btn-group > .btn input[type=radio] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%
}

.input-group > .custom-file, .input-group > .custom-select, .input-group > .form-control {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0
}

.input-group > .custom-file + .custom-file, .input-group > .custom-file + .custom-select, .input-group > .custom-file + .form-control, .input-group > .custom-select + .custom-file, .input-group > .custom-select + .custom-select, .input-group > .custom-select + .form-control, .input-group > .form-control + .custom-file, .input-group > .form-control + .custom-select, .input-group > .form-control + .form-control {
  margin-left: -1px
}

.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label, .input-group > .custom-select:focus, .input-group > .form-control:focus {
  z-index: 3
}

.input-group > .custom-file .custom-file-input:focus {
  z-index: 4
}

.input-group > .custom-select:not(:last-child), .input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.input-group > .custom-select:not(:first-child), .input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.input-group > .custom-file {
  display: flex;
  align-items: center
}

.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.input-group > .custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.input-group-append, .input-group-prepend {
  display: flex
}

.input-group-append .btn, .input-group-prepend .btn {
  position: relative;
  z-index: 2
}

.input-group-append .btn + .btn, .input-group-append .btn + .input-group-text, .input-group-append .input-group-text + .btn, .input-group-append .input-group-text + .input-group-text, .input-group-prepend .btn + .btn, .input-group-prepend .btn + .input-group-text, .input-group-prepend .input-group-text + .btn, .input-group-prepend .input-group-text + .input-group-text {
  margin-left: -1px
}

.input-group-prepend {
  margin-right: -1px
}

.input-group-append {
  margin-left: -1px
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .25rem
}

.input-group-text input[type=checkbox], .input-group-text input[type=radio] {
  margin-top: 0
}

.input-group-lg > .form-control, .input-group-lg > .input-group-append > .btn, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-prepend > .btn, .input-group-lg > .input-group-prepend > .input-group-text {
  height: calc(2.875rem + 2px);
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem
}

.input-group-sm > .form-control, .input-group-sm > .input-group-append > .btn, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn, .input-group-sm > .input-group-prepend > .input-group-text {
  height: calc(1.8125rem + 2px);
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem
}

.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child), .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.input-group > .input-group-append > .btn, .input-group > .input-group-append > .input-group-text, .input-group > .input-group-prepend:first-child > .btn:not(:first-child), .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child), .input-group > .input-group-prepend:not(:first-child) > .btn, .input-group > .input-group-prepend:not(:first-child) > .input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  background-color: #007bff
}

.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-control-input:active ~ .custom-control-label::before {
  color: #fff;
  background-color: #b3d7ff
}

.custom-control-input:disabled ~ .custom-control-label {
  color: #6c757d
}

.custom-control-input:disabled ~ .custom-control-label::before {
  background-color: #e9ecef
}

.custom-control-label {
  position: relative;
  margin-bottom: 0
}

.custom-control-label::before {
  position: absolute;
  top: .25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "1";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #dee2e6
}

.custom-control-label::after {
  position: absolute;
  top: .25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "1";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%
}

.custom-checkbox .custom-control-label::before {
  border-radius: .25rem
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #007bff
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E")
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
  background-color: #007bff
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E")
}

.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, .5)
}

.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, .5)
}

.custom-radio .custom-control-label::before {
  border-radius: 50%
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #007bff
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")
}

.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, .5)
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: .375rem 1.75rem .375rem .75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") right .75rem center/8px 10px no-repeat #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(128, 189, 255, .5)
}

.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #fff
}

.custom-select[multiple], .custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: .75rem;
  background-image: none
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef
}

.custom-select::-ms-expand {
  opacity: 0
}

.custom-select-sm {
  height: calc(1.8125rem + 2px);
  padding-top: .375rem;
  padding-bottom: .375rem;
  font-size: 75%
}

.custom-select-lg {
  height: calc(2.875rem + 2px);
  padding-top: .375rem;
  padding-bottom: .375rem;
  font-size: 125%
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin-bottom: 0
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin: 0;
  opacity: 0
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-file-input:focus ~ .custom-file-label::after {
  border-color: #80bdff
}

.custom-file-input:disabled ~ .custom-file-label {
  background-color: #e9ecef
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Browse"
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(2.25rem + 2px);
  padding: .375rem .75rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: 2.25rem;
  padding: .375rem .75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: 1px solid #ced4da;
  border-radius: 0 .25rem .25rem 0
}

.custom-range {
  width: 100%;
  padding-left: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none
}

.custom-range:focus {
  outline: 0
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-range::-moz-focus-outer {
  border: 0
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -.25rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  appearance: none
}

@media screen and (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none
  }

  .custom-range::-webkit-slider-thumb {
    transition: none
  }
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #b3d7ff
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  -moz-appearance: none;
  appearance: none
}

@media screen and (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
    transition: none
  }
}

.custom-range::-moz-range-thumb:active {
  background-color: #b3d7ff
}

.custom-range::-moz-range-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: .2rem;
  margin-left: .2rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  appearance: none
}

@media screen and (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
    transition: none
  }
}

.custom-range::-ms-thumb:active {
  background-color: #b3d7ff
}

.custom-range::-ms-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: .5rem
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem
}

.custom-control-label::before, .custom-file-label, .custom-select {
  transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media screen and (prefers-reduced-motion: reduce) {
  .custom-control-label::before, .custom-file-label, .custom-select {
    transition: none
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none
}

.nav-link {
  display: block;
  padding: .5rem 1rem
}

.nav-link:focus, .nav-link:hover {
  text-decoration: none
}

.nav-link.disabled {
  color: #6c757d
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6
}

.nav-tabs .nav-item {
  margin-bottom: -1px
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem
}

.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0
}

.nav-pills .nav-link {
  border-radius: .25rem
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  color: #fff;
  background-color: #007bff
}

.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center
}

.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center
}

.tab-content > .tab-pane {
  display: none
}

.tab-content > .active {
  display: block
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem
}

.navbar > .container, .navbar > .container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between
}

.navbar-brand {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap
}

.navbar-brand:focus, .navbar-brand:hover {
  text-decoration: none
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none
}

.navbar-text {
  display: inline-block;
  padding-top: .5rem;
  padding-bottom: .5rem
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center
}

.navbar-toggler {
  padding: .25rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: .25rem
}

.navbar-toggler:focus, .navbar-toggler:hover {
  text-decoration: none
}

.navbar-toggler:not(:disabled):not(.disabled) {
  cursor: pointer
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "1";
  background: center center/100% 100% no-repeat
}

@media (max-width: 575.98px) {
  .navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid {
    padding-right: 0;
    padding-left: 0
  }
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start
  }

  .navbar-expand-sm .navbar-nav {
    flex-direction: row
  }

  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute
  }

  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem
  }

  .navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid {
    flex-wrap: nowrap
  }

  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto
  }

  .navbar-expand-sm .navbar-toggler {
    display: none
  }
}

@media (max-width: 767.98px) {
  .navbar-expand-md > .container, .navbar-expand-md > .container-fluid {
    padding-right: 0;
    padding-left: 0
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute
  }

  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem
  }

  .navbar-expand-md > .container, .navbar-expand-md > .container-fluid {
    flex-wrap: nowrap
  }

  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto
  }

  .navbar-expand-md .navbar-toggler {
    display: none
  }
}

@media (max-width: 991.98px) {
  .navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid {
    padding-right: 0;
    padding-left: 0
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem
  }

  .navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid {
    flex-wrap: nowrap
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto
  }

  .navbar-expand-lg .navbar-toggler {
    display: none
  }
}

@media (max-width: 1199.98px) {
  .navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid {
    padding-right: 0;
    padding-left: 0
  }
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start
  }

  .navbar-expand-xl .navbar-nav {
    flex-direction: row
  }

  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute
  }

  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem
  }

  .navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid {
    flex-wrap: nowrap
  }

  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto
  }

  .navbar-expand-xl .navbar-toggler {
    display: none
  }
}

.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start
}

.navbar-expand .navbar-nav {
  flex-direction: row
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: .5rem;
  padding-left: .5rem
}

.navbar-expand > .container, .navbar-expand > .container-fluid {
  padding-right: 0;
  padding-left: 0;
  flex-wrap: nowrap
}

.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto
}

.navbar-expand .navbar-toggler {
  display: none
}

.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
  color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0, 0, 0, .7)
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, .3)
}

.navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show > .nav-link {
  color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, .5);
  border-color: rgba(0, 0, 0, .1)
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-text a, .navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {
  color: rgba(0, 0, 0, .9)
}

.navbar-dark .navbar-brand, .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {
  color: #fff
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, .5)
}

.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, .75)
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, .25)
}

.navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show > .nav-link {
  color: #fff
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, .5);
  border-color: rgba(255, 255, 255, .1)
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, .5)
}

.navbar-dark .navbar-text a, .navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {
  color: #fff
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box
}

.card > hr {
  margin-right: 0;
  margin-left: 0
}

.card > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem
}

.card > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem
}

.card-title {
  margin-bottom: .75rem
}

.card-subtitle {
  margin-top: -.375rem;
  margin-bottom: 0
}

.card-text:last-child {
  margin-bottom: 0
}

.card-link:hover {
  text-decoration: none
}

.card-link + .card-link {
  margin-left: 1.25rem
}

.card-header {
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, .03);
  border-bottom: 1px solid rgba(0, 0, 0, .125)
}

.card-header:first-child {
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
}

.card-header + .list-group .list-group-item:first-child {
  border-top: 0
}

.card-footer {
  padding: .75rem 1.25rem;
  background-color: rgba(0, 0, 0, .03);
  border-top: 1px solid rgba(0, 0, 0, .125)
}

.card-header-tabs {
  margin-right: -.625rem;
  margin-bottom: -.75rem;
  margin-left: -.625rem;
  border-bottom: 0
}

.card-header-pills {
  margin-right: -.625rem;
  margin-left: -.625rem
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem
}

.card-img {
  width: 100%;
  border-radius: calc(.25rem - 1px)
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px)
}

.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(.25rem - 1px);
  border-bottom-left-radius: calc(.25rem - 1px)
}

.card-deck {
  display: flex;
  flex-direction: column
}

.card-deck .card {
  margin-bottom: 15px
}

@media (min-width: 576px) {
  .card-deck {
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px
  }

  .card-deck .card {
    display: flex;
    flex: 1 0 0%;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px
  }
}

.card-group {
  display: flex;
  flex-direction: column
}

.card-group > .card {
  margin-bottom: 15px
}

@media (min-width: 576px) {
  .card-group {
    flex-flow: row wrap
  }

  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0
  }

  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0
  }

  .card-group > .card:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
  }

  .card-group > .card:first-child .card-header, .card-group > .card:first-child .card-img-top {
    border-top-right-radius: 0
  }

  .card-group > .card:first-child .card-footer, .card-group > .card:first-child .card-img-bottom {
    border-bottom-right-radius: 0
  }

  .card-group > .card:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
  }

  .card-group > .card:last-child .card-header, .card-group > .card:last-child .card-img-top {
    border-top-left-radius: 0
  }

  .card-group > .card:last-child .card-footer, .card-group > .card:last-child .card-img-bottom {
    border-bottom-left-radius: 0
  }

  .card-group > .card:only-child {
    border-radius: .25rem
  }

  .card-group > .card:only-child .card-header, .card-group > .card:only-child .card-img-top {
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem
  }

  .card-group > .card:only-child .card-footer, .card-group > .card:only-child .card-img-bottom {
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: .25rem
  }

  .card-group > .card:not(:first-child):not(:last-child):not(:only-child), .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top {
    border-radius: 0
  }

  .card-columns {
    -moz-column-count: 3;
    column-count: 3;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1
  }

  .card-columns .card {
    display: inline-block;
    width: 100%
  }
}

.card-columns .card {
  margin-bottom: .75rem
}

.accordion .card:not(:first-of-type):not(:last-of-type) {
  border-bottom: 0;
  border-radius: 0
}

.accordion .card:not(:first-of-type) .card-header:first-child {
  border-radius: 0
}

.accordion .card:first-of-type {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0
}

.accordion .card:last-of-type {
  border-top-left-radius: 0;
  border-top-right-radius: 0
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: .5rem
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: .5rem;
  color: #6c757d;
  content: "/"
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none
}

.breadcrumb-item.active {
  color: #6c757d
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem
}

.page-link {
  position: relative;
  display: block;
  padding: .5rem .75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6
}

.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  border-color: #dee2e6
}

.page-link:focus {
  z-index: 2;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.page-link:not(:disabled):not(.disabled) {
  cursor: pointer
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem
}

.page-item:last-child .page-link {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6
}

.pagination-lg .page-link {
  padding: .75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: .3rem;
  border-bottom-left-radius: .3rem
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: .3rem;
  border-bottom-right-radius: .3rem
}

.pagination-sm .page-link {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem
}

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem
}

.badge:empty {
  display: none
}

.btn .badge {
  position: relative;
  top: -1px
}

.badge-pill {
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem
}

.badge-primary {
  color: #fff;
  background-color: #007bff
}

.badge-primary[href]:focus, .badge-primary[href]:hover {
  color: #fff;
  text-decoration: none;
  background-color: #0062cc
}

.badge-secondary {
  color: #fff;
  background-color: #6c757d
}

.badge-secondary[href]:focus, .badge-secondary[href]:hover {
  color: #fff;
  text-decoration: none;
  background-color: #545b62
}

.badge-success {
  color: #fff;
  background-color: #28a745
}

.badge-success[href]:focus, .badge-success[href]:hover {
  color: #fff;
  text-decoration: none;
  background-color: #1e7e34
}

.badge-info {
  color: #fff;
  background-color: #17a2b8
}

.badge-info[href]:focus, .badge-info[href]:hover {
  color: #fff;
  text-decoration: none;
  background-color: #117a8b
}

.badge-warning {
  color: #212529;
  background-color: #ffc107
}

.badge-warning[href]:focus, .badge-warning[href]:hover {
  color: #212529;
  text-decoration: none;
  background-color: #d39e00
}

.badge-danger {
  color: #fff;
  background-color: #dc3545
}

.badge-danger[href]:focus, .badge-danger[href]:hover {
  color: #fff;
  text-decoration: none;
  background-color: #bd2130
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa
}

.badge-light[href]:focus, .badge-light[href]:hover {
  color: #212529;
  text-decoration: none;
  background-color: #dae0e5
}

.badge-dark {
  color: #fff;
  background-color: #343a40
}

.badge-dark[href]:focus, .badge-dark[href]:hover {
  color: #fff;
  text-decoration: none;
  background-color: #1d2124
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0
}

.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem
}

.alert-heading {
  color: inherit
}

.alert-link {
  font-weight: 700
}

.alert-dismissible {
  padding-right: 4rem
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  padding: .75rem 1.25rem;
  color: inherit
}

.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff
}

.alert-primary hr {
  border-top-color: #9fcdff
}

.alert-primary .alert-link {
  color: #002752
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db
}

.alert-secondary hr {
  border-top-color: #c8cbcf
}

.alert-secondary .alert-link {
  color: #202326
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb
}

.alert-success hr {
  border-top-color: #b1dfbb
}

.alert-success .alert-link {
  color: #0b2e13
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb
}

.alert-info hr {
  border-top-color: #abdde5
}

.alert-info .alert-link {
  color: #062c33
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba
}

.alert-warning hr {
  border-top-color: #ffe8a1
}

.alert-warning .alert-link {
  color: #533f03
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb
}

.alert-danger hr {
  border-top-color: #f1b0b7
}

.alert-danger .alert-link {
  color: #491217
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe
}

.alert-light hr {
  border-top-color: #ececf6
}

.alert-light .alert-link {
  color: #686868
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca
}

.alert-dark hr {
  border-top-color: #b9bbbe
}

.alert-dark .alert-link {
  color: #040505
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0
  }

  to {
    background-position: 0 0
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0
  }

  to {
    background-position: 0 0
  }
}

.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width .6s ease
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes
}

.media {
  display: flex;
  align-items: flex-start
}

.media-body {
  flex: 1
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit
}

.list-group-item-action:focus, .list-group-item-action:hover {
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa
}

.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef
}

.list-group-item {
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125)
}

.list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem
}

.list-group-item:focus, .list-group-item:hover {
  z-index: 1;
  text-decoration: none
}

.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  background-color: #fff
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0
}

.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0
}

.list-group-flush:last-child .list-group-item:last-child {
  border-bottom: 0
}

.list-group-item-primary {
  color: #004085;
  background-color: #b8daff
}

.list-group-item-primary.list-group-item-action:focus, .list-group-item-primary.list-group-item-action:hover {
  color: #004085;
  background-color: #9fcdff
}

.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #004085;
  border-color: #004085
}

.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db
}

.list-group-item-secondary.list-group-item-action:focus, .list-group-item-secondary.list-group-item-action:hover {
  color: #383d41;
  background-color: #c8cbcf
}

.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #383d41;
  border-color: #383d41
}

.list-group-item-success {
  color: #155724;
  background-color: #c3e6cb
}

.list-group-item-success.list-group-item-action:focus, .list-group-item-success.list-group-item-action:hover {
  color: #155724;
  background-color: #b1dfbb
}

.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #155724;
  border-color: #155724
}

.list-group-item-info {
  color: #0c5460;
  background-color: #bee5eb
}

.list-group-item-info.list-group-item-action:focus, .list-group-item-info.list-group-item-action:hover {
  color: #0c5460;
  background-color: #abdde5
}

.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #0c5460;
  border-color: #0c5460
}

.list-group-item-warning {
  color: #856404;
  background-color: #ffeeba
}

.list-group-item-warning.list-group-item-action:focus, .list-group-item-warning.list-group-item-action:hover {
  color: #856404;
  background-color: #ffe8a1
}

.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #856404;
  border-color: #856404
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb
}

.list-group-item-danger.list-group-item-action:focus, .list-group-item-danger.list-group-item-action:hover {
  color: #721c24;
  background-color: #f1b0b7
}

.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #721c24;
  border-color: #721c24
}

.list-group-item-light {
  color: #818182;
  background-color: #fdfdfe
}

.list-group-item-light.list-group-item-action:focus, .list-group-item-light.list-group-item-action:hover {
  color: #818182;
  background-color: #ececf6
}

.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #818182;
  border-color: #818182
}

.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca
}

.list-group-item-dark.list-group-item-action:focus, .list-group-item-dark.list-group-item-action:hover {
  color: #1b1e21;
  background-color: #b9bbbe
}

.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #1b1e21;
  border-color: #1b1e21
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5
}

.close:not(:disabled):not(.disabled) {
  cursor: pointer
}

.close:not(:disabled):not(.disabled):focus, .close:not(:disabled):not(.disabled):hover {
  color: #000;
  text-decoration: none;
  opacity: .75
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none
}

.modal-open {
  overflow: hidden
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none
}

.modal.fade .modal-dialog {
  transition: transform .3s ease-out;
  transform: translate(0, -25%)
}

@media screen and (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog, .progress-bar {
    transition: none
  }
}

.modal.show .modal-dialog {
  transform: translate(0, 0)
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - (.5rem * 2))
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - (.5rem * 2));
  content: "1"
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: .3rem;
  outline: 0
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040
}

.modal-backdrop.fade {
  opacity: 0
}

.modal-backdrop.show {
  opacity: .5
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem
}

.modal-header .close {
  padding: 1rem;
  margin: -1rem -1rem -1rem auto
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef
}

.modal-footer > :not(:first-child) {
  margin-left: .25rem
}

.modal-footer > :not(:last-child) {
  margin-right: .25rem
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto
  }

  .modal-dialog-centered {
    min-height: calc(100% - (1.75rem * 2))
  }

  .modal-dialog-centered::before {
    height: calc(100vh - (1.75rem * 2))
  }

  .modal-sm {
    max-width: 300px
  }
}

@media (min-width: 992px) {
  .modal-lg {
    max-width: 800px
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: .875rem;
  word-wrap: break-word;
  opacity: 0
}

.tooltip.show {
  opacity: .9
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: .8rem;
  height: .4rem
}

.tooltip .arrow::before {
  position: absolute;
  content: "1";
  border-color: transparent;
  border-style: solid
}

.bs-tooltip-auto[x-placement^=top], .bs-tooltip-top {
  padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=top] .arrow, .bs-tooltip-top .arrow {
  bottom: 0
}

.bs-tooltip-auto[x-placement^=top] .arrow::before, .bs-tooltip-top .arrow::before {
  top: 0;
  border-width: .4rem .4rem 0;
  border-top-color: #000
}

.bs-tooltip-auto[x-placement^=right], .bs-tooltip-right {
  padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=right] .arrow, .bs-tooltip-right .arrow {
  left: 0;
  width: .4rem;
  height: .8rem
}

.bs-tooltip-auto[x-placement^=right] .arrow::before, .bs-tooltip-right .arrow::before {
  right: 0;
  border-width: .4rem .4rem .4rem 0;
  border-right-color: #000
}

.bs-tooltip-auto[x-placement^=bottom], .bs-tooltip-bottom {
  padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow, .bs-tooltip-bottom .arrow {
  top: 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow::before, .bs-tooltip-bottom .arrow::before {
  bottom: 0;
  border-width: 0 .4rem .4rem;
  border-bottom-color: #000
}

.bs-tooltip-auto[x-placement^=left], .bs-tooltip-left {
  padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=left] .arrow, .bs-tooltip-left .arrow {
  right: 0;
  width: .4rem;
  height: .8rem
}

.bs-tooltip-auto[x-placement^=left] .arrow::before, .bs-tooltip-left .arrow::before {
  left: 0;
  border-width: .4rem 0 .4rem .4rem;
  border-left-color: #000
}

.tooltip-inner {
  max-width: 200px;
  padding: .25rem .5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: .25rem
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: .875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: .3rem
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: .5rem;
  margin: 0 .3rem
}

.popover .arrow::after, .popover .arrow::before {
  position: absolute;
  display: block;
  content: "1";
  border-color: transparent;
  border-style: solid
}

.bs-popover-auto[x-placement^=top], .bs-popover-top {
  margin-bottom: .5rem
}

.bs-popover-auto[x-placement^=top] .arrow, .bs-popover-top .arrow {
  bottom: calc((.5rem + 1px) * -1)
}

.bs-popover-auto[x-placement^=top] .arrow::after, .bs-popover-auto[x-placement^=top] .arrow::before, .bs-popover-top .arrow::after, .bs-popover-top .arrow::before {
  border-width: .5rem .5rem 0
}

.bs-popover-auto[x-placement^=top] .arrow::before, .bs-popover-top .arrow::before {
  bottom: 0;
  border-top-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=top] .arrow::after, .bs-popover-top .arrow::after {
  bottom: 1px;
  border-top-color: #fff
}

.bs-popover-auto[x-placement^=right], .bs-popover-right {
  margin-left: .5rem
}

.bs-popover-auto[x-placement^=right] .arrow, .bs-popover-right .arrow {
  left: calc((.5rem + 1px) * -1);
  width: .5rem;
  height: 1rem;
  margin: .3rem 0
}

.bs-popover-auto[x-placement^=right] .arrow::after, .bs-popover-auto[x-placement^=right] .arrow::before, .bs-popover-right .arrow::after, .bs-popover-right .arrow::before {
  border-width: .5rem .5rem .5rem 0
}

.bs-popover-auto[x-placement^=right] .arrow::before, .bs-popover-right .arrow::before {
  left: 0;
  border-right-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=right] .arrow::after, .bs-popover-right .arrow::after {
  left: 1px;
  border-right-color: #fff
}

.bs-popover-auto[x-placement^=bottom], .bs-popover-bottom {
  margin-top: .5rem
}

.bs-popover-auto[x-placement^=bottom] .arrow, .bs-popover-bottom .arrow {
  top: calc((.5rem + 1px) * -1)
}

.bs-popover-auto[x-placement^=bottom] .arrow::after, .bs-popover-auto[x-placement^=bottom] .arrow::before, .bs-popover-bottom .arrow::after, .bs-popover-bottom .arrow::before {
  border-width: 0 .5rem .5rem
}

.bs-popover-auto[x-placement^=bottom] .arrow::before, .bs-popover-bottom .arrow::before {
  top: 0;
  border-bottom-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=bottom] .arrow::after, .bs-popover-bottom .arrow::after {
  top: 1px;
  border-bottom-color: #fff
}

.bs-popover-auto[x-placement^=bottom] .popover-header::before, .bs-popover-bottom .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -.5rem;
  content: "1";
  border-bottom: 1px solid #f7f7f7
}

.bs-popover-auto[x-placement^=left], .bs-popover-left {
  margin-right: .5rem
}

.bs-popover-auto[x-placement^=left] .arrow, .bs-popover-left .arrow {
  right: calc((.5rem + 1px) * -1);
  width: .5rem;
  height: 1rem;
  margin: .3rem 0
}

.bs-popover-auto[x-placement^=left] .arrow::after, .bs-popover-auto[x-placement^=left] .arrow::before, .bs-popover-left .arrow::after, .bs-popover-left .arrow::before {
  border-width: .5rem 0 .5rem .5rem
}

.bs-popover-auto[x-placement^=left] .arrow::before, .bs-popover-left .arrow::before {
  right: 0;
  border-left-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=left] .arrow::after, .bs-popover-left .arrow::after {
  right: 1px;
  border-left-color: #fff
}

.popover-header {
  padding: .5rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  color: inherit;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px)
}

.popover-header:empty {
  display: none
}

.popover-body {
  padding: .5rem .75rem;
  color: #212529
}

.carousel {
  position: relative
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden
}

.carousel-item {
  position: relative;
  display: none;
  align-items: center;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  perspective: 1000px
}

.carousel-item-next, .carousel-item-prev, .carousel-item.active {
  display: block;
  transition: transform .6s ease
}

@media screen and (prefers-reduced-motion: reduce) {
  .carousel-item-next, .carousel-item-prev, .carousel-item.active {
    transition: none
  }
}

.carousel-item-next, .carousel-item-prev {
  position: absolute;
  top: 0
}

.carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right {
  transform: translateX(0)
}

@supports (transform-style: preserve-3d) {
  .carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right {
    transform: translate3d(0, 0, 0)
  }
}

.active.carousel-item-right, .carousel-item-next {
  transform: translateX(100%)
}

@supports (transform-style: preserve-3d) {
  .active.carousel-item-right, .carousel-item-next {
    transform: translate3d(100%, 0, 0)
  }
}

.active.carousel-item-left, .carousel-item-prev {
  transform: translateX(-100%)
}

@supports (transform-style: preserve-3d) {
  .active.carousel-item-left, .carousel-item-prev {
    transform: translate3d(-100%, 0, 0)
  }
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-duration: .6s;
  transition-property: opacity
}

.carousel-fade .carousel-item-next.carousel-item-left, .carousel-fade .carousel-item-prev.carousel-item-right, .carousel-fade .carousel-item.active {
  opacity: 1
}

.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-right {
  opacity: 0
}

.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev, .carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active {
  transform: translateX(0)
}

@supports (transform-style: preserve-3d) {
  .carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev, .carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active {
    transform: translate3d(0, 0, 0)
  }
}

.carousel-control-next, .carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: .5
}

.carousel-control-next:focus, .carousel-control-next:hover, .carousel-control-prev:focus, .carousel-control-prev:hover {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: .9
}

.carousel-control-prev {
  left: 0
}

.carousel-control-next {
  right: 0
}

.carousel-control-next-icon, .carousel-control-prev-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: center center/100% 100% no-repeat
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 10px;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none
}

.carousel-indicators li {
  position: relative;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .5)
}

.carousel-indicators li::before {
  position: absolute;
  top: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "1"
}

.carousel-indicators li::after {
  position: absolute;
  bottom: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "1"
}

.carousel-indicators .active {
  background-color: #fff
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center
}

.align-baseline {
  vertical-align: baseline !important
}

.align-top {
  vertical-align: top !important
}

.align-middle {
  vertical-align: middle !important
}

.align-bottom {
  vertical-align: bottom !important
}

.align-text-bottom {
  vertical-align: text-bottom !important
}

.align-text-top {
  vertical-align: text-top !important
}

.bg-primary {
  background-color: #007bff !important
}

a.bg-primary:focus, a.bg-primary:hover, button.bg-primary:focus, button.bg-primary:hover {
  background-color: #0062cc !important
}

.bg-secondary {
  background-color: #6c757d !important
}

a.bg-secondary:focus, a.bg-secondary:hover, button.bg-secondary:focus, button.bg-secondary:hover {
  background-color: #545b62 !important
}

.bg-success {
  background-color: #28a745 !important
}

a.bg-success:focus, a.bg-success:hover, button.bg-success:focus, button.bg-success:hover {
  background-color: #1e7e34 !important
}

.bg-info {
  background-color: #17a2b8 !important
}

a.bg-info:focus, a.bg-info:hover, button.bg-info:focus, button.bg-info:hover {
  background-color: #117a8b !important
}

.bg-warning {
  background-color: #ffc107 !important
}

a.bg-warning:focus, a.bg-warning:hover, button.bg-warning:focus, button.bg-warning:hover {
  background-color: #d39e00 !important
}

.bg-danger {
  background-color: #dc3545 !important
}

a.bg-danger:focus, a.bg-danger:hover, button.bg-danger:focus, button.bg-danger:hover {
  background-color: #bd2130 !important
}

.bg-light {
  background-color: #f8f9fa !important
}

a.bg-light:focus, a.bg-light:hover, button.bg-light:focus, button.bg-light:hover {
  background-color: #dae0e5 !important
}

.bg-dark {
  background-color: #343a40 !important
}

a.bg-dark:focus, a.bg-dark:hover, button.bg-dark:focus, button.bg-dark:hover {
  background-color: #1d2124 !important
}

.bg-white {
  background-color: #fff !important
}

.bg-transparent {
  background-color: transparent !important
}

.border {
  border: 1px solid #dee2e6 !important
}

.border-top {
  border-top: 1px solid #dee2e6 !important
}

.border-right {
  border-right: 1px solid #dee2e6 !important
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important
}

.border-left {
  border-left: 1px solid #dee2e6 !important
}

.border-0 {
  border: 0 !important
}

.border-top-0 {
  border-top: 0 !important
}

.border-right-0 {
  border-right: 0 !important
}

.border-bottom-0 {
  border-bottom: 0 !important
}

.border-left-0 {
  border-left: 0 !important
}

.border-primary {
  border-color: #007bff !important
}

.border-secondary {
  border-color: #6c757d !important
}

.border-success {
  border-color: #28a745 !important
}

.border-info {
  border-color: #17a2b8 !important
}

.border-warning {
  border-color: #ffc107 !important
}

.border-danger {
  border-color: #dc3545 !important
}

.border-light {
  border-color: #f8f9fa !important
}

.border-dark {
  border-color: #343a40 !important
}

.border-white {
  border-color: #fff !important
}

.rounded {
  border-radius: .25rem !important
}

.rounded-top {
  border-top-left-radius: .25rem !important;
  border-top-right-radius: .25rem !important
}

.rounded-right {
  border-top-right-radius: .25rem !important;
  border-bottom-right-radius: .25rem !important
}

.rounded-bottom {
  border-bottom-right-radius: .25rem !important;
  border-bottom-left-radius: .25rem !important
}

.rounded-left {
  border-top-left-radius: .25rem !important;
  border-bottom-left-radius: .25rem !important
}

.rounded-circle {
  border-radius: 50% !important
}

.rounded-0 {
  border-radius: 0 !important
}

.clearfix::after {
  display: block;
  clear: both;
  content: "1"
}

.d-none {
  display: none !important
}

.d-inline {
  display: inline !important
}

.d-inline-block {
  display: inline-block !important
}

.d-block {
  display: block !important
}

.d-table {
  display: table !important
}

.d-table-row {
  display: table-row !important
}

.d-table-cell {
  display: table-cell !important
}

.d-flex {
  display: flex !important
}

.d-inline-flex {
  display: inline-flex !important
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important
  }

  .d-sm-inline {
    display: inline !important
  }

  .d-sm-inline-block {
    display: inline-block !important
  }

  .d-sm-block {
    display: block !important
  }

  .d-sm-table {
    display: table !important
  }

  .d-sm-table-row {
    display: table-row !important
  }

  .d-sm-table-cell {
    display: table-cell !important
  }

  .d-sm-flex {
    display: flex !important
  }

  .d-sm-inline-flex {
    display: inline-flex !important
  }
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important
  }

  .d-md-inline {
    display: inline !important
  }

  .d-md-inline-block {
    display: inline-block !important
  }

  .d-md-block {
    display: block !important
  }

  .d-md-table {
    display: table !important
  }

  .d-md-table-row {
    display: table-row !important
  }

  .d-md-table-cell {
    display: table-cell !important
  }

  .d-md-flex {
    display: flex !important
  }

  .d-md-inline-flex {
    display: inline-flex !important
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important
  }

  .d-lg-inline {
    display: inline !important
  }

  .d-lg-inline-block {
    display: inline-block !important
  }

  .d-lg-block {
    display: block !important
  }

  .d-lg-table {
    display: table !important
  }

  .d-lg-table-row {
    display: table-row !important
  }

  .d-lg-table-cell {
    display: table-cell !important
  }

  .d-lg-flex {
    display: flex !important
  }

  .d-lg-inline-flex {
    display: inline-flex !important
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important
  }

  .d-xl-inline {
    display: inline !important
  }

  .d-xl-inline-block {
    display: inline-block !important
  }

  .d-xl-block {
    display: block !important
  }

  .d-xl-table {
    display: table !important
  }

  .d-xl-table-row {
    display: table-row !important
  }

  .d-xl-table-cell {
    display: table-cell !important
  }

  .d-xl-flex {
    display: flex !important
  }

  .d-xl-inline-flex {
    display: inline-flex !important
  }
}

@media print {
  .d-print-none {
    display: none !important
  }

  .d-print-inline {
    display: inline !important
  }

  .d-print-inline-block {
    display: inline-block !important
  }

  .d-print-block {
    display: block !important
  }

  .d-print-table {
    display: table !important
  }

  .d-print-table-row {
    display: table-row !important
  }

  .d-print-table-cell {
    display: table-cell !important
  }

  .d-print-flex {
    display: flex !important
  }

  .d-print-inline-flex {
    display: inline-flex !important
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden
}

.embed-responsive::before {
  display: block;
  content: "1"
}

.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%
}

.embed-responsive-16by9::before {
  padding-top: 56.25%
}

.embed-responsive-4by3::before {
  padding-top: 75%
}

.embed-responsive-1by1::before {
  padding-top: 100%
}

.flex-row {
  flex-direction: row !important
}

.flex-column {
  flex-direction: column !important
}

.flex-row-reverse {
  flex-direction: row-reverse !important
}

.flex-column-reverse {
  flex-direction: column-reverse !important
}

.flex-wrap {
  flex-wrap: wrap !important
}

.flex-nowrap {
  flex-wrap: nowrap !important
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important
}

.flex-fill {
  flex: 1 1 auto !important
}

.flex-grow-0 {
  flex-grow: 0 !important
}

.flex-grow-1 {
  flex-grow: 1 !important
}

.flex-shrink-0 {
  flex-shrink: 0 !important
}

.flex-shrink-1 {
  flex-shrink: 1 !important
}

.justify-content-start {
  justify-content: flex-start !important
}

.justify-content-end {
  justify-content: flex-end !important
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important
}

.justify-content-around {
  justify-content: space-around !important
}

.align-items-start {
  align-items: flex-start !important
}

.align-items-end {
  align-items: flex-end !important
}

.align-items-center {
  align-items: center !important
}

.align-items-baseline {
  align-items: baseline !important
}

.align-items-stretch {
  align-items: stretch !important
}

.align-content-start {
  align-content: flex-start !important
}

.align-content-end {
  align-content: flex-end !important
}

.align-content-center {
  align-content: center !important
}

.align-content-between {
  align-content: space-between !important
}

.align-content-around {
  align-content: space-around !important
}

.align-content-stretch {
  align-content: stretch !important
}

.align-self-auto {
  align-self: auto !important
}

.align-self-start {
  align-self: flex-start !important
}

.align-self-end {
  align-self: flex-end !important
}

.align-self-center {
  align-self: center !important
}

.align-self-baseline {
  align-self: baseline !important
}

.align-self-stretch {
  align-self: stretch !important
}

.float-left {
  float: left !important
}

.float-right {
  float: right !important
}

.float-none {
  float: none !important
}

.position-static {
  position: static !important
}

.position-relative {
  position: relative !important
}

.position-absolute {
  position: absolute !important
}

.position-fixed {
  position: fixed !important
}

.position-sticky {
  position: sticky !important
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030
}

@supports (position: sticky) {
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal
}

.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important
}

.shadow-none {
  box-shadow: none !important
}

.w-25 {
  width: 25% !important
}

.w-50 {
  width: 50% !important
}

.w-75 {
  width: 75% !important
}

.w-100 {
  width: 100% !important
}

.w-auto {
  width: auto !important
}

.h-25 {
  height: 25% !important
}

.h-50 {
  height: 50% !important
}

.h-75 {
  height: 75% !important
}

.h-100 {
  height: 100% !important
}

.h-auto {
  height: auto !important
}

.mw-100 {
  max-width: 100% !important
}

.mh-100 {
  max-height: 100% !important
}

.m-0 {
  margin: 0 !important
}

.mt-0, .my-0 {
  margin-top: 0 !important
}

.mr-0, .mx-0 {
  margin-right: 0 !important
}

.mb-0, .my-0 {
  margin-bottom: 0 !important
}

.ml-0, .mx-0 {
  margin-left: 0 !important
}

.m-1 {
  margin: .25rem !important
}

.mt-1, .my-1 {
  margin-top: .25rem !important
}

.mr-1, .mx-1 {
  margin-right: .25rem !important
}

.mb-1, .my-1 {
  margin-bottom: .25rem !important
}

.ml-1, .mx-1 {
  margin-left: .25rem !important
}

.m-2 {
  margin: .5rem !important
}

.mt-2, .my-2 {
  margin-top: .5rem !important
}

.mr-2, .mx-2 {
  margin-right: .5rem !important
}

.mb-2, .my-2 {
  margin-bottom: .5rem !important
}

.ml-2, .mx-2 {
  margin-left: .5rem !important
}

.m-3 {
  margin: 1rem !important
}

.mt-3, .my-3 {
  margin-top: 1rem !important
}

.mr-3, .mx-3 {
  margin-right: 1rem !important
}

.mb-3, .my-3 {
  margin-bottom: 1rem !important
}

.ml-3, .mx-3 {
  margin-left: 1rem !important
}

.m-4 {
  margin: 1.5rem !important
}

.mt-4, .my-4 {
  margin-top: 1.5rem !important
}

.mr-4, .mx-4 {
  margin-right: 1.5rem !important
}

.mb-4, .my-4 {
  margin-bottom: 1.5rem !important
}

.ml-4, .mx-4 {
  margin-left: 1.5rem !important
}

.m-5 {
  margin: 3rem !important
}

.mt-5, .my-5 {
  margin-top: 3rem !important
}

.mr-5, .mx-5 {
  margin-right: 3rem !important
}

.mb-5, .my-5 {
  margin-bottom: 3rem !important
}

.ml-5, .mx-5 {
  margin-left: 3rem !important
}

.p-0 {
  padding: 0 !important
}

.pt-0, .py-0 {
  padding-top: 0 !important
}

.pr-0, .px-0 {
  padding-right: 0 !important
}

.pb-0, .py-0 {
  padding-bottom: 0 !important
}

.pl-0, .px-0 {
  padding-left: 0 !important
}

.p-1 {
  padding: .25rem !important
}

.pt-1, .py-1 {
  padding-top: .25rem !important
}

.pr-1, .px-1 {
  padding-right: .25rem !important
}

.pb-1, .py-1 {
  padding-bottom: .25rem !important
}

.pl-1, .px-1 {
  padding-left: .25rem !important
}

.p-2 {
  padding: .5rem !important
}

.pt-2, .py-2 {
  padding-top: .5rem !important
}

.pr-2, .px-2 {
  padding-right: .5rem !important
}

.pb-2, .py-2 {
  padding-bottom: .5rem !important
}

.pl-2, .px-2 {
  padding-left: .5rem !important
}

.p-3 {
  padding: 1rem !important
}

.pt-3, .py-3 {
  padding-top: 1rem !important
}

.pr-3, .px-3 {
  padding-right: 1rem !important
}

.pb-3, .py-3 {
  padding-bottom: 1rem !important
}

.pl-3, .px-3 {
  padding-left: 1rem !important
}

.p-4 {
  padding: 1.5rem !important
}

.pt-4, .py-4 {
  padding-top: 1.5rem !important
}

.pr-4, .px-4 {
  padding-right: 1.5rem !important
}

.pb-4, .py-4 {
  padding-bottom: 1.5rem !important
}

.pl-4, .px-4 {
  padding-left: 1.5rem !important
}

.p-5 {
  padding: 3rem !important
}

.pt-5, .py-5 {
  padding-top: 3rem !important
}

.pr-5, .px-5 {
  padding-right: 3rem !important
}

.pb-5, .py-5 {
  padding-bottom: 3rem !important
}

.pl-5, .px-5 {
  padding-left: 3rem !important
}

.m-auto {
  margin: auto !important
}

.mt-auto, .my-auto {
  margin-top: auto !important
}

.mr-auto, .mx-auto {
  margin-right: auto !important
}

.mb-auto, .my-auto {
  margin-bottom: auto !important
}

.ml-auto, .mx-auto {
  margin-left: auto !important
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
}

.text-justify {
  text-align: justify !important
}

.text-nowrap {
  white-space: nowrap !important
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.text-left {
  text-align: left !important
}

.text-right {
  text-align: right !important
}

.text-center {
  text-align: center !important
}

@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important
  }

  .flex-sm-column {
    flex-direction: column !important
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-sm-fill {
    flex: 1 1 auto !important
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-sm-start {
    justify-content: flex-start !important
  }

  .justify-content-sm-end {
    justify-content: flex-end !important
  }

  .justify-content-sm-center {
    justify-content: center !important
  }

  .justify-content-sm-between {
    justify-content: space-between !important
  }

  .justify-content-sm-around {
    justify-content: space-around !important
  }

  .align-items-sm-start {
    align-items: flex-start !important
  }

  .align-items-sm-end {
    align-items: flex-end !important
  }

  .align-items-sm-center {
    align-items: center !important
  }

  .align-items-sm-baseline {
    align-items: baseline !important
  }

  .align-items-sm-stretch {
    align-items: stretch !important
  }

  .align-content-sm-start {
    align-content: flex-start !important
  }

  .align-content-sm-end {
    align-content: flex-end !important
  }

  .align-content-sm-center {
    align-content: center !important
  }

  .align-content-sm-between {
    align-content: space-between !important
  }

  .align-content-sm-around {
    align-content: space-around !important
  }

  .align-content-sm-stretch {
    align-content: stretch !important
  }

  .align-self-sm-auto {
    align-self: auto !important
  }

  .align-self-sm-start {
    align-self: flex-start !important
  }

  .align-self-sm-end {
    align-self: flex-end !important
  }

  .align-self-sm-center {
    align-self: center !important
  }

  .align-self-sm-baseline {
    align-self: baseline !important
  }

  .align-self-sm-stretch {
    align-self: stretch !important
  }

  .float-sm-left {
    float: left !important
  }

  .float-sm-right {
    float: right !important
  }

  .float-sm-none {
    float: none !important
  }

  .m-sm-0 {
    margin: 0 !important
  }

  .mt-sm-0, .my-sm-0 {
    margin-top: 0 !important
  }

  .mr-sm-0, .mx-sm-0 {
    margin-right: 0 !important
  }

  .mb-sm-0, .my-sm-0 {
    margin-bottom: 0 !important
  }

  .ml-sm-0, .mx-sm-0 {
    margin-left: 0 !important
  }

  .m-sm-1 {
    margin: .25rem !important
  }

  .mt-sm-1, .my-sm-1 {
    margin-top: .25rem !important
  }

  .mr-sm-1, .mx-sm-1 {
    margin-right: .25rem !important
  }

  .mb-sm-1, .my-sm-1 {
    margin-bottom: .25rem !important
  }

  .ml-sm-1, .mx-sm-1 {
    margin-left: .25rem !important
  }

  .m-sm-2 {
    margin: .5rem !important
  }

  .mt-sm-2, .my-sm-2 {
    margin-top: .5rem !important
  }

  .mr-sm-2, .mx-sm-2 {
    margin-right: .5rem !important
  }

  .mb-sm-2, .my-sm-2 {
    margin-bottom: .5rem !important
  }

  .ml-sm-2, .mx-sm-2 {
    margin-left: .5rem !important
  }

  .m-sm-3 {
    margin: 1rem !important
  }

  .mt-sm-3, .my-sm-3 {
    margin-top: 1rem !important
  }

  .mr-sm-3, .mx-sm-3 {
    margin-right: 1rem !important
  }

  .mb-sm-3, .my-sm-3 {
    margin-bottom: 1rem !important
  }

  .ml-sm-3, .mx-sm-3 {
    margin-left: 1rem !important
  }

  .m-sm-4 {
    margin: 1.5rem !important
  }

  .mt-sm-4, .my-sm-4 {
    margin-top: 1.5rem !important
  }

  .mr-sm-4, .mx-sm-4 {
    margin-right: 1.5rem !important
  }

  .mb-sm-4, .my-sm-4 {
    margin-bottom: 1.5rem !important
  }

  .ml-sm-4, .mx-sm-4 {
    margin-left: 1.5rem !important
  }

  .m-sm-5 {
    margin: 3rem !important
  }

  .mt-sm-5, .my-sm-5 {
    margin-top: 3rem !important
  }

  .mr-sm-5, .mx-sm-5 {
    margin-right: 3rem !important
  }

  .mb-sm-5, .my-sm-5 {
    margin-bottom: 3rem !important
  }

  .ml-sm-5, .mx-sm-5 {
    margin-left: 3rem !important
  }

  .p-sm-0 {
    padding: 0 !important
  }

  .pt-sm-0, .py-sm-0 {
    padding-top: 0 !important
  }

  .pr-sm-0, .px-sm-0 {
    padding-right: 0 !important
  }

  .pb-sm-0, .py-sm-0 {
    padding-bottom: 0 !important
  }

  .pl-sm-0, .px-sm-0 {
    padding-left: 0 !important
  }

  .p-sm-1 {
    padding: .25rem !important
  }

  .pt-sm-1, .py-sm-1 {
    padding-top: .25rem !important
  }

  .pr-sm-1, .px-sm-1 {
    padding-right: .25rem !important
  }

  .pb-sm-1, .py-sm-1 {
    padding-bottom: .25rem !important
  }

  .pl-sm-1, .px-sm-1 {
    padding-left: .25rem !important
  }

  .p-sm-2 {
    padding: .5rem !important
  }

  .pt-sm-2, .py-sm-2 {
    padding-top: .5rem !important
  }

  .pr-sm-2, .px-sm-2 {
    padding-right: .5rem !important
  }

  .pb-sm-2, .py-sm-2 {
    padding-bottom: .5rem !important
  }

  .pl-sm-2, .px-sm-2 {
    padding-left: .5rem !important
  }

  .p-sm-3 {
    padding: 1rem !important
  }

  .pt-sm-3, .py-sm-3 {
    padding-top: 1rem !important
  }

  .pr-sm-3, .px-sm-3 {
    padding-right: 1rem !important
  }

  .pb-sm-3, .py-sm-3 {
    padding-bottom: 1rem !important
  }

  .pl-sm-3, .px-sm-3 {
    padding-left: 1rem !important
  }

  .p-sm-4 {
    padding: 1.5rem !important
  }

  .pt-sm-4, .py-sm-4 {
    padding-top: 1.5rem !important
  }

  .pr-sm-4, .px-sm-4 {
    padding-right: 1.5rem !important
  }

  .pb-sm-4, .py-sm-4 {
    padding-bottom: 1.5rem !important
  }

  .pl-sm-4, .px-sm-4 {
    padding-left: 1.5rem !important
  }

  .p-sm-5 {
    padding: 3rem !important
  }

  .pt-sm-5, .py-sm-5 {
    padding-top: 3rem !important
  }

  .pr-sm-5, .px-sm-5 {
    padding-right: 3rem !important
  }

  .pb-sm-5, .py-sm-5 {
    padding-bottom: 3rem !important
  }

  .pl-sm-5, .px-sm-5 {
    padding-left: 3rem !important
  }

  .m-sm-auto {
    margin: auto !important
  }

  .mt-sm-auto, .my-sm-auto {
    margin-top: auto !important
  }

  .mr-sm-auto, .mx-sm-auto {
    margin-right: auto !important
  }

  .mb-sm-auto, .my-sm-auto {
    margin-bottom: auto !important
  }

  .ml-sm-auto, .mx-sm-auto {
    margin-left: auto !important
  }

  .text-sm-left {
    text-align: left !important
  }

  .text-sm-right {
    text-align: right !important
  }

  .text-sm-center {
    text-align: center !important
  }
}

@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important
  }

  .flex-md-column {
    flex-direction: column !important
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-md-wrap {
    flex-wrap: wrap !important
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-md-fill {
    flex: 1 1 auto !important
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-md-start {
    justify-content: flex-start !important
  }

  .justify-content-md-end {
    justify-content: flex-end !important
  }

  .justify-content-md-center {
    justify-content: center !important
  }

  .justify-content-md-between {
    justify-content: space-between !important
  }

  .justify-content-md-around {
    justify-content: space-around !important
  }

  .align-items-md-start {
    align-items: flex-start !important
  }

  .align-items-md-end {
    align-items: flex-end !important
  }

  .align-items-md-center {
    align-items: center !important
  }

  .align-items-md-baseline {
    align-items: baseline !important
  }

  .align-items-md-stretch {
    align-items: stretch !important
  }

  .align-content-md-start {
    align-content: flex-start !important
  }

  .align-content-md-end {
    align-content: flex-end !important
  }

  .align-content-md-center {
    align-content: center !important
  }

  .align-content-md-between {
    align-content: space-between !important
  }

  .align-content-md-around {
    align-content: space-around !important
  }

  .align-content-md-stretch {
    align-content: stretch !important
  }

  .align-self-md-auto {
    align-self: auto !important
  }

  .align-self-md-start {
    align-self: flex-start !important
  }

  .align-self-md-end {
    align-self: flex-end !important
  }

  .align-self-md-center {
    align-self: center !important
  }

  .align-self-md-baseline {
    align-self: baseline !important
  }

  .align-self-md-stretch {
    align-self: stretch !important
  }

  .float-md-left {
    float: left !important
  }

  .float-md-right {
    float: right !important
  }

  .float-md-none {
    float: none !important
  }

  .m-md-0 {
    margin: 0 !important
  }

  .mt-md-0, .my-md-0 {
    margin-top: 0 !important
  }

  .mr-md-0, .mx-md-0 {
    margin-right: 0 !important
  }

  .mb-md-0, .my-md-0 {
    margin-bottom: 0 !important
  }

  .ml-md-0, .mx-md-0 {
    margin-left: 0 !important
  }

  .m-md-1 {
    margin: .25rem !important
  }

  .mt-md-1, .my-md-1 {
    margin-top: .25rem !important
  }

  .mr-md-1, .mx-md-1 {
    margin-right: .25rem !important
  }

  .mb-md-1, .my-md-1 {
    margin-bottom: .25rem !important
  }

  .ml-md-1, .mx-md-1 {
    margin-left: .25rem !important
  }

  .m-md-2 {
    margin: .5rem !important
  }

  .mt-md-2, .my-md-2 {
    margin-top: .5rem !important
  }

  .mr-md-2, .mx-md-2 {
    margin-right: .5rem !important
  }

  .mb-md-2, .my-md-2 {
    margin-bottom: .5rem !important
  }

  .ml-md-2, .mx-md-2 {
    margin-left: .5rem !important
  }

  .m-md-3 {
    margin: 1rem !important
  }

  .mt-md-3, .my-md-3 {
    margin-top: 1rem !important
  }

  .mr-md-3, .mx-md-3 {
    margin-right: 1rem !important
  }

  .mb-md-3, .my-md-3 {
    margin-bottom: 1rem !important
  }

  .ml-md-3, .mx-md-3 {
    margin-left: 1rem !important
  }

  .m-md-4 {
    margin: 1.5rem !important
  }

  .mt-md-4, .my-md-4 {
    margin-top: 1.5rem !important
  }

  .mr-md-4, .mx-md-4 {
    margin-right: 1.5rem !important
  }

  .mb-md-4, .my-md-4 {
    margin-bottom: 1.5rem !important
  }

  .ml-md-4, .mx-md-4 {
    margin-left: 1.5rem !important
  }

  .m-md-5 {
    margin: 3rem !important
  }

  .mt-md-5, .my-md-5 {
    margin-top: 3rem !important
  }

  .mr-md-5, .mx-md-5 {
    margin-right: 3rem !important
  }

  .mb-md-5, .my-md-5 {
    margin-bottom: 3rem !important
  }

  .ml-md-5, .mx-md-5 {
    margin-left: 3rem !important
  }

  .p-md-0 {
    padding: 0 !important
  }

  .pt-md-0, .py-md-0 {
    padding-top: 0 !important
  }

  .pr-md-0, .px-md-0 {
    padding-right: 0 !important
  }

  .pb-md-0, .py-md-0 {
    padding-bottom: 0 !important
  }

  .pl-md-0, .px-md-0 {
    padding-left: 0 !important
  }

  .p-md-1 {
    padding: .25rem !important
  }

  .pt-md-1, .py-md-1 {
    padding-top: .25rem !important
  }

  .pr-md-1, .px-md-1 {
    padding-right: .25rem !important
  }

  .pb-md-1, .py-md-1 {
    padding-bottom: .25rem !important
  }

  .pl-md-1, .px-md-1 {
    padding-left: .25rem !important
  }

  .p-md-2 {
    padding: .5rem !important
  }

  .pt-md-2, .py-md-2 {
    padding-top: .5rem !important
  }

  .pr-md-2, .px-md-2 {
    padding-right: .5rem !important
  }

  .pb-md-2, .py-md-2 {
    padding-bottom: .5rem !important
  }

  .pl-md-2, .px-md-2 {
    padding-left: .5rem !important
  }

  .p-md-3 {
    padding: 1rem !important
  }

  .pt-md-3, .py-md-3 {
    padding-top: 1rem !important
  }

  .pr-md-3, .px-md-3 {
    padding-right: 1rem !important
  }

  .pb-md-3, .py-md-3 {
    padding-bottom: 1rem !important
  }

  .pl-md-3, .px-md-3 {
    padding-left: 1rem !important
  }

  .p-md-4 {
    padding: 1.5rem !important
  }

  .pt-md-4, .py-md-4 {
    padding-top: 1.5rem !important
  }

  .pr-md-4, .px-md-4 {
    padding-right: 1.5rem !important
  }

  .pb-md-4, .py-md-4 {
    padding-bottom: 1.5rem !important
  }

  .pl-md-4, .px-md-4 {
    padding-left: 1.5rem !important
  }

  .p-md-5 {
    padding: 3rem !important
  }

  .pt-md-5, .py-md-5 {
    padding-top: 3rem !important
  }

  .pr-md-5, .px-md-5 {
    padding-right: 3rem !important
  }

  .pb-md-5, .py-md-5 {
    padding-bottom: 3rem !important
  }

  .pl-md-5, .px-md-5 {
    padding-left: 3rem !important
  }

  .m-md-auto {
    margin: auto !important
  }

  .mt-md-auto, .my-md-auto {
    margin-top: auto !important
  }

  .mr-md-auto, .mx-md-auto {
    margin-right: auto !important
  }

  .mb-md-auto, .my-md-auto {
    margin-bottom: auto !important
  }

  .ml-md-auto, .mx-md-auto {
    margin-left: auto !important
  }

  .text-md-left {
    text-align: left !important
  }

  .text-md-right {
    text-align: right !important
  }

  .text-md-center {
    text-align: center !important
  }
}

@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important
  }

  .flex-lg-column {
    flex-direction: column !important
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-lg-fill {
    flex: 1 1 auto !important
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-lg-start {
    justify-content: flex-start !important
  }

  .justify-content-lg-end {
    justify-content: flex-end !important
  }

  .justify-content-lg-center {
    justify-content: center !important
  }

  .justify-content-lg-between {
    justify-content: space-between !important
  }

  .justify-content-lg-around {
    justify-content: space-around !important
  }

  .align-items-lg-start {
    align-items: flex-start !important
  }

  .align-items-lg-end {
    align-items: flex-end !important
  }

  .align-items-lg-center {
    align-items: center !important
  }

  .align-items-lg-baseline {
    align-items: baseline !important
  }

  .align-items-lg-stretch {
    align-items: stretch !important
  }

  .align-content-lg-start {
    align-content: flex-start !important
  }

  .align-content-lg-end {
    align-content: flex-end !important
  }

  .align-content-lg-center {
    align-content: center !important
  }

  .align-content-lg-between {
    align-content: space-between !important
  }

  .align-content-lg-around {
    align-content: space-around !important
  }

  .align-content-lg-stretch {
    align-content: stretch !important
  }

  .align-self-lg-auto {
    align-self: auto !important
  }

  .align-self-lg-start {
    align-self: flex-start !important
  }

  .align-self-lg-end {
    align-self: flex-end !important
  }

  .align-self-lg-center {
    align-self: center !important
  }

  .align-self-lg-baseline {
    align-self: baseline !important
  }

  .align-self-lg-stretch {
    align-self: stretch !important
  }

  .float-lg-left {
    float: left !important
  }

  .float-lg-right {
    float: right !important
  }

  .float-lg-none {
    float: none !important
  }

  .m-lg-0 {
    margin: 0 !important
  }

  .mt-lg-0, .my-lg-0 {
    margin-top: 0 !important
  }

  .mr-lg-0, .mx-lg-0 {
    margin-right: 0 !important
  }

  .mb-lg-0, .my-lg-0 {
    margin-bottom: 0 !important
  }

  .ml-lg-0, .mx-lg-0 {
    margin-left: 0 !important
  }

  .m-lg-1 {
    margin: .25rem !important
  }

  .mt-lg-1, .my-lg-1 {
    margin-top: .25rem !important
  }

  .mr-lg-1, .mx-lg-1 {
    margin-right: .25rem !important
  }

  .mb-lg-1, .my-lg-1 {
    margin-bottom: .25rem !important
  }

  .ml-lg-1, .mx-lg-1 {
    margin-left: .25rem !important
  }

  .m-lg-2 {
    margin: .5rem !important
  }

  .mt-lg-2, .my-lg-2 {
    margin-top: .5rem !important
  }

  .mr-lg-2, .mx-lg-2 {
    margin-right: .5rem !important
  }

  .mb-lg-2, .my-lg-2 {
    margin-bottom: .5rem !important
  }

  .ml-lg-2, .mx-lg-2 {
    margin-left: .5rem !important
  }

  .m-lg-3 {
    margin: 1rem !important
  }

  .mt-lg-3, .my-lg-3 {
    margin-top: 1rem !important
  }

  .mr-lg-3, .mx-lg-3 {
    margin-right: 1rem !important
  }

  .mb-lg-3, .my-lg-3 {
    margin-bottom: 1rem !important
  }

  .ml-lg-3, .mx-lg-3 {
    margin-left: 1rem !important
  }

  .m-lg-4 {
    margin: 1.5rem !important
  }

  .mt-lg-4, .my-lg-4 {
    margin-top: 1.5rem !important
  }

  .mr-lg-4, .mx-lg-4 {
    margin-right: 1.5rem !important
  }

  .mb-lg-4, .my-lg-4 {
    margin-bottom: 1.5rem !important
  }

  .ml-lg-4, .mx-lg-4 {
    margin-left: 1.5rem !important
  }

  .m-lg-5 {
    margin: 3rem !important
  }

  .mt-lg-5, .my-lg-5 {
    margin-top: 3rem !important
  }

  .mr-lg-5, .mx-lg-5 {
    margin-right: 3rem !important
  }

  .mb-lg-5, .my-lg-5 {
    margin-bottom: 3rem !important
  }

  .ml-lg-5, .mx-lg-5 {
    margin-left: 3rem !important
  }

  .p-lg-0 {
    padding: 0 !important
  }

  .pt-lg-0, .py-lg-0 {
    padding-top: 0 !important
  }

  .pr-lg-0, .px-lg-0 {
    padding-right: 0 !important
  }

  .pb-lg-0, .py-lg-0 {
    padding-bottom: 0 !important
  }

  .pl-lg-0, .px-lg-0 {
    padding-left: 0 !important
  }

  .p-lg-1 {
    padding: .25rem !important
  }

  .pt-lg-1, .py-lg-1 {
    padding-top: .25rem !important
  }

  .pr-lg-1, .px-lg-1 {
    padding-right: .25rem !important
  }

  .pb-lg-1, .py-lg-1 {
    padding-bottom: .25rem !important
  }

  .pl-lg-1, .px-lg-1 {
    padding-left: .25rem !important
  }

  .p-lg-2 {
    padding: .5rem !important
  }

  .pt-lg-2, .py-lg-2 {
    padding-top: .5rem !important
  }

  .pr-lg-2, .px-lg-2 {
    padding-right: .5rem !important
  }

  .pb-lg-2, .py-lg-2 {
    padding-bottom: .5rem !important
  }

  .pl-lg-2, .px-lg-2 {
    padding-left: .5rem !important
  }

  .p-lg-3 {
    padding: 1rem !important
  }

  .pt-lg-3, .py-lg-3 {
    padding-top: 1rem !important
  }

  .pr-lg-3, .px-lg-3 {
    padding-right: 1rem !important
  }

  .pb-lg-3, .py-lg-3 {
    padding-bottom: 1rem !important
  }

  .pl-lg-3, .px-lg-3 {
    padding-left: 1rem !important
  }

  .p-lg-4 {
    padding: 1.5rem !important
  }

  .pt-lg-4, .py-lg-4 {
    padding-top: 1.5rem !important
  }

  .pr-lg-4, .px-lg-4 {
    padding-right: 1.5rem !important
  }

  .pb-lg-4, .py-lg-4 {
    padding-bottom: 1.5rem !important
  }

  .pl-lg-4, .px-lg-4 {
    padding-left: 1.5rem !important
  }

  .p-lg-5 {
    padding: 3rem !important
  }

  .pt-lg-5, .py-lg-5 {
    padding-top: 3rem !important
  }

  .pr-lg-5, .px-lg-5 {
    padding-right: 3rem !important
  }

  .pb-lg-5, .py-lg-5 {
    padding-bottom: 3rem !important
  }

  .pl-lg-5, .px-lg-5 {
    padding-left: 3rem !important
  }

  .m-lg-auto {
    margin: auto !important
  }

  .mt-lg-auto, .my-lg-auto {
    margin-top: auto !important
  }

  .mr-lg-auto, .mx-lg-auto {
    margin-right: auto !important
  }

  .mb-lg-auto, .my-lg-auto {
    margin-bottom: auto !important
  }

  .ml-lg-auto, .mx-lg-auto {
    margin-left: auto !important
  }

  .text-lg-left {
    text-align: left !important
  }

  .text-lg-right {
    text-align: right !important
  }

  .text-lg-center {
    text-align: center !important
  }
}

@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important
  }

  .flex-xl-column {
    flex-direction: column !important
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-xl-fill {
    flex: 1 1 auto !important
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-xl-start {
    justify-content: flex-start !important
  }

  .justify-content-xl-end {
    justify-content: flex-end !important
  }

  .justify-content-xl-center {
    justify-content: center !important
  }

  .justify-content-xl-between {
    justify-content: space-between !important
  }

  .justify-content-xl-around {
    justify-content: space-around !important
  }

  .align-items-xl-start {
    align-items: flex-start !important
  }

  .align-items-xl-end {
    align-items: flex-end !important
  }

  .align-items-xl-center {
    align-items: center !important
  }

  .align-items-xl-baseline {
    align-items: baseline !important
  }

  .align-items-xl-stretch {
    align-items: stretch !important
  }

  .align-content-xl-start {
    align-content: flex-start !important
  }

  .align-content-xl-end {
    align-content: flex-end !important
  }

  .align-content-xl-center {
    align-content: center !important
  }

  .align-content-xl-between {
    align-content: space-between !important
  }

  .align-content-xl-around {
    align-content: space-around !important
  }

  .align-content-xl-stretch {
    align-content: stretch !important
  }

  .align-self-xl-auto {
    align-self: auto !important
  }

  .align-self-xl-start {
    align-self: flex-start !important
  }

  .align-self-xl-end {
    align-self: flex-end !important
  }

  .align-self-xl-center {
    align-self: center !important
  }

  .align-self-xl-baseline {
    align-self: baseline !important
  }

  .align-self-xl-stretch {
    align-self: stretch !important
  }

  .float-xl-left {
    float: left !important
  }

  .float-xl-right {
    float: right !important
  }

  .float-xl-none {
    float: none !important
  }

  .m-xl-0 {
    margin: 0 !important
  }

  .mt-xl-0, .my-xl-0 {
    margin-top: 0 !important
  }

  .mr-xl-0, .mx-xl-0 {
    margin-right: 0 !important
  }

  .mb-xl-0, .my-xl-0 {
    margin-bottom: 0 !important
  }

  .ml-xl-0, .mx-xl-0 {
    margin-left: 0 !important
  }

  .m-xl-1 {
    margin: .25rem !important
  }

  .mt-xl-1, .my-xl-1 {
    margin-top: .25rem !important
  }

  .mr-xl-1, .mx-xl-1 {
    margin-right: .25rem !important
  }

  .mb-xl-1, .my-xl-1 {
    margin-bottom: .25rem !important
  }

  .ml-xl-1, .mx-xl-1 {
    margin-left: .25rem !important
  }

  .m-xl-2 {
    margin: .5rem !important
  }

  .mt-xl-2, .my-xl-2 {
    margin-top: .5rem !important
  }

  .mr-xl-2, .mx-xl-2 {
    margin-right: .5rem !important
  }

  .mb-xl-2, .my-xl-2 {
    margin-bottom: .5rem !important
  }

  .ml-xl-2, .mx-xl-2 {
    margin-left: .5rem !important
  }

  .m-xl-3 {
    margin: 1rem !important
  }

  .mt-xl-3, .my-xl-3 {
    margin-top: 1rem !important
  }

  .mr-xl-3, .mx-xl-3 {
    margin-right: 1rem !important
  }

  .mb-xl-3, .my-xl-3 {
    margin-bottom: 1rem !important
  }

  .ml-xl-3, .mx-xl-3 {
    margin-left: 1rem !important
  }

  .m-xl-4 {
    margin: 1.5rem !important
  }

  .mt-xl-4, .my-xl-4 {
    margin-top: 1.5rem !important
  }

  .mr-xl-4, .mx-xl-4 {
    margin-right: 1.5rem !important
  }

  .mb-xl-4, .my-xl-4 {
    margin-bottom: 1.5rem !important
  }

  .ml-xl-4, .mx-xl-4 {
    margin-left: 1.5rem !important
  }

  .m-xl-5 {
    margin: 3rem !important
  }

  .mt-xl-5, .my-xl-5 {
    margin-top: 3rem !important
  }

  .mr-xl-5, .mx-xl-5 {
    margin-right: 3rem !important
  }

  .mb-xl-5, .my-xl-5 {
    margin-bottom: 3rem !important
  }

  .ml-xl-5, .mx-xl-5 {
    margin-left: 3rem !important
  }

  .p-xl-0 {
    padding: 0 !important
  }

  .pt-xl-0, .py-xl-0 {
    padding-top: 0 !important
  }

  .pr-xl-0, .px-xl-0 {
    padding-right: 0 !important
  }

  .pb-xl-0, .py-xl-0 {
    padding-bottom: 0 !important
  }

  .pl-xl-0, .px-xl-0 {
    padding-left: 0 !important
  }

  .p-xl-1 {
    padding: .25rem !important
  }

  .pt-xl-1, .py-xl-1 {
    padding-top: .25rem !important
  }

  .pr-xl-1, .px-xl-1 {
    padding-right: .25rem !important
  }

  .pb-xl-1, .py-xl-1 {
    padding-bottom: .25rem !important
  }

  .pl-xl-1, .px-xl-1 {
    padding-left: .25rem !important
  }

  .p-xl-2 {
    padding: .5rem !important
  }

  .pt-xl-2, .py-xl-2 {
    padding-top: .5rem !important
  }

  .pr-xl-2, .px-xl-2 {
    padding-right: .5rem !important
  }

  .pb-xl-2, .py-xl-2 {
    padding-bottom: .5rem !important
  }

  .pl-xl-2, .px-xl-2 {
    padding-left: .5rem !important
  }

  .p-xl-3 {
    padding: 1rem !important
  }

  .pt-xl-3, .py-xl-3 {
    padding-top: 1rem !important
  }

  .pr-xl-3, .px-xl-3 {
    padding-right: 1rem !important
  }

  .pb-xl-3, .py-xl-3 {
    padding-bottom: 1rem !important
  }

  .pl-xl-3, .px-xl-3 {
    padding-left: 1rem !important
  }

  .p-xl-4 {
    padding: 1.5rem !important
  }

  .pt-xl-4, .py-xl-4 {
    padding-top: 1.5rem !important
  }

  .pr-xl-4, .px-xl-4 {
    padding-right: 1.5rem !important
  }

  .pb-xl-4, .py-xl-4 {
    padding-bottom: 1.5rem !important
  }

  .pl-xl-4, .px-xl-4 {
    padding-left: 1.5rem !important
  }

  .p-xl-5 {
    padding: 3rem !important
  }

  .pt-xl-5, .py-xl-5 {
    padding-top: 3rem !important
  }

  .pr-xl-5, .px-xl-5 {
    padding-right: 3rem !important
  }

  .pb-xl-5, .py-xl-5 {
    padding-bottom: 3rem !important
  }

  .pl-xl-5, .px-xl-5 {
    padding-left: 3rem !important
  }

  .m-xl-auto {
    margin: auto !important
  }

  .mt-xl-auto, .my-xl-auto {
    margin-top: auto !important
  }

  .mr-xl-auto, .mx-xl-auto {
    margin-right: auto !important
  }

  .mb-xl-auto, .my-xl-auto {
    margin-bottom: auto !important
  }

  .ml-xl-auto, .mx-xl-auto {
    margin-left: auto !important
  }

  .text-xl-left {
    text-align: left !important
  }

  .text-xl-right {
    text-align: right !important
  }

  .text-xl-center {
    text-align: center !important
  }
}

.text-lowercase {
  text-transform: lowercase !important
}

.text-uppercase {
  text-transform: uppercase !important
}

.text-capitalize {
  text-transform: capitalize !important
}

.font-weight-light {
  font-weight: 300 !important
}

.font-weight-normal {
  font-weight: 400 !important
}

.font-weight-bold {
  font-weight: 700 !important
}

.font-italic {
  font-style: italic !important
}

.text-white {
  color: #fff !important
}

.text-primary {
  color: #007bff !important
}

a.text-primary:focus, a.text-primary:hover {
  color: #0062cc !important
}

.text-secondary {
  color: #6c757d !important
}

a.text-secondary:focus, a.text-secondary:hover {
  color: #545b62 !important
}

.text-success {
  color: #28a745 !important
}

a.text-success:focus, a.text-success:hover {
  color: #1e7e34 !important
}

.text-info {
  color: #17a2b8 !important
}

a.text-info:focus, a.text-info:hover {
  color: #117a8b !important
}

.text-warning {
  color: #ffc107 !important
}

a.text-warning:focus, a.text-warning:hover {
  color: #d39e00 !important
}

.text-danger {
  color: #dc3545 !important
}

a.text-danger:focus, a.text-danger:hover {
  color: #bd2130 !important
}

.text-light {
  color: #f8f9fa !important
}

a.text-light:focus, a.text-light:hover {
  color: #dae0e5 !important
}

.text-dark {
  color: #343a40 !important
}

a.text-dark:focus, a.text-dark:hover {
  color: #1d2124 !important
}

.text-body {
  color: #212529 !important
}

.text-muted {
  color: #6c757d !important
}

.text-black-50 {
  color: rgba(0, 0, 0, .5) !important
}

.text-white-50 {
  color: rgba(255, 255, 255, .5) !important
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0
}

.visible {
  visibility: visible !important
}

.invisible {
  visibility: hidden !important
}

@media print {
  *, ::after, ::before {
    text-shadow: none !important;
    box-shadow: none !important
  }

  a:not(.btn) {
    text-decoration: underline
  }

  abbr[title]::after {
    content: " (" attr(title) ")"
  }

  pre {
    white-space: pre-wrap !important
  }

  blockquote, pre {
    border: 1px solid #adb5bd;
    page-break-inside: avoid
  }

  thead {
    display: table-header-group
  }

  img, tr {
    page-break-inside: avoid
  }

  h2, h3, p {
    orphans: 3;
    widows: 3
  }

  h2, h3 {
    page-break-after: avoid
  }

  @page {
    size: a3
  }

  .container, body {
    min-width: 992px !important
  }

  .navbar {
    display: none
  }

  .badge {
    border: 1px solid #000
  }

  .table {
    border-collapse: collapse !important
  }

  .table td, .table th {
    background-color: #fff !important
  }

  .table-bordered td, .table-bordered th {
    border: 1px solid #dee2e6 !important
  }

  .table-dark {
    color: inherit
  }

  .table-dark tbody + tbody, .table-dark td, .table-dark th, .table-dark thead th {
    border-color: #dee2e6
  }

  .table .thead-dark th {
    color: inherit;
    border-color: #dee2e6
  }
}

@font-face {
  font-family: latobold;
  src: url(/assets/fonts/lato-bold-webfont.woff2) format('woff2'), url(/assets/fonts/lato-bold-webfont.woff) format('woff');
  font-weight: 400;
  font-style: normal
}

@font-face {
  font-family: latoregular;
  src: url(/assets/fonts/lato-regular-webfont.woff2) format('woff2'), url(/assets/fonts/lato-regular-webfont.woff) format('woff');
  font-weight: 400;
  font-style: normal
}

body {
  --bg-color: #f2f4f6;
  --text-primary: #000;
  --background-primary: #fff;
  --background-contrast: #fff;
  --card-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.1);
  font-family: latoregular, latoitallic, latobold, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: var(--bg-color)
}

body.dark-mode {
  --bg-color: #141716;
  --text-primary: #f0f2f5;
  --background-primary: #1f2421;
  --background-contrast: #303633;
  --background-info: #303633;
  --card-box-shadow: 0 1px 3px rgba(31, 36, 33, 0.06), 0 1px 2px rgba(31, 36, 33, 0.1);
  --table-border-color: 1px solid rgba(31, 36, 33, .125);
  color: #f0f2f5
}

* {
  outline: 0
}

h1, h4 {
  font-weight: 400
}

.border {
  border-color: #ced4da !important
}

.container {
  max-width: 67.5rem;
  padding-bottom: 150px
}

.nav-link {
  color: #868e96
}

.nav-link.active {
  color: #007bff
}

.card {
  border-radius: 12px;
  box-shadow: var(--card-box-shadow);
  border: 0;
  background-color: var(--background-primary)
}

.card-footer, .card-footer:last-child {
  border-radius: 0 0 calc(12px - 1px) calc(12px - 1px) !important
}

.table {
  background-color: var(--background-primary);
  border: var(--table-border-color)
}

.dark-mode .table td {
  border-top: 1px solid var(--bg-color)
}

.dark-mode .thead-light th {
  background-color: var(--background-info);
  border-color: var(--background-info);
  color: var(--text-primary)
}

.dark-mode .dropdown-item, .dark-mode .dropdown-menu {
  background-color: var(--background-primary);
  color: var(--text-primary)
}

.dark-mode .dropdown-menu {
  border: 1px solid #000
}

.dark-mode .dropdown-item:hover {
  background-color: #303633
}

.dark-mode .dropdown-divider {
  border-top: 1px solid #000
}

.dark-mode .digitalocean.host {
  background-image: url(@/main-page/images/digitalocean_alt.png) !important
}

.dark-mode .vultr.host {
  background-image: url((@/main-page/images/vultr_alt.svg) !important
}

.dark-mode .linode.host {
  background-image: url(@/main-page/images/linode_alt.png) !important
}

.dark-mode .bitlaunch.host {
  background-image: url(@/main-page/images/bitlaunch_alt.svg) !important
}

.dark-mode .modal .close {
  color: var(--text-primary);
  text-shadow: none
}

.modal-backdrop {
  background-color: #ddd
}

.dark-mode .modal-backdrop {
  background-color: #303633
}

.dark-mode .modal-header {
  border-bottom: 1px solid #000
}

.dark-mode .modal-content {
  background-color: var(--background-contrast);
  border: 1px solid #000
}

.dark-mode .balance-warning {
  color: #fff;
  background-color: #1f2421
}

.modal-backdrop.show {
  opacity: .8
}

.font-weight-semibold {
  font-weight: 500
}

.dark-mode .nav-images .nav-link.active {
  background-color: var(--background-info) !important;
  color: var(--text-primary) !important
}

.dark-mode .nav-images a.nav-link:hover {
  color: var(--text-primary) !important
}

.dark-mode .btn-default, .dark-mode .ttlDropdown {
  background-color: var(--background-contrast) !important;
  border-color: var(--background-contrast) !important;
  color: var(--text-primary) !important
}

.dark-mode .page-item, .dark-mode .page-item.disabled .page-link, .dark-mode .page-link {
  background-color: var(--background-info);
  border-color: var(--background-info)
}

.dark-mode hr {
  border-top: 1px solid var(--background-contrast)
}

.page-link:hover {
  background-color: #303633;
  border-color: var(--background-info)
}

th {
  text-align: inherit;
  font-weight: 500 !important
}

.dark-mode .form-control:disabled, .dark-mode .form-control[readonly], .dark-mode input, .dark-mode input:focus, .dark-mode textarea, .dark-mode textarea:focus {
  background-color: #393f3c;
  border-color: #393f3c;
  color: #fff
}

.dark-mode .btn-light {
  background-color: #393f3c;
  border-color: #393f3c;
  color: var(--text-primary)
}

.material-icons.md-18 {
  font-size: 18px
}

.material-icons.md-24 {
  font-size: 24px
}

.material-icons.md-36 {
  font-size: 36px
}

.material-icons.md-48 {
  font-size: 48px
}

.material-icons.md-dark {
  color: rgba(0, 0, 0, .54)
}

.material-icons.md-dark.md-inactive {
  color: rgba(0, 0, 0, .26)
}

.material-icons.md-light {
  color: rgba(255, 255, 255, 1)
}

.material-icons.md-light.md-inactive {
  color: rgba(255, 255, 255, .3)
}

.material-icons.clickable {
  cursor: pointer
}

.btn .material-icons {
  margin-top: 4px
}

.host.card[_ngcontent-ppc-c3] {
  min-height: 120px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 60%
}

.card[_ngcontent-ppc-c3] {
  cursor: pointer
}

.card[_ngcontent-ppc-c3]:hover:not(.disabled) {
  background-color: #047aff;
  color: #fff
}

.card[_ngcontent-ppc-c3]:hover:not(.disabled) small[_ngcontent-ppc-c3] {
  color: #fff !important
}

.card-body[_ngcontent-ppc-c3] {
  padding: 1rem
}

.card.active[_ngcontent-ppc-c3] {
  background-color: #047aff;
  border: 1px solid #8cbeff;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5);
  color: #fff !important
}

.card.active[_ngcontent-ppc-c3] small[_ngcontent-ppc-c3] {
  color: #fff !important
}

.card[_ngcontent-ppc-c3] .new-label[_ngcontent-ppc-c3] {
  position: relative;
  color: #000
}

.card.disabled[_ngcontent-ppc-c3] {
  opacity: .5;
  cursor: not-allowed
}

.subregion[_ngcontent-ppc-c3]:first-child {
  border-radius: 0 0 0 calc(12px - 1px)
}

.subregion[_ngcontent-ppc-c3]:last-child {
  border-radius: 0 0 calc(12px - 1px)
}

.subregion[_ngcontent-ppc-c3]:only-child {
  border-radius: 0 0 calc(12px - 1px) calc(12px - 1px)
}

.digitalocean.host[_ngcontent-ppc-c3] {
  background-image: url(@/main-page/images/digitalocean.png)
}

.digitalocean.host.active[_ngcontent-ppc-c3], .digitalocean.host[_ngcontent-ppc-c3]:hover {
  background-image: url(@/main-page/images/digitalocean_alt.png)
}

.vultr.host[_ngcontent-ppc-c3] {
  background-image: url(@/main-page/images/vultr.svg)
}

.vultr.host.active[_ngcontent-ppc-c3], .vultr.host[_ngcontent-ppc-c3]:hover {
  background-image: url(@/main-page/images/vultr_alt.svg)
}

.linode.host[_ngcontent-ppc-c3] {
  background-image: url(@/main-page/images/linode.png)
}

.linode.host.active[_ngcontent-ppc-c3], .linode.host[_ngcontent-ppc-c3]:hover {
  background-image: url(@/main-page/images/linode_alt.png)
}

.bitlaunch.host[_ngcontent-ppc-c3] {
  background-image: url(@/main-page/images/bitlaunch.svg)
}

.bitlaunch.host.active[_ngcontent-ppc-c3], .bitlaunch.host[_ngcontent-ppc-c3]:hover {
  background-image: url(@/main-page/images/bitlaunch_alt.svg)
}

.btn-launch[_ngcontent-ppc-c3] {
  padding: 1rem
}

.btn-launch[_ngcontent-ppc-c3]:disabled {
  pointer-events: none
}

.form-check[_ngcontent-ppc-c3] {
  overflow: hidden;
  text-overflow: ellipsis
}

.form-check-label[_ngcontent-ppc-c3] {
  white-space: nowrap
}

.nav-images[_ngcontent-ppc-c3] .nav-link.active[_ngcontent-ppc-c3] {
  background-color: #e0e0e0;
  color: #000
}

.nav-images[_ngcontent-ppc-c3] a.nav-link.active[_ngcontent-ppc-c3]:hover, .nav-images[_ngcontent-ppc-c3] a.nav-link[_ngcontent-ppc-c3]:hover {
  color: #000
}

.nav-images[_ngcontent-ppc-c3] .nav-link.danger[_ngcontent-ppc-c3] {
  background-color: #f8f9fa;
  color: #d3344d
}

.nav-images[_ngcontent-ppc-c3] .nav-item.disabled[_ngcontent-ppc-c3] {
  color: #c9cbcc;
  pointer-events: none
}

.card.background[_ngcontent-ppc-c3] {
  color: #dfdfdf
}

.card[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3] .footer-selection-disabled[_ngcontent-ppc-c3] {
  opacity: .5;
  cursor: not-allowed
}

.version-dropdown-menu[_ngcontent-ppc-c3] {
  right: -219px;
  font-size: 12px
}

.flag-wrapper[_ngcontent-ppc-c3] {
  display: inline-block;
  margin-right: 8px
}

.info-icon[_ngcontent-ppc-c3] {
  font-size: 14px;
  position: relative
}

.region[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3] {
  padding: 0 15px;
  background-color: var(--background-primary);
  color: var(--text-primary);
  text-align: center
}

.region[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3]:hover:not(.disabled), .region.active[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3] {
  border-top: 1px solid #056adf
}

.region[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3] .col[_ngcontent-ppc-c3] {
  border-right: 1px solid rgba(0, 0, 0, .125);
  padding: 10px
}

.region[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3] .col.active[_ngcontent-ppc-c3]:not(.footer-selection-disabled), .region[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3] .col[_ngcontent-ppc-c3]:hover:not(.footer-selection-disabled) {
  background-color: #047aff;
  color: #fff
}

.region[_ngcontent-ppc-c3] .card-footer[_ngcontent-ppc-c3] .col[_ngcontent-ppc-c3]:last-child {
  border-right: 0
}

.init-script-input[_ngcontent-ppc-c3] {
  font-size: 16px;
  height: 100px
}

.beta-label[_ngcontent-ppc-c3] {
  position: relative;
  top: 49px;
  margin-left: 34%;
  color: #fec109
}

.hostcomp[_ngcontent-ppc-c3] {
  color: #6c757d7a
}

.hardware-logo-wrapper[_ngcontent-ppc-c3] {
  position: relative;
  left: 0;
  top: 0;
  width: 3rem
}
</style>
