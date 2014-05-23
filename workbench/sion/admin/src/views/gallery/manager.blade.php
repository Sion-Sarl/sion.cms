@extends('admin::layouts.datatable')
@section("content")
    @section("title",ucfirst(Lang::choice('admin::galleries.galleries',2)))
    @section("subtitle",ucfirst(trans('admin::galleries.index.title')))
    @section("thead")
            <th>Id</th>
            <th>{{ucfirst(trans("admin::admin.nom"))}}</th>
            <th>{{ucfirst(trans("admin::admin.action"))}}</th>
    @overwrite
    @section("tbody")
        @foreach($galleries as $gallerie)
            <tr class="odd gradeX">
                <td>{{{$gallerie->id}}}</td>
                <td>{{$gallerie->nom}}</td>
            </tr> 
        @endforeach
    @overwrite
@overwrite