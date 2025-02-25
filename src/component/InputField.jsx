import formStore from '../store/formStore';

const InputField = () => {
  return (
    <input
      type="text"
      value={formStore.name}
      onChange={(e) => formStore.setName(e.target.value)}
      placeholder="Введите имя"
    />
  );
};

export default InputField;