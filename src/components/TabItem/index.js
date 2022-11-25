import './index.css'

const TabItem = props => {
  const {tabDetails, onClickGetActiveTabId, activeTabId} = props
  const {tabId, displayText} = tabDetails

  let activeTabContainer = ''
  let activeTabName = ''

  if (activeTabId === tabId) {
    activeTabContainer = 'tabSelected'
    activeTabName = 'tabNameSelected'
  }

  const getActiveTab = () => {
    onClickGetActiveTabId(tabId)
  }

  const mainEle = (
    <li className={`tabContainer ${activeTabContainer}`}>
      <button type="button" onClick={getActiveTab} className="tabButton">
        <h1 className={`tabName ${activeTabName}`}>{displayText}</h1>
      </button>
    </li>
  )

  return mainEle
}

export default TabItem
