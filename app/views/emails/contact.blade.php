<head>
<title>{{Config::get('contact.site.name')}}</title>

<style type="text/css">

body{width:100%;margin:0px;padding:0px;background:rgb(111, 44, 0);text-align:center;}
html{width: 100%; }
img {border:0px;text-decoration:none;display:block; outline:none;}
a,a:hover{color:#F58220;text-decoration:none;}.ReadMsgBody{width: 100%; background-color: #ffffff;}.ExternalClass{width: 100%; background-color: #ffffff;}
table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }  

.main-bg{ background:rgb(111, 44, 0);}
.footer-border{border-top: solid 1px #F58220; }


@media only screen and (max-width:640px)

{
	body{width:auto!important;}
	.main{width:440px !important;margin:0px; padding:0px;}
	.two-column{width:440px !important;margin:0px; padding:0px;}
	.mobileCenter{width: 440px !important; text-align: center!important;}
	.two-left{width: 376px !important; text-align: center!important;}
	.two-right{width: 376px !important; text-align: left!important;}
	.center{width: 366px !important; text-align: left!important;}
	.date{font:Bold 14px Arial, Helvetica, sans-serif; color:#F58220;}
	
	.res-text{font:Bold 18px Arial, Helvetica, sans-serif; color:#403f3f;}
	
}

@media only screen and (max-width:479px)
{
	body{width:auto!important;}
	.main{width:280px !important;margin:0px; padding:0px;}
	.two-column{width:280px !important;margin:0px; padding:0px;}
	.mobileCenter{width: 280px !important; text-align: center!important;}
	.two-left{width: 216px !important; text-align: center!important;}
	.two-right{width: 216px !important; text-align: left!important;}
	.center{width: 206px !important; text-align: left!important;}
	.date{font:Bold 12px Arial, Helvetica, sans-serif; color:#F58220;}
	.res-text{font:Bold 18px Arial, Helvetica, sans-serif; color:#403f3f;}
	
}

</style>

</head>

<body style="background:rgb(111, 44, 0);"> 
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="main-bg">
        <tr>
            <td align="center" valign="top" style="padding:22px 0px 40px 0px;">
                
                <!-- TABLE 1 -->
                <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
                    <td align="left" valign="top">
                        <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
                          <tr>
                            <td align="center" valign="middle" bgcolor="#ffffff" style="background:#ffffff; padding:16px 25px 20px 25px;">
                                <table border="0" align="left" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td align="left" valign="top" style="padding-top:5px;"><img src="" width="215" alt="" /></td>
                                  </tr>
                                </table>
                    
                                <table  border="0" align="right" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td align="right" valign="top" style="font:Bold 18px Arial, Helvetica, sans-serif; color:#1d1a1a;"><span style="font:Bold 12px Arial, Helvetica, sans-serif; color:#F58220;">Alerte email</span> <br />Demande de contact via le site internet de {{Config::get('contact.site.name')}}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                        </table>
                    </td>
               </table>           
               <!-- TABLE 2 -->         
                        
                <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
                  <tr>
                    <td align="center" valign="top" bgcolor="#ffffff" style="background:#ffffff; padding: 10px 37px 30px 37px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left" valign="top" style="font:Normal 12px Arial, Helvetica, sans-serif; color:#403f3f; line-height:18px; padding: 5px 0px 5px 0px;">
                        <strong style="font-size: 16px;">Nom : </strong> {{$name}}
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top" style="font:Normal 12px Arial, Helvetica, sans-serif; color:#403f3f; line-height:18px; padding: 5px 0px 5px 0px;">
                        <strong style="font-size: 16px;">Adresse email : </strong> {{$email}}
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top" style="font:Normal 12px Arial, Helvetica, sans-serif; color:#403f3f; line-height:18px; padding: 5px 0px 5px 0px;">
                        <strong style="font-size: 16px;">Téléphone : </strong> {{@$phone}}
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top" style="font:Normal 12px Arial, Helvetica, sans-serif; color:#403f3f; line-height:18px; padding: 5px 0px 5px 0px;">
                        <strong style="font-size: 16px;">Message : </strong><br /> {{@$text}}
                        </td>
                      </tr>
                    </table>
                    </td>
                  </tr>
                </table>
                <!-- TABLE 3 -->        
                        
                <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
                  <tr>
                    <td align="center" valign="top" class="footer-border" bgcolor="#1f1e1e" style=" background:#1f1e1e;border-top: solid 1px #F58220; padding:25px 32px 25px 32px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td align="center" valign="top" style="font:Normal 12px Arial, Helvetica, sans-serif; color:#ffffff;line-height:18px;">Vous venez de recevoir un email de contact grâce à votre site. <br />
                                  Si vous rencontrez des problèmes, merci de contacter l'entreprise <a href="mailto:contact@sion.nc">S.I.O.N</a><br />
                                </td>
                              </tr>
                          
                        </table>
                        <tr>
                            <td height="4" align="center" valign="top" class="footer-border" bgcolor="#F58220" style=" background:#F58220; border-top: solid 1px #F58220;"></td>
                          </tr>
                    </td>
                  </tr>
                </table>
                
                <!-- FIN -->  
                </td>
            </tr>
        </table>
    </body>
</html>
