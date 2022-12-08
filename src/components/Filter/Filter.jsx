import PropTypes from 'prop-types';
import { FilterBox, FilterForm, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <FilterForm>Find contacts by name</FilterForm>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
