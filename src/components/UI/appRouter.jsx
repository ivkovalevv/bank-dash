import React from "react";
import { Route, Routes} from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Transactions from "../../pages/Transactions/Transactions"
import Accounts from "../../pages/Accounts/Accounts";
import Investments from "../../pages/Investments/Investments";
import CreditCards from "../../pages/CreditCards/CreditCards";
import Loans from "../../pages/Loans/Loans";
import Services from "../../pages/Services/Services";
import Privileges from "../../pages/Privileges/Privileges";
import Setting from "../../pages/Setting/Setting";

const AppRouter = () =>{
    return(
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/transactions" element={<Transactions></Transactions>}></Route>
          <Route path="/accounts" element={<Accounts></Accounts>}></Route>
          <Route path="/investments" element={<Investments></Investments>}></Route>
          <Route path="/credit-cards" element={<CreditCards></CreditCards>}></Route>
          <Route path="/loans" element={<Loans></Loans>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/my-privileges" element={<Privileges></Privileges>}></Route>
          <Route path="/setting" element={<Setting></Setting>}></Route>
        </Routes>
    )
}

export default AppRouter