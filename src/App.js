import styles from './app.module.css'
import Form from './components/Form';
import ContactsList from './components/ContactsList'

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Form />
      <ContactsList />
    </div>
  );
}

export default App;