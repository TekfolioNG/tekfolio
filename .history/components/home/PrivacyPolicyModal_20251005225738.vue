<!-- PrivacyPolicyModal.vue -->
<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-end justify-center" @click.self="closeModal">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeModal"></div>

            <!-- Modal Content -->
            <div
                class="relative bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[80vh] rounded-t-2xl shadow-2xl overflow-hidden animate-slide-up">
                <!-- Header -->
                <div
                    class="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
                    <button @click="closeModal"
                        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Content -->
                <div class="px-6 py-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                    <div class="prose prose-sm dark:prose-invert max-w-none">
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Last Updated: January 2025</p>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Information We
                                Collect</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>Contact information (name, email, phone number)</li>
                                <li>Professional information for job applications</li>
                                <li>Communication preferences</li>
                                <li>Any other information you choose to provide</li>
                            </ul>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. How We Use Your
                                Information</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">
                                We use the information we collect to:
                            </p>
                            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>Respond to your inquiries and requests</li>
                                <li>Process job applications and recruitment</li>
                                <li>Communicate with you about our services</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Information Sharing
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">
                                We do not sell your personal information. We may share your information only in the
                                following circumstances:
                            </p>
                            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>With your consent</li>
                                <li>To comply with legal obligations</li>
                                <li>With service providers who assist in our operations</li>
                                <li>In connection with a business transaction</li>
                            </ul>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Data Security</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We implement appropriate technical and organizational measures to protect your personal
                                information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. Your Rights</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">
                                You have the right to:
                            </p>
                            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Object to processing of your information</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">6. Contact Us</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                If you have questions about this Privacy Policy, please contact us at:
                                <br>
                                <a href="mailto:privacy@syntaniumenergy.com"
                                    class="text-red-500 hover:text-red-600">privacy@syntaniumenergy.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
    isOpen.value = newVal
})

const closeModal = () => {
    emit('update:modelValue', false)
}

// Prevent body scroll when modal is open
watch(isOpen, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

@keyframes slide-up {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
</style>
