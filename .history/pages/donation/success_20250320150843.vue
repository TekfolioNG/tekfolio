<!-- pages/donation/success.vue -->
<template>
<div class="max-w-3xl mx-auto py-12 px-4">
    <div v-if="isLoading" class="text-center">
    <p>Verifying your donation...</p>
    <!-- Add a loading spinner here if you want -->
    </div>
    
    <div v-else-if="paymentVerified" class="text-center space-y-6">
    <h1 class="text-3xl font-bold text-green-600">Thank You for Your Donation!</h1>
    <div class="p-6 bg-green-50 rounded-lg">
        <p><strong>Amount:</strong> {{ payment.currency }} {{ payment.amount }}</p>
        <p><strong>Project:</strong> {{ payment.project }}</p>
        <p><strong>Reference:</strong> {{ payment.reference }}</p>
        <p class="text-sm mt-4">A receipt has been sent to your email address.</p>
    </div>
    <div class="mt-8">
        <NuxtLink to="/" class="px-6 py-2 bg-primary text-white rounded-md">
        Return to Homepage
        </NuxtLink>
    </div>
    </div>
    
    <div v-else class="text-center">
    <h1 class="text-3xl font-bold text-red-600">Payment Verification Failed</h1>
    <p class="mt-4">We couldn't verify your payment. If you believe this is an error, please contact us.</p>
    <div class="mt-8">
        <NuxtLink to="/" class="px-6 py-2 bg-primary text-white rounded-md">
        Return to Homepage
        </NuxtLink>
    </div>
    </div>
</div>
</template>

<script setup>
const route = useRoute();
const isLoading = ref(true);
const paymentVerified = ref(false);
const payment = ref({});

onMounted(async () => {
try {
    // Get reference from URL query params
    const reference = route.query.reference;
    
    if (!reference) {
    isLoading.value = false;
    return;
    }
    
    // Verify the payment
    const response = await $fetch('/api/donations/verify', {
    method: 'POST',
    body: { reference }
    });
    
    if (response.status === 'success') {
    paymentVerified.value = true;
    payment.value = {
        reference: response.reference,
        amount: response.amount / 100, // Convert from kobo/cents
        currency: response.currency,
        project: response.metadata.project
    };
    }
} catch (error) {
    console.error('Payment verification failed:', error);
} finally {
    isLoading.value = false;
}
});
definePageMeta({
layout: "landing"
});
</script>