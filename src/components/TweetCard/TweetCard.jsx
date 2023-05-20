import {
  StyledAvatar,
  StyledCardAvatarWrapper,
  StyledCardBackground,
  StyledCardContainer,
  StyledCardLogo,
  StyledCrossLine,
  StyledFollowBtn,
  StyledInfoText,
  StyledInfoWrapper,
} from "./StyledTweetCard";

const TweetCard = () => {
  return (
    <li>
      <StyledCardContainer>
        <StyledCardLogo />
        <StyledCardBackground />
        <StyledCrossLine />
        <StyledCardAvatarWrapper>
          <StyledAvatar />
        </StyledCardAvatarWrapper>
        <StyledInfoWrapper>
          <StyledInfoText>777 Tweets</StyledInfoText>
          <StyledInfoText>100,500 Followers</StyledInfoText>
          <StyledFollowBtn>Follow</StyledFollowBtn>
        </StyledInfoWrapper>
      </StyledCardContainer>
    </li>
  );
};

export default TweetCard;
