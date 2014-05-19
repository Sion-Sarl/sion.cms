@extends('admin::layouts.master')
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