<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" priority fetchpriority="high" preload />
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <div class="container mx-auto px-4 md:pl-16 lg:pl-20 md:pr-4 h-full flex items-center pt-16 relative z-10">
      <div class="max-w-3xl text-white w-full md:ml-8 text-center md:text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
          <div class="flex flex-col md:hidden">
            <div class="flex items-center justify-center space-x-2">
              <span ref="wordSwitcherMobile" class="text-blue-300 font-black word-switcher-effect text-3xl"></span>
              <span class="lowercase">business</span>
            </div>
            <span class="lowercase">solutions that work</span>
          </div>

          <div class="hidden md:flex md:flex-wrap md:items-center">
            <span class="flex">
              <span ref="wordSwitcher"
                class="text-blue-300 font-black inline-block min-w-[120px] mr-2 word-switcher-effect"></span>
              <span class="lowercase">business</span>
            </span>
            <span class="lowercase md:ml-2">solutions that work</span>
          </div>
        </h1>

        <p class="text-lg md:text-xl mt-6 mb-10 leading-relaxed text-white">
          Achieve more with scalable, next-gen digital products. Our versed and innovative team
          <span class="hidden md:inline"><br /></span>
          of tech geeks breathe life into your vision and help you maximize your business's potential with modern,
          secure, and user-optimized software and strategies.
          <br><b><i>Faster than you'd imagined.</i></b></br>
        </p>

        <!-- Buttons with Water Wave Effect -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NuxtLink to="/about" class="btn-primary btn-liquid">
            <span class="btn-text">How We're Different</span>
            <svg class="liquid-wave" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path class="wave-path" d="M0,0 L100,0 L100,30 C80,25 60,35 40,30 C20,25 10,35 0,30 Z" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary btn-liquid">
            <span class="btn-text">Request a Demo</span>
            <svg class="liquid-wave" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path class="wave-path" d="M0,0 L100,0 L100,30 C80,25 60,35 40,30 C20,25 10,35 0,30 Z" />
            </svg>
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
  // Word switching animation (existing code)
  if (wordSwitcher.value) {
    wordSwitcher.value.textContent = words[0];
    const tl = gsap.timeline({ repeat: -1 });
    words.forEach((word, index) => {
      const nextIndex = (index + 1) % words.length;
      tl.to({}, { duration: 2 })
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

  // Mobile word switching (existing code)
  if (wordSwitcherMobile.value) {
    wordSwitcherMobile.value.textContent = words[0];
    const tlMobile = gsap.timeline({ repeat: -1 });
    words.forEach((word, index) => {
      const nextIndex = (index + 1) % words.length;
      tlMobile.to({}, { duration: 2 })
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

  // Water wave effect for buttons - IMPROVED
  const liquidButtons = document.querySelectorAll('.btn-liquid');
  liquidButtons.forEach((button) => {
    const wave = button.querySelector('.liquid-wave');
    const wavePath = button.querySelector('.wave-path');

    // Initial state - wave starts from top
    gsap.set(wave, { opacity: 0, y: '-100%' });

    button.addEventListener('mouseenter', () => {
      // Much faster wave drop animation
      gsap.to(wave, {
        opacity: 1,
        y: '0%',
        duration: 0.2, // Much faster
        ease: 'power3.out'
      });

      // Much faster and more wavy animation
      gsap.to(wavePath, {
        duration: 0.3, // Much faster
        attr: {
          d: 'M0,0 L100,0 L100,40 C85,30 75,50 60,40 C45,30 35,50 20,40 C10,35 5,45 0,40 Z'
        },
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Additional wave morphing for more dynamic effect
      gsap.to(wavePath, {
        duration: 0.25,
        delay: 0.15,
        attr: {
          d: 'M0,0 L100,0 L100,60 C80,45 70,75 50,60 C30,45 20,75 10,60 C5,55 0,65 0,60 Z'
        },
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    });

    button.addEventListener('mouseleave', () => {
      // Much faster wave exit animation upwards
      gsap.to(wave, {
        opacity: 0,
        y: '-100%',
        duration: 0.15, // Much faster
        ease: 'power3.in'
      });
      
      // Kill all wave animations
      gsap.killTweensOf(wavePath);
    });
  });
});
</script>

<style scoped>
/* Edge-to-edge coverage - FIXED */
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

/* Primary Button */
.btn-primary {
  background-color: #01348F;
  color: white;
  border: 2px solid #01348F;
}

/* Secondary Button */
.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

/* Water Wave Effect Styles - FULLY FIXED */
.btn-liquid {
  position: relative;
  z-index: 1;
}

.liquid-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(-100%); /* Start from top */
  z-index: 0;
  pointer-events: none;
}

.wave-path {
  width: 100%;
  height: 100%;
}

/* Primary Button Hover - FIXED */
.btn-primary:hover {
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(29, 138, 216, 0.3);
}

.btn-primary .wave-path {
  fill: #1d8ad8;
}

/* Secondary Button Hover - FIXED */
.btn-secondary:hover {
  color: #01348F !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.btn-secondary .wave-path {
  fill: white;
}

/* Text above wave */
.btn-text {
  position: relative;
  z-index: 2; /* Ensure text stays above wave */
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

  /* Mobile touch interactions - IMPROVED */
  .btn-primary:active {
    background-color: #1d8ad8;
    transform: translateY(-2px);
  }

  .btn-secondary:active {
    background-color: white;
    color: #01348F;
    transform: translateY(-2px);
  }

  /* Water wave effect for mobile touch - FASTER */
  .btn-liquid:active .liquid-wave {
    opacity: 1;
    transform: translateY(0%);
    transition: all 0.2s ease; /* Faster mobile animation */
  }
}

/* Accessibility - reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .liquid-wave {
    animation: none;
  }
  
  .btn-liquid:hover .liquid-wave {
    opacity: 0.3;
    transform: translateY(0%);
    transition: all 0.3s ease;
  }
}
</style>