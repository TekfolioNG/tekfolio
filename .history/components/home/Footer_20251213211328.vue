<template>
  <!-- CTA Section -->
  <section class="relative w-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
        Get started with digital excellence
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Start a Project -->
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Start a project</h3>
          <p class="text-gray-900 mb-6 text-sm md:text-base">
            Get instant access to professional development services tailored for your business.
          </p>
          <NuxtLink to="/contact"
            class="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all duration-200">
            Get in touch
            <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Need Help Choosing -->
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Need help choosing?</h3>
          <p class="text-gray-900 mb-6 text-sm md:text-base">
            Get a personalized service recommendation for your specific needs.
          </p>
          <NuxtLink to="/company"
            class="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all duration-200">
            Explore our services
            <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Talk to an Expert -->
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Talk to an expert</h3>
          <p class="text-gray-900 mb-6 text-sm md:text-base">
            Have questions or want to discuss your project? Get in touch with our team.
          </p>
          <NuxtLink to="/contact"
            class="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all duration-200">
            Contact us
            <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <!-- Logo and Contact Info -->
      <div class="mb-12 pb-8 border-b border-gray-800">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <img src="/tekfolio.png" alt="Tekfolio Logo" class="h-10 md:h-12 mb-4" />
            <p class="text-orange-400 font-semibold text-lg">Contact sales: <a href="tel:+2347088547450"
                class="hover:text-orange-300 transition-colors">+234 708 854 7450</a></p>
          </div>
        </div>
      </div>

      <!-- Footer Links Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
        <!-- Services -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/web-solutions" class="text-sm hover:text-white transition-colors">
                Web Solutions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/mobile-apps" class="text-sm hover:text-white transition-colors">
                Mobile Apps
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cloud-security" class="text-sm hover:text-white transition-colors">
                Cloud & Security
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/seo-performance" class="text-sm hover:text-white transition-colors">
                SEO & Performance
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/creative-coding" class="text-sm hover:text-white transition-colors">
                Creative Coding
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Solutions -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Solutions</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/web-solutions" class="text-sm hover:text-white transition-colors">
                Enterprise Web
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/mobile-apps" class="text-sm hover:text-white transition-colors">
                Mobile Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cloud-security" class="text-sm hover:text-white transition-colors">
                Cloud Migration
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/seo-performance" class="text-sm hover:text-white transition-colors">
                Performance Optimization
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Resources</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/blog" class="text-sm hover:text-white transition-colors">
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/company" class="text-sm hover:text-white transition-colors">
                Case Studies
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-sm hover:text-white transition-colors">
                Get a Quote
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/company" class="text-sm hover:text-white transition-colors">
                Our Process
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/company" class="text-sm hover:text-white transition-colors">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/company" class="text-sm hover:text-white transition-colors">
                Our Team
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-sm hover:text-white transition-colors">
                Careers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-sm hover:text-white transition-colors">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Legal</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/privacy" class="text-sm hover:text-white transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-sm hover:text-white transition-colors">
                Terms of Service
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/company" class="text-sm hover:text-white transition-colors">
                Trust & Security
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Address and Social -->
      <div class="pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <!-- Address -->
          <div class="text-sm">
            <p class="text-gray-400">77 Awolowo Road, MAN House</p>
            <p class="text-gray-400">Ikeja, Lagos, Nigeria</p>
          </div>

          <!-- Social Links -->
          <div class="flex items-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {{ currentYear }} Tekfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* Additional styles if needed */
</style>