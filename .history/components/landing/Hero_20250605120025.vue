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

        <!-- Buttons with Water Wave Animation -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NuxtLink to="/about" class="btn-primary btn-wave" ref="primaryBtn">
            <span class="btn-text">How We're Different</span>
            <div class="wave-container">
              <div class="wave wave-1"></div>
              <div class="wave wave-2"></div>
              <div class="wave wave-3"></div>
            </div>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary btn-wave" ref="secondaryBtn">
            <span class="btn-text">Request a Demo</span>
            <div class="wave-container">
              <div class="wave wave-1"></div>
              <div class="wave wave-2"></div>
              <div class="wave wave-3"></div>
            </div>
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
const primaryBtn = ref(null);
const secondaryBtn = ref(null);
const words = ['Smart', 'Simple', 'Secure'];

onMounted(() => {
  // Word switcher animations (existing code)
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

  // Water wave effect setup
  const setupWaveEffect = (buttonRef) => {
    if (!buttonRef.value) return;

    const waves = buttonRef.value.querySelectorAll('.wave');
    const waveContainer = buttonRef.value.querySelector('.wave-container');
    
    // Set initial state
    gsap.set(waves, { 
      scale: 0,
      opacity: 0,
      transformOrigin: "center center"
    });
    gsap.set(waveContainer, { opacity: 0 });

    const button = buttonRef.value;

    const onMouseEnter = () => {
      // Show wave container
      gsap.to(waveContainer, { 
        opacity: 1, 
        duration: 0.2 
      });

      // Animate waves with staggered timing
      gsap.to(waves, {
        scale: 1.2,
        opacity: 0.6,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });

      // Continuous wave animation
      waves.forEach((wave, index) => {
        gsap.to(wave, {
          scale: 1.5,
          opacity: 0,
          duration: 1.5,
          delay: index * 0.2,
          repeat: -1,
          repeatDelay: 0.8,
          ease: "power2.out"
        });
      });
    };

    const onMouseLeave = () => {
      // Kill all wave animations
      gsap.killTweensOf(waves);
      
      // Hide waves
      gsap.to(waves, { 
        scale: 0, 
        opacity: 0, 
        duration: 0.3,
        ease: "power2.inOut"
      });
      
      gsap.to(waveContainer, { 
        opacity: 0, 
        duration: 0.3,
        delay: 0.1
      });
    };

    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);

    // Cleanup function
    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mouseleave', onMouseLeave);
      gsap.killTweensOf([waves, waveContainer]);
    };
  };

  // Setup wave effects for both buttons
  const cleanupPrimary = setupWaveEffect(primaryBtn);
  const cleanupSecondary = setupWaveEffect(secondaryBtn);

  // Cleanup on unmount
  onUnmounted(() => {
    if (cleanupPrimary) cleanupPrimary();
    if (cleanupSecondary) cleanupSecondary();
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

.btn-primary:hover {
  background-color: #1d8ad8;
  border-color: #1d8ad8;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(29, 138, 216, 0.3);
}

/* Secondary Button */
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

/* Water Wave Effect Styles */
.btn-wave {
  position: relative;
  z-index: 1;
}

.wave-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.wave {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  pointer-events: none;
}

/* Primary button waves - blue theme */
.btn-primary .wave-1 {
  background: radial-gradient(circle, rgba(29, 138, 216, 0.4) 0%, rgba(29, 138, 216, 0.1) 70%, transparent 100%);
  clip-path: polygon(
    0% 60%,
    15% 65%,
    30% 55%,
    45% 70%,
    60% 50%,
    75% 65%,
    90% 55%,
    100% 60%,
    100% 100%,
    0% 100%
  );
}

.btn-primary .wave-2 {
  background: radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(96, 165, 250, 0.08) 70%, transparent 100%);
  clip-path: polygon(
    0% 50%,
    20% 45%,
    40% 60%,
    60% 40%,
    80% 55%,
    100% 45%,
    100% 100%,
    0% 100%
  );
}

.btn-primary .wave-3 {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 70%, transparent 100%);
  clip-path: polygon(
    0% 70%,
    25% 60%,
    50% 75%,
    75% 55%,
    100% 70%,
    100% 100%,
    0% 100%
  );
}

/* Secondary button waves - white/light theme */
.btn-secondary .wave-1 {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%);
  clip-path: polygon(
    0% 60%,
    15% 65%,
    30% 55%,
    45% 70%,
    60% 50%,
    75% 65%,
    90% 55%,
    100% 60%,
    100% 100%,
    0% 100%
  );
}

.btn-secondary .wave-2 {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.08) 70%, transparent 100%);
  clip-path: polygon(
    0% 50%,
    20% 45%,
    40% 60%,
    60% 40%,
    80% 55%,
    100% 45%,
    100% 100%,
    0% 100%
  );
}

.btn-secondary .wave-3 {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%);
  clip-path: polygon(
    0% 70%,
    25% 60%,
    50% 75%,
    75% 55%,
    100% 70%,
    100% 100%,
    0% 100%
  );
}

/* Hover state for secondary button waves */
.btn-secondary:hover .wave-1,
.btn-secondary:hover .wave-2,
.btn-secondary:hover .wave-3 {
  background: radial-gradient(circle, rgba(1, 52, 143, 0.3) 0%, rgba(1, 52, 143, 0.08) 70%, transparent 100%);
}

/* Text should stay above wave effects */
.btn-text {
  position: relative;
  z-index: 2;
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

  /* Simplified wave effect on mobile for performance */
  .wave {
    animation-duration: 1s;
  }
  
  /* Reduce number of waves on mobile */
  .wave-2,
  .wave-3 {
    display: none;
  }
}

/* Accessibility - reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .wave {
    animation: none;
  }
  
  .btn-wave:hover .wave {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.3s ease;
  }
}
</style>