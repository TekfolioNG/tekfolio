// composables/useGsapDrawSVG.js
import { gsap } from "gsap";

export const useGsapDrawSVG = async () => {
  if (process.client) {
    try {
      // Check if DrawSVGPlugin is already registered
      if (!gsap.plugins.DrawSVGPlugin) {
        // Import the DrawSVGPlugin
        const { DrawSVGPlugin } = await import("gsap/DrawSVGPlugin");

        // Register the plugin
        gsap.registerPlugin(DrawSVGPlugin);
      }

      return true;
    } catch (error) {
      console.error("Error loading DrawSVGPlugin:", error);
      return false;
    }
  }

  return false;
};
