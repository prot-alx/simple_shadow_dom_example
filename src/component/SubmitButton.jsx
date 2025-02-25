import formStore from '../store/formStore';

const SubmitButton = () => {
  console.log('SubmitButton render');

  return (
    <button
      onClick={() => formStore.submit()}
      style={{ backgroundColor: '#2F3C7E', color: '#FBEAEB', border: 'none', borderRadius: '4px' }}
    >
      Отправить
    </button>
  );
};

export default SubmitButton;