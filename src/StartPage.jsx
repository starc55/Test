import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/reset.css";

const StartPage = ({ onStart }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleContinue = () => {
    onStart(); // Trigger quiz start
    setIsModalVisible(false);
  };

  return (
    <div className="start-page">
      <div className="flex">
        <h1 className="welcome">Testga xush kelibsiz !</h1>
        <Button type="primary" onClick={showModal} className="start-button">
          Testni boshlash
        </Button>
      </div>

      <Modal
        title=""
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="continue" type="primary" onClick={handleContinue}>
            Davom etish ...
          </Button>,
        ]}
      >
        <h3>Qoidalar:</h3>
        <ul>
          <li>❗ Har bir savol uchun 40 sekund vaqt ajratilgan</li>
          <li>❗ Testda 25 dona savol mavjud</li>
          <li>❗ Test o'z ichiga JavaScript test savollarini olgan</li>
          <li>
            ❗ Har bir savoldagi variantni vaqt tugashidan oldin belgilang
          </li>
          <li>
            ❗ Vaqt tugagandan keyin belgilanmay qolgan savol xato deb topiladi
          </li>
          <li>
            ❗ Davom etish tugmasini bosgandan so'ng testni to'xtatib bo'lmaydi
          </li>
          <li>❗ Testni yakunlash uchun barcha savollarga javob bering</li>
          <li>
            ❗ Test yakunlangandan so'ng siz o'z javoblaringizni va natijangizni
            ko'rishingiz mumkin
          </li>
          <br />
          <li className="luck">
            Sizga <b>omad</b> tilaymiz ✔️
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default StartPage;
