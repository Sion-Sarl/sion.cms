@extends('admin::examples.table')
@section("content")
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">@yield('title')</h1>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                @yield('subtitle')
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover" data-type='data-table'>
                        <thead>
                            @section("thead")
                          
                            @show
                        </thead>
                        <tbody> 
                            @section("tbody")
                                 
                                
                            @show
                        </tbody>
                    </table>
                </div>
                <!-- /.table-responsive -->
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
    </div>
    <!-- /.col-lg-12 -->
</div>

@overwrite