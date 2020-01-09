import { createComponent } from '@vue/composition-api';

export default createComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
    );
  },
});
