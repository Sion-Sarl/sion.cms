@if(Session::has('success'))
<div class="alert-success alert">
    {{{Session::get('success')}}}
</div>
@endif