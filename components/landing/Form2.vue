<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-5xl mx-auto">
            <!-- Form Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Apply to Join <span class="text-red-500">Syntanium Energy</span>
                </h2>
                <p class="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Ready to take the next step in your career? Submit your application and become part of our dynamic
                    team.
                </p>
            </div>

            <!-- Application Form -->
            <form ref="form" @submit.prevent="submitForm"
                class="bg-red-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-red-100 dark:border-gray-700">
                <!-- Hidden inputs for Web3Forms -->
                <input type="hidden" name="access_key" value="0eb7506c-766c-4aa9-9dc2-2ca773456052">
                <input type="hidden" name="subject" value="New Job Application from Syntanium Energy Website">
                <input type="hidden" name="from_name" value="Syntanium Energy Careers Portal">
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                <!-- Personal Information Section -->
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Personal Information
                    </h3>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Full Name -->
                        <div>
                            <label for="fullName"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Full Name *
                            </label>
                            <input type="text" id="fullName" name="fullName" v-model="formData.fullName" required
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                                placeholder="Enter your full name">
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email Address *
                            </label>
                            <input type="email" id="email" name="email" v-model="formData.email" required
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                                placeholder="your.email@example.com">
                        </div>

                        <!-- Phone -->
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Phone Number *
                            </label>
                            <input type="tel" id="phone" name="phone" v-model="formData.phone" required
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                                placeholder="+234 000 000 0000">
                        </div>

                        <!-- Location -->
                        <div>
                            <label for="location"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Current Location *
                            </label>
                            <input type="text" id="location" name="location" v-model="formData.location" required
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                                placeholder="City, State/Country">
                        </div>
                    </div>
                </div>

                <!-- Position Information Section -->
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Position Information
                    </h3>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Position Type -->
                        <div>
                            <label for="positionType"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Application Type *
                            </label>
                            <select id="positionType" name="positionType" v-model="formData.positionType" required
                                @change="handlePositionTypeChange"
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm">
                                <option value="" disabled selected>Select application type</option>
                                <option value="specific">Apply for Specific Position</option>
                                <option value="spontaneous">Spontaneous Application</option>
                            </select>
                        </div>

                        <!-- Specific Position (conditional) -->
                        <div v-if="formData.positionType === 'specific'">
                            <label for="specificPosition"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Position Category *
                            </label>
                            <select id="specificPosition" name="specificPosition" v-model="formData.specificPosition"
                                :required="formData.positionType === 'specific'"
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm">
                                <option value="" disabled selected>Select position category</option>
                                <option value="Engineering & Technical">Engineering & Technical</option>
                                <option value="Field Operations">Field Operations</option>
                                <option value="Project Management">Project Management</option>
                                <option value="Health, Safety & Environment (HSE)">Health, Safety & Environment (HSE)
                                </option>
                                <option value="Corporate & Support">Corporate & Support</option>
                                <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                                <option value="Research & Innovation">Research & Innovation</option>
                                <option value="Business Development">Business Development</option>
                            </select>
                        </div>

                        <!-- Preferred Department (for spontaneous) -->
                        <div v-if="formData.positionType === 'spontaneous'">
                            <label for="preferredDepartment"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Preferred Department
                            </label>
                            <select id="preferredDepartment" name="preferredDepartment"
                                v-model="formData.preferredDepartment"
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm">
                                <option value="">Any Department</option>
                                <option value="Engineering & Technical">Engineering & Technical</option>
                                <option value="Field Operations">Field Operations</option>
                                <option value="Project Management">Project Management</option>
                                <option value="Health, Safety & Environment (HSE)">Health, Safety & Environment (HSE)
                                </option>
                                <option value="Corporate & Support">Corporate & Support</option>
                                <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                                <option value="Research & Innovation">Research & Innovation</option>
                                <option value="Business Development">Business Development</option>
                            </select>
                        </div>

                        <!-- Experience Level -->
                        <div>
                            <label for="experienceLevel"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Experience Level *
                            </label>
                            <select id="experienceLevel" name="experienceLevel" v-model="formData.experienceLevel"
                                required
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm">
                                <option value="" disabled selected>Select experience level</option>
                                <option value="Entry Level (0-2 years)">Entry Level (0-2 years)</option>
                                <option value="Mid Level (3-5 years)">Mid Level (3-5 years)</option>
                                <option value="Senior Level (6-10 years)">Senior Level (6-10 years)</option>
                                <option value="Executive Level (10+ years)">Executive Level (10+ years)</option>
                            </select>
                        </div>

                        <!-- Availability -->
                        <div>
                            <label for="availability"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Availability *
                            </label>
                            <select id="availability" name="availability" v-model="formData.availability" required
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm">
                                <option value="" disabled selected>When can you start?</option>
                                <option value="Immediately">Immediately</option>
                                <option value="Within 2 weeks">Within 2 weeks</option>
                                <option value="Within 1 month">Within 1 month</option>
                                <option value="Within 2-3 months">Within 2-3 months</option>
                                <option value="Other">Other (specify in cover letter)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Professional Background Section -->
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Professional Background
                    </h3>

                    <!-- Education -->
                    <div class="mb-6">
                        <label for="education" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Highest Education Level *
                        </label>
                        <select id="education" name="education" v-model="formData.education" required
                            class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm">
                            <option value="" disabled selected>Select education level</option>
                            <option value="High School">High School</option>
                            <option value="Diploma/Certificate">Diploma/Certificate</option>
                            <option value="Bachelor's Degree">HND/Bachelor's Degree</option>
                            <option value="Master's Degree">Master's Degree</option>
                            <option value="Doctorate (PhD)">Doctorate (PhD)</option>
                            <option value="Professional Certification">Professional Certification</option>
                        </select>
                    </div>

                    <!-- Field of Study -->
                    <div class="mb-6">
                        <label for="fieldOfStudy"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Field of Study/Specialization
                        </label>
                        <input type="text" id="fieldOfStudy" name="fieldOfStudy" v-model="formData.fieldOfStudy"
                            class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                            placeholder="e.g., Petroleum Engineering, Business Administration">
                    </div>

                    <!-- Key Skills -->
                    <div class="mb-6">
                        <label for="keySkills" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Key Skills & Competencies *
                        </label>
                        <textarea id="keySkills" name="keySkills" v-model="formData.keySkills" required rows="3"
                            class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                            placeholder="List your relevant technical and soft skills (separated by commas)"></textarea>
                    </div>
                </div>

                <!-- Resume/CV Information Section -->
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Resume/CV Information
                    </h3>

                    <!-- Instructions -->
                    <div
                        class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                        <p class="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Before submitting:</strong> Please upload your resume and cover letter to a cloud
                            storage service
                            (Google Drive, Dropbox, OneDrive, etc.) and ensure the sharing settings are set to "Anyone
                            with the link can view".
                            Then paste the links below.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Resume Link -->
                        <div>
                            <label for="resumeLink"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Resume/CV Link *
                            </label>
                            <input type="url" id="resumeLink" name="resumeLink" v-model="formData.resumeLink" required
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                                placeholder="https://drive.google.com/file/...">
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Google Drive, Dropbox, OneDrive, or similar cloud storage link
                            </p>
                        </div>

                        <!-- Cover Letter Link -->
                        <div>
                            <label for="coverLetterLink"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Cover Letter Link (Optional)
                            </label>
                            <input type="url" id="coverLetterLink" name="coverLetterLink"
                                v-model="formData.coverLetterLink"
                                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                                placeholder="https://drive.google.com/file/...">
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Link to your cover letter if available
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Additional Information Section -->
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Additional Information
                    </h3>

                    <!-- Why Syntanium Energy -->
                    <div class="mb-6">
                        <label for="whySyntanium"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Why do you want to work at Syntanium Energy? *
                        </label>
                        <textarea id="whySyntanium" name="whySyntanium" v-model="formData.whySyntanium" required
                            rows="4"
                            class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                            placeholder="Tell us what attracts you to Syntanium Energy and how you can contribute to our mission..."></textarea>
                    </div>

                    <!-- Additional Comments -->
                    <div class="mb-6">
                        <label for="additionalInfo"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Additional Comments
                        </label>
                        <textarea id="additionalInfo" name="additionalInfo" v-model="formData.additionalInfo" rows="3"
                            class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                            placeholder="Any additional information you'd like to share..."></textarea>
                    </div>

                    <!-- LinkedIn Profile -->
                    <div class="mb-6">
                        <label for="linkedinProfile"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            LinkedIn Profile (Optional)
                        </label>
                        <input type="url" id="linkedinProfile" name="linkedinProfile" v-model="formData.linkedinProfile"
                            class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-300 shadow-sm"
                            placeholder="https://linkedin.com/in/yourprofile">
                    </div>
                </div>

                <!-- Consent and Privacy -->
                <div class="mb-8">
                    <div class="flex items-start">
                        <input type="checkbox" id="privacy" name="privacy" v-model="formData.privacyConsent" required
                            class="mt-1 mr-3 h-4 w-4 text-red-500 focus:ring-red-500 border-red-200 dark:border-gray-600 bg-white dark:bg-gray-900 rounded">
                        <label for="privacy" class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            I consent to the processing of my personal data for recruitment purposes and understand that
                            my information will be stored securely and used only for evaluating my application. *
                        </label>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                    <button type="submit" :disabled="isSubmitting"
                        class="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-white dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg">
                        <span v-if="!isSubmitting">Submit Application</span>
                        <span v-else class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Submitting Application...
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
    fullName: '',
    email: '',
    phone: '',
    location: '',
    positionType: '',
    specificPosition: '',
    preferredDepartment: '',
    experienceLevel: '',
    availability: '',
    education: '',
    fieldOfStudy: '',
    keySkills: '',
    resumeLink: '',
    coverLetterLink: '',
    whySyntanium: '',
    additionalInfo: '',
    linkedinProfile: '',
    privacyConsent: false
})

