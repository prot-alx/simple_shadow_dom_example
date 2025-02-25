import SubmittedNameItem from './SubmittedNameItem';
import formStore from '../store/formStore';

const SubmittedNamesList = () => {
  return (
    <div>
      <h4>Отправленные имена:</h4>
      <ul>
        {formStore.submittedNames.map((item) => (
          <SubmittedNameItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SubmittedNamesList;