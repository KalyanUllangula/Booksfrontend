
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Posts from './components/posts';
import Register from './components/register';
import PageNotFound from './components/pagenotfound';
import Authors from './components/author';
import { Route, Switch, Redirect } from "react-router-dom";
import Books from './components/books';
import BooksForm from './components/booksform';
import UpdateBooks from './components/updatebooks';
import "bootstrap/dist/css/bootstrap.css";
import DamagedBooks from './components/damagedbooks';
import AddDamagedBooks from './components/adddamagedbooks';
import UpdateDamaged from './components/updatedamaged';
import BooksOrder from './components/booksorder';
import AddOrder from './components/addorder';
import UpdateOrder from './components/updateorder';
import BooksReturn from './components/booksreturn';
import ReturnBookForm from './components/addreturn';
import Addauthor from './components/authorform';



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/authors/add" component={Addauthor} />
        <Route path="/booksorder/update/:orderId" component={UpdateOrder}/>
        <Route path="/lms/viewOrderList/add" component={AddOrder} />
        <Route path="/lms/viewbooklist/add" component={ReturnBookForm} />
        <Route path="/book/update/:bookid" component={UpdateBooks}/>
        <Route path="/damagedbook/update/:id" component={UpdateDamaged}/>
        <Route path="/booksorder" component={BooksOrder} />
        <Route path="/bookreturn" component={BooksReturn} />
        <Route path="/posts" component={Posts} />
        <Route path="/book" component={Books} />
        <Route path="/lms/viewAllBooks/add"  component={BooksForm} />
        <Route path="/damagedbook" component={DamagedBooks} />
        <Route path="/lms/viewDamagedBooksList/add" component={AddDamagedBooks} />
        <Route path="/authors" component={Authors} />
       
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
