<template>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>
<script>
import { defineComponent } from "vue"
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
    components: {
        HelloWorld
    },
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>

</style>