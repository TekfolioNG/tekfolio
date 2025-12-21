// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    class: "",
  },

  ui: {
    colors: {
      primary: 'bg-orange-950',    // References the brandprimary palette from Tailwind
      secondary: 'gray', // References the brandsecondary palette from Tailwind
      success: 'green',
      info: 'blue',
      warning: 'amber',
      error: 'red',
      neutral: 'slate'
    }
  }

});
