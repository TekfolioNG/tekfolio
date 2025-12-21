// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    class: "",
  },
  ui: {
    colors: {
      primary: 'colors.brand', // This will map to your orange color palette
      secondary: 'gray', // This will map to your gray color palette  
      success: 'green',
      info: 'blue',
      warning: 'amber',
      error: 'red',
      neutral: 'slate'
    }
  },
});
