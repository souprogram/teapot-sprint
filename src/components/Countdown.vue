<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const dani = ref(0);
const sati = ref(0);
const minute = ref(0);
const sekunde = ref(0);
let interval = null;

const događaj = new Date('2025-11-20T00:00:00');

const Countdown = () => {
  const sada = new Date();
  const razlika = događaj - sada;

  if (razlika <= 0) {
    clearInterval(interval);
    dani.value = sati.value = minute.value = sekunde.value = 0;
    return;
  }

  dani.value = Math.floor(razlika / (1000*60*60*24));
  sati.value = Math.floor((razlika / (1000*60*60))%24);
  minute.value = Math.floor((razlika / (1000*60))%60);
  sekunde.value = Math.floor((razlika / 1000)%60);
}
onMounted(() => {
  Countdown();
  interval = setInterval(Countdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
    <div class="absolute text-4xl font-serif mb-5 bottom-10 text-center text-white left-15">
        <p>{{ dani }}d:{{ sati }}h:{{ minute }}m:{{ sekunde }}s</p>
    </div>
</template>