<!DOCTYPE html>
<html lang="en">

<head>
    @section("meta")
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <title>Starter Template for Bootstrap</title>
    @show
    
    @section("css")
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet" />

    <!-- Add custom CSS here -->
    <link href="css/simple-sidebar.css" rel="stylesheet" />
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" />
     <link href="css/clean-car.css" rel="stylesheet" />
    @show

</head>

<body>

    <div id="wrapper">
        @section("sidebar")
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"><a href="#"><img class="img-responsive logo" src="{{asset('img/logo.png')}}" /></a>
                </li>
                 @foreach(Config::get("navbar.menu") as $menu)
                        <li @if(Request::url() == $menu["link"]) class='active' @endif>
                             <a  href="{{{$menu["link"]}}}">{{{$menu["name"]}}}</a>
                        </li>
                 @endforeach
            </ul>
            <ul class="list-inline sidebar-footer-social">
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                </li>
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                </li>
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>
                </li>
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                </li>
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw  fa-pinterest"></i></a>
                </li>

            </ul>
            <div class="sidebar-footer">
                Copyright 2014 CleanCar Réalisé par sion.nc
            </div>
        </div>
        @show
        <!-- Page content -->
        <div id="page-content-wrapper">
            @section("content")
            <div class="content-header">
                <h1>
                    <a id="menu-toggle" href="#" class="btn btn-default"><i class="icon-reorder"></i></a>
                    Simple Sidebar
                </h1>
            </div>
            <!-- Keep all page content within the page-content inset div! -->
            <div class="page-content inset">
                <div class="row">
                    <div class="col-md-12">
                        <p class="lead">This simple sidebar template has a hint of JavaScript to make the template responsive. It also includes Font Awesome icon fonts.</p>
                    </div>
                    <div class="col-md-6">
                        <p class="well">The template still uses the default Bootstrap rows and columns.</p>
                    </div>
                    <div class="col-md-6">
                        <p class="well">But the full-width layout means that you wont be using containers.</p>
                    </div>
                    <div class="col-md-4">
                        <p class="well">Three Column Example</p>
                    </div>
                    <div class="col-md-4">
                        <p class="well">Three Column Example</p>
                    </div>
                    <div class="col-md-4">
                        <p class="well">You get the idea! Do whatever you want in the page content area!</p>
                    </div>
                </div>
            </div>
            @show
        </div>

    </div>
    @section("js")
    <!-- JavaScript -->
        <script src="{{asset('packages/sion/admin/components/require.js')}}"></script>
        <script>
            requirejs({
                        baseUrl:'packages/sion/admin/components'
            })
        </script>
        @if(Auth::is('admin'))
            <script>
                
                    require(["admin-js"],function(views){
                        new  views.AdminView();
                    });
            </script>
        @else
            <script>
                
                    require(["admin-js"],function(views){
                         $("#menu-toggle").click(function(e) {
                            e.preventDefault();
                            $("#wrapper").toggleClass("active");
                        });
                        new  views.UserView();
                    });
            </script>
        @endif
    @show
</body>

</html>
