<template>
  <SurveyTemplate 
    :survey-questions="currentSurveyQuestions"
    :firebase-collection-name="props.firebaseCollectionOverride"
    poste-travail-question-id="S1"
    :survey-title="surveyDisplayTitle"
    :welcome-message="customWelcomeMessage"
    logo-src="../assets/Alycelogo.webp"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SurveyTemplate from './SurveyTemplate.vue';
import { idfMobilitesCycleSurveyQuestions } from './idfMobilitesCycleSurveyQuestions.js';

// Define props
const props = defineProps({
  firebaseCollectionOverride: {
    type: String,
    required: true
  }
});

// Define titles directly within this survey wrapper component
const pageTitle = ref('IDF Mobilités'); // Browser tab title
const surveyDisplayTitle = ref('Enquête Vélo - IDF Mobilités'); // Title for UI within SurveyTemplate
const customWelcomeMessage = ref('Bonjour Madame/Monsieur.<br> Je suis (votre prénom) de la société ALYCE, pour le compte d’Île-de-France Mobilités, autorité organisatrice des mobilités en Île-de-France.<br><br> Nous réalisons aujourd’hui une courte enquête (environ 5 minutes) auprès des personnes se rendant en gare ou de partant de la gare avec leur vélo ou qui pourraient utiliser le vélo pour arriver/ repartir de la gare.<br> Votre avis nous intéresse !<br><br> Acceptez-vous d’y participer ? '); // Customizable welcome message

const currentSurveyQuestions = idfMobilitesCycleSurveyQuestions;

onMounted(() => {
  document.title = pageTitle.value;
});
</script>

<style scoped>
/* Add any survey-specific styles here if needed */
</style> 