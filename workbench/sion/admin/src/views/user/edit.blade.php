@extends("admin::layouts.master")


@section("content")
  
      <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Edit User</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Edit {{$model->pseudo}}
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6">
                                      {{Form::model($model,array('action' => array('UserController@update',$model->id),'method'=> 'PUT'))}}
                                        <div class="form-group">
                                            {{Form::label('email','Adresse Email')}}
                                            {{Form::email('email',null,array('class'=>'form-control'))}} 
                                            {{$errors->first('email')}}
                                        </div>
                                         <div class="form-group">
                                            {{Form::label('password','Mot de passe')}}
                                            {{Form::password('password',array('class'=>'form-control'))}}
                                            {{$errors->first('password')}}
                                        </div>
                                        <div class="form-group">
                                            {{Form::label('pseudo','Pseudonyme')}}
                                            {{Form::text('pseudo',null,array('class'=>'form-control'))}}
                                            {{$errors->first('pseudo')}}
                                        </div>
                                        {{Form::submit('Valider',array('class'=>'btn btn-default'))}}
                                      {{Form::close()}}
                                    </form>
                                </div>
                                <!-- /.col-lg-6 (nested) -->
                            </div>
                            
                            <!-- /.row (nested) -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>

@overwrite