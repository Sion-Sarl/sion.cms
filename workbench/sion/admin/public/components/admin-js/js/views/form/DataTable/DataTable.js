define(['require','jquery-ui',"css!https://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css","css!https://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css","https://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min.js"],function(require) {"use strict";
	return Backbone.View.extend({
		defaults: {
		  pagin: true
		},
        data:{
            "bPaginate": "pagin",
            "aLengthMenu": "alengthmenu",
            "aoColumns": "aocolumns",
            "aaSorting": "aasorting",
            "iDisplayLength": "idisplaylength"
        },
		initialize : function() {
			this.options = _.extend({}, this.defaults, this.options);
            $.fn.dataTableExt.afnSortData['dom-checkbox'] = function  ( oSettings, iColumn )
            {
            	return $.map( oSettings.oApi._fnGetTrNodes(oSettings), function (tr, i) {
            		return $('td:eq('+iColumn+') input', tr).prop('checked') ? '1' : '0';
            	} );
            }
			this.render();
		},
		render : function() {
		    var options = {
                "bPaginate": this.options.pagin,
                "oLanguage" : {
                    "sInfo"  : "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
                    "sInfoEmpty" : "Pas d'entrées à afficher" ,
                    "sInfoFiltered": " - ( trier à partir de _MAX_ entrées )",
                    "sEmptyTable": "Pas de données disponibles pour ce tableau",
                    "sLengthMenu": "Afficher par : _MENU_",
                    "sSearch": "Rechercher:",
                    "sZeroRecords": "Il ya pas de résultat pour votre recherche",
                     "oPaginate": {
                        "sNext": "Suivant",
                        "sPrevious" : "Précedent"
                    }
                },
                 "aLengthMenu": [
                    [10,25,50, -1],
                    [10,25,50, "Tous"]
                ],
                "iDisplayLength": "-1"
            };
            for(var index in this.data)
            {
                var data = this.data[index];
                if($(this.el).data(data) != undefined )
                {
                    options[index] = $(this.el).data(data);
                }
                
            }
            var self = this;
            self.table = $(this.el).dataTable(options);
            $("tfoot input").keyup( function () {
        		/* Filter on the column (the index) of this element */
        		self.table.fnFilter( $(this).val(),$(this).parent().index());
        	} );
            $(this.el).trigger("init",[self.table]);
		}
	});
});
