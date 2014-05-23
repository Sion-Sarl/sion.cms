<?php

return array(
    "uri"=>"utilisateur",
    "menu" => array(
        array(
            "name" => "Utilisateur",
            "filter" => "utilisateur",
            "link" => function(){
                return action("UserController@index");
            },
            "icon" => "fa fa-user fa-fw"
        )
    )
);
