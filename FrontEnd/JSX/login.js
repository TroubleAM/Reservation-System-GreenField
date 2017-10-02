angular.module('app')

.component('login',{
  template:`
  <div ng-controller="loginCtrl">
    <div class="container">
    <div class="well">
      <div class="page-header text-center">
        <h1><small>Please Login</small></h1>
      </div>
      <form role="form" class="form-login">

          <input type="text" ng-model="username" class="form-control" id="username" placeholder="User Name"><br>
            <input type="password" ng-model="password" id="password" class="form-control" placeholder="Password" required="required"> <br>
        <button type="submit" class="btn btn-info btn-block" ng-click="submit()">Submit</button>
      </form>
    </div>
  </div>
</div>`
})
