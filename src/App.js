import React, { lazy, Suspense } from 'react';
import { Route, Switch} from 'react-router-dom';

import ReviewContextProvider from './context/ReviewContext';
import TrainerContextProvider from './context/TrainerContext';
import Lazy from './components/Lazy';
import ErrorPage from './components/ErrorPage';


function App() {
  const Home = lazy(()=> import('./components/Home'));
  const FitArmy = lazy(()=> import('./components/FitArmy'));
  const Pricing = lazy(()=> import('./components/Pricing'));
  const Contact = lazy(()=> import('./components/Contact'));
  const About = lazy(()=> import('./components/About'));
  const IndividualExpert = lazy(()=> import('./components/IndividualExpert'));
  const SignUp = lazy(()=> import('./components/SignUp'));
  return (
      // <TrainerContextProvider>
      //     <Suspense fallback= {<Lazy/>}>
      //   <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route path="/home" component={Home} />
      //       <ReviewContextProvider>
      //         <Route path="/fitarmy" component={FitArmy} />
      //       </ReviewContextProvider>
      //       <Route path="/about" component={About} />
      //       <Route path="/price" component={Pricing} />
      //       <Route path="/contact" component={Contact} />
      //       <Route path="/register" component={SignUp} />
      //       <Route path='/error' component={ErrorPage} />
      //       <Route exact path="/staff/:id" component={IndividualExpert} />
      //       <Route component={ErrorPage} />
      //   </Switch>
      //     </Suspense>
      // </TrainerContextProvider>
      <TrainerContextProvider>
        <ReviewContextProvider>
          <Suspense fallback= {<Lazy/>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/price" component={Pricing} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={SignUp} />
              <Route path='/error' component={ErrorPage} />
              <Route exact path="/staff/:id" component={IndividualExpert} />
                <Route path="/fitarmy" component={FitArmy} />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </ReviewContextProvider>
      </TrainerContextProvider>
  );
}

export default App;
