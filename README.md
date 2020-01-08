# TSX @vue/composition-api example [![Build Status](https://travis-ci.org/daggerok/tsx-vue-composition-api-example.svg?branch=master)](https://travis-ci.org/daggerok/tsx-vue-composition-api-example)
Awesome typed functional Vue components!

1. install software:
   ```bash
   npm i -E core-js axios @vue/composition-api
   npm i -ED babel-preset-vca-jsx pm2 cross-env
   ```
1. update _babel.config.js_ file:
   ```js
   module.exports = {
     presets: [
       // '@vue/cli-plugin-babel/preset',
       'vca-jsx',
       '@vue/app',
     ],
   };
   ```
1. remove all _shims-*.d.ts_ files:
1. create _shims-tsx.d.ts_ file with next content:
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
   ```
1. migrate _HelloWorld.vue_ component to -> _HelloWorld.tsx_ component:
   ```tsx
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
1. migrate _App.vue_ component to -> _App.tsx_ component:
   ```tsx
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
1. run npm i ; npm run serve

(;
