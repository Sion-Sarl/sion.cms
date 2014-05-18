@extends('admin::layouts.master')
@section("js")
    @parent
    <!-- Page-Level Plugin Scripts - Dashboard -->
    <script src="{{asset('packages/sion/admin/js/plugins/morris/raphael-2.1.0.min.js')}}"></script>
    <script src="{{asset('packages/sion/admin/js/plugins/morris/morris.js')}}"></script>
    <!-- Page-Level Demo Scripts - Dashboard - Use for reference -->
    <script src="{{asset('packages/sion/admin/js/demo/dashboard-demo.js')}}"></script>
@show
