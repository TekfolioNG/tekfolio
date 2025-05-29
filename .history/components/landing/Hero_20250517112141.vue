<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage and gradient overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image2.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <!-- Content container -->
    <div class="container mx-auto px-6 h-full flex items-center relative z-10">
      <div class="max-w-2xl text-white">
        <!-- Main heading optimized for mobile -->
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
          <div class="flex flex-wrap items-baseline leading-tight">
            <span ref="wordSwitcher"
              class="text-blue-300 font-black inline-block min-w-[100px] word-switcher-effect"></span>
            <span class="lowercase">,</span>
          </div>
          <div class="lowercase">
            <span class="block md:inline">customized business</span>
            <span class="block md:inline">solutions that work</span>
          </div>
        </h1>

        <!-- Description with optimized line breaks -->
        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed text-white">
          Achieve more with scalable,<br class="hidden md:inline">
          next-gen websites and apps.<br>
          Our expert team delivers<br class="hidden md:inline">
          user-optimized software<br>
          that maximizes your potential.<br>
          <span class="font-semibold italic">Faster than you'd imagined.</span>
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/about" class="btn-primary">
            How We're Different
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            Request a Demo
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const wordSwitcher = ref(null);
const words = ['Smart', 'Simple', 'Secure'];

onMounted(() => {
  if (!wordSwitcher.value) return;

  // Initialize with first word
  wordSwitcher.value.textContent = words[0];

  // Create word switching timeline
  const tl = gsap.timeline({ repeat: -1 });

  words.forEach((word, index) => {
    const nextIndex = (index + 1) % words.length;

    // Fade animation
    tl.to(wordSwitcher.value, {
      duration: 0.5,
      opacity: 0,
      y: -10,
      ease: "power2.in",
      onComplete: () => {
        wordSwitcher.value.textContent = words[nextIndex];
      }
    })
      .to(wordSwitcher.value, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out"
      })
      .to({}, { duration: 2 }); // Pause between words
  });
});
</script>

<style scoped>
/* Edge-to-edge coverage */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Text styling */
.lowercase {
  text-transform: lowercase;
}

/* Button styles */
.btn-primary {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-primary:hover,
.btn-primary:active {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

.btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid white;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-secondary:hover,
.btn-secondary:active {
  background-color: white;
  color: #1d4ed8;
  transform: translateY(-2px);
}

/* Word switcher effects */
.word-switcher-effect {
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.7);
  letter-spacing: 0.5px;
  margin-right: 0.25rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  .word-switcher-effect {
    min-width: 90px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.75rem 1.25rem;
  }
}
</style>