import { createComponent } from '@vue/composition-api';
import HelloWorld from '@/components/HelloWorld';

export default createComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <HelloWorld msg='yay!'/>
      </div>
    );
  },
});
