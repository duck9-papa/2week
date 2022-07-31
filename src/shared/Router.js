import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Works from "../Works/Works";
import Main from "../main";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/work" element={<Works />} />
      <Route path="/work/:id" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;