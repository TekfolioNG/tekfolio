<template>
    <div class="portable-text">
        <component v-for="(block, index) in value" :key="index" :is="getComponent(block)" :value="block" />
    </div>
</template>

<script setup>
import { h } from 'vue'

const props = defineProps({
    value: {
        type: Array,
        required: true
    }
})

const { urlFor } = useSanity()

const getComponent = (block) => {
    if (block._type === 'image') {
        return () => h('figure', { class: 'my-8' }, [
            h('img', {
                src: urlFor(block).width(800).url(),
                alt: block.alt || '',
                class: 'w-full rounded-lg shadow-md'
            }),
            block.alt ? h('figcaption', {
                class: 'text-center text-sm text-gray-600 mt-2'
            }, block.alt) : null
        ])
    }

    if (block._type === 'block') {
        const style = block.style || 'normal'
        const children = renderChildren(block.children || [])

        switch (style) {
            case 'h1':
                return () => h('h1', { class: 'text-4xl font-bold mt-8 mb-4 text-gray-900' }, children)
            case 'h2':
                return () => h('h2', { class: 'text-3xl font-bold mt-6 mb-3 text-gray-900' }, children)
            case 'h3':
                return () => h('h3', { class: 'text-2xl font-bold mt-4 mb-2 text-gray-900' }, children)
            case 'blockquote':
                return () => h('blockquote', {
                    class: 'border-l-4 border-purple-600 pl-4 italic my-4 text-gray-700'
                }, children)
            default:
                return () => h('p', { class: 'mb-4 leading-relaxed text-gray-700' }, children)
        }
    }

    return () => null
}

const renderChildren = (children) => {
    return children.map(child => {
        if (child._type === 'span') {
            let text = child.text || ''

            if (child.marks && child.marks.length > 0) {
                child.marks.forEach(mark => {
                    if (mark === 'strong') {
                        return h('strong', { class: 'font-bold' }, text)
                    }
                    if (mark === 'em') {
                        return h('em', { class: 'italic' }, text)
                    }
                    if (mark === 'code') {
                        return h('code', {
                            class: 'bg-gray-100 px-2 py-1 rounded text-sm font-mono'
                        }, text)
                    }
                })
            }

            return text
        }
        return ''
    })
}
</script>

<style scoped>
.portable-text :deep(a) {
    color: #7B3AC5;
    text-decoration: underline;
}

.portable-text :deep(a:hover) {
    color: #4527A0;
}

.portable-text :deep(ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: #374151;
}

.portable-text :deep(ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: #374151;
}

.portable-text :deep(li) {
    margin-bottom: 0.5rem;
}
</style>