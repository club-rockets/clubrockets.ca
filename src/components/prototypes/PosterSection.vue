<template>
    <div :class="['rocket-info', 'rocket-' + data.side, 'rocket-' + data.id]">
        <h3>{{ maybeLocalized(data.title, $i18n.locale) }}</h3>
        <h4 v-if="'subtitle' in data">
            {{ maybeLocalized(data.subtitle, $i18n.locale) }}
        </h4>
        <table>
            <template
                v-for="[i, row] in data.rows.entries()"
                :key="i"
            >
                <tr class="rocket-info-keys">
                    <td
                        v-for="[j, subcolumn] in row.entries()"
                        :key="j"
                        :colspan="3 - row.length"
                    >
                        {{ maybeLocalized(subcolumn.key, $i18n.locale) }}
                    </td>
                </tr>
                <tr class="rocket-info-values">
                    <td
                        v-for="[j, subcolumn] in row.entries()"
                        v-html="styleValueUnits(maybeLocalized(subcolumn.value, $i18n.locale))"
                        :key="j"
                        :colspan="3 - row.length"
                    />
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        data: Object()
    },
    methods: {
        maybeLocalized(item, locale) {
            if (typeof item == 'object') {
                return item[locale];
            } else if (typeof item == 'string') {
                return item;
            } else {
                return '<error>';
            }
        },
        styleValueUnits(str) {
            return '<span>' + str.replaceAll('[', '<span class="unit">').replaceAll(']', '</span>') + '</span>';
        }
    }
});
</script>