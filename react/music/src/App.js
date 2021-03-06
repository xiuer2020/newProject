import React from 'react';
import {Tabs} from 'antd-mobile'
import {Route} from 'react-router-dom'
import Hot from "./views/hot/Hot";
import Recommend from "./views/recommend/Recommend";
import Search from "./views/search/Search";
import PlayView from "./views/playview/PlayView";
import './App.scss'

const tabs = [
    {title: "推荐音乐"},
    {title: "热歌榜"},
    {title: "搜素"},
];

function App() {
    return (
        <div className="App">
            <Tabs tabs={tabs}
                  initialPage={0}
                  swipeable={false}
                  animated={false}
                  tabBarUnderlineStyle={{
                      borderColor: 'rgb(240,20,20)'
                  }}
                  tabBarActiveTextColor="rgb(240,20,20)"
            >
                <Recommend/>
                <Hot/>
                <Search/>
            </Tabs>
            <Route path="/music/:id" component={PlayView}/>
        </div>
    );
}

export default App;
