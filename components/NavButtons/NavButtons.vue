<template>
    <div class="outer_fixed_nav">
    <div class="hide_fixed_nav">
      <button @click="HideButtons()">Скрыть/Показать</button>
    </div>
    <div class="fixed_nav" ref="fixed_nav">
      <NuxtLink :to="{path: url_back}" class="nav-link" title="Назад" v-if="showBack">Назад</NuxtLink>
      <NuxtLink :to="{path: url_home}" class="nav-link" title="На главную">На главную</NuxtLink>
      <NuxtLink :to="{path: url_forth}" class="nav-link" title="Вперёд" v-if="showForth">Вперёд</NuxtLink>
    </div>
  </div>
</template>
<style src="./NavButtons.css"></style>

<script>
export default {
    data() {
        return {
            reduced: true,
            urls: ['/','/history','/usage','/architecture','/sources','/about'],
            currentRoute: '',
            currentRouteRaw: '',
            url_home: '/',
            url_back: '',
            url_forth: '',
            showBack: true,
            showForth: true,
        }
    },
    methods: {
        HideButtons: function() {
            console.log(2)
            if (typeof document !== 'undefined') {
                [...document.getElementsByClassName('fixed_nav')].forEach((e)=>{e.style.display = e.style.display == 'none' ? 'block' : 'none'})
            }
        },
        CheckIndexes: function() {
            if (this.reduced) {
                if (this.url_back == this.urls[this.urls.length-1]) {
                    this.showBack = false;
                } else {
                    this.showBack = true;
                }

                if (this.url_forth == this.urls[0]) {
                    this.showForth = false;
                } else {
                    this.showForth = true;
                }
            }
        }
    },
    beforeMount() {
        this.currentRoute = location.pathname.match(/[\w/]*\/(\w*)/i)[1];
        this.currentRouteRaw = location.pathname;
        this.url_back = this.urls[this.urls.indexOf(location.pathname)-1 > -1 ? this.urls.indexOf(location.pathname)-1 : this.urls.length-1];
        this.url_forth = this.urls[this.urls.indexOf(location.pathname)+1 < this.urls.length ? this.urls.indexOf(location.pathname)+1 : 0];        
        this.CheckIndexes();
    },
    
    watch: {
        $route(to, from) {
            console.log(to)

            this.currentRouteRaw = to.path;
            this.currentRoute = this.currentRouteRaw.match(/[\w/]*(\/\w*)/i)[1] || '';
            console.log(this.currentRouteRaw);
            console.log(this.currentRoute);
            
            this.url_back = this.urls[this.urls.indexOf(this.currentRoute) > 0 ? this.urls.indexOf(this.currentRoute)-1 : this.urls.length-1];
            this.url_forth = this.urls[this.urls.indexOf(this.currentRoute)+1 < this.urls.length ? this.urls.indexOf(this.currentRoute)+1 : 0];

            this.CheckIndexes();
        }
  }
}
</script>