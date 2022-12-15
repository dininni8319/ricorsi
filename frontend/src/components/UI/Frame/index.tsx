import { Navbar, Footer, Header } from '../index';
import { ChildrenProps } from '../../interfaces/interfaces';

const Frame = ({ children }: ChildrenProps) => {
    return (
        <>
            <Navbar />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Frame;
