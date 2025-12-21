// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    class: "",
  },

  ui: {
    colors: {
      primary: 'brandprimary',      // Maps 'primary' to your brandprimary palette
      secondary: 'brandsecondary',  // Maps 'secondary' to your brandsecondary palette
      success: 'green',
      info: 'blue',
      warning: 'amber',
      error: 'red',
      neutral: 'slate'
    }
  }
});