import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('isNum1To5', 'Rating must be a number between 1-5', val => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    }),
});

const ReviewForm = () => {
  return (
    <View>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}>
        {formikProps => (
          <View style={styles.form}>
            <View style={styles.inputs}>
              <TextInput
                style={styles.input}
                placeholder="Review Title"
                onChangeText={formikProps.handleChange('title')}
                value={formikProps.values.title}
                onBlur={formikProps.handleBlur('title')}
              />
              <Text style={{color: 'crimson', fontWeight: 'bold'}}>
                {formikProps.touched.title && formikProps.errors.title}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Review Body"
                onChangeText={formikProps.handleChange('body')}
                value={formikProps.values.body}
                onBlur={formikProps.handleBlur('body')}
              />
              <Text style={{color: 'crimson', fontWeight: 'bold'}}>
                {formikProps.touched.body && formikProps.errors.body}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Review Rating(1-5)"
                onChangeText={formikProps.handleChange('rating')}
                value={formikProps.values.rating}
                keyboardType="numeric"
                onBlur={formikProps.handleBlur('rating')}
              />
              <Text style={{color: 'crimson', fontWeight: 'bold'}}>
                {formikProps.touched.rating && formikProps.errors.rating}
              </Text>
            </View>
            <Button
              title="Submit"
              color={'maroon'}
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  form: {flejustifyContent: 'space-between', margin: 10},
  inputs: {marginBottom: 50},
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
  },
});
