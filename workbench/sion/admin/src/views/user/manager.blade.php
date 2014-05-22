@extends('admin::examples.table')
@section("content")
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Utilisateurs</h1>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                Liste des utilisateurs
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover" data-type='data-table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Pseudo</th>
                                <th>E-mail</th>
                                <th>Cree le</th>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($users as $user)
                            <tr class="odd gradeX">
                                <td>{{{$user->id}}}</td>
                                <td>{{$user->pseudo}}</td>
                                <td>{{$user->email}}</td>
                                <td></td>
                                <td>
                                    {{link_to_action('UserController@edit' , 'Editer',array($user->id),array("class"=>"btn btn-success"))}}
                                    {{link_to_action('UserController@destroy' , 'Supprimer',array($user->id),array("class"=>"btn btn-danger"))}}
                                </td>
                            </tr>
                            @endforeach
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