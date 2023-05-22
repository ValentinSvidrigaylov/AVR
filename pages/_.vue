<template lang="pug">
<article>
    <h2 class="text-center">Страница не найдена!</h2>
    <div class="p-3">
        <p>Данная страница не найдена.</p>
        <NuxtLink :to="{path: '/'}" class="nav-link" title="На главную">На главную</NuxtLink>
    </div>    
</article>
</template>
<script>
export default {
    head() {
    return {
        title: 'Страница не найдена'
    };
    },
};
</script>

import Vue from 'vue'

export default Vue.extend({
    name: 'NotFoundPage'
})