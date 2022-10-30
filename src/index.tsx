import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './router';
import store from './store'
import { Provider } from 'react-redux'

const root = document.getElementById('root');
if(root) {
  createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        {
          routers.map(({ path, component: RouterComponent }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>loading...</div>}><RouterComponent /></Suspense>
              }
            />
          ))
        }
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}