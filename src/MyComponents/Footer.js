import React from 'react'

export const Footer = () => {
    const footerStyle = {
        position: "fixed",
        bottom: 0,
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            Copyright &copy; MyTodos.com
        </footer>
    )
}
