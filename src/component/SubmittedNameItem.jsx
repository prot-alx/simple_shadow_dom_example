import PropTypes from 'prop-types';
import formStore from '../store/formStore';

const SubmittedNameItem = ({ item }) => {
  return (
    <li>
      {item.value}
      <button
        onClick={() => formStore.removeSubmittedName(item.id)}
        style={{ backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Удалить
      </button>
    </li>
  );
};

SubmittedNameItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default SubmittedNameItem;