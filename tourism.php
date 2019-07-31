<?php get_header(); ?>

 <main  style="padding-bottom: 0px;">

<div id="carousel-194633415" class="jumbotron carousel slide" data-ride="carousel" style="margin-bottom: 0;">
    <div class="carousel-inner" role="listbox">
                <div class="item active" style="background-image: url('<?php bloginfo('stylesheet_directory')?>/assets/images/uploads/Tourism_banner.png'); width: 100%; height: 400px;" slide-number="0"></div>
            </div>
    </div><!-- <link rel="stylesheet" href="/assets/css/styles-tourism.css"> -->
<link rel="stylesheet" href="../assets/css/select2/select2.min.css">
<style type="text/css">
.form-check-input:checked + .form-check-label {
    font-weight: 600;
    color: #df8468;
}
</style>

<div class="container" id="pariwisata-container">

    <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
            
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-home fa-1x"></i> Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Tourism</li>
        </ol>
    </nav>
    <!-- end breadcrumb -->
    <div class="content-title">
        <h1>Tourism</h1>
        <hr>        
    </div>
    <div class="tourism-content">
        <div class="col-md-3 sidebar">
            <div class="input-group stylish-input-group">
                <input type="text" class="form-control search"  placeholder="Search">
                <span class="input-group-addon">
                    <button type="submit">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>  
                </span>
            </div>
            <div class="form-group">
                <input type="hidden" name="bahasa" id="bahasa" value="Select Region">
                <select class="form-control select2" id="regional" placeholder="Regional"> 
                    <option></option>
                                                <option value="1">Surakarta </option>
                                                        <option value="2">Tegal </option>
                                                        <option value="3">Pekalongan </option>
                                                        <option value="4">Purbalingga Regency</option>
                                                        <option value="5">Kudus Regency</option>
                                                        <option value="6">Demak Regency</option>
                                                        <option value="7">Pemalang Regency</option>
                                                        <option value="8">Karanganyar Regency</option>
                                                        <option value="9">Semarang Regency</option>
                                                        <option value="10">Sragen Regency</option>
                                                        <option value="11">Wonogiri Regency</option>
                                                        <option value="12">Klaten Regency</option>
                                                        <option value="13">Magelang Regency</option>
                                                        <option value="14">Purworejo Regency</option>
                                                        <option value="15">Tegal Regency</option>
                                                        <option value="16">Kendal Regency</option>
                                                        <option value="17">Cilacap Regency</option>
                                                        <option value="18">Sukoharjo Regency</option>
                                                        <option value="19">Wonosobo Regency</option>
                                                        <option value="20">Banjarnegara Regency</option>
                                                        <option value="21">Magelang </option>
                                                        <option value="22">Temanggung Regency</option>
                                                        <option value="23">Grobogan Regency</option>
                                                        <option value="24">Batang Regency</option>
                                                        <option value="25">Kebumen Regency</option>
                                                        <option value="29">Brebes Regency</option>
                                                        <option value="30">Jepara Regency</option>
                                                        <option value="31">Pekalongan Regency</option>
                                                        <option value="32">Semarang </option>
                                                        <option value="33">Banyumas Regency</option>
                                                        <option value="34">Pati Regency</option>
                                                        <option value="35">Rembang Regency</option>
                                                        <option value="36">Boyolali Regency</option>
                                                        <option value="37">Salatiga </option>
                                                        <option value="38">Blora Regency</option>
                                            </select>
            </div>
            
            <div class="sidebar-category">
                <div class="sidebar-head">
                    <h3>Category</h3>
                </div>
                <div class="sidebar-body" id="sidebar-tourism">
                
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="check_term" value="18">    
                    <label class="form-check-label">                            
                        Nature Tourism                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="check_term" value="19">    
                    <label class="form-check-label">                            
                        Culture Tourism                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="check_term" value="20">    
                    <label class="form-check-label">                            
                        Artificial Tourism                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="check_term" value="21">    
                    <label class="form-check-label">                            
                        Others                    </label>
                </div>
                </div>
            </div>
        </div>

        <div class="col-md-9" id="content_pariwisata">
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-kopeng.jpg ">
            <div class="card-body">
                <h5 class="card-title">Kopeng Tourist Park</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-telaga-warna-dieng.jpg ">
            <div class="card-body">
                <h5 class="card-title">Dieng multi-color lake</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-vihara-buddhagaya-watugong.jpg ">
            <div class="card-body">
                <h5 class="card-title">Buddhagaya Watugong Monastery</h5>
            </div>
        </a>
    </div>
</div>

