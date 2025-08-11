<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { reactive, ref } from 'vue'

// Form data reactive object
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Form status
const formStatus = ref({
  loading: false,
  success: false,
  error: false,
  message: ''
})

// Reset form function
const resetForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key] = ''
  })
}

// Form validation function
const validateForm = () => {
  const errors = []

  if (!formData.name.trim() || formData.name.length < 2) {
    errors.push('Name must be at least 2 characters long')
  }

  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!formData.subject.trim() || formData.subject.length < 3) {
    errors.push('Subject must be at least 3 characters long')
  }

  if (!formData.message.trim() || formData.message.length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  return errors
}

// Enhanced submitForm function
const submitForm = async (event) => {
  event.preventDefault()

  console.log('=== Form Submission Debug ===');
  console.log('Current URL:', window.location.href);
  console.log('Form data:', formData);

  // Client-side validation
  const validationErrors = validateForm()
  if (validationErrors.length > 0) {
    console.log('Validation errors:', validationErrors);
    formStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: validationErrors.join('. ')
    }
    setTimeout(() => {
      formStatus.value.message = ''
      formStatus.value.error = false
    }, 8000)
    return
  }

  // Reset status
  formStatus.value = {
    loading: true,
    success: false,
    error: false,
    message: 'Sending your message...'
  }

  try {
    console.log('Submitting form via API proxy...');
    console.log('API endpoint:', '/api/contact');

    const requestBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    console.log('Request body:', requestBody);

    // Use Nuxt's $fetch to call our API route
    const result = await $fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
      timeout: 30000,
      retry: 0,
      onRequest({ request, options }) {
        console.log('Making request to:', request);
        console.log('Request options:', options);
      },
      onRequestError({ request, options, error }) {
        console.error('Request error:', error);
        console.log('Failed request:', request);
        console.log('Request options:', options);
      },
      onResponse({ request, response, options }) {
        console.log('Response received:', response.status, response.statusText);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      },
      onResponseError({ request, response, options }) {
        console.error('Response error:', response.status, response.statusText);
        console.log('Error response:', response);
      }
    })

    console.log('API response:', result);

    if (result.success) {
      formStatus.value = {
        loading: false,
        success: true,
        error: false,
        message: result.message || 'Message sent successfully! We will contact you soon.'
      }
      resetForm()

      setTimeout(() => {
        formStatus.value.message = ''
        formStatus.value.success = false
      }, 5000)
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('=== Form Submission Error ===');
    console.error('Error object:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);

    if (error.data) {
      console.error('Error data:', error.data);
    }

    if (error.response) {
      console.error('Error response:', error.response);
    }

    let errorMessage = 'An unexpected error occurred. Please try again.'

    // Handle different error types
    if (error.statusCode === 400) {
      console.log('Bad Request Error (400)');
      errorMessage = error.data?.message || error.statusMessage || 'Please check your form data and try again.'
    } else if (error.statusCode === 408) {
      console.log('Timeout Error (408)');
      errorMessage = 'Request timed out. Please try again.'
    } else if (error.statusCode === 429) {
      console.log('Rate Limit Error (429)');
      errorMessage = 'Too many requests. Please wait a moment and try again.'
    } else if (error.statusCode >= 500) {
      console.log('Server Error (5xx):', error.statusCode);
      errorMessage = 'Server error occurred. Please try again in a few minutes.'
    } else if (error.data?.message) {
      console.log('Error with data message:', error.data.message);
      errorMessage = error.data.message
    } else if (error.message) {
      console.log('Error with message:', error.message);
      errorMessage = error.message
    }

    // Add debug info in development
    if (process.dev) {
      errorMessage += ` (Debug: ${error.statusCode || 'Unknown'} - ${error.name || 'Unknown Error'})`;
    }

    formStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: errorMessage
    }

    setTimeout(() => {
      formStatus.value.message = ''
      formStatus.value.error = false
    }, 8000)

    console.log('=== End Form Submission Error ===');
  }
}

// Page meta configuration
definePageMeta({
  layout: "landing"
})

