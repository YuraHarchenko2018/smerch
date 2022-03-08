const numbers = [
    {
      "id": 1,
      "text": "One"
    },
    {
      "id": 2,
      "text": "Two"
    }
];

function NumberList(props) {
    return (
      <ul>
        {props.numbers.map(
          (numberItem) => 
            <li key={numberItem.id}>
              {numberItem.text}
            </li>
        )}
      </ul>
    )
}

export { NumberList, numbers};