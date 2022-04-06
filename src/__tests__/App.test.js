import React from 'react';
import App from './../App';
import Header from './../components/Header';
import TinderCards from './../components/TinderCards';
//import FirstnSecond from './../pages/age-group-pages/FirstnSecond';
//import ThirdnFourth from './../pages/age-group-pages/ThirdnFourth';
//import FifthnSix from './../pages/age-group-pages/FifthnSix';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen, configure } from '@testing-library/react'


jest.mock('./../components/Header');
jest.mock('./../components/TinderCards');
jest.mock('./../pages/age-group-pages/ActionAdventure');
jest.mock('./../pages/age-group-pages/LettersNumbers');
jest.mock('./../pages/age-group-pages/Puzzles');

/*
TEST 1 - Home page and header
*/
test("Should render home page and header with default route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>HomePageMock</div>);
    //Act
    render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
});

/*
TEST 2 - First-and-Second-Grade page and header
*/
test("Should render ActionAdventure page and header with ActionAdventure route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>ActionAdventureMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/age-group-pages/ActionAdventure']}>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("ActionAdventureMock")).toBeInTheDocument();
});

/*
TEST 3 - Third-and-Fourth-Grade page and header
*/
test("Should render LettersNumbers page and header with LettersNumbers route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>LettersNumbersMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/age-group-pages/LettersNumbers']}>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("LettersNumbersMock")).toBeInTheDocument();
});

/*
TEST 4 - Fifth-and-Sixth-Grade page and header
*/
test("Should render Puzzles page and header with Puzzles route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>PuzzlesMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/age-group-pages/Puzzles']}>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PuzzlesMock")).toBeInTheDocument();
});

