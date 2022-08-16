<template>
    <section id="about">
        <div class="content">
            <h2>{{ $t('about.title') }}</h2>
            <div v-html="$t('about.body')" />
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() { return {}; }
});
</script>