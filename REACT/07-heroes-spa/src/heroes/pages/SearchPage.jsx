import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../componentes/HeroCard";

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q= ${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmitSearch}>
            <input
              type="text"
              placeholder="Type a hero name"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeInDown "
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeInDown "
            style={{ display: showError ? "" : "none" }}
          >
            ther's no results for <b>{q} </b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
