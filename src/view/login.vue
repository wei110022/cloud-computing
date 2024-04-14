<style src="@/main-page/css/login.css" scoped></style>
<script setup lang="ts">
// import "@/main-page/css/login.css"
</script>

<template>
  <app-root _nghost-xwe-c0="" ng-version="7.2.16"><!----><!---->
    <div _ngcontent-xwe-c0="" style="margin-top: 60px;"></div>
    <div _ngcontent-xwe-c0="" class="container mt-2"><!---->
      <router-outlet _ngcontent-xwe-c0=""></router-outlet>
      <ng-component _nghost-xwe-c3="">
        <div _ngcontent-xwe-c3="" class="row">
          <div _ngcontent-xwe-c3="" class="col"><a _ngcontent-xwe-c3="" href="#mainIndex">
            <div _ngcontent-xwe-c3="" class="logo"></div>
          </a></div>
        </div><!---->
        <div _ngcontent-xwe-c3="">
          <div _ngcontent-xwe-c3="" class="row justify-content-center mt-2">
            <div _ngcontent-xwe-c3="" class="login col-11 col-sm-6 text-center" style="background: white;"><h1 _ngcontent-xwe-c3="">Log In</h1>
              <form _ngcontent-xwe-c3="" novalidate="" class="ng-valid ng-dirty ng-touched">
                <div _ngcontent-xwe-c3="" class="form-group input-group input-group-lg"><input _ngcontent-xwe-c3=""
                                                                                               class="form-control ng-valid ng-dirty ng-touched"
                                                                                               id="email" name="email"
                                                                                               placeholder="Email Address"
                                                                                               type="email"></div>
                <div _ngcontent-xwe-c3="" class="form-group input-group input-group-lg"><input _ngcontent-xwe-c3=""
                                                                                               class="form-control ng-valid ng-dirty ng-touched"
                                                                                               id="password"
                                                                                               name="password"
                                                                                               placeholder="Password"
                                                                                               type="password"></div>
                <a _ngcontent-xwe-c3="" class="btn btn-success btn-block btn-lg mb-2" type="submit" href="#/userHome/service">Log In</a>
              </form>
              <a _ngcontent-xwe-c3="" routerlink="/forgotpassword" href1="/forgotpassword">Forgot your password?</a>
            </div>
          </div>
          <div _ngcontent-xwe-c3="" class="row justify-content-center mt-2">
            <div _ngcontent-xwe-c3="" class="col text-center"><a _ngcontent-xwe-c3="" class="text-white"
                                                                 routerlink="/signup" href1="/signup">Don't have an
              account? Sign Up</a></div>
          </div>
        </div><!---->
        <div _ngcontent-xwe-c3="" id="particles-js">
          <canvas class="particles-js-canvas-el" width="1215" height="408" style="width: 100%; height: 100%;"></canvas>
        </div>
      </ng-component><!---->
      <app-topup-dialog _ngcontent-xwe-c0="" _nghost-xwe-c1="">
        <div _ngcontent-xwe-c1="" aria-hidden="true" aria-labelledby="mySmallModalLabel" bsmodal="" class="modal fade"
             role="dialog" tabindex="-1">
          <div _ngcontent-xwe-c1="" class="modal-dialog">
            <div _ngcontent-xwe-c1="" class="modal-content">
              <div _ngcontent-xwe-c1="" class="modal-header"><!----><!---->
                <button _ngcontent-xwe-c1="" aria-label="Close" class="close pull-right" type="button"><span
                    _ngcontent-xwe-c1="" aria-hidden="true">×</span></button>
              </div>
              <div _ngcontent-xwe-c1="" class="modal-body"><!----><!----></div>
            </div>
          </div>
        </div>
      </app-topup-dialog>
    </div>
  </app-root>
</template>

<style scoped>

</style>