useHead({
  title: 'Contact Us | Get In Touch',
  meta: [
    { property: 'og:title', content: 'Contact Us | Professional Services' },
    { property: 'og:description', content: 'Get in touch with our team for professional consultation and services. We\'re here to help with your business needs.' },
    { property: 'og:image', content: '/contact-og.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Contact Us - Professional Services' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact Us | Professional Services' },
    { name: 'twitter:description', content: 'Get in touch with our team for consultation and services.' },
    { name: 'twitter:image', content: '/contact-og.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://yourwebsite.com/contact' }
  ],
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-gray-900">

      <!-- Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full">
        </div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full">
        </div>
      </div>

      <div class="relative container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-32">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-7xl mx-auto">
          <!-- Left Content -->
          <div class="text-center lg:text-left">
            <div
              class="inline-flex items-center px-4 py-2 bg-[#F4A460]/20 rounded-full text-[#F4A460] font-medium text-sm mb-6">
              <span class="w-2 h-2 bg-[#F4A460] rounded-full mr-2"></span>
              Let's Connect
            </div>

            <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get in
              <span class="relative">
                <span class="text-[#F4A460]">Touch</span>
                <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 5 100 2 198 8" stroke="#F4A460" stroke-width="3" stroke-linecap="round"
                    fill="none" />
                </svg>
              </span>
            </h1>

            <p class="text-xl text-gray-100 mb-8 max-w-lg">
              Ready to start a conversation? We're here to listen, help, and turn your ideas into reality.
            </p>

            <!-- Quick Stats -->
            <div class="grid grid-cols-3 gap-8 pt-8 border-t border-[#F4A460]">
              <div class="text-center">
                <div class="text-2xl font-bold text-[#F4A460] mb-1">24h</div>
                <div class="text-sm text-gray-100">Response Time</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#F4A460] mb-1">500+</div>
                <div class="text-sm text-gray-100">Happy Clients</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#F4A460] mb-1">99%</div>
                <div class="text-sm text-gray-100">Satisfaction</div>
              </div>
            </div>
          </div>

          <!-- Right Animation -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#F4A460]/30 to-amber-300/30 rounded-3xl transform rotate-6">
              </div>
              <div class="relative bg-white rounded-3xl p-8 shadow-2xl">
                <DotLottieVue style="height: 320px; width: 320px" class="mx-auto" autoplay loop
                  src="https://lottie.host/5b29688d-fa19-4ffa-bfb9-74a0fc801d5b/lhUJRoS5cy.lottie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Cards -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <!-- Email Card -->
          <div
            class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div
              class="w-14 h-14 bg-gradient-to-br from-[#D2691E] to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Email Us</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Send us an email and we'll respond within 24 hours</p>
            <a href="mailto:contact@example.com"
              class="text-[#D2691E] font-semibold hover:text-amber-600 transition-colors">
              info@botintegrated.com
              support@botintegrated.com
            </a>
          </div>

          <!-- Phone Card -->
          <div
            class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div
              class="w-14 h-14 bg-gradient-to-br from-[#D2691E] to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Call Us</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Available Monday to Friday, 9AM-6PM</p>
            <a href="tel:+1234567890" class="text-[#D2691E] font-semibold hover:text-amber-600 transition-colors">
              +234 805 524 8406
              <br>+234 802 200 7759</br>
            </a>
          </div>

          <!-- Location Card -->
          <div
            class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div
              class="w-14 h-14 bg-gradient-to-br from-[#D2691E] to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Visit Us</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Come say hello at our office headquarters</p>
            <address class="text-[#D2691E] font-semibold not-italic">
              32 Owulade Street Irawo Bus Stop, Bako Estate,<br>
              along Ikorodu Road Lagos
            </address>
          </div>

        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">

          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question or want to discuss a project? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <!-- Contact Form -->
          <div class="relative">
            <!-- Form Background with subtle pattern -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl">
            </div>
            <div
              class="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">

              <form @submit="submitForm" class="space-y-8" novalidate>
                <!-- Honeypot field for spam protection -->
                <input type="checkbox" name="botcheck" style="display: none;">

                <!-- Form Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <!-- Name Field -->
                  <div class="group">
                    <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Full Name <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <input type="text" id="name" name="name" v-model="formData.name" required minlength="2"
                        maxlength="100"
                        class="w-full px-4 py-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#D2691E] focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your full name" autocomplete="name">
                      <div
                        class="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus-within:ring-[#D2691E]/20 transition-all duration-300 pointer-events-none">
                      </div>
                    </div>
                  </div>

                  <!-- Email Field -->
                  <div class="group">
                    <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <input type="email" id="email" name="email" v-model="formData.email" required maxlength="150"
                        class="w-full px-4 py-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#D2691E] focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="your.email@example.com" autocomplete="email">
                      <div
                        class="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus-within:ring-[#D2691E]/20 transition-all duration-300 pointer-events-none">
                      </div>
                    </div>
                  </div>

                  <!-- Phone Field -->
                  <div class="group">
                    <label for="phone" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Phone Number
                    </label>
                    <div class="relative">
                      <input type="tel" id="phone" name="phone" v-model="formData.phone" maxlength="20"
                        class="w-full px-4 py-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#D2691E] focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="+1 (555) 123-4567" autocomplete="tel">
                      <div
                        class="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus-within:ring-[#D2691E]/20 transition-all duration-300 pointer-events-none">
                      </div>
                    </div>
                  </div>

                  <!-- Subject Field -->
                  <div class="group">
                    <label for="subject" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Subject <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <input type="text" id="subject" name="subject" v-model="formData.subject" required minlength="3"
                        maxlength="200"
                        class="w-full px-4 py-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#D2691E] focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="What's this about?">
                      <div
                        class="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus-within:ring-[#D2691E]/20 transition-all duration-300 pointer-events-none">
                      </div>
                    </div>
                  </div>

                </div>

                <!-- Message Field -->
                <div class="group">
                  <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Your Message <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <textarea id="message" name="message" v-model="formData.message" rows="6" required minlength="10"
                      maxlength="2000"
                      class="w-full px-4 py-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#D2691E] focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Tell us about your inquiry or project..."></textarea>
                    <div
                      class="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus-within:ring-[#D2691E]/20 transition-all duration-300 pointer-events-none">
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center pt-6">
                  <button type="submit" :disabled="formStatus.loading"
                    class="group relative px-8 py-4 bg-gradient-to-r from-[#D2691E] to-amber-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-4 focus:ring-[#D2691E]/30 min-w-[200px]"
                    :aria-label="formStatus.loading ? 'Sending message...' : 'Send message'">
                    <span v-if="!formStatus.loading" class="flex items-center justify-center">
                      Send Message
                      <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span v-else class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                      </svg>
                      Sending...
                    </span>
                  </button>
                </div>

                <!-- Status Message -->
                <Transition name="slide-fade" mode="out-in">
                  <div v-if="formStatus.message" :class="{
                    'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300': formStatus.success,
                    'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300': formStatus.error,
                    'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300': formStatus.loading
                  }" class="border-2 px-6 py-4 rounded-xl" role="status"
                    :aria-live="formStatus.error ? 'assertive' : 'polite'">
                    <div class="flex items-center">
                      <svg v-if="formStatus.success" class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"></path>
                      </svg>
                      <svg v-else-if="formStatus.error" class="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"></path>
                      </svg>
                      <div v-else-if="formStatus.loading" class="w-5 h-5 mr-3 flex-shrink-0">
                        <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                          </circle>
                          <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                          </path>
                        </svg>
                      </div>
                      <p class="font-medium">{{ formStatus.message }}</p>
                    </div>
                  </div>
                </Transition>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section
      class="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions about our services
            </p>
          </div>

          <div class="space-y-6">
            <!-- FAQ Item 1 -->
            <div
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span class="w-2 h-2 bg-[#D2691E] rounded-full mr-3"></span>
                  How quickly do you respond to inquiries?
                </h3>
                <p class="text-gray-900 dark:text-gray-300 pl-5">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                  call us directly.
                </p>
              </div>
            </div>

            <!-- FAQ Item 2 -->
            <div
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span class="w-2 h-2 bg-[#D2691E] rounded-full mr-3"></span>
                  What information should I include in my message?
                </h3>
                <p class="text-gray-900 dark:text-gray-300 pl-5">
                  Please include details about your project, timeline, budget range, and any specific requirements. The
                  more information you provide, the better we can assist you.
                </p>
              </div>
            </div>

            <!-- FAQ Item 3 -->
            <div
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span class="w-2 h-2 bg-[#D2691E] rounded-full mr-3"></span>
                  Do you offer free consultations?
                </h3>
                <p class="text-gray-900 dark:text-gray-300 pl-5">
                  Yes! We offer complimentary initial consultations to discuss your needs and how we can help achieve
                  your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Links -->

  </div>
</template>

<style scoped>
/* Slide fade transition for status messages */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #D2691E;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #B8651A;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
  background: #374151;
}

.dark ::-webkit-scrollbar-thumb {
  background: #D2691E;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #B8651A;
}

/* Form validation styles */
input:invalid:not(:placeholder-shown),
textarea:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

input:valid:not(:placeholder-shown),
textarea:valid:not(:placeholder-shown) {
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

/* Enhanced focus states */
input:focus,
textarea:focus,
button:focus {
  outline: none;
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #D2691E, #F4A460);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Button hover glow effect */
button:not(:disabled):hover {
  box-shadow: 0 20px 40px rgba(210, 105, 30, 0.3);
}

/* Loading animation enhancement */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

.loading-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Card hover effects */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth transitions for all elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Mobile responsiveness improvements */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .text-5xl {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  .text-6xl {
    font-size: 3rem;
    line-height: 1.1;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bg-gradient-to-r {
    background: #D2691E;
  }

  .border-gray-300 {
    border-color: #000;
  }

  .dark .border-gray-600 {
    border-color: #fff;
  }
}

/* Print styles */
@media print {

  .bg-gradient-to-br,
  .bg-gradient-to-r {
    background: #fff !important;
    color: #000 !important;
  }

  .shadow-lg,
  .shadow-2xl {
    box-shadow: none !important;
  }
}
</style>