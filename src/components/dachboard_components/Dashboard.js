import React from "react";
import {
  InfoBlocks,
  DashboardWrapper,
  InfoBlockWrapper,
} from "./DashboardStyled";
import { Flex, TitleStyled, Img, Text } from "../common/StyledComponents";

const getDataUser = {
  name: localStorage.getItem("name"),
  surname: localStorage.getItem("surname"),
  email: localStorage.getItem("email"),
  foto: localStorage.getItem("foto"),
};

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Text fontSize="14px" lineHeight="24px" color="#707EAE">
        Hi Charles,
      </Text>
      <TitleStyled>Welcome to MONEY tracker!</TitleStyled>
      <InfoBlockWrapper>
        <InfoBlocks padding="30px 10px 0" width="43%">
          <Flex direction="column" justify="center" align="center">
            <Img
              src="https://images.pexels.com/photos/1936801/pexels-photo-1936801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile=photo"
            />
            <Text color="#1B2559" fontSize="24px" lineHeight="32px">
              Charles Robbie
            </Text>
            <Text
              color="#A3AED0"
              fontSize="14px"
              lineHeight="24px"
              weight="400"
            >
              New York, USA
            </Text>
            <Flex>
              <Flex direction="column" justify="center" align="center">
                <Text
                  color="#A3AED0"
                  fontSize="12px"
                  lineHeight="20px"
                  weight="normal"
                >
                  Activity
                </Text>
                <Text color="#1B2559" fontSize="24px" lineHeight="32px">
                  $2,513
                </Text>
              </Flex>
              <Flex direction="column" justify="center" align="center">
                <Text
                  color="#A3AED0"
                  fontSize="12px"
                  lineHeight="20px"
                  weight="normal"
                >
                  Expens
                </Text>
                <Text color="#1B2559" fontSize="24px" lineHeight="32px">
                  $1,186
                </Text>
              </Flex>
              <Flex direction="column" justify="center" align="center">
                <Text
                  color="#A3AED0"
                  fontSize="12px"
                  lineHeight="20px"
                  weight="normal"
                >
                  Income
                </Text>
                <Text color="#1B2559" fontSize="24px" lineHeight="32px">
                  $3,700
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </InfoBlocks>
        <InfoBlocks padding="30px 0 0 20px" width="43%">
          <Flex direction="column" align="start">
            <Text fontSize="20px" lineHeight="32px">
              Your transactions
            </Text>
            <Flex direction="column" margin="10% 0 0 0 " height="60%">
              <Flex align="center">
                <Img
                  height="48px"
                  width="63px"
                  src="https://images.pexels.com/photos/6588914/pexels-photo-6588914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <Flex
                  justify="center"
                  margin="0 0 0 15px"
                  direction="column"
                  align="start"
                >
                  <Text>Public Transport</Text>
                  <Text
                    color="#A3AED0"
                    fontSize="12px"
                    lineHeight="20px"
                    weight="normal"
                  >
                    22 September 2020
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center">
                <Img
                  height="48px"
                  width="63px"
                  src="https://images.pexels.com/photos/6588914/pexels-photo-6588914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <Flex
                  justify="center"
                  margin="0 0 0 15px"
                  direction="column"
                  align="start"
                >
                  <Text>Public Transport</Text>
                  <Text
                    color="#A3AED0"
                    fontSize="12px"
                    lineHeight="20px"
                    weight="normal"
                  >
                    22 September 2020
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center">
                <Img
                  height="48px"
                  width="63px"
                  src="https://images.pexels.com/photos/6588914/pexels-photo-6588914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <Flex
                  justify="center"
                  margin="0 0 0 15px"
                  direction="column"
                  align="start"
                >
                  <Text>Public Transport</Text>
                  <Text
                    color="#A3AED0"
                    fontSize="12px"
                    lineHeight="20px"
                    weight="normal"
                  >
                    22 September 2020
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            height="30px"
            justify="flex-end"
            align="center"
            margin="-60px 0 0 -60px"
          >
            <Text color="#7D6DC5">View all</Text>
          </Flex>
        </InfoBlocks>
      </InfoBlockWrapper>
      <InfoBlocks margin="0 0 95px 0" width="100%" height="400px">
        <Flex justify="center" align="center">
          графік
        </Flex>
      </InfoBlocks>
    </DashboardWrapper>
  );
}
