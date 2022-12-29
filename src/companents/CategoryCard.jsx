import Cards from "./Cards"
const CategoryCard = ({ data }) => {

  if (data.length === 0) {
    return null
  }
  return (
    <div className="categoryCard">
      {
        data.map((element) => (
          <Cards element={element} key={element.id}/>
        ))
      }
    </div>
  )
}
export default CategoryCard;