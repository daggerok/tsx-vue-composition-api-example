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