<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/2-jepara-ourland-park.jpg ">
            <div class="card-body">
                <h5 class="card-title">Jepara Ourland Park</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-museum-purbakala-sangiran.jpg ">
            <div class="card-body">
                <h5 class="card-title">Sangiran Archeological Museum</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-benteng-portugis.jpg ">
            <div class="card-body">
                <h5 class="card-title">The Portuguese Fortress</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/7-kota-lama-semarang-contemporary-art-gallery.jpg ">
            <div class="card-body">
                <h5 class="card-title">Old City &amp; Blenduk Church</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-candi-borobudur.jpg ">
            <div class="card-body">
                <h5 class="card-title">Borobudur Temple</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/2-keraton-kasunanan-hadiningrat-solo.jpg ">
            <div class="card-body">
                <h5 class="card-title">Surakarta Hadiningrat Royal Palace</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
        <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-sam-poo-kong.jpg ">
        <div class="card-body">
            <h5 class="card-title">Sam Poo Kong Temple</h5>
        </div>
    </a>
</div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/2-museum-kereta-api-ambarawa.jpg ">
            <div class="card-body">
                <h5 class="card-title">Ambarawa Railway Museum</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/2-dieng-culture-festival.jpg ">
            <div class="card-body">
                <h5 class="card-title">Dieng Culture Festival </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-baturraden.jpg ">
            <div class="card-body">
                <h5 class="card-title">Baturaden</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/2-taman-nasional-karimun-jawa.jpg ">
            <div class="card-body">
                <h5 class="card-title">Karimunjawa</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-bukit-sikunir.jpg ">
            <div class="card-body">
                <h5 class="card-title">Sikunir Hill</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-ibc.jpg ">
            <div class="card-body">
                <h5 class="card-title">International Batik Center (IBC) </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-pantai-kartini.jpg ">
            <div class="card-body">
                <h5 class="card-title">Kartini Beach </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-pasar-papringan.jpg ">
            <div class="card-body">
                <h5 class="card-title">Pasar Papringan </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-eling-bening-semarang.jpg ">
            <div class="card-body">
                <h5 class="card-title">Eling Bening </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-festival-kota-lama.jpg ">
            <div class="card-body">
                <h5 class="card-title">Festival Kota Lama </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-loenpia-jazz.jpg ">
            <div class="card-body">
                <h5 class="card-title">Loenpia Jazz </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/2-kawah-sikidang.jpg ">
            <div class="card-body">
                <h5 class="card-title">Sikidang Crater </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-simpang-lima.jpg ">
            <div class="card-body">
                <h5 class="card-title">Simpang Lima </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-batang-dolphins-center.jpg ">
            <div class="card-body">
                <h5 class="card-title">Batang Dolphins Center </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-masjid-agung-jawa-tengah.jpg ">
            <div class="card-body">
                <h5 class="card-title">Masjid Agung Jawa Tengah </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-grojogan-sewu-tawangmangu.jpg ">
            <div class="card-body">
                <h5 class="card-title">Grojogan Sewu</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-pantai-marina.jpg ">
            <div class="card-body">
                <h5 class="card-title">Marina Beach</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-pulau-panjang.jpg ">
            <div class="card-body">
                <h5 class="card-title">Panjang Island</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-candi-dieng.jpg ">
            <div class="card-body">
                <h5 class="card-title">Dieng Temple</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-ketep-pass.jpg ">
            <div class="card-body">
                <h5 class="card-title">Ketep Pass </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-posong.jpg ">
            <div class="card-body">
                <h5 class="card-title">Posong </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-pantai-nampu.jpg ">
            <div class="card-body">
                <h5 class="card-title">Pantai Nampu </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-kampung-batik-laweyan-solo.jpg ">
            <div class="card-body">
                <h5 class="card-title">Kampoeng Batik Laweyan </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-masjid-menara-kudus.jpg ">
            <div class="card-body">
                <h5 class="card-title">Masjid Menara Kudus </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/2-argowisata-kebun-teh-pagilaran.jpg ">
            <div class="card-body">
                <h5 class="card-title">Kebun Teh Pagilaran</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-curug-sewu.jpg ">
            <div class="card-body">
                <h5 class="card-title">Curug Sewu </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-candi-gedong-songo.jpg ">
            <div class="card-body">
                <h5 class="card-title">Candi Gedong Songo </h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-upacara-waisak.jpg ">
            <div class="card-body">
                <h5 class="card-title">Waisak At Borobudur Tample</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/4-umbul-sidomukti.jpg ">
            <div class="card-body">
                <h5 class="card-title">Umbul Sidomukti</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-museum-ranggawarsita.jpg ">
            <div class="card-body">
                <h5 class="card-title">Ranggowarsito Museum</h5>
            </div>
        </a>
    </div>
</div>
<div class="col-md-3 col-xs-6 item-space">
    <div class="card-tourism">
        <a href="">
            <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/1-jateng-fair.jpg ">
            <div class="card-body">
                <h5 class="card-title">Jateng Fair </h5>
            </div></a>
        </div>
    </div>
    <div class="col-md-3 col-xs-6 item-space">
        <div class="card-tourism">
            <a href="">
                <img class="card-img-top item-card-img img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/tourism/3-bukit-cinta-semarang-rawa-pening.jpg ">
                <div class="card-body">
                    <h5 class="card-title">Bukit Cinta</h5>
                </div>
            </a>
        </div>
    </div>
</div>
</div>

</main>
<?php get_footer(); ?>