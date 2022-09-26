<template>
    <section id="awards">
        <div class="content">
            <h2>{{ $t('awards.title') }}</h2>
            <div class="award-container">
                <div class="award-column award-column-left">
                    <template
                        v-for="[i, event] in events.left.entries()"
                        :key="i"
                    >
                        <h3 v-html="styleAwardString(event.name[$i18n.locale])" />
                        <span
                            v-for="[j, award] in event.awards.entries()"
                            v-html="styleAwardString(award[$i18n.locale])"
                            :key="j"
                            class="award-name"
                        />
                    </template>
                </div>
                <div class="award-column award-column-right">
                    <template
                        v-for="[i, event] in events.right.entries()"
                        :key="i"
                    >
                        <h3 v-html="styleAwardString(event.name[$i18n.locale])" />
                        <span
                            v-for="[j, award] in event.awards.entries()"
                            v-html="styleAwardString(award[$i18n.locale])"
                            :key="j"
                            class="award-name"
                        />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import AwardsData from '../data/awards';

export default defineComponent({
    data() {
        return {
            events: AwardsData
        };
    },
    methods: {
        styleAwardString: function (str) {
            return str.replaceAll('{', '<em>').replaceAll('}', '</em').replaceAll('[', '<sup>').replaceAll(']', '</sup>');
        }
    }
});
</script>