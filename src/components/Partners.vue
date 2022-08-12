<template>
    <section id="partners">
        <div class="content">
            <h2>{{ $t('partners.title') }}</h2>
            <h3>{{ $t('partners.commanders') }}</h3>
            <div class="partners-commandant">
                <div class="partner-logo" v-for="partner in partners.commandants">
                    <a :href="partner.url">
                        <img :src="'/media/partners/' + partner.logo" :alt="partner.name">
                    </a>
                </div>
            </div>
            <h3>{{ $t('partners.pilots') }}</h3>
            <div class="partners-pilote">
                <div class="partner-logo" v-for="partner in partners.pilotes">
                    <a :href="partner.url">
                        <img :src="'/media/partners/' + partner.logo" :alt="partner.name">
                    </a>
                </div>
            </div>
            <h3>{{ $t('partners.specialists') }}</h3>
            <div class="partners-specialiste">
                <div class="partner-logo" v-for="partner in partners.specialistes">
                    <a :href="partner.url">
                        <img :src="'/media/partners/' + partner.logo" :alt="partner.name">
                    </a>
                </div>
            </div>
            <h3>{{ $t('partners.engineers') }}</h3>
            <div class="partners-ingenieur">
                <div class="partner-logo" v-for="partner in partners.ingenieurs">
                    <a :href="partner.url">
                        <img :src="'/media/partners/' + partner.logo" :alt="partner.name">
                    </a>
                </div>
            </div>
            <h3>{{ $t('partners.astronauts') }}</h3>
            <div class="partners-astronaute">
                <div class="partner-logo" v-for="partner in partners.astronautes">
                    <a :href="partner.url">
                        <img :src="'/media/partners/' + partner.logo" :alt="partner.name">
                    </a>
                </div>
            </div>
            <h3>{{ $t('partners.experts') }}</h3>
            <div class="partners-expert">
                <div class="partner-logo" v-for="partner in partners.experts">
                    <a :href="partner.url">
                        <img :src="'/media/partners/' + partner.logo" :alt="partner.name">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import PartnersData from '../data/partners'

export default defineComponent({
    data() {
        return {
            partners: PartnersData
        }
    }
});
</script>