import { lazy } from 'react'
import { Provider } from "react-redux";
import { Route, Routes } from 'react-router'
import { store } from './store'
import { Layout } from './layout'
import { Layout1 } from 'layout1';
//  { id: 1, isImageProfileRequired: false ,imageStyle: null,isImageBGRequired: true },
export const ROUTES = {
  home: '/',
  cvtemplates: '/cvtemplates',
  coverletter: '/coverletter',
  cvanalyzer: '/cvanalyzer',
  //cvcreate: '/createcv/:templateId/image/:imageRequired',
  cvcreate: '/createcv/:id/:templateId/:type/:isImageProfileRequired/:imageStyle/:bgImage',
  cvlogin: '/cvlogin',
  preview: '/preview',
  font: '/font',
  pdf: '/pdf'
}
const Home = lazy(() => import('./pages/home'))
const CVTemplates = lazy(() => import('./pages/cv-templates'))
const CoverLetter = lazy(() => import('./pages/cover-letter'))
const CVAnalyzer = lazy(() => import('./pages/cv-analyzer'))
const CreateCV = lazy(() => import('./pages/create-cv'))
const CVLogin = lazy(() => import('./pages/cv-login'))
const Preview = lazy(() => import('./pages/preview'))
const Font = lazy(() => import('./pages/font'))
const PageNotFound = lazy(() => import('./pages/page-notfound'))
const PDF = lazy (() => import('./pages/pdf'));
export const App = () =>{

    return(
        <Provider store={store}>
        <Routes>
            <Route element={<Layout1 />}>
                <Route path={ROUTES.home} element={<Home/>}/>
                <Route path={ROUTES.cvtemplates} element={<CVTemplates/>}/>
                <Route path={ROUTES.cvcreate} element={<CreateCV/>}/>
                <Route path={ROUTES.coverletter} element={<CoverLetter/>}/>
                <Route path={ROUTES.cvanalyzer} element={<CVAnalyzer/>}/>
                <Route path={ROUTES.cvcreate} element={<CreateCV/>}/>
                <Route path={ROUTES.cvlogin} element={<CVLogin/>}/>
                <Route path={ROUTES.preview} element={<Preview/>}/>
                <Route path={ROUTES.font} element={<Font/>}/>
                <Route path={ROUTES.pdf} element={<PDF/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
        </Provider>
        
    )

}

