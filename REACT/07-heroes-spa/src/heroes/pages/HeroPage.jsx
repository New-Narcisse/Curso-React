import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    if (hero.publisher === "DC Comics") {
      navigate("/dc");
    }
    if (hero.publisher === "Marvel Comics") {
      navigate("/marvel");
    }
  };
  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft animate__slow ">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item animate__animated animate__fadeInTopRight">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item animate__animated animate__fadeInRight">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item animate__animated animate__fadeInBottomRight">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3  animate__animated animate__fadeInUp ">
          Character
        </h5>
        <p className="animate__animated animate__fadeInUp">{hero.characters}</p>

        <button
          className="btn btn-outline-info animate__animated animate__zoomIn "
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
