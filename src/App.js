import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go Watch a Movie!</h1>
        </div>
        <div className="col text-end mt-4">
          <Link to="/login">
            <span className="badge bg-success">Login</span>
          </Link>
        </div>
        <hr className="mb-3"></hr>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/movies"
                className="list-group-item list-group-item-action"
              >
                Movies
              </Link>
              <Link
                to="/genres"
                className="list-group-item list-group-item-action"
              >
                Genres
              </Link>
              <Link
                to="/admin/movie/0"
                className="list-group-item list-group-item-action"
              >
                Add Movie
              </Link>
              <Link
                to="/manage-catalogue"
                className="list-group-item list-group-item-action"
              >
                Manage Catalogue
              </Link>
              <Link
                to="/graphql"
                className="list-group-item list-group-item-action"
              >
                GraphQL
              </Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default App;
