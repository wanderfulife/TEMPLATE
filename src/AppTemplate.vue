<script setup>
import { ref } from 'vue';
import Constructor from './components/Constructor.vue';
import AdminDashboard from './components/AdminDashboard.vue';

// 🎯 STEP 1: Set your Firebase collection name
// This determines where your survey data will be stored in Firebase
// Use a unique name for each survey (e.g., "CustomerSurvey2024", "EventFeedback2024")
const masterFirebaseCollectionName = ref("YourSurveyName2024");
</script>

<template>
  <div id="app-container">
    <div class="survey-content-area">
      <Constructor :firebase-collection-override="masterFirebaseCollectionName" />
    </div>
    <div class="admin-section">
      <AdminDashboard :active-firebase-collection-name="masterFirebaseCollectionName" />
    </div>
  </div>
</template>

<style>
/* 🎨 Core app styling - modify colors and fonts to match your brand */

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif; /* 🎯 Change to your preferred font */
  background-color: #2a3b63; /* 🎯 Change to your brand color */
  color: white;
}

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.survey-content-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.admin-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a3b63; /* 🎯 Match with body background */
  padding: 20px 0;
  margin: 0;
  border: none;
}

.btn-signin {
  margin-bottom: 0;
}

/* 🎨 OPTIONAL: Add your custom CSS here */
/*
.survey-content-area {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

h1, h2 {
  font-family: 'Your Custom Font', sans-serif;
}

.btn-next {
  background-color: #your-brand-color;
}
*/
</style>

<!-- 
🚀 HOW TO CUSTOMIZE THIS FILE:

1. 🏷️ Collection Name: Change "YourSurveyName2024" to a unique name for your survey
   Examples:
   - "CustomerSatisfaction2024"
   - "EmployeeEngagement2024"  
   - "EventFeedback2024"
   - "ProductResearch2024"

2. 🎨 Colors: Update the background-color values to match your brand
   - Main background: #2a3b63 (currently dark blue)
   - You can use hex colors (#FF5733), RGB (rgb(255,87,51)), or CSS variables

3. 🔤 Fonts: Change 'Arial' to your preferred font family
   - System fonts: 'Helvetica', 'Segoe UI', 'Roboto'
   - Google Fonts: 'Open Sans', 'Montserrat', 'Lato' (remember to import in index.html)

4. 💾 Rename this file to App.vue (replacing the original)

EXAMPLE CONFIGURATIONS:

For a corporate survey:
- masterFirebaseCollectionName: "CorporateSurvey2024"
- background-color: #1e3a8a (corporate blue)
- font-family: 'Segoe UI', sans-serif

For a fun event survey:
- masterFirebaseCollectionName: "MusicFestival2024"
- background-color: #7c3aed (purple)
- font-family: 'Montserrat', sans-serif

For a healthcare survey:
- masterFirebaseCollectionName: "HealthcareFeedback2024"
- background-color: #059669 (medical green)
- font-family: 'Open Sans', sans-serif

🎯 QUICK CHECKLIST:
- [ ] Set unique collection name
- [ ] Updated brand colors
- [ ] Set preferred font
- [ ] Renamed to App.vue
--> 