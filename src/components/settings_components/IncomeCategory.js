import styled from "styled-components";
import paycheck from "./img/paycheck.png";
import bonus from "./img/bonus.png";
import other from "./img/other.png";

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

export default function IncomCategory() {
  return (
    <div>
      <LI>
        <IconCategory>
          <img src={paycheck} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Paycheck</span>
      </LI>
      <LI>
        <IconCategory>
          <img src={bonus} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Bonus</span>
      </LI>
      <LI>
        <IconCategory>
          <img src={other} alt="" style={{ color: "#7D6DC5" }} />
        </IconCategory>
        <span>Others</span>
      </LI>
      <LI>
        <IconCategory>+</IconCategory>
        <span>Add new</span>
      </LI>
    </div>
  );
}
