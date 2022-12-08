import PropTypes from 'prop-types';
import { ListBox, TitleList, Item, BtnItem } from './ContactList.styled';

export const ContactsList = ({ title, contacts, deleteContact }) => {
  return (
    <ListBox>
      <TitleList>{title}</TitleList>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number}
            <BtnItem type="button" onClick={() => deleteContact(id)}>
              Delete
            </BtnItem>
          </Item>
        ))}
      </ul>
    </ListBox>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
