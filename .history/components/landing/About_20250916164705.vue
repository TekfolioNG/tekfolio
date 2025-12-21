<template>
  <section class="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <!-- Heading with Barlow font -->
      <h2 class="text-center text-3xl md:text-4xl lg:text-5xl font-barlow font-semibold mb-8 text-gray-900 dark:text-white">
        OUR COMPANY
      </h2>
      
      <!-- Main content container -->
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <!-- Text content -->
        <div class="w-full lg:w-1/2">
          <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Syntanium is an engineering and energy solutions company serving the oil and gas industry across upstream, midstream, and downstream operations. We focus on safety, quality, and sustainability, delivering practical services that fuel reliable performance and long-term value for our partners.
          </p>
          
          <!-- Key highlights -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="flex items-start">
              <div class="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Safety First</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Prioritizing protection of people and environment</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Quality Focus</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Excellence in every service we deliver</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Sustainability</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Commitment to environmentally responsible operations</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Partnership</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Building long-term relationships with clients</p>
              </div>
            </div>
          </div>
          
          <!-- Call to action button -->
          <button class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 flex items-center">
            Discover Our Services
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        
        <!-- Image/Graphic -->
        <div class="w-full lg:w-1/2">
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img :src="companyImage" alt="Syntanium Company" class="w-full h-72 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div class="p-6 text-white">
                <h3 class="text-xl font-semibold mb-2">Global Energy Solutions</h3>
                <p class="text-sm">Serving the oil and gas industry worldwide</p>
              </div>
            </div>
          </div>
          
          <!-- Stats bar -->
          <div class="grid grid-cols-3 gap-4 mt-6">
            <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-red-600 dark:text-red-500">25+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-red-600 dark:text-red-500">500+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-red-600 dark:text-red-500">40+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import your image
import companyImage from '~/assets/img/company-image.jpg';
</script>

<style>
/* Import Barlow font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

.font-barlow {
  font-family: 'Barlow', sans-serif;
}
</style>