<template>
    <h3>{{ $t('partners.' + tier) }}</h3>
    <div :class="['partners-' + tier]">
        <div
            class="partner-logo"
            v-for="partner in partners"
            :key="partner.url"
        >
            <a :href="partner.url">
                <img
                    :src="'/media/partners/' + partner.logo"
                    :alt="partner.name"
                >
            </a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        tier: String(),
        partners: Array()
    }
});

</script>