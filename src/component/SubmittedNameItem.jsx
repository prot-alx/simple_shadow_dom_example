import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import formStore from '../store/formStore';

const SubmittedNameItem = observer(({ item }) => {
  console.log('SubmittedNameItem render');

  return (
    <li>
      {item.value}
      <button
        onClick={() => formStore.removeSubmittedName(item.id)}
        style={{ backgroundColor: '#990011', color: '#FCF6F5', border: 'none', borderRadius: '4px' }}
      >
        Удалить
      </button>
    </li>
  );
});

SubmittedNameItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default SubmittedNameItem;