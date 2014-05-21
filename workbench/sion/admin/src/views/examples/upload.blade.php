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
                            <input data-size='{{@Sion\Admin\Models\Image::find(1)->size}}' data-name='{{basename(@Sion\Admin\Models\Image::find(1)->path)}}' data-file='{{asset(@Sion\Admin\Models\Image::find(1)->path)}}' data-height='200' data-width='200' type="image" data-ration='1:1' data-type='picture-resizer' data-url='{{action("ImageController@handleUpload")}}' name="file" />
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
@stop
@section("js")
    @parent
    <script>
        require(["admin-js"],function(AdminView){
            new AdminView();
           
        });
    </script>
@stop