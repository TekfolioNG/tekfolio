<script setup>
// This catches all unmatched routes
throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: false
})
</script>