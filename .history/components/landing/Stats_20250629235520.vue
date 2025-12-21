<template>
    <!-- Impact Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <!-- Subtle background patterns -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <!-- Main content grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                <!-- Left Column: Image + SDG Targets -->
                <div class="order-1 lg:order-1 space-y-12">
                    <!-- Enhanced Image with overlay -->
                    <div class="relative group">
                        <div
                            class="w-full h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
                            <img src="~/assets/img/slider1-veraverde.jpg" alt="Impact visualization"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <!-- Gradient overlay for better text readability -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                            </div>
                            <!-- Floating impact badge -->
                            <div
                                class="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span class="text-sm font-semibold text-gray-800">Live Impact</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Enhanced SDG Targets Section -->
                    <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                        <div class="mb-8">
                            <div class="flex items-center space-x-3 mb-4">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-primary to-green-600 rounded-xl flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2
                                    class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    SDG Targets</h2>
                            </div>
                            <p class="text-lg text-gray-600 leading-relaxed">
                                Our work directly supports these United Nations Sustainable Development Goals
                            </p>
                        </div>

                        <!-- Enhanced SDG Grid -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <!-- SDG 13: Climate Action -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <!-- Glow effect on hover -->
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">13</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">Climate Action
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 15: Life on Land -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M14,6l-1,-2l-1,2l-1,-1l-1,1l-1,-1l-1,1l-1,-1l-1,1l-1,-1l-1,1L4,5v2c0,2.21 1.79,4 4,4s4,-1.79 4,-4V5l-1,1z" />
                                            <path d="M20,15H4v2h16v-2z" />
                                            <path d="M20,19H4v2h16v-2z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">15</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">Life on Land</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Continue with the same pattern for other SDGs -->
                            <!-- SDG 12: Responsible Consumption -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
                                            <path d="M10.5,8.5L9,10L12,13L18,7L16.5,5.5L12,10L10.5,8.5Z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">12</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">Responsible
                                                Consumption</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 2: Zero Hunger -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12,3L8,7.58L6.36,6L2,10.58L3.42,12L6.36,9L8,10.58L12,6.5L16,10.58L17.64,9L22,13.58L20.58,15L17.64,12L16,13.58L12,8.5L8,12.58L12,17L16,12.58L12,8.5Z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">2</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">Zero Hunger</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 1: No Poverty -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H14V16H10V13H7V9H10V6H14V9H17V13Z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">1</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">No Poverty</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 8: Decent Work -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M14,12H19.5L18,10.5L19.5,9L23,12.5L19.5,16L18,14.5L19.5,13H14V12M10,12H4.5L6,10.5L4.5,9L1,12.5L4.5,16L6,14.5L4.5,13H10V12Z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">8</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">Decent Work</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 7: Clean Energy -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">7</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">Clean Energy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SDG 9: Innovation -->
                            <div class="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                                <div
                                    class="relative bg-gradient-to-br from-primary to-green-700 rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300">
                                    </div>
                                    <div class="relative flex items-center space-x-3">
                                        <svg class="w-6 h-6 text-white flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H5V22H19V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9M11,4H13V6H11V4M7,13H17V16H16V20H8V16H7V13Z" />
                                        </svg>
                                        <div class="min-w-0">
                                            <span class="text-lg font-bold text-white block">9</span>
                                            <p class="text-xs text-white/90 font-medium leading-tight">Innovation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Stats Grid with Better Icons -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <!-- Stat 1 - Grains Produced & Traded -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Wheat/Grain icon -->
                                    <Icon name="mdi:wheat" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat1">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Grains Produced & Traded</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Boosting food production through
                                climate-smart methods</p>
                        </div>
                    </div>

                    <!-- Stat 2 - Farmers Onboarded -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Farmer icon -->
                                    <Icon name="mdi:account-hard-hat" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat2">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Farmers Onboarded</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Empowering smallholder farmers with
                                sustainable practices</p>
                        </div>
                    </div>

                    <!-- Stat 3 - Communities Reached -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Village/Community icon -->
                                    <Icon name="mdi:home-group" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat3">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Communities Reached</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Driving transformation across rural
                                areas</p>
                        </div>
                    </div>

                    <!-- Stat 4 - Hectares Cultivated -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Field/Land icon -->
                                    <Icon name="mdi:texture-box" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat4">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Hectares Cultivated</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Improved soil fertility at scale</p>
                        </div>
                    </div>

                    <!-- Stat 5 - Jobs Created -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Briefcase/Work icon -->
                                    <Icon name="mdi:briefcase-variant" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat5">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Jobs Created</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Dignified employment across value
                                chains</p>
                        </div>
                    </div>

                    <!-- Stat 6 - Storage Acquired -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Storage/Silo icon -->
                                    <Icon name="mdi:silo" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat6">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Storage Acquired (MT)</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Sustainable storage capacity</p>
                        </div>
                    </div>

                    <!-- Stat 7 - Warehouses Available -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Warehouse icon -->
                                    <Icon name="mdi:warehouse" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat7">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Warehouses Available</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Supporting local distribution</p>
                        </div>
                    </div>

                    <!-- Stat 8 - CO₂ Sequestered -->
                    <div
                        class="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="flex-shrink-0 relative">
                                <div
                                    class="w-14 h-14 bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <!-- Leaf/Carbon icon -->
                                    <Icon name="mdi:leaf" class="w-7 h-7 text-primary" />
                                </div>
                                <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#99cc33] rounded-full animate-pulse">
                                </div>
                            </div>
                            <div class="text-3xl md:text-3xl font-bold bg-[#99cc33] bg-clip-text text-transparent"
                                ref="stat8">0</div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-base font-semibold text-gray-900">Tons of CO₂ Sequestered</h3>
                            <p class="text-sm text-gray-900 leading-relaxed mb-0">Through biochar and sustainable land
                                use</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Refs for the stat elements
