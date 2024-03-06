import { Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

import styles from "../SearchBar/SearchBar.module.css"

const UserSchema = Yup.object().shape({
  query: Yup.string()
    .min(1, "Use minimum 2 symbols")
    .required("Data is required"),
});


const SearchBar = ({ onQuery }) => {


  const handleSubmit = (e, { resetForm }) => {

  if (e.query === '') {
      toast.info('Please, enter search word!');
      return;
    }

    onQuery(e.query);
    resetForm () ;
  };

    return (
        <header>

          <Formik 

          initialValues = {{query: " "}}
          validationSchema = {UserSchema}
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
            
            // onChange={(e) => onChange(e.target.value)}
      
          />
          <button  className={styles.buttonSearch} type="submit">Search</button>
          <ErrorMessage name="query" component="div" />

          
          <Toaster />
  

          </Form>
        </Formik>
      </header>
        )}


export default SearchBar;
