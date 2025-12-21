<template>
  <section class="bg-white dark:bg-gray-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Image on left -->
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/assets/img/cta.png" 
            alt="Syntanium Energy Solutions" 
            class="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <!-- Content on right -->
        <div class="w-full md:w-1/2 md:pl-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Innovative Solutions for the Energy Sector
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Syntanium Energy delivers cutting-edge engineering, construction, and maintenance solutions with uncompromising commitment to safety, quality, and environmental responsibility.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div class="flex items-center">
              <div class="bg-[#fe4135] rounded-full p-2 mr-3">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-white" />
              </div>
              <span class="text-gray-800 dark:text-gray-200">Expert Engineering</span>
            </div>
            <div class="flex items-center">
              <div class="bg-[#fe4135] rounded-full p-2 mr-3">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-white" />
              </div>
              <span class="text-gray-800 dark:text-gray-200">Quality Construction</span>
            </div>
            <div class="flex items-center">
              <div class="bg-[#fe4135] rounded-full p-2 mr-3">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-white" />
              </div>
              <span class="text-gray-800 dark:text-gray-200">Preventive Maintenance</span>
            </div>
            <div class="flex items-center">
              <div class="bg-[#fe4135] rounded-full p-2 mr-3">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-white" />
              </div>
              <span class="text-gray-800 dark:text-gray-200">24/7 Support</span>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink 
              to="/contact" 
              class="bg-[#fe4135] hover:bg-[#dc2626] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Contact Us Today
            </NuxtLink>
            <NuxtLink 
              to="/solutions" 
              class="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Explore Solutions
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>