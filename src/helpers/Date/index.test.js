import { findByText, fireEvent, getByTestId, getByText, queryAllByTestId, queryByTestId, queryByText, render, screen } from "@testing-library/react";
import Home from "../../pages/Home/index";
import Slider from "../../containers/Slider/index";
import { MONTHS, getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", async () => {
            const date = new Date('2022-01-01');
            const month = getMonth(date);
            
            expect(month).toEqual('janvier');
            //quand getMonth est appellé et qu'on obtient 1 ou janvier : screen.getByText('janvier')
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date('2022-07-01');
            const month = getMonth(date);
            
            expect(month).toEqual('juillet');
            //quand getMonth est appellé et qu'on obtient 1 ou janvier : screen.getByText('juillet')
        });
    });
})