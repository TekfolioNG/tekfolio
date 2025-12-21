<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto">
            <!-- Contact Cards -->
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <!-- Address Card -->
                <div
                    class="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <LocationIcon />
                    </div>
                    <h3 class="text-xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                        Our Location
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                        11 Oromineke Layout, Off Wogu Street, D-Line, Port Harcourt, Nigeria
                    </p>
                </div>

                <!-- Phone Card -->
                <div
                    class="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <PhoneIcon />
                    </div>
                    <h3 class="text-xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                        Call Us
                    </h3>
                    <a href="tel:+2348148571524"
                        class="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300">
                        (+234) 814 857 1524
                    </a>
                </div>

                <!-- Email Card -->
                <div
                    class="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div
                        class="w-16 h-16 bg-red-500 rounded-xl mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <EmailIcon />
                    </div>
                    <h3 class="text-xl font-barlow font-bold text-gray-900 dark:text-white mb-4">
                        Email Us
                    </h3>
                    <a href="mailto:info@syntaniumenergy.com"
                        class="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 break-all">
                        info@syntaniumenergy.com
                    </a>
                </div>
            </div>

            <!-- Map Section (unchanged) -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <!-- ... map content remains the same ... -->
            </div>
        </div>
    </section>
</template>

<script setup>
// Icon components for better organization
const LocationIcon = {
    render() {
        return h('svg', {
            class: 'w-8 h-8 text-white',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24'
        }, [
            h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '2',
                d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            })
        ]);
    }
};

const PhoneIcon = {
    render() {
        return h('svg', {
            class: 'w-8 h-8 text-white',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24'
        }, [
            h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '2',
                d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            })
        ]);
    }
};

const EmailIcon = {
    render() {
        return h('svg', {
            class: 'w-8 h-8 text-white',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24'
        }, [
            h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '2',
                d: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            })
        ]);
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}
</style>