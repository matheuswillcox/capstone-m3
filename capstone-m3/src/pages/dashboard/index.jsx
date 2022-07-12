import { Headersite } from "../../components/header";
import ModalDashBoard from "../../components/ModalDashBoard";
import UserDash from "../../components/UserDash";
import { useState } from "react";


const Dashboard = () => {
  const [showCard,setShowCard] = useState(false)
  const [objModal,setObjModal] = useState(undefined)

  return (
    <>
    <Headersite/>
    <UserDash setCard={setShowCard} setObjModal={setObjModal} card={showCard} obj={objModal}></UserDash>
    </>
  );
}

export default Dashboard
