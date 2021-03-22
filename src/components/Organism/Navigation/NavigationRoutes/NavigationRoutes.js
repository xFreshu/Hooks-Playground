import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import UseStateView from "../../../Views/HooksView/Basic/UseStateView/UseStateView";
import UseEffectView from "../../../Views/HooksView/Basic/UseEffectView/UseEffectView";
import UseContextView from "../../../Views/HooksView/Basic/UseContextView/UseContextView";
import UseCallbackView from "../../../Views/HooksView/Advanced/UseCallbackView/UseCallbacksView";
import UseDebugValueView from "../../../Views/HooksView/Advanced/UseDebugValueView/UseDebugValueView";
import UseImperativeHandleView from "../../../Views/HooksView/Advanced/UseImperativeHandleView/UseImperativeHandleView";
import UseLayoutEffectView from "../../../Views/HooksView/Advanced/UseLayoutEffectView/UseLayoutEffectView";
import UseMemoView from "../../../Views/HooksView/Advanced/UseMemoView/UseMemoView";
import UseReducerView from "../../../Views/HooksView/Advanced/UseReducerView/UseReducerView";
import UseRefView from "../../../Views/HooksView/Advanced/UseRefView/UseRefView";
import HomeView from "../../../Views/Home/HomeView";

const NavigationRoutes = () => {

  return (
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/UseState">
          <UseStateView />
        </Route>
        <Route path="/UseEffect">
          <UseEffectView />
        </Route>
        <Route path="/UseContext">
          <UseContextView />
        </Route>
        <Route path="/UseCallback">
          <UseCallbackView />
        </Route>
        <Route path="/UseDebugValue">
          <UseDebugValueView />
        </Route>
        <Route path="/UseImperativeHandle">
          <UseImperativeHandleView />
        </Route>
        <Route path="/UseLayoutEffect">
          <UseLayoutEffectView />
        </Route>
        <Route path="/UseMemo">
          <UseMemoView />
        </Route>
        <Route path="/UseReducer">
          <UseReducerView />
        </Route>
        <Route path="/UseRef">
          <UseRefView />
        </Route>
      </Switch>
  );
};

export default NavigationRoutes;