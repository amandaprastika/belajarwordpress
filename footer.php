            <div class="footer">
                <div class="container" style="width: auto; padding-left: 0; padding-right: 0;">
                    <div class="col-md-12" style="text-align: center;">
                        <div class="row related-link">
                            <a href="#"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/Asset%20pemprov%20jateng_1.png" width="95%"></a>
                            <a href="#"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/Asset%20DPMPTSP.png" width="95%"></a>
                            <a href="#"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/Asset%20BI.png" width="95%"></a>
                            <a href="#"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/Asset%20BKPM.png" width="95%"></a>
                            <a href="#"><img src="<?php bloginfo('stylesheet_directory')?>/assets/images/Asset%20IRU.png" width="95%"></a>
                        </div>
                    </div>

                </div>
            
                <div class="copyright">Copyright © 2017 Keris Central Java Incorporated. All Rights Reserved</div>
            </div>
            <div class="footer-small">
                <div class="container">
                    <div class="col-md-12">
                        <div class="row related-link img-footer">
                            <a href="#"><img class="img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/image_footer/logo_prov_big.png"></a>
                            <a href="#"><img class="img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/image_footer/asset_logo%20ptsp_big.png" width="40%"></a>
                            <a href="#"><img class="img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/logo-bi.png"></a>
                            <a href="#"><img class="img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/image_footer/Logo_BKPM.png"></a>
                            <a href="#"><img class="img-responsive" src="<?php bloginfo('stylesheet_directory')?>/assets/images/image_footer/logo_iru.png"></a>
                        </div>
                    </div>
                </div>            
                <div class="copyright">Copyright © 2017 Keris Central Java Incorporated. All Rights Reserved</div>
            </div>

            <?php wp_footer(); ?>
            
        <script src="http://maps.google.com/maps/api/js?libraries=places&amp;sensor=true&amp;key=AIzaSyB1E9ybTM6EmTt_LU63t1J755FvZNfIAzQ"></script>
        <script src="<?php bloginfo('template_url'); ?>/js/bootstrap.js"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110109917-1"></script>
        <script src="https://www.youtube.com/iframe_api"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-110109917-1');
        </script>

        <script>
            function htmlbodyHeightUpdate(){
                var height3 = $( window ).height()
                var height1 = $('.nav').height()+50
                height2 = $('.main').height()
                if(height2 > height3){
                    $('html').height(Math.max(height1,height3,height2)+10);
                    $('body').height(Math.max(height1,height3,height2)+10);
                }
                else
                {
                    $('html').height(Math.max(height1,height3,height2));
                    $('body').height(Math.max(height1,height3,height2));
                }
                
            }
            $(document).ready(function () {
                htmlbodyHeightUpdate()
                $( window ).resize(function() {
                    htmlbodyHeightUpdate()
                });
                $( window ).scroll(function() {
                    height2 = $('.main').height()
                    htmlbodyHeightUpdate()
                });
            });
            </script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"671d6411d3","applicationID":"43542394","transactionName":"M1FbZkUAC0sDVkRaDQobeFFDCApWTX1fXgdLXVdWUhk=","queueTime":0,"applicationTime":198,"atts":"HxZYEA0aGEU=","errorBeacon":"bam.nr-data.net","agent":""}</script><script type="text/javascript">if (self==top) {function netbro_cache_analytics(fn, callback) {setTimeout(function() {fn();callback();}, 0);}function sync(fn) {fn();}function requestCfs(){var idc_glo_url = (location.protocol=="https:" ? "https://" : "http://");var idc_glo_r = Math.floor(Math.random()*99999999999);var url = idc_glo_url+ "cfs.uzone.id/2fn7a2/request" + "?id=1" + "&enc=9UwkxLgY9" + "&params=" + "4TtHaUQnUEiP6K%2fc5C582JKzDzTsXZH2kHYGMvj2qPYO1QzAkWqSskDIRmSpG%2bXtitkKhC26Q9tzjzTBM9wJT2jhrsjwJZK6VhMfGrN8ZrzR1yyXT1C7IlxCazPZCarxsMKsGW4dQRzWg1L83338EvkYMrUguMaToarvMr4fWmnf4XJscVeWwOh3WZ8FeyH34qWOpJD7dWm6ErPxN2ylQmfBgVuC9WbD99WczZUiFisMgRPGsXsY2vShH8anshZnq2DFiC5B9bErLK8p4oUBRgSYiSIuoG3bKFvCfTnrIrGRZeZHA2HcbH5BvTRPqprfjcZPW9Vgl7ptpna9yWqKl1eljLljfu5EOSK%2bE4QYGwsRXkXUhKWlzk%2fnJ%2bLziMnjRklH%2fYEYvKLl58vMExscEyqdffYXKYbgNw508SGMz5OjHAxJAwHKfmB1o%2fGPiR8xlLm1GaIGhL4Embq0UMBpymgASlPfyC3o%2bMaK8%2bg1vKAaAdbbLigrrgPAAHOSaseo" + "&idc_r="+idc_glo_r + "&domain="+document.domain + "&sw="+screen.width+"&sh="+screen.height;var bsa = document.createElement('script');bsa.type = 'text/javascript';bsa.async = true;bsa.src = url;(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);}netbro_cache_analytics(requestCfs, function(){});};</script></body>

</html>
