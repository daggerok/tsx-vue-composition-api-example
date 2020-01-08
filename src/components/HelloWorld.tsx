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
        <p>{props.msg}</p>
      </div>
    );
  },
});
