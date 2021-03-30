declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// element-plus
declare module '@/theme' {
  import { App } from 'vue'
  export default function (app: App): void
}

// vue-router
declare module '@/router' {
  import { Router } from 'vue-router'
  const route: Router
  export default route
}

// vuex
declare module '@/store' {
  import { Store } from 'vuex';
  const store: Store<any>
  export default store
}
