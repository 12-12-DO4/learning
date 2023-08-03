const DessertsList = (props) => {
  return (
    <ul>
      {
        props.data
          .filter(item => item.calories < 500)
          .sort((a, b) => a.calories - b.calories)
          .map(li => <li>{li.name} - {li.calories} cal</li>)
      }
    </ul>
  )
}

export default DessertsList;