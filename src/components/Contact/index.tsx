import { Formik, Form, Field } from 'formik';
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';

export function Contact() {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <>
      <Heading as="h2" paddingTop={10} textAlign="center" mb="50">
        Contact
      </Heading>

      <Formik
        initialValues={{
          name: 'Sasuke',
          email: 'john.freitasau@gmail.com',
          subject: 'test',
          message: 'test',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form
            action="mailto:john.freitasau@gmail.com"
            encType="multipart/form-data"
            method="post"
          >
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  {/* <FormLabel htmlFor="name">First name</FormLabel> */}
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
