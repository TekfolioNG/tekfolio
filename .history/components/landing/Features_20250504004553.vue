<template>
  <!-- Reduced top padding -->
  <section class="relative bg-white py-10 md:py-14 lg:py-16">
    <div class="container mx-auto px-6 md:px-8 lg:px-12">
      <!-- Header Section - Reduced margin -->
      <div class="mb-8 md:mb-10">
        <!-- Rider -->
        <div class="flex items-center mb-2">
          <div class="w-10 h-0.5 bg-yellow mr-3"></div>
          <h5 class="text-xs md:text-sm uppercase tracking-wider font-normal text-gray-600">WHO WE ARE</h5>
        </div>

        <!-- Main Heading -->
        <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 leading-tight"
          style="font-family: 'Barlow Condensed', sans-serif;">
          People. Projects. Premium Performance.
        </h3>

        <!-- Subheading -->
        <h4 class="text-lg md:text-xl text-gray-600 font-normal italic">
          — PPIL delivers value where it matters most.
        </h4>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
        <!-- Text Content (3/4 width) -->
        <div class="lg:col-span-3 space-y-5">
          <p class="text-base md:text-lg text-gray-900">
            PPIL is one of Nigeria's most trusted hybrid construction and infrastructure firms — bringing together
            engineering, project management, and facility services under one roof. For over two decades, we have been
            helping to shape cities
            and communities in Nigeria and West Africa through high-impact projects that deliver true value.
          </p>
          <p class="text-base md:text-lg text-gray-900">
            From urban road construction to energy infrastructure, industrial complexes to facility upgrades — we
            provide tailored solutions backed by technical know-how, deep local insight, and a clear focus on quality.
          </p>
          <p class="text-base md:text-lg text-gray-900">
            Our team is made up of experienced professionals who think beyond the blueprint, using smart,
            forward-thinking approaches to deliver projects that are built to last. With every project, we aim to exceed
            expectations — not just with the final product, but with how we deliver it.
          </p>
          <p class="text-base md:text-lg text-gray-700">
            Whether you're a public agency, private investor, or development partner, choosing PPIL means working with a
            team that's focused, agile, and fully invested in your success.
          </p>
          <NuxtLink to="/who-we-are"
            class="inline-block px-6 py-2.5 bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-300 mt-4">
            About Us →
          </NuxtLink>
        </div>

        <!-- Stats Column with animated counters -->
        <div class="lg:col-span-1 space-y-4 -mt-8">
          <div v-for="(stat, index) in stats" :key="index"
            class="bg-gray-50 p-4 rounded-lg border border-gray-100 w-full text-center shadow-enhanced">
            <h3 class="text-3xl font-bold text-primary mb-1">
              <span ref="counterRefs" :data-target="stat.targetValue" :data-prefix="stat.prefix || ''"
                :data-suffix="stat.suffix || ''" class="counter">0</span>
            </h3>
            <p class="text-sm text-gray-700 leading-tight">
              <template v-for="(line, i) in stat.labelLines" :key="i">
                {{ line }}<br v-if="i < stat.labelLines.length - 1">
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Stats with configuration for counter animation
const stats = [
  {
    targetValue: 15,
    suffix: "+",
    labelLines: ["Years of", "Delivering Projects"]
  },
  {
    targetValue: 50,
    suffix: "+",
    labelLines: ["Completed", "Infrastructure &", "Facility Projects"]
  },
  {
    targetValue: 8,
    labelLines: ["Sectors", "Served Nationwide"]
  },
  {
    targetValue: 1,
    labelLines: ["Goal", "Delivering Value", "that Endures"]
  }
];

const counterRefs = ref([]);

onMounted(() => {
  // Set up intersection observer to trigger counter animation when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start the counter animation for all counters
        document.querySelectorAll('.counter').forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';

          let startValue = 0;
          const duration = 2000; // Animation duration in milliseconds
          const increment = target / (duration / 16); // Update roughly every 16ms for smooth animation

          const updateCounter = () => {
            startValue += increment;

            if (startValue < target) {
              counter.textContent = prefix + Math.floor(startValue) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = prefix + target + suffix;
            }
          };

          updateCounter();
        });

        // Unobserve once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  // Start observing the stats column
  const statsSection = document.querySelector('.lg\\:col-span-1');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<style scoped>
/* Custom underline effect */
.bg-yellow {
  background-color: #FFB81C;
}

/* Primary color from your Tailwind config */
.bg-primary {
  background-color: #003366;
}

.bg-primary-dark {
  background-color: #002244;
}

.text-primary {
  color: #003366;
}

/* Enhanced shadow for stat cards */
.shadow-enhanced {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.shadow-enhanced:hover {
  box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.2), 0 10px 15px -8px rgba(0, 0, 0, 0.15);
}

/* Smooth hover transitions */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Counter animation */
.counter {
  display: inline-block;
  min-width: 1em;
  /* Prevents layout shift during animation */
}

/* Responsive adjustments */
@media (max-width: 1023px) {

  .lg\:col-span-3,
  .lg\:col-span-1 {
    grid-column: span 1;
  }

  .space-y-4>*+* {
    margin-top: 1rem;
  }

  /* Reset negative margin on mobile */
  .-mt-8 {
    margin-top: 1rem;
  }

  @media (max-width: 1023px) {
    .lg\:col-span-3 .inline-block {
      display: block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      width: fit-content;
    }
  }
}
</style>