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

    <!-- Content - shifted right with additional padding and moved slightly lower -->
    <div class="container mx-auto pl-8 md:pl-16 lg:pl-20 pr-4 h-full flex items-center pt-16 relative z-10">
      <div class="max-w-3xl text-white ml-4 md:ml-8">
        <!-- Main heading with single line layout and adjusted size -->
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 flex flex-wrap items-center md:whitespace-nowrap">
          <span class="flex md:inline">
            <span ref="wordSwitcher"
              class="text-blue-300 font-black inline-block min-w-[120px] mr-2 word-switcher-effect"></span>
            <span class="lowercase">business</span>
          </span>
          <span class="lowercase md:ml-2">solutions that work</span>
        </h1>

        <!-- Description with enhanced contrast and slightly reduced size -->
        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed text-white">
          Achieve more with scalable, next-gen websites and apps. Our versed and innovative team of tech geeks helps
          bring your vision to life and maximise your business's potential with modern, user-optimized software.
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
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

// Register ScrambleTextPlugin
gsap.registerPlugin(ScrambleTextPlugin);

const wordSwitcher = ref(null);
const words = ['Smart', 'Simple', 'Secure'];

onMounted(() => {
  if (!wordSwitcher.value) return;

  // Initialize with first word
  wordSwitcher.value.textContent = words[0];

  // Create word switching timeline with scramble text effect
  const tl = gsap.timeline({ repeat: -1 });

  words.forEach((word, index) => {
    const nextIndex = (index + 1) % words.length;

    // Hold current word
    tl.to({}, { duration: 2 })
      // Scramble to next word with letters instead of binary
      .to(wordSwitcher.value, {
        duration: 1.2,
        scrambleText: {
          text: words[nextIndex],
          chars: "01",
          revealDelay: 0.3,
          speed: 0.4,
          newClass: "text-blue-300"
        },
        ease: "power2.inOut"
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

/* Extra styles for scramble text animation */
@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.text-blink {
  animation: blink 1s infinite;
}

/* Word switcher special effects */
.word-switcher-effect {
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.7), 0 0 20px rgba(96, 165, 250, 0.5);
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
  letter-spacing: 0.5px;
}

/* Fix hover effect on mobile */
@media (max-width: 768px) {
  h1 {
    font-size: 2.25rem;
    line-height: 1.2;
  }

  .lowercase {
    font-size: 0.95em;
  }

  p {
    font-size: 1rem;
  }


/* Ensure button hover effects work on all devices including mobile */
.btn-primary:active {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

.btn-secondary:active {
  background-color: white;
  color: #1d4ed8;
  transform: translateY(-2px);
}
}

</style>