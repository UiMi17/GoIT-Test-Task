import { styled } from "styled-components";
import { ReactComponent as CardLogo } from "../../images/CardLogo.svg";
import CardBackground from "../../images/CardBackground.png";
import CardAvatar from "../../images/TestAvatar.png";

export const StyledCardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  overflow: hidden;
`;

export const StyledCardLogo = styled(CardLogo)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const StyledCardBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${CardBackground});
  background-position: 50% 28px;
  background-repeat: no-repeat;
`;

export const StyledCrossLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 8px;
  transform: translate(-50%, -50%);
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const StyledCardAvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`;

export const StyledAvatar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 62px;
  height: 62px;
  transform: translate(-50%, -50%);
  background: url(${CardAvatar}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  border-radius: 50%;
`;

export const StyledInfoWrapper = styled.div`
  position: absolute;
  top: 284px;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 214px;
  height: 140px;
  transform: translateX(-50%);
`;

export const StyledInfoText = styled.p`
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const StyledFollowBtn = styled.button`
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
