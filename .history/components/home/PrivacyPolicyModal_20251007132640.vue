<!-- PrivacyPolicyModal.vue -->
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
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
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
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Information Collection</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We collect information you provide directly, including contact details, professional
                                information for job applications, and communication preferences.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">How We Use Your Data</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Your information is used to respond to inquiries, process applications, communicate
                                about services, and comply with legal requirements. We do not sell your personal data.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Data Security & Your Rights
                            </h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We implement security measures to protect your information. You have the right to
                                access, correct, or request deletion of your personal data at any time.
                            </p>
                        </div>

                        <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <p class="text-gray-700 dark:text-gray-300">
                                Questions? Contact us at <a href="mailto:info@syntaniumenergy.com"
                                    class="text-red-500 hover:text-red-600 font-medium">legal@syntaniumenergy.com</a>
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
