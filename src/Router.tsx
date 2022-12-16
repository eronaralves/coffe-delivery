import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";
import { Purchase } from "./pages/Purchase";
import { PurchaseComplet } from "./pages/PurchaseComplet";

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/purchase" element={<Purchase />}/>
        <Route path="/purchase/complet" element={<PurchaseComplet/>}/>
      </Route>
    </Routes>
  )
}