import React, {Component} from 'react';

import Layout from './components/Layout/Layout'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

 class App extends Component{

  render(){

  
    return (
      <div>
       
       {/* Layoutcomponent divide app into 2 branches navigation and main screen i.e burger preview and control */}
       <Layout>
         
         {/* Burger Preview and builder controls are in below compnent */}
         <BurgerBuilder /> 
       </Layout>

      </div>
      );
    }
}

export default App;
