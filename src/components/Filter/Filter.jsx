import { useDispatch } from 'react-redux';
import { InputFilter, LabelFilter } from './Filter_styled';
import { getFilterContacts } from 'redux/FilterSlice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        name="filter"
        type="text"
        value={value}
        onChange={e => dispatch(getFilterContacts(e.target.value))}
      />
    </LabelFilter>
  );
};
