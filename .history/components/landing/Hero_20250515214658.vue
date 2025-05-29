<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage and gradient overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image2.png" alt="Tekfolio Hero" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 h-full flex items-center relative z-10">
      <div class="max-w-3xl text-white">
        <!-- Main heading with single line layout -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span ref="wordSwitcher" class="text-blue-400 font-bold inline-block min-w-[120px]"></span>
          <span class="lowercase">business solutions that work</span>
        </h1>

        <!-- Description with proper spacing -->
        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed opacity-90">
          Achieve more with scalable, next-gen websites and apps. Our versed and innovative team of tech geeks helps
          bring your vision to life and maximise your business's full potential with modern, user-optimized software.
          Faster than you'd imagined.
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
  gsap.set(wordSwitcher.value, { opacity: 1 });

  // Create word switching timeline
  const tl = gsap.timeline({ repeat: -1 });

  words.forEach((word, index) => {
    const nextIndex = (index + 1) % words.length;

    // Fade out current word
    tl.to(wordSwitcher.value, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        wordSwitcher.value.textContent = words[nextIndex];
      }
    })
      // Fade in next word
      .to(wordSwitcher.value, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
      })
      // Hold visible
      .to({}, {
        duration: 2
      });
  });
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
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .lowercase {
    font-size: 0.9em;
  }

  p {
    font-size: 1rem;
  }
}
</style>