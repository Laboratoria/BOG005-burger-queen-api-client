import { render, fireEvent, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Login from '../routes/Login'
import loginUser from '../helpers/axios'

jest.mock('../helpers/axios')

describe('pruebas componente Login', () => {

    render(<Login />, {wrapper: BrowserRouter})

    test('Login exitoso', async() => {

        loginUser.mockResolvedValueOnce({
            accesToken: 'XXXXXXXXX',
                          user: {
                            email:'prueba@prueba.com',
                            id: '10',
                            role: 'Chef',
        }
    })

        const inputEmail = screen.getByTestId('login-email-input')
        fireEvent.change(inputEmail, {target: {value: 'prueba@prueba.com'}})

        const inputPassword = screen.getByTestId('login-password-input')
        fireEvent.change(inputPassword, {target: {value: '123456'}})

        const buttonSubmit = screen.getAllByTestId('login-button')
        fireEvent.click(buttonSubmit)

        await waitFor(() => {
            expect(loginUser).toHaveBeenCalledTimes(1)
        })
        

    })

})