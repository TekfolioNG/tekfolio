<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image2.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <!-- Content container shifted slightly lower -->
    <div class="container mx-auto px-6 h-full flex items-center pt-24 md:pt-16 relative z-10">
      <div class="max-w-3xl text-white">
        <!-- Main heading with responsive layout -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <div class="flex flex-wrap items-baseline">
            <span ref="wordSwitcher" class="text-blue-300 font-black inline-block min-w-[120px] glow-text"></span>
            <span class="lowercase font-extrabold ml-2 md:ml-3">
              <span class="md:hidden">business</span>
              <span class="hidden md:inline">business solutions that work</span>
            </span>
          </div>
          <span class="lowercase font-extrabold block md:hidden mt-2">solutions that work</span>
        </h1>

        <!-- Description with slightly reduced size -->
        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed text-white">
          Achieve more with scalable, next-gen websites and apps. Our versed and innovative team of tech geeks helps
          bring your vision to life and maximise your business's potential with modern, user-optimized software.
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
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

onMounted(() => {
  if (!wordSwitcher.value) return;

  // Initialize with first word
  wordSwitcher.value.textContent = words[0];

  const animateText = (element, newText) => {
    let iterations = 0;
    const originalText = element.textContent;
    const length = Math.max(originalText.length, newText.length);

    const interval = setInterval(() => {
      element.textContent = originalText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return newText[index] || "";
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iterations >= length) {
        clearInterval(interval);
        element.textContent = newText;
      }

      iterations += 1 / 3;
    }, 30);
  };

  // Create word switching timeline
  const tl = gsap.timeline({ repeat: -1 });

  words.forEach((word, index) => {
    const nextIndex = (index + 1) % words.length;

    // Hold current word
    tl.to({}, { duration: 2 })
      // Animate to next word with letter scramble
      .call(() => {
        animateText(wordSwitcher.value, words[nextIndex]);
      })
      // Hold visible
      .to({}, {
        duration: 3
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

/* Glowing text effect */
.glow-text {
  text-shadow:
    0 0 8px rgba(147, 197, 253, 0.7),
    0 0 15px rgba(147, 197, 253, 0.5);
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
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .glow-text {
    text-shadow:
      0 0 5px rgba(147, 197, 253, 0.7),
      0 0 10px rgba(147, 197, 253, 0.5);
  }

  .btn-primary,
  .btn-primary:hover {
    background-color: #3b82f6;
    transform: none;
  }

  .btn-secondary,
  .btn-secondary:hover {
    background-color: transparent;
    color: white;
    transform: none;
  }
}
</style>