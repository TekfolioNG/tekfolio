// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    class: "",
  },

  ui: {
    colors: {
      brandprimaryprimary: 'blue',    // References the brandprimary palette from Tailwind
      secondary: 'brandsecondary', // References the brandsecondary palette from Tailwind
      success: 'green',
      info: 'blue',
      warning: 'amber',
      error: 'red',
      neutral: 'slate'
    }
  }

});
