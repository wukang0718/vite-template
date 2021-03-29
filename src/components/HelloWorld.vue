<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="https://lh5.googleusercontent.com/proxy/8OX3BFkHTk1c2v5bXjhj40zl_1NKwsyVA__rNLTWddVWgF1YUgIHULj1kzIaBrHsn8OQk-oGxJbkKsEdwoRDtGMwjAHKSLc4_dDpRAftv6ilFhJWER46Upzqo3eWNLMz83ofKE1DmzdwfQ" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500 select-all">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
<textarea name="" id="" class="resize-none border"></textarea>
<input type="text" class="border hover:border-gray-600 text-red-700">
<button class="border rounded bg-white text-red-800 ml-2 px-8 py-2 focus:text-blue-900 hover:border-yellow-400 hover:text-pink-400">按钮</button>
<p class="red">color</p>
<div>{{userName}}</div>
  <el-card header="card-header">
    card
  </el-card>
<el-calendar />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    console.log(import.meta.env.VITE_TEST);
    
    const store = useStore()
    const userName = store.state.userName
    return { count, userName }
  }
})
</script>
