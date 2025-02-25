import { observer } from 'mobx-react';
import formStore from '../store/formStore';

const InputField = observer(() => {
  console.log('InputField render');

  return (
    <input
      type="text"
      value={formStore.name}
      onChange={(e) => formStore.setName(e.target.value)}
      placeholder="Введите имя"
    />
  );
});

export default InputField;