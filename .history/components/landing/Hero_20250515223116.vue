<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage and gradient overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <!-- Image with CSS transform to horizontally flip/invert -->
      <img src="~/assets/img/tekfolio-hero-image2.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" />
      <!-- Darker gradient overlay for better text contrast -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <!-- Content - shifted right with additional padding and slightly down -->
    <div class="container mx-auto pl-8 md:pl-16 lg:pl-20 pr-4 h-full flex items-center pt-16 relative z-10">
      <div class="max-w-3xl text-white ml-4 md:ml-8">
        <!-- Main heading with single line layout and adjusted size -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 flex flex-wrap items-center whitespace-nowrap">
          <span ref="wordSwitcher" class="text-blue-300 font-black inline-block min-w-[160px] mr-2"></span>
          <span class="lowercase font-medium">business solutions that work</span>
        </h1>

        <!-- Description with enhanced contrast and slightly reduced size -->
        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed text-white font-light">
          Achieve more with scalable, next-gen websites and apps. Our versed and innovative team of tech geeks helps
          bring your vision to life and maximise your business's full potential with modern, user-optimized software.
          <b><i>Faster than you'd imagined.</i></b>
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
import { SplitText } from 'gsap/SplitText';

// Register the necessary plugins
gsap.registerPlugin(SplitText);

const wordSwitcher = ref(null);
const words = ['Smart', 'Simple', 'Secure'];
let currentIndex = 0;

onMounted(() => {
  if (!wordSwitcher.value) return;

  // Initialize with first word
  wordSwitcher.value.textContent = words[0];

  // Create a simpler, more reliable word switching animation
  const rotateWords = () => {
    gsap.to(wordSwitcher.value, {
      duration: 0.5,
      opacity: 0,
      scale: 0.95,
      ease: "power2.in",
      onComplete: () => {
        // Update to next word
        currentIndex = (currentIndex + 1) % words.length;
        wordSwitcher.value.textContent = words[currentIndex];

        // Fade in new word
        gsap.to(wordSwitcher.value, {
          duration: 0.8,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power3.out"
        });
      }
    });
  };

  // Initial entrance animation
  gsap.from(wordSwitcher.value, {
    duration: 1,
    opacity: 0,
    y: -20,
    scale: 0.9,
    filter: "blur(10px)",
    ease: "power3.out"
  });

  // Set up the interval to rotate words
  setInterval(rotateWords, 3000); // 3 seconds per word
});
</script>

<style scoped>
/* Edge-to-edge coverage */
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Text contrast enhancements */
.lowercase {
  text-transform: lowercase;
}

/* Font weight enhancements */
.font-black {
  font-weight: 900;
}

.font-medium {
  font-weight: 600;
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

.btn-primary:hover {
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

.btn-secondary:hover {
  background-color: white;
  color: #1d4ed8;
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2.25rem;
    line-height: 1.2;
    white-space: normal;
  }

  .lowercase {
    font-size: 1em;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>