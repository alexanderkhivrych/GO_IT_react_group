import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Main from './components/Main';



// const Layout = () => (
//     <>
//     <Header  hideSubTitle   options={{ color: "blue"}}>
//       My header
//       </Header>
//       <Main>
      
//         22
//       </Main>
//       <Footer/>
//     </>
// );

ReactDOM.render(<TodoList color="blue"/>,
  document.getElementById('root')
);

{/* const header = React.createElement('header', {}, "Header");
const footer = React.createElement('footer', {}, "footer");
const main = React.createElement('main', {}, "main");
const layout = React.createElement('div', {}, header, main,footer); */}



// ReactDOM.render(<Layout/>,
//   document.getElementById('root')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
