<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage and gradient overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <!-- Image with CSS transform to horizontally flip/invert -->
      <img src="~/assets/img/tekfolio-hero-image.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" priority fetchpriority="high" preload />
      <!-- Darker gradient overlay for better text contrast -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <!-- Content - centered on mobile, shifted right on desktop -->
    <div class="container mx-auto px-4 md:pl-16 lg:pl-20 md:pr-4 h-full flex items-center pt-16 relative z-10">
      <div class="max-w-3xl text-white w-full md:ml-8 text-center md:text-left">
        <!-- Main heading with improved mobile layout -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
          <!-- Mobile version (displays only on small screens) -->
          <div class="flex flex-col md:hidden">
            <div class="flex items-center justify-center space-x-2">
              <span ref="wordSwitcherMobile" class="text-blue-300 font-black word-switcher-effect text-3xl"></span>
              <span class="lowercase">business</span>
            </div>

            <span class="lowercase">solutions that work</span>
          </div>

          <!-- Desktop version (hidden on mobile) -->
          <div class="hidden md:flex md:flex-wrap md:items-center">
            <span class="flex">
              <span ref="wordSwitcher"
                class="text-blue-300 font-black inline-block min-w-[120px] mr-2 word-switcher-effect"></span>
              <span class="lowercase">business</span>
            </span>
            <span class="lowercase md:ml-2">solutions that work</span>
          </div>
        </h1>

        <!-- Description with enhanced contrast and slightly reduced size -->
        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed text-white">
          Achieve more with scalable, next-gen digital products. Our versed and innovative team
          <span class="hidden md:inline"><br /></span>
          of tech geeks breathe life into your vision and maximize your business's potential with modern,
          secure, and user-optimized software and strategies.
          <b><i>Faster than you'd imagined.</i></b>
        </p>

        <!-- Buttons with Wave Animation -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NuxtLink to="/about" class="btn-primary btn-wave">
            <span class="btn-text">How We're Different</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary btn-wave">
            <span class="btn-text">Request a Demo</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { onMounted, ref } from 'vue';

// Register ScrambleTextPlugin
gsap.registerPlugin(ScrambleTextPlugin);

const wordSwitcher = ref(null);
const wordSwitcherMobile = ref(null);
const words = ['Smart', 'Simple', 'Secure'];

onMounted(() => {
  if (wordSwitcher.value) {
    wordSwitcher.value.textContent = words[0];

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
  }

  // Create animation for mobile version
  if (wordSwitcherMobile.value) {
    // Initialize with first word
    wordSwitcherMobile.value.textContent = words[0];

    // Create word switching timeline with scramble text effect
    const tlMobile = gsap.timeline({ repeat: -1 });

    words.forEach((word, index) => {
      const nextIndex = (index + 1) % words.length;

      // Hold current word
      tlMobile.to({}, { duration: 2 })
        // Scramble to next word with letters instead of binary
        .to(wordSwitcherMobile.value, {
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
  }
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

/* Enhanced Button Base Styles */
.btn-primary,
.btn-secondary {
  display: inline-block;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Primary Button with Wave Effect */
.btn-primary {
  background-color: #01348F;
  color: white;
  border: 2px solid #01348F;
}

.btn-primary:hover {
  background-color: #1d8ad8;
  border-color: #1d8ad8;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(29, 138, 216, 0.3);
}

/* Secondary Button with Wave Effect */
.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: white;
  color: #01348F;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

/* Wave Animation Effect */
.btn-wave {
  z-index: 1;
}

.btn-wave::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent);
  transition: left 0.5s;
  z-index: -1;
}

.btn-wave:hover::before {
  left: 100%;
}

/* Alternative: Ripple Wave Effect */
.btn-wave::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  z-index: -1;
}

.btn-wave:hover::after {
  width: 300px;
  height: 300px;
}

/* Text should stay above wave effects */
.btn-text {
  position: relative;
  z-index: 2;
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

/* Mobile optimizations */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .lowercase {
    font-size: 0.95em;
  }

  p {
    font-size: 1rem;
  }

  /* Mobile touch interactions */
  .btn-primary:active {
    background-color: #1d8ad8;
    transform: translateY(-2px);
  }

  .btn-secondary:active {
    background-color: white;
    color: #01348F;
    transform: translateY(-2px);
  }

  /* Reduce wave effect intensity on mobile */
  .btn-wave::after {
    transition: width 0.3s, height 0.3s;
  }

  .btn-wave:hover::after {
    width: 200px;
    height: 200px;
  }
}
</style>