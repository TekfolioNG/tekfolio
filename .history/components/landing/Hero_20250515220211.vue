<template>
  <main class="relative w-screen h-screen overflow-hidden">
    <!-- Background image with edge-to-edge coverage and gradient overlay -->
    <div class="absolute inset-0 w-screen h-full overflow-hidden z-0">
      <img src="~/assets/img/tekfolio-hero-image2.jpg" alt="Tekfolio Hero"
        class="w-full h-full object-cover scale-x-[-1]" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>

    <!-- Content shifted to the right -->
    <div class="container mx-auto px-4 h-full flex items-center relative z-10 pl-12 md:pl-20 lg:pl-32">
      <div class="max-w-3xl text-white">
        <!-- Main heading with single line layout -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
          <span ref="wordSwitcher" class="text-blue-300 font-black inline-block min-w-[110px]"></span>
          <span class="lowercase">business solutions that work</span>
        </h1>

        <!-- Description with improved contrast -->
        <p class="text-xl md:text-2xl mt-6 mb-10 leading-relaxed text-white">
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
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

// Register the scramble text plugin
gsap.registerPlugin({
  name: "scrambleText",
  init(target, value) {
    let chars = "!<>-_\\/[]{}—=+*^?#________";
    if (typeof value === "object") {
      chars = value.chars || chars;
    }

    const text = typeof value === "string" ? value : value.text;
    const originalText = target.textContent;
    const length = Math.max(originalText.length, text.length);
    let queue = [];

    for (let i = 0; i < length; i++) {
      const from = originalText[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    let frame = 0;
    let newText = "";
    let resolve;
    const promise = new Promise(r => resolve = r);

    const update = () => {
      let complete = 0;
      newText = "";

      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];

        if (frame >= end) {
          complete++;
          newText += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          newText += char;
        } else {
          newText += from;
        }
      }

      target.textContent = newText;

      if (complete === queue.length) {
        resolve();
      } else {
        frame++;
        requestAnimationFrame(update);
      }
    };

    update();
    return promise;
  }
});

const wordSwitcher = ref(null);
const words = ['SMART', 'SIMPLE', 'SECURE'];

onMounted(() => {
  if (!wordSwitcher.value) return;

  // Initialize with first word
  wordSwitcher.value.textContent = words[0];

  // Create word switching timeline
  const tl = gsap.timeline({ repeat: -1 });

  words.forEach((word, index) => {
    const nextIndex = (index + 1) % words.length;

    // Scramble to next word
    tl.to(wordSwitcher.value, {
      duration: 1.5,
      scrambleText: {
        text: words[nextIndex],
        chars: "XO<>-_/\\[]",
        speed: 0.4,
        revealDelay: 0.2
      },
      ease: "power2.inOut"
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

/* Text styling */
.lowercase {
  text-transform: lowercase;
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