<template>
    <section id="prototypes">
        <div class="content">
            <h2>{{ $t('prototypes.title') }}</h2>
            <div class="rocket-tabs-links">
                <div v-for="data in prototypes" :id="'rocket-link-' + data.id" :data-target="data.id" v-on:click="onTabClick" class="rocket-tab-link">
                    <span class="latin">{{ data.name.fr }}</span>
                    <span class="alt">{{ data.name.iu }}</span>
                </div>
            </div>
        </div>
        <div class="rocket-tabs-container">
            <div class="content rocket-tabs-content">
                <poster v-for="data in prototypes" :key="data.id" :data="data" />
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

import Poster from './prototypes/Poster.vue'
import PrototypesData from '../data/prototypes'

export default defineComponent({
    components: {
        poster: Poster
    },
    data() {
        return {
            prototypes: PrototypesData
        }
    },
    mounted() {
        if (this.prototypes.length > 0) {
            document.getElementById('rocket-link-' + this.prototypes[this.prototypes.length - 1].id).classList.add('tab-active')
            document.getElementById('rocket-tab-' + this.prototypes[this.prototypes.length - 1].id).classList.add('tab-active')
        }
    },
    methods: {
        onTabClick: function(event) {
            var target = event.explicitOriginalTarget.parentElement.getAttribute('data-target')

            Array.prototype.forEach.call(
                document.getElementsByClassName('rocket-tab-link'),
                function (el) {
                    el.classList.remove('tab-active')
                    if (el.getAttribute('data-target') == target) {
                        el.classList.add('tab-active')
                    }
                }
            );

            Array.prototype.forEach.call(
                document.getElementsByClassName('rocket-tab-content'),
                function (el) {
                    el.classList.remove('tab-active')
                    if (el.id == 'rocket-tab-' + target) {
                        el.classList.add('tab-active')
                    }
                }
            );
        }
    }
});
</script>