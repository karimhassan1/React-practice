import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const AccodionChild = ({ name, des, isVisible, setIsVisible, hide }) => {
  return (
    <div className="border m-5 p-5 ">
      <h1 className="underline text-2xl text-gray-600">{name}</h1>
      {!isVisible && (
        <button
          className="border ps-5 pe-5 mt-5"
          onClick={() => {
            setIsVisible();
          }}
        >
          Show
        </button>
      )}
      {isVisible && (
        <button
          className="border ps-5 pe-5 mt-5"
          onClick={() => {
            hide();
          }}
        >
          Hide
        </button>
      )}

      {isVisible && <p>{des}</p>}
    </div>
  );
};

const Accodion = () => {
  const [show, isShow] = useState({
    home: false,
    about: false,
    contact: false,
  });
  return (
    <div className="max-w-[1800px] w-full">
      <AccodionChild
        name={"Home"}
        des={
          "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit voluptate commodi illo saepe. Nulla distinctio repudiandae obcaecati ipsum fugiat ea. Quia doloribus mollitia obcaecati minus similique inventore adipisci soluta? sit amet consectetur adipisicing elit. Magnam odit voluptate commodi illo saepe. Nulla distinctio repudiandae obcaecati ipsum fugiat ea. Quia doloribus mollitia obcaecati minus similique inventore adipisci soluta?"
        }
        isVisible={show.home}
        setIsVisible={() => {
          isShow({
            home: true,
            about: false,
            contact: false,
          });
        }}
        hide={() => {
          isShow({
            home: false,
            about: false,
            contact: false,
          });
        }}
      />
      <AccodionChild
        name={"About"}
        des={
          "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit voluptate commodi illo saepe. Nulla distinctio repudiandae obcaecati ipsum fugiat ea. Quia doloribus mollitia obcaecati minus similique inventore adipisci soluta? sit amet consectetur adipisicing elit. Magnam odit voluptate commodi illo saepe. Nulla distinctio repudiandae obcaecati ipsum fugiat ea. Quia doloribus mollitia obcaecati minus similique inventore adipisci soluta?"
        }
        isVisible={show.about}
        setIsVisible={() => {
          isShow({
            home: false,
            about: true,
            contact: false,
          });
        }}
        hide={() => {
          isShow({
            home: false,
            about: false,
            contact: false,
          });
        }}
      />
      <AccodionChild
        name={"Contact Us"}
        des={
          "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit voluptate commodi illo saepe. Nulla distinctio repudiandae obcaecati ipsum fugiat ea. Quia doloribus mollitia obcaecati minus similique inventore adipisci soluta? sit amet consectetur adipisicing elit. Magnam odit voluptate commodi illo saepe. Nulla distinctio repudiandae obcaecati ipsum fugiat ea. Quia doloribus mollitia obcaecati minus similique inventore adipisci soluta?"
        }
        isVisible={show.contact}
        setIsVisible={() => {
          isShow({
            home: false,
            about: false,
            contact: true,
          });
        }}
        hide={() => {
          isShow({
            home: false,
            about: false,
            contact: false,
          });
        }}
      />
    </div>
  );
};
export default Accodion;
