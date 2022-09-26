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
                    <li>
                        <a
                            href="https://www.jedonneenligne.org/fdets/CSC/"
                            target="_blank"
                        >
                            {{ $t('nav.donation') }}
                        </a>
                    </li>
                    <li><span class="inset"> · </span></li>
                    <li v-if="$i18n.locale == 'fr'">
                        <a @click="$i18n.locale = 'en'">English</a>
                    </li>
                    <li v-if="$i18n.locale == 'en'">
                        <a @click="$i18n.locale = 'fr'">Français</a>
                    </li>
                </ul>
            </div>
            <div id="progress" />
        </header>
        <main
            @scroll="onScroll"
            id="main"
        >
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
                    <about-section />
                    <gallery-section :show-modal-fn="this.showGalleryModal" />
                </div>
                <div
                    id="first"
                    class="parallax-spacer"
                >
                    <div class="parallax-spacer-overlay" />
                </div>
                <div class="content-container">
                    <prototypes-section />
                    <awards-section />
                </div>
                <div
                    id="second"
                    class="parallax-spacer"
                >
                    <div class="parallax-spacer-overlay" />
                </div>
                <div class="content-container">
                    <partners-section />
                    <contact-section />
                </div>

                <footer>
                    <div class="content">
                        <p class="footer-copyright">
                            © RockÉTS 2022
                        </p>
                        <p class="footer-love">
                            Fait à Montréal avec ♥
                        </p>
                    </div>
                </footer>
            </div>
        </main>
        <gallery-modal
            :target="gallery_modal_target"
            :show-modal-fn="this.showGalleryModal"
        />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import AboutSection from './components/AboutSection.vue';
import AwardsSection from './components/AwardsSection.vue';
import ContactSection from './components/ContactSection.vue';
import GallerySection from './components/GallerySection.vue';
import GalleryModal from './components/GalleryModal.vue';
import PartnersSection from './components/PartnersSection.vue';
import PrototypesSection from './components/PrototypesSection.vue';

export default defineComponent({
    components: {
        AboutSection,
        AwardsSection,
        ContactSection,
        GallerySection,
        GalleryModal,
        PartnersSection,
        PrototypesSection,
    },
    data() {
        return {
            gallery_modal_target: null
        };
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
        },
        showGalleryModal: function (image) {
            this.gallery_modal_target = image;
        }
    },
    setup() {
        useI18n();
    }
});
</script>