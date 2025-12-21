<template>
    <section class="py-16 bg-[#f8f5f0] px-6">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Climate-Smart Agriculture Card -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100"
                    @mouseenter="hoverCard(0)" @mouseleave="resetCard(0)">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-10 h-10 rounded-lg bg-[#406112]/10 flex items-center justify-center mr-3">
                                <Icon name="mdi:leaf" class="w-5 h-5 text-[#406112]" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-800">Climate-Smart Agriculture</h3>
                        </div>
                        <div class="pl-13">
                            <h4 class="text-md font-semibold text-gray-700 mb-2">Farming That Protects the Future</h4>
                            <p class="text-gray-600 mb-4 text-sm leading-relaxed">We support smallholder farmers with
                                sustainable practices that increase yields, restore soil health, and reduce
                                environmental impact.</p>
                            <NuxtLink to="/services/agriculture"
                                class="inline-flex items-center text-[#406112] font-medium text-sm group-hover:underline">
                                Learn More
                                <Icon name="heroicons:arrow-right"
                                    class="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-[#406112] to-[#5a7d1a] transition-all duration-500"
                        :style="{ width: cardStates[0] ? '100%' : '0%' }"></div>
                </div>

                <!-- Carbon Sequestration Card -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100"
                    @mouseenter="hoverCard(1)" @mouseleave="resetCard(1)">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-10 h-10 rounded-lg bg-[#a86414]/10 flex items-center justify-center mr-3">
                                <Icon name="mdi:molecule-co2" class="w-5 h-5 text-[#a86414]" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-800">Carbon Sequestration</h3>
                        </div>
                        <div class="pl-13">
                            <h4 class="text-md font-semibold text-gray-700 mb-2">Putting Carbon Back Where It Belongs
                            </h4>
                            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Our biochar process locks carbon into
                                the soil—reducing emissions while improving farmland productivity and resilience.</p>
                            <NuxtLink to="/services/carbon"
                                class="inline-flex items-center text-[#a86414] font-medium text-sm group-hover:underline">
                                Learn More
                                <Icon name="heroicons:arrow-right"
                                    class="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-[#a86414] to-[#c47d2b] transition-all duration-500"
                        :style="{ width: cardStates[1] ? '100%' : '0%' }"></div>
                </div>

                <!-- Ecofuel Briquettes Card -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100"
                    @mouseenter="hoverCard(2)" @mouseleave="resetCard(2)">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-10 h-10 rounded-lg bg-[#406112]/10 flex items-center justify-center mr-3">
                                <Icon name="mdi:fire" class="w-5 h-5 text-[#406112]" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-800">Ecofuel Briquettes</h3>
                        </div>
                        <div class="pl-13">
                            <h4 class="text-md font-semibold text-gray-700 mb-2">Clean Energy from Farm Waste</h4>
                            <p class="text-gray-600 mb-4 text-sm leading-relaxed">We turn sawdust and rice husk into
                                briquettes that burn cleaner and longer—offering a safe, affordable alternative to
                                firewood and charcoal.</p>
                            <NuxtLink to="/services/ecofuel"
                                class="inline-flex items-center text-[#406112] font-medium text-sm group-hover:underline">
                                Learn More
                                <Icon name="heroicons:arrow-right"
                                    class="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-[#406112] to-[#5a7d1a] transition-all duration-500"
                        :style="{ width: cardStates[2] ? '100%' : '0%' }"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const cardStates = ref([false, false, false])

const hoverCard = (index) => {
    cardStates.value = [false, false, false]
    cardStates.value[index] = true
}

const resetCard = (index) => {
    cardStates.value[index] = false
}
</script>