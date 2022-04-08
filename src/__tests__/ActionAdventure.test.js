import React from 'react';
import Header from './../components/Header';
import ActionAdventure from './../pages/category-pages/ActionAdventure';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react'

jest.mock('./../components/Header');
jest.mock('./../pages/category-pages/ActionAdventure');

/*
TEST 1 - ActionAdventure page and Header
*/
test("Should render the ActionAdventure page and the Header", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    ActionAdventure.mockImplementation(() => <div>ActionAdventureMock</div>);
    //Act
    render(
        <MemoryRouter>
            <Header/>
            <ActionAdventure/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("ActionAdventureMock")).toBeInTheDocument();
});

/*
TEST 2 - Kart button
*/
test("Testing Kart Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    ActionAdventure.mockImplementation(() => <div>ActionAdventureMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Karts']}>
            <Header/>
            <ActionAdventure/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("ActionAdventureMock")).toBeInTheDocument();
});

/*
TEST 3 - Snake button
*/
test("Testing Snake Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    ActionAdventure.mockImplementation(() => <div>ActionAdventureMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Snake']}>
            <Header/>
            <ActionAdventure/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("ActionAdventureMock")).toBeInTheDocument();
});

/*
TEST 4 - TicTacToe button
*/
test("Testing TicTacToe Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    ActionAdventure.mockImplementation(() => <div>ActionAdventureMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/TicTacToe']}>
            <Header/>
            <ActionAdventure/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("ActionAdventureMock")).toBeInTheDocument();
});