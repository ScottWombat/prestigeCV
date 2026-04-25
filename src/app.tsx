import { lazy } from 'react'
import { Provider } from "react-redux";
import { Route, Routes } from 'react-router'
import { store } from './store'
import { Layout } from './layout'

export const ROUTES = {
  home: '/',
  cvtemplates: '/cvtemplates',
  coverletter: '/coverletter',
  cvanalyzer: '/cvanalyzer',
  cvcreate: '/createcv',
  cvlogin: '/cvlogin'
}
const Home = lazy(() => import('./pages/home'))
const CVTemplates = lazy(() => import('./pages/cv-templates'))
const CoverLetter = lazy(() => import('./pages/cover-letter'))
const CVAnalyzer = lazy(() => import('./pages/cv-analyzer'))
const CreateCV = lazy(() => import('./pages/create-cv'))
const CVLogin = lazy(() => import('./pages/cv-login'))


export const App = () =>{

    return(
        <Provider store={store}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.home} element={<Home/>}/>
            <Route path={ROUTES.cvtemplates} element={<CVTemplates/>}/>
            <Route path={ROUTES.cvcreate} element={<CreateCV/>}/>
            <Route path={ROUTES.coverletter} element={<CoverLetter/>}/>
            <Route path={ROUTES.cvanalyzer} element={<CVAnalyzer/>}/>
            <Route path={ROUTES.cvcreate} element={<CreateCV/>}/>
            <Route path={ROUTES.cvlogin} element={<CVLogin/>}/>
          </Route>
        </Routes>
        </Provider>
        
    )

}

