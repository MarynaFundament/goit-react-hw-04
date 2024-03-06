import { Field, Form, Formik, ErrorMessage} from "formik";
import toast, { Toaster } from 'react-hot-toast';



import styles from "../SearchBar/SearchBar.module.css"



const SearchBar = ({ onQuery }) => {


  const handleSubmit = (e, { resetForm }) => {

  if (e.query === "") {

    toast.error('Please, fill the main field', { position: 'top-right' });
    return;
    }

  console.log(e)
    onQuery(e.query);
    resetForm () ;
  };

    return (
        <header>

          <Formik 

          initialValues = {{query:""}}
          onSubmit = {handleSubmit}
          >

          <Form>
          
          <Field

            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name = "query"
            
      
          />
          <button  className={styles.buttonSearch} type="submit">Search</button>
      

          </Form>
        </Formik>
      </header>
        )}


export default SearchBar;
