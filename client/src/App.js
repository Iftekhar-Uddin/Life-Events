import React from "react";
import {Container} from "@material-ui/core";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Auth from "./component/Auth/Auth";
import PostDetails from "./component/PostDetails/postDetails";


const App =()=> {
  const user = JSON.parse(localStorage.getItem('profile'));

    return(
        <BrowserRouter>
          <Container maxWidth="xl">
            <Navbar/>
            <Routes>
            <Route exact path="/" element={ <Navigate to="/posts" /> } />
            <Route exact path="/posts" element={<Home />} />
            <Route exact path="/posts/search" element={<Home />} />
            <Route exact path="/posts/:id" element={<PostDetails/>}/>
            <Route exact path="/auth" Component={() => (user ? <Navigate to="/posts" /> : <Auth/>)}/>
            </Routes>
          </Container>
        </BrowserRouter>

    );
}

export default App;

