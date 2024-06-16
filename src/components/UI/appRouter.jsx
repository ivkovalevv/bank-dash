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
          <Route exact path="/bankdash/" element={<Dashboard></Dashboard>}></Route>
          <Route exact path="/bankdash/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route exact path="/bankdash/transactions" element={<Transactions></Transactions>}></Route>
          <Route exact path="/bankdash/accounts" element={<Accounts></Accounts>}></Route>
          <Route exact path="/bankdash/investments" element={<Investments></Investments>}></Route>
          <Route exact path="/bankdash/credit-cards" element={<CreditCards></CreditCards>}></Route>
          <Route exact path="/bankdash/loans" element={<Loans></Loans>}></Route>
          <Route exact path="/bankdash/services" element={<Services></Services>}></Route>
          <Route exact path="/bankdash/my-privileges" element={<Privileges></Privileges>}></Route>
          <Route exact path="/bankdash/setting" element={<Setting></Setting>}></Route>
        </Routes>
    )
}

export default AppRouter