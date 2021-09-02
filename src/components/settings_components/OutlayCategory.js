import styled from "styled-components";
import home from "./img/home.png";
import transportation from "./img/transportation.png";
import food from "./img/food.png";
import medical from "./img/medical.png";
import pets from "./img/pets.png";
import entertaiment from "./img/entertaiment.png";

const LI = styled.div`
  display: flex;
  align-items: center;
`;

const IconCategory = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function OutlayCategory() {
  return (
    <div>
      <LI>
        <IconCategory>
          <img src={home} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Home</span>
      </LI>
      <LI>
        <IconCategory>
          <img src={transportation} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Transportation</span>
      </LI>
      <LI>
        <IconCategory>
          <img src={food} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Food</span>
      </LI>
      <LI>
        <IconCategory>
          <img src={medical} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Helth/Medical</span>
      </LI>
      <LI>
        <IconCategory>
          <img src={pets} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Pets</span>
      </LI>
      <LI>
        <IconCategory>
          <img src={entertaiment} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Entertaiment</span>
      </LI>
      <LI>
        <IconCategory>+</IconCategory>
        <span>Add new</span>
      </LI>
    </div>
  );
}
