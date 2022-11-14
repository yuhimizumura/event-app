import React from "react"
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import {storeModel} from "../../model/reduxStore/reduxStoreModel";
import {useSelector} from "react-redux";

const CreateEvent:React.VFC = () => {

    const eventId = new Date().getTime().toString();
    const state:storeModel = useSelector((state:storeModel) => state)
    console.log(state)
    return (
        <>
         <Header />
            <div id="create-event">
                <h2>イベントの作成</h2>
                <p>{eventId}</p>
            </div>
         <Footer />
        </>
    )
}

export default CreateEvent