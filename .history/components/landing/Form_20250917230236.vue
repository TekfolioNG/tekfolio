<template>
    <section class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-4xl mx-auto">
            <!-- Form Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                    Get In Touch
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Ready to discuss your energy project? Send us a message and our team will get back to you within 24
                    hours.
                </p>
            </div>

            <!-- Contact Form -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                <div class="grid md:grid-cols-2">
                    <!-- Form Section -->
                    <div class="p-8 md:p-12">
                        <form @submit="handleSubmit" class="space-y-6">
                            <!-- Hidden Web3Forms fields -->
                            <input type="hidden" name="access_key" :value="accessKey" />
                            <input type="hidden" name="subject"
                                value="New Contact Form Submission from Syntanium Energy" />
                            <input type="hidden" name="from_name" value="Syntanium Energy Website" />
                            <input type="hidden" name="redirect" value="false" />

                            <!-- Name Fields -->
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="form-group">
                                    <label for="first_name" class="form-label">
                                        First Name <span class="text-red-500">*</span>
                                    </label>
                                    <input type="text" id="first_name" name="first_name" v-model="formData.firstName"
                                        required class="form-input" :class="{ 'border-red-500': errors.firstName }" />
                                    <p v-if="errors.firstName" class="error-message">{{ errors.firstName }}</p>
                                </div>

                                <div class="form-group">
                                    <label for="last_name" class="form-label">
                                        Last Name <span class="text-red-500">*</span>
                                    </label>
                                    <input type="text" id="last_name" name="last_name" v-model="formData.lastName"
                                        required class="form-input" :class="{ 'border-red-500': errors.lastName }" />
                                    <p v-if="errors.lastName" class="error-message">{{ errors.lastName }}</p>
                                </div>
                            </div>

                            <!-- Email Field -->
                            <div class="form-group">
                                <label for="email" class="form-label">
                                    Email Address <span class="text-red-500">*</span>
                                </label>
                                <input type="email" id="email" name="email" v-model="formData.email" required
                                    class="form-input" :class="{ 'border-red-500': errors.email }" />
                                <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
                            </div>

                            <!-- Phone Field -->
                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" id="phone" name="phone" v-model="formData.phone" class="form-input"
                                    placeholder="+234 xxx xxx xxxx" />
                            </div>

                            <!-- Company Field -->
                            <div class="form-group">
                                <label for="company" class="form-label">Company/Organization</label>
                                <input type="text" id="company" name="company" v-model="formData.company"
                                    class="form-input" />
                            </div>

                            <!-- Service Interest -->
                            <div class="form-group">
                                <label for="service" class="form-label">Service of Interest</label>
                                <select id="service" name="service" v-model="formData.service" class="form-input">
                                    <option value="">Select a service</option>
                                    <option value="oil-gas">Oil & Gas Operations</option>
                                    <option value="renewable-energy">Renewable Energy Solutions</option>
                                    <option value="energy-consulting">Energy Consulting</option>
                                    <option value="equipment-supply">Equipment Supply</option>
                                    <option value="maintenance-support">Maintenance & Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <!-- Message Field -->
                            <div class="form-group">
                                <label for="message" class="form-label">
                                    Message <span class="text-red-500">*</span>
                                </label>
                                <textarea id="message" name="message" v-model="formData.message" required rows="5"
                                    class="form-input resize-none" :class="{ 'border-red-500': errors.message }"
                                    placeholder="Tell us about your project or inquiry..."></textarea>
                                <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" :disabled="isSubmitting" class="submit-button"
                                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }">
                                <span v-if="!isSubmitting" class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Message
                                </span>
                                <span v-else class="flex items-center justify-center">
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Sending...
                                </span>
                            </button>

                            <!-- Success/Error Messages -->
                            <div v-if="submitStatus === 'success'" class="success-message">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                            </div>

                            <div v-if="submitStatus === 'error'" class="error-message-box">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {{ errorMessage }}
                            </div>
                        </form>
                    </div>

                    <!-- Contact Info Section -->
                    <div class="bg-red-500 p-8 md:p-12 text-white">
                        <h3 class="text-2xl font-barlow font-bold mb-8">Contact Information</h3>

                        <div class="space-y-6">
                            <div class="flex items-start">
                                <svg class="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <h4 class="font-semibold mb-1">Office Address</h4>
                                    <p class="text-red-100">11 Oromineke Layout, Off Wogu Street,<br>D-Line, Port
                                        Harcourt, Nigeria</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <svg class="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <h4 class="font-semibold mb-1">Phone Number</h4>
                                    <a href="tel:+2348148571524"
                                        class="text-red-100 hover:text-white transition-colors">
                                        (+234) 814 857 1524
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <svg class="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <h4 class="font-semibold mb-1">Email Address</h4>
                                    <a href="mailto:info@syntaniumenergy.com"
                                        class="text-red-100 hover:text-white transition-colors break-all">
                                        info@syntaniumenergy.com
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <svg class="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 class="font-semibold mb-1">Business Hours</h4>
                                    <p class="text-red-100">Monday - Friday<br>8:00 AM - 5:00 PM (WAT)</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 pt-8 border-t border-red-400">
                            <p class="text-red-100 text-sm">
                                We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Replace with your Web3Forms access key
const accessKey = ref('YOUR_WEB3FORMS_ACCESS_KEY')

// Form data
const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
})

// Form state
const isSubmitting = ref(false)
const submitStatus = ref('')
const errorMessage = ref('')
const errors = reactive({})

// Validation function
const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
        newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
        newErrors.message = 'Message must be at least 10 characters long'
    }

    Object.assign(errors, newErrors)
    return Object.keys(newErrors).length === 0
}

// Form submission handler
const handleSubmit = async (event) => {
    event.preventDefault()

    // Reset previous states
    Object.keys(errors).forEach(key => delete errors[key])
    submitStatus.value = ''
    errorMessage.value = ''

    // Validate form
    if (!validateForm()) {
        return
    }

    isSubmitting.value = true

    try {
        const formElement = event.target
        const formDataToSend = new FormData(formElement)

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend
        })

        const data = await response.json()

        if (data.success) {
            submitStatus.value = 'success'
            // Reset form
            Object.keys(formData).forEach(key => {
                formData[key] = ''
            })
        } else {
            throw new Error(data.message || 'Failed to send message')
        }
    } catch (error) {
        submitStatus.value = 'error'
        errorMessage.value = error.message || 'Failed to send message. Please try again or contact us directly.'
    } finally {
        isSubmitting.value = false
    }
}

// Clear status messages after some time
const clearStatus = () => {
    setTimeout(() => {
        if (submitStatus.value === 'success') {
            submitStatus.value = ''
        }
    }, 5000)
}

// Watch for successful submission to clear status
watch(() => submitStatus.value, (newStatus) => {
    if (newStatus === 'success') {
        clearStatus()
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Form Group Styles */
.form-group {
    display: flex;
    flex-direction: column;
}

/* Form Label Styles */
.form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: rgb(55 65 81);
    margin-bottom: 0.5rem;
}

html.dark .form-label,
.dark .form-label,
[data-theme="dark"] .form-label {
    color: rgb(209 213 219);
}

/* Form Input Styles */
.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgb(209 213 219);
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.2s ease;
    background-color: white;
    color: rgb(17 24 39);
}

.form-input:focus {
    outline: none;
    border-color: rgb(239 68 68);
    box-shadow: 0 0 0 3px rgb(239 68 68 / 0.1);
}

.form-input:hover {
    border-color: rgb(156 163 175);
}

/* Dark mode for inputs */
html.dark .form-input,
.dark .form-input,
[data-theme="dark"] .form-input {
    background-color: rgb(31 41 55);
    border-color: rgb(75 85 99);
    color: rgb(255 255 255);
}

html.dark .form-input:focus,
.dark .form-input:focus,
[data-theme="dark"] .form-input:focus {
    border-color: rgb(248 113 113);
    box-shadow: 0 0 0 3px rgb(248 113 113 / 0.1);
}

html.dark .form-input::placeholder,
.dark .form-input::placeholder,
[data-theme="dark"] .form-input::placeholder {
    color: rgb(156 163 175);
}

/* Submit Button Styles */
.submit-button {
    width: 100%;
    background-color: rgb(239 68 68);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 1rem;
}

.submit-button:hover:not(:disabled) {
    background-color: rgb(220 38 38);
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.submit-button:active:not(:disabled) {
    transform: translateY(0);
}

/* Error Message Styles */
.error-message {
    color: rgb(239 68 68);
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.error-message-box {
    background-color: rgb(254 242 242);
    border: 1px solid rgb(252 165 165);
    color: rgb(153 27 27);
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
}

html.dark .error-message-box,
.dark .error-message-box,
[data-theme="dark"] .error-message-box {
    background-color: rgb(69 10 10);
    border-color: rgb(127 29 29);
    color: rgb(252 165 165);
}

/* Success Message Styles */
.success-message {
    background-color: rgb(240 253 244);
    border: 1px solid rgb(167 243 208);
    color: rgb(21 128 61);
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
}

html.dark .success-message,
.dark .success-message,
[data-theme="dark"] .success-message {
    background-color: rgb(20 83 45);
    border-color: rgb(34 197 94);
    color: rgb(187 247 208);
}

/* Animation for spinning loader */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>