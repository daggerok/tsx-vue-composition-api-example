// import Vue, { VNode } from 'vue'
//
// declare global {
//   namespace JSX {
//     // tslint:disable no-empty-interface
//     interface Element extends VNode {}
//     // tslint:disable no-empty-interface
//     interface ElementClass extends Vue {}
//     interface IntrinsicElements {
//       [elem: string]: any
//     }
//   }
// }
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

// declare module '*.bmp' {
//   const src: string;
//   export default src;
// }
//
// declare module '*.gif' {
//   const src: string;
//   export default src;
// }
//
// declare module '*.jpg' {
//   const src: string;
//   export default src;
// }
//
// declare module '*.jpeg' {
//   const src: string;
//   export default src;
// }
//
// declare module '*.png' {
//   const src: string;
//   export default src;
// }
//
// declare module '*.webp' {
//   const src: string;
//   export default src;
// }
//
// declare module '*.module.css' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }
//
// declare module '*.module.scss' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }
//
// declare module '*.module.sass' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }

