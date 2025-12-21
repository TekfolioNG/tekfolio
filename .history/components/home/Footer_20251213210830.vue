<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

      <!-- Top Section: Logo and Contact -->
      <div class="border-b border-gray-800 pb-8 lg:pb-12 mb-8 lg:mb-12">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <!-- Logo and Address -->
          <div class="mb-8 lg:mb-0">
            <NuxtLink to="/" class="inline-block">
              <img src="/tekfolio.png" alt="Tekfolio Logo" class="h-10 lg:h-12" />
            </NuxtLink>
            <div class="mt-4 space-y-2">
              <p class="text-gray-400">77 Awolowo Road, MAN House</p>
              <p class="text-gray-400">Ikeja, Lagos</p>
              <p class="text-gray-400">Nigeria</p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-4">
            <p class="text-lg font-medium text-white">
              Ready to transform your digital presence?
            </p>
            <div class="space-y-2">
              <p class="text-gray-300">
                <span class="text-gray-400">Phone:</span>
                <a href="tel:+2347088547450" class="hover:text-white transition-colors">
                  +234 708 854 7450
                </a>
              </p>
              <p class="text-gray-300">
                <span class="text-gray-400">Email:</span>
                <a href="mailto:hello@tekfolio.ng" class="hover:text-white transition-colors">
                  hello@tekfolio.ng
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Middle Section: Navigation Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        <!-- Services Column -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-lg">OUR SERVICES</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/web-solutions" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Enterprise Web Solutions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/mobile-apps" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Mobile App Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cloud-security" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Cloud Migration & Security
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/seo-performance" class="text-gray-400 hover:text-white hover:underline transition-colors">
                SEO & Performance Optimization
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/creative-coding" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Creative Coding & Interactive
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-lg">COMPANY</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/company" class="text-gray-400 hover:text-white hover:underline transition-colors">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/our-work" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Our Work
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/company#team" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Our Team
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Blog & Insights
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/company#careers" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Careers
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-lg">RESOURCES</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/help-center" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Help Center
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/documentation" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Documentation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/community" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Community Forum
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/developers" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Developer Resources
              </NuxtLink>
            </li>
            <li>
              <a href="https://status.tekfolio.ng" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-white hover:underline transition-colors">
                System Status
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div>
          <h3 class="text-white font-semibold mb-4 text-lg">LEGAL & COMPLIANCE</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms-of-service" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Terms of Service
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/security" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Security Center
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/compliance" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Compliance
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/report-abuse" class="text-gray-400 hover:text-white hover:underline transition-colors">
                Report Abuse
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section: Copyright and Social -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <!-- Copyright -->
          <div class="mb-6 lg:mb-0">
            <p class="text-gray-500 text-sm">
              © {{ currentYear }} Tekfolio. All rights reserved.
            </p>
            <p class="text-gray-500 text-sm mt-1">
              Proudly built in Nigeria, serving global clients.
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <a href="https://twitter.com/tekfolio" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Follow us on Twitter">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/tekfolio" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Connect with us on LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://github.com/tekfolio" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Check our projects on GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://instagram.com/tekfolio" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Follow us on Instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional: Back to Top Button -->
    <button @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-purple-900/95 to-blue-900/95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
      aria-label="Scroll to top">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Get current year for copyright
const currentYear = ref(new Date().getFullYear())

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Custom hover effects */
a,
button {
  transition: all 0.2s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>