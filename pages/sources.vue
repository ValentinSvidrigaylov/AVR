<template lang="pug">
<article>
  <h2 class="text-center">Источники информации</h2>
  <div class="p-3">
    <ul v-for="source in sources" >
      <li><a :href="source.href">{{ source.name }}</a></li>
    </ul>
  </div>
</article>
</template>
<script>
export default {
    data() {
        return {
            sources: [{name: "Википедия", href: "https://ru.wikipedia.org"},{name: "Сайт \"Электроник\"", href: "http://elektronik.by"},{name: "Хабр", href: "https://habr.com "},{name: "Сайт \"Микроконтроллеры\"", href: "https://mcucpu.ru"},{name: "Сайт \"Электронофф\"", href: "https://electronoff.ua"}]
        }
    },
    head() {
      return {
        title: 'Источники информации'
      }
    }
}
</script>

import Vue from 'vue'

export default Vue.extend({
  name: 'SourcesPage'
})