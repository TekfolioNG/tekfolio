<!-- TermsOfServiceModal.vue -->
<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>

            <!-- Modal Content -->
            <div
                class="relative bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[60vh] rounded-xl shadow-2xl overflow-hidden">
                <!-- Header -->
                <div
                    class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
                    <button @click="closeModal"
                        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Content -->
                <div class="px-6 py-6 overflow-y-auto max-h-[calc(60vh-80px)]">
                    <div class="space-y-4 text-sm">

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Acceptance & Use</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                By accessing this website, you agree to these terms. Use the site only for lawful
                                purposes. Do not attempt unauthorized access, transmit malicious code, or impersonate
                                others.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Intellectual Property</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                All content is property of Syntanium Energy and protected by copyright laws.
                                Reproduction or distribution requires express written permission.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Disclaimer & Liability</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                This website is provided "as is" without warranties. We are not liable for indirect or
                                consequential damages from your use of this site. Third-party links are accessed at your
                                own risk.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Modifications & Governing Law
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We reserve the right to modify these terms at any time. Continued use constitutes
                                acceptance. These terms are governed by Nigerian law.
                            </p>
                        </div>

                        <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <p class="text-gray-700 dark:text-gray-300">
                                Questions? Contact us at <a href="mailto:info@literaforge.com"
                                    class="text-[#006688] font-medium">info@literaforge.com</a>
                            </p>
                        </div>
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
    transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>