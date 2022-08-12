<template>
    <section id="awards">
        <div class="content">
            <h2>{{ $t('awards.title') }}</h2>
            <div class="award-container">
                <div class="award-column award-column-left">
                    <template v-for="event in events.left">
                        <h3 v-html="event.name[$i18n.locale]" />
                        <span v-for="award in event.awards" class="award-name" v-html="award[$i18n.locale]"/>
                    </template>
                </div>
                <div class="award-column award-column-right">
                    <template v-for="event in events.right">
                        <h3 v-html="event.name[$i18n.locale]" />
                        <span v-for="award in event.awards" class="award-name" v-html="award[$i18n.locale]"/>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import AwardsData from '../data/awards'

export default defineComponent({
    data() {
        return {
            events: AwardsData
        }
    },
    methods: {
    }
});
</script>