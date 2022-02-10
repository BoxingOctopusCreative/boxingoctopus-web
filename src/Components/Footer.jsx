import React from 'react';
import Parser from 'html-react-parser';

const BoxingOctopusUrl = '<a href="https://boxingoctop.us" target="_blank" rel="noreferrer">Boxing Octopus Creative</a>'
const ReactUrl         = '<a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>'

export const Footer = () => (
    <div className="fixed-bottom">
        <footer className="page-footer font-small pt4">
            <div className="footer-copyright text-center py-3">
                Another fine {Parser(BoxingOctopusUrl)} Project | Built with {Parser(ReactUrl)}
            </div>
        </footer>
    </div>
);