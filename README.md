# TSX @vue/composition-api example [![Build Status](https://travis-ci.org/daggerok/tsx-vue-composition-api-example.svg?branch=master)](https://travis-ci.org/daggerok/tsx-vue-composition-api-example)
Awesome typed functional Vue components!

## TSX

1. install software:
   ```bash
   npm i -E core-js @vue/composition-api
   npm i -ED babel-preset-vca-jsx
   ```
1. update `babel.config.js` file:
   ```js
   module.exports = {
     presets: [
       // '@vue/cli-plugin-babel/preset',
       'vca-jsx',
       '@vue/app',
     ],
   };
   ```
1. remove all `src/shims-*.d.ts` files...
1. create `src/shims-tsx.d.ts` file with next content:
   ```typescript
   import Vue, { VNode } from 'vue'
   import { ComponentRenderProxy } from '@vue/composition-api'
   declare global {
     namespace JSX {
       // tslint:disable no-empty-interface
       interface Element extends VNode {}
       // tslint:disable no-empty-interface
       interface ElementClass extends ComponentRenderProxy {}
       interface ElementAttributesProperty {
         $props: any; // specify the property name to use
       }
       interface IntrinsicElements {
         [elem: string]: any;
       }
     }
   }
   declare module '*.vue' {
     import Vue from 'vue';
     export default Vue;
   }
   ```
1. migrate `src/components/HelloWorld.vue` component to -> `src/components/HelloWorld.tsx` component:
   ```typescript jsx
   import { createComponent } from '@vue/composition-api';
   export default createComponent({
     name: 'HelloWorld',
     props: {
       msg: {
         type: String,
         required: true,
       },
     },
     setup(props) {
       return () => (
         <div>
           <h1>{props.msg}</h1>
         </div>
       );
     },
   })
   ```
1. migrate `src/App.vue` component to -> `src/App.tsx` component:
   ```typescript jsx
   import { createComponent } from '@vue/composition-api';
   import HelloWorld from '@/components/HelloWorld';
   export default createComponent({
     name: 'App',
     setup() {
       return () => (
         <div>
           <HelloWorld msg='yay!' />
         </div>
       );
     },
   });
   ```

## TSX VueRouter integration fixes...

1. transform views uses in routes:
   * `src/views/Home.tsx` -> typescript `src/views/Home.vue`:
     ```vue
     <template>
       <div>
         <h1>HelloWorld</h1>
         <HelloWorld msg="nonono" />
       </div>
     </template>
     <script lang="ts">
       import { createComponent } from '@vue/composition-api';
       import HelloWorld from '@/components/HelloWorld';
       export default createComponent({
         name: 'Home',
         components: {
           HelloWorld,
         },
       });
     </script>
     ```
   * `src/views/About.tsx` -> typescript `src/views/About.vue`:
     ```vue
     <template>
       <div>
         <h1>This is an about page</h1>
         <HelloWorld msg='yay!'/>
       </div>
     </template>
     <script lang="ts">
       import { createComponent } from '@vue/composition-api';
       import HelloWorld from '@/components/HelloWorld';
       export default createComponent({
         name: 'About',
         components: {
           HelloWorld,
         },
       });
     </script>
     ```
1. fix typed router setup `src/router/index.ts`:
   ```typescript
   import Vue from 'vue';
   import VueRouter, { RouterOptions } from 'vue-router';
   import { RouteConfig } from 'vue-router/types/router';
   Vue.use(VueRouter);
   function loadView(view: string) {
     return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
   }
   const routes: RouteConfig[] = [
     {
       path: '/',
       name: 'home',
       component: loadView('Home'),
     },
     {
       path: '/about',
       name: 'about',
       component: loadView('About'),
     },
   ];
   const options: RouterOptions = {
     base: process.env.BASE_URL,
     mode: 'history',
     routes,
   };
   export default new VueRouter(options);
   ```
