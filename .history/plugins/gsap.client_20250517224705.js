// plugins/gsap.client.js
import { gsap } from "gsap";

export default defineNuxtPlugin(async (nuxtApp) => {
  // Import GSAP plugins on client-side only
  if (process.client) {
    try {
      // Import DrawSVGPlugin
      const { DrawSVGPlugin } = await import("gsap/DrawSVGPlugin");

      // Register plugins
      gsap.registerPlugin(DrawSVGPlugin);

      console.log("GSAP and DrawSVGPlugin registered successfully");
    } catch (error) {
      console.error("Error registering GSAP plugins:", error);
    }

    // Make gsap accessible in the app
    nuxtApp.provide("gsap", gsap);
  }
});
