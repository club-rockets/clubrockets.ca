<template>
    <div :id="'rocket-tab-' + data.id" class="rocket-tab-content rocket-left-focus">
        <div class="rocket-column rocket-left">
            <info-section v-for="section in leftSections" :key="section.id" :data="section" />
        </div>
        <div class="rocket-render">
            <img :src="'/media/rockets/' + data.id + '.png'" />
        </div>
        <div class="rocket-column rocket-right">
            <info-section v-for="section in rightSections" :key="section.id" :data="section" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import InfoSection from './InfoSection.vue'

export default defineComponent({
    props: {
        data: {}
    },
    components: {
        'info-section': InfoSection
    },
    computed: {
        leftSections: function() {
            return this.data.sections.filter(section => section.side == 'left');
        },
        rightSections: function() {
            return this.data.sections.filter(section => section.side == 'right');
        }
    }
});
</script>