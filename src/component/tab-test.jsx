import Tabs from "./tabs"
import './tabs.css'

function RandomComonent (){
  return <div>some random component</div>
}

export default function TabsTest(){

  const tabs =[
    {
      label : "Tab 1",
      content : <div>This is content for tab 1</div>
    },
    {
      label : "Tab 2",
      content : <div>This is content for tab 2</div>
    },
    {
      label : "Tab 3",
      content : <RandomComonent/>
    }
  ]

  function handleChange(currentTabIndex) {
    
  }

  return <Tabs tabsContent={tabs} onChange={handleChange}/>

}
