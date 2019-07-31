<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="<<?php bloginfo('stylesheet_directory')?>/assets/images/favicon.png">

        <title><?php is_front_page() ? bloginfo('decription'): wp_title(); ?></title>
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans" />
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:600' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:800' rel='stylesheet' type='text/css'>
        <link href="<?php bloginfo('template_url');?>/css/bootstrap.css" rel="stylesheet">
        <link href="<?php bloginfo('stylesheet_url');?>"  rel="stylesheet">
        <?php wp_head(); ?>
    </head>

    <body>
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container-top">
                <div class="navbar-header">

                    <div class="burger-top-container">
                        <a class="burger-top collapsed" data-toggle="collapse" data-target="#navbar-right" aria-expanded="false" aria-controls="navbar">
                            <ul>
                                <li><h4>MENU</h4></li>
                            </ul>
                        </a>
                    </div>
                    <a class="navbar-brand" href="home.html"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/logo.png" height="100%"></a>
                </div>

                  <div id="navbar-right" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="index1.php<?php echo $a;?>" class="active">Home</a></li>
                        <li><a href="#" class=""><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Trade</a></li>
                        <li><a href="tourism.php" class=""><div class="tourism_white"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/asset_white_tourism.png">&nbsp;&nbsp;Tourism</div><div class="tourism_big"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/pariwisata.png">&nbsp;&nbsp;Tourism</div></a></li>
                        <li><a href="#" class=""><i class="fa fa-handshake-o"></i>&nbsp;&nbsp;Investment</a></li>
                        <li><a href="#" class="">&nbsp;&nbsp;About Us</a>
                        <li id='contact-us-burger'><a href="home/contact_us" class="">&nbsp;&nbsp;Contact Us</a></li>
                        <li><a href="#" class="">&nbsp;&nbsp;FAQ</a>
                        <li id='contact-us-nav'><a href="home/contact_us" class=""><i class="fa fa-phone"></i></a></li>
                        <li><a id="cari" class="cari" href="#"><i class="fa fa-search"></i></a>
                          <form class="navbar-form cara" role="search" action="#" method="POST">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" name="keyword">
                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                            </form><div class="search-box" id="search_pc">
                            <form role="search" method="POST" class="searchform" action="#">
                                <input type="search" class="search-field" placeholder="Search …" value="" name="keyword">
                                <button type="submit" class="search-submit btn search-btn"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        </li>
                        <li class="dropdown"><a class="dropdown-toggle btn ajax" data-toggle="dropdown" href="#">EN <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a class="btn ajax" method="GET" action="#" needrefresh="true" href="#">IN</a></li>
                                </ul>
                        </li>

                        <li class="btn-mini">
                            <div>
                                <button method="GET" action="#" needrefresh="true" class="btn btn-default btn-transparent min-margin ">Indonesian</button>
                                <button method="GET" action="#" needrefresh="true" class="btn btn-default btn-transparent active">English</button>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
