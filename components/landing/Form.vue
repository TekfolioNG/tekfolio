<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-800">
        <div class="max-w-4xl mx-auto">
            <!-- Form Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-barlow font-bold text-gray-900 dark:text-white mb-6">
                    Send Us a Message
                </h2>
                <p class="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
                    Have questions about our services or ready to start a project? <br>Send us a message.</br>
                </p>
            </div>

            <!-- Contact Form -->
            <form ref="form" @submit.prevent="submitForm"
                class="bg-red-100 dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
                <!-- Hidden input for Web3Forms -->
                <input type="hidden" name="access_key" value="your-web3forms-access-key">
                <input type="hidden" name="subject" value="New Contact Form Submission from Syntanium Energy Website">
                <input type="hidden" name="from_name" value="Syntanium Energy Website">
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                <!-- Form Grid -->
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <!-- Name Field -->
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name *
                        </label>
                        <input type="text" id="name" name="name" v-model="formData.name" required
                            class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-red-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:text-white transition-colors duration-300 shadow-sm"
                            placeholder="Your full name">
                    </div>

                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                        </label>
                        <input type="email" id="email" name="email" v-model="formData.email" required
                            class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-red-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:text-white transition-colors duration-300 shadow-sm"
                            placeholder="e.g myname@gmail.com">
                    </div>
                </div>

                <!-- Phone Field -->
                <div class="mb-6">
                    <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" v-model="formData.phone"
                        class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-red-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:text-white transition-colors duration-300 shadow-sm"
                        placeholder="+234 000 000 0000">
                </div>

                <!-- Subject Field -->
                <div class="mb-6">
                    <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                    </label>
                    <select id="subject" name="subject" v-model="formData.subject" required
                        class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-red-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:text-white transition-colors duration-300 shadow-sm">
                        <option value="" disabled selected>Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Discussion">Project Discussion</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Career Opportunities">Career Opportunities</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <!-- Message Field -->
                <div class="mb-8">
                    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                    </label>
                    <textarea id="message" name="message" v-model="formData.message" required rows="5"
                        class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-red-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:text-white transition-colors duration-300 shadow-sm"
                        placeholder="Tell us about your project or inquiry..."></textarea>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                    <button type="submit" :disabled="isSubmitting"
                        class="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-barlow font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg">
                        <span v-if="!isSubmitting">Send Message</span>
                        <span v-else class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Sending...
                        </span>
                    </button>
                </div>

                <!-- Success/Error Messages -->
                <div v-if="submitMessage" class="mt-6 p-4 rounded-lg text-center" :class="submitMessageClass">
                    {{ submitMessage }}
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Form state
const formData = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

// UI state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageClass = ref('')

// Form submission
const submitForm = async () => {
    isSubmitting.value = true
    submitMessage.value = ''

    try {
        // Prepare form data for Web3Forms
        const formDataToSend = new FormData()
        formDataToSend.append('access_key', 'your-web3forms-access-key') // Replace with your actual key
        formDataToSend.append('name', formData.name)
        formDataToSend.append('email', formData.email)
        formDataToSend.append('phone', formData.phone)
        formDataToSend.append('subject', formData.subject)
        formDataToSend.append('message', formData.message)
        formDataToSend.append('botcheck', '') // Anti-bot field

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend
        })

        const result = await response.json()

        if (result.success) {
            // Success
            submitMessage.value = 'Thank you! Your message has been sent successfully.'
            submitMessageClass.value = 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'

            // Reset form
            Object.assign(formData, {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
        } else {
            // Error from Web3Forms
            throw new Error(result.message || 'Failed to send message')
        }
    } catch (error) {
        // Network or other errors
        console.error('Form submission error:', error)
        submitMessage.value = 'Sorry, there was an error sending your message. Please try again later or contact us directly.'
        submitMessageClass.value = 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Custom focus styles */
input:focus,
textarea:focus,
select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Dark mode transitions */
input,
textarea,
select {
    transition: background-color 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s;
}

/* Enhanced shadow for better visibility in light mode */
form {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.dark form {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
</style>