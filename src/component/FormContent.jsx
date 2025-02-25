import { observer } from 'mobx-react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import ClearAllButton from './ClearAllButton';
import SubmittedNamesList from './SubmittedNamesList';
import formStore from '../store/formStore';

const FormContent = observer(() => {
  console.log('Rendering FormContent');
  console.log('Current name:', formStore.name);
  console.log('Submitted names:', formStore.submittedNames);

  return (
    <div style={{ padding: '20px', border: '1px solid green', backgroundColor: 'white' }}>
      <h3>Форма ввода имен</h3>
      <style>{`
        input { padding: 8px; margin: 5px; height: 25px; }
        ul { list-style: none; padding-left: 0; }
        li { display: flex; justify-content: space-between; margin: 5px 0; padding: 5px; border: 1px solid #ccc; }
        #main_block {display: flex; justify-content: space-between; margin: 5px 0; padding: 5px; gap: 10px; }
      `}</style>
      <div id="main_block">
        <InputField />
        <SubmitButton />
        <ClearAllButton />
      </div>
      {formStore.submittedNames.length > 0 ? (
        <SubmittedNamesList />
      ) : (
        <p>Нет отправленных имен</p>
      )}
    </div>
  );
});

export default FormContent;