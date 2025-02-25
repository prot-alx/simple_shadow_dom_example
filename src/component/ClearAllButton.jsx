import formStore from '../store/formStore';

const ClearAllButton = () => {
  console.log('ClearAllButton render');

  return (
    <button
      onClick={() => formStore.clearAll()}
      style={{ backgroundColor: '#990011', color: '#FCF6F5', border: 'none', borderRadius: '4px' }}
    >
      Очистить всё
    </button>
  );
};

export default ClearAllButton;