<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" priority fetchpriority="high" preload />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <div class="container mx-auto px-4 md:pl-16 lg:pl-20 md:pr-4 h-full flex items-center pt-16 relative z-10">
      <div class="max-w-3xl text-white w-full md:ml-8 text-center md:text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 barlow-condensed">
          <div class="flex flex-col md:hidden">
            <div class="flex items-center justify-center space-x-2">
              <span ref="wordSwitcherMobile" class="text-[blue-300] font-black word-switcher-effect text-3xl"></span>
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

        <!-- Buttons with Particle Burst Animation -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NuxtLink to="/about" ref="primaryBtn" class="btn-primary btn-particle-burst"
            @mouseenter="triggerParticleBurst($event, 'primary')" @mouseleave="resetParticles($event)">
            <span class="btn-text">How We're Different</span>
          </NuxtLink>
          <NuxtLink to="/contact" ref="secondaryBtn" class="btn-secondary btn-particle-burst"
            @mouseenter="triggerParticleBurst($event, 'secondary')" @mouseleave="resetParticles($event)">
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
const primaryBtn = ref(null);
const secondaryBtn = ref(null);
const words = ['Smart', 'Simple', 'Secure'];

// Particle burst function
const triggerParticleBurst = (event, buttonType) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Create particles
  const particleCount = 12;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = `particle ${buttonType === 'primary' ? 'particle-primary' : 'particle-secondary'}`;
    button.appendChild(particle);
    particles.push(particle);

    // Position particle at button center
    gsap.set(particle, {
      position: 'absolute',
      left: centerX,
      top: centerY,
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      zIndex: 1,
      pointerEvents: 'none'
    });
  }

  // Animate particles outward
  particles.forEach((particle, index) => {
    const angle = (360 / particleCount) * index;
    const distance = 60 + Math.random() * 20; // Random distance for organic feel
    const duration = 0.8 + Math.random() * 0.4;

    gsap.timeline()
      .to(particle, {
        x: Math.cos(angle * Math.PI / 180) * distance,
        y: Math.sin(angle * Math.PI / 180) * distance,
        opacity: 1,
        scale: 1.5,
        duration: duration * 0.6,
        ease: "power2.out"
      })
      .to(particle, {
        opacity: 0,
        scale: 0.5,
        duration: duration * 0.4,
        ease: "power2.in"
      }, "-=0.2")
      .call(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
  });

  // Add button scale effect
  gsap.to(button, {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out"
  });
};

const resetParticles = (event) => {
  const button = event.currentTarget;

  // Reset button scale
  gsap.to(button, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out"
  });

  // Clean up any remaining particles
  const particles = button.querySelectorAll('.particle');
  particles.forEach(particle => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  });
};

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
/* Import Barlow Condensed font */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
  font-family: 'Barlow Condensed', sans-serif;
}

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
  overflow: visible;
  /* Changed from hidden to visible for particles */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
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

/* Particle Burst Effects */
.btn-particle-burst {
  position: relative;
  overflow: visible;
}

.particle {
  position: absolute;
  opacity: 0;
  transform: scale(0);
  z-index: 1;
  pointer-events: none;
}

.particle-primary {
  background: linear-gradient(45deg, #60a5fa, #3b82f6);
  box-shadow: 0 0 6px rgba(96, 165, 250, 0.8);
}

.particle-secondary {
  background: linear-gradient(45deg, #ffffff, #e5e7eb);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
}

/* Enhanced particle glow effect */
.particle::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: inherit;
  border-radius: inherit;
  opacity: 0.6;
  filter: blur(2px);
  z-index: -1;
}

/* Text should stay above particle effects */
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
    transform: translateY(-2px) scale(1.02);
  }

  .btn-secondary:active {
    background-color: white;
    color: #01348F;
    transform: translateY(-2px) scale(1.02);
  }

  /* Reduce particle count and distance on mobile for performance */
  .btn-particle-burst {
    overflow: visible;
  }

  /* Smaller particles on mobile */
  @media (max-width: 768px) {
    .particle {
      width: 3px !important;
      height: 3px !important;
    }
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .btn-particle-burst:hover {
    transform: translateY(-1px);
  }

  .particle {
    display: none;
  }
}
</style>