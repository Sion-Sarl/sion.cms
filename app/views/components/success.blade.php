@if(Session::has('success'))
<div class="alert-danger alert">
    {{{Session::get('success')}}}
</div>
@endif