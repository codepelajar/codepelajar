<h1>Push Notifikasi Material Design</h1>
<blockquote><p>Best Push Notification with Material Design Style For Website <a href="https://codepelajar.com" rel="nofollow">Demo</a></p></blockquote>
<a href="/codepelajar/codepelajar/blob/master/LICENSE"><img src="https://camo.githubusercontent.com/85e1dd5bc10efc714bde30575f2ba9720ef1d235/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6e6f726d616c697a652e6373732e7376673f7374796c653d666c61742d737175617265" alt="license" data-canonical-src="https://img.shields.io/npm/l/normalize.css.svg?style=flat-square" style="max-width:100%;"></a>
<h2>installation</h2>
<p>copy and apply the following css, in your theme file</p>
<pre><code>
/*!
=> CSS - Push Notification Material Design V1.0
=> Copyright: 2018 CodePelajar
=> Licensed under MIT | https://github.com/codepelajar/codepelajar/blob/master/LICENSE
*/
a.donasi-dong {
     background: #E91E63;
     margin-left: 5px;
     margin-top: 25px;
     display: inline-block;
     padding: 8px 15px;
     border-radius: 4px;
     float: right;
     color:#FFF;
     font-weight: 500;
}
 #infoPelajarjo {
     width: 100%;
     height: auto;
     overflow: hidden;
     background: #fff;
     position: fixed;
     padding: 25px;
     top: 15%;
     transition: all .3s ease-in-out;
     max-width: 450px;
     left: 35%;
     z-index: 99;
     transform:translate(0,-300px);
     border-radius: 5px;
     box-shadow: 0 9px 46px 8px rgba(0,0,0,.14), 0 11px 15px -7px rgba(0,0,0,.12), 0 24px 38px 3px rgba(0,0,0,.2);
}
 #infoPelajarjo a {
     text-decoration:none;
}
 a.pelajar-aktif {
     color: #e91e63;
     font-weight: 600;
}
 #infoPelajarjo span {
     display: block;
     padding: 15px 15px;
     pointer-events: none;
     text-align: left;
     float: left;
}
 #infoPelajarjo span h2 {
     font-size: 12px;
    /* Ukuran text */
     line-height: 21px;
     color: #222;
     */
     font-weight: normal;
     letter-spacing: 0px;
}
 .animated {
     -webkit-animation-duration: 1s;
     animation-duration: 1s;
     -webkit-animation-fill-mode: both;
     animation-fill-mode: both;
}
 @media (prefers-reduced-motion) {
     .animated {
         -webkit-animation: unset !important;
         animation: unset !important;
         -webkit-transition: none !important;
         transition: none !important;
    }
}
 @-webkit-keyframes fadeInDown {
     from {
         opacity: 0;
         -webkit-transform: translate3d(0, -100%, 0);
         transform: translate3d(0, -100%, 0);
    }
     to {
         opacity: 1;
         -webkit-transform: translate3d(0, 0, 0);
         transform: translate3d(0, 0, 0);
    }
}
 @keyframes fadeInDown {
     from {
         opacity: 0;
         -webkit-transform: translate3d(0, -100%, 0);
         transform: translate3d(0, -100%, 0);
    }
     to {
         opacity: 1;
         -webkit-transform: translate3d(0, 0, 0);
         transform: translate3d(0, 0, 0);
    }
}
 .fadeInDown {
     -webkit-animation-name: fadeInDown;
     animation-name: fadeInDown;
}
 @-webkit-keyframes fadeOutUp {
     from {
         opacity: 1;
    }
     to {
         opacity: 0;
         -webkit-transform: translate3d(0, -100%, 0);
         transform: translate3d(0, -100%, 0);
    }
}
 @keyframes fadeOutUp {
     from {
         opacity: 1;
    }
     to {
         opacity: 0;
         -webkit-transform: translate3d(0, -100%, 0);
         transform: translate3d(0, -100%, 0);
    }
}
 .fadeOutUp {
     -webkit-animation-name: fadeOutUp;
     animation-name: fadeOutUp;
}
 p.pesan-singkat {
     overflow: hidden;
     position: relative;
     top: 11px;
     font-family:roboto;
}
 .infoPelajarwrap-pelajar h2{
     position: absolute;
     top: 9px;
     margin: auto;
     padding: 2px;
     font-size: 18px;
     font-family: roboto;
     background: #fff;
}
 @media screen and (max-width: 768px){
     div#infoPelajarjo {
         left: 0;
    }
}
 .gelap {
     position:fixed;
     top:0;
     left:0;
     bottom:0;
     right:0;
     opacity:0;
     transition:.5s;
     background:rgba(0,0,0,0.5);
     z-index:-999;
}
 .gelap.active{
     opacity:1;
     background:rgba(0,0,0,0.5);
     z-index:98;
}
</code></pre>
<h4
<p>after that enter the following javascript code</p>
<pre>
/*!
=> Javascript - Push Notification Material Design V 1.0
=> Copyright: 2018 CodePelajar
=> Licensed under MIT | https://github.com/codepelajar/codepelajar/blob/master/LICENSE
*/

document.getElementById('infoPelajarjo').classList.add('fadeInDown')
document.getElementsByClassName('gelap')[0].classList.add('active')


setTimeout(function(){
 document.getElementById('infoPelajarjo').classList.add('fadeOutU')
 document.getElementById('infoPelajarjo').classList.remove('fadeInDown')
document.getElementsByClassName('gelap')[0].classList.remove('active')

},8000)

</pre>
<p>after all the code is installed, copy and apply the following HTML code, just below the <kbd>&lt;body&gt;</kbd> tag</p>
<pre>
&lt;div id='infoPelajarjo' class='animated'&gt;
   &lt;div class="infoPelajarwrap-pelajar"&gt;
      &lt;h2&gt;Notifications&lt;/h2&gt;
   &lt;/div&gt;
   &lt;p class="pesan-singkat"&gt;Halo Sobat Pelajar, Jangan lupa untuk klik Follow akun Sosial Media kita yaa dan Jangan Sampai ketinggalan update berita terbaru di &lt;a class="pelajar-aktif" href="https://jalanpelajar.com/"&gt;JalanPelajar.com&lt;/a&gt;&lt;/p&gt;
   &lt;a class="donasi-dong" href="#" title="Donasi Pengembang"&gt;Donasi&lt;/a&gt;
   &lt;a class="donasi-dong" href="#" title="Follow Instagram"&gt;&lt;i class="fa fa-instagram"&gt;&lt;/i&gt;&lt;/a&gt;
   &lt;a class="donasi-dong" href="#" title="Subscribe Youtube"&gt;&lt;i class="fa fa-youtube-square"&gt;&lt;/i&gt; &lt;/a&gt;
   &lt;a class="donasi-dong" href="#" title="Follow Fanspage"&gt;&lt;i class="fa fa-facebook"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;div class="gelap"/&gt;
</pre>
<h2>License</h2>
<p><b>Push Notifikasi Material Design</b> is licensed under the MIT License.</p>
