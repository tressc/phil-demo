import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

const Home = () => {
  return <h2>Home</h2>;
};

const PageOne = () => {
  return <h2>Welcome to page 1!</h2>;
};

const PageTwo = () => {
  return <h2>Welcome to page 2!</h2>;
};

const RandomPage = () => {
  let params = useParams();
  return <h2>You manually navigated to page {params.randomInput}!</h2>;
};

const QueryExample = () => {
  // useLocation returns a dict
  // we're just extracting a single keyed value here
  // same as location = useLocation(), search = location.search
  const { search } = useLocation();

  // memoize this value, only rerun if value of "search" changes
  const query = React.useMemo(() => new URLSearchParams(search), [search]);

  const fruit = query.get("fruit");
  if (fruit) {
    return <h4>The fruit in the query string is {fruit}.</h4>;
  } else {
    return <h4>There is not fruit in the query string.</h4>;
  }
};

function App() {
  return (
    // wraps entire application with the router
    <Router>
      <div>
        {/* This area will render regardless of the path because it's outside of the <Routes> */}
        <ul>
          <Link to="/">Home</Link>
          <Link to="/1">Page One</Link>
          <Link to="/2">Page Two</Link>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<PageOne />} />
          <Route path="/2" element={<PageTwo />} />
          <Route path="/:randomInput" element={<RandomPage />} />
        </Routes>
      </div>
      <div>
        {/* This area will render regardless of the path because it's outside of the <Routes> */}
        <QueryExample />
      </div>
    </Router>
  );
}

export default App;
