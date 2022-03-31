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
jest.mock('./../pages/age-group-pages/FirstnSecond');

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
test("Should render 1st and 2nd grade page and header with FirstnSecond route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>FirstnSecondMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/age-group-pages/FirstnSecond']}>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("FirstnSecondMock")).toBeInTheDocument();
});

/*
TEST 3 - Third-and-Fourth-Grade page and header
*/
test("Should render 3rd and 4th grade page and header with ThirdnFourth route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>ThirdnFourthMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/age-group-pages/ThirdnFourth']}>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("ThirdnFourthMock")).toBeInTheDocument();
});

/*
TEST 4 - Fifth-and-Sixth-Grade page and header
*/
test("Should render 4th and 5th grade page and header with FifthnSixth route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>FifthnSixthMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/age-group-pages/FifthnSixth']}>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("FifthnSixthMock")).toBeInTheDocument();
});

