// plugins/loading-client.ts
export default defineNuxtPlugin({
    name: 'loading-screen',
    parallel: true,
    async setup(nuxtApp) {
      // Only run on client side
     if (process.server) return
  
      // Import the loading component
      const { default: AppLoading } = await import('~/components/landing/AppLoading.vue')
      
      // Create a container for the loading screen
      const loadingContainer = document.createElement('div')
      loadingContainer.id = 'app-loading-container'
      document.body.appendChild(loadingContainer)
  
      // Create Vue app instance for the loading component
      const { createApp } = await import('vue')
      const loadingApp = createApp(AppLoading, {
        showText: true, // or false, depending on your preference
        loadingMessage: "//smart, simple, secure solutions that work",
        duration: 4000
      })
  
      // Mount the loading screen
      loadingApp.mount(loadingContainer)
  
      // Listen for when the main app is ready
      nuxtApp.hook('app:mounted', () => {
        // Give a slight delay then remove loading screen
        setTimeout(() => {
          try {
            loadingApp.unmount()
            document.body.removeChild(loadingContainer)
          } catch (error) {
            console.warn('Loading screen cleanup error:', error)
          }
        }, 500)
      })
  
      // Fallback cleanup in case app:mounted doesn't fire
      setTimeout(() => {
        try {
          if (document.getElementById('app-loading-container')) {
            loadingApp.unmount()
            document.body.removeChild(loadingContainer)
          }
        } catch (error) {
          console.warn('Loading screen fallback cleanup error:', error)
        }
      }, 5000)
    }
  })