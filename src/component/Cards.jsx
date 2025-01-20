import Card from "./Card";
const Cards = ({ shows }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {shows.map((show) => {
          return <Card key={show.id} {...show} />;
        })}
      </div>
    </>
  );
};
export default Cards;
