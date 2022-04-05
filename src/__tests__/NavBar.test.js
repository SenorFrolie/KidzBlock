import React from 'react';
import App from './../App';
import Header from './../components/Header';
import NavBar from './../components/NavBar';
import SubMenu from '../components/SubMenu';
import { SidebarData } from '../components/SidebarData';
import TinderCards from './../components/TinderCards';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen, configure } from '@testing-library/react'


jest.mock('./../components/Header');
jest.mock('./../components/NavBar');
jest.mock('./../components/SubMenu');
jest.mock('./../components/SidebarData');

/*
TEST 1 - Navbar
*/
test("Should render the Navbar button and the Header", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    NavBar.mockImplementation(() => <div>NavBarMock</div>);
    //Act
    render(
        <MemoryRouter>
            <Header/>
            <NavBar/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("NavBarMock")).toBeInTheDocument();
});

/*
TEST 2 - SubMenu
*/
test("Should render the SubMenu buttons and the Header", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});

/*
TEST 2 - SubMenu, 2048 button
*/
test("Test correct route for 2048 game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/My2048']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});

/*
TEST 3 - SubMenu, Matching button
*/
test("Test correct route for matching game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Matching']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});

/*
TEST 4 - SubMenu, Spelling button
*/
test("Test correct route for spelling game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Spelling']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});

/*
TEST 5 - SubMenu, tic-tac-toe button
*/
test("Test correct route for TicTacToe game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/TicTacToe']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});

/* NOT IMPLEMENTED YET
//TEST # - SubMenu, Sliding Puzzle button

test("Test correct route for Sliding Puzzle game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/[INSERT FILE NAME]']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});
*/


/* NOT IMPLEMENTED YET
//TEST # - SubMenu, Letters button

test("Test correct route for letters game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/[INSERT FILE NAME]']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});
*/

/* NOT IMPLEMENTED YET
//TEST # - SubMenu, numbers button

test("Test correct route for numbers game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/[INSERT FILE NAME]']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});
*/

/* NOT IMPLEMENTED YET
//TEST # - SubMenu, kart button

test("Test correct route for kart game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/[INSERT FILE NAME]']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});
*/

/* NOT IMPLEMENTED YET
//TEST # - SubMenu, snake button

test("Test correct route for snake game - Should render the SubMenu buttons and the Header with the appropriate route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    SubMenu.mockImplementation(() => <div>SubMenuMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/[INSERT FILE NAME]']}>
            <Header/>
            <SubMenu/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("SubMenuMock")).toBeInTheDocument();
});
*/