// UI state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageClass = ref('')

// Handle position type change
const handlePositionTypeChange = () => {
    // Reset specific fields when changing position type
    formData.specificPosition = ''
    formData.preferredDepartment = ''
}

// Form submission
const submitForm = async () => {
    isSubmitting.value = true
    submitMessage.value = ''

    try {
        // Prepare form data for Web3Forms
        const formDataToSend = new FormData()

        // Add Web3Forms required fields
        formDataToSend.append('access_key', '0eb7506c-766c-4aa9-9dc2-2ca773456052')
        formDataToSend.append('subject', 'New Job Application from Syntanium Energy Website')
        formDataToSend.append('from_name', 'Syntanium Energy Careers Portal')
        formDataToSend.append('botcheck', '')

        // Add all form fields
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== undefined && formData[key] !== '') {
                formDataToSend.append(key, formData[key])
            }
        })

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend
        })

        const result = await response.json()

        if (result.success) {
            // Success
            submitMessage.value = 'Thank you! Your application has been submitted successfully. We will review it and get back to you soon.'
            submitMessageClass.value = 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30'

            // Reset form
            Object.assign(formData, {
                fullName: '',
                email: '',
                phone: '',
                location: '',
                positionType: '',
                specificPosition: '',
                preferredDepartment: '',
                experienceLevel: '',
                availability: '',
                education: '',
                fieldOfStudy: '',
                keySkills: '',
                resumeLink: '',
                coverLetterLink: '',
                whySyntanium: '',
                additionalInfo: '',
                linkedinProfile: '',
                privacyConsent: false
            })

            // Scroll to success message
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 100)
        } else {
            // Error from Web3Forms
            throw new Error(result.message || 'Failed to submit application')
        }
    } catch (error) {
        // Network or other errors
        console.error('Form submission error:', error)
        submitMessage.value = 'Sorry, there was an error submitting your application. Please try again later or email us directly at careers@syntaniumenergy.com'
        submitMessageClass.value = 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* Apply Inter font family */
* {
    font-family: 'Inter', sans-serif;
}

/* Custom focus styles */
input:focus,
textarea:focus,
select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Transitions */
input,
textarea,
select {
    transition: background-color 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s;
}

/* Enhanced shadow for light and dark mode */
form {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.dark form {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

/* Section headers with better borders */
h3 {
    border-bottom: 1px solid rgba(239, 68, 68, 0.2);
    padding-bottom: 0.5rem;
}

.dark h3 {
    border-bottom: 1px solid rgba(107, 114, 128, 0.2);
}

/* Custom checkbox styling for light and dark modes */
input[type="checkbox"] {
    appearance: none;
    background-color: white;
    border: 1px solid #fecaca;
    border-radius: 0.25rem;
    width: 1rem;
    height: 1rem;
    position: relative;
    cursor: pointer;
}

.dark input[type="checkbox"] {
    background-color: #1f2937;
    border-color: #4b5563;
}

input[type="checkbox"]:checked {
    background-color: #ef4444;
    border-color: #ef4444;
}

input[type="checkbox"]:checked::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
}

input[type="checkbox"]:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Placeholder text colors */
input::placeholder,
textarea::placeholder,
select::placeholder {
    color: #9ca3af;
}

.dark input::placeholder,
.dark textarea::placeholder,
.dark select::placeholder {
    color: #6b7280;
}
</style>