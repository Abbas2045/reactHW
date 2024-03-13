import './App.css'
import React, { useState } from 'react';

const WaterIntakeCalculator = () => {
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(0);

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateWaterIntake = () => {
    // คำนวณปริมาณน้ำที่ควรดื่มต่อวัน (ในลิตร)
    // จากน้ำหนักของผู้ใช้ (ในกิโลกรัม)
    // โดยแบ่งน้ำหนักต่อ 30 โลกรัม และคูณด้วย 0.033
    const intake = (weight * 2.2) * 30 / 2;
    setWaterIntake(intake.toFixed(0)); // จำกัดทศนิยมเป็นสองตำแหน่ง
  };

  return (
    <div>
      <h2 className='title1'>ควรดื้มน้ำวันละเท่าไหร่ ?</h2>
      <h2 className='title2'> x มล. </h2>
      <div className='input-btn'>
        
        <input type="number" value={weight} onChange={handleChange} 
                placeholder="น้ำหนัก (กิโลกรัม)" /> 
        <button onClick={calculateWaterIntake}>คำนวณ</button>
                {waterIntake > 0 && (
        <p>คุณควรดื่มน้ำ {waterIntake} มิลลิลิตรต่อวัน</p>
      )}
      </div>
     
    </div>
  );
};

export default WaterIntakeCalculator;
