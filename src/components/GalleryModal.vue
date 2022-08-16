<template>
    <div
        id="gallery-modal-background"
        :style="style"
        @click="onClick"
    >
        <div id="gallery-modal-content">
            <div class="spinner">
                <div />
                <div />
                <div />
                <div />
            </div>
            <img :src="source">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        target: String(),
        showModalFn: { type: Function, default: function() { } }
    },
    computed: {
        source: function() {
            return this.target ? '/media/gallery/hires/' + this.target + '.jpg' : '';
        },
        style: function() {
            return this.target ? 'display: block' : 'display: none';
        }
    },
    methods: {
        onClick: function() {
            this.showModalFn(null);
        }
    }
});
</script>