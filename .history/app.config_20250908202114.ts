// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    class: "",
  },
  ui: {
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#D2410C',  // Your exact brand primary
        600: '#EA580C',  // Your brand light
        700: '#9A2A00',  // Your brand dark
        800: '#c2410c',
        900: '#9a3412',
        950: '#431407',
        DEFAULT: '#D2410C'
      },
      secondary: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#374151',  // Your exact brand secondary
        600: '#4B5563',  // Your brand secondary light
        700: '#374151',  // Your brand secondary default
        800: '#1F2937',  // Your brand secondary dark
        900: '#111827',
        950: '#030712',
        DEFAULT: '#374151'
      },
      success: {
        500: '#059669',
        DEFAULT: '#059669'
      },
      warning: {
        500: '#D97706',
        DEFAULT: '#D97706'
      },
      error: {
        500: '#DC2626',
        DEFAULT: '#DC2626'
      }
    }
  }
});
