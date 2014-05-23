<?php

return array(
    "menu" => array(
        array(
            "name" => "Charts",
            "filter" => "charts",
            "link" => "#",
            "icon" => "fa fa-bar-chart-o fa-fw",
            "sub_menu" => array(
                array(
                    "name" => "Flot Charts",
                    "link" => url("admin/example/charts/flot")
                ),
                array(
                    "name" => "Moris.js Charts",
                    "link" => url("admin/example/charts/morris")
                )
            )
        ),
        array(
            "name" => "Tables",
            "filter" => "table",
            "link" => url("admin/example/table"),
            "icon" => "fa fa-table fa-fw"
        ),
        array(
            "name" => "Upload",
            "filter" => "upload",
            "link" => url("admin/example/upload"),
            "icon" => "fa fa-upload fa-fw"
        ),
        /**
        array(
            "name" => "Forms",
            "link" => url("admin/example/form"),
            "icon" => "fa fa-edit fa-fw"
        ),
        array(
            "name" => "UI Elements",
            "link" => "#",
            "icon" => "fa fa-wrench fa-fw",
            "sub_menu" => array(
                array(
                    "name" => "Panels and wells",
                    "link" => "#"
                ),
                array(
                    "name" => "Buttons",
                    "link" => "#"
                ),
                array(
                    "name" => "Notifications",
                    "link" => "#"
                ),
                array(
                    "name" => "Typography",
                    "link" => "#"
                ),
                array(
                    "name" => "Grid",
                    "link" => "#"
                )
            )
        )**/
    )
);
