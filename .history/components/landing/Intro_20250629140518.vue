<template>
  <!-- Hero-style layout with diagonal accent -->
  <section class="relative bg-gradient-to-br from-green-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
    <!-- Subtle geometric background -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full blur-2xl"></div>
    </div>

    <div class="container mx-auto px-6 md:px-8 lg:px-12 relative">
      <!-- Header with centered approach -->
      <div class="text-center mb-12 md:mb-16">
        <!-- Company identifier -->
        <div class="inline-flex items-center mb-4">
          <div class="w-8 h-0.5 bg-accent mr-3"></div>
          <span class="text-sm uppercase tracking-wider font-medium text-gray-600">VERA VERDE LIMITED</span>
          <div class="w-8 h-0.5 bg-accent ml-3"></div>
        </div>

        <!-- Main value proposition -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
          Turning agricultural waste into clean energy and enriched soil
        </h2>
      </div>

      <!-- Single column content layout -->
      <div class="max-w-5xl mx-auto mb-16">
        <div class="prose prose-lg max-w-none">
          <p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            <span class="font-semibold text-primary">Vera Verde</span> means <span class="italic">True Green</span>.
            We're on a mission to cut greenhouse gas emissions by turning agricultural waste like rice husk and sawdust
            into clean-burning briquettes and biochar.
          </p>

          <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Through our <span class="font-semibold text-primary">ecofuel briquettes</span> and <span
              class="font-semibold text-primary">Biochar</span>, we help cut emissions and enrich farmlands by locking
            carbon directly into the soil. Our briquettes provide a sustainable fuel alternative, while our biochar
            helps sequester carbon in the soil, improving farmland, boosting yields, and fighting climate change at the
            root.
          </p>

          <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            We're not just reducing carbon; we're building better harvests, cleaner energy, and climate-resilient
            communities. With the right partners and support, we aim to scale our work toward certified carbon credits
            and greater environmental impact.
          </p>

          <div class="max-w-3xl mx-auto">
            <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p class="text-base md:text-lg text-gray-800 italic leading-relaxed">
                At Vera Verde, we believe true sustainability comes from solutions that benefit both the environment and
                local communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats section - horizontal layout at bottom -->
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          <div v-for="(stat, index) in stats" :key="index"
            class="group bg-white p-4 lg:p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-elevated hover:border-primary/20 transition-all duration-500 text-center">

            <!-- Large number display -->
            <div class="mb-2">
              <span class="text-xl lg:text-2xl font-black text-primary block leading-none">
                <span ref="counterRefs" :data-target="stat.targetValue" :data-prefix="stat.prefix || ''"
                  :data-suffix="stat.suffix || ''" class="counter">0</span>
              </span>
            </div>

            <!-- Stat description -->
            <div class="space-y-1">
              <h4 class="text-xs lg:text-sm font-semibold text-gray-900 leading-tight">
                {{ stat.title }}
              </h4>
              <p class="text-xs text-gray-600 leading-snug">
                {{ stat.description }}
              </p>
            </div>

            <!-- Subtle accent line -->
            <div
              class="w-full h-0.5 bg-gradient-to-r from-accent to-transparent mt-3 group-hover:from-primary transition-colors duration-500">
            </div>
          </div>
        </div>

        <!-- About Us Button -->
        <div class="text-center">
          <NuxtLink to="/about-us"
            class="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg">
            Learn more about us →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Updated stats for Vera Verde
const stats = [
  {
    targetValue: 100,
    suffix: "+",
    title: "Tons of Waste Processed",
    description: "Converting agricultural waste into valuable products"
  },
  {
    targetValue: 500,
    suffix: "+",
    title: "Tons of CO2 Reduced",
    description: "Through our clean energy solutions"
  },
  {
    targetValue: 50,
    suffix: "+",
    title: "Farms Impacted",
    description: "Improved soil quality with our biochar"
  },
  {
    targetValue: 1,
    title: "Clear Mission",
    description: "True Green solutions for a sustainable future"
  }
];

const counterRefs = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all counters with staggered timing
        document.querySelectorAll('.counter').forEach((counter, index) => {
          setTimeout(() => {
            const target = parseInt(counter.getAttribute('data-target'));
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';

            let startValue = 0;
            const duration = 2500;
            const increment = target / (duration / 16);

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
          }, index * 150); // Stagger animation by 150ms per item
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe the stats section
  const statsSection = document.querySelector('.max-w-7xl');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<style scoped>
/* Brand colors */
.bg-primary {
  background-color: #406112;
}

.text-primary {
  color: #406112;
}

.border-primary {
  border-color: #406112;
}

.bg-primary-dark {
  background-color: #2f4a0d;
}

.bg-accent {
  background-color: #E6A619;
}

.from-accent {
  --tw-gradient-from: #E6A619;
}

.to-accent {
  --tw-gradient-to: #E6A619;
}

.from-primary {
  --tw-gradient-from: #406112;
}

/* Enhanced shadows */
.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-elevated {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Typography enhancements */
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1.5rem;
}

/* Counter animation improvements */
.counter {
  display: inline-block;
  font-variant-numeric: tabular-nums;
  min-width: 2ch;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .grid-cols-2.md\:grid-cols-3.lg\:grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid-cols-2.md\:grid-cols-3.lg\:grid-cols-4 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-500 {
  transition-duration: 500ms;
}

/* Group hover effects */
.group:hover .group-hover\:from-primary {
  --tw-gradient-from: #406112;
}
</style>