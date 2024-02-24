import React, { createContext, useReducer } from "react";
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Feedback from './Components/Feedback';
import AdminMainMenu from './Components/Admin/AdminMainMenu';
import RequestAdmin from './Components/Admin/RequestAdmin';
import AdminRegistration from './Components/Admin/AdminRegistration';
import AdminProfile from './Components/Admin/AdminProfile';
import ShowFeedbacks from './Components/Admin/ShowFeedbacks';
import DeleteAndBlockEmployees from './Components/Admin/DeleteAndBlockEmployees';
import DeleteAndBlockCompanies from './Components/Admin/DeleteAndBlockCompanies';
import ShowNewAdminRequests from './Components/Admin/ShowNewAdminRequests';
import CareerTips from './Components/CareerTips';
import MustChangePasswordAfterForget from './Components/MustChangePasswordAfterForget';
import EmployeeRegistration from './Components/Employee/EmployeeRegistration';
import JobSearch from './Components/JobSearch';
import EmpProfile from './Components/Employee/EmpProfile';
import CompProfile from './Components/Company/CompProfile';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import Logout from './Components/Logout';
import ForgotPassword from './Components/ForgotPassword';
import CompanyRegistration from './Components/Company/CompanyRegistration';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';
import Registration from './Components/Registration';



import EditEmpNormalProfile from './Components/Edit_Components/Edit_Employee/EditEmpNormalProfile';
import EditEmpProfiles from './Components/Edit_Components/Edit_Employee/EditEmpProfiles';
import EditEmpPasswordProfile from './Components/Edit_Components/Edit_Employee/EditEmpPasswordProfile';
import EditCompPasswordSecurityQuestionAnswer from './Components/Edit_Components/Edit_Company/EditCompPasswordSecurityQuestionAnswer';


import EditCompProfiles from './Components/Edit_Components/Edit_Company/EditCompProfiles';
import EditCompPasswordProfile from './Components/Edit_Components/Edit_Company/EditCompPasswordProfile';
import EditCompNormalProfile from './Components/Edit_Components/Edit_Company/EditCompNormalProfile';
import EditEmployeesNeeded from './Components/Edit_Components/Edit_Company/EditEmployeesNeeded';
import EditEmpPasswordSecurityQuestionAnswer from './Components/Edit_Components/Edit_Employee/EditEmpPasswordSecurityQuestionAnswer';


import EmployeeSearch from './Components/EmployeeSearch';
import ByCompanyName from './Components/JobsSearchBy/ByCompanyName';
import ByJobsTypes from './Components/JobsSearchBy/ByJobsTypes';
import ByLocation from './Components/JobsSearchBy/ByLocation';
import ByOnlyWokFromHome from './Components/JobsSearchBy/ByOnlyWokFromHome';
import ByStartup from './Components/JobsSearchBy/ByStartup';

import JobSearchResultProfile from './Components/JobSearchResultProfile';
import EmployeeSearchResultProfile from './Components/EmployeeSearchResultProfile';
import { initialState, reducer } from "./Reducers/useReducer";

export const UserContext = createContext();



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>

          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} >                      </Route>
            <Route path="/CareerTips" element={<CareerTips />} >                </Route>
            <Route path="/Feedback" element={<Feedback />} >                </Route>
            <Route path="/RequestAdmin" element={<RequestAdmin />} >                </Route>
            <Route path="/ShowNewAdminRequests" element={<ShowNewAdminRequests />} >                </Route>
            <Route path="/EmployeeRegistration" element=
              {<EmployeeRegistration />} >     </Route>
            <Route path="/JobSearch" element={<JobSearch />} >                 </Route>
            <Route path="/AdminRegistration" element={<AdminRegistration />} >                 </Route>
            <Route path="/AdminRegistration" element={<AdminRegistration />} >                 </Route>
            <Route path="/AdminProfile" element={<AdminProfile />} >                   </Route>
            <Route path="/AdminMainMenu" element={<AdminMainMenu />} >                   </Route>
            <Route path="/ShowFeedbacks" element={<ShowFeedbacks />} >                   </Route>
            <Route path="/DeleteAndBlockEmployees" element={<DeleteAndBlockEmployees />} >                   </Route>
            <Route path="/DeleteAndBlockCompanies" element={<DeleteAndBlockCompanies />} >                   </Route>
            <Route path="/CompProfile" element={<CompProfile />} >                   </Route>
            <Route path="/EmpProfile" element={<EmpProfile />} >                   </Route>
            <Route path="/ByOnlyWokFromHome" element={<ByOnlyWokFromHome />} >                   </Route>
            <Route path="/JobSearchResultProfile" element={<JobSearchResultProfile />} >                   </Route>
            <Route path="/EmployeeSearchResultProfile" element={<EmployeeSearchResultProfile />} >                   </Route>
            <Route path="/ContactUs" element={<ContactUs />} >                 </Route>
            <Route path="/MustChangePasswordAfterForget" element={<MustChangePasswordAfterForget />} >                 </Route>
            <Route path="/EmployeeSearch" element={<EmployeeSearch />} >                 </Route>
            <Route path="/Login" element={<Login />} >                 </Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />} >                 </Route>


            <Route path="/EditEmpNormalProfile" element={<EditEmpNormalProfile />}>                 </Route>
            <Route path="/EditEmpPasswordProfile" element={<EditEmpPasswordProfile />}>                 </Route>
            <Route path="/EditEmpProfiles" element={<EditEmpProfiles />} >                 </Route>
            <Route path="/EditEmpPasswordSecurityQuestionAnswer" element={<EditEmpPasswordSecurityQuestionAnswer />} >                 </Route>
            <Route path="/EditCompPasswordSecurityQuestionAnswer" element={<EditCompPasswordSecurityQuestionAnswer />} >                 </Route>



            <Route path="/EditCompNormalProfile" element={<EditCompNormalProfile />} >                 </Route>
            <Route path="/EditCompPasswordProfile" element={<EditCompPasswordProfile />} >                 </Route>
            <Route path="/EditCompProfiles" element={<EditCompProfiles />} >                 </Route>
            <Route path="/EditEmployeesNeeded" element={<EditEmployeesNeeded />} >                 </Route>


            <Route path="/ByCompanyName" element={<ByCompanyName />} >                 </Route>
            <Route path="/ByJobsTypes" element={<ByJobsTypes />} >                 </Route>
            <Route path="/ByLocation" element={<ByLocation />} >                 </Route>
            <Route path="/ByStartup" element={<ByStartup />} >                 </Route>
            <Route path="/Registration" element={<Registration />} >                 </Route>
            <Route path="/Footer" element={<Footer />} >                 </Route>
            <Route path="/Logout" element={<Logout />} >                  </Route>
            <Route path="/CompanyRegistration" element={<CompanyRegistration />} >           </Route>
            <Route path="*" element={<ErrorPage />} >                 </Route>


          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