const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)
const stat4 = ref(null)
const stat5 = ref(null)
const stat6 = ref(null)
const stat7 = ref(null)
const stat8 = ref(null)

// Stats data
const stats = [
    { ref: stat1, value: 1700000, suffix: '' },
    { ref: stat2, value: 850000, suffix: '' },
    { ref: stat3, value: 2700, suffix: '+' },
    { ref: stat4, value: 420000, suffix: '+' },
    { ref: stat5, value: 9000, suffix: '+' },
    { ref: stat6, value: 225000, suffix: '' },
    { ref: stat7, value: 470, suffix: '' },
    { ref: stat8, value: 20, suffix: '' }
]

// Enhanced format number with better formatting
const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
}

// Enhanced animation function with easing
const animateNumber = (element, targetValue, duration = 2500, suffix = '') => {
    let startValue = 0
    const startTime = performance.now()

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)

        const formattedValue = formatNumber(currentValue)
        element.textContent = formattedValue + suffix

        if (progress < 1) {
            requestAnimationFrame(animate)
        } else {
            // Ensure final value is exactly correct
            element.textContent = formatNumber(targetValue) + suffix
        }
    }

    requestAnimationFrame(animate)
}

// Enhanced intersection observer with staggered animations
const observeStats = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const statIndex = stats.findIndex(stat => stat.ref.value === entry.target)
                if (statIndex !== -1) {
                    const { value, suffix } = stats[statIndex]
                    // Stagger animations for visual appeal
                    setTimeout(() => {
                        animateNumber(entry.target, value, 2500, suffix)
                    }, statIndex * 150)
                    observer.unobserve(entry.target)
                }
            }
        })
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    })

    stats.forEach(stat => {
        if (stat.ref.value) {
            observer.observe(stat.ref.value)
        }
    })
}

onMounted(() => {
    observeStats()
})
</script>

<style scoped>
/* Enhanced brand colors with gradients */
.bg-primary {
    background-color: #406112;
}

.text-primary {
    color: #406112;
}

/* Custom shadow utilities */
.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Enhanced transitions */
.transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glassmorphism effect */
.backdrop-blur-sm {
    backdrop-filter: blur(4px);
}

/* Custom gradient text */
.bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:shadow-2xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }

    .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
    }

    .text-5xl {
        font-size: 3rem;
        line-height: 1;
    }
}

/* Animation keyframes */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Custom pulse animation */
@keyframes pulse-soft {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

.animate-pulse {
    animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>