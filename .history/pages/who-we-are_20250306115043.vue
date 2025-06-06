<template>
    <div>
        <!-- Hero/Header Image -->
        <div class="w-full h-48 md:h-64 lg:h-96 relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-[90%]" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="text-white text-center p-4 md:p-8">
                    <h1 class="text-[#CEE377] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Make a Difference
                    </h1>
                    <p class="text-base md:text-xl">Your support transforms lives</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
            <!-- Main Container with Image and Form -->
            <div class="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden mt-4 mb-4 md:mt-8 md:mb-8">
                <!-- Feature Image for Mobile (Visible only on mobile) -->
                <div class="block md:hidden w-full relative h-48">
                    <img src="~/assets/img/toei_support.jpg" alt="Joining hands in support"
                        class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div class="text-white text-center p-4">
                            <h1 class="text-2xl font-bold mb-2">Together We Can</h1>
                            <p class="text-base">Make a lasting impact in our community</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row">
                    <!-- Image Section - Hidden on Mobile -->
                    <div class="hidden md:block w-1/2 relative">
                        <img src="~/assets/img/toei_support.jpg" alt="Joining hands in support"
                            class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <div class="text-white text-center p-8">
                                <h1 class="text-4xl font-bold mb-4">Together We Can</h1>
                                <p class="text-xl">Make a lasting impact in our community</p>
                            </div>
                        </div>
                    </div>

                    <!-- Form Section -->
                    <div class="w-full md:w-1/2 p-6 md:p-8 lg:p-12">
                        <div class="mb-6 md:mb-8">
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Join Us in Creating
                                Hope</h2>
                            <div class="space-y-2 text-gray-600">
                                <p class="text-base md:text-lg">Your contribution creates ripples of positive change in
                                    our
                                    community. Every donation helps build a better tomorrow.</p>
                                <p class="italic text-sm text-gray-500">Select a cause close to your heart.</p>
                            </div>
                        </div>

                        <!-- Impact Cards with Enhanced Design - Adjust for mobile -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                            <div v-for="item in impactCards" :key="item.title"
                                class="text-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                :class="{ 'ring-2 ring-[#009976 bg-gray-100': formData.project === item.value }"
                                @click="formData.project = item.value">
                                <div class="text-2xl md:text-3xl mb-1 md:mb-2">{{ item.icon }}</div>
                                <div class="font-medium text-sm md:text-base text-gray-800">{{ item.title }}</div>
                            </div>
                        </div>

                        <!-- Donation Form -->
                        <form @submit.prevent="initializePayment" class="space-y-4 md:space-y-6">
                            <!-- Project Selection -->
                            <div class="space-y-1">
                                <label for="project" class="block text-sm font-medium text-gray-700">Select
                                    Project</label>
                                <select v-model="formData.project" id="project"
                                    class="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors text-sm md:text-base"
                                    required>
                                    <option value="">Choose a project</option>
                                    <option v-for="item in impactCards" :key="item.value" :value="item.value">
                                        {{ item.title }}
                                    </option>
                                </select>
                            </div>

                            <!-- Personal Information -->
                            <div class="space-y-3 md:space-y-4">
                                <div class="space-y-1">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                                    <input v-model="formData.name" type="text" id="name"
                                        class="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors text-sm md:text-base"
                                        placeholder="Enter your full name" required />
                                </div>

                                <div class="space-y-1">
                                    <label for="email" class="block text-sm font-medium text-gray-700">Your
                                        Email</label>
                                    <input v-model="formData.email" type="email" id="email"
                                        class="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors text-sm md:text-base"
                                        placeholder="Enter your email" required />
                                </div>

                                <div class="space-y-1">
                                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone
                                        (Optional)</label>
                                    <input v-model="formData.phone" type="tel" id="phone"
                                        class="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors text-sm md:text-base"
                                        placeholder="Enter your phone number" />
                                </div>
                            </div>

                            <!-- Currency and Amount Section -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                <div class="space-y-1">
                                    <label for="currency"
                                        class="block text-sm font-medium text-gray-700">Currency</label>
                                    <select v-model="formData.currency" id="currency" @change="updateAmountMin"
                                        class="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors text-sm md:text-base"
                                        required>
                                        <option value="NGN">Naira (₦)</option>
                                        <option value="USD">Dollar ($)</option>
                                    </select>
                                </div>

                                <div class="space-y-1">
                                    <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
                                    <input v-model="formData.amount" type="number" id="amount" :min="minAmount"
                                        class="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009976 focus:border-[#009976 outline-none transition-colors text-sm md:text-base"
                                        placeholder="Enter amount" required />
                                    <p v-if="formData.amount && formData.amount < minAmount"
                                        class="text-xs md:text-sm text-red-500 mt-1">
                                        Minimum amount is {{ formData.currency === 'NGN' ? '₦10,000' : '$15' }}.
                                    </p>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" :disabled="!isValid"
                                class="w-full bg-[#009976 text-white py-2 md:py-3 px-4 md:px-6 rounded-xl hover:bg-[#00B28A] transition-all duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base">
                                <span>Support Project</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </form>

                        <!-- Trust Indicators with Enhanced Design -->
                        <div class="mt-6 pt-4 md:mt-8 md:pt-6 border-t border-gray-200">
                            <div class="grid grid-cols-3 gap-2 md:gap-4 text-center">
                                <div class="p-2 md:p-3">
                                    <span class="text-lg md:text-xl mb-1 md:mb-2 block">🔒</span>
                                    <span class="text-xs md:text-sm text-gray-600">Secure Payment</span>
                                </div>
                                <div class="p-2 md:p-3">
                                    <span class="text-lg md:text-xl mb-1 md:mb-2 block">✨</span>
                                    <span class="text-xs md:text-sm text-gray-600">Tax Deductible</span>
                                </div>
                                <div class="p-2 md:p-3">
                                    <span class="text-lg md:text-xl mb-1 md:mb-2 block">💌</span>
                                    <span class="text-xs md:text-sm text-gray-600">Receipt Provided</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const formData = ref({
    project: '',
    name: '',
    email: '',
    phone: '',
    currency: 'NGN',
    amount: ''
});

const minAmount = ref(10000); // Default to NGN minimum

// Update minimum amount based on currency
const updateAmountMin = () => {
    minAmount.value = formData.value.currency === 'NGN' ? 10000 : 15;
};

// Validate form
const isValid = computed(() => {
    const numAmount = Number(formData.value.amount);
    return (
        formData.value.project &&
        formData.value.name &&
        formData.value.email &&
        numAmount >= minAmount.value
    );
});

// Impact Cards
const impactCards = [
    { title: 'Skills Acquisition', icon: '🎓', value: 'skills' },
    { title: 'Healthcare Outreach', icon: '🏥', value: 'healthcare' },
    { title: 'Community Development', icon: '🤝', value: 'community' },
];

// Initialize Paystack payment
const initializePayment = async () => {
    if (!isValid.value) return;

    try {
        const response = await $fetch('/api/donations/initialize', {
            method: 'POST',
            body: {
                ...formData.value,
                amount: Number(formData.value.amount) * 100, // Paystack expects kobo/cents
            },
        });

        window.location.href = response.data.authorization_url;
    } catch (err) {
        console.error('Payment initialization failed:', err);
        alert('Sorry, there was an error processing your donation. Please try again.');
    }
};
definePageMeta({
    layout: "landing",
});
</script>