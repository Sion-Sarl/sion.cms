@extends('admin::layouts.master')
@section("content")
            <div class="row">
                <div class="col-lg-12">
                        <h1 class="page-header">Upload</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Image Upload
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            {{Html::resizer(Sion\Admin\Models\Image::find(1))}}
                            
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
@stop