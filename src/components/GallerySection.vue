<template>
    <section id="gallery">
        <div class="content">
            <h2>{{ $t('gallery.title') }}</h2>
        </div>
        <div class="gallery-container">
            <div
                v-for="image in gallery"
                :key="image.id"
                :class="'gallery-image-container' + (image.wide ? ' double' : '')"
                @click="showModal(image.id)"
            >
                <div
                    class="gallery-image"
                    :style="'background-image: url(/media/gallery/' + image.id + '_thumb.webp)'"
                >
                    <div class="gallery-overlay">
                        <div class="gallery-overlay-text">
                            <span class="gallery-title">{{ image.title[$i18n.locale] }}</span>
                            <br>
                            <span class="gallery-desc">{{ image.event }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import GalleryData from '../data/gallery';

export default defineComponent({
    props: {
        showModalFn: { type: Function, default: function() { } }
    },
    data() {
        return {
            gallery: GalleryData.reverse()
        };
    },
    methods: {
        showModal: function (image) {
            this.showModalFn(image);
        }
    }
});
</script>