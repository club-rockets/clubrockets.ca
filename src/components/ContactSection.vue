<template>
    <section id="contact">
        <div class="content">
            <h2>{{ $t('contact.title') }}</h2>
            <div class="social-container">
                <div class="social-network">
                    <a href="https://www.facebook.com/clubrockets/">
                        <img src="/media/contact/facebook.svg">
                    </a>
                </div>
                <div class="social-network">
                    <a href="https://www.instagram.com/clubrockets/">
                        <img src="/media/contact/insta.png">
                    </a>
                </div>
                <div class="social-network">
                    <a href="https://ca.linkedin.com/company/rockets">
                        <img src="/media/contact/linkedin.png">
                    </a>
                </div>
                <div class="social-network">
                    <a href="https://www.youtube.com/channel/UChCSLkzgBhRTVGqWTRvXS3A">
                        <img src="/media/contact/youtube.png">
                    </a>
                </div>
                <div class="social-network">
                    <a href="https://github.com/club-rockets/">
                        <img src="/media/contact/github.png">
                    </a>
                </div>
            </div>
            <div class="social-address">
                <a href="mailto:club.rockets@etsmtl.net">club.rockets@etsmtl.net</a>
                <br>
                <br>
                1100, rue Notre-Dame Ouest<br>
                (angle Peel, au sud)<br>
                Montréal (Québec) H3C 1K3<br>
                Local A-1764<br>
                <br>
                514 396-8800 Poste : 7361<br>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() { return {}; }
});
</script>