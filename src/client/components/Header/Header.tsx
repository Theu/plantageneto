import React from "react";
import logo from "../../../assets/header.gif";
import { LogoWrapper, Logo } from "./Header.styles";

export const _Header: React.FC = () => (
    <LogoWrapper>
        <Logo src={logo} alt="il plantageneto" />
    </LogoWrapper>
);

export const Header = React.memo(_Header);
