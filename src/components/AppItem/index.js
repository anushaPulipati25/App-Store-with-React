import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  const mainEle = (
    <li className="appContainer">
      <img src={imageUrl} alt={appName} className="appImg" />
      <p className="appName">{appName}</p>
    </li>
  )

  return mainEle
}

export default AppItem
