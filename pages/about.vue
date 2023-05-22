<template lang="pug">
<article>
	<h2 class="text-center">Об авторе</h2>
	<div class="p-3">
		<p>Меня зовут Хорольская Ева Станиславовна. Я родилась 23 апреля. Мне 15 лет. Мой родной город - Энергодар, а страна - Украина. Я увлекаюсь изобразительным искусством и кулинарией. С электроникой я плохо знакома, поэтому и решила изучить эту тему подробнее, написав об этом сайт. Сама я пишу сайты не очень долго, но уже знакома с основой некоторых фреймворков (vue, nuxt) и предпроцессоров (scss). В будущем планирую и дальше развиваться в этом направлении.</p>
		<div class="social-media">
			<h3>Написать мне:</h3>
			<ul>
				<a href="https://vk.com/id669014971" target="_blank">Вк</a>
			</ul>
		</div>
	</div>
</article>
</template>
<script>
export default {
  head() {
    return {
		title: 'Об авторе'
    };
  },
};
</script>

import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage'
})

