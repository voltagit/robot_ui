# ui

1. Install Rosbridge
   - sudo apt-get install ros-<rosdistro>-rosbridge-server

ขั้นตอนการทำให้ terminal เปิดอัตโนมัติเมื่อเปิด ubuntu  
  1. เสิช Startup Appilcation
  2. กด add
  3. ใส่คำสั่งตรงช่อง command : gnome-terminal

ขั้นตอนการทำให้ terminal roslaunch websocket.launch อัตโนมัติ
  
  1.dowload folder 1-default
  
  2.พิม gedit .bashrc ในช่อง terminal
  
  3.บรรทัดสุดท้ายให้พิม roslaunch pkg file
  
ขั้นตอนการเซตไฟล์ ui บน firefox เพื่อให้หน้า ui เเสดงบน firefox
  1.ไปที่ setting เลือก home
  
  2.ตรง Homepage and new windows เลือก custom Url
  
  3.ตรงช่องใส่ url ของไฟล์ ui (index.html ในโฟลเดอร์ 1-default) ex file:///home/billapi/ui-version1/robot_ui/1-default-v2/index.html 
  
  หา url จากการเปิด index.html บน firefox
 
  4 restart 
  
  - หน้าเว็บจะขึ้นมาอัตโนมัติเเต่จะต้องรอประมาณ 5 วินาที ก่อนจะคลิกที่รูปหน้าจอเพื่อดูข้อความ
