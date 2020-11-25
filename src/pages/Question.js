import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import { Formik, Form,  } from 'formik';
import {Persist} from 'formik-persist';
import pngguru from '../imgs/pngguru.com.png';
import Q1 from './QuestionComponents/Q1';
import Q2 from './QuestionComponents/Q2';
import Q3 from './QuestionComponents/Q3';
import Q4 from './QuestionComponents/Q4';
import Q5 from './QuestionComponents/Q5';
import Q6 from './QuestionComponents/Q6';
import Submit from './QuestionComponents/Submit';
import {Helmet} from 'react-helmet';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



function Question(props) {

  const user = firebase.auth().currentUser;
  const validate = async (values) => {
      const errors = {};
      if(!values.yes_no1){
        errors.yes_no1 = 'Required';
      }
  
      if(!values.age){
        errors.age = 'Required';
      }
  
      if(!values.yes_no3){
        errors.yes_no3 = 'Required';
      }
  
  
      if(!values.yes_no4){
        errors.yes_no4 = 'Required';
      }
  
      if(!values.yes_no5){
        errors.yes_no5 = 'Required';
      }
  
      if(!values.yes_no6){
        errors.yes_no6 = 'Required';
      }
  
      if(!values.zip){
        errors.zip = 'Required';
      }
  
      return errors;
  };
  
  const onSubmit = async (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    showResults(values);
  }

  const showResults = (values) => {
    console.log(values);
    if(values.yes_no1 === "yes"){
      props.history.push("/results/urgent");
      firebase.firestore().collection(values.zip).doc(user.uid).set({
        results: "infected"
      }).then(() =>{
        document.querySelector(".css-0").style.display = "none";
        document.querySelector(".home-link").style.display = "block";
      }).catch(error => {
        console.log(error.message);
      })
    } else if(values.yes_no3 === "yes" && values.yes_no4 === "yes" && values.yes_no5 === "yes"){
      props.history.push("/results/call");
      firebase.firestore().collection(values.zip).doc(user.uid).set({
        results: "possibly infected"
      }).then(() =>{
        document.querySelector(".css-0").style.display = "none";
        document.querySelector(".home-link").style.display = "block";
      }).catch(error => {
        console.log(error.message);
      })
    } else if((values.age === "60-64" || values.age === "65+") && (values.yes_no3 === "yes") && (values.yes_no4 === "yes" || values.yes_no4 === "idk")){
      props.history.push("/results/call");
      firebase.firestore().collection(values.zip).doc(user.uid).set({
        results: "possibly infected"
      }).then(() =>{
        document.querySelector(".css-0").style.display = "none";
        document.querySelector(".home-link").style.display = "block";
      }).catch(error => {
        console.log(error.message);
      })
    } else if((values.yes_no3 === "yes") && (values.symp.includes("breath") || values.symp.length > 3)){
      props.history.push("/results/call");
      firebase.firestore().collection(values.zip).doc(user.uid).set({
        results: "possibly infected"
      }).then(() =>{
        document.querySelector(".css-0").style.display = "none";
        document.querySelector(".home-link").style.display = "block";
      }).catch(error => {
        console.log(error.message);
      })
    } else {
      props.history.push("/results/home");
    }
  }

  const initialValues = {
    yes_no1: "",
    age: "",
    yes_no3: "",
    symp: [],
    time: "",
    yes_no4: "",
    yes_no5: "",
    yes_no6: "",
    zip: ""
  }
    return (
        <div className="questions-body">
          {/* Handles metadata */}
          <Helmet>
            <meta name="author" content="Jalen Brassell" />
            <meta
              name="description"
              content="A survey that advises the user on the next steps to take, based on the answers given in the assessment"
            />
            <meta
              name="keywords"
              content="COVID-19, corona virus, virus, covid, self-checker, self check, symptoms"
            />
            <link
              rel="icon"
              type="image/png"
              href={pngguru}
            />
            <title>Covid-19 Self-assessment Form</title>
          </Helmet>
            <div className="container">
                <Link to="/"><img id="q1-plus-logo" src={pngguru} alt="medical logo"/></Link>
                <h1 className="q1-header">Covid-19 Self-assessment Form</h1>
                {/* Handles form and form actions */}
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validate = {validate}
                >
                    {
                    formik => {
                        return (
                            <Form>
                                <Switch>
                                    <Route path="/questions/question1" exact component={Q1} />
                                    <Route path="/questions/question2" exact component={Q2} />
                                    <Route path="/questions/question3" exact component={Q3} />
                                    <Route path="/questions/question4" exact component={Q4} />
                                    <Route path="/questions/question5" exact component={Q5} />
                                    <Route path="/questions/question6" exact component={Q6} />
                                    <Route path="/questions/submit" exact>
                                        <Submit onformik={!formik.isValid || formik.isSubmitting}/>
                                    </Route>
                                </Switch>
                                {/* Handles data persistence if user refreshes or goes home, so form data isn't lost */}
                                <Persist name="questions-form" /> 
                            </Form>
                        )
                    }
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Question
