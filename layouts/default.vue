<template>
  <div id="wrapper">
    <header class="sticky-top">
      <div class="split-90-10">
        <nav class="navbar">
          <NuxtLink to="/" class="nav-link" title="На главную">Главная страница</NuxtLink>
          <NuxtLink to="/history" class="nav-link" title="История">История</NuxtLink>
          <NuxtLink to="/usage" class="nav-link" title="Применение">Применение</NuxtLink>
          <NuxtLink to="/architecture" class="nav-link" title="Структура">Структура</NuxtLink>
          <NuxtLink to="/sources" class="nav-link" title="Источники информации">Источники информации</NuxtLink>
          <NuxtLink to="/about" class="nav-link" title="Об авторе">Об авторе</NuxtLink>
        </nav>
        <ThemeButton/>
      </div>  
      <hr/>
    </header>
    <main>
      <Nuxt/>
      <ToTopButton/>
      <NavButtons/>
    </main>    
    <footer>
      
    </footer>
  </div>
</template>  