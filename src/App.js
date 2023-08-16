import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store" 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import VideoWatch from "./Components/VideoWatch";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element: <MainContainer/>
      },
      {
        path: "/watch",
        element: <VideoWatch/>
      },
    ]
  }
]);
 
 
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <RouterProvider router={approuter}/>
    </div>
    </Provider>
    
  );
}

export default App;
