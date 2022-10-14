import "./portfolioList.scss"

export default function portfolioList({ id, title, active, setSelected }) {
  return (
    <li className={active ? "portfolioList active" : "porfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
