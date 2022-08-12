<template>
    <div :class="['rocket-info', 'rocket-' + data.side, 'rocket-' + data.id]">
        <h3>{{ data.title[$i18n.locale] }}</h3>
        <h4 v-if="'subtitle' in data">{{ data.subtitle[$i18n.locale] }}</h4>
        <table>
            <template v-for="row in data.rows">
                <tr class="rocket-info-keys">
                    <td v-for="subcolumn in row" :colspan="3 - row.length">
                        <template v-if="subcolumn.key instanceof Object">
                            {{ subcolumn.key[$i18n.locale] }}
                        </template>
                        <template v-else>
                            {{ subcolumn.key }}
                        </template>
                    </td>
                </tr>
                <tr class="rocket-info-values">
                    <td v-for="subcolumn in row" :colspan="3 - row.length">
                        <template v-if="subcolumn.value instanceof Object">
                            {{ subcolumn.value[$i18n.locale] }}
                        </template>
                        <template v-else>
                            {{ subcolumn.value }}
                        </template>
                    </td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        data: {}
    }
});
</script>