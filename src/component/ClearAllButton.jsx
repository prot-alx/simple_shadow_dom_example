import formStore from '../store/formStore';

const ClearAllButton = () => {
  return (
    <button
      onClick={() => formStore.clearAll()}
      style={{ backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
    >
      Очистить всё
    </button>
  );
};

export default ClearAllButton;