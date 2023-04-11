

export const Character = (data) => {
  return (
    <blockquote className="blockquote ">
      <p className="mb-1 text-center">{data.name}</p>
      <img className="mb-5 rounded mx-auto d-block" src={data.image} />
      <footer className="blockquote-footer text-center"> {data.gender} </footer>
    </blockquote>
  );
}
