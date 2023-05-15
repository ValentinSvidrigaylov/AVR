<template>
  <div id="wrapper">
    <header>
      <div class="split-90-10">
        <nav class="navbar sticky-top">
          <NuxtLink to="/" class="nav-link" title="На главную">Главная страница</NuxtLink>
          <NuxtLink to="/history" class="nav-link" title="История">История</NuxtLink>
          <NuxtLink to="/usage" class="nav-link" title="Применение">Применение</NuxtLink>
          <NuxtLink to="/sources" class="nav-link" title="Источники информации">Источники информации</NuxtLink>
          <NuxtLink to="/about" class="nav-link" title="Об авторе">Об авторе</NuxtLink>
        </nav>
        <ThemeButton/>
      </div>  
    </header>
    <main>
      <Nuxt/>
    </main>    
    <footer>
      
    </footer>
  </div>
</template>  