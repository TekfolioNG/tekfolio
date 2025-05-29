<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage and gradient overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image2.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <!-- Content shifted down and right -->
    <div class="container mx-auto px-4 h-full flex items-center relative z-10 pt-16 pl-12 md:pl-20 lg:pl-32">
      <div class="max-w-3xl text-white">
        <!-- Main heading with single line layout -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
          <span ref="wordSwitcher" class="text-blue-300 font-black inline-block min-w-[110px]"></span>
          <span class="lowercase font-extrabold">business solutions that work</span>
        </h1>

        <!-- Description with slightly reduced size -->
        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed text-white">
          Achieve more with scalable, next-gen websites and apps. Our versed and innovative team of tech geeks helps
          bring your vision to life and maximise your business's full potential with modern, user-optimized software.
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
const words = ['SMART', 'SIMPLE', 'SECURE'];

onMounted(() => {
  if (!wordSwitcher.value) return;

  // Initialize with first word
  wordSwitcher.value.textContent = words[0];
  gsap.set(wordSwitcher.value, {
    opacity: 1,
    scale: 1
  });

  // Create word switching timeline
  const tl = gsap.timeline({ repeat: -1 });

  words.forEach((word, index) => {
    const nextIndex = (index + 1) % words.length;

    // Hold current word
    tl.to({}, { duration: 2 })
      // Fade out current word
      .to(wordSwitcher.value, {
        duration: 0.5,
        opacity: 0,
        y: -10,
        ease: "power2.in",
        onComplete: () => {
          wordSwitcher.value.textContent = words[nextIndex];
        }
      })
      // Fade in next word from bottom
      .fromTo(wordSwitcher.value,
        { opacity: 0, y: 20 },
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power3.out"
        }
      );
  });

  // Initial animation
  gsap.from(wordSwitcher.value, {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power3.out"
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

/* Font weights */
.font-black {
  font-weight: 900;
  /* Thickest weight for switcher */
}

.font-extrabold {
  font-weight: 800;
  /* Slightly less than switcher */
}

/* Button styles */
.btn-primary {
  display: inline-block;
  background-color: #3b82f6;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-primary:hover {
  background-color: #2563eb;
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
  color: #2563eb;
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
    line-height: 1.2;
    white-space: normal;
  }

  .lowercase {
    font-size: 0.9em;
  }

  p {
    font-size: 1rem;
  }
}
</style>