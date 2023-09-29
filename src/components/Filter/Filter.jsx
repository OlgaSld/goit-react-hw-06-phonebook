import { useDispatch, useSelector } from 'react-redux';
import { InputFilter, LabelFilter } from './Filter_styled';
import { getFilter } from 'redux/selectors';
import { getFilterContacts } from 'redux/FilterSlice';

export const Filter = ({ value, onChangeFilter }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

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
