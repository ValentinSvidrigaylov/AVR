<template lang="pug">
<article>
    <h2 class="text-center">Устройство микроконтроллеров</h2>
    <div class="p-3">
        <div class="split-70-30 mobile-no-split">
            <div>
                <p>Типовая структура микроконтроллера включает в себя три базовых типа устройств:</p>
                <ol>
                    <li>Центральный процессор (CPU – Central Processing Unit);</li>
                    <li>Оперативную память (ОЗУ, RAM – Random Access Memory) и постоянную память (ПЗУ, ROM – Read Only Memory), которая служит для хранения данных и программ;</li>
                    <li>Порты ввода/вывода (Port I/O – Input/Output Devices), служащие для связи микропроцессорной системы с внешними устройствами – приема (ввода, чтения, Read) входных сигналов и выдачи (вывода, записи, Write) выходных сигналов.</li>
                </ol>
                <p>Эти узлы соединены между собой общей системной шиной (магистралью), по которой производится весь обмен информацией в микропроцессорной системе.</p>
            </div>
            <figure class="mx-auto mobile-first">
                <img src="img/avr_scheme.png" alt="Схема микроконтроллера" title="Схема микроконтроллера" class="mx-auto" width="100%"/>
                <figcaption>
                    <p>Схема типичного микроконтроллера</p>
                </figcaption>
            </figure>
        </div>
        <h3>Характерные черты микроконтроллеров</h3>
        <ul>
            <li><a href="https://ru.wikipedia.org/wiki/RISC" target="_blank">RISC-архитектура</a> (RISC – Reduced Instruction Set Computer – вычислитель с сокращённым набором команд);</li>
            <li>Незначительная ёмкость памяти;</li>
            <li>Физическое и логическое разделение памяти программ и памяти данных;</li>
            <li>Система команд ориентирована на решение задачи управления.</li>
        </ul>
    </div>
</article>
</template>
<script>
export default {
  head() {
    return {
		title: 'Структура'
    };
  },
};
</script>