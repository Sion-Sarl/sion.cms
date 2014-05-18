@if(Session::has('error'))
<div class="alert-danger alert">
    {{{Session::get('error')}}}
</div>
@endif