import formStore from '../store/formStore';

const SubmitButton = () => {
  return (
    <button
      onClick={() => formStore.submit()}
      style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
    >
      Отправить
    </button>
  );
};

export default SubmitButton;