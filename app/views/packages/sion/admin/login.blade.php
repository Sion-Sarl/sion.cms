<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{trans("admin::login.title")}}</title>

    <!-- Core CSS - Include with every page -->
    <link href="{{asset('packages/sion/admin/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('packages/sion/admin/font-awesome/css/font-awesome.css')}}" rel="stylesheet">

    <!-- SB Admin CSS - Include with every page -->
    <link href="{{asset('packages/sion/admin/css/sb-admin.css')}}" rel="stylesheet">

</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{trans("admin::login.signin")}}</h3>
                    </div>
                    <div class="panel-body">
                        @if(Session::has('erreur'))
                            <div class="alert-danger alert">
                                {{trans("admin::login.".Session::get('erreur'))}}.
                            </div>
                        @endif
                        <form method="POST" role="form" action="{{action('AdminController@postLogin')}}">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="{{trans("admin::login.pseudo")}}" name="pseudo" type="text" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="{{trans("admin::login.password")}}" name="password" type="password" value="">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me">{{trans("admin::login.remember")}}
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <input type="submit" class="btn btn-lg btn-success btn-block" value="{{trans("admin::login.button")}}" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Core Scripts - Include with every page -->
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>

</html>
