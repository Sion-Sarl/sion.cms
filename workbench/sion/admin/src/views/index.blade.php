@extends('admin::layouts.master')

@section("css")
    @parent
    <!-- Page-Level Plugin CSS - Dashboard -->
    <link href="{{asset('packages/sion/admin/css/plugins/morris/morris-0.4.3.min.css')}}" rel="stylesheet"/>
    <link href="{{asset('packages/sion/admin/css/plugins/timeline/timeline.css')}}" rel="stylesheet"/>

@stop

@section("js")
    @parent
    <script>
        require(["admin-js"],function(AdminView){
           new AdminView();
            require(["{{asset('packages/sion/admin/js/plugins/morris/raphael-2.1.0.min.js')}}"],function(){
            require(["{{asset('packages/sion/admin/js/plugins/morris/morris.js')}}"],function(){
                    require(["{{asset('packages/sion/admin/js/demo/dashboard-demo.js')}}"]);
                });
            });
        });
    </script>
@stop