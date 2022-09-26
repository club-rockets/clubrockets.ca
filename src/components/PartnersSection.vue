<template>
    <section id="partners">
        <div class="content">
            <h2>{{ $t('partners.title') }}</h2>
            <template
                v-for="tier in ['commanders', 'pilots', 'specialists', 'engineers', 'astronauts', 'experts']"
                :key="tier"
            >
                <partner-tier
                    :partners="partnersForTiers(tier)"
                    :tier="tier"
                />
            </template>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import PartnersData from '../data/partners';
import PartnerTier from './PartnerTier.vue';

export default defineComponent({
    components: {
        PartnerTier
    },
    data() {
        return {
            partners: PartnersData
        };
    },
    methods: {
        partnersForTiers: function (tier) {
            return this.partners.filter((p) => p.tier == tier);
        }
    }
});
</script>