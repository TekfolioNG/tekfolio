<!-- TermsOfServiceModal.vue -->
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
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
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
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                By accessing and using the Syntanium Energy website, you accept and agree to be bound by
                                these Terms of Service. If you do not agree to these terms, please do not use our
                                website.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Use of Website</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">
                                You agree to use our website only for lawful purposes and in a way that does not
                                infringe upon the rights of others. You must not:
                            </p>
                            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>Use the website in any way that violates applicable laws or regulations</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Transmit any malicious code or harmful content</li>
                                <li>Impersonate any person or entity</li>
                            </ul>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Intellectual
                                Property</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                All content on this website, including text, graphics, logos, and images, is the
                                property of Syntanium Energy and is protected by copyright and other intellectual
                                property laws. You may not reproduce, distribute, or create derivative works without our
                                express written permission.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Services Information
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                The information provided on this website about our services is for general informational
                                purposes only. We reserve the right to modify our services, pricing, and terms at any
                                time without prior notice.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. Third-Party Links
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Our website may contain links to third-party websites. We are not responsible for the
                                content, privacy policies, or practices of these external sites. Access to third-party
                                sites is at your own risk.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">6. Limitation of
                                Liability</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Syntanium Energy shall not be liable for any indirect, incidental, special, or
                                consequential damages arising from your use of this website or inability to use this
                                website, even if we have been advised of the possibility of such damages.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">7. Disclaimer</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                This website is provided "as is" without any warranties, express or implied. We do not
                                warrant that the website will be uninterrupted, error-free, or free from viruses or
                                other harmful components.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">8. Changes to Terms
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We reserve the right to modify these Terms of Service at any time. Continued use of the
                                website after changes constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">9. Governing Law</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                These Terms of Service shall be governed by and construed in accordance with the laws of
                                Nigeria, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">10. Contact Information
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                If you have questions about these Terms of Service, please contact us at:
                                <br>
                                <a href="mailto:legal@syntaniumenergy.com"
                                    class="text-red-500 hover:text-red-600">legal@syntaniumenergy.com</a>
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
