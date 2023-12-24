import React, { useContext } from "react";
import styled from "styled-components";
import { SideNav, Nav, NavContext } from "react-sidenav";
import { homeOutline as homeIcon } from "react-icons-kit/typicons/homeOutline";
import { home as homeSelectedIcon } from "react-icons-kit/typicons/home";
import { hashtag as exploreIcon } from "react-icons-kit/ikons/hashtag";
import { heartOutline as notificationIcon } from "react-icons-kit/typicons/heartOutline";
import { heart as notificationIconSelected } from "react-icons-kit/typicons/heart";
import { mail as messagesIcon } from "react-icons-kit/typicons/mail";
import { bookmark as bookmarkIcon } from "react-icons-kit/typicons/bookmark";
import { Icon } from "react-icons-kit";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  background: rgb(24, 36, 48);
  width: 240px;
  height: 360px;
  color: #fff;
  font-size: 1em;
  padding: 24px 0px;
 position:absolute;
 height:100%;
`;

const OuterCont = styled.div`
  display: flex;
`;

const FlexCont = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 22px;
  color: ${(props) => (props.selected ? "rgb(29, 161, 242)" : "inherit")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 6px;
  border-radius: 9999px;
  &:hover {
    background: rgba(29, 161, 242, 0.1);
    color: rgb(29, 161, 242) !important;
  }
`;

const IconCont = styled.div`
  color: ${(props) => (props.selected ? "rgb(29, 161, 242)" : "inherit")};
  line-height: 16px;
`;

const TextCont = styled.div`
  padding-left: 18px;
  line-height: 22px;
  letter-spacing: 1px;
`;

const NavItem = (props) => {
  
  const context = useContext(NavContext);
  const icon = context.selected ? props.selectedIcon || props.icon : props.icon;

  return (
    <OuterCont>
      <FlexCont selected={context.selected}>
        <IconCont selected={context.selected}>
          <Icon size={24} icon={icon} />
        </IconCont>
        <TextCont>{props.title}</TextCont>
      </FlexCont>
    </OuterCont>
  );
};

export const SideBar = () => {
  return (
    <Container>
      <SideNav defaultSelectedPath="1">
        <Nav id="1">
          <NavItem
            icon={homeIcon}
            selectedIcon={homeSelectedIcon}
            title={"Home"}
          />
        </Nav>
        <Nav id="2">
          <NavLink to="manage-roles"><NavItem icon={exploreIcon} title={"Manage Roles"} /></NavLink>
        </Nav>
        <Nav id="3">
          <NavItem
            icon={notificationIcon}
            selectedIcon={notificationIconSelected}
            title={"Notification"}
          />
        </Nav>
        <Nav id="4">
        <NavLink to="/my-projects"> <NavItem icon={messagesIcon} title={"My Projects"} /></NavLink>
        </Nav>
        <Nav id="5">
        <NavLink to="/my-tickets"><NavItem icon={bookmarkIcon} title={"Bookmarks"}/></NavLink>
        </Nav>
      </SideNav>
    </Container>
  );
};
