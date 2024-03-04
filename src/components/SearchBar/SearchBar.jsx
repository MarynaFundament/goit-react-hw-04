import { Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup';


const UserSchema = Yup.object().shape({
  query: Yup.string()
  .min(1, "Fill the gap")
  .required("Data is required"), 
})


const SearchBar = ({ onQuery }) => {


  const handleSubmit = (e, { resetForm }) => {
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
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name = "query"
            
            // onChange={(e) => onChange(e.target.value)}
      
          />
          <ErrorMessage name="query" component="div" />
          <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
        )}


export default SearchBar;
