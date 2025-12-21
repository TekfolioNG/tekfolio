<template>
  <footer
    class="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white pt-16 pb-8 px-6 sm:px-8 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Main Footer -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <!-- Column 1: Logo and About -->
        <div class="md:col-span-5 flex flex-col items-center md:items-start">
          <NuxtLink to="/">
            <img src="~/assets/img/veaverde-logo-footer.png" alt="Vera Verde Logo"
              class="h-24 md:h-24 drop-shadow-lg mb-4" />
          </NuxtLink>

          <p class="text-gray-300 leading-relaxed mb-6 text-center md:text-left">
            Vera Verde is a climate-focused solutions company committed to reducing greenhouse gas emissions through
            carbon-smart agriculture, clean energy briquettes, and soil-restoring biochar. Based in Minna, Nigeria, we
            help protect the planet, empower farmers, and drive sustainable growth across communities.
          </p>

          <NuxtLink to="/about-us"
            class="group inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
            Learn more about us
            <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="md:col-span-2 flex flex-col items-center md:items-start">
          <h3
            class="text-lg font-semibold mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Quick Links
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li>
              <NuxtLink to="/"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:home" class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:users" class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/impact-stories"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:heart" class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Impact Stories
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/partner-with-us"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:hand-raised" class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Partner With Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:envelope" class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Our Work -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3
            class="text-lg font-semibold mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Our Work
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li>
              <NuxtLink to="/climate-smart-agriculture"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:leaf"
                  class="w-4 h-4 mr-2 text-green-400 group-hover:scale-110 transition-transform" />
                Climate-Smart Agriculture
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/carbon-sequestration"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:cloud"
                  class="w-4 h-4 mr-2 text-green-400 group-hover:scale-110 transition-transform" />
                Carbon Sequestration
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ecofuel-briquettes"
                class="text-gray-300 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start group">
                <Icon name="heroicons:fire"
                  class="w-4 h-4 mr-2 text-green-400 group-hover:scale-110 transition-transform" />
                Ecofuel Briquettes
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="md:col-span-2 flex flex-col items-center md:items-start">
          <h3
            class="text-lg font-semibold mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Contact Us
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-start mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:map-pin" class="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Head Office:</strong>
                Minna, Niger State, Nigeria
              </div>
            </li>

            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:phone" class="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Tel:</strong>
                <a href="tel:+2348034272579" class="hover:text-green-400 transition-colors">
                  +234 803 427 2579
                </a>
              </div>
            </li>

            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:envelope" class="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">E-mail:</strong>
                <a href="mailto:veraverde.ng@gmail.com" class="hover:text-green-400 transition-colors block">
                  veraverde.ng@gmail.com
                </a>
                <a href="mailto:info@veraverde.com" class="hover:text-green-400 transition-colors">
                  info@veraverde.com
                </a>
              </div>
            </li>

            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">WhatsApp:</strong>
                <a href="https://wa.me/2348034272579" target="_blank"
                  class="inline-flex items-center hover:text-green-400 transition-colors group">
                  Chat with us
                  <Icon name="heroicons:arrow-top-right-on-square"
                    class="w-3 h-3 ml-1 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Environmental Impact Banner -->
      <div
        class="mb-12 bg-gradient-to-r from-green-800/30 to-green-600/30 backdrop-blur-sm rounded-2xl p-6 border border-green-700/20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full">
              <Icon name="heroicons:globe-americas" class="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Making a Climate Impact</h4>
              <p class="text-green-200 text-sm">Join us in building a sustainable future for Nigeria and beyond</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-6 text-sm">
            <div class="text-center">
              <div class="text-2xl font-bold text-green-400">500+</div>
              <div class="text-green-200">Farmers Empowered</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-400">1000+</div>
              <div class="text-green-200">Tons CO₂ Reduced</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-400">50+</div>
              <div class="text-green-200">Communities Served</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-green-700/30 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="order-2 md:order-1 text-gray-400 text-sm text-center">
            © {{ new Date().getFullYear() }} Vera Verde Nigeria Ltd. All Rights Reserved.
          </div>

          <div class="order-1 md:order-2 flex flex-col md:flex-row items-center gap-4">
            <div class="text-gray-400 text-sm">Follow Our Impact:</div>
            <div class="flex gap-3">
              <a href="#"
                class="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-500/10"
                aria-label="LinkedIn">
                <Icon name="mdi:linkedin" size="20" />
              </a>
              <a href="#"
                class="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-500/10"
                aria-label="Instagram">
                <Icon name="mdi:instagram" size="20" />
              </a>
              <a href="#"
                class="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-500/10"
                aria-label="Twitter">
                <Icon name="mdi:twitter" size="20" />
              </a>
              <a href="#"
                class="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-500/10"
                aria-label="Facebook">
                <Icon name="mdi:facebook" size="20" />
              </a>
            </div>
          </div>

          <div class="order-3 text-gray-400 text-sm text-center md:text-right">
            Website by <NuxtLink to="https://tekfol.io" target="_blank"
              class="text-green-400 hover:text-green-300 transition-colors">Tekfolio Ltd</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Enhanced animations for environmental theme */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-pulse {
  animation: pulse 4s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
  transition: all 0.3s ease-in-out;
}

/* Custom gradient backgrounds */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

/* Backdrop blur for modern glass effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>