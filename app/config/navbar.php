<?php
return array(
    "menu" => array(
        array(
            "name" => strtoupper("Accueil"),
            "link" =>  url("/")
        ),
        array(
            "name" => strtoupper("Services"),
            "link" => url("service")
         ),
        array(
            "name" => strtoupper("Realisations"),
            "link" => url("porfolio"),
        ),
        array(
            "name" => strtoupper("Contacts"),
            "link" => url("contact")
        )
    )
        
);