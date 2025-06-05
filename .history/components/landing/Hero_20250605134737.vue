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

        <!-- Buttons with Magnetic + Glow Effect -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NuxtLink to="/about" 
            ref="primaryBtn"
            class="btn-primary btn-magnetic"
            @mousemove="magneticMove($event, 'primary')"
            @mouseleave="magneticReset($event)">
            <span class="btn-content">How We're Different</span>
            <span class="gradient-glare"></span>
          </NuxtLink>
          <NuxtLink to="/contact" 
            ref="secondaryBtn"
            class="btn-secondary btn-magnetic"
            @mousemove="magneticMove($event, 'secondary')"
            @mouseleave="magneticReset($event)">
            <span class="btn-content">Request a Demo</span>
            <span class="gradient-glare"></span>
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

// Magnetic + Glow Effect
const magneticMove = (event, type) => {
  const button = event.currentTarget;
  const content = button.querySelector('.btn-content');
  const glare = button.querySelector('.gradient-glare');
  const rect = button.getBoundingClientRect();
  
  // Calculate mouse position relative to button
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Magnetic pull (text follows cursor slightly)
  gsap.to(content, {
    x: (x - rect.width/2) * 0.15,
    y: (y - rect.height/2) * 0.15,
    duration: 0.5,
    ease: "power2.out"
  });
  
  // Gradient glare position
  gsap.to(glare, {
    x: x - rect.width/3,
    y: y - rect.height/3,
    opacity: 1,
    duration: 0.3,
    ease: "power2.out"
  });
  
  // Button scale
  gsap.to(button, {
    scale: 1.03,
    duration: 0.3,
    ease: "power2.out"
  });
};

const magneticReset = (event) => {
  const button = event.currentTarget;
  const content = button.querySelector('.btn-content');
  const glare = button.querySelector('.gradient-glare');
  
  gsap.to([content, glare], {
    x: 0,
    y: 0,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out"
  });
  
  gsap.to(button, {
    scale: 1,
    duration: 0.4,
    ease: "elastic.out(1, 0.5)"
  });
};

onMounted(() => {
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
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

/* Magnetic Button Styles */
.btn-magnetic {
  position: relative;
  overflow: hidden;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-content {
  display: inline-block;
  position: relative;
  z-index: 3;
  will-change: transform;
}

.gradient-glare {
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle at center,
    rgba(29, 138, 216, 0.4) 0%,
    rgba(29, 138, 216, 0) 70%
  );
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  will-change: transform, opacity;
  mix-blend-mode: overlay;
}

/* Primary Button Glow */
.btn-primary .gradient-glare {
  background: radial-gradient(
    circle at center,
    rgba(29, 138, 216, 0.6) 0%,
    rgba(29, 138, 216, 0) 70%
  );
}

/* Secondary Button Glow */
.btn-secondary .gradient-glare {
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 70%
  );
}

/* Text should stay above effects */
.btn-content {
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

  /* Disable magnetic effect on mobile */
  .btn-magnetic {
    transform: none !important;
  }
  
  .btn-content {
    transform: none !important;
  }
  
  .gradient-glare {
    display: none;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .gradient-glare {
    display: none;
  }
  
  .btn-magnetic:hover {
    transform: none !important;
  }
  
  .btn-content {
    transform: none !important;
  }
}
</style>