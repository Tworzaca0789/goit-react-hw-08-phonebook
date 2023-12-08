import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Routes, Route } from 'react-router-dom';
//import { RestrictedRoute } from './RestrictedRoute';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={''}>
        <Route
          path="/register"
          //element={<RestrictedRoute redirectTo="/contacts" component={''} />}
        ></Route>
      </Route>
      <ContactForm>
        <ContactList />
      </ContactForm>
    </Routes>
  );
};

export default App;
