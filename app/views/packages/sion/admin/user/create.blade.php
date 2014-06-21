@extends("admin::layouts.form")

@section('title','Utilisateur');

@section("form")
    <div class="panel-body">
        <div class="row">
            <div class="col-lg-6">
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
            </div>
            <!-- /.col-lg-6 (nested) -->
        </div>
        <!-- /.row (nested) -->
    </div>
    <!-- /.panel-body -->
@overwrite