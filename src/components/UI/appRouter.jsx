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
          <Route exact path="/bank-dash/" element={<Dashboard></Dashboard>}></Route>
          <Route exact path="/bank-dash/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route exact path="/bank-dash/transactions" element={<Transactions></Transactions>}></Route>
          <Route exact path="/bank-dash/accounts" element={<Accounts></Accounts>}></Route>
          <Route exact path="/bank-dash/investments" element={<Investments></Investments>}></Route>
          <Route exact path="/bank-dash/credit-cards" element={<CreditCards></CreditCards>}></Route>
          <Route exact path="/bank-dash/loans" element={<Loans></Loans>}></Route>
          <Route exact path="/bank-dash/services" element={<Services></Services>}></Route>
          <Route exact path="/bank-dash/my-privileges" element={<Privileges></Privileges>}></Route>
          <Route exact path="/bank-dash/setting" element={<Setting></Setting>}></Route>
        </Routes>
    )
}

export default AppRouter