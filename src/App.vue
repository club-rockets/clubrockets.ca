<template>
    <div>
        <header id="header">
            <div id="navigation">
                <ul>
                    <li><a href="#home">{{ $t('nav.home') }}</a></li>
                    <li><span class="inset"> · </span></li>
                    <li><a href="#about">{{ $t('nav.about') }}</a></li>
                    <li><span class="inset"> · </span></li>
                    <li><a href="#gallery">{{ $t('nav.gallery') }}</a></li>
                    <li><span class="inset"> · </span></li>
                    <li><a href="#prototypes">{{ $t('nav.prototypes') }}</a></li>
                    <li><span class="inset"> · </span></li>
                    <li><a href="#awards">{{ $t('nav.awards') }}</a></li>
                    <li><span class="inset"> · </span></li>
                    <li><a href="#partners">{{ $t('nav.partners') }}</a></li>
                    <li><span class="inset"> · </span></li>
                    <li><a href="#contact">{{ $t('nav.contact') }}</a></li>
                    <li><span class="inset"> · </span></li>
                    <li><a href="https://www.jedonneenligne.org/fdets/CSC/" target="_blank">{{ $t('nav.donation') }}</a>
                    </li>
                    <li><span class="inset"> · </span></li>
                    <li>
                        <a v-if="$i18n.locale == 'fr'" v-on:click="$i18n.locale = 'en'">English</a>
                    </li>
                    <li>
                        <a v-if="$i18n.locale == 'en'" v-on:click="$i18n.locale = 'fr'">Français</a>
                    </li>
                </ul>
            </div>
            <div id="progress" />
        </header>
        <video class="visible-desktop" id="hero-vid" poster="/media/hero/frame.jpg" autoplay loop muted>
            <source type="video/webm" src="/media/hero/ookpik.webm" />
        </video>
        <main v-on:scroll="onScroll" id="main">
            <div id="home">
                <!--Dummy div to force scrolling to the top-->
            </div>
            <div class="parallax-layer parallax-back">
                <section id="hero">
                    <div id="overlay">
                        <div id="title">
                            <h1>ROCK<span class="logo-red">ÉTS</span></h1>
                        </div>
                    </div>
                </section>
            </div>
            <div class="parallax-layer parallax-base">
                <div id="hero-spacer" />
                <div class="content-container">
                    <about />
                    <gallery />
                </div>
                <div id="first" class="parallax-spacer">
                    <div class="parallax-spacer-overlay" />
                </div>
                <div class="content-container">
                    <prototypes />
                    <awards />
                </div>
                <div id="second" class="parallax-spacer">
                    <div class="parallax-spacer-overlay" />
                </div>
                <div class="content-container">
                    <partners />
                    <contact />
                </div>

                <footer>
                    <div class="content">
                        <p class="footer-copyright">© RockÉTS 2022</p>
                        <p class="footer-love">Fait à Montréal avec ♥</p>
                    </div>
                </footer>
            </div>
        </main>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from "vue-i18n";

import About from './components/About.vue'
import Awards from './components/Awards.vue'
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'
import Partners from './components/Partners.vue'
import Prototypes from './components/Prototypes.vue'

export default defineComponent({
    components: {
        about: About,
        awards: Awards,
        contact: Contact,
        gallery: Gallery,
        partners: Partners,
        prototypes: Prototypes,
    },
    methods: {
        onScroll: function () {
            var height = window.innerHeight;
            var main = document.getElementById('main');
            var header = document.getElementById('header');
            var progress = document.getElementById('progress');

            if (main.scrollTop > height - header.offsetHeight) {
                header.classList.add('scrolled');
            }
            else {
                header.classList.remove('scrolled');
            }
            var progress_percent = 100 * (main.scrollTop / (main.scrollHeight - height));
            progress.style.width = progress_percent + '%';
        }
    },
    setup() {
        const i18n = useI18n();
    }
})
</script>