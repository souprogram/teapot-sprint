<script setup>
import { ref } from "vue"

const dani = ["ČETVRTAK", "PETAK", "SUBOTA", "NEDJELJA"]

const program = {
  ČETVRTAK: [
    { vrijeme:"15:00", event: "Dolazak i smještaj" },
    { vrijeme: "17:00", event: "Otvaranje Hackathona" },
    { vrijeme: "18:00-20:00", event: "Večera" },
  ],
  PETAK: [
    { vrijeme: "8:00-10:00", event: "Doručak" },
    { vrijeme: "10:30", event: "Predstavljanje prve teme natjecanja" },
    { vrijeme: "11:00", event: "Početak prvog dana natjecanja" },
    { vrijeme: "13:00-15:00", event: "Ručak" },
    { vrijeme: "18:00-20:00", event: "Večera" },
    { vrijeme: "21:00", event: "Party" },
  ],
  SUBOTA: [
    { vrijeme: "8:00-10:00", event: "Doručak" },
    { vrijeme: "10:30", event: "Predstavljanje druge teme natjecanja" },
    { vrijeme: "11:00", event: "Kraj prvog dana natjecanja" },
    { vrijeme: "11:00", event: "Početak drugog dana  natjecanja" },
    { vrijeme: "13:00-15:00", event: "Ručak" },
    { vrijeme: "18:00-20:00", event: "Večera" },
    { vrijeme: "21:00", event: "Party" },
  ],
  NEDJELJA: [
    { vrijeme: "8:00-10:00", event: "Doručak" },
    { vrijeme: "11:00", event: "Kraj drugog dana natjecanja" },
    { vrijeme: "12:00", event: "Prezentacije projekata najboljih timova" },
    { vrijeme: "13:00-16:00", event: "Početak okruglog stola" },
    { vrijeme: "13:45-15:00", event: "Ručak" },
    { vrijeme: "16:00-16.30", event: "Proglašenje pobjednika i dodjela nagrada" },
    { vrijeme: "16:30-17.00", event: "Zatvaranje, zahvale i pozdravi" },
  ],
}

const odabir = ref("ČETVRTAK")
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-brown p-6">
    <div class="w-full max-w-3xl">
      <div class="flex space-x-8 text-white text-lg mb-4 border-b border-gray-500">
        <button
          v-for="dan in dani"
          :key="dan"
          @click="odabir = dan"
          class="pb-2"
          :class="odabir === dan ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-gray-400'">
          {{ dan }}
        </button>
      </div>
      <div class="bg-white rounded-md">
        <table class="w-full text-left">
          <thead>
            <tr class="bg-orange-200 text-center">
              <th class="py-3 px-6">VRIJEME</th>
              <th class="py-3 px-6">SADRŽAJ</th>
            </tr>
          </thead>
          <tbody class="bg-white text-center">
            <tr v-for="(item, index) in program[odabir]" :key="index" class="border-t border-gray-200">
              <td class="py-4 px-6 font-bold text-black-400">{{ item.vrijeme }}</td>
              <td class="py-4 px-6">{{ item.event }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


