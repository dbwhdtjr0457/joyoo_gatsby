import React from "react";
import styled from "@emotion/styled";

const PROFILE_IMAGE_URL =
  "https://avatars.githubusercontent.com/u/49023654?v=4";

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_URL} alt="profile image" />;
};

export default ProfileImage